function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`Subscribed to ${fn.name}`);
  },

  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`Unsubscribed from ${fn.name}`);
  },

  start: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  },
};

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurretMiliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurretMiliseconds);
});

document.querySelector('.start').addEventListener('click', function () {
  click.start();
});

const getCurretMiliseconds = function () {
  console.log(`Current miliseconds ${new Date().getMilliseconds()}`);
};
