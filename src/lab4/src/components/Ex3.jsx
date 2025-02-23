import React, {useState} from "react";
import { Button } from "antd";

const Ex3 = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover =(e) => {
        e.target.style.transform = "translateX(10px)";
        e.target.style.background

        setTimeout(() => {
            e.target.style.transform = "translateX(-10px)";
        }, 100);

        setTimeout(() => {
            e.target.style.transform = "translateX(0)";
            setIsHovered(true);
        },200);
    }

    const handleLeave= (e) => {
         e.target.style.transform = "translateX(10px)";
        e.target.style.background

        setTimeout(() => {
            e.target.style.transform = "translateX(-10px)";
        }, 50);

        setTimeout(() => {
            e.target.style.transform = "translateX(0)";
            setIsHovered(false);
        },100);
    };

    return (
        <Button type="primary" danger={isHovered} style={{transition : "transform 0.1s, background-color 0.3s"}} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            Hover Me
        </Button>
    );
};

export default Ex3;
