var expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Plai',
            room: 'Stue'
        }, {
            id: '2',
            name: 'Kip',
            room: 'Soverom'
        }, {
            id: '3',
            name: 'Tom',
            room: 'Stue'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Tom',
            room: 'The office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);

    });

    it('should remove a user', () => {
        var user = users.removeUser('1');

        expect(user.name).toBe('Plai');

        var noUser = users.getUser('1');
        expect(user).toBeUndefined;
        
    });

    it('should not remove a user', () => {
        var user = users.removeUser('11');
        expect(user).toBeUndefined;
    });

    it('should find user', () => {
        var user = users.getUser('1');

        expect(user.name).toBe('Plai'); 
    });

    it('should not find user', () => {
        var user = users.getUser('11');

        expect(user).toBeUndefined;
    });

    it('should return names for Stue', () => {
        var userList = users.getUserList('Stue');

        expect(userList).toEqual(['Plai', 'Tom']);

    });

    it('should return names for Soverom', () => {
        var userList = users.getUserList('Soverom');

        expect(userList).toEqual(['Kip']);
        
    });
});