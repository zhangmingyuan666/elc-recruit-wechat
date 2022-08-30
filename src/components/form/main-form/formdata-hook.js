import { defineProps, ref, onBeforeMount } from "vue";
import { BASE_FORM_CONFIG } from "@/pages/form/data-config";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
import {
  postRecruitForm,
  getRecruitForm,
  putUpdateRecruitForm,
} from "@/service/form";

export default (openid, callback) => {
  const formData = ref(BASE_FORM_CONFIG);
  const hasBeenSumbit = ref(false);

  const ruleForm = ref(null);

  onBeforeMount(async () => {
    if (openid) {
      const res = await getRecruitForm(openid);
      formData.value = { ...res };
      hasBeenSumbit.value = true;
    }
  });

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

  const submit = () => {
    if (!openid) {
      // 如果没有openid，需要进行派发openid
      callback && callback();
    }
    ruleForm.value.validate().then(async ({ valid, errors }) => {
      if (valid) {
        console.log("success", formData);
        const res = await handleRecruitForm(openid, formData.value); // 提交成功？
        console.log(res);
      } else {
        console.log("error submit!!", errors);
      }
    });
  };

  return { formData, submit, ruleForm };
};
