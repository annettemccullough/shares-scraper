const { getContent } = require('..');

const pocket = '@annettemccullough';

const contentPromise = getContent({ pocket });

contentPromise.then(content => {
  console.log(`content = ${JSON.stringify(content, null, 2)}`);
});
