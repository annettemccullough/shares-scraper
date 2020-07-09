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
    const text = $(article).find('.sprofile-article-textwrapper');

    const post = {
      img: $(article).find('.sprofile-article-img').attr('data-bgimg'),
      url: $(article).find('.sprofile-article-link').attr('href'),
      title: entities.decode($(text).find('.sprofile-article-title').text()),
      domain: $(text).find('.sprofile-article-domain').text(),
      shared: $(element).find('.sprofile-post-header .sprofile-post-time').text()
    }

    posts.push(post);
  });

  return { posts: [...posts] };
};

module.exports = getContent;
