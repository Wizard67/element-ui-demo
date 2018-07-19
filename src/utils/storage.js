var type = '';

const setType = newType => (type = newType);

const storageType = type => {
  if (type) {
    return type === 'session' ? sessionStorage : localStorage;
  } else {
    return sessionStorage.getItem('token') ? sessionStorage : localStorage;
  }
};

class Storage {
  constructor() {}

  init(type) {
    setType(type);
  }

  length() {
    return storageType(type).length;
  }

  key(index) {
    return storageType(type).key(index);
  }

  getItem(key) {
    return storageType(type).getItem(key);
  }

  setItem(key, value) {
    return storageType(type).setItem(key, value);
  }

  removeItem(key) {
    return storageType(type).removeItem(key);
  }

  clear() {
    return storageType(type).clear();
  }
}

export default new Storage();
