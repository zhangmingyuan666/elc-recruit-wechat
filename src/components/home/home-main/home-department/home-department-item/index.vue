<template>
  <view class="w-full">
    <image
      mode="widthFix"
      :src="require(`@/assets/img/department-logo/0${index}.png`)"
      class="w-full"
    ></image>
    <p class="text-xl">{{ department.name }}</p>
    <p class="text-sm text-gray-400">{{ department.desc }}</p>
  </view>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  department: () => {},
  index: Number,
});
</script>
