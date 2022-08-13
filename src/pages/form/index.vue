<template>
  <view class="">
    <MingHeader logo></MingHeader>
    <input type="text" />
    <MainForm :formConfig="formConfig"></MainForm>
  </view>
</template>

<script setup>
import MingHeader from "@/base-ui/header";
import MainForm from "@/components/form/main-form";
import { formConfig } from "./config";
</script>
