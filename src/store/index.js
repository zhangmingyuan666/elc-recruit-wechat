import { createStore } from "vuex";
import localCache from "@/utils/cache";
import useWechat from "@/hooks/wechat-hooks";
import { interviewModule } from "./modules/interview";
import { personalModule } from "./modules/personal";
import { getPersonalStatus } from "@/service/personal";
const { wxLogin } = useWechat();
export default createStore({
  state: {
    openid: localCache.getCache("openid"),
    avatarUrl: localCache.getCache("avatarUrl"),
    nickName: localCache.getCache("nickName"),
    status: localCache.getCache("status"),
  },
  getters: {
    getAvatar: (state) => state.avatarUrl,
    getNickname: (state) => state.nickName,
    getStatus: (state) => state.status,
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
      console.log("status", status);
      localCache.setCache("status", status);
    },
  },
  actions: {
    async getOpenidAction({ commit }) {
      const { openid, userInfo } = await wxLogin();
      console.log(openid, userInfo);
      if (openid) {
        commit("changeOpenid", openid);
        commit("changeUserInfo", userInfo);
      }
    },
    async getInterviewStatus({ commit, rootState }) {
      const { openid } = rootState;
      if (openid) {
        const status = await getPersonalStatus(openid);
        commit("changeStatus", status);
      }
    },
  },

  modules: { interviewModule, personalModule },
});
