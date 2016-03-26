'use strict';
//Constructor
var ArrObjUtis = function() {
        this._version = "1.0.0"
    }
    /*****Prototyping starts here****/

/*
  Array Union
  return @array-with unique values from two arrays
  */
ArrObjUtis.prototype.union = function(a, b) {
        try {
            if ((!a.length || typeof a == "string") || (!b.length || typeof b == "string"))
                throw ("Expects two aruguments and only arrays")
            else {
                var result = this.compact(this.compress(a).concat(this.compress(b)))
                return result;
            }
        } catch (e) {
            this.traceError(e)
        }
    }
    /*
      Array Intersect
      return @array with common values from two arrays
      */
ArrObjUtis.prototype.diff = function(a, b) {
        try {
            if ((!a.length || typeof a == "string") || (!b.length || typeof b == "string"))
                throw ("Expects two aruguments and only arrays")
            else {
                var result = []
                a=this.compress(a),b=this.compress(b);
                for (var i = 0; i < b.length; i++) {
                    var common = a.find(function(value) {
                        return value === b[i]
                    })
                    if (common && result.indexOf(common) == -1)
                        result.push(common)
                }
                return result
            }
        } catch (e) {
            this.traceError(e)
        }
    }
    /*
        Compact Array without duplicates
        return @array without duplicates
        */
ArrObjUtis.prototype.compact = function(a) {
        try {
            if ((!a.length || typeof a == "string"))
                throw ("Expects only arrays")
            else {
                var result = []
                a=this.compress(a);
                for (var i = 0; i < a.length; i++)
                    for (var j = i + 1; j <= a.length; j++) {
                        if (a[i] == a[j]) {
                            if (result.indexOf(a[i]) == -1)
                                result.push(a[i])
                        } else {
                            if (result.indexOf(a[i]) == -1)
                                result.push(a[i])
                        }
                    }
            }
            return result
        } catch (e) {
            this.traceError(e)
        }
    }
    /*
      Array compress
      return @array--one dimensional
    */
ArrObjUtis.prototype.compress = function(a) {
        try {
            if ((!a.length || typeof a == "string"))
                throw ("Expects only arrays")
            else{
              var result=[];
              var compress=function(array){ //local compress function
                  if(!Array.isArray(array)){
                    result.push(array)
                    return;
                  }
                  for(var i=0;i<array.length;i++)
                    compress(array[i])
              }
              compress(a)
            }
            return result  
        } catch (e) {
            this.traceError(e)
        }
    }
    /*Object Uitls-starts here */
    /*
      Object Union of linear objects with single key value pairs
      return @Object with unique keys::values
    */
ArrObjUtis.prototype.sort = function(a) {
        try {
            if (typeof a != "object" || !a)
                throw ("sort Expects only objects")
            else {
                var keys = Object.keys(a);
                var result = {};
                //Clear the object
                //Divide and Conquer for Sorting
                var divide = function(half) {
                    if (half.length < 2)
                        return half
                    var length = half.length
                    var mid = Math.floor(length / 2)
                    var left = divide(half.slice(0, mid))
                    var right = divide(half.slice(mid))
                    return merge(left, right)
                }
                var merge = function(left, right) {
                    var result = []
                    while (left.length > 0 && right.length > 0)
                        result.push(a[left[0]] < a[right[0]] ? left.shift() : right.shift())
                    return result.concat(left.length ? left : right)
                }
                keys = divide(keys);
                for (var i = 0; i < keys.length; i++)
                    result[keys[i]] = a[keys[i]]
                return result
            }
        } catch (e) {
            this.traceError(e)
        }
    }
    /*
      Object extend
      return @Object with extended objects from list of supplied objects
      */
ArrObjUtis.prototype.combine = function(obj, cloneObj) {
        var args = 1;
        for (; args < arguments.length; args++) {
            for (var key in arguments[args]) {
                obj[key] = arguments[args][key]
            }
        }
    }
    /*
      Object Clone
      return @Object cloned object
      */
ArrObjUtis.prototype.clone = function(obj, cloneObj) {
    var args = 1;
    for (; args < arguments.length; args++) {
        for (var key in cloneObj)
            obj[key] = cloneObj[key];
    }
    return obj
};
ArrObjUtis.prototype.traceError = function(e) {
    var error = new Error(e)
    console.error(error.message)
}
/*
  Object reverse---adding a special reverse prototype to Object Class
  return @Object  reversed key value pairs
*/
Object.prototype.reverse=function(){
     var obj={}
     var keys=Object.keys(this)
     for(var i=keys.length-1;i>=0;i--)
        obj[keys[i]]=this[keys[i]]
     return obj
}
var arrObjUtis = new ArrObjUtis();
module.exports = arrObjUtis;