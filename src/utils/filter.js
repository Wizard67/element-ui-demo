export const toThousands = num => (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
