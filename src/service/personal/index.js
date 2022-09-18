import { commonRequest } from "..";

const APIs = {
  getPersonalStatusAPI: "/recruit/elc_access/get_allStatus/",
  putPersonalSignInAPI: "/recruit/elc_access/sign_in/",
  getInterviewProcessAPI:
    "/interview/elc_access/process_status_code/get_now_process",
  getSignInStatusAPI: "/recruit/elc_access/get_signInStatus/",
};

export const getPersonalStatus = (openid) => {
  return commonRequest.get({
    url: APIs.getPersonalStatusAPI + openid,
  });
};

// 签到接口
export const putPersonalSignIn = (openid, signInKey) => {
  return commonRequest.put({
    url: APIs.putPersonalSignInAPI + openid + "/" + signInKey,
  });
};

// 获取面试总进度
export const getInterviewProcess = () => {
  return commonRequest.get({
    url: APIs.getInterviewProcessAPI,
  });
};

export const getSignInStatus = (openid) => {
  return commonRequest.get({
    url: APIs.getSignInStatusAPI + openid,
  });
};
