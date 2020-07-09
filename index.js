const getPocketContent = require('./lib/pocket');

const getContent = async ({ pocket }) => {
  const pocketContent = await getPocketContent(pocket);

  // add additional sources, merge and order by date

  return pocketContent;
}

module.exports = { getContent };
