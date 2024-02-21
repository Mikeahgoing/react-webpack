import React from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
export default function Login() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[300px] flex gap-3 flex-col border-solid border-2 border-sky-500 px-3 justify-start">
        <div className="flex justify-center p-3 ">登录</div>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="输入用户名">
              <InfoCircleOutlined
                style={{
                  color: "rgba(0,0,0,.45)",
                }}
              />
            </Tooltip>
          }
        />
        <Input.Password placeholder="input password" />
        <Button type="primary" className="bg-red-400">登录</Button>
      </div>
    </div>
  );
}
