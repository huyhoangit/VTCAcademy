import React, { useState, useMemo } from "react";
import { Button } from "antd";

const Ex3 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleHover = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsHovered(true);
            setIsAnimating(false);
        }, 50); 
    };

    const handleLeave = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsHovered(false);
            setIsAnimating(false);
        }, 50);
    };

    const buttonStyle = useMemo(() => ({
        transition: "transform 0.1s, background-color 0.3s",
        transform: isAnimating ? "translateX(30px)" : isHovered ? "scale(1.1)" : "scale(1)",
        backgroundColor: isHovered ? "#ff4d4f" : "#1890ff",
    }), [isHovered, isAnimating]);

    const buttonText = useMemo(() => (isHovered ? "Hovered" : "Hover Me"), [isHovered]);

    return (
        <Button
            type="primary"
            danger={isHovered}
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            {buttonText}
        </Button>
    );
};

export default Ex3;
