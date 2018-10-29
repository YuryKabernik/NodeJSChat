const request = require('supertest');
const Store = require('data-store');
var app = require('../starter.js').app;

describe('Routing testing', function () {

    it('should return list ot the messages with as JSON string', function (done) {
        // Arrange
        let store = new Store({ path: './data_storage/messages.json' });
        let expectedResult = store.json();

        // Act
        let res = request(app)
            .get('/messages')
            .expect(200, expectedResult) // Assert
            .end(done);
    });

    it('should return list ot the users with as JSON string', function (done) {
        // Arrange
        let store = new Store({ path: './data_storage/users.json' });
        let expectedResult = store.json(null, 10);

        // Act
        let res = request(app)
            .get('/users')
            .expect(200, expectedResult) // Assert
            .end(done);
    });
});