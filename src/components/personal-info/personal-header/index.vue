<template>
  <view class="h-35 bg-gray-100">
    <MingHeader>
      <template v-slot:left>
        <view class="h-full flex flex-col items-start justify-center">
          <nut-icon name="share" size="16"></nut-icon>
        </view>
      </template>
    </MingHeader>
  </view>
</template>

<script setup>
import MingHeader from "@/base-ui/header";
</script>
