interface IProduct {
  name: string;
  fn1: () => void;
}

export class Product1 implements IProduct {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fn1() {
    console.log('procuct1 fn1')
  }
}

export class Product2 implements IProduct {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fn1() {
    console.log('procuct2 fn1')
  }
}

class Creator {
  create(type: string, name: string){
    if (type === 'p1') {
      return new Product1(name);
    } else if (type === 'p2') {
      return new Product2(name);
    }
    return 'invild type';
  }
}

export default new Creator();

