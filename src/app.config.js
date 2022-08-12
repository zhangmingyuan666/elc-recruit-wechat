export default defineAppConfig({
  pages: ["pages/index/index", "pages/form/index", "pages/personal-info/index"],
  tabBar: {
    color: "#ccc",
    selectedColor: "#000",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "主页",
        iconPath: "assets/bar-n-select/home.png",
        selectedIconPath: "assets/bar/home.png",
      },
      {
        pagePath: "pages/form/index",
        text: "报名",
        iconPath: "assets/bar-n-select/form.png",
        selectedIconPath: "assets/bar/form.png",
      },
      {
        pagePath: "pages/personal-info/index",
        text: "我的",
        iconPath: "assets/bar-n-select/user.png",
        selectedIconPath: "assets/bar/user.png",
      },
    ],
  },
  window: {
    navigationStyle: "custom",
  },
});
