/*
 * @Date: 2022-08-30 10:00:55
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 01:06:01
 * @FilePath: \gdutelc-recruit-wechat\src\service\form\index.js
 */
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
    showLoading: true,
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
    showLoading: true,
  });
};
