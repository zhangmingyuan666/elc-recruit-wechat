import { createApp } from "vue";
import globalActions from "@/global";
import "windi.css";
import "./index.less";
// import "@nutui/nutui-taro/dist/style.css";
import "@nutui/nutui-taro/dist/styles/themes/default.scss";
import store from "./store";
const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(store);
globalActions(App);

export default App;
