import { DatePicker } from "antd";
import * as yup from "yup";

const phoneRegExp = /^(0[3-9]|(\+84)[3-9])\d{8}$/;

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().required("Email is required!").email("Wrong format!"),
  dob: yup.date().typeError("Ngày sinh không hợp lệ").required("Ngày sinh là bắt buộc!").max(new Date(), "Ngày sinh không lớn hơn ngày hiện tại"),
  phone: yup
    .string()
    .required("Phone number is required!")
    .matches(phoneRegExp, "Phone number must start with 0 or +84 and have 10 digits"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required!"),
  gender: yup.string().required("Giới tính là bắt buộc!").oneOf(["male", "female", "other"], "giới tính không hợp lệ"),
});

export default validationSchema;
