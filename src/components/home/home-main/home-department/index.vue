<template>
  <view
    class="relative flex justify-around flex-wrap px-2 mt-4"
    :border="false"
  >
    <template
      v-for="(department, index) of departmentList"
      :key="department.desc"
    >
      <view class="mt-4" @click="openWithBindObj(index)">
        <share-element
          mapkey="name"
          class="share-ele"
          :duration="shareElementConfig.duration"
          :transform="transformIndex === index"
          easingFunction="ease"
        >
          <image
            mode="widthFix"
            :src="require(`@/assets/img/department-logo/0${index + 1}.png`)"
            :style="{ width: getPicWidth }"
          ></image>
        </share-element>
        <p class="text-xl">{{ department.name }}</p>
        <p class="text-sm text-gray-400">{{ department.desc }}</p>
      </view>
    </template>
  </view>
  <page-container
    :show="show"
    @clickoverlay="changeShowStatus"
    :duration="shareElementConfig.duration"
    :position="shareElementConfig.position"
  >
    <scroll-view :scroll-y="true" :style="{ height: '100vh' }">
      <view class="relative page-con">
        <view
          class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md"
          :style="{ height: caculateWidth(windowWidth) * 2 + 'px' }"
        >
          <share-element
            class="share-ele"
            mapkey="name"
            :duration="shareElementConfig.duration"
            :transform="true"
            easingFunction="ease"
          >
            <image
              mode="widthFix"
              :src="src ?? require(`${src}`)"
              :style="{ width: getPicWidth, height: getPicWidth }"
            ></image>
          </share-element>
        </view>

        <view
          class="mx-4 bg-white shadow-lg p-4"
          :style="{ marginTop: '-40px' }"
        >
          <p class="text-6xl my-4 font-light">{{ listItem.name }}</p>
          <p class="text-gray-400">👉{{ listItem.desc }}</p>
          <nut-divider></nut-divider>
          <rich-text
            :nodes="listItem.introduce"
            class="mx-4 mt-4 p-4 rounded-lg tracking-widest leading-8 text-gray-600"
          >
          </rich-text>
          <view>
            <nut-button @click="changeShowStatus">关闭</nut-button>
          </view>
        </view>
      </view>
    </scroll-view>
  </page-container>
</template>

<script setup>
import { departmentList, shareElementConfig } from "./config";
import HomeDepartmentItem from "./home-department-item";
import DepartmentPageContainer from "./department-page-container";
import useShareElement from "@/hooks/share-element-hooks";
import { computed, onMounted, ref } from "vue";
import useDeviceInfo from "@/hooks/device-hooks";
import { caculateWidth } from "./utils";
// 创建实例
const {
  show,
  changeShowStatus,
  openWithBindObj,
  listItem,
  src,
  transformIndex,
} = useShareElement(departmentList);

const { windowWidth } = useDeviceInfo();
const getPicWidth = computed(() => caculateWidth(windowWidth) + "px");
</script>

<style lang="less">
.page-con .share-ele {
  position: absolute;
  left: 1rem;
  top: 4rem;
}
</style>
