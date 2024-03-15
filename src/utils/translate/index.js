import ru from './ru.js'
import i18next from "i18next";

export default () => {
    const i18n = i18next.createInstance()
    i18n.init({
        lng: 'ru',
        resources: {
            ru: ru
        }
    })
    return i18n
}