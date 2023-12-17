export const CONSTANT = 42;

export let variable = 42;
// only reading is exposed
// it's not possible to modify the variable from outside

export function fun() {
  console.log('fun');
}

export class C extends Super {
  method() {
    console.log('method');
  }
}

let a, b, other;
export { a, b, other as c };

export default 1 + 2 + 3 + more();