<!--
 * @Date: 2022-10-23 12:30:45
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-23 12:51:05
 * @FilePath: \gdutelc-recruit-wechat\src\components\personal-info\personal-profile\exit-login\index.vue
 * @description: none
-->
<template>
  <div class="flex justify-center items-center">
    <span type="danger" @tap="exit" class="my-5 text-red-800">退出登录</span>
  </div>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { useStore } from "vuex";

const store = useStore();
const exit = () => {
  Taro.clearStorageSync();
  store.commit("changeOpenid", ""); // 更改
};
</script>

<style lang="scss" scoped></style>
