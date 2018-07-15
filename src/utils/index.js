/**
 *  获取 store 模块数组
 */
export const getStoreArray = () => {
  const modules = require.context('@/views/', true, /store\.js$/);
  let arr = { modules: {} };

  modules.keys().forEach(url => {
    const store = modules(url).default;
    if (!store.namespaced) {
      Object.assign(arr, store);
    } else {
      arr.modules[store.namespace] = store;
    }
  });

  return arr;
};
