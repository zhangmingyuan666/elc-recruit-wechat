<template>
  <view class="bg-gray-100">
    <HomeExtentionBanner :title="config.title" :desc="config.desc" />
    <view
      class="mx-4 mt-4 p-4 rounded-lg bg-gray-200 tracking-widest shadow-lg leading-8 text-gray-600"
    >
      <slot></slot>
    </view>

    <nut-divider class="my-10"></nut-divider>
  </view>
</template>

<script setup>
import { defineProps } from "vue";
import { HomeExtentionBanner } from "../index";
const props = defineProps({
  config: () => {},
});
</script>
