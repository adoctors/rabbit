/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-11 22:18:34
 * @Description: 路由管理入口
 * @LastEditors: kl
 */

import { Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Spin } from "antd";
import { TRoutes, routes } from "./config";

const syncRouter = (list: TRoutes[]): IObject[] => {
  const result: IObject[] = [];
  for (const route of list) {
    result.push({
      path: route.path,
      element: route?.redirect ? (
        <Navigate replace to={route.redirect} />
      ) : (
        <Suspense fallback={<Spin />}>
          <route.component />
        </Suspense>
      ),
      children: route?.children && syncRouter(route.children),
    });
  }

  return result;
};

const Routes = () => useRoutes(syncRouter(routes));

// 直接暴露成一个组件调用
export default Routes;
