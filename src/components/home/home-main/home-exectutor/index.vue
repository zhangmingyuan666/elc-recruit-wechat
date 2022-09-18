<template>
  <view class="h-16" @click="scanCodeEvent">
    <MingCard>
      <template v-slot>
        <view class="flex flex-start">
          <view class="h-8 w-8 rounded-full bg-white flex-center mr-2">
            <nut-icon name="scan2" size="16"></nut-icon>
          </view>
          <text class="text-sm flex-center">扫一扫，告诉我们你到了</text>
        </view>
      </template>
      <template v-slot:executor>
        <nut-button plain>扫一扫</nut-button>
      </template>
    </MingCard>
  </view>
</template>

<script setup>
import MingCard from "@/base-ui/card";
import useWechat from "@/hooks/wechat-hooks";
const { permitScanQRCode } = useWechat();

const scanCodeEvent = async () => {
  const res = await permitScanQRCode();
};
</script>
