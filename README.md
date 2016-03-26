# arrayobj_utils

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

Array Object Utilities for Node js and native js 

This module can help acheving array union ,diff,compact operations and Object combining,cloning and linear single key value pairs sorting

This Module has the following methods

 * [Array union](#aounionab)
 * [Array diff](#aodiffab)
 * [Array compact](#aocompacta)
 * [Object combine](#aocombineobj1obj2)
 * [Object clone](#aoclone{}obj1)
 * [Object sort](#aosortobj)

##Installation

```sh 
 $npm install ao-utils
```

##Api
```js
var ao=require("arrayobj_utils")
```

The `ao` object creates a reference for the aoutils module inheriting all the methods

### ao.union(a,b)

Returns a `array` with only unique values in `a` and `b`.Accepts only arrays

####a

`array` which is considered a parent array

####b

`array` second array to be passed

### ao.diff(a,b)

Returns a `array` with only commong values of `a` and `b`.Accept only arrays

####a

`array` which is considered a parent array

####b

`array` second array to be passed

### ao.compact(a)

Return a array without duplicates.Will not modify the supplied array though

####a

`array` to passed which has redundant values

### ao.combine(obj1,[obj2..objn])

Combines the properties of `obj2`...`objn` and store it in `obj1`

####obj1

`Object` which stores the combined properties

####obj2..objn

`Object` arguments whose properties have to be combined

### ao.clone({},[obj1..objn])

Clones the properties of obj1...obj2 into empty `Object` and return it

####`{}`

Empty `Object` which is cloned and returned

####obj1...objn

Collection of `Objects` whose properties have to be cloned

### ao.sort(obj)

Sorts a linear single key:value pairs and returns the sorted `object`.Though does not affect the passed `Object`

####obj

`Object` to be sorted.

## License

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/arrayobj_utils.svg
[npm-url]: https://npmjs.org/package/arrayobj_utils
[downloads-image]: https://img.shields.io/npm/dm/arrayobj_utils.svg
[downloads-url]: https://npmjs.org/package/arrayobj_utils
# arrayobj_utils
