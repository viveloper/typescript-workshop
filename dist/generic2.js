class LocalDB {
    constructor(key) {
        this.localStorageKey = key;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}
const userDB = new LocalDB('user');
userDB.add({ name: 'jay' });
const userA = userDB.get();
//# sourceMappingURL=generic2.js.map