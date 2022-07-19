class Singleton {
  // 设置private不让实例化
  private constructor() {}
  private static instance: Singleton | null = null;
  static getInstance() {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

export default Singleton;
