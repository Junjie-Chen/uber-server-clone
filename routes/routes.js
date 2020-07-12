const drivers = require('../controllers/drivers');

module.exports = app => {
  app.get('/api/drivers', drivers.find);

  app.post('/api/drivers', drivers.create);

  app.put('/api/drivers/:id', drivers.edit);
};
