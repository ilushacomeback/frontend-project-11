import validate from "../utils/validate.js";
import watchedState from "../view/view.js";
import axios from "axios";
import parserRcc from "../utils/parserRss.js";

const form = document.querySelector(".rss-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = form.elements.input;
  validate({ inputValue: value }, watchedState)
    .then(() => {
      watchedState.rssForm.state = "sending";
      axios
        .get(
          `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(value)}`
        )
        .then((response) => {
          try {
            const content = response.data.contents;
            const [feeds, posts] = parserRcc(content);
            watchedState.rssForm.state = "success";
            watchedState.urlsRcc.push(value);
            watchedState.uiState.feeds.push(feeds);
            watchedState.uiState.posts.push(...posts);
            watchedState.rssForm.error = null;
          } catch {
            watchedState.rssForm.error = "Ресурс не содержит валидный RSS";
            watchedState.rssForm.state = "invalid";
          }
        })
        .catch((e) => {
          console.log(e);
          watchedState.rssForm.error = "Ошибка сети";
          watchedState.rssForm.state = "invalid";
        });
    })
    .catch((e) => {
      watchedState.rssForm.error = e.errors.join("");
      watchedState.rssForm.state = "invalid";
    });
});
