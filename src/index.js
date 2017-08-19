require('dotenv').config({ silent: true });
const discovery = require('./watson-discovery-service');
const queryBuilder = require('./query-builder');

const [, , ...args] = process.argv;
const query = args.join(' ');

discovery.query(queryBuilder.search({ query }))
  .then(response => {
    console.log(response.passages);
  })
  .catch(error => {
    console.error(error);
    if (error.message === 'Number of free queries per month exceeded') {
      res.status(429).json(error);
    } else {
      res.status(error.code).json(error);
    }
  });
