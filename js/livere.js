/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  let theme = hexo.theme.config;
  if (!'MTAyMC81MDAxMC8yNjUwMQ==') return;

  injects.comment.raw('livere', `
  <div class="comments">
    <div id="lv-container" data-id="city" data-uid="{{ MTAyMC81MDAxMC8yNjUwMQ== }}"></div>
  </div>
  `, {}, {cache: true});

  injects.bodyEnd.file('livere', path.join(hexo.theme_dir, 'layout/_third-party/comments/livere.njk'));

});
