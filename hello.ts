const hello = 'hello';

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1 sec');
  }, 1000);
});

timeoutPromise.then(console.log);
