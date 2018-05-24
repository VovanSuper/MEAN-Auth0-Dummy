const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const applyShutDownListeners = require('./data/helpers/handlers').applyShutDownListeners;
const handleError = require('./data/helpers/handlers').handleError;
const config = require('./config');
const apiRouter = require('./routes/api.router');
const sequelize = require('./data/helpers/setup').sequelize;;
const StoryFunc = require('./data/Story');
const seedDb = require('./data/helpers/seed.db');

let Story = require('./data/Story');

sequelize.sync().then(() => {
  seedDb(Story).then((s1, s2, s3, s4) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(express.static(path.join(process.cwd(), 'dist/client')));
    app.use((req, resp, next) => {
      console.log(req.originalUrl);
      console.log('Body ', req.body);
      next();
    })

    app.use('/api', apiRouter);


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