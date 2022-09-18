import Taro from "@tarojs/taro";
import { getLogin } from "@/service/wechat/index.js";

export default () => {
  const permitSharePage = () => {
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"],
    });
  };

  const permitScanQRCode = async () => {
    const res = await wx.scanCode();
    console.log(res);
    return res.result;
  };

  const wxLogin = async () => {
    async function login() {
      const res = await Taro.login();
      return res;
    }

    async function getUserInfo() {
      const res = await Taro.getUserProfile({
        desc: "用于千与千寻发帖管理",
      });

      return res;
    }

    // 进行获取
    try {
      const [{ code }, { userInfo }] = await Promise.all([
        login(),
        getUserInfo(),
      ]);
      const { openid } = await getLogin(code);
      // console.log(res);
      // const openid = res.data.data;

      if (openid) {
        return { openid, userInfo };
      } else {
        throw {
          status: 201,
          msg: "登录失败",
        };
      }
    } catch (err) {
      Taro.showToast({
        icon: "error",
        title: err.msg,
        duration: 1500,
      });
      console.log(err);
    }
  };

  return {
    permitSharePage,
    permitScanQRCode,
    wxLogin,
  };
};
