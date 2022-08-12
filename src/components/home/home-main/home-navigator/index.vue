<template>
  <view class="h-40 mt-2 ml-2">
    <scroll-view class="w-full h-full" :scroll-x="true">
      <view
        class="flex flex-row space-between inline-block h-full"
        :style="{ minWidth: '450px', width: '120%' }"
      >
        <template
          v-for="(navigatorInfo, index) of navigatorInfoList"
          :key="navigatorInfo.title"
        >
          <HomeNavigatorItem :info="navigatorInfo" />
          <view
            v-if="index !== navigatorInfoList.length - 1"
            class="h-full bg-gray-200 w-px"
          ></view>
        </template>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { navigatorInfoList } from "./config";
import HomeNavigatorItem from "./home-navigator-item";
</script>
