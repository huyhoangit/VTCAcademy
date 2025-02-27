import React, { useState, useEffect, useCallback } from "react";
import { Input, List, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Ex2 = () => {
    const [value, setValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const search = useCallback((query) => {
        if (!query) {
            setSearchResults([]);
            return;
        }
        console.log("Search triggered for:", query);
        setSearchResults([
            `Kết quả 1 cho "${query}"`,
            `Kết quả 2 cho "${query}"`,
            `Kết quả 3 cho "${query}"`,
        ]);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            search(value);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [value, search]);

    return (
        <div className="items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-xl p-6 bg-white shadow-md rounded-lg">
                <Input
                    className="mb-4"
                    size="large"
                    placeholder="Nhập từ khóa tìm kiếm..."
                    prefix={<SearchOutlined />}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    allowClear
                />
                <List
                    bordered
                    dataSource={searchResults}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </Card>
        </div>
    );
};

export default Ex2;
