function add(x, y) {
    return x + y;
}
const result = add(1, 2);
function buildUserInfo(name, email, age) {
    return {
        name,
        email,
        age,
    };
}
const userInfo = buildUserInfo('casio', 'casio@naver.com', 33);
const add2 = (a, b) => a + b;
const result2 = add2(1, 2);
function store(type) {
    if (type === '통조림') {
        return { a: '통조림' };
    }
    else if (type === '아이스크림') {
        return { b: '아이스크림' };
    }
    else {
        throw new Error('unsupported type');
    }
}
console.log(store('통조림'));
//# sourceMappingURL=function.js.map