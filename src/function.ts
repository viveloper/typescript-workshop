function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2);

function buildUserInfo(name: string, email: string, age: number) {
  return {
    name,
    email,
    age,
  };
}

const userInfo = buildUserInfo('casio', 'casio@naver.com', 33);

const add2 = (a: number, b: number): number => a + b;

const result2 = add2(1, 2);

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}

// 오버로드 시그니쳐
function store(type: '통조림'): Storage;
function store(type: '아이스크림'): ColdStorage;

// 구현체
function store(type: '통조림' | '아이스크림') {
  if (type === '통조림') {
    return { a: '통조림' };
  } else if (type === '아이스크림') {
    return { b: '아이스크림' };
  } else {
    throw new Error('unsupported type');
  }
}

console.log(store('통조림'));
