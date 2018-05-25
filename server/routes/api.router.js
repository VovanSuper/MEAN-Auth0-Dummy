const express = require('express');

const config = require('../helpers/config');
const jwtCheck = require('../middwares/auth.jwt');
let { Story } = require('../data/Story');
let { Op } = require('../helpers/setup');
const { handleError } = require('../helpers/handlers');

let apiRouter = express.Router()
apiRouter.route('/data')
  .all([jwtCheck])
  .post((req, resp) => {

    let forDate = req.body['forDate'];
    Story.findAll({
      where: {
        created: {
          [Op.lt]: forDate,
          [Op.gt]: new Date(new Date(forDate) - 1000 * 60 * 60 * 24)
        }
      }
    }).then(data => {
      console.log('Fordate in db ', data)
      return resp.json({
        opStatus: 'Ok',
        data: data
      });
    })
      .catch(e => handleError(e));
  });

module.exports = apiRouter;