<!--
 * @Date: 2022-08-14 09:37:06
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-26 10:12:24
 * @FilePath: \gdutelc-recruit-wechat\src\components\personal-info\personal-profile\personal-status\index.vue
-->
<template>
  <view class="h-16 my-4">
    <MingCard>
      <template v-slot>
        <view class="flex flex-start">
          <view class="h-8 w-8 rounded-full bg-white flex-center mr-2">
            🙋‍♀️
          </view>
          <text class="text-sm flex-center">您当前的状态</text>
        </view>
      </template>
      <template v-slot:executor>
        <nut-tag :type="tagInfo.type" :plain="tagInfo.plain">{{
          tagInfo.content
        }}</nut-tag>
      </template>
    </MingCard>
  </view>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import MingCard from "@/base-ui/card";
import { tagConfig } from "./tagconfig";
import { getSignInStatus } from "@/service/personal";
import { useStore } from "vuex";
import { createInterval } from "@/utils/intervals";

const store = useStore();
const tagStatus = computed(() => store.state.signInStatus);
const tagInfo = computed(() => tagConfig[tagStatus.value ?? 0]);

onMounted(() => {
  store.dispatch("getSignInStatusAction");
});

// 轮询签到状态，5s一次
createInterval(() => {
  store.dispatch("getSignInStatusAction");
}, 5000);
// setInterval(() => {
//   store.dispatch("getSignInStatusAction");
// }, 5000);
</script>
