<template>
  <view class="index">
    <MingHeader logo></MingHeader>
    <HomeWelcome />
    <HomeMain />
  </view>
</template>

<script setup>
import MingHeader from "@/base-ui/header";
import HomeWelcome from "@/components/home/home-welcome";
import HomeMain from "@/components/home/home-main";
</script>
