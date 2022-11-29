import request from "@/utils/request";

// 密码登录
export function login(data) {
  return request({
    url: "/accountLogin",
    method: "post",
    data: data,
  });
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: "/sysUser/getUserInfo",
    method: "get",
  });
}

// 退出方法
export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}
