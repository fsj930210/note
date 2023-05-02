@classDecorator
class Foo {
  private name = 'lishi';
  private age = 20;
  @funcDecorator
  getName() {
    return this.name;
  }
  getAge() {
    return this.age
  }

}


function classDecorator(target: any) {
  target.staticProperty = 30;
  console.log(target)
}

function funcDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(111)
}