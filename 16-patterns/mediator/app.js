const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },

  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {};

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        to.recieve(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const ahmed = new User('Ahmed');
const ibrahim = new User('Ibrahim');
const osman = new User('Osman');

const chatroom = new Chatroom();

chatroom.register(ahmed);
chatroom.register(ibrahim);
chatroom.register(osman);

ahmed.send('Hello', ibrahim);
ibrahim.send('Hello', ahmed);
osman.send('Hello everybody');
