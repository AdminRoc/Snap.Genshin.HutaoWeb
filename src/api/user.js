import request from "@/utils/request";
import { encryptedData } from "@/utils/encrypt";
import { loginRSA, tokenName } from "@/config/settings";

export async function login(data) {
  return request({
    url: "/Auth/Login",
    method: "post",
    data,
  });
}
export async function loginCode(data) {
  return request({
    url: "/auth/code",
    method: "get",
    data,
  });
}
export function getUserInfo(accessToken) {
  return request({
    url: "/auth/info",
    method: "get",
    data: {
      [tokenName]: accessToken,
    },
  });
}

export function logout() {
  return request({
    url: "/auth/logout",
    method: "delete",
  });
}

export function register() {
  return request({
    url: "/register",
    method: "post",
  });
}

export function modifyPwd(data) {
  return request({
    url: "/user/modifyPwd",
    method: "post",
    data,
  });
}
