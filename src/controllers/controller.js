import validate from '../utils/validate.js';
import watchedState from '../view/view.js';

const form = document.querySelector('.rss-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = form.elements.input;
  validate({ inputValue: value })
    .then(() => {
      watchedState.state = 'sending';
    })
    .catch(() => {
      watchedState.error = 'Ссылка должна быть валидным URL';
    });
});
