
/**
 *  使用通配符获取模块数组
 *  r: require.context()
 *  type: 'router' | 'store'
 */
exports.importAll = (r, type) => {

    if(type !== 'router' && type !== 'store' ) {
        return console.warn("expected 'router' or 'store' only")
    }

    const list = []

    r.keys().forEach(url => {
        const page = r(url).default

        if (type === 'router') {
            list.push({
                path: page.path,
                name: page.name,
                component: page
            })
        }

        if (type === 'store') {
            list[page.namespace] = page
        }
    })

    return list
}
