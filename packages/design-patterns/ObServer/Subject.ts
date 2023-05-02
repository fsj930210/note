import Observer from './Observer';

export default class Subject {
  observers: Observer[];
  state: number;
  constructor() {
    this.observers = [];
    this.state = 0;
  }
  add(ob: Observer){
    this.observers.push(ob);
  }
  remove(ob: Observer) {
    this.observers = this.observers.filter(item => item !== ob);
  }
  getState () {
    return this.state;
  }
  setState(newState: number){
    this.state = newState;
    this.notify();
  }
  private notify() {
    this.observers.forEach(ob => {
      ob.update(this.state);
    })
  }
}

