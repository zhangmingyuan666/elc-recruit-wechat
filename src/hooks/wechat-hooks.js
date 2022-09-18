import Taro from "@tarojs/taro";
import { getLogin } from "@/service/wechat/index.js";

export default () => {
  const permitSharePage = () => {
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"],
    });
  };

  const permitScanQRCode = () => {
    wx.scanCode({
      success(res) {
        console.log(res);
      },
    });
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

      if (openid) {
        return { openid, userInfo };
      } else {
        throw {
          status: 201,
          msg: "登录失败",
        };
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    permitSharePage,
    permitScanQRCode,
    wxLogin,
  };
};
