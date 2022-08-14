<template>
  <view @click="$emit('close')"> </view>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["close"]);
const props = defineProps({
  show: Boolean,
  content: () => {},
});
</script>
