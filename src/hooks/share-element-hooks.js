import { ref } from "vue";

export default (list) => {
  const show = ref(false);
  const transformIndex = ref(0);
  const listItem = ref(list[0]);
  const src = ref("");

  const openWithBindObj = (index) => {
    transformIndex.value = index;
    listItem.value = list[index];
    src.value = `/assets/img/department-logo/0${index + 1}.png`;
    changeShowStatus();
  };

  const changeShowStatus = () => {
    console.log("onClick", show.value);
    show.value = !show.value;
  };

  return {
    show,
    transformIndex,
    listItem,
    src,
    changeShowStatus,
    openWithBindObj,
  };
};
