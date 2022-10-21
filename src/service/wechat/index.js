import { commonRequest } from "..";

const APIs = {
  getLoginAPI: "/elc_public/login/",
};

export const getLogin = (js_code, grant_type = "authorization_code") => {
  return commonRequest.get({
    url: `${APIs.getLoginAPI + js_code + "/" + grant_type}`.trim(),
    showLoading: true,
  });
};
