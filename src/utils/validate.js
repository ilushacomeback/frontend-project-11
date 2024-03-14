import * as yup from "yup";
import state from "../app";

const validate = (inputValue) => {
  const schema = yup.object().shape({
    inputValue: yup
      .string()
      .url("Ссылка должна быть валидным URL")
      .required()
      .notOneOf(state.urlsRcc, "RSS уже существует"),
  });
  return schema.validate(inputValue);
};
export default validate;
