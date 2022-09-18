<template>
  <MingCard>
    <template v-slot>
      <view class="flex flex-start">
        <view class="h-8 w-8 rounded-full bg-white flex-center mr-2">⏳</view>
        <text class="text-sm flex-center">当前进度</text>
      </view>
    </template>
    <template v-slot:extand>
      <view>
        <view v-if="currentStepIndex !== -1">
          <view class="h-100 px-2">
            <nut-steps
              direction="vertical"
              progress-dot
              :current="currentStepIndex + 1"
            >
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
        </view>

        <view v-else>
          <nut-empty
            description="很抱歉，你没有通过这次的面试，希望你以后继续努力，坚持学习，我们还会相见。"
          >
            <template #image>
              <img
                src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png"
                class="border-0"
              />
            </template>
          </nut-empty>
        </view>
      </view>
    </template>
  </MingCard>
</template>

<script setup>
import MingCard from "@/base-ui/card";
import { stepsList } from "./step-config";
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getInterviewStatus");
});

const currentStepIndex = computed(() => store.getters.getStatus);

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
