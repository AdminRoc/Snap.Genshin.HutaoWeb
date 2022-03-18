import request from "@/utils/request";

export function getTree(data) {
  return request({
    url: "/menu/list",
    method: "post",
    data,
  });
}

export function doSave(data) {
  return request({
    url: "/menu/save",
    method: "post",
    data,
  });
}
export function doEdit(data) {
  return request({
    url: "/menu/update",
    method: "post",
    data,
  });
}

export function doDelete(id) {
  return request({
    url: "/menu/delete/"+id,
    method: "get"
  });
}
