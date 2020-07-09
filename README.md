# shares-scraper

Scrape shared posts from a pocket profile and return as json.

```json
{
  "posts": [
    {
      "img": "https://pocket-image-cache.com/direct?url=https%3A%2F%2Fpi.tedcdn.com%2Fr%2Ftalkstar-photos.s3.amazonaws.com%2Fuploads%2F8953d163-926f-4331-8f1f-86db90b94f0b%2FChimamandaAdichie_2009G-embed.jpg%3Fc%3D1050%252C550%26w%3D1050&resize=w548",
      "url": "http://getpocket.com/redirect?&url=https%3A%2F%2Fwww.ted.com%2Ftalks%2Fchimamanda_ngozi_adichie_the_danger_of_a_single_story&h=45d4ad335493ca6f35e27870f1ce45b47d947eed768397e1867956ffb9c4d7a6",
      "title": "The danger of a single story",
      "domain": "ted.com",
      "shared": "33 days ago"
    },
    {
      "img": "https://pocket-image-cache.com/direct?url=https%3A%2F%2Fi2.wp.com%2Fuser-images.githubusercontent.com%2F5809361%2F77432104-ff6b0a00-6db3-11ea-8e63-3bf13efbae5a.png%3Fresize%3D780%252C301%26ssl%3D1&resize=w548",
      "url": "http://getpocket.com/redirect?&url=https%3A%2F%2Fgithub.blog%2F2020-03-24-easier-organization-and-increased-scalability-for-repository-administrators%2F&h=12d493c2872d392b076736f7f4af363f26a579ae0d624c1c0d2e9014447005b7",
      "title": "Easier organization and increased scalability for repository administrators",
      "domain": "github.blog",
      "shared": "104 days ago"
    }
  ]
}
```

## usage
```bash
const { getContent } = require('..');
const pocket = '<username>';

const contentPromise = getContent({ pocket });

contentPromise.then(content => {
  console.log(`content = ${JSON.stringify(content, null, 2)}`);
});
```

### run the example
```bash
git+ssh://git@github.com/annettemccullough/shares-scraper.git && cd shares-scraper

node example/index.j
```
