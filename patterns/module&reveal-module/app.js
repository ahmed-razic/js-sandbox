//module pattern

// const MyModule = (function () {
//   //private vars and functs
//   let text = 'Hello World';
//   function showHello() {
//     document.body.innerHTML = `<h1>${text}</h1>`;
//   }

//   return {
//     callShowHello: function () {
//       showHello();
//     },
//   };

// })();

// MyModule.callShowHello();

//Reveal module pattern
const MyModule = (function () {
  //private vars and functs
  let text = 'Hello World';
  function showHello() {
    document.body.innerHTML = `<h1>${text}</h1>`;
  }

  return {
    call: showHello,
  };
})();

MyModule.call();
