import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/roleManagement/getList",
    method: "post",
    data,
  });
}
export function getRoleList(data) {
  return request({
    url:"/role/list",
    method: "post",
    data,
  });
}
export function doSave(data) {
  return request({
    url: "/role/save",
    method: "post",
    data,
  });
}
export function doEdit(data) {
  return request({
    url: "/role/update",
    method: "post",
    data,
  });
}

export function doDelete(id) {
  return request({
    url: "/role/delete/"+id,
    method: "get",
    data:{},
  });
}
export function doListMenu(data) {
  return request({
    url: "/role/listMenu",
    method: "post",
    data
  });
}
export function doUpdateRoleMenu(data) {
  return request({
    url: "/role/updateRoleMenuRel",
    method: "post",
    data
  });
}
export function doAddRoleUser(data) {
  return request({
    url:"/role/updateRoleUserRel",
    method: "post",
    data,
  });
}
export function doGetRoleUser(data) {
  return request({
    url:"/role/listUser",
    method: "post",
    data,
  });
}
export function updateRoleOrgRel(data) {
  return request({
    url:"/role/updateRoleOrgRel",
    method: "post",
    data,
  });
}
export function listOrg(data) {
  return request({
    url:"/role/listOrg",
    method: "post",
    data,
  });
}
