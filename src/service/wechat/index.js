import { commonRequest } from "..";

const APIs = {
  getLoginAPI: "/elc_public/wx_login/",
};

export const getLogin = (js_code, grant_type = "authorization_code") => {
  return commonRequest.get({
    url: APIs.getLoginAPI + js_code + "/" + grant_type,
  });
};
