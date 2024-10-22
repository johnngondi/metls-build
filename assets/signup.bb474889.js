var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { u as useUserSession, e as useApi, c as __unplugin_components_0, d as _sfc_main$3, b as useNotyf } from "./index.256f70c3.js";
import { _ as __unplugin_components_1 } from "./ValidationErrors.48d8bce6.js";
import { d as defineComponent, h as computed, o as openBlock, b as createElementBlock, f as createBaseVNode, a4 as mergeProps, z as createTextVNode, A as toDisplayString, n as normalizeClass, at as _castPath, au as isArguments_1, av as isArray_1, aw as _isIndex, ax as isLength_1, ay as _toKey, az as keys_1, aA as _Stack, aB as _baseIsEqual, aC as isObject_1, aD as get_1, aE as _isKey, aF as _baseGet, aG as identity_1, aH as _baseAssignValue, aI as toString_1, a as useRouter, r as ref, U as useI18n, H as useHead, m as resolveComponent, s as createVNode, t as withCtx, v as unref, x as createBlock, y as createCommentVNode, q as withModifiers, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, C as createStaticVNode } from "./vendor.11f8b2c5.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
const _hoisted_1$1 = ["checked", "value", "name"];
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main$1 = defineComponent({
  __name: "VRadio",
  props: {
    value: {},
    modelValue: { default: void 0 },
    name: {},
    label: { default: void 0 },
    color: { default: void 0 },
    square: { type: Boolean },
    solid: { type: Boolean },
    paddingless: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const checked = computed(() => props.value === props.modelValue);
    function change() {
      emit("update:modelValue", props.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(["radio", [
          props.solid ? "is-solid" : "is-outlined",
          props.square && "is-square",
          props.color && `is-${props.color}`,
          props.paddingless && "is-paddingless"
        ]])
      }, [
        createBaseVNode("input", mergeProps({
          type: "radio",
          checked: checked.value,
          value: props.value,
          name: props.name
        }, _ctx.$attrs, { onChange: change }), null, 16, _hoisted_1$1),
        _hoisted_2$1,
        createTextVNode(" " + toDisplayString(props.label || props.value), 1)
      ], 2);
    };
  }
});
var _imports_0 = "/assets/signup.ea276fc1.jpg";
var map;
try {
  map = Map;
} catch (_) {
}
var set;
try {
  set = Set;
} catch (_) {
}
function baseClone(src, circulars, clones) {
  if (!src || typeof src !== "object" || typeof src === "function") {
    return src;
  }
  if (src.nodeType && "cloneNode" in src) {
    return src.cloneNode(true);
  }
  if (src instanceof Date) {
    return new Date(src.getTime());
  }
  if (src instanceof RegExp) {
    return new RegExp(src);
  }
  if (Array.isArray(src)) {
    return src.map(clone);
  }
  if (map && src instanceof map) {
    return new Map(Array.from(src.entries()));
  }
  if (set && src instanceof set) {
    return new Set(Array.from(src.values()));
  }
  if (src instanceof Object) {
    circulars.push(src);
    var obj = Object.create(src);
    clones.push(obj);
    for (var key in src) {
      var idx = circulars.findIndex(function(i) {
        return i === src[key];
      });
      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones);
    }
    return obj;
  }
  return src;
}
function clone(src) {
  return baseClone(src, [], []);
}
const toString$4 = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val)
    return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false)
    return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number")
    return printNumber(val);
  if (typeOf === "string")
    return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function")
    return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol")
    return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString$4.call(val).slice(8, -1);
  if (tag === "Date")
    return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error)
    return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp")
    return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null)
    return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null)
      return result2;
    return value2;
  }, 2);
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + (isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".");
    if (value === null) {
      msg += `
 If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }
    return msg;
  },
  defined: "${path} must be defined"
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must be have ${length} items"
};
Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas$1(object2, key) {
  return object2 != null && hasOwnProperty.call(object2, key);
}
var _baseHas = baseHas$1;
var castPath = _castPath, isArguments = isArguments_1, isArray$1 = isArray_1, isIndex = _isIndex, isLength = isLength_1, toKey$2 = _toKey;
function hasPath$2(object2, path, hasFunc) {
  path = castPath(path, object2);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object2 != null && hasFunc(object2, key))) {
      break;
    }
    object2 = object2[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object2 == null ? 0 : object2.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object2) || isArguments(object2));
}
var _hasPath = hasPath$2;
var baseHas = _baseHas, hasPath$1 = _hasPath;
function has(object2, path) {
  return object2 != null && hasPath$1(object2, path, baseHas);
}
var has_1 = has;
var isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  constructor(refs, options) {
    this.refs = refs;
    this.refs = refs;
    if (typeof options === "function") {
      this.fn = options;
      return;
    }
    if (!has_1(options, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!options.then && !options.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = options;
    let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
    this.fn = function(...args) {
      let options2 = args.pop();
      let schema = args.pop();
      let branch = check(...args) ? then : otherwise;
      if (!branch)
        return void 0;
      if (typeof branch === "function")
        return branch(schema);
      return schema.concat(branch.resolve(options2));
    };
  }
  resolve(base, options) {
    let values = this.refs.map((ref2) => ref2.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn.apply(base, values.concat(base, options));
    if (schema === void 0 || schema === base)
      return base;
    if (!isSchema(schema))
      throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  }
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || "this";
    if (path !== params.path)
      params = _extends$3({}, params, {
        path
      });
    if (typeof message === "string")
      return message.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message === "function")
      return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field, type) {
    super();
    this.name = "ValidationError";
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ValidationError);
  }
}
const once = (cb) => {
  let fired = false;
  return (...args) => {
    if (fired)
      return;
    fired = true;
    cb(...args);
  };
};
function runTests(options, cb) {
  let {
    endEarly,
    tests,
    args,
    value,
    errors,
    sort,
    path
  } = options;
  let callback = once(cb);
  let count = tests.length;
  const nestedErrors = [];
  errors = errors ? errors : [];
  if (!count)
    return errors.length ? callback(new ValidationError(errors, value, path)) : callback(null, value);
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    test(args, function finishTestRun(err) {
      if (err) {
        if (!ValidationError.isError(err)) {
          return callback(err, value);
        }
        if (endEarly) {
          err.value = value;
          return callback(err, value);
        }
        nestedErrors.push(err);
      }
      if (--count <= 0) {
        if (nestedErrors.length) {
          if (sort)
            nestedErrors.sort(sort);
          if (errors.length)
            nestedErrors.push(...errors);
          errors = nestedErrors;
        }
        if (errors.length) {
          callback(new ValidationError(errors, value, path), value);
          return;
        }
        callback(null, value);
      }
    });
  }
}
function createBaseFor$1(fromRight) {
  return function(object2, iteratee, keysFunc) {
    var index = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object2;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var baseFor = _baseFor, keys$1 = keys_1;
function baseForOwn$2(object2, iteratee) {
  return object2 && baseFor(object2, iteratee, keys$1);
}
var _baseForOwn = baseForOwn$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object2, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object2 == null) {
    return !length;
  }
  object2 = Object(object2);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$1 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object2) {
  var result = keys(object2), length = result.length;
  while (length--) {
    var key = result[length], value = object2[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch(object2, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
function baseHasIn$1(object2, key) {
  return object2 != null && key in Object(object2);
}
var _baseHasIn = baseHasIn$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object2, path) {
  return object2 != null && hasPath(object2, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object2) {
    var objValue = get(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function baseProperty$1(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object2) {
    return baseGet(object2, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$2;
var baseAssignValue$1 = _baseAssignValue, baseForOwn$1 = _baseForOwn, baseIteratee$1 = _baseIteratee;
function mapValues(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee$1(iteratee);
  baseForOwn$1(object2, function(value, key, object3) {
    baseAssignValue$1(result, key, iteratee(value, key, object3));
  });
  return result;
}
var mapValues_1 = mapValues;
function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key];
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values))
    this._size++;
  return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var propertyExpr = {
  Cache,
  split,
  normalizePath,
  setter: function(path) {
    var parts = normalizePath(path);
    return setCache.get(path) || setCache.set(path, function setter(obj, value) {
      var index = 0;
      var len = parts.length;
      var data = obj;
      while (index < len - 1) {
        var part = parts[index];
        if (part === "__proto__" || part === "constructor" || part === "prototype") {
          return obj;
        }
        data = data[parts[index++]];
      }
      data[parts[index]] = value;
    });
  },
  getter: function(path, safe) {
    var parts = normalizePath(path);
    return getCache.get(path) || getCache.set(path, function getter(data) {
      var index = 0, len = parts.length;
      while (index < len) {
        if (data != null || !safe)
          data = data[parts[index++]];
        else
          return;
      }
      return data;
    });
  },
  join: function(segments) {
    return segments.reduce(function(path, part) {
      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
    }, "");
  },
  forEach: function(path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
  }
};
function normalizePath(path) {
  return pathCache.get(path) || pathCache.set(path, split(path).map(function(part) {
    return part.replace(CLEAN_QUOTES_REGEX, "$2");
  }));
}
function split(path) {
  return path.match(SPLIT_REGEX) || [""];
}
function forEach(parts, iter, thisArg) {
  var len = parts.length, part, idx, isArray2, isBracket;
  for (idx = 0; idx < len; idx++) {
    part = parts[idx];
    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }
      isBracket = isQuoted(part);
      isArray2 = !isBracket && /^\d+$/.test(part);
      iter.call(thisArg, part, isBracket, isArray2, idx, parts);
    }
  }
}
function isQuoted(str) {
  return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
const prefixes = {
  context: "$",
  value: "."
};
function create$2(key, options) {
  return new Reference(key, options);
}
class Reference {
  constructor(key, options = {}) {
    if (typeof key !== "string")
      throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter)
      result = this.getter(result || {});
    if (this.map)
      result = this.map(result);
    return result;
  }
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function createValidation(config) {
  function validate(_ref, cb) {
    let {
      value,
      path = "",
      label,
      options,
      originalValue,
      sync
    } = _ref, rest = _objectWithoutPropertiesLoose(_ref, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name,
      test,
      params,
      message
    } = config;
    let {
      parent,
      context
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = mapValues_1(_extends$2({
        value,
        originalValue,
        label,
        path: overrides.path || path
      }, params, overrides.params), resolve);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }
    let ctx = _extends$2({
      path,
      parent,
      type: name,
      createError,
      resolve,
      options,
      originalValue
    }, rest);
    if (!sync) {
      try {
        Promise.resolve(test.call(ctx, value, ctx)).then((validOrError) => {
          if (ValidationError.isError(validOrError))
            cb(validOrError);
          else if (!validOrError)
            cb(createError());
          else
            cb(null, validOrError);
        });
      } catch (err) {
        cb(err);
      }
      return;
    }
    let result;
    try {
      var _ref2;
      result = test.call(ctx, value, ctx);
      if (typeof ((_ref2 = result) == null ? void 0 : _ref2.then) === "function") {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      }
    } catch (err) {
      cb(err);
      return;
    }
    if (ValidationError.isError(result))
      cb(result);
    else if (!result)
      cb(createError());
    else
      cb(null, result);
  }
  validate.OPTIONS = config;
  return validate;
}
let trim = (part) => part.substr(0, part.length - 1).substr(1);
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path)
    return {
      parent,
      parentPath: path,
      schema
    };
  propertyExpr.forEach(path, (_part, isBracket, isArray2) => {
    let part = isBracket ? trim(_part) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    if (schema.innerType) {
      let idx = isArray2 ? parseInt(part, 10) : 0;
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = schema.innerType;
    }
    if (!isArray2) {
      if (!schema.fields || !schema.fields[part])
        throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema._type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet {
  constructor() {
    this.list = new Set();
    this.refs = new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const description = [];
    for (const item of this.list)
      description.push(item);
    for (const [, ref2] of this.refs)
      description.push(ref2.describe());
    return description;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  add(value) {
    Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  }
  delete(value) {
    Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  }
  has(value, resolve) {
    if (this.list.has(value))
      return true;
    let item, values = this.refs.values();
    while (item = values.next(), !item.done)
      if (resolve(item.value) === value)
        return true;
    return false;
  }
  clone() {
    const next = new ReferenceSet();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.list.forEach((value) => next.add(value));
    newItems.refs.forEach((value) => next.add(value));
    removeItems.list.forEach((value) => next.delete(value));
    removeItems.refs.forEach((value) => next.delete(value));
    return next;
  }
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
class BaseSchema {
  constructor(options) {
    this.deps = [];
    this.conditions = [];
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = Object.create(null);
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = (options == null ? void 0 : options.type) || "mixed";
    this.spec = _extends$1({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      presence: "optional"
    }, options == null ? void 0 : options.spec);
  }
  get _type() {
    return this.type;
  }
  _typeCheck(_value) {
    return true;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec)
        Object.assign(this.spec, spec);
      return this;
    }
    const next = Object.create(Object.getPrototypeOf(this));
    next.type = this.type;
    next._typeError = this._typeError;
    next._whitelistError = this._whitelistError;
    next._blacklistError = this._blacklistError;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.exclusiveTests = _extends$1({}, this.exclusiveTests);
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(_extends$1({}, this.spec, spec));
    return next;
  }
  label(label) {
    var next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0)
      return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this)
      return this;
    if (schema.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = _extends$1({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined._typeError || (combined._typeError = base._typeError);
    combined._whitelistError || (combined._whitelistError = base._whitelistError);
    combined._blacklistError || (combined._blacklistError = base._blacklistError);
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next) => {
      schema.tests.forEach((fn) => {
        next.test(fn.OPTIONS);
      });
    });
    return combined;
  }
  isType(v) {
    if (this.spec.nullable && v === null)
      return true;
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((schema2, condition) => condition.resolve(schema2, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(_extends$1({
      value
    }, options));
    let result = resolvedSchema._cast(value, options);
    if (value !== void 0 && options.assert !== false && resolvedSchema.isType(result) !== true) {
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema._type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result;
  }
  _cast(rawValue, _options) {
    let value = rawValue === void 0 ? rawValue : this.transforms.reduce((value2, fn) => fn.call(this, value2, rawValue, this), rawValue);
    if (value === void 0) {
      value = this.getDefault();
    }
    return value;
  }
  _validate(_value, options = {}, cb) {
    let {
      sync,
      path,
      from = [],
      originalValue = _value,
      strict = this.spec.strict,
      abortEarly = this.spec.abortEarly
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, _extends$1({
        assert: false
      }, options));
    }
    let args = {
      value,
      path,
      options,
      originalValue,
      schema: this,
      label: this.spec.label,
      sync,
      from
    };
    let initialTests = [];
    if (this._typeError)
      initialTests.push(this._typeError);
    if (this._whitelistError)
      initialTests.push(this._whitelistError);
    if (this._blacklistError)
      initialTests.push(this._blacklistError);
    runTests({
      args,
      value,
      path,
      sync,
      tests: initialTests,
      endEarly: abortEarly
    }, (err) => {
      if (err)
        return void cb(err, value);
      runTests({
        tests: this.tests,
        args,
        path,
        sync,
        value,
        endEarly: abortEarly
      }, cb);
    });
  }
  validate(value, options, maybeCb) {
    let schema = this.resolve(_extends$1({}, options, {
      value
    }));
    return typeof maybeCb === "function" ? schema._validate(value, options, maybeCb) : new Promise((resolve, reject) => schema._validate(value, options, (err, value2) => {
      if (err)
        reject(err);
      else
        resolve(value2);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(_extends$1({}, options, {
      value
    }));
    let result;
    schema._validate(value, _extends$1({}, options, {
      sync: true
    }), (err, value2) => {
      if (err)
        throw err;
      result = value2;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err))
        return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err))
        return false;
      throw err;
    }
  }
  _getDefault() {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault();
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    var next = this.clone();
    next.spec.strict = isStrict;
    return next;
  }
  _isPresent(value) {
    return value != null;
  }
  defined(message = mixed.defined) {
    return this.test({
      message,
      name: "defined",
      exclusive: true,
      test(value) {
        return value !== void 0;
      }
    });
  }
  required(message = mixed.required) {
    return this.clone({
      presence: "required"
    }).withMutation((s) => s.test({
      message,
      name: "required",
      exclusive: true,
      test(value) {
        return this.schema._isPresent(value);
      }
    }));
  }
  notRequired() {
    var next = this.clone({
      presence: "optional"
    });
    next.tests = next.tests.filter((test) => test.OPTIONS.name !== "required");
    return next;
  }
  nullable(isNullable = true) {
    var next = this.clone({
      nullable: isNullable !== false
    });
    return next;
  }
  transform(fn) {
    var next = this.clone();
    next.transforms.push(fn);
    return next;
  }
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0)
      opts.message = mixed.default;
    if (typeof opts.test !== "function")
      throw new TypeError("`test` is a required parameters");
    let next = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name)
      next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter((fn) => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive)
          return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test)
          return false;
      }
      return true;
    });
    next.tests.push(validate);
    return next;
  }
  when(keys2, options) {
    if (!Array.isArray(keys2) && typeof keys2 !== "string") {
      options = keys2;
      keys2 = ".";
    }
    let next = this.clone();
    let deps = toArray(keys2).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling)
        next.deps.push(dep.key);
    });
    next.conditions.push(new Condition(deps, options));
    return next;
  }
  typeError(message) {
    var next = this.clone();
    next._typeError = createValidation({
      message,
      name: "typeError",
      test(value) {
        if (value !== void 0 && !this.schema.isType(value))
          return this.createError({
            params: {
              type: this.schema._type
            }
          });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    var next = this.clone();
    enums.forEach((val) => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next._whitelistError = createValidation({
      message,
      name: "oneOf",
      test(value) {
        if (value === void 0)
          return true;
        let valids = this.schema._whitelist;
        return valids.has(value, this.resolve) ? true : this.createError({
          params: {
            values: valids.toArray().join(", ")
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    var next = this.clone();
    enums.forEach((val) => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next._blacklistError = createValidation({
      message,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        if (invalids.has(value, this.resolve))
          return this.createError({
            params: {
              values: invalids.toArray().join(", ")
            }
          });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }
  describe() {
    const next = this.clone();
    const {
      label,
      meta
    } = next.spec;
    const description = {
      meta,
      label,
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map((fn) => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list) => list.findIndex((c) => c.name === n.name) === idx)
    };
    return description;
  }
}
BaseSchema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"])
  BaseSchema.prototype[`${method}At`] = function(path, value, options = {}) {
    const {
      parent,
      parentPath,
      schema
    } = getIn(this, path, value, options.context);
    return schema[method](parent && parent[parentPath], _extends$1({}, options, {
      parent,
      path
    }));
  };
for (const alias of ["equals", "is"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
for (const alias of ["not", "nope"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;
BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;
const Mixed = BaseSchema;
Mixed.prototype;
var isAbsent = (value) => value == null;
let rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value) => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$1() {
  return new StringSchema();
}
class StringSchema extends BaseSchema {
  constructor() {
    super({
      type: "string"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        if (Array.isArray(value))
          return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag)
          return value;
        return strValue;
      });
    });
  }
  _typeCheck(value) {
    if (value instanceof String)
      value = value.valueOf();
    return typeof value === "string";
  }
  _isPresent(value) {
    return super._isPresent(value) && !!value.length;
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length
      },
      test(value) {
        return isAbsent(value) || value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: "max",
      exclusive: true,
      message,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;
    if (options) {
      if (typeof options === "object") {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || "matches",
      message: message || string.matches,
      params: {
        regex
      },
      test: (value) => isAbsent(value) || value === "" && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message,
      excludeEmptyString: false
    });
  }
  ensure() {
    return this.default("").transform((val) => val === null ? "" : val);
  }
  trim(message = string.trim) {
    return this.transform((val) => val != null ? val.trim() : val).test({
      message,
      name: "trim",
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$1.prototype = StringSchema.prototype;
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp, struct;
  if (struct = isoReg.exec(date2)) {
    for (var i = 0, k; k = numericKeys[i]; ++i)
      struct[k] = +struct[k] || 0;
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
    if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === ""))
      timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
    else {
      if (struct[8] !== "Z" && struct[9] !== void 0) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === "+")
          minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else
    timestamp = Date.parse ? Date.parse(date2) : NaN;
  return timestamp;
}
let invalidDate = new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends BaseSchema {
  constructor() {
    super({
      type: "date"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : invalidDate;
      });
    });
  }
  _typeCheck(v) {
    return isDate(v) && !isNaN(v.getTime());
  }
  prepareParam(ref2, name) {
    let param;
    if (!Reference.isRef(ref2)) {
      let cast = this.cast(ref2);
      if (!this._typeCheck(cast))
        throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref2;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, "min");
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    var limit = this.prepareParam(max, "max");
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
DateSchema.prototype;
function arrayReduce$1(array2, iteratee, accumulator, initAccum) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  if (initAccum && length) {
    accumulator = array2[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array2[index], index, array2);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$1(object2) {
  return function(key) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _basePropertyOf = basePropertyOf$1;
var basePropertyOf = _basePropertyOf;
var deburredLetters = {
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "s"
};
var deburrLetter$1 = basePropertyOf(deburredLetters);
var _deburrLetter = deburrLetter$1;
var deburrLetter = _deburrLetter, toString$3 = toString_1;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$3 = "\\u0300-\\u036f", reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$3 = "\\u20d0-\\u20ff", rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;
var rsCombo$2 = "[" + rsComboRange$3 + "]";
var reComboMark = RegExp(rsCombo$2, "g");
function deburr$1(string2) {
  string2 = toString$3(string2);
  return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var deburr_1 = deburr$1;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(string2) {
  return string2.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1;
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(string2) {
  return reHasUnicodeWord.test(string2);
}
var _hasUnicodeWord = hasUnicodeWord$1;
var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange$2 = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['\u2019]", rsBreak = "[" + rsBreakRange + "]", rsCombo$1 = "[" + rsComboRange$2 + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$1 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$2 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ$2 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$2 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$2 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsEmoji = "(?:" + [rsDingbat, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsSeq$1;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords$1(string2) {
  return string2.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1;
var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString$2 = toString_1, unicodeWords = _unicodeWords;
function words$1(string2, pattern, guard) {
  string2 = toString$2(string2);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
  }
  return string2.match(pattern) || [];
}
var words_1 = words$1;
var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
var rsApos = "['\u2019]";
var reApos = RegExp(rsApos, "g");
function createCompounder$2(callback) {
  return function(string2) {
    return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
  };
}
var _createCompounder = createCompounder$2;
var createCompounder$1 = _createCompounder;
var snakeCase = createCompounder$1(function(result, word, index) {
  return result + (index ? "_" : "") + word.toLowerCase();
});
var snakeCase_1 = snakeCase;
function baseSlice$1(array2, start, end) {
  var index = -1, length = array2.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array2[index + start];
  }
  return result;
}
var _baseSlice = baseSlice$1;
var baseSlice = _baseSlice;
function castSlice$1(array2, start, end) {
  var length = array2.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array2 : baseSlice(array2, start, end);
}
var _castSlice = castSlice$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode$2(string2) {
  return reHasUnicode.test(string2);
}
var _hasUnicode = hasUnicode$2;
function asciiToArray$1(string2) {
  return string2.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray$1(string2) {
  return string2.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode$1 = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$1(string2) {
  return hasUnicode$1(string2) ? unicodeToArray(string2) : asciiToArray(string2);
}
var _stringToArray = stringToArray$1;
var castSlice = _castSlice, hasUnicode = _hasUnicode, stringToArray = _stringToArray, toString$1 = toString_1;
function createCaseFirst$1(methodName) {
  return function(string2) {
    string2 = toString$1(string2);
    var strSymbols = hasUnicode(string2) ? stringToArray(string2) : void 0;
    var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
    return chr[methodName]() + trailing;
  };
}
var _createCaseFirst = createCaseFirst$1;
var createCaseFirst = _createCaseFirst;
var upperFirst$1 = createCaseFirst("toUpperCase");
var upperFirst_1 = upperFirst$1;
var toString = toString_1, upperFirst = upperFirst_1;
function capitalize$1(string2) {
  return upperFirst(toString(string2).toLowerCase());
}
var capitalize_1 = capitalize$1;
var capitalize = capitalize_1, createCompounder = _createCompounder;
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
var camelCase_1 = camelCase;
var baseAssignValue = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapKeys(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object2, function(value, key, object3) {
    baseAssignValue(result, iteratee(value, key, object3), value);
  });
  return result;
}
var mapKeys_1 = mapKeys;
var toposort$2 = { exports: {} };
toposort$2.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges);
};
toposort$2.exports.array = toposort;
function toposort(nodes, edges) {
  var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (i--) {
    if (!visited[i])
      visit(nodes[i], i, new Set());
  }
  return sorted;
  function visit(node, i2, predecessors) {
    if (predecessors.has(node)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node);
      } catch (e) {
        nodeRep = "";
      }
      throw new Error("Cyclic dependency" + nodeRep);
    }
    if (!nodesHash.has(node)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
    }
    if (visited[i2])
      return;
    visited[i2] = true;
    var outgoing = outgoingEdges.get(node) || new Set();
    outgoing = Array.from(outgoing);
    if (i2 = outgoing.length) {
      predecessors.add(node);
      do {
        var child = outgoing[--i2];
        visit(child, nodesHash.get(child), predecessors);
      } while (i2);
      predecessors.delete(node);
    }
    sorted[--cursor] = node;
  }
}
function uniqueNodes(arr) {
  var res = new Set();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res);
}
function makeOutgoingEdges(arr) {
  var edges = new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    if (!edges.has(edge[0]))
      edges.set(edge[0], new Set());
    if (!edges.has(edge[1]))
      edges.set(edge[1], new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges;
}
function makeNodesHash(arr) {
  var res = new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i);
  }
  return res;
}
var toposort$1 = toposort$2.exports;
function sortFields(fields, excludes = []) {
  let edges = [];
  let nodes = [];
  function addNode(depPath, key) {
    var node = propertyExpr.split(depPath)[0];
    if (!~nodes.indexOf(node))
      nodes.push(node);
    if (!~excludes.indexOf(`${key}-${node}`))
      edges.push([key, node]);
  }
  for (const key in fields)
    if (has_1(fields, key)) {
      let value = fields[key];
      if (!~nodes.indexOf(key))
        nodes.push(key);
      if (Reference.isRef(value) && value.isSibling)
        addNode(value.path, key);
      else if (isSchema(value) && "deps" in value)
        value.deps.forEach((path) => addNode(path, key));
    }
  return toposort$1.array(nodes, edges).reverse();
}
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if (((_err$path = err.path) == null ? void 0 : _err$path.indexOf(key)) !== -1) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys2) {
  return (a, b) => {
    return findIndex(keys2, a) - findIndex(keys2, b);
  };
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
let isObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
class ObjectSchema extends BaseSchema {
  constructor(spec) {
    super({
      type: "object"
    });
    this.fields = Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      this.transform(function coerce(value) {
        if (typeof value === "string") {
          try {
            value = JSON.parse(value);
          } catch (err) {
            value = null;
          }
        }
        if (this.isType(value))
          return value;
        return null;
      });
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _typeCheck(value) {
    return isObject(value) || typeof value === "function";
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);
    if (value === void 0)
      return this.getDefault();
    if (!this._typeCheck(value))
      return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = this._nodes.concat(Object.keys(value).filter((v) => this._nodes.indexOf(v) === -1));
    let intermediateValue = {};
    let innerOptions = _extends({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = has_1(value, prop);
      if (field) {
        let fieldValue;
        let inputValue = value[prop];
        innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = "spec" in field ? field.spec : void 0;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec == null ? void 0 : fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ? field.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== void 0) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, opts = {}, callback) {
    let errors = [];
    let {
      sync,
      from = [],
      originalValue = _value,
      abortEarly = this.spec.abortEarly,
      recursive = this.spec.recursive
    } = opts;
    from = [{
      schema: this,
      value: originalValue
    }, ...from];
    opts.__validating = true;
    opts.originalValue = originalValue;
    opts.from = from;
    super._validate(_value, opts, (err, value) => {
      if (err) {
        if (!ValidationError.isError(err) || abortEarly) {
          return void callback(err, value);
        }
        errors.push(err);
      }
      if (!recursive || !isObject(value)) {
        callback(errors[0] || null, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = this._nodes.map((key) => (_, cb) => {
        let path = key.indexOf(".") === -1 ? (opts.path ? `${opts.path}.` : "") + key : `${opts.path || ""}["${key}"]`;
        let field = this.fields[key];
        if (field && "validate" in field) {
          field.validate(value[key], _extends({}, opts, {
            path,
            from,
            strict: true,
            parent: value,
            originalValue: originalValue[key]
          }), cb);
          return;
        }
        cb(null);
      });
      runTests({
        sync,
        tests,
        value,
        errors,
        endEarly: abortEarly,
        sort: this._sortErrors,
        path: opts.path
      }, callback);
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.fields = _extends({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }
  concat(schema) {
    let next = super.concat(schema);
    let nextFields = next.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      if (target === void 0) {
        nextFields[field] = schemaOrRef;
      } else if (target instanceof BaseSchema && schemaOrRef instanceof BaseSchema) {
        nextFields[field] = schemaOrRef.concat(target);
      }
    }
    return next.withMutation(() => next.shape(nextFields));
  }
  getDefaultFromShape() {
    let dft = {};
    this._nodes.forEach((key) => {
      const field = this.fields[key];
      dft[key] = "default" in field ? field.getDefault() : void 0;
    });
    return dft;
  }
  _getDefault() {
    if ("default" in this.spec) {
      return super._getDefault();
    }
    if (!this._nodes.length) {
      return void 0;
    }
    return this.getDefaultFromShape();
  }
  shape(additions, excludes = []) {
    let next = this.clone();
    let fields = Object.assign(next.fields, additions);
    next.fields = fields;
    next._sortErrors = sortByKeyOrder(Object.keys(fields));
    if (excludes.length) {
      if (!Array.isArray(excludes[0]))
        excludes = [excludes];
      let keys2 = excludes.map(([first, second]) => `${first}-${second}`);
      next._excludedEdges = next._excludedEdges.concat(keys2);
    }
    next._nodes = sortFields(fields, next._excludedEdges);
    return next;
  }
  pick(keys2) {
    const picked = {};
    for (const key of keys2) {
      if (this.fields[key])
        picked[key] = this.fields[key];
    }
    return this.clone().withMutation((next) => {
      next.fields = {};
      return next.shape(picked);
    });
  }
  omit(keys2) {
    const next = this.clone();
    const fields = next.fields;
    next.fields = {};
    for (const key of keys2) {
      delete fields[key];
    }
    return next.withMutation(() => next.shape(fields));
  }
  from(from, to, alias) {
    let fromGetter = propertyExpr.getter(from, true);
    return this.transform((obj) => {
      if (obj == null)
        return obj;
      let newObj = obj;
      if (has_1(obj, from)) {
        newObj = _extends({}, obj);
        if (!alias)
          delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow === "string") {
      message = noAllow;
      noAllow = true;
    }
    let next = this.test({
      name: "noUnknown",
      exclusive: true,
      message,
      test(value) {
        if (value == null)
          return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(", ")
          }
        });
      }
    });
    next.spec.noUnknown = noAllow;
    return next;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn) {
    return this.transform((obj) => obj && mapKeys_1(obj, (_, key) => fn(key)));
  }
  camelCase() {
    return this.transformKeys(camelCase_1);
  }
  snakeCase() {
    return this.transformKeys(snakeCase_1);
  }
  constantCase() {
    return this.transformKeys((key) => snakeCase_1(key).toUpperCase());
  }
  describe() {
    let base = super.describe();
    base.fields = mapValues_1(this.fields, (value) => value.describe());
    return base;
  }
}
function create(spec) {
  return new ObjectSchema(spec);
}
create.prototype = ObjectSchema.prototype;
var signup_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "auth-wrapper-inner columns is-gapless" };
const _hoisted_2 = { class: "column is-6" };
const _hoisted_3 = { class: "hero is-fullheight is-app-grey" };
const _hoisted_4 = { class: "hero-heading" };
const _hoisted_5 = { class: "auth-logo" };
const _hoisted_6 = { class: "hero-body" };
const _hoisted_7 = { class: "container" };
const _hoisted_8 = { class: "columns" };
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = { class: "auth-content" };
const _hoisted_11 = { class: "mt-2" };
const _hoisted_12 = { class: "auth-form-wrapper" };
const _hoisted_13 = ["onSubmit"];
const _hoisted_14 = { class: "mb-2" };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { class: "columns" };
const _hoisted_17 = { class: "column is-12" };
const _hoisted_18 = ["placeholder"];
const _hoisted_19 = { class: "columns" };
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = ["placeholder"];
const _hoisted_22 = { class: "columns" };
const _hoisted_23 = { class: "column is-12" };
const _hoisted_24 = { class: "columns" };
const _hoisted_25 = { class: "column is-12" };
const _hoisted_26 = { class: "columns" };
const _hoisted_27 = { class: "column is-12" };
const _hoisted_28 = { class: "columns" };
const _hoisted_29 = { class: "column is-12" };
const _hoisted_30 = { class: "columns" };
const _hoisted_31 = { class: "column is-12" };
const _hoisted_32 = { class: "columns" };
const _hoisted_33 = { class: "column is-12" };
const _hoisted_34 = { class: "columns" };
const _hoisted_35 = { class: "column is-6-mobile is-12" };
const _hoisted_36 = { key: 1 };
const _hoisted_37 = { class: "columns" };
const _hoisted_38 = { class: "column is-12" };
const _hoisted_39 = ["placeholder"];
const _hoisted_40 = { class: "columns" };
const _hoisted_41 = { class: "column is-12" };
const _hoisted_42 = { class: "columns" };
const _hoisted_43 = { class: "column is-12" };
const _hoisted_44 = { class: "columns" };
const _hoisted_45 = { class: "column is-12" };
const _hoisted_46 = { class: "columns" };
const _hoisted_47 = { class: "column is-12" };
const _hoisted_48 = ["placeholder"];
const _hoisted_49 = { class: "columns" };
const _hoisted_50 = { class: "column is-12" };
const _hoisted_51 = { class: "columns" };
const _hoisted_52 = { class: "column is-12" };
const _hoisted_53 = { class: "mt-3" };
const _hoisted_54 = /* @__PURE__ */ createStaticVNode('<div class="column login-column is-6 is-hidden-mobile hero-banner" style="background:#fff;"><div class="hero login-hero is-fullheight"><div class="hero-body"><div class="columns"><div class="column is-10 is-offset-1"><img class="light-image" src="' + _imports_0 + '" alt=""></div></div></div><div class="hero-footer"><p class="has-text-centered"></p></div></div></div>', 1);
const _sfc_main = defineComponent({
  __name: "signup",
  setup(__props) {
    const appName = "METLS";
    const router = useRouter();
    const notif = useNotyf();
    const userSession = useUserSession();
    const isLoading = ref(false);
    const { t } = useI18n();
    const api = useApi();
    const new_user = ref({
      type: "business",
      first_name: "",
      last_name: "",
      id_number: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
      signatory_id_type: "",
      signatory_first_name: "",
      signatory_id: " "
    });
    create({
      type: create$1().required("Account Type is requred"),
      first_name: create$1().required(t("auth.errors.name.required")),
      last_name: create$1().required(t("auth.errors.name.required")),
      id_number: create$1().required("Id number is required"),
      phone: create$1().required("Phone Number is required"),
      signatory_first_name: create$1().required("Signatory name is required"),
      signatory_id: create$1().required("Signatory ID is required"),
      signatory_id_type: create$1().required("Signatory type is required"),
      email: create$1().required(t("auth.errors.email.required")).email(t("auth.errors.email.format")),
      password: create$1().required(t("auth.errors.password.required")).min(8, t("auth.errors.password.length")),
      password_confirmation: create$1().required(t("auth.errors.passwordCheck.required")).oneOf([create$2("password")], t("auth.errors.passwordCheck.match"))
    });
    const namePlaceholder = computed(() => new_user.value.type == "personal" ? "First Name" : "Business Name");
    const idPlaceholder = computed(() => new_user.value.type == "personal" ? "ID/Passport Number" : "Business ID");
    const errors = ref(void 0);
    const handleSignup = async () => {
      var _a;
      console.log(new_user.value);
      if (!isLoading.value) {
        isLoading.value = true;
        try {
          const { data } = await api.post("register", __spreadValues({}, new_user.value));
          const { token, user, permissions } = data.data;
          userSession.setToken(token);
          userSession.setUser(user);
          userSession.setPermissions(permissions);
          const group = user == null ? void 0 : user.user_group_id;
          notif.dismissAll();
          notif.success(`Welcome back, ${user.first_name}`);
          if (group != "citizen") {
            router.push({ name: "app" });
          } else {
            router.push({ name: "home" });
          }
          isLoading.value = false;
        } catch ({ response }) {
          notif.dismissAll();
          if (response) {
            const error = response == null ? void 0 : response.data;
            errors.value = ((_a = response.data) == null ? void 0 : _a.errors) || [];
            notif.error(error.message);
            console.log(response);
          } else {
            notif.warning("Error occurred! check your connection");
          }
          isLoading.value = false;
        }
      }
    };
    useHead({
      title: `${appName} - signup`
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_validation_errors = __unplugin_components_1;
      const _component_VRadio = _sfc_main$1;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VButton = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_RouterLink, { to: { name: "app" } }, {
                  default: withCtx(() => [
                    createVNode(_component_AnimatedLogo, {
                      class: "top-logo",
                      width: "36px",
                      height: "36px"
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("h2", null, toDisplayString(unref(t)("auth.title")), 1),
                      createBaseVNode("p", null, toDisplayString(unref(t)("auth.subtitle")), 1),
                      createBaseVNode("p", null, [
                        createBaseVNode("span", null, toDisplayString(unref(t)("auth.action.login")), 1),
                        createVNode(_component_RouterLink, {
                          class: "text-secondary",
                          to: { name: "auth" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Login ")
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_11, [
                        errors.value ? (openBlock(), createBlock(_component_validation_errors, {
                          key: 0,
                          errors: errors.value
                        }, null, 8, ["errors"])) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleSignup, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_14, [
                          createVNode(_component_VField, { label: "Account Type" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VRadio, {
                                    modelValue: new_user.value.type,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => new_user.value.type = $event),
                                    value: "personal",
                                    label: "Personal",
                                    color: "primary",
                                    square: ""
                                  }, null, 8, ["modelValue"]),
                                  createVNode(_component_VRadio, {
                                    modelValue: new_user.value.type,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => new_user.value.type = $event),
                                    value: "business",
                                    label: "Business",
                                    color: "primary",
                                    square: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        new_user.value.type == "business" ? (openBlock(), createElementBlock("div", _hoisted_15, [
                          createBaseVNode("div", _hoisted_16, [
                            createBaseVNode("div", _hoisted_17, [
                              createVNode(_component_VField, { label: idPlaceholder.value }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => new_user.value.id_number = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: idPlaceholder.value
                                      }, null, 8, _hoisted_18), [
                                        [vModelText, new_user.value.id_number]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_19, [
                            createBaseVNode("div", _hoisted_20, [
                              createVNode(_component_VField, { label: namePlaceholder.value }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => new_user.value.first_name = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: namePlaceholder.value
                                      }, null, 8, _hoisted_21), [
                                        [vModelText, new_user.value.first_name]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_22, [
                            createBaseVNode("div", _hoisted_23, [
                              createVNode(_component_VField, { label: "Signatory/Partner ID Type" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_select, {
                                        modelValue: new_user.value.signatory_id_type,
                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => new_user.value.signatory_id_type = $event),
                                        filterable: "",
                                        clearable: "",
                                        size: "large",
                                        placeholder: "Signatory/Partner ID type",
                                        style: { "width": "100%" }
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createElementBlock(Fragment, null, renderList([
                                            "citizen",
                                            "alien",
                                            "visitor"
                                          ], (item) => {
                                            return createVNode(_component_el_option, {
                                              key: item,
                                              label: item,
                                              value: item
                                            }, {
                                              default: withCtx(() => [
                                                createBaseVNode("span", null, toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["label", "value"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_24, [
                            createBaseVNode("div", _hoisted_25, [
                              createVNode(_component_VField, { label: "Signatory/Partner ID" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => new_user.value.signatory_id = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: "Signatory/Partner ID"
                                      }, null, 512), [
                                        [vModelText, new_user.value.signatory_id]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_26, [
                            createBaseVNode("div", _hoisted_27, [
                              createVNode(_component_VField, { label: "Signatory/Partner First Name" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => new_user.value.signatory_first_name = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: "Signatory/Partner Name"
                                      }, null, 512), [
                                        [vModelText, new_user.value.signatory_first_name]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_28, [
                            createBaseVNode("div", _hoisted_29, [
                              createVNode(_component_VField, { label: "Email Address" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => new_user.value.email = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: "Email Address"
                                      }, null, 512), [
                                        [vModelText, new_user.value.email]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_30, [
                            createBaseVNode("div", _hoisted_31, [
                              createVNode(_component_VField, { label: "Phone Number" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => new_user.value.phone = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: "Phone Number"
                                      }, null, 512), [
                                        [vModelText, new_user.value.phone]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_32, [
                            createBaseVNode("div", _hoisted_33, [
                              createVNode(_component_VField, { label: "Password" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => new_user.value.password = $event),
                                        type: "password",
                                        class: "input",
                                        placeholder: "password"
                                      }, null, 512), [
                                        [vModelText, new_user.value.password]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_34, [
                            createBaseVNode("div", _hoisted_35, [
                              createVNode(_component_VField, { label: "Password Confirmation" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => new_user.value.password_confirmation = $event),
                                        type: "password",
                                        class: "input",
                                        placeholder: "Password Confirmation"
                                      }, null, 512), [
                                        [vModelText, new_user.value.password_confirmation]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        new_user.value.type == "personal" ? (openBlock(), createElementBlock("div", _hoisted_36, [
                          createBaseVNode("div", _hoisted_37, [
                            createBaseVNode("div", _hoisted_38, [
                              createVNode(_component_VField, { label: namePlaceholder.value }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => new_user.value.first_name = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: namePlaceholder.value
                                      }, null, 8, _hoisted_39), [
                                        [vModelText, new_user.value.first_name]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_40, [
                            createBaseVNode("div", _hoisted_41, [
                              createVNode(_component_VField, { label: "Last Name" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => new_user.value.last_name = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: "Last Name"
                                      }, null, 512), [
                                        [vModelText, new_user.value.last_name]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_42, [
                            createBaseVNode("div", _hoisted_43, [
                              createVNode(_component_VField, { label: "Email Address" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => new_user.value.email = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: "Email Address"
                                      }, null, 512), [
                                        [vModelText, new_user.value.email]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_44, [
                            createBaseVNode("div", _hoisted_45, [
                              createVNode(_component_VField, { label: "Phone Number" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => new_user.value.phone = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: "Phone Number"
                                      }, null, 512), [
                                        [vModelText, new_user.value.phone]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_46, [
                            createBaseVNode("div", _hoisted_47, [
                              createVNode(_component_VField, { label: idPlaceholder.value }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => new_user.value.id_number = $event),
                                        type: "text",
                                        class: "input",
                                        placeholder: idPlaceholder.value
                                      }, null, 8, _hoisted_48), [
                                        [vModelText, new_user.value.id_number]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_49, [
                            createBaseVNode("div", _hoisted_50, [
                              createVNode(_component_VField, { label: "Password" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => new_user.value.password = $event),
                                        type: "password",
                                        class: "input",
                                        placeholder: "password"
                                      }, null, 512), [
                                        [vModelText, new_user.value.password]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_51, [
                            createBaseVNode("div", _hoisted_52, [
                              createVNode(_component_VField, { label: "Password Confirmation" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => new_user.value.password_confirmation = $event),
                                        type: "password",
                                        class: "input",
                                        placeholder: "Password Confirmation"
                                      }, null, 512), [
                                        [vModelText, new_user.value.password_confirmation]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_53, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { class: "login" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VButton, {
                                    type: "submit",
                                    color: "primary",
                                    bold: "",
                                    fullwidth: "",
                                    raised: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(t)("auth.action.signup")), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, _hoisted_13)
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _hoisted_54
      ]);
    };
  }
});
export { _sfc_main as default };
