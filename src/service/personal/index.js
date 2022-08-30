import { commonRequest } from "..";

const APIs = {
  getPersonalStatusAPI: "/recruit/elc_access/get_status/",
  putPersonalSignInAPI: "/recruit/elc_access/sign_in/",
  getInterviewProcessAPI:
    "/interview/elc_access/process_status_code/get_now_process",
};

export const getPersonalStatus = (openid) => {
  return commonRequest.get({
    url: APIs.getPersonalStatusAPI + openid,
  });
};

// 签到接口
export const putPersonalSignIn = (openid) => {
  return commonRequest.put({
    url: APIs.putPersonalSignInAPI + openid,
  });
};

// 获取面试总进度
export const getInterviewProcess = () => {
  return commonRequest.get({
    url: APIs.getInterviewProcessAPI,
  });
};
