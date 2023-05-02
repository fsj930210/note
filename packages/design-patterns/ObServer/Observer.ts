export default class Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(state: number) {
    console.log(`Subject ${this.name} is update ${state}`);
  }
}