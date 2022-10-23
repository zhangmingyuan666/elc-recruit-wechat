<!--
 * @Date: 2022-08-14 00:12:56
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-23 12:54:07
 * @FilePath: \gdutelc-recruit-wechat\src\components\personal-info\personal-profile\personal-avator\index.vue
 * @description: none
-->
<template>
  <view class="flex flex-row p-4">
    <nut-avatar size="large" :icon="avatarUrl"></nut-avatar>
    <view class="flex flex-col justify-around px-4">
      <view class="text-xl">{{ nickName }}</view>
      <view class="text-sm text-gray-400">欢迎关注：GDUTDays</view>
    </view>
  </view>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const nickName = computed(() => {
  return store.state.nickName;
});

const avatarUrl = computed(() => {
  return store.state.avatarUrl;
});
const store = useStore();
</script>
