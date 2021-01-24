interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

class Cart {
  user: User;
  store: Map<string, Product>;
  constructor(user: User) {
    this.user = user;
    this.store = new Map();
  }

  put(id: string, product: Product) {
    this.store.set(id, product);
  }

  get(id: string): Product {
    return this.store.get(id);
  }
}

const cartJohn = new Cart({ name: 'john' });
cartJohn.put('1', { id: '1', price: 200 });
console.log(cartJohn.get('1'));
