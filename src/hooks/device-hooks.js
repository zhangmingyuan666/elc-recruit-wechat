// import Taro from "@tarojs/taro";

import Taro from "@tarojs/taro";

export default function useDeviceInfo() {
  const globalData = {};

  // 计算胶囊高度
  const capsuleObj = Taro.getMenuButtonBoundingClientRect();
  console.log(capsuleObj);

  Taro.getSystemInfo({
    success: (res) => {
      console.log(res);
      const { statusBarHeight } = res; //顶部状态栏高度

      globalData.capsuleObj = capsuleObj;
      globalData.titleHeight =
        statusBarHeight +
        capsuleObj.height +
        (capsuleObj.top - statusBarHeight) * 2;
    },
  });

  return { ...globalData };
}
