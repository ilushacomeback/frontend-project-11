import * as yup from "yup";
import i18n from './translate/index.js'

const validate = (inputValue, state) => {
  const i18 = i18n()
  yup.setLocale({
    mixed: {
      notOneOf: i18.t('notUniqueUrl')
    },
    string: {
      url: i18.t('inCorrectUrl')
    }
  })
  const schema = yup.object().shape({
    inputValue: yup
      .string()
      .url()
      .required()
      .notOneOf(state.urlsRcc),
  });
  return schema.validate(inputValue);
};
export default validate;
