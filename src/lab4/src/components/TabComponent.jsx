import React from "react";
import { Tabs } from "antd";
import Ex1 from "./Ex1.jsx";
import Ex2 from "./Ex2.jsx";
import Ex3 from "./Ex3.jsx";
import Ex4 from "./Ex4.jsx";
import Ex5 from "./Ex5.jsx";

const TabComponent = () => {
  const items = [
    { key: "1", label: "Tab 1", children: <div className="p-4"><Ex1/></div> },
    { key: "2", label: "Tab 2", children: <div className="p-4"><Ex2/></div> },
    { key: "3", label: "Tab 3", children: <div className="p-4"><Ex3/></div> },
    { key: "4", label: "Tab 4", children: <div className="p-4"><Ex4/></div> },
    { key: "5", label: "Tab 5", children: <div className="p-5"><Ex5/></div> },
  ];

  return (
    <div className="w-[400px] p-6 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Chuyển Tab</h1>
      <Tabs defaultActiveKey="1" items={items} centered />
    </div>
  );
};

export default TabComponent;
