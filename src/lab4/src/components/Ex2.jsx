import react, { useState } from "react";
import { Input } from "antd";

const Ex2 = () => {
    const [value,setvalue] = useState("");

    const handleKeydown =(e) => {
        setvalue (e.target.value);
        console.log("Giá trị hiện tại : ", e.target.value);
    };

    return (
    <div>
        <p>Nhập text vào ô bên dưới để xem thay đổi</p>
        <Input placeholder="Wirte something..." value={value} onChange={handleKeydown}></Input>
        <p>Giá trị hiện tại : {value}</p>
    </div>
    );
};

export default Ex2;