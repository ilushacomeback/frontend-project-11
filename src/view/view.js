import onChange from 'on-change';
import state from '../app';
import renderErrors from './renderErrors.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderModal from './renderModal.js';
import updatePosts from '../utils/updatePosts.js';

const watchedState = onChange(state, (path, value, oldValue) => {
  const button = document.querySelector('button[type=submit]');
  const input = document.querySelector('#url-input');
  if (path === 'uiState.modalId') {
    renderModal(state);
  }
  if (path === 'rssForm.valid') {
    updatePosts(state)
  }
  if (value !== 'sending' && path === 'rssForm.state') {
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
  if (path === 'uiState.posts') {
    const newPosts = value.slice(oldValue.length)
    renderPosts(newPosts);
  }
  if (path === 'uiState.feeds') {
    const newFeeds = value.slice(oldValue.length)
    renderFeeds(newFeeds)
  }
  if (value === 'success') {
    input.value = '';
    input.focus();
  }
});
export default watchedState;
