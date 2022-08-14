<template>
  <view
    class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md"
  >
    <MingHeader class="bg-transparent" />
    <view class="h-50 flex justify-start items-end">
      <view class="text-white ml-6 mb-6">
        <p class="text-6xl my-4 font-light">{{ title }}</p>
        <p class="text-gray-200">{{ "👆" + desc }}</p>
      </view>
    </view>
  </view>
</template>

<script setup>
import { defineProps } from "vue";
import MingHeader from "@/base-ui/header";
const props = defineProps({
  title: String,
  desc: String,
});
</script>
