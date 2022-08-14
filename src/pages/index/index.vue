<template>
  <view class="index">
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
    <HomeWelcome />
    <HomeMain />
  </view>
</template>

<script setup>
import MingHeader from "@/base-ui/header";
import HomeWelcome from "@/components/home/home-welcome";
import HomeMain from "@/components/home/home-main";
import useWechat from "@/hooks/wechat-hooks";
const { permitSharePage } = useWechat();
permitSharePage();
</script>
