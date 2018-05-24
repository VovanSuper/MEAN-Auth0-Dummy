const handleError = require('./handlers').handleError;
module.exports = (Story) => {

  let s1 = Story.create({
    text: 'Some suppa long text stub',
    created: new Date()
  });

  let s2 = Story.create({
    text: 'Yet anothoer very long text stub',
    created: new Date()
  });

  let s3 = Story.create({
    text: 'Story told 10 days ago...',
    created: new Date(new Date() - 24 * 60 * 60 * 10)
  });

  let s4 = Story.create({
    text: 'Story told 10 days ago...',
    created: new Date(new Date() - 24 * 60 * 60 * 10)
  });

  return Promise.all([s1, s2, s3, s4]).catch(e => handleError(e));
}