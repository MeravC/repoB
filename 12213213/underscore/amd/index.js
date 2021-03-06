define(['exports', './_setup', './restArguments', './isObject', './isNull', './isUndefined', './isBoolean', './isElement', './isString', './isNumber', './isDate', './isRegExp', './isError', './isSymbol', './isArrayBuffer', './isDataView', './isArray', './isFunction', './isArguments', './isFinite', './isNaN', './isTypedArray', './isEmpty', './isMatch', './isEqual', './isMap', './isWeakMap', './isSet', './isWeakSet', './keys', './allKeys', './values', './pairs', './invert', './functions', './extend', './extendOwn', './defaults', './create', './clone', './tap', './get', './has', './mapObject', './identity', './constant', './noop', './toPath', './property', './propertyOf', './matcher', './times', './random', './now', './escape', './unescape', './templateSettings', './template', './result', './uniqueId', './chain', './iteratee', './partial', './bind', './bindAll', './memoize', './delay', './defer', './throttle', './debounce', './wrap', './negate', './compose', './after', './before', './once', './findKey', './findIndex', './findLastIndex', './sortedIndex', './indexOf', './lastIndexOf', './find', './findWhere', './each', './map', './reduce', './reduceRight', './filter', './reject', './every', './some', './contains', './invoke', './pluck', './where', './max', './min', './shuffle', './sample', './sortBy', './groupBy', './indexBy', './countBy', './partition', './toArray', './size', './pick', './omit', './first', './initial', './last', './rest', './compact', './flatten', './without', './uniq', './union', './intersection', './difference', './unzip', './zip', './object', './range', './chunk', './mixin', './underscore-array-methods', './underscore'], function (exports, _setup, restArguments, isObject, isNull, isUndefined, isBoolean, isElement, isString, isNumber, isDate, isRegExp, isError, isSymbol, isArrayBuffer, isDataView, isArray, isFunction, isArguments, _isFinite, _isNaN, isTypedArray, isEmpty, isMatch, isEqual, isMap, isWeakMap, isSet, isWeakSet, keys, allKeys, values, pairs, invert, functions, extend, extendOwn, defaults, create, clone, tap, get, has, mapObject, identity, constant, noop, toPath, property, propertyOf, matcher, times, random, now, _escape, _unescape, templateSettings, template, result, uniqueId, chain, iteratee, partial, bind, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, findKey, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, find, findWhere, each, map, reduce, reduceRight, filter, reject, every, some, contains, invoke, pluck, where, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, partition, toArray, size, pick, omit, first, initial, last, rest, compact, flatten, without, uniq, union, intersection, difference, unzip, zip, object, range, chunk, mixin, underscoreArrayMethods, underscore) {

         // Named Exports

         exports.VERSION = _setup.VERSION;
         exports.restArguments = restArguments;
         exports.isObject = isObject;
         exports.isNull = isNull;
         exports.isUndefined = isUndefined;
         exports.isBoolean = isBoolean;
         exports.isElement = isElement;
         exports.isString = isString;
         exports.isNumber = isNumber;
         exports.isDate = isDate;
         exports.isRegExp = isRegExp;
         exports.isError = isError;
         exports.isSymbol = isSymbol;
         exports.isArrayBuffer = isArrayBuffer;
         exports.isDataView = isDataView;
         exports.isArray = isArray;
         exports.isFunction = isFunction;
         exports.isArguments = isArguments;
         exports.isFinite = _isFinite;
         exports.isNaN = _isNaN;
         exports.isTypedArray = isTypedArray;
         exports.isEmpty = isEmpty;
         exports.isMatch = isMatch;
         exports.isEqual = isEqual;
         exports.isMap = isMap;
         exports.isWeakMap = isWeakMap;
         exports.isSet = isSet;
         exports.isWeakSet = isWeakSet;
         exports.keys = keys;
         exports.allKeys = allKeys;
         exports.values = values;
         exports.pairs = pairs;
         exports.invert = invert;
         exports.functions = functions;
         exports.methods = functions;
         exports.extend = extend;
         exports.assign = extendOwn;
         exports.extendOwn = extendOwn;
         exports.defaults = defaults;
         exports.create = create;
         exports.clone = clone;
         exports.tap = tap;
         exports.get = get;
         exports.has = has;
         exports.mapObject = mapObject;
         exports.identity = identity;
         exports.constant = constant;
         exports.noop = noop;
         exports.toPath = toPath;
         exports.property = property;
         exports.propertyOf = propertyOf;
         exports.matcher = matcher;
         exports.matches = matcher;
         exports.times = times;
         exports.random = random;
         exports.now = now;
         exports.escape = _escape;
         exports.unescape = _unescape;
         exports.templateSettings = templateSettings;
         exports.template = template;
         exports.result = result;
         exports.uniqueId = uniqueId;
         exports.chain = chain;
         exports.iteratee = iteratee;
         exports.partial = partial;
         exports.bind = bind;
         exports.bindAll = bindAll;
         exports.memoize = memoize;
         exports.delay = delay;
         exports.defer = defer;
         exports.throttle = throttle;
         exports.debounce = debounce;
         exports.wrap = wrap;
         exports.negate = negate;
         exports.compose = compose;
         exports.after = after;
         exports.before = before;
         exports.once = once;
         exports.findKey = findKey;
         exports.findIndex = findIndex;
         exports.findLastIndex = findLastIndex;
         exports.sortedIndex = sortedIndex;
         exports.indexOf = indexOf;
         exports.lastIndexOf = lastIndexOf;
         exports.detect = find;
         exports.find = find;
         exports.findWhere = findWhere;
         exports.each = each;
         exports.forEach = each;
         exports.collect = map;
         exports.map = map;
         exports.foldl = reduce;
         exports.inject = reduce;
         exports.reduce = reduce;
         exports.foldr = reduceRight;
         exports.reduceRight = reduceRight;
         exports.filter = filter;
         exports.select = filter;
         exports.reject = reject;
         exports.all = every;
         exports.every = every;
         exports.any = some;
         exports.some = some;
         exports.contains = contains;
         exports.include = contains;
         exports.includes = contains;
         exports.invoke = invoke;
         exports.pluck = pluck;
         exports.where = where;
         exports.max = max;
         exports.min = min;
         exports.shuffle = shuffle;
         exports.sample = sample;
         exports.sortBy = sortBy;
         exports.groupBy = groupBy;
         exports.indexBy = indexBy;
         exports.countBy = countBy;
         exports.partition = partition;
         exports.toArray = toArray;
         exports.size = size;
         exports.pick = pick;
         exports.omit = omit;
         exports.first = first;
         exports.head = first;
         exports.take = first;
         exports.initial = initial;
         exports.last = last;
         exports.drop = rest;
         exports.rest = rest;
         exports.tail = rest;
         exports.compact = compact;
         exports.flatten = flatten;
         exports.without = without;
         exports.uniq = uniq;
         exports.unique = uniq;
         exports.union = union;
         exports.intersection = intersection;
         exports.difference = difference;
         exports.transpose = unzip;
         exports.unzip = unzip;
         exports.zip = zip;
         exports.object = object;
         exports.range = range;
         exports.chunk = chunk;
         exports.mixin = mixin;
         exports.default = underscore;

         Object.defineProperty(exports, '__esModule', { value: true });

});
