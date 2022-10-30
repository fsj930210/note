const instance: Singletone | null = null;

class Singletone {}

export default () => {
  if (instance === null) {
    return new Singletone();
  }
  return instance;
};
