import CommonRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import "./axios-adaptor"; // 用于更改adaptor适配器

export const commonRequest = new CommonRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 用于提供函数重载
    requestInterceptors: (config) => {
      // const token = localCache.getCache("token");

      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }

      return config;
    },

    requestInterceptorsCatch: (err) => {
      return err;
    },

    responseInterceptors: (res) => {
      return res;
    },

    responseInterceptorsCatch: (err) => {
      return err;
    },
  },
});
