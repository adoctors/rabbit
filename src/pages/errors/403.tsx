/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-11 14:57:10
 * @Description: 
 * @LastEditors: kl
 */
import { Button, Result } from "antd";
import React from "react";

const NotAuthorizedPage: React.FC<{}> = (props) => {
  return (
    <Result
      status="403"
      subTitle="对不起，您没有此页面的访问权限，请联系管理员"
      extra={
        <Button type="primary" onClick={() => {}}>
          返回首页
        </Button>
      }
    />
  );
};

export default NotAuthorizedPage;
