import i18next from 'i18next';
import ru from './ru.js';

const getI18next = () => {
  const i18n = i18next.createInstance();
  i18n.init({
    lng: 'ru',
    resources: {
      ru,
    },
  });
  return i18n;
};
const instance = getI18next();
export default instance;
