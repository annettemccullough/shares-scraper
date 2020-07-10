const cheerio = require("cheerio");
const axios = require("axios");

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const fetchPage = async (username) => {
  const siteUrl = `https://getpocket.com//${username}`;
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getContent = async (username) => {
  const posts = [];

  const $ = await fetchPage(username);
  $(".sprofile-content .sprofile-post").each((index, element) => {
    const article = $(element).find('.sprofile-post-article');
    const info = $(article).find('.sprofile-article-textwrapper');

    const comment = $(element).find('.sprofile-attribution-content .sprofile-attribution-comment').text();
    const tags = comment.match(/#\w+/g);

    const post = {
      img: $(article).find('.sprofile-article-img').attr('data-bgimg'),
      url: $(article).find('.sprofile-article-link').attr('href'),
      title: entities.decode($(info).find('.sprofile-article-title').text()),
      domain: $(info).find('.sprofile-article-domain').text(),
      shared: $(element).find('.sprofile-post-header .sprofile-post-time').text(),
      comment,
      tags
    }

    posts.push(post);
  });

  return { posts: [...posts] };
};

module.exports = getContent;
