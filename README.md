# Uber Server Clone

_A server clone of Uber that manipulates the drivers collection by creating, finding, editing and deleting a driver using MongoDB and Mongoose_

## Steps

1. Fork and clone this repository: `git clone https://github.com/Your-Username/uber-server-clone.git`
2. Move into the root directory: `cd uber-server-clone`
3. Install all packages: `npm install`
4. Install Homebrew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
5. Install the latest available production release of MongoDB Community Server ([including all command line tools](https://docs.mongodb.com/manual/reference/program/)): `brew install mongodb-community`
6. Start `mongod` as a service or manually: `brew services start mongodb-community` or `mongod --config /usr/local/etc/mongod.conf`

## Requests

1. Open MongoDB shell: `mongo`
2. Switch the database: `use uber_server_clone`
3. Add 2dsphere index: `db.drivers.createIndex({ location: "2dsphere" })`
4. Run the application: `npm run start:develop`
5. [Download Postman](https://www.postman.com/downloads/)
6. Open Postman
7. Configure the request
   - For the POST request
     - Select the `POST` option in the dropdown menu
     - Enter `http://localhost:3000/api/drivers` in the URL box
     - Click the `Body` tab
     - Click the `raw` button
     - Select the `JSON` option in the dropdown menu
     - Enter
       ```json
       {
         "email": "test@gmail.com",
         "location": {
           "type": "Point",
           "coordinates": [-80.25, 25.79]
         }
       }
       ```
   - For the GET request
     - Select the `GET` option in the dropdown menu
     - Enter `http://localhost:3000/api/drivers` in the URL box
     - Click the `Params` tab
     - Enter `lng` in the KEY box and `-80` in the VALUE box
     - Enter `lat` in the KEY box and `25` in the VALUE box
   - For the PUT request
     - Select the `PUT` option in the dropdown menu
     - Enter `http://localhost:3000/api/drivers/:id` in the URL box
     - Click the `Body` tab
     - Click the `raw` button
     - Select the `JSON` option in the dropdown menu
     - Enter
       ```json
       {
         "driving": true
       }
       ```
   - For the DELETE request
     - Select the `DELETE` option in the dropdown menu
     - Enter `http://localhost:3000/api/drivers/:id` in the URL box
8. Click the `Send` button
9. View the response

## Tests

1. Execute the test: `npm run test`
2. View the report

```
4 passing (765ms)
```
