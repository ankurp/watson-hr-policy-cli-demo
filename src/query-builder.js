module.exports = {
  search(queryOpts) {
    const params = Object.assign({
      environment_id: process.env.ENVIRONMENT_ID,
      collection_id: process.env.COLLECTION_ID,
      count: 10,
      passages: true
    }, queryOpts);

    return params;
  }
};
