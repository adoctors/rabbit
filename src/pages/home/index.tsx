/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-11 16:04:38
 * @Description:
 * @LastEditors: kl
 */
import React, { useState } from "react";
import { Button } from "antd";
import reactLogo from "@/assets/react.svg";
import logo from "/rabbit.png";

const HomePage = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <div className="text-green-700">
        <a href="https://vitejs.dev" target="_blank">
          <img src={logo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-red-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
        <Button type="primary">Button</Button>
      </p>
    </div>
  );
};

export default HomePage;
