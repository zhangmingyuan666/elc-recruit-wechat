<template>
  <view class="h-35 bg-gray-100">
    <MingHeader logo>
      <template v-slot:left>
        <view
          class="h-full flex flex-col items-start justify-center"
          @click="abc"
        >
          <button open-type="share">
            <nut-icon name="share" size="16" class="p-2"></nut-icon>
          </button>
        </view>
      </template>
    </MingHeader>
  </view>
</template>

<script setup>
import MingHeader from "@/base-ui/header";
import useWechat from "@/hooks/wechat-hooks";

const { permitSharePage } = useWechat();
permitSharePage();

const abc = () => {};
</script>
