const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const handleError = require('../data/helpers/handlers').handleError;
const config = require('../config');
let Story = require('../data/Story');
let Op = require('../data/helpers/setup').Op;

let apiRouter = express.Router();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.CLIENT_DOMAIN}/.well-known/jwks.json`
  }),
  // audience: config.AUTH0_AUDIENCE,
  issuer: `https://${config.CLIENT_DOMAIN}/`,
  algorithm: 'RS256'
});

apiRouter.route('/data')
  .post((req, resp) => {
    let forDate = req.body['forDate'];

    console.log('ForDate: ', forDate);

    Story.findAll({
      where: {
        created: {
          [Op.lt]: forDate,
          [Op.gt]: new Date(forDate - 60 * 60 * 24)
        }
      }
    }).then(data => {

      console.log('Found Data for Date ', data);

      return resp.json({
        opStatus: 'Ok',
        data: data
      });
    })
      .catch(e => handleError(e));
  });

// apiRouter.route('/data')
//   .get((req, resp) => {
//     return resp.json({
//       name: 'Hello Planet',
//       route: '/api/all'
//     });
//   });

module.exports = apiRouter;