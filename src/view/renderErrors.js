export default (error) => {
  const input = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');
  input.classList.add('is-invalid');
  feedback.textContent = error;
  input.value = '';
};
