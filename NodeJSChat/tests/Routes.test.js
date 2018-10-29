const request = require('supertest');
const Store = require('data-store');
const fs = require('fs');

var app = require('../starter.js').app;

describe('Routing testing', function () {

    it('should return list ot the messages with as JSON string', function (done) {
        // Arrange
        let store = new Store({ path: './data_storage/messages.json' });
        let expectedResult = store.json();

        // Act
        let res = request(app)
            .get('/messages')
            .expect('Content-Type', 'application/json')
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
            .expect('Content-Type', 'application/json')
            .expect(200, expectedResult) // Assert
            .end(done);
    });

    it('should return login.html as string', function (done) {
        // Arrange
        let html = fs.readFileSync('./views/html/login.html');

        // Act
        let res = request(app)
            .get('/login')
            .expect('Content-Type', 'text/html') // Assert
            .expect(function (res) {
                if (!res.text || res.noContent) {
                    throw new Error(`Status: ${res.status}\n Body: ${res.body}\n Text: ${res.text}`);
                }
            })
            .expect(html.toString())
            .buffer(true)
            .end(done);
    });
});