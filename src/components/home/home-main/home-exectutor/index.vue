<!--
 * @Date: 2022-08-12 18:44:51
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-22 23:27:06
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
const { permitScanQRCode } = useWechat();
const store = useStore();
const openid = computed(() => store.state.openid);

const scanCodeEvent = async () => {
  try {
    const ans = await wx.requestSubscribeMessage({
      tmplIds: ["i5rbTJ70IEajfuWmYG7jCeE4fsh3c9fZ1aqkQY3Cqos"],
    });
    if (Object.values(ans).includes("reject")) {
      Taro.showToast({
        title: "必须要允许通知才可以收到面试信息",
        icon: "error",
        duration: 2000,
      });
      return;
    }

    const qrCodeResult = await permitScanQRCode();
    console.log(qrCodeResult);
    const res = await putPersonalSignIn(openid.value, qrCodeResult);
    if (res.data.code === 200) {
      // 此时说明更改成功
      Taro.showToast({
        title: "扫码签到成功",
        duration: 2000,
      });
    }
  } catch (err) {
    Taro.showToast({
      title: "扫码签到失败",
      icon: "error",
      duration: 2000,
    });
  }
};
</script>
