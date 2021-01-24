function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise(1, 1000).then((v) => console.log(v));
createPromise('hello', 1000).then((v) => console.log(v));
//# sourceMappingURL=generic.js.map