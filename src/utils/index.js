/**
 *  获取 store 模块数组
 */
export const getStoreArray = () => {
  const modules = require.context('@/views/', true, /store\.js$/);

  let arr = [];
  modules.keys().forEach(url => {
    const store = modules(url).default;
    arr[store.namespace] = store;
  });

  return arr;
};
