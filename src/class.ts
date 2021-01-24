interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

// 인덱스 타입
interface Store {
  [key: string]: Product;
}

class Cart {
  user: User;
  store: Store;
  constructor(user: User) {
    this.user = user;
    this.store = {};
  }

  put(id: string, product: Product) {
    this.store[id] = product;
  }

  get(id: string): Product {
    return this.store[id];
  }
}

const cartJohn = new Cart({ name: 'john' });
cartJohn.put('1', { id: '1', price: 200 });
console.log(cartJohn.get('1'));
