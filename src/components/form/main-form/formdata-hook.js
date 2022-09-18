import { defineProps, ref, onBeforeMount, computed } from "vue";
import { BASE_FORM_CONFIG } from "@/pages/form/data-config";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
import {
  postRecruitForm,
  getRecruitForm,
  putUpdateRecruitForm,
} from "@/service/form";

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
        console.log(res);
      } else {
        console.log("error submit!!", errors);
      }
    });
  };

  return { formData, submit, ruleForm, getRecruitFormData };
};
