import React from "react";
import { Tabs } from "antd";
import Ex1 from "./ex1";
import Ex2 from "./ex2";
import Ex3 from "./ex3";
import Ex4 from "./ex4";
import Ex5 from "./ex5";

const TabComponent = () => {
  const items = [
    { key: "1", label: "Tab 1", children: <div className="p-4"><Ex1/></div> },
    { key: "2", label: "Tab 2", children: <div className="p-4"><Ex2/></div> },
    { key: "3", label: "Tab 3", children: <div className="p-4"><Ex3/></div> },
    { key: "4", label: "Tab 4", children: <div className="p-4"><Ex4/></div> },
    { key: "5", label: "Tab 5", children: <div className="p-4"><Ex5/></div> },
  ];

  return (
    <div className="w-[400px] p-6 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Chuyển Tab</h1>
      <Tabs defaultActiveKey="1" items={items} centered />
    </div>
  );
};

export default TabComponent;
