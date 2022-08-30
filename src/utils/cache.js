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
    if (value) Taro.setStorageSync(key, JSON.stringify(value));
  }
}

export default new LocalCache();
