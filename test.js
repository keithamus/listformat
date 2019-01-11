import listFormat from './index'
import {equal} from 'assert'

console.log("ListFormat ['a'] === 'a'")
equal(listFormat(['a']), 'a')

console.log("ListFormat ['a', 'b'] === 'a and b'")
equal(listFormat(['a', 'b']), 'a and b')

console.log("ListFormat ['a', 'b', 'c'] === 'a, b, and c'")
equal(listFormat(['a', 'b', 'c']), 'a, b, and c')

console.log("ListFormat ['a', 'b', 'c', 'd', 'e'] === 'a, b, c, d, and e'")
equal(listFormat(['a', 'b', 'c', 'd', 'e']), 'a, b, c, d, and e')
