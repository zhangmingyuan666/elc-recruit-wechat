import { createStore } from "vuex";
import localCache from "@/utils/cache";
import useWechat from "@/hooks/wechat-hooks";
import { interviewModule } from "./modules/interview";

const { wxLogin } = useWechat();
export default createStore({
  state: {
    openid: localCache.getCache("openid"),
  },
  mutations: {
    changeOpenid(state, openid) {
      state.openid = openid;
      localCache.setCache("openid", openid);
    },
  },
  actions: {
    async getOpenidAction({ commit }) {
      const openid = await wxLogin();
      if (openid) {
        commit("changeOpenid", openid);
      }
    },
  },

  modules: { interviewModule },
});
