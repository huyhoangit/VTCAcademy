import react from "react";
import { Button } from "antd";

const Ex1 = () => {
    const handleClick =() => {
        alert("This's Ex1,bro!");
    };

    return (
        <div>
            <Button onClick={handleClick} type="primary">Click Me</Button>
        </div>
    );
};

export default Ex1;