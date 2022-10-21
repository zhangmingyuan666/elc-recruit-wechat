/*
 * @Date: 2022-08-14 12:04:57
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 00:27:14
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
    Taro.requestSubscribeMessage({
      tmplIds: [
        "Vfg-JE6Q_Yk1N6amAR-PA1JXLTC4ez0w1dA7ejztEGg",
        "s8yDL0-Kez6ZbAhp9dxuaFgRFADqS-jr7TcGcwLBnWk",
        "daPtFvfc9kr_MtPeIqQEwLW8UAqJ-uZPwS0VkF37tUQ",
      ],
      success(res) {
        console.log(res);
      },
    });
  }

  return {
    permitSharePage,
    permitScanQRCode,
    wxLogin,
    getMessage,
  };
};
