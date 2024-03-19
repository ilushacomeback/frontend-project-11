import axios from 'axios';
import _ from 'lodash';
import parserRss from './parserRss.js';

const updatePosts = (watchedState) => {
  watchedState.uiState.feeds.forEach(({ link, id }) => {
    axios
      .get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(link)}`)
      .then((response) => {
        const content = response.data.contents;
        const [, posts] = parserRss(content);
        const currentPosts = watchedState.uiState.posts.filter(
          ({ idFeed }) => idFeed === id,
        );
        const newPosts = _.differenceBy(posts, currentPosts, 'title');
        if (newPosts.length !== 0) {
          newPosts.forEach((post) => {
            post.idFeed = id
          });
          const reversedPosts = newPosts.reverse();
          watchedState.uiState.posts.push(...reversedPosts);
        }
      })
      .catch(console.log);
  });
  setTimeout(updatePosts, 5000, watchedState);
};
export default updatePosts;
