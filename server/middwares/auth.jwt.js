const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const config = require('../helpers/config');


module.exports = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.CLIENT_DOMAIN}/.well-known/jwks.json`
  }),
  audience: `${config.AUTH0_AUDIENCE}`,
  issuer: `https://${config.CLIENT_DOMAIN}/`,
  algorithm: 'RS256'
})