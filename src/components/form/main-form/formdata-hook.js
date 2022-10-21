/*
 * @Date: 2022-08-30 16:20:26
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 01:22:15
 * @FilePath: \gdutelc-recruit-wechat\src\components\form\main-form\formdata-hook.js
 */
import { defineProps, ref, onBeforeMount, computed } from "vue";
import { BASE_FORM_CONFIG } from "@/pages/form/data-config";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
import {
  postRecruitForm,
  getRecruitForm,
  putUpdateRecruitForm,
} from "@/service/form";
import Taro from "@tarojs/taro";

export default () => {
  const formData = ref(BASE_FORM_CONFIG);
  const hasBeenSumbit = ref(false);
  const ruleForm = ref(null);

  const store = useStore();
  const openid = computed(() => store.state.openid);

  onBeforeMount(async () => {
    if (openid.value) {
      await getRecruitFormData();
    }
  });

  const getRecruitFormData = async () => {
    const res = await getRecruitForm(openid.value);
    if (res.data) {
      // 搜索到了结果
      formData.value = { ...res.data };
      hasBeenSumbit.value = true;
    }
  };

  // 进行表单提交的详细操作
  const handleRecruitForm = async (openid, data) => {
    let res = null;
    if (!hasBeenSumbit.value) {
      // 如果还没碰过，那么post
      res = await postRecruitForm({
        ...data,
        openid,
        status: 0,
      });
    } else {
      // 如果已经提交过了。那么使用put
      res = await putUpdateRecruitForm({
        ...data,
        openid,
        status: 0,
      });
    }
    return res;
  };

  const submit = async (openid) => {
    await ruleForm.value.validate().then(async ({ valid, errors }) => {
      if (valid) {
        console.log(formData.value);
        const res = await handleRecruitForm(openid, formData.value); // 提交成功？
        if (res.code === 200) {
          Taro.showToast({
            title: "提交报名成功",
            icon: "success",
            duration: 2000,
          });
        } else {
          Taro.showToast({
            title: "提交报名失败",
            icon: "error",
            duration: 2000,
          });
        }
      } else {
        console.log("error submit!!", errors);
        Taro.showToast({
          title: "校验失败",
          icon: "error",
          duration: 2000,
        });
      }
    });
  };

  return { formData, submit, ruleForm, getRecruitFormData };
};
