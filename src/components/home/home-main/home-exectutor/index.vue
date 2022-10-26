<!--
 * @Date: 2022-08-12 18:44:51
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-26 16:39:48
 * @FilePath: \gdutelc-recruit-wechat\src\components\home\home-main\home-exectutor\index.vue
 * @description: none
-->
<template>
  <view class="h-16" @click="scanCodeEvent">
    <MingCard>
      <template v-slot>
        <view class="flex flex-start">
          <view class="h-8 w-8 rounded-full bg-white flex-center mr-2">
            <nut-icon name="scan2" size="16"></nut-icon>
          </view>
          <text class="text-sm flex-center">扫一扫，告诉我们你到了</text>
        </view>
      </template>
      <template v-slot:executor>
        <nut-button plain>扫一扫</nut-button>
      </template>
    </MingCard>
  </view>
</template>

<script setup>
import MingCard from "@/base-ui/card";
import useWechat from "@/hooks/wechat-hooks";
import Taro from "@tarojs/taro";
import { computed } from "vue";
import { useStore } from "vuex";
import { putPersonalSignIn } from "@/service/personal";
const { permitScanQRCode, getMessage } = useWechat();
const store = useStore();
const openid = computed(() => store.state.openid);

const scanCodeEvent = async () => {
  try {
    await getMessage();

    const qrCodeResult = await permitScanQRCode();
    console.log(qrCodeResult);
    const res = await putPersonalSignIn(openid.value, qrCodeResult);

    console.log("res", res);
    if (res.data?.code === 200) {
      // 此时说明更改成功
      Taro.showToast({
        title: "扫码签到成功",
        icon: "success",
        duration: 2000,
      });
    } else {
      throw new Error(res.msg);
    }
  } catch (err) {
    Taro.showToast({
      title: err.message ?? "扫码签到失败",
      icon: "error",
      duration: 2000,
    });
  }
};
</script>
