export default (state) => {
  const { error } = state.rssForm;
  const input = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');
  feedback.classList.add('text-danger');
  input.classList.add('is-invalid');
  feedback.textContent = error;
};
