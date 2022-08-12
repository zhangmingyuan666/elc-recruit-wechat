<template>
  <view
    class="mx-2 mt-2 px-2 bg-gray-100 h-16 flex justify-between items-center rounded-lg"
  >
    <view class="flex flex-start">
      <view class="h-8 w-8 rounded-full bg-white flex-center mr-2"
        ><nut-icon name="scan2" size="16"></nut-icon
      ></view>
      <text class="text-sm flex-center">扫一扫，告诉我们你到了</text>
    </view>

    <nut-button plain :style="{ height: '1.5rem', width: '3rem' }"
      >扫一扫</nut-button
    >
  </view>
</template>

<script setup></script>
