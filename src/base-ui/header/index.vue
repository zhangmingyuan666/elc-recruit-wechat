<template>
  <view
    class="relative bg-gray-100 w-full"
    :style="{ height: titleHeight + 'px' }"
  >
    <view class="absolute flex items-center w-full" :style="titleStyle">
      <view class="w-30 h-full">
        <view class="pl-4 h-full">
          <slot name="left">
            <nut-icon name="left" size="16" v-if="!logo" @click="navigateBack">
            </nut-icon
          ></slot>
        </view>
      </view>
      <view class="flex-1 flex justify-center h-full">
        <image
          v-if="logo"
          src="@/assets/img/logo.png"
          :style="logoStyle"
        ></image>
        <view v-else>{{ title }}</view>
      </view>
      <view class="w-30 h-full"></view>
    </view>
  </view>
</template>

<script setup>
import { computed, defineProps } from "vue";
import Taro from "@tarojs/taro";
import useDeviceInfo from "@/hooks/device-hooks";

const props = defineProps({
  logo: Boolean,
  title: String,
  shareAdmit: Boolean,
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

const navigateBack = () => {
  Taro.navigateBack();
};
</script>
