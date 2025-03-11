import { DatePicker } from "antd";
import * as yup from "yup";
const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một chữ hoa")
    .matches(/[a-z]/, "Mật khẩu phải có ít nhất một chữ thường")
    .matches(/[0-9]/, "Mật khẩu phải có ít nhất một số")
    .matches(/[@$!%*?&]/, "Mật khẩu phải có ít nhất một ký tự đặc biệt")
    .required("Mật khẩu không được để trống"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Vui lòng xác nhận mật khẩu"),
  birthDate: yup
    .date()
    .max(new Date(), "Ngày sinh không hợp lệ")
    .required("Vui lòng chọn ngày sinh"),
  creditCard: yup
    .string()
    .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, "Số thẻ không hợp lệ, đúng format XXXX-XXXX-XXXX-XXXX")
    .required("Vui lòng nhập số thẻ tín dụng"),
});
export default schema;