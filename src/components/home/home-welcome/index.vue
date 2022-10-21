<!--
 * @Date: 2022-08-12 01:58:46
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-01 23:32:14
 * @FilePath: \gdutelc-recruit-wechat\src\components\home\home-welcome\index.vue
-->
<template>
  <image
    class="w-full"
    mode="widthFix"
    :src="BANNER_IMG_URL"
    :onLoad="setLoading"
  ></image>
</template>

<script setup>
import { BANNER_IMG_URL } from "@/base-config";
import Taro from "@tarojs/taro";
Taro.showLoading({
  title: "加载中",
});
const setLoading = () => {
  Taro.hideLoading();
};
</script>
