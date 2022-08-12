<template>
  <view
    class="flex-1 flex flex-col justify-center items-center px-2 text-center"
  >
    <p class="text-2xl my-2">{{ info.icon }}</p>
    <p class="text-xl">{{ info.title }}</p>
    <p class="text-sm text-gray-400">{{ info.content }}</p>
  </view>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  info: () => {},
});
</script>
