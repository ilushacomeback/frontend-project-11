import validate from "../utils/validate.js";
import watchedState from "../view/view.js";

const form = document.querySelector(".rss-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = form.elements.input;
  validate({ inputValue: value }, watchedState)
    .then(() => {
      watchedState.urlsRcc.push(value);
      watchedState.rssForm.state = "sending";
    })
    .catch((e) => {
      watchedState.rssForm.error = e.errors.join('');
      watchedState.rssForm.state = 'invalid'
    });
});
