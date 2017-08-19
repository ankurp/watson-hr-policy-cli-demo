const [, , ...args] = process.argv;
const query = args.join(' ');

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const discovery = new DiscoveryV1({
  username: 'username',
  password: 'password',
  version_date: '2017-08-01'
});

discovery.query({
  query,
  environment_id: 'environment id',
  collection_id: 'collection id',
  passages: true
}, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(response.passages);
  }
});
