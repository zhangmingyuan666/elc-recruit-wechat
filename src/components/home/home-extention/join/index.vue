<!--
 * @Date: 2022-08-14 15:17:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-01 23:42:51
 * @FilePath: \gdutelc-recruit-wechat\src\components\home\home-extention\join\index.vue
-->
<template>
  <HomeExtentionDetailPage :config="JOIN_BANNER">
    <view class="mb-4">
      <view class="text-2xl">2022保研去向</view>
      <div
        class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md h-1 my-2"
      ></div>
      <view v-for="item of nbClassmate" :key="item.name">
        <text
          ><text class="pr-4">👉</text>{{ item.name }}
          <text>{{ item.goal }}</text>
        </text></view
      >
    </view>
    <view class="mb-4">
      <view class="title text-2xl">2022参赛作品</view>
      <div
        class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md h-1 my-4"
      ></div>
      <view v-for="item of competition" :key="item.name">
        <view
          class="flex justify-center items-center text-2xl my-2 text-center w-full"
          >{{ item.title }}</view
        >
        <span :style="{ textIndent: '2em' }">{{ item.desc }}</span>
        <view class="my-4">
          <template v-for="pic of item.pics" :key="pic">
            <img
              :src="pic"
              :style="{ width: '80%', maxWidth: '250px', margin: '0 auto' }"
              mode="widthFix"
            />
          </template>
        </view>
      </view>
    </view>
  </HomeExtentionDetailPage>
</template>

<script setup>
import { JOIN_BANNER } from "../config";
import { nbClassmate, competition } from "./data";
import { HomeExtentionDetailPage } from "../common";
</script>
