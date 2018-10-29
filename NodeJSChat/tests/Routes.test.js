import assert from 'assert';
import IndexRoute from '../routes/IndexRoute';
import UsersRoute from '../routes/UsersRoute';
import ChatRoute from '../routes/ChatRoute';
import LoginRoute from '../routes/LoginRoute';
import MessagesRoute from '../routes/MessagesRoute';
import Store from 'data-store';

describe('MessageRoute class testing', function () {
    
    it('should return list ot the messages with as JSON string', function () {
        
        // Arrange
        let store = new Store({ path: './data_storage/messages.json' });
        let expectedResult = store.json();
        
        // Act
        let messagesRouter = new MessagesRoute(); 
        messagesRouter.getMessagesRoute().
        
        // Assert
        assert.equal()
    });
    
    it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });

});