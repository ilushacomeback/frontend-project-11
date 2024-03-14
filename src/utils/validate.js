import * as yup from 'yup';

const schema = yup.object().shape({
  inputValue: yup.string().url().required(),
});
const validate = (inputValue) => schema
  .validate(inputValue);
export default validate;
