import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  educations: yup.array().of(
    yup.object().shape({
      school: yup.string().required("Vui lòng nhập trường!"),
      degree: yup.string().required("Vui lòng nhập bằng cấp!"),
      year: yup
        .number()
        .typeError("Năm tốt nghiệp phải là số!")
        .required("Vui lòng nhập năm tốt nghiệp!")
        .min(1900, "Năm tốt nghiệp không hợp lệ!")
        .max(new Date().getFullYear(), "Năm tốt nghiệp không thể lớn hơn hiện tại!"),
    })
  ),
});

const Ex3 = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      educations: [{ school: "", degree: "", year: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className=" items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
      >

        {fields.map((field, index) => (
          <div key={field.id} className="p-4 mb-4 border border-gray-300 rounded-lg relative">
            <h3 className="font-semibold mb-2">Học vấn #{index + 1}</h3>

            <input
              type="text"
              {...register(`educations.${index}.school`)}
              className={`w-full p-2 border ${
                errors.educations?.[index]?.school ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Tên trường"
            />
            <p className="text-red-500 text-sm">{errors.educations?.[index]?.school?.message}</p>

            <input
              type="text"
              {...register(`educations.${index}.degree`)}
              className={`w-full p-2 mt-3 border ${
                errors.educations?.[index]?.degree ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Bằng cấp"
            />
            <p className="text-red-500 text-sm">{errors.educations?.[index]?.degree?.message}</p>

            <input
              type="text"
              {...register(`educations.${index}.year`)}
              className={`w-full p-2 mt-3 border ${
                errors.educations?.[index]?.year ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Năm tốt nghiệp"
            />
            <p className="text-red-500 text-sm">{errors.educations?.[index]?.year?.message}</p>

            {fields.length > 1 && (
              <button
                type="button"
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => remove(index)}
              >-
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 text-blue-500 border border-blue-500 py-2 rounded-md hover:bg-blue-100 transition"
          onClick={() => append({ school: "", degree: "", year: "" })}
        >
          + Thêm học vấn
        </button>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition"
        >
          Lưu thông tin
        </button>
      </form>
    </div>
  );
};

export default Ex3;
