class Cart {
    constructor(user) {
        this.user = user;
        this.store = {};
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
const cartJohn = new Cart({ name: 'john' });
cartJohn.put('1', { id: '1', price: 200 });
console.log(cartJohn.get('1'));
//# sourceMappingURL=class.js.map