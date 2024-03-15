import renderContainerList from "./renderContainerList.js";

export default (posts) => {
    const containerPosts = document.querySelector(".posts");
    
    if (!containerPosts.hasChildNodes()) {
      renderContainerList(containerPosts, "Посты");
    }
  
    const list = containerPosts.querySelector('ul')
    list.innerHTML = ''
    posts.forEach(({ title, description, link }) => {
      const li = document.createElement("li");
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
  
      const a = document.createElement('a')
      a.setAttribute('href', link)
      a.setAttribute('target', '_blank')
      a.classList.add('fw-bold')
      a.textContent = title

      const button = document.createElement('button')
      button.setAttribute('type', 'button')
      button.classList.add('btn', 'btn-outline-primary', 'btn-sm')
      button.dataset.bsToggle = 'modal'
      button.textContent = 'Просмотр'

      li.append(a, button)
      list.prepend(li)
    });
  };