import axios from "axios";
import parserRss from "./parserRss.js";
import _ from "lodash";
import watchedState from "../view/view.js";

const updatePosts = (state) => {
  state.uiState.feeds.forEach(({ link, id }) => {
    axios
      .get(
        `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(
          link
        )}`
      )
      .then((response) => {
        const content = response.data.contents;
        const [, posts] = parserRss(content);
        const currentPosts = state.uiState.posts.filter(
          ({ idFeed }) => idFeed === id
        );
        const newPosts = _.differenceBy(posts, currentPosts, "title");
        if (newPosts.length !== 0) {
          newPosts.forEach((post) => (post.idFeed = id));
          const reversedPosts = newPosts.reverse();
          watchedState.uiState.posts.push(...reversedPosts);
        }
      })
      .catch(console.log);
  });
  setTimeout(updatePosts, 5000, state);
};
export default updatePosts;
