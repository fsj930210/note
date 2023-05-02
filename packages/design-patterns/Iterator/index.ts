export class DataIterator {
  index: number = 0;
  data: number[];
  constructor(container: DataContainer) {
    this.data = container.data
  }

  next() {
    if (this.hasNext()) {
      return this.data[this.index++]
    } 
    return null;
  }
  hasNext() {
    if (this.index >= this.data.length) return false;
    return true;
  }
}

export class DataContainer {
  data: number[] = [10, 20, 30, 40, 50];
  getIterator() {
    return new DataIterator(this)
  }
}

