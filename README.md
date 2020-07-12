# shares-scraper

Scrape shared posts from a pocket profile and return as json.

```json
{
 "posts": [
   {
     "img": "https://pocket-image-cache.com/direct?url=https%3A%2F%2Fi2.wp.com%2Fuser-images.githubusercontent.com%2F5809361%2F77432104-ff6b0a00-6db3-11ea-8e63-3bf13efbae5a.png%3Fresize%3D780%252C301%26ssl%3D1&resize=w548",
     "url": "http://getpocket.com/redirect?&url=https%3A%2F%2Fgithub.blog%2F2020-03-24-easier-organization-and-increased-scalability-for-repository-administrators%2F&h=12d493c2872d392b076736f7f4af363f26a579ae0d624c1c0d2e9014447005b7",
     "title": "Easier organization and increased scalability for repository administrators",
     "domain": "github.blog",
     "shared": "3 hours ago",
     "comment": "#tech #github",
     "tags": [
       "#tech",
       "#github"
     ]
   },
   {
     "img": "https://pocket-image-cache.com/direct?url=https%3A%2F%2Fapplitools.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fautomated_testing-1024x443.png&resize=w548",
     "url": "http://getpocket.com/redirect?&url=https%3A%2F%2Fapplitools.com%2Fblog%2Fmeasure-your-test-automation-maturity%2F&h=26e676901fad25fa478207c5c1874d623dbcc55bdd9fdaa4b4be87f26652d2e4",
     "title": "Measure Your Test Automation Maturity",
     "domain": "applitools.com",
     "shared": "3 hours ago",
     "comment": "#tech #testing #automation\n",
     "tags": [
       "#tech",
       "#testing",
       "#automation"
     ]
   },
   {
     "img": "https://pocket-image-cache.com/direct?url=https%3A%2F%2Fgrpc.io%2Fimg%2Flogos%2Fgrpc-logo.png&resize=w548",
     "url": "http://getpocket.com/redirect?&url=https%3A%2F%2Fgrpc.io%2F&h=4fe775351d2ceba972cc6bfd37b636b4b1d7e5b0cd6e0e5dae80a84aeb65c1f5",
     "title": "Why gRPC?",
     "domain": "grpc.io",
     "shared": "3 hours ago",
     "comment": "#tech #grpc",
     "tags": [
       "#tech",
       "#grpc"
     ]
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

node example/index.js
```
