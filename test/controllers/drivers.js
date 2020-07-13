const { expect } = require('chai');
const request = require('supertest');
const app = require('../../app');
const Driver = require('../../models/Driver');

describe('The drivers controller', () => {
  it('should handle a GET request to /api/drivers to find a list of drivers', done => {
    const driverOne = new Driver({
      email: 'testone@gmail.com',
      location: {
        type: 'Point',
        coordinates: [-122.476, 47.61]
      }
    });
    const driverTwo = new Driver({
      email: 'testtwo@gmail.com',
      location: {
        type: 'Point',
        coordinates: [-80.25, 25.79]
      }
    });

    Promise.all([
      driverOne.save(),
      driverTwo.save()
    ])
      .then(() => {
        request(app)
          .get('/api/drivers?lng=-80&lat=25')
          .end((err, res) => {
            expect(res.body).to.have.lengthOf(1);
            expect(res.body[0].email).to.equal('testtwo@gmail.com');

            done();
          });
      });
  });
});
