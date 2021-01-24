class LocalDB<T> {
  private localStorageKey: string;

  constructor(key: string) {
    this.localStorageKey = key;
  }

  add(v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface User {
  name: string;
}

const userDB = new LocalDB<User>('user');
userDB.add({ name: 'jay' });
const userA = userDB.get();
