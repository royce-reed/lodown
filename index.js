"use strict";

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the
 * action Function to each value in the collection.
 *
 * @param {Array or Object} collection: The collection over which to iterate.
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
 * typeOf: Function takes in a parameter of any value and returns the type of that value.
 *
 * @param { any value }: Takes in a parameter of value representing any value.
 * @returns { string }: Returns the type of the input as a string.
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
 * first: Designed to loop over an Array, and if the Number is a value in the Array,
 *
 * @param { Array }:
 * @param { Number }:
 * @returns {}:
 */

function first(array, number) {
  let emptyArr = [];
  if (Array.isArray(array) === false || number < 0) return emptyArr;
  if (number === NaN || number === undefined) return array[0];
  if (number > array.length) return array;
  let outputArr = [];
  for (let i = 0; i < number; i++) {
    outputArr.push(array[i]);
  }
  return outputArr;
}
module.exports.first = first;

/**
 * last:
 *
 */

function last(array, number) {
  let emptyArr = [];
  if (Array.isArray(array) === false || number < 0) return emptyArr;
  if (number === NaN || number === undefined) return array[array.length - 1];
  if (number > array.length) return array;
  let outputArr = [];
  for (let i = number; i > 0; i--) {
    outputArr.unshift(array[i]);
  }
  return outputArr;
}
module.exports.last = last;

/**
 * indexOf:
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
 * contains:
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
 * @param {Array or Object} collection: The collection over which to iterate.
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
 * unique:
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
 * filter:
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
 * reject:
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
 * partition:
 *
 */

function partition(array, func) {
  let result = [];
  let output0 = [];
  let output1 = [];
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
 * map:
 *
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
 * plunk:
 *
 */

function plunk(array, property) {
  return array.map((object) => object[property]);
}
module.exports.plunk = plunk;

/**
 * every:
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
 * some:
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
 * reduce:
 *
 */

function reduce(array, func, seed) {
  let result;
  let start = 0;
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
 * extend:
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
