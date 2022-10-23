<template>
  <view v-if="openid">
    <nut-form
      :model-value="formData"
      :style="{ fontSize: '20px' }"
      ref="ruleForm"
      class="h-full"
    >
      <template v-for="formChild of formConfig" :key="formChild.label">
        <nut-form-item
          label-align="right"
          label-width="120"
          class="h-full"
          :required="formChild.required"
          :label="formChild.label"
          :rules="formChild.rules"
          :prop="formChild.prop"
        >
          <template v-if="formChild.tag === 'input'">
            <input
              type="text"
              v-model="formData[formChild.prop]"
              :placeholder="formChild.label"
              class="w-full text-black"
            />
          </template>
          <template v-if="formChild.tag === 'textarea'">
            <textarea
              class="w-full"
              v-model="formData[formChild.prop]"
              type="text"
              :cursorSpacing="200"
              :auto-height="true"
              :disable-default-padding="true"
            />
          </template>
          <template v-if="formChild.tag === 'radio'">
            <nut-radiogroup
              direction="horizontal"
              v-model="formData[formChild.prop]"
            >
              <template
                v-for="radioChild of formChild.options.children"
                :key="radioChild.label"
              >
                <nut-radio :label="radioChild.label">{{
                  radioChild.content
                }}</nut-radio>
              </template>
            </nut-radiogroup></template
          >
          <view
            v-if="formChild.tag === 'picker'"
            class="h-full"
            @click="sendPickerProp(formChild.prop, formChild.options.columns)"
          >
            <picker
              mode="selector"
              :range="formChild.options.columns"
              class="h-full w-full"
              @change="pickerOnChange($event, prop)"
            >
              <text class="w-full text-black">{{
                formData[formChild.prop] === "" ||
                !formChild.options.columns[formData[formChild.prop]]
                  ? "请选择你的选项"
                  : formChild.options.columns[formData[formChild.prop]]
              }}</text>
            </picker>
          </view>
        </nut-form-item>
      </template>
      <nut-cell>
        <view class="w-full flex flex-row-reverse">
          <nut-button
            type="primary"
            style="margin-left: 10px"
            @tap="submitForm"
            bindtap="login"
          >
            提交
          </nut-button>
          <!-- <nut-button @click="reset">重置表单</nut-button> -->
        </view>
      </nut-cell>
    </nut-form>
  </view>
  <view v-else class="flex flex-col justify-around m-4">
    <!-- <div class="my-2">
      <nut-button
        type="primary"
        @click="clickToFirstLogin"
        :style="{ width: '100% !important' }"
        >我是第一次报名</nut-button
      >
    </div> -->
    <div class="my-2">
      <nut-button
        plain
        type="primary"
        @click="clickToSecondLogin"
        :style="{ width: '100% !important' }"
        >我要报名</nut-button
      >
    </div>
    <!-- <div class="my-2">
      <nut-button
        plain
        type="primary"
        @click="clickToSendMessage"
        :style="{ width: '100% !important' }"
        >我要获取数据</nut-button
      >
    </div> -->
  </view>
</template>

<script setup>
import { defineProps, ref, onBeforeMount, computed } from "vue";
import { BASE_FORM_CONFIG } from "@/pages/form/data-config";
import { useStore } from "vuex";
import useFormdata from "./formdata-hook";
import localCache from "@/utils/cache";
import { postRecruitForm } from "@/service/form";
import useWechat from "@/hooks/wechat-hooks";

const props = defineProps({
  formConfig: () => {},
});
const { getMessage } = useWechat();
const store = useStore();
const openid = computed(() => store.state.openid);

const { formData, submit, ruleForm, getRecruitFormData } = useFormdata();

// 定义当前选中的prop
const currentPickerProp = ref("");
const currentPickerList = ref([]);

const submitForm = async () => {
  try {
    await getMessage();
    await submit(openid.value);
  } catch (error) {}

  return;
};

// 赋值当前选中的prop
const sendPickerProp = (prop, list) => {
  currentPickerProp.value = prop;
  currentPickerList.value = list;
};

// 真正选择的赋值
const pickerOnChange = (e) => {
  const index = +e.detail.value;
  formData.value[currentPickerProp.value] = index;
  currentPickerProp.value = "";
};

const clickToFirstLogin = async () => {
  await store.dispatch("getOpenidAction");
};

const clickToSecondLogin = async () => {
  await store.dispatch("getOpenidAction");
  await getRecruitFormData();
};

const clickToSendMessage = async () => {
  await getMessage();
};
</script>
