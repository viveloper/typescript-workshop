function createPromise<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

createPromise(1, 1000).then((v) => console.log(v));
createPromise('hello', 1000).then((v) => console.log(v));

function createTuple<T, U>(v1: T, v2: U): [T, U] {
  return [v1, v2];
}

const tuple1 = createTuple('user1', 1000);
