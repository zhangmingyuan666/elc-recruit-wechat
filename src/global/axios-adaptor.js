/*
 * @Date: 2022-08-30 12:55:07
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-23 14:41:57
 * @FilePath: \gdutelc-recruit-wechat\src\global\axios-adaptor.js
 * @description: none
 */
import axios from "axios";
import Taro from "@tarojs/taro";

// 在这里配置axios of uniapp
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    var settle = require("axios/lib/core/settle");
    var buildURL = require("axios/lib/helpers/buildURL");

    Taro.request({
      method: config.method.toUpperCase(),
      url:
        config.baseURL +
        buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      timeout: config.timeout,
      complete: function complete(response) {
        // console.log("执行完成：", response)
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config,
        };

        console.log(config);
        console.log("this is adapator");
        settle(resolve, reject, response);
      },
    });
  });
};
