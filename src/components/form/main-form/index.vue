<template>
  <view v-if="openid">
    <nut-form
      :model-value="formData"
      :style="{ fontSize: '20px' }"
      ref="ruleForm"
    >
      <template v-for="formChild of formConfig" :key="formChild.label">
        <nut-form-item
          label-align="right"
          label-width="120"
          :required="formChild.required"
          :label="formChild.label"
          :rules="formChild.rules"
          :prop="formChild.prop"
        >
          <template v-if="formChild.tag === 'input'">
            <input
              type="text"
              v-model="formData[formChild.prop]"
              class="w-full"
            />
          </template>
          <template v-if="formChild.tag === 'textarea'">
            <nut-textarea v-model="formData[formChild.prop]" />
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
            @click="sendPickerProp(formChild.prop, formChild.options.columns)"
          >
            <picker
              mode="selector"
              :range="formChild.options.columns"
              class="h-full w-full"
              @change="pickerOnChange($event, prop)"
            >
              <text>{{
                formData[formChild.prop] === ""
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
          <nut-button @click="reset">重置表单</nut-button>
        </view>
      </nut-cell>
    </nut-form>
  </view>
  <view v-else class="flex flex-col m-4 h-30 justify-around">
    <nut-button type="primary" @click="clickToFirstLogin"
      >我是第一次报名</nut-button
    >
    <nut-button plain type="primary" @click="clickToSecondLogin"
      >我提交过报名表了</nut-button
    >
  </view>
</template>

<script setup>
import { defineProps, ref, onBeforeMount, computed } from "vue";
import { BASE_FORM_CONFIG } from "@/pages/form/data-config";
import { useStore } from "vuex";
import useFormdata from "./formdata-hook";
import localCache from "@/utils/cache";
import { postRecruitForm } from "@/service/form";
const props = defineProps({
  formConfig: () => {},
});

const store = useStore();
const openid = computed(() => store.state.openid);

const { formData, submit, ruleForm, getRecruitFormData } = useFormdata();

// 定义当前选中的prop
const currentPickerProp = ref("");
const currentPickerList = ref([]);

const submitForm = async () => {
  // if (openid.value) {
  //   await store.dispatch("getOpenidAction");
  // }
  await submit(openid.value);
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
</script>
