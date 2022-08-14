<template>
  <MingCard>
    <template v-slot>
      <view class="flex flex-start">
        <view class="h-8 w-8 rounded-full bg-white flex-center mr-2">⏳</view>
        <text class="text-sm flex-center">当前进度</text>
      </view>
    </template>
    <template v-slot:extand>
      <view class="h-100 px-2">
        <nut-steps direction="vertical" progress-dot current="2">
          <template v-for="(step, index) of stepsList" :key="step.content">
            <nut-step :title="caculateTitle(index)">
              <template v-slot:content>
                <p>{{ step.content }}</p>
                <p v-if="step.address">{{ step.address }}</p>
              </template>
            </nut-step>
          </template>
        </nut-steps>
      </view>
    </template>
  </MingCard>
</template>

<script setup>
import MingCard from "@/base-ui/card";
import { stepsList } from "./step-config";
import { ref } from "vue";

const currentStepIndex = ref(1);

const caculateTitle = (index) => {
  if (currentStepIndex.value > index) {
    return "已结束";
  } else if (currentStepIndex.value === index) {
    return "进行中";
  } else {
    return "未开始";
  }
};
</script>
