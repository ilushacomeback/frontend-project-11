import onChange from 'on-change';
import state from '../app';
import renderErrors from './renderErrors.js';

const watchedState = onChange(state, (path, value) => {
  if (path === 'rssForm.error') {
    renderErrors(value);
  } else if (value === 'sending') {
    const input = document.querySelector('#url-input')
    const feedback = document.querySelector('.feedback');
    input.classList.remove('is-invalid')
    input.value = ''
    feedback.textContent = ''
    input.focus()
  }
});
export default watchedState;
