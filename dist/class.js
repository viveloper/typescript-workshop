class Cart {
    constructor(user) {
        this.user = user;
        this.store = new Map();
    }
    put(id, product) {
        this.store.set(id, product);
    }
    get(id) {
        return this.store.get(id);
    }
}
const cartJohn = new Cart({ name: 'john' });
cartJohn.put('1', { id: '1', price: 200 });
console.log(cartJohn.get('1'));
//# sourceMappingURL=class.js.map