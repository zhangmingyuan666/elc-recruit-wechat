<template>
  <view
    :style="{ marginTop: '-50px' }"
    class="mx-2 mb-4 bg-white shadow-md rounded-lg"
  >
    <PersonalAvator></PersonalAvator>
  </view>

  <PersonalStatus></PersonalStatus>
  <PersonalStep></PersonalStep>
</template>

<script setup>
import PersonalAvator from "./personal-avator";
import PersonalStatus from "./personal-status";
import PersonalStep from "./personal-step";
</script>
