<template>
  <view class="h-16">
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
import { computed, ref } from "vue";
import MingCard from "@/base-ui/card";
import { tagConfig } from "./tagconfig";

const tagStatus = ref(0);
const tagInfo = computed(() => tagConfig[tagStatus.value]);
</script>
