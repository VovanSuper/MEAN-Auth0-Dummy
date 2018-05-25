
const _EXIT_SIGNALS = ['SIGINT', 'SIGTERM'];

function _shutDown(app) {
  console.warn('\nExit signal received.\nShutting closing the app...');
  app.close();
  console.log('\nTerminating process in 200 ms...');
  setTimeout(() => process.exit(), 200);
}

function _setTermListener(sig, app) {
  process.on(sig, () => _shutDown(app));
}

const applyShutDownListeners = (app) => {
  _EXIT_SIGNALS.forEach((sig) => _setTermListener(sig, app));
}

const handleError = (e) => {
  console.warn('Error executing query');

  if (e instanceof Error) {
    console.error(`${e.name} ------- ${e.message}`);
    console.warn(e.stack);
  } else {
    console.error(e);
  }
}

module.exports.applyShutDownListeners = applyShutDownListeners;
module.exports.handleError            = handleError;