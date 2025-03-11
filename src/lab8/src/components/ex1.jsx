import { Form, Input, Button, Checkbox } from "antd";
import React from "react";

export default function Ex1() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Dữ liệu form:", values);
    alert("Gửi form thành công!");
  };

  const handleFailed = (errorInfo) => {
    console.log("Lỗi:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit} 
      onFinishFailed={handleFailed} 
      autoComplete="off"
    >
      <Form.Item
        label="Quát do nem"
        name="name"
        rules={[{ required: true, message: "Nhập tên đi bồ~" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mail"
        name="email"
        rules={[{ required: true, message: "Thiếu mail kìa bồ~" }, {type : "email", message : "nhập sai rồi bồ~"}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
      label = "Tăn nhín"
      name= "textarea"
      rules={[{required: true, message: "không nhập tin sao gửi bồ~"}]}
      >
        <Input.TextArea/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
