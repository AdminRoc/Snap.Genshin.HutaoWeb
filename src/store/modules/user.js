/**
 *
 * @description 登录、获取用户信息、退出登录、清除accessToken逻辑，不建议修改
 */

import Vue from "vue";
import { getUserInfo, login, logout } from "@/api/user";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/utils/accessToken";
import { resetRouter } from "@/router";
import { title, tokenName } from "@/config/settings";

const state = {
  accessToken: getAccessToken(),
  username: "",
  deptId: "",
  hospId: "",
  avatar: "",
  userId: "",
  userID: "",
  doctId: "",
  permissions: [],
};
const getters = {
  accessToken: (state) => state.accessToken,
  username: (state) => state.username,
  deptId: (state) => state.deptId,
  hospId: (state) => state.hospId,
  avatar: (state) => state.avatar,
  userId: (state) => state.userId,
  userID: (state) => state.userID,
  doctId: (state) => state.doctId,
  permissions: (state) => state.permissions,
};
const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    setAccessToken(accessToken);
  },
  setUserName(state, username) {
    state.username = username;
  },
  setDeptId(state, deptId) {
    state.deptId = deptId;
  },
  setHospId(state, hospId) {
    state.hospId = hospId;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  },
  setPermissions(state, permissions) {
    state.permissions = permissions;
  },
  setUserId(state, userId) {
    state.userId = userId;
  },
  setUserID(state, UserID) {
    state.UserID = UserID;
  },
  setDoctId(state, doctId) {
    state.doctId = doctId;
  },
};
const actions = {
  setPermissions({ commit }, permissions) {
    commit("setPermissions", permissions);
  },
  async login({ commit }) {
    console.log("执行登录")
    let data = await login({"Appid":"08da041a-1722-4c50-85f8-5e9b4c569785","Secret":"PS/xFefaKWQNPpEbNWSJjXmHUMwyD/S579DNW9RiuGE="});
    if (data.data.accessToken) {
      commit("setAccessToken", data.data.accessToken);
    }
  },
  async getUserInfo({ commit, state }) {
    const { data } = await getUserInfo(state.accessToken);
    if (!data) {
      Vue.prototype.$baseMessage("验证失败，请重新登录...", "error");
      return false;
    }
    let { permissions, userName, avatar, realName, orgDoctHospDeptVOList, orgDoctHospVO, userId, doctId} = data;
    commit("setUserName", realName);
    commit("setUserID", userId);
    commit("setUserId", userId);
    commit("setDoctId", doctId);
	if(permissions==null){
		permissions=["admin"]
	}
    if (permissions && userName && Array.isArray(permissions)) {
      commit("setPermissions", permissions);
      //commit("setUserName", realName);
      commit("setAvatar", avatar);
      //commit("setDeptId", deptId);
      commit("setHospId", orgDoctHospVO.hospId);
      return permissions;
    } else {
      Vue.prototype.$baseMessage("用户信息接口异常", "error");
      return false;
    }
  },
  async logout({ dispatch }) {
    await logout(state.accessToken);
    await dispatch("resetAccessToken");
    await resetRouter();
  },
  resetAccessToken({ commit }) {
    commit("setPermissions", []);
    commit("setAccessToken", "");
    removeAccessToken();
  },
};
export default { state, getters, mutations, actions };
