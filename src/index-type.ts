interface Props {
  [key: string]: string;
}

const p: Props = {
  a: 'hello',
  b: 'hehe',
  ['aa']: 'haha',
  0: 'ss',
  1: 'sss',
};

let key: keyof Props;
