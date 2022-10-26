/*
 * @Date: 2022-08-30 13:49:55
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-25 17:19:32
 * @FilePath: \gdutelc-recruit-wechat\src\utils\cache.js
 * @description: none
 */
import Taro from "@tarojs/taro";

class LocalCache {
  getCache(key) {
    const value = Taro.getStorageSync(key);
    if (value) {
      return JSON.parse(value);
    } else {
      console.warn("没有获取到内存");
    }
  }

  setCache(key, value) {
    Taro.setStorageSync(key, JSON.stringify(value));
  }
}

export default new LocalCache();
