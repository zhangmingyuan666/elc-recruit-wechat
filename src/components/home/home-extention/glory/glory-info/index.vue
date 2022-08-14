<template>
  <p :style="{ 'text-indent': '2em' }">
    {{ info.content }}
  </p>
  <nut-divider></nut-divider>
  <view>
    <template v-for="award of info.list" :key="award">
      <view
        class="flex flex-row py-2"
        :style="{ borderBottom: '2px solid #ccc' }"
      >
        <text class="px-2">👉</text> {{ award }}</view
      >
    </template>
  </view>
</template>

<script setup>
import { defineProps } from "vue";

const prop = defineProps({
  info: () => {},
});
</script>
