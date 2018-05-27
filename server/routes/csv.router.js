const express = require('express');
const fs = require('fs');
const path = require('path');
const { parse } = require('json2csv');
const config = require('../helpers/config');
const jwtCheck = require('../middwares/auth.jwt');
let { Story } = require('../data/Story');
let { Op } = require('../helpers/setup');
const { handleError } = require('../helpers/handlers');

let apiRouter = express.Router()
apiRouter.route('/db.csv')
  // .all([jwtCheck])
  .get((req, resp) => {

    // let forDate = req.body['forDate'];
    Story.findAll({}).then(stories => {
      let tmp = path.join(__dirname, 'tmp');
      let tmpEx = fs.existsSync(tmp);
      if (!tmpEx) {
        fs.mkdirSync(tmp);
      }
      let csvFileName = path.join(tmp, 'db.csv');
      let csv = parse(stories, { fields: ['id', 'text', 'created'] });
      fs.writeFileSync(csvFileName, csv, 'utf-8');
      // console.log('Fordate in db ', data)
      return resp.sendFile(csvFileName);
    })
      .catch(e => handleError(e));
  });

module.exports = apiRouter;