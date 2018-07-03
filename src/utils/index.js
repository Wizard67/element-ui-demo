/**
 *  使用通配符获取模块数组
 *  @param {Array} r require.context()
 *  @param {'router'|'store'} type
 *  @return Array
 */
export const importAll = (r, type) => {
  if (type !== 'router' && type !== 'store') {
    return console.warn("expected 'router' or 'store' only");
  }

  const list = [];

  r.keys().forEach(url => {
    const page = r(url).default;

    if (type === 'router') {
      if (!page.path) throw new Error(`${url} need to set path options`);
      if (!page.name) throw new Error(`${url} need to set name options`);

      list.push({
        path: page.path,
        name: page.name,
        component: page
      });
    }

    if (type === 'store') {
      list[page.namespace] = page;
    }
  });

  return list;
};
