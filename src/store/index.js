/*
 * @Date: 2022-08-30 13:46:17
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-23 12:55:03
 * @FilePath: \gdutelc-recruit-wechat\src\store\index.js
 */
import { createStore } from "vuex";
import localCache from "@/utils/cache";
import useWechat from "@/hooks/wechat-hooks";
import { interviewModule } from "./modules/interview";
import { personalModule } from "./modules/personal";
import { getPersonalStatus } from "@/service/personal";
import { getSignInStatus } from "@/service/personal";
const { wxLogin } = useWechat();
export default createStore({
  state: {
    openid: localCache.getCache("openid") ?? "",
    avatarUrl: localCache.getCache("avatarUrl"),
    nickName: localCache.getCache("nickname"),
    status: localCache.getCache("status"),
    signInStatus: 0, // 还没签到
  },
  getters: {
    getAvatar: (state) => state.avatarUrl,
    getNickname: (state) => state.nickName,
    getStatus: (state) => +state.status,
  },
  mutations: {
    changeOpenid(state, openid) {
      state.openid = openid;
      localCache.setCache("openid", openid);
    },
    changeUserInfo(state, { avatarUrl, nickName }) {
      state.avatarUrl = avatarUrl;
      localCache.setCache("avatarUrl", avatarUrl);
      state.nickName = nickName;
      localCache.setCache("nickname", nickName);
    },
    changeStatus(state, status) {
      state.status = status;
      localCache.setCache("status", status);
    },
    changeSignInStatus(state, signInStatus) {
      state.signInStatus = signInStatus;
    },
  },
  actions: {
    async getOpenidAction({ commit }) {
      const { openid, userInfo } = await wxLogin();

      if (openid) {
        commit("changeOpenid", openid);
        commit("changeUserInfo", userInfo);
      }
    },
    async getInterviewStatus({ commit, rootState }) {
      const { openid } = rootState;
      if (openid) {
        const res = await getPersonalStatus(openid);
        commit("changeStatus", res.data);
      }
    },
    async getSignInStatusAction({ commit, rootState }) {
      const { openid } = rootState;
      const res = await getSignInStatus(openid);
      commit("changeSignInStatus", res.data);
    },
  },

  modules: { interviewModule, personalModule },
});
