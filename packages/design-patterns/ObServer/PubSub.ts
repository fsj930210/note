class PubSub {
  subs: Record<string, Function[]>;
  constructor() {
    this.subs = {};
  }
  on(name: string, fn: (...args: any[]) => any) {
    if (!this.subs[name]) {
      this.subs[name] = []
    }
    this.subs[name].push(fn);
  }
  remove(name: string, fn: (...args: any[]) => any) {
    const fns = this.subs[name];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      const index = fns.findIndex(i => i=== fn);
      fns.splice(index, 1)
    }
  }
  emit(name: string, ...rest: any[]) {
    const fns = this.subs[name];
    if (!fns || fns.length <= 0) {
      return false
    }
    fns.forEach(fn => {
      fn.apply(this, rest)
    })
  }
}