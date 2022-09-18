import { commonRequest } from "..";

const APIs = {
  postFormAPI: "/recruit/elc_access/apply",
  getFormInfoAPI: "/recruit/elc_access/get_apply_info/",
  putUpdateInfoAPI: "/recruit/elc_access/update_apply_info/",
};

export const postRecruitForm = (data) => {
  return commonRequest.post({
    url: APIs.postFormAPI,
    data,
  });
};

export const getRecruitForm = (openid) => {
  return commonRequest.get({
    url: APIs.getFormInfoAPI + openid,
    showLoading: true,
  });
};

export const putUpdateRecruitForm = (data) => {
  return commonRequest.put({
    url: APIs.putUpdateInfoAPI,
    data,
  });
};
