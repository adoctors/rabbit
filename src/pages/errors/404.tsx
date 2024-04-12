import { Button, Result } from "antd";
import React from "react";

const NoFoundPage: React.FC<{}> = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => {}}>
          返回首页
        </Button>
      }
    />
  );
};

export default NoFoundPage;
