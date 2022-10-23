<!--
 * @Date: 2022-08-13 23:59:00
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-23 12:31:30
 * @FilePath: \gdutelc-recruit-wechat\src\components\personal-info\personal-profile\index.vue
 * @description: none
-->
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
    <PersonalExitLogin></PersonalExitLogin>
  </template>
  <template v-else>
    <nut-empty description="需要提交报名表后才可查看此处的功能">
      <template #image>
        <img
          src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png"
          class="border-0"
        />
      </template>
    </nut-empty>
  </template>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PersonalAvator from "./personal-avator";
import PersonalStatus from "./personal-status";
import PersonalStep from "./personal-step";
import PersonalExitLogin from "./exit-login";
const store = useStore();
const isLogin = computed(() => store.state.openid);
</script>
