<template>
  <view class="bg-gray-100">
    <HomeExtentionBanner :title="JOIN_BANNER.title" :desc="JOIN_BANNER.desc" />
    <view class="mx-4 mt-4 p-4 rounded-lg bg-white"> </view>
  </view>
</template>

<script setup>
import { HomeExtentionBanner } from "../common";
import { JOIN_BANNER } from "../config";
</script>
