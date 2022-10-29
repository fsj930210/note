class Singleton {
  private constructor() {}
  private static instance: Singleton | null = null;
  static getInstance() {
    if (Singleton.instance === null) {
      return new Singleton();
    }
    return Singleton.instance;
  }
}

export default Singleton.getInstance;
