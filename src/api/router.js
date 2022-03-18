import request from "@/utils/request";

export function getRouterList(data) {
  return request({
    //url: "/menu/navigate",
    url:"/auth/authMenu",
    method: "get",
    data,
  });
}

