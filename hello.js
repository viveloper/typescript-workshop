var hello = 'hello';
var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('1 sec');
    }, 1000);
});
timeoutPromise.then(console.log);
