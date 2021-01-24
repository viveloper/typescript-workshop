interface User {
  name: string;
}

interface Action {
  do(): void;
}

type UserAction = User & Action;

function createUserAction(u: User, a: Action): UserAction {
  return { ...u, ...a };
}

type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

type User2 = {
  name: string;
};

type UserState = 'PENDING' | 'APROVED' | 'REJECTED';

function checkUserState(): UserState {
  return 'PENDING';
}
