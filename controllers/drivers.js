const Driver = require('../models/Driver');

module.exports = {
  find(req, res, next) {
    const { lng, lat } = req.query;

    Driver.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: 200000
        }
      }
    })
      .then(drivers => res.send(drivers))
      .catch(next);
  },
  create(req, res, next) {
    const driver = req.body;

    Driver.create(driver)
      .then(driver => res.send(driver))
      .catch(next);
  }
};
