import Taro from "@tarojs/taro";
import axios from "axios";
import { DEFAULT_SHOWLOADING } from "./config";

class CommonRequest {
  instance; // axios实例
  showLoading; // 用于是否进行loading的管理
  interceptors; // 是否有自己的拦截器
  constructor(config) {
    this.instance = axios.create(config);

    this.showLoading = config.showLoading ?? DEFAULT_SHOWLOADING;

    this.interceptors = config.interceptors;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );

    // 默认拦截器的执行时机晚于自定义拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有实例请求拦截成功");

        if (this.showLoading) {
          Taro.showLoading(option);
        }

        return config;
      },
      (err) => {
        console.log("所有实例请求拦截失败");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有实例res拦截成功");
        if (this.showLoading) {
          Taro.hideLoading();
        }
        console.log("12313213");
        console.log(res);
        console.log(res.data.data);
        if (res.data.code === 200) {
          Taro.showToast({
            title: res.data.msg,
            duration: 1500,
          });
        }
        return res.data.data;
      },
      (err) => {
        console.log("所有实例res拦截失败");
        if (this.showLoading) {
          Taro.hideLoading();
        }
        return err;
      }
    );
  }

  // 一个正经的请求接口
  request(config) {
    return new Promise((reslove, reject) => {
      //如果有自己的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            config = config.interceptors.responseInterceptors(config);
          }
          reslove(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.request({ ...config, method: "POST" });
  }
  put(config) {
    return this.request({ ...config, method: "PUT" });
  }
}

export default CommonRequest;
