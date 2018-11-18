[{
    id: 'sdkjhfasldflsadghls',
    name: 'Tom',
    room: 'The office Fans'
}]

// addUser(id, name, room);
// removeUser(id);
// getUser(id);
// getUserList(room);

class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room}
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        // Return user that was removed
        var user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;

    //     var resUser = this.users.filter((user) => user.id === id);
    //     if (resUser.length === 0) {
    //         return null;
    //     } 

    //     var idx = this.users.indexOf(resUser);
    //     this.users.splice(idx, 1);

    //     return resUser[0];
    }
 
    getUser (id) {
        var me = this.users.filter((user) => user.id === id);
        if (me.length <= 0) {
            return null;
        }
        return me[0];
    }

    getUserList (room) {
        var users = this.users.filter((user) => {
            return user.room === room;
        });
        var namesArray = users.map((user) => {
            return user.name
        });

        return namesArray;
    }

}

module.exports = {Users};

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription () {
//         return `${this.name} is ${this.age} yesr(s) old.`;
//     }
// }

// var me = new Person('Tom', 56);

// console.log('this.name', me.name);
// console.log('this.age', me.age);

// var description = me.getUserDescription();
// console.log(description);