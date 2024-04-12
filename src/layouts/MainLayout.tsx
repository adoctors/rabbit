/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-11 15:58:59
 * @Description: 内容区主要布局结构
 * @LastEditors: kl
 */

import { Outlet } from "react-router-dom";

const MainLayout = (props: IObject) => {
  return (
    <div>
      <p className="h-12 px-4 leading-[3rem] bg-cyan-300 text-white font-bold">
        我是父组件-Header
      </p>
      <Outlet />
    </div>
  );
};

export default MainLayout;
