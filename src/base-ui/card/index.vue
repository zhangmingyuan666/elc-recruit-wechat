<template>
  <view class="mx-2 mt-2 px-2 bg-gray-100 rounded-lg">
    <view class="h-16 flex justify-between items-center">
      <slot name="default"></slot>
      <slot name="executor"></slot>
    </view>
    <slot name="extand"></slot>
  </view>
</template>

<script setup></script>
