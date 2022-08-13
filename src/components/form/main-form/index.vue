<template>
  <view class="text-xl">
    <nut-form :model-value="formData" :style="{ fontSize: '20px' }">
      <template v-for="formChild of formConfig" :key="formChild.label">
        <nut-form-item
          :required="formChild.required"
          :label="formChild.label"
          :rules="formChild.rules"
          :prop="formChild.prop"
        >
          <template v-if="formChild.tag === 'input'">
            <nut-input type="text" v-model="formData[formChild.prop]" />
          </template>
          <template v-if="formChild.tag === 'textarea'">
            <nut-textarea v-model="formData[prop]" />
          </template>
          <template v-if="formChild.tag === 'radio'">
            <nut-radiogroup direction="horizontal" v-model="formData[prop]">
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
        </nut-form-item>
      </template>
    </nut-form>
    <nut-button @click="a"></nut-button>
  </view>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
const props = defineProps({
  formConfig: () => {},
});

const formData = ref({
  openid: "",
  stu_id: "",
  name: "",
  gender: 1,
  profile: "",
  skill: "",
  first_dept: "",
  second_dept: "",
  has_join: "",
  major: "",
  college: "",
  clazz: "",
  where_find: "",
});
</script>
