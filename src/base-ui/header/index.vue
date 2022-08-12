<template>
  <view class="relative bg-gray-100" :style="{ height: titleHeight + 'px' }">
    <view class="absolute flex items-center w-full" :style="titleStyle">
      <view class="w-10">
        <text class="pl-4">{{ "" }}</text>
      </view>
      <view class="flex-1 flex justify-center">
        <image
          v-if="logo"
          src="@/assets/img/logo.png"
          :style="logoStyle"
        ></image>
        <view v-else>{{ title }}</view>
      </view>
      <view class="w-10"></view>
    </view>
  </view>
</template>

<script setup>
import { computed, defineProps } from "vue";
import useDeviceInfo from "@/hooks/device-hooks";

const props = defineProps({
  logo: Boolean,
  title: String,
});
const { titleHeight, capsuleObj } = useDeviceInfo();

const titleStyle = computed(() => {
  return {
    top: capsuleObj.top + "px",
    height: capsuleObj.height + "px",
  };
});

const logoStyle = computed(() => ({
  height: capsuleObj.height + "px",
  width: capsuleObj.height + "px",
}));
</script>
