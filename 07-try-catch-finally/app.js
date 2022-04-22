try {
  myFunction();
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.name);
  console.log(error instanceof SyntaxError);
  console.log(error instanceof ReferenceError);

  document.body.innerHTML = `<h1>${error.message}</h1>`;
} finally {
  console.log('Finally');
}

try {
  if (user.name) {
    throw new Error('An error');
  }
} catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
}
