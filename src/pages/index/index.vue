<template>
  <view class="index">
    <MingHeader logo></MingHeader>
    <HomeWelcome />

    <view
      >123<nut-button type="primary" class="h-full w-full"
        >主要按钮</nut-button
      ></view
    >
  </view>
</template>

<script setup>
import { ref } from "vue";
import MingHeader from "@/base-ui/header";
import HomeWelcome from "@/components/home/home-welcome/index.vue";
const msg = ref("Hello world");
console.log(123);
</script>
