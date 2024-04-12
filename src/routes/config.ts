/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-11 14:54:11
 * @Description: 路由配置
 * @LastEditors: kl
 */
import React, { lazy } from "react";
export type TRoutes = {
  path: string;
  /** 重定向时不需要组件*/
  component?: React.LazyExoticComponent;
  children?: TRoutes[];
  /** 重定向的路径*/
  redirect?: string;
};

export const routes: TRoutes[] = [
  {
    path: "/login",
    component: lazy(() => import("@/pages/login")),
  },
  {
    path: "/",
    component: lazy(() => import("@/layouts/MainLayout")),
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        component: lazy(() => import("@/pages/home")),
      },
    ],
  },
  {
    path: "/403",
    component: lazy(() => import("@/pages/errors/403")),
  },
  {
    path: "*",
    component: lazy(() => import("@/pages/errors/404")),
  },
];
