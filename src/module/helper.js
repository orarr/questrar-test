// @flow
import type { ReducerMap } from 'redux'
import isEmpty from 'lodash/isEmpty';
import invariant from 'invariant';
import type {Request} from "../QuestrarTypes";

/**
 * Extract list values of keys from a base object.
 * Use `getValue` 3rd param to retrieve/transform value based on key and base object
 *
 * ```
 * const baseObj = { k: 0, l: 3, m: { n: 'stringVal', o: true } }
 * const values = valuesOfKeys(['k', 'l', 'm'], baseObj);
 * console.log(values) // [0, 3, { n: 'string', o: true }]
 * ```
 * @param keys a key as string or list of keys
 * @param obj
 * @param getValue Retrieve or transform the resulting value if provided as a function
 * @returns {*} Returns an empty array if no keys had a match in the base object
 */
export const arrayValuesOfKeys = (obj: Object, keys: Array<any>, getValue?: (key: any, obj: Object) => any) => {
  invariant(!isEmpty(obj), 'No object has been provided for keys extraction');
  invariant(!isEmpty(keys), 'There are no keys provided for values extraction');

  if(typeof keys === 'string') {

    if(typeof getValue === 'function'){
      return [getValue(keys, obj)];
    } else if(Object.hasOwnProperty.call(obj, keys)){
      return [obj[keys]];
    }
    return [];
  }

  const result = [];
  for(let i = 0; i < keys.length; i ++ ){
    if(typeof getValue === 'function'){
      const value =  getValue(keys[i], obj);
      result.push(value);
    } else if(Object.hasOwnProperty.call(obj, keys[i])){
      result.push(obj[keys[i]]);
    }
  }

  return result;
};


/**
 * Reset a request flags to initialRequest flags.
 * Setting pending, success and fail to false
 *
 * @param req
 * @returns {Request}
 */
export const resetRequestFlags = (req: Request) => {
  const r = req;
  r.pending = false;
  r.success = false;
  r.failed = false;
  return r;
};


/**
 * Creates a random string of length less than 15 characters with [a - h]
 * @param length
 * @returns {string}
 */
export function randomId (length?: number) {
  const size = typeof length === 'number' && length < 15 && length > 0 ? length : 10;
  const rand = Math.random();
  const id = parseInt(rand * Math.pow(10, size)).toString();
  return id.split('').map(i => String.fromCharCode(97 + Number(i))).join('');
};

/**
 * Checks if arg is a function
 *
 * @param func
 * @returns {boolean}
 */
export function isFunc (func: any) {
  return typeof func === "function";
}

/**
 * Checks if arg is an object and not null
 * @param obj
 * @returns {any|boolean}
 */
export function isObj (obj: any) {
  return !!obj && typeof obj === "object";
}


/**
 * Checks if arg is an object and not null
 * @param obj
 * @returns {any|boolean}
 */
export function isNumber (num: any) {
  return typeof num === "number";
}