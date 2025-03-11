import React from "react";
import { useForm, Controller } from "react-hook-form";
import schema from "./ex5Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "antd";

const Ex5 = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Submitting...", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border rounded-lg">
      {/* Mật khẩu */}
      <div className="mb-3">
        <label className="block font-medium">* Mật khẩu</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              className="w-full border px-3 py-1.5 rounded-md"
              placeholder="Nhập mật khẩu"
            />
          )}
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      {/* Xác nhận mật khẩu */}
      <div className="mb-3">
        <label className="block font-medium">* Xác nhận mật khẩu</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              className="w-full border px-3 py-1.5 rounded-md"
              placeholder="Xác nhận mật khẩu"
            />
          )}
        />
        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
      </div>

      {/* Ngày sinh */}
      <div className="mb-3">
        <label className="block font-medium">* Ngày sinh</label>
        <Controller
          name="birthDate"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="date"
              className="w-full border px-3 py-1.5 rounded-md"
            />
          )}
        />
        <p className="text-red-500 text-sm">{errors.birthDate?.message}</p>
      </div>

      {/* Số thẻ tín dụng */}
      <div className="mb-3">
        <label className="block font-medium">* Số thẻ tín dụng</label>
        <Controller
          name="creditCard"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              className="w-full border px-3 py-1.5 rounded-md"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              maxLength="19"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); 
                value = value.replace(/(\d{4})/g, "$1-").trim();
                value = value.slice(0, 19); 
                field.onChange(value);
              }}
            />
          )}
        />
        <p className="text-red-500 text-sm">{errors.creditCard?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Xác nhận
      </button>
    </form>
  );
};

export default Ex5;
