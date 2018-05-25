const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { applyShutDownListeners, handleError } = require('./helpers/handlers');
const config = require('./helpers/config');
const apiRouter = require('./routes/api.router');
const { sequelize } = require('./helpers/setup');;
const seedDb = require('./helpers/seed.db');
const loggerWare = require('./middwares/logger');
let { Story } = require('./data/Story');

sequelize.sync().then(() => {
  seedDb(Story).then((s1, s2, s3, s4) => {

    app.use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(cors())
      .use(express.static(path.join(process.cwd(), 'dist/client')))
      .use(loggerWare)

      .use('/api', apiRouter);


    app.get('*', (req, resp) => {
      return resp.status(200).sendFile(path.join(process.cwd(), 'dist/client/index.html'));
    })

    let listener = app.listen(3000, () => {
      console.log('Listening on localhost:3000');
    });
    applyShutDownListeners(listener);
  })
    .catch(e => handleError(e));
})