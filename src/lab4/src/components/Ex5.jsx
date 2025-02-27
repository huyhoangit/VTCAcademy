import React, { useState } from "react";
import { Button } from "antd";
import { ImportOutlined, MinusOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useCounter from "../hooks/useCounter";

const Ex5 = () => {
    const [num,setnum] = useState(1);
    const {count,increment,decrement,reset} = useCounter(0,num);

    const handlenum = (e) => {
        const value = parseInt(e.target.value)
        setnum(isNaN(value) ? 0 : value);

    }

    const handlechange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setcount(value);
    }

    return(

        <div>
                <Input size="small" className="text-center w-10 p-0 text-xs" type="number" value={num} onChange={handlenum}></Input>

                <div className="flex flex-row items-center space-y-4 bg-gray-100 p-6">
                    <div className="block w-full max-w-xs">
                        <Button className="w-full px-6 py-2 text-lg" onClick = {decrement}>
                            <MinusOutlined /> Giảm
                        </Button>
                    </div>

                    <Input 
                        value = {count}
                        type="number"
                        min={0} 
                        className="text-center text-lg w-24"
                        onChange={handlechange}
                    />

                    <div className="block w-full max-w-xs">
                        <Button className="w-full px-6 py-2 text-lg" onClick={increment}>
                            <PlusOutlined /> Tăng
                        </Button>
                    </div>
                    <Button onClick={reset}>reset</Button>
                </div>
            </div>
    )
};

export default Ex5;