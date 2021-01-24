function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise(1, 1000).then((v) => console.log(v));
createPromise('hello', 1000).then((v) => console.log(v));
function createTuple(v1, v2) {
    return [v1, v2];
}
const tuple1 = createTuple('user1', 1000);
//# sourceMappingURL=generic.js.map