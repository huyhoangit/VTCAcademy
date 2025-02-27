import { Button } from "antd";
import React, { useState, useMemo, useRef } from "react";

const Ex4 = () => {
  const [number, setNumber] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const addNumber = () => {
    const value = parseInt(input, 10);
    if (!isNaN(value)) {
      setNumber((prev) => [...prev, value]);
      setInput("");
      inputRef.current.focus();
    }
  };

  const removeNumber = (index) => {
    setNumber((prev) => prev.filter((_, i) => i !== index));
  };

  const totalSum = useMemo(() => {
    console.log("Đang tính lại tổng...");
    return number.reduce((sum, num) => sum + num, 0);
  }, [number]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="border p-2 flex-grow rounded">
        <input
          ref={inputRef}
          type="text"
          className=""
          value={input}
          onChange={(e) => {
            if (/^\d*$/.test(e.target.value)) {
              setInput(e.target.value);
            }
          }}
          onKeyDown={(e) => e.key === "Enter" && addNumber()}
          placeholder="Nhập số cần tính..."
        />
        <button
          onClick={addNumber}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Thêm
        </button>
      </div>
      <ul>
        {number.map((num, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
          >
            <span>Số {num}</span>
            <button
              onClick={() => removeNumber(index)}
              className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
      <h1 className="mt-4 text-lg font-semibold">
        Tổng: <span className="text-blue-600">{totalSum}</span>
      </h1>
    </div>
  );
};

export default Ex4;
