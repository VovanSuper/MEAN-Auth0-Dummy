const express = require('express');

const  { handleError } = require('../helpers/handlers');
const config = require('../helpers/config');
let Story = require('../data/Story');
const jwtCheck = require('../middwares/auth.jwt');
let { Op } = require('../helpers/setup');

let apiRouter = express.Router();


apiRouter.route('/data')
  .all([jwtCheck])
  .post((req, resp) => {

    let forDate = req.body['forDate'];                           
    Story.findAll({
      where: {
        created: {
          [Op.lt]: forDate,
          [Op.gt]: new Date(new Date(forDate) - 1000*60*60*24)
        }
      }
    }).then(data => {      console.log('Fordate in db ', data)
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