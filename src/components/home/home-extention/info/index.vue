<template>
  <HomeExtentionDetailPage :config="INFO_BANNER">
    <rich-text :nodes="INFO_BANNER.content" type="text"> </rich-text>
  </HomeExtentionDetailPage>
</template>

<script setup>
import { HomeExtentionDetailPage } from "../common";
import { INFO_BANNER } from "../config";
</script>
