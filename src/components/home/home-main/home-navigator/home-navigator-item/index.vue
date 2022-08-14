<template>
  <view
    class="flex-1 flex flex-col justify-center items-center px-2 text-center"
    @click="navigate(info.name)"
  >
    <p class="text-2xl my-2">{{ info.icon }}</p>
    <p class="text-xl">{{ info.title }}</p>
    <p class="text-sm text-gray-400">{{ info.content }}</p>
  </view>
</template>

<script setup>
import { defineProps } from "vue";
import Taro from "@tarojs/taro";
const props = defineProps({
  info: () => {},
});

const navigate = (name) => {
  const path = `/pages/index/home-extention/${name}/index`;

  Taro.navigateTo({
    url: path,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
