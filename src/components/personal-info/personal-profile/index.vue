<template>
  <view
    :style="{ marginTop: '-50px' }"
    class="mx-4 bg-white shadow-md rounded-lg"
  >
    <personal-avator></personal-avator>
    <personal-status></personal-status>
    <personal-step></personal-step>
  </view>
</template>

<script setup>
import PersonalAvator from "./personal-avator";
import PersonalStatus from "./personal-status";
</script>
