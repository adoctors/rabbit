/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-12 15:23:17
 * @Description:
 * @LastEditors: kl
 */
import { local } from "@/utils/store";
import { atom } from "recoil";

// 用户信息
export const userInfoState = atom<IObject>({
  key: "userInfoState",
  default: local.get("USERINFO") || {},
});
