/*
 * @Date: 2022-08-14 12:04:57
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-23 12:51:56
 * @FilePath: \gdutelc-recruit-wechat\src\hooks\wechat-hooks.js
 */
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
        desc: "拿拿你的头像",
      });

      return res;
    }

    // 进行获取
    try {
      const [{ code }, { userInfo }] = await Promise.all([
        login(),
        getUserInfo(),
      ]);
      // console.log(result);

      console.log(userInfo);

      const loginResult = await getLogin(code);
      const openid = loginResult.data;

      if (openid) {
        Taro.showToast({
          title: "微信登录成功",
          icon: "success",
          duration: 2000,
        });
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

  async function getMessage() {
    const ans = await wx.requestSubscribeMessage({
      tmplIds: ["i5rbTJ70IEajfuWmYG7jCeE4fsh3c9fZ1aqkQY3Cqos"],
    });
    if (Object.values(ans).includes("reject")) {
      Taro.showToast({
        title: "必须要允许通知才可以收到面试信息",
        icon: "error",
        duration: 2000,
      });
      throw new Error("必须允许！");
    }
  }

  return {
    permitSharePage,
    permitScanQRCode,
    wxLogin,
    getMessage,
  };
};
