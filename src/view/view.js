import onChange from "on-change";
import state from "../app";
import renderErrors from "./renderErrors.js";
import renderFeeds from "./renderFeeds.js";
import renderPosts from "./renderPosts.js";

const watchedState = onChange(state, (path, value) => {
  if (path === "rssForm.error" && value) {
    renderErrors(value);
  } else if (value === "success") {
    const input = document.querySelector("#url-input");
    const feedback = document.querySelector(".feedback");
    input.classList.remove("is-invalid");
    input.value = "";
    feedback.textContent = "";
    input.focus();
  }
  if (path === "uiState.feeds") {
    renderFeeds(value);
  }
  if (path === 'uiState.posts') {
    renderPosts(value)
  }
});
export default watchedState;
