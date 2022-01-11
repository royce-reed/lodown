"use strict";


/**
 * identity: Function takes in a parameter of any value and returns that value unchanged.
 *
 * @param { any value }: Takes in a parameter of value representing any value.
 * @returns { value }: Returns the input unchanged.
 */

function identity(value) {
  return value;
}
module.exports.identity = identity;

/**
 * typeOf: Function takes in a parameter of any value and returns the type of that value as a string.
 *
 * @param { any value }: Takes in a parameter of value representing any value.
 * @returns { String }: Returns the type of the input as a string.
 * 
 */

function typeOf(value) {
  if (typeof value === "string") return "string";
  else if (Array.isArray(value)) return "array";
  else if (typeof value === "number") return "number";
  else if (typeof value === "boolean") return "boolean";
  else if (typeof value === "undefined") return "undefined";
  else if (typeof value === "function") return "function";
  else if (value === null) return "null";
  else if (value instanceof Date) return "date";
  else return "object";
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to loop over an Array. If the input Array is not an array return empty array. If the input Number is not given or not in the Array, return the first element in the Array. Otherwise, return the first Number items of the input Array.
 *
 * @param { Array }: The array over which to iterate.
 * @param { Number }: Takes in a parameter of Number representing an index of the input Array.
 * @returns { Array or Value }: Returns the first Number items of input Array as a new array. If the Number provided is indeed not a number, the first value in the Array is returned.
 */

function first(array, number) {
  let emptyArr = [], outputArr = [];
  if (Array.isArray(array) === false || number < 0) return emptyArr;
  if (number === NaN || number === undefined) return array[0];
  if (number > array.length) return array;
  for (let i = 0; i < number; i++) {
    outputArr.push(array[i]);
  }
  return outputArr;
}
module.exports.first = first;

/**
 * last: Designed to loop over an Array. If the input Array is not an array return empty array. If the input Number is not given or not in the Array, return the last element in the Array. Otherwise, return the last Number items of the input Array.
 * 
 * @param { Array }: The array over which to iterate. 
 * @param { Number }: Takes in a parameter of Number representing an index of the input Array.
 * @returns { Array or Value }: Returns the last Number items of Array as a new array. If the Number provided is indeed not a number, the first value in the Array is returned.
 * 
 */

function last(array, number) {
  let emptyArr = [], outputArr = [];
  if (Array.isArray(array) === false || number < 0) return emptyArr;
  if (number === NaN || number === undefined) return array[array.length - 1];
  if (number > array.length) return array;
  for (let i = number; i > 0; i--) {
    outputArr.unshift(array[i]);
  }
  return outputArr;
}
module.exports.last = last;

/**
 * indexOf: Designed to loop over an Array and return the index of the input Array that is the first occurrance of Value or return -1 if Value is not in Array.
 * 
 * @param { Array }: The array over which to iterate. 
 * @param { Value }: Takes in a parameter of Value representing an element in Array.
 * @returns { Number }: Return the index of the input Array that is the first occurrance of Value or return -1 if Value is not in Array.
 * 
 */

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) return i;
  }
  return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to loop over an Array and returns true if Value is in Array and false if it is not. 
 *
 * @param { Array }: The array over which to iterate. 
 * @param { Value }: Takes in a parameter of Value representing an element in Array.
 * @returns { Boolean }: Returns true if Array contains Value or returns false otherwise.
 * 
 */

function contains(array, value) {
  return array.indexOf(value) !== -1 ? true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the
 * action Function to each value in the collection.
 *
 * @param { Array or Object } collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 */

function each(collection, action) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      action(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      action(collection[key], key, collection);
    }
  }
}
module.exports.each = each;

/**
 * unique: Designed to loop over an Array and returns a new array with the duplicates removed.
 * 
 * @param { Array }: The array over which to iterate. 
 * @returns { Array }: Returns a new array of all elemetns from Array with duplicates removed.
 *
 */

function unique(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (output.indexOf(array[i]) === -1) {
      output.push(array[i]);
    }
  }
  return output;
}
module.exports.unique = unique;

/**
 * filter: Designed to loop over Array, applies the action Function to each value in Array and returns a new array of elements for which calling the action Function returned true.
 * 
 * @param { Array }: The array over which to iterate. 
 * @param { Function } action: The Function to be applied to each value in Array.
 * @returns { Array }: A new array of elements for which calling the action Function returned true.
 * 
 */

function filter(array, func) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) output.push(array[i]);
  }
  return output;
}
module.exports.filter = filter;

/**
 * reject: Designed to loop over Array, applies the action Function to each value in Array and returns a new array of elements for which calling the action Function returned false.
 * 
 * @param { Array }: The array over which to iterate. 
 * @param { Function } action: The Function to be applied to each value in Array.
 * @returns { Array }: A new array of elements for which calling the action Function returned false.
 * 
 */

function reject(array, func) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array) === false) output.push(array[i]);
  }
  return output;
}
module.exports.reject = reject;

/**
 * partition: Designed to loop over Array, applies the action Function to each value of the input Array and returns an array made up of two sub arrays: one array that contains all the values for which the action Function returned something truthy, and one array that contains all the values for which the action Function returned something falsy.
 * 
 * @param { Array }: The array over which to iterate. 
 * @param { Function } action: The Function to be applied to each value in the collection
 * @returns { Array }: A new array of 2 sub arrays: one array that contains all the values for which the action Function returned something truthy, and one array that contains all the values for which the action Function returned something falsy.
 * 
 */

function partition(array, func) {
  let result = [], output0 = [], output1 = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) output0.push(array[i]);
    else output1.push(array[i]);
  }
  result[0] = output0;
  result[1] = output1;
  return result;
}
module.exports.partition = partition;

/**
 * map: Designed to loop over a collection, Array or Object, and return a new collection which applies the action Function to each value of the input collection. 
 * 
 * @param { Array or Object } collection: The collection over which to iterate.
 * @param { Function } action: The Function to be applied to each value in the collection
 * @returns { Array or Object }: A new collection which applied the action Function to each value of the inout collection.
 */

function map(collection, func) {
  let outputArr = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      let result = func(collection[i], i, collection);
      outputArr.push(result);
    }
  } else {
    for (const key in collection) {
      let result = func(collection[key], key, collection);
      outputArr.push(result);
    }
  }
  return outputArr;
}
module.exports.map = map;

/**
 * plunk: Designed to loop over an array of objects and return an array containing the value of Property for every object element in the input array.
 * 
 * @param { Array of Objects }: The array of objects over which to iterate.
 * @param { Property }: A property of each object element in the input array.
 * @returns { Array }: An array containing the value of the input property from every object element from the input array. 
 *
 */

function plunk(array, property) {
  return array.map((object) => object[property]);
}
module.exports.plunk = plunk;

/**
 * every: Designed to loop over a collection, Array or Object, applies the action Function to each value in collection, and if the return value of calling the action Function for every element is true, return true. If the action Function returns false for at least one element in the input collection, the method returns false. If no action Function is provided, return true if every element is truthy, otherwise return false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param { Function } action: The Function to be applied to each value in the collection.
 * @returns { Boolean }: If the return value of the action Function for every element of the input collection is true, the method returns true; false otherwise. However, if no action Function is given or does not return a boolean value; return true if every element in the input collection is truthy, and false otherwise.
 * 
 */

function every(collection, func) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (
        (typeof func === "function" &&
          func(collection[i], i, collection) === false) ||
        (typeof func === "undefined" && !collection[i])
      )
        return false;
    }
  } else {
    for (const key in collection) {
      if (
        (typeof func === "function" &&
          func(collection[key], key, collection) === false) ||
        (typeof func === "undefined" && !collection[key])
      )
        return false;
    }
  }
  return true;
}
module.exports.every = every;

/**
 * some: Designed to loop over a collection, Array or Object, applies the action Function to each value in collection, and if the return value of calling the action Function for at least one elements is true, return true. If the action Function returns false for all elements in the input collection, the method returns false. If no action Function is provided, return true if at least one element is truthy, otherwise return false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param { Function } action: The Function to be applied to each value in the collection.
 * @returns { Boolean }: If the return value of the action Function for at least one element of the input collection is true, the method returns true; false otherwise. However, if no action Function is given or does not return a boolean value; return true if at least one element in the input collection is truthy, and false otherwise.
 * 
 */


function some(collection, func) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (
        (typeof func === "function" && func(collection[i], i, collection)) ||
        (typeof func === "undefined" && collection[i])
      )
        return true;
    }
  } else {
    for (const key in collection) {
      if (
        (typeof func === "function" &&
          func(collection[key], key, collection)) ||
        (typeof func === "undefined" && !collection[key])
      )
        return true;
    }
  }
  return false;
}
module.exports.some = some;

/**
 * reduce: Designed to loop over an array, calls the action Function for every element in the input array, passing the following arguments: previous result, element, index. The return value of the action Function is used as the "previous result" for the next iteration. On the first iteration, use the Seed value as the previous result. If no Seed value is given, the first element of the input Array as a Seed. After the last iteration, the return value of the action Function is returned in the method.
 * 
 * @param { Array }: The array over which to iterate. 
 * @param { Function } action: The Function to be applied to each value in the collection
 * @param { Seed }: The intial value to which the action Function is applied.
 * @returns { Value }: Returns the final value of the action Function.
 */

function reduce(array, func, seed) {
  let result, start = 0;
  if (seed || seed === 0) result = seed;
  else {
    result = array[0];
    start = 1;
  }
  for (let i = start; i < array.length; i++) {
    let element = array[i];
    result = func(result, element, i);
  }
  return result;
}
module.exports.reduce = reduce;

/**
 * extend: Designed to take in multiple Objects, copy properties (in the order they are passed in) to the target object, and then return the target Object.
 * 
 * @param { Object }: The target object to which the properties are to be copied.
 * @param { Object }: The object from which properties are copied.
 * @param { ...Objects }: Optional additional objects from which properties are copied, in the order they are passed in.
 * @returns { Object }: Returns the original target object, modified.
 *
 */

function extend(...object) {
  return object.reduce((target, copy) => {
    for (const key in copy) {
      target[key] = copy[key];
    }
    return target;
  });
}
module.exports.extend = extend;
