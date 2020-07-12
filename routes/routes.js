const drivers = require('../controllers/drivers');

module.exports = app => {
  app.get('/api/drivers', drivers.find);
};
