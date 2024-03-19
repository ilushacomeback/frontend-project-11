import _ from 'lodash';
import renderContainerList from './renderContainerList.js';

export default (posts, watchedState) => {
  const containerPosts = document.querySelector('.posts');
  if (!containerPosts.hasChildNodes()) {
    renderContainerList(containerPosts, 'Посты');
  }

  const list = containerPosts.querySelector('ul');
  posts.forEach((post) => {
    const { title, link } = post;
    const index = _.uniqueId();
    post.id = index.toString();
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');

    const a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    a.classList.add('fw-bold');
    a.dataset.id = index;
    a.textContent = title;

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    button.dataset.bsToggle = 'modal';
    button.dataset.bsTarget = '#modal';
    button.dataset.id = index;
    button.textContent = 'Просмотр';

    a.addEventListener('click', ({ target }) => {
      target.classList.remove('fw-bold');
      target.classList.add('fw-normal', 'link-secondary');
    });

    button.addEventListener('click', ({ target }) => {
      watchedState.uiState.modalId = target.dataset.id;
      const visitedLink = target.previousSibling;
      visitedLink.classList.remove('fw-bold');
      visitedLink.classList.add('fw-normal', 'link-secondary');
    });

    li.append(a, button);
    list.prepend(li);
  });
};
