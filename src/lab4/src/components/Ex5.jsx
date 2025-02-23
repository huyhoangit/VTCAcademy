import React, { useState } from "react";
import { Button } from "antd";
import { ImportOutlined, MinusOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Ex5 = () => {
    const [count,setcount] = useState(0);
    const [num,setnum] = useState(1);

    const handlenum = (e) => {
        const value = parseInt(e.target.value)
        setnum(isNaN(value) ? 0 : value);

    }

    const Increase = () => {
        setcount(prev => prev + num);
    };

    const Decrease = () => {
        setcount(prev => (prev > 0 ? prev - num : 0));
    };

    const handlechange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setcount(value);
    }

    return(

        <div>
                <Input size="small" className="text-center w-10 p-0 text-xs" type="number" value={num} onChange={handlenum}></Input>

                <div className="flex flex-row items-center space-y-4 bg-gray-100 p-6">
                    <div className="block w-full max-w-xs">
                        <Button className="w-full px-6 py-2 text-lg" onClick = {Decrease}>
                            <MinusOutlined /> Giảm
                        </Button>
                    </div>

                    <Input 
                        value = {count}
                        onChange={handlechange}
                        type="number"
                        min={0} 
                        className="text-center text-lg w-24"
                    />

                    <div className="block w-full max-w-xs">
                        <Button className="w-full px-6 py-2 text-lg" onClick={Increase}>
                            <PlusOutlined /> Tăng
                        </Button>
                    </div>
                </div>
            </div>
    )
};

export default Ex5;