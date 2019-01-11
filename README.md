# ListFormat Ponyfill

This is a simple ponyfill for [Intl.ListFormat](https://github.com/tc39/proposal-intl-list-format).

Call it with an Array of strings, and it'll reduce them down to one string in a list format:

```js
import listFormat from 'listFormat'
listFormat(['a', 'b', 'c']) === 'a, b, and c'
```

If `Intl.ListFormat` is available on the engine you're running, it'll use that.
