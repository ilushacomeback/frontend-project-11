import renderContainerList from './renderContainerList.js';

export default (feed) => {
  const containerFeeds = document.querySelector('.feeds');
  if (!containerFeeds.hasChildNodes()) {
    renderContainerList(containerFeeds, 'Фиды');
  }

  const list = containerFeeds.querySelector('ul');
  feed.forEach(({ title, description }) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'border-0', 'border-end-0');

    const h3 = document.createElement('h3');
    h3.classList.add('h6', 'm-0');
    h3.textContent = title;

    const paragraph = document.createElement('p');
    paragraph.classList.add('m-0', 'small', 'text-black-50');
    paragraph.textContent = description;

    li.append(h3, paragraph);
    list.prepend(li);
  });
};
