import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const APIForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        try {
            setErrorMessage("");
            const response = await axios.post("https://api.example.com/register", data);
            console.log("Success:", response.data);
        } catch (error) {
            setErrorMessage("Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau!");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">  
            {errorMessage && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-lg">
                    <strong>Lỗi</strong>
                    <p>{errorMessage}</p>
                </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium"><label className="text-red-500">*</label> Tên đăng nhập</label>
                    <input 
                        type="text" 
                        {...register("username", { required: "Tên đăng nhập là bắt buộc!" })} 
                        className="w-full p-3 border rounded-md mt-1" 
                        placeholder="Nhập tên đăng nhập" 
                    />
                    <p className="text-red-500 text-sm">{errors.username?.message}</p>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium"><label className="text-red-500">*</label> Email</label>
                    <input 
                        type="email" 
                        {...register("email", { required: "Email là bắt buộc!" })} 
                        className="w-full p-3 border rounded-md mt-1 bg-gray-100" 
                        placeholder="Nhập email"
                    />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                </div>
                
                <div className="mb-4 relative">
                    <label className="block text-gray-700 font-medium"><label className="text-red-500">*</label> Mật khẩu</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        {...register("password", { required: "Mật khẩu là bắt buộc!" })} 
                        className="w-full p-3 border rounded-md mt-1" 
                        placeholder="Nhập mật khẩu"
                    />
                    <button 
                        type="button" 
                        className="absolute inset-y-6 right-1 flex items-center text-gray-500 h-11"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙈" : "🙉"}
                    </button>
                    <p className="text-red-500 text-sm">{errors.password?.message}</p>
                </div>
                
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
                    Đăng ký
                </button>
            </form>
        </div>
    );
};

export default APIForm;
