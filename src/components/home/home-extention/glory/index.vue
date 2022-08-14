<template>
  <HomeExtentionDetailPage :config="GLORY_BANNER">
    <GloryInfo :info="GLORY_BANNER.content" />
  </HomeExtentionDetailPage>
</template>

<script setup>
import { HomeExtentionDetailPage } from "../common";
import GloryInfo from "./glory-info";
import { GLORY_BANNER } from "../config";
</script>
