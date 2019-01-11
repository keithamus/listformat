import listFormat from './index'
import {strictEqual} from 'assert'

console.log("ListFormat ['a'] === 'a'")
strictEqual(listFormat(['a']), 'a')

console.log("ListFormat ['a', 'b'] === 'a and b'")
strictEqual(listFormat(['a', 'b']), 'a and b')

console.log("ListFormat ['a', 'b', 'c'] === 'a, b, and c'")
strictEqual(listFormat(['a', 'b', 'c']), 'a, b, and c')

console.log("ListFormat ['a', 'b', 'c', 'd', 'e'] === 'a, b, c, d, and e'")
strictEqual(listFormat(['a', 'b', 'c', 'd', 'e']), 'a, b, c, d, and e')

console.log("ListFormat [1, 2, 3] === '1, 2, and 3'")
strictEqual(listFormat([1, 2, 3]), '1, 2, and 3')

console.log("ListFormat [1] === '1'")
strictEqual(listFormat([1]), '1')
