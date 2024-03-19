import * as yup from 'yup';
import i18n from './translate/index.js';

const validate = (inputValue, state) => {
  yup.setLocale({
    mixed: {
      notOneOf: i18n.t('notUniqueUrl'),
    },
    string: {
      url: i18n.t('inCorrectUrl'),
      required: i18n.t('empty'),
    },
  });
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
