import onChange from 'on-change';
import state from '../app';
import renderErrors from './renderErrors.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderModal from './renderModal.js';

const watchedState = onChange(state, (path, value) => {
  const button = document.querySelector('button[type=submit]');
  const input = document.querySelector('#url-input');
  if (path === 'uiState.modalId') {
    renderModal(state);
  }
  if (value !== 'sending') {
    button.disabled = false;
    input.disabled = false;
  }
  if (value === 'sending') {
    const feedback = document.querySelector('.feedback');
    button.setAttribute('disabled', true);
    input.setAttribute('disabled', true);
    input.classList.remove('is-invalid');
    feedback.textContent = '';
  }
  if (value === 'invalid') {
    renderErrors(state);
  }
  if (value === 'success') {
    input.value = '';
    input.focus();
    renderFeeds(state);
    renderPosts(state);
  }
});
export default watchedState;
