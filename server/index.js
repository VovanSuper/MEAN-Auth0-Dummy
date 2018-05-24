'use strict';

//-- Require
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const config = require('./config.js');
const path = require('path');
//-- JWT check

// @TODO: Remove .SAMPLE from /server/config.js.SAMPLE
// and update with your proper Auth0 information

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

//--- Set up app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(process.cwd(), 'dist/client')));

app.get('/api/all', (req, resp) => {
  return resp.json({
    name: 'Hello Planet',
    route: '/api/all'
  });
});

app.get('/api/:forDate', (req, resp) => {
  return res.json({
    name: 'Hello Planet',
    route: '/api'
  });
});


app.get('*', (req, resp) => {
  return resp.status(200).sendFile(path.join(process.cwd(), 'dist/client/index.html'));
})
//--- Port
app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});
