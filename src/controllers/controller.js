import axios from 'axios';
import _ from 'lodash';
import validate from '../utils/validate.js';
import watchedState from '../view/view.js';
import parserRcc from '../utils/parserRss.js';
import i18n from '../utils/translate/index.js';

const form = document.querySelector('.rss-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  watchedState.rssForm.state = 'filling';
  const { value } = form.elements.input;
  validate({ inputValue: value }, watchedState)
    .then(() => {
      watchedState.rssForm.state = 'sending';
      axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(value)}`)
        .then((response) => {
          const content = response.data.contents;
          const [feeds, posts] = parserRcc(content, value);

          const id = _.uniqueId();
          feeds.id = id;
          posts.forEach((post) => {
            post.idFeed = feeds.id;
          });

          watchedState.urlsRcc.push(value);
          watchedState.uiState.feeds.push(feeds);
          const reversedPosts = posts.reverse();
          watchedState.uiState.posts.push(...reversedPosts);
          watchedState.rssForm.init = true;
          watchedState.rssForm.state = 'success';
        })
        .catch((e) => {
          watchedState.rssForm.error = i18n.t(e.message);
          watchedState.rssForm.state = 'invalid';
        });
    })
    .catch((err) => {
      watchedState.rssForm.error = i18n.t(err.message);
      watchedState.rssForm.state = 'invalid';
    });
});
