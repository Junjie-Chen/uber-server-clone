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

  it('should handle a POST request to /api/drivers to create a driver', done => {
    Driver.estimatedDocumentCount()
      .then(count => {
        request(app)
          .post('/api/drivers')
          .send({ email: 'test@gmail.com' })
          .end(() => {
            Driver.estimatedDocumentCount()
              .then(newCount => {
                expect(count + 1).to.equal(newCount);

                done();
              });
          });
      });
  });

  it('should handle a PUT request to /api/drivers/:id to edit a driver', done => {
    const driver = new Driver({
      email: 'test@gmail.com',
      driving: false
    });

    driver.save()
      .then(() => {
        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ driving: true })
          .end(() => {
            Driver.findOne({ email: 'test@gmail.com' })
              .then(driver => {
                expect(driver.driving).to.be.true;

                done();
              });
          });
      });
  });
});
