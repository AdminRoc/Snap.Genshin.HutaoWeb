import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/sys/log/login/pageList",
    method: "post",
    data,
  });
}

export function getDoList(data) {
  return request({
    url: "/sys/log/operation/pageList",
    method: "post",
    data,
  });
}

export function getCity(data) {
  return request({
    url: "/sys/dict/area/list",
    method: "post",
    data,
  });
}

export function getHosLevel(data) {
  return request({
    url: "/sys/dict/data/list",
    method: "post",
    data,
  });
}

export function doSave(data) {
  return request({
    url: "/orgHospInfo/save",
    method: "post",
    data,
  });
}

export function doEdit(data) {
  return request({
    url: "/orgHospInfo/update",
    method: "post",
    data,
  });
}

export function doDelete(id) {
  return request({
    url: "/orgHospInfo/delete/"+id,
    method: "get",
    data:{},
  });
}
