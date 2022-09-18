<template>
  <view class="flex flex-row p-4">
    <nut-avatar size="large" :icon="store.getters.getAvatar"></nut-avatar>
    <view class="flex flex-col justify-around px-4">
      <view class="text-xl">{{ store.getters.getNickname }}</view>
      <view class="text-sm text-gray-400">欢迎关注：GDUTDays</view>
    </view>
  </view>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
