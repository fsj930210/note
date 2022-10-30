function getInstance() {
  const instance: Singleton | null = null;
  class Singleton {}
  return () => {
    if (instance === null) {
      return new Singleton();
    }
    return instance;
  };
}

export default getInstance;
