<template>
  <view class="index">
    <text class="text-red-600">personalinfo</text>
  </view>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const msg = ref("Hello world");
    console.log(123);
    return {
      msg,
    };
  },
};
</script>
