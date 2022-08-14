import Taro from "@tarojs/taro";

export default () => {
  const permitSharePage = () => {
    wx.showShareMenu({
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

  return {
    permitSharePage,
    permitScanQRCode,
  };
};
