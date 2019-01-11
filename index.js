const ListFormat = typeof Intl === 'object' && typeof Intl.ListFormat === 'function' && Intl.ListFormat('en')
const listFormatItem = (o, x, i, xs) => !i ? x : i && xs.length === 2 ? o + ' and ' + x : i === xs.length -1 ? o + ', and ' + x : o + ', ' + x
const listFormat = xs => ListFormat ? ListFormat.format(xs) : xs.reduce(listFormatItem, '')
export default listFormat
