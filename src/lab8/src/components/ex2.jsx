import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema";
import { Button, DatePicker, Input, Select } from "antd";
import { StarTwoTone } from "@ant-design/icons";

const Ex2 = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log("Submitting...", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
            <div>
                <label className="block text-gray-700"><label className="text-red-500">*</label>Username:</label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
                <p className="text-red-500">{errors.name?.message}</p>
            </div>

            <div>
                <label className="block text-gray-700"><label className="text-red-500">*</label>Password:</label>
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <Input.Password {...field} />}
                />
                <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <div>
                <label className="block text-gray-700"><label className="text-red-500">*</label>Email</label>
                <Controller
                    name="email"
                    control={control}
                    render={({field}) => <Input {...field}/>}
                />
                <p>{errors.email?.message}</p>
            </div>

            <div>
                <label className="block text-gray-700"><label className="text-red-500">*</label>Phone:</label>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
                <p className="text-red-500">{errors.phone?.message}</p>
            </div>

            <div>
                <label className="m-2"><label className="text-red-500">*</label>Ngày sinh</label>
                <Controller
                    name="dob"
                    control={control}
                    render={({field}) => <DatePicker {...field}/>}
                />
                <p>{errors.dob?.message}</p>
            </div>

            <div>
                <label className="m-3"><label className="text-red-500">*</label>Giới tính</label>
                <Controller
                    name="gender"
                    control={control}
                    render={({field}) => <Select
                                            defaultValue="male"
                                            style={{ width: 120 }}
                                            allowClear
                                            options={[{ value: 'male', label: 'Male' },{value: 'female', label: 'Female'}, {value: 'other', label:'Other'}]}
                                            placeholder="select it"
                                            />}
                />
                <p>{errors.gender?.message}</p>
            </div>

            <div>
                <label>Địa chỉ</label>
                <Controller
                    name="address"
                    control={control}
                    render={({field}) => <Input.TextArea/>}
                />
                <p></p>
            </div>

            <Button htmlType="submit" type="primary">
                Submit
            </Button>
        </form>
    );
};

export default Ex2;
