import onChange from 'on-change';
import state from '../app';
import renderErrors from './renderErrors.js';

const watchedState = onChange(state, (path, value) => {
  if (path === 'error') {
    renderErrors(value);
  }
});
export default watchedState;
