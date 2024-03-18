export default (state) => {
  const id = state.uiState.modalId;
  const post = state.uiState.posts.find((curPost) => curPost.id === id);
  const modalTitle = document.querySelector('.modal-title');
  const modalDescription = document.querySelector('.modal-body');
  const modalFooter = document.querySelector('.modal-footer');
  const modalLink = modalFooter.querySelector('a');
  modalTitle.textContent = post.title;
  modalDescription.innerHTML = post.description;
  modalLink.setAttribute('href', post.link);
};
