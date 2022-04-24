const Singleton1 = (function () {
  let instance;
  function createObject() {
    const obj = new Object({ name: 'ahmed', age: 46 });
    console.log(obj);
    return obj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createObject();
      }
      return instance;
    },
  };
})();

const obj1 = Singleton1.getInstance();

const obj2 = Singleton1.getInstance();

//console.log(obj1.firstName);
console.log(obj1);
console.log(obj1 === obj2);

const myName = (function (name) {
  return name + ' ' + name;
})('ahmed');

console.log(myName);

const Singleton = (function () {
  //private part
  let instance;
  function createInstance(age) {
    return { age: age };
  }

  //public part
  return {
    getInstance: function (age) {
      if (!instance) {
        instance = createInstance(age);
      }
      return instance;
    },
  };
})();

console.log(Singleton.getInstance(23));
