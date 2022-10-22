<!--
 * @Date: 2022-08-11 22:51:17
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-22 22:13:01
 * @FilePath: \gdutelc-recruit-wechat\src\pages\form\index.vue
 * @description: none
-->
<template>
  <view>
    <MingHeader logo></MingHeader>
    <MainForm :formConfig="formConfig" v-if="1"></MainForm>
    <!-- <template v-else>
      <nut-empty description="还未到报名时间">
        <template #image>
          <img
            src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png"
            class="border-0"
          />
        </template>
      </nut-empty>
    </template> -->
  </view>
</template>

<script setup>
import MingHeader from "@/base-ui/header";
import MainForm from "@/components/form/main-form";
import { formConfig } from "./config";
</script>
