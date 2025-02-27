import react, { useState } from "react";
import { Button, Input } from "antd";

const Ex1 = () => {
    const [string,setString] = useState("");

    const handlechange = (e) => {
        setString(e.target.value);
    }

    const handleClick =() => {
        alert("Bạn đã nhập: "+ string);
    };

    return (
        <div>
            <Input placeholder="Write something..." onChange={handlechange}></Input>
            <Button onClick={handleClick} type="primary">Click Me</Button>
        </div>
    );
};

export default Ex1;