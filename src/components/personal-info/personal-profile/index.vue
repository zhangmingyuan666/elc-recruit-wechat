<template>
  <template v-if="isLogin">
    <view
      :style="{ marginTop: '-50px' }"
      class="mx-2 mb-4 bg-white shadow-md rounded-lg"
    >
      <PersonalAvator></PersonalAvator>
    </view>

    <PersonalStatus></PersonalStatus>
    <PersonalStep></PersonalStep>
  </template>
  <template v-else> 您还没有登录 </template>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PersonalAvator from "./personal-avator";
import PersonalStatus from "./personal-status";
import PersonalStep from "./personal-step";
const store = useStore();
const isLogin = computed(() => store.state.openid);
</script>
