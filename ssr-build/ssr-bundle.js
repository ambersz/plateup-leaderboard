module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/plateup-leaderboard/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "qVkA");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2+fx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: variableGroups, variableColumns

// EXTERNAL MODULE: ../node_modules/luxon/src/luxon.js + 23 modules
var luxon = __webpack_require__("Etnu");

// CONCATENATED MODULE: ./routes/home/utils.ts
var pr = new Intl.PluralRules('en-US', {
  type: 'ordinal'
});
var suffixes = new Map([['one', 'st'], ['two', 'nd'], ['few', 'rd'], ['other', 'th']]);
var formatOrdinals = function formatOrdinals(n) {
  var rule = pr.select(n);
  var suffix = suffixes.get(rule);
  return "".concat(n).concat(suffix);
};
// EXTERNAL MODULE: ./mockresponse.json
var mockresponse = __webpack_require__("Mhmf");

// CONCATENATED MODULE: ./api.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// https://www.speedrun.com/api/v1/leaderboards/yd4kq3k6/category/z275n0gk

var getRuns = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    return (yield fetch('https://www.speedrun.com/api/v1/leaderboards/yd4kq3k6/category/z275n0gk?embed=variables,players')).json();
    return mockresponse;
  });
  return function getRuns() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ var api = (getRuns);
// CONCATENATED MODULE: ./routes/home/processData.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function processData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function processData_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { processData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { processData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var variableGroups = {
  '2lg135el': 'Seed',
  wl3d19v8: 'Dishes',
  wlekw94l: 'Players',
  '5lyx19gn': 'Seed',
  p855yjv8: 'Patch',
  onv4xmwn: 'Map scene'
}; // what to label the column
var variableColumns = ['2lg135el',
// set/random seed
'wl3d19v8',
// dishes
'wlekw94l',
// players
'5lyx19gn',
// seed
'p855yjv8',
// patch
'onv4xmwn' // setting
];
function processData() {
  return _processData.apply(this, arguments);
}
function _processData() {
  _processData = processData_asyncToGenerator(function* () {
    // return [processedRuns, bariableLabels, players]

    // wl3d19v8
    var dishVar = 'wl3d19v8';
    var dishReductions = {
      '4lxnzzr1': 0,
      jqz3yeg1: 1,
      '0q5r66n1': -1,
      '5lejooz1': 0,
      '81wygg5q': -2,
      rqv877w1: 1,
      zqo40021: 1,
      '013g003l': -2,
      '5lm5yy4q': 0,
      '814zjjjl': 1,
      '0q53pe71': 2 // dumplings
    };

    //wlekw94l
    var playersVar = 'wlekw94l';
    var playerScale = {
      z19n33kq: 0.8,
      p127nnkq: 1,
      '81p9jjkq': 1.25,
      xqkvddyl: 1.5
    };
    var leaderboardVariables = [];
    var res = yield api();
    var runs = res.data.runs;
    var variables = res.data.variables;
    var playersData = res.data.players.data;
    var playersIDtoName = {};
    var _iterator = _createForOfIteratorHelper(playersData),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _a$names$internationa;
        var a = _step.value;
        if (a.rel === 'guest') continue;
        playersIDtoName[a.id] = (_a$names$internationa = a.names.international) !== null && _a$names$internationa !== void 0 ? _a$names$internationa : a.names.japanese;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var labels = {}; // what is the label the id is associated with?
    var _iterator2 = _createForOfIteratorHelper(variables.data),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var type = _step2.value;
        for (var _i3 = 0, _Object$keys2 = Object.keys(type.values.values); _i3 < _Object$keys2.length; _i3++) {
          var dataKey = _Object$keys2[_i3];
          labels[dataKey] = type.values.values[dataKey].label;
        }
        if (type['is-subcategory']) {
          // use this variable to determine run placement.
          leaderboardVariables.push(type.id);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var leaderboards = {};
    // process runs
    var processedRuns = runs.map(function (a) {
      return a.run;
    }).map(function (a) {
      var leaderboard = [a.category];
      for (var _i = 0, _leaderboardVariables = leaderboardVariables; _i < _leaderboardVariables.length; _i++) {
        var v = _leaderboardVariables[_i];
        leaderboard.push("".concat(v, ".").concat(a.values[v]));
      }
      var leaderboardUrl = 'https://www.speedrun.com/plateup?x=' + leaderboard.join('-');
      if (leaderboards[leaderboardUrl] === undefined) leaderboards[leaderboardUrl] = [];
      leaderboards[leaderboardUrl].push(a.times.primary_t);
      var place = leaderboards[leaderboardUrl].length;
      var adjustedTime = a.times.primary_t;
      var dishReduction = 0;
      for (var _v in a.values) {
        if (_v == dishVar) {
          dishReduction += dishReductions[a.values[_v]];
          adjustedTime /= Math.pow(0.85, dishReductions[a.values[_v]]);
        }
        if (_v == playersVar) {
          adjustedTime /= playerScale[a.values[_v]];
        }
      }
      return _objectSpread(_objectSpread({}, a), {}, {
        leaderboardUrl: leaderboardUrl,
        place: place,
        adjustedTime: adjustedTime,
        dishReduction: dishReduction
      });
    }).sort(function (a, b) {
      return a.adjustedTime - b.adjustedTime;
    }).map(function (_ref) {
      var place = _ref.place,
        players = _ref.players,
        weblink = _ref.weblink,
        leaderboardUrl = _ref.leaderboardUrl,
        adjustedTime = _ref.adjustedTime,
        _ref$times = _ref.times,
        primary = _ref$times.primary,
        primary_t = _ref$times.primary_t,
        verifyDate = _ref.status['verify-date'],
        dishReduction = _ref.dishReduction,
        values = _ref.values,
        videos = _ref.videos;
      var res = _objectSpread({
        place: formatOrdinals(place),
        players: players.map(function (p) {
          var _p$name;
          return {
            url: p.rel === 'user' ? "https://www.speedrun.com/user/".concat(playersIDtoName[p.id]) : null,
            name: (_p$name = p.name) !== null && _p$name !== void 0 ? _p$name : playersIDtoName[p.id]
          };
        }),
        weblink: weblink,
        leaderboardUrl: leaderboardUrl,
        time_adj: adjustedTime,
        time_adj_s: luxon["b" /* Duration */].fromMillis(adjustedTime * 1000).toISOTime(),
        time: primary_t,
        time_s: primary,
        verifyDate: verifyDate,
        dishReduction: dishReduction,
        videoUrl: videos.links.at(-1).uri
      }, values);
      for (var _i2 = 0, _Object$keys = Object.keys(values); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];
        res[key] = labels[values[key]];
      }
      return res;
    });
    return {
      processedRuns: processedRuns,
      labels: labels,
      players: playersIDtoName
    };
  });
  return _processData.apply(this, arguments);
}
/* harmony default export */ var home_processData = __webpack_exports__["a"] = (processData);

/***/ }),

/***/ "Etnu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ datetime_DateTime; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ duration_Duration; });

// UNUSED EXPORTS: VERSION, Interval, Info, Zone, FixedOffsetZone, IANAZone, InvalidZone, SystemZone, Settings

// CONCATENATED MODULE: ../node_modules/luxon/src/errors.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// these aren't really private, but nor are they really useful to document
/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inherits(LuxonError, _Error);
  var _super = _createSuper(LuxonError);
  function LuxonError() {
    _classCallCheck(this, LuxonError);
    return _super.apply(this, arguments);
  }
  return _createClass(LuxonError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */
var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inherits(InvalidDateTimeError, _LuxonError);
  var _super2 = _createSuper(InvalidDateTimeError);
  function InvalidDateTimeError(reason) {
    _classCallCheck(this, InvalidDateTimeError);
    return _super2.call(this, "Invalid DateTime: ".concat(reason.toMessage()));
  }
  return _createClass(InvalidDateTimeError);
}(LuxonError);

/**
 * @private
 */
var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inherits(InvalidIntervalError, _LuxonError2);
  var _super3 = _createSuper(InvalidIntervalError);
  function InvalidIntervalError(reason) {
    _classCallCheck(this, InvalidIntervalError);
    return _super3.call(this, "Invalid Interval: ".concat(reason.toMessage()));
  }
  return _createClass(InvalidIntervalError);
}(LuxonError);

/**
 * @private
 */
var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inherits(InvalidDurationError, _LuxonError3);
  var _super4 = _createSuper(InvalidDurationError);
  function InvalidDurationError(reason) {
    _classCallCheck(this, InvalidDurationError);
    return _super4.call(this, "Invalid Duration: ".concat(reason.toMessage()));
  }
  return _createClass(InvalidDurationError);
}(LuxonError);

/**
 * @private
 */
var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inherits(ConflictingSpecificationError, _LuxonError4);
  var _super5 = _createSuper(ConflictingSpecificationError);
  function ConflictingSpecificationError() {
    _classCallCheck(this, ConflictingSpecificationError);
    return _super5.apply(this, arguments);
  }
  return _createClass(ConflictingSpecificationError);
}(LuxonError);

/**
 * @private
 */
var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inherits(InvalidUnitError, _LuxonError5);
  var _super6 = _createSuper(InvalidUnitError);
  function InvalidUnitError(unit) {
    _classCallCheck(this, InvalidUnitError);
    return _super6.call(this, "Invalid unit ".concat(unit));
  }
  return _createClass(InvalidUnitError);
}(LuxonError);

/**
 * @private
 */
var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inherits(InvalidArgumentError, _LuxonError6);
  var _super7 = _createSuper(InvalidArgumentError);
  function InvalidArgumentError() {
    _classCallCheck(this, InvalidArgumentError);
    return _super7.apply(this, arguments);
  }
  return _createClass(InvalidArgumentError);
}(LuxonError);

/**
 * @private
 */
var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inherits(ZoneIsAbstractError, _LuxonError7);
  var _super8 = _createSuper(ZoneIsAbstractError);
  function ZoneIsAbstractError() {
    _classCallCheck(this, ZoneIsAbstractError);
    return _super8.call(this, "Zone is an abstract class");
  }
  return _createClass(ZoneIsAbstractError);
}(LuxonError);
// CONCATENATED MODULE: ../node_modules/luxon/src/impl/formats.js
/**
 * @private
 */

var formats_n = "numeric",
  formats_s = "short",
  formats_l = "long";
var DATE_SHORT = {
  year: formats_n,
  month: formats_n,
  day: formats_n
};
var DATE_MED = {
  year: formats_n,
  month: formats_s,
  day: formats_n
};
var DATE_MED_WITH_WEEKDAY = {
  year: formats_n,
  month: formats_s,
  day: formats_n,
  weekday: formats_s
};
var DATE_FULL = {
  year: formats_n,
  month: formats_l,
  day: formats_n
};
var DATE_HUGE = {
  year: formats_n,
  month: formats_l,
  day: formats_n,
  weekday: formats_l
};
var TIME_SIMPLE = {
  hour: formats_n,
  minute: formats_n
};
var TIME_WITH_SECONDS = {
  hour: formats_n,
  minute: formats_n,
  second: formats_n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: formats_n,
  minute: formats_n,
  second: formats_n,
  timeZoneName: formats_s
};
var TIME_WITH_LONG_OFFSET = {
  hour: formats_n,
  minute: formats_n,
  second: formats_n,
  timeZoneName: formats_l
};
var TIME_24_SIMPLE = {
  hour: formats_n,
  minute: formats_n,
  hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
  hour: formats_n,
  minute: formats_n,
  second: formats_n,
  hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: formats_n,
  minute: formats_n,
  second: formats_n,
  hourCycle: "h23",
  timeZoneName: formats_s
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: formats_n,
  minute: formats_n,
  second: formats_n,
  hourCycle: "h23",
  timeZoneName: formats_l
};
var DATETIME_SHORT = {
  year: formats_n,
  month: formats_n,
  day: formats_n,
  hour: formats_n,
  minute: formats_n
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: formats_n,
  month: formats_n,
  day: formats_n,
  hour: formats_n,
  minute: formats_n,
  second: formats_n
};
var DATETIME_MED = {
  year: formats_n,
  month: formats_s,
  day: formats_n,
  hour: formats_n,
  minute: formats_n
};
var DATETIME_MED_WITH_SECONDS = {
  year: formats_n,
  month: formats_s,
  day: formats_n,
  hour: formats_n,
  minute: formats_n,
  second: formats_n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: formats_n,
  month: formats_s,
  day: formats_n,
  weekday: formats_s,
  hour: formats_n,
  minute: formats_n
};
var DATETIME_FULL = {
  year: formats_n,
  month: formats_l,
  day: formats_n,
  hour: formats_n,
  minute: formats_n,
  timeZoneName: formats_s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: formats_n,
  month: formats_l,
  day: formats_n,
  hour: formats_n,
  minute: formats_n,
  second: formats_n,
  timeZoneName: formats_s
};
var DATETIME_HUGE = {
  year: formats_n,
  month: formats_l,
  day: formats_n,
  weekday: formats_l,
  hour: formats_n,
  minute: formats_n,
  timeZoneName: formats_l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: formats_n,
  month: formats_l,
  day: formats_n,
  weekday: formats_l,
  hour: formats_n,
  minute: formats_n,
  second: formats_n,
  timeZoneName: formats_l
};
// CONCATENATED MODULE: ../node_modules/luxon/src/zone.js
function zone_typeof(obj) { "@babel/helpers - typeof"; return zone_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, zone_typeof(obj); }
function zone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function zone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, zone_toPropertyKey(descriptor.key), descriptor); } }
function zone_createClass(Constructor, protoProps, staticProps) { if (protoProps) zone_defineProperties(Constructor.prototype, protoProps); if (staticProps) zone_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function zone_toPropertyKey(arg) { var key = zone_toPrimitive(arg, "string"); return zone_typeof(key) === "symbol" ? key : String(key); }
function zone_toPrimitive(input, hint) { if (zone_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (zone_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * @interface
 */
var zone_Zone = /*#__PURE__*/function () {
  function Zone() {
    zone_classCallCheck(this, Zone);
  }
  zone_createClass(Zone, [{
    key: "type",
    get:
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    function get() {
      throw new ZoneIsAbstractError();
    }

    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "ianaName",
    get: function get() {
      return this.name;
    }

    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
  }, {
    key: "isUniversal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }

    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
  }, {
    key: "offsetName",
    value: function offsetName(ts, opts) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Returns the offset's value as a string
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
  }, {
    key: "formatOffset",
    value: function formatOffset(ts, format) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
  }, {
    key: "offset",
    value: function offset(ts) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Return whether this Zone is equal to another zone
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
  }, {
    key: "equals",
    value: function equals(otherZone) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Return whether this Zone is valid.
     * @abstract
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);
  return Zone;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/zones/systemZone.js
function systemZone_typeof(obj) { "@babel/helpers - typeof"; return systemZone_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, systemZone_typeof(obj); }
function systemZone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function systemZone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, systemZone_toPropertyKey(descriptor.key), descriptor); } }
function systemZone_createClass(Constructor, protoProps, staticProps) { if (protoProps) systemZone_defineProperties(Constructor.prototype, protoProps); if (staticProps) systemZone_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function systemZone_toPropertyKey(arg) { var key = systemZone_toPrimitive(arg, "string"); return systemZone_typeof(key) === "symbol" ? key : String(key); }
function systemZone_toPrimitive(input, hint) { if (systemZone_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (systemZone_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function systemZone_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) systemZone_setPrototypeOf(subClass, superClass); }
function systemZone_setPrototypeOf(o, p) { systemZone_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return systemZone_setPrototypeOf(o, p); }
function systemZone_createSuper(Derived) { var hasNativeReflectConstruct = systemZone_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = systemZone_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = systemZone_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return systemZone_possibleConstructorReturn(this, result); }; }
function systemZone_possibleConstructorReturn(self, call) { if (call && (systemZone_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return systemZone_assertThisInitialized(self); }
function systemZone_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function systemZone_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function systemZone_getPrototypeOf(o) { systemZone_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return systemZone_getPrototypeOf(o); }


var singleton = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
var systemZone_SystemZone = /*#__PURE__*/function (_Zone) {
  systemZone_inherits(SystemZone, _Zone);
  var _super = systemZone_createSuper(SystemZone);
  function SystemZone() {
    systemZone_classCallCheck(this, SystemZone);
    return _super.apply(this, arguments);
  }
  systemZone_createClass(SystemZone, [{
    key: "type",
    get: /** @override **/
    function get() {
      return "system";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    /** @override **/
  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }

    /** @override **/
  }, {
    key: "offsetName",
    value: function offsetName(ts, _ref) {
      var format = _ref.format,
        locale = _ref.locale;
      return parseZoneInfo(ts, format, locale);
    }

    /** @override **/
  }, {
    key: "formatOffset",
    value: function formatOffset(ts, format) {
      return util_formatOffset(this.offset(ts), format);
    }

    /** @override **/
  }, {
    key: "offset",
    value: function offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    }

    /** @override **/
  }, {
    key: "equals",
    value: function equals(otherZone) {
      return otherZone.type === "system";
    }

    /** @override **/
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",
    get:
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    function get() {
      if (singleton === null) {
        singleton = new SystemZone();
      }
      return singleton;
    }
  }]);
  return SystemZone;
}(zone_Zone);

// CONCATENATED MODULE: ../node_modules/luxon/src/zones/IANAZone.js
function IANAZone_typeof(obj) { "@babel/helpers - typeof"; return IANAZone_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, IANAZone_typeof(obj); }
function IANAZone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function IANAZone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, IANAZone_toPropertyKey(descriptor.key), descriptor); } }
function IANAZone_createClass(Constructor, protoProps, staticProps) { if (protoProps) IANAZone_defineProperties(Constructor.prototype, protoProps); if (staticProps) IANAZone_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function IANAZone_toPropertyKey(arg) { var key = IANAZone_toPrimitive(arg, "string"); return IANAZone_typeof(key) === "symbol" ? key : String(key); }
function IANAZone_toPrimitive(input, hint) { if (IANAZone_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (IANAZone_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function IANAZone_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) IANAZone_setPrototypeOf(subClass, superClass); }
function IANAZone_setPrototypeOf(o, p) { IANAZone_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return IANAZone_setPrototypeOf(o, p); }
function IANAZone_createSuper(Derived) { var hasNativeReflectConstruct = IANAZone_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = IANAZone_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = IANAZone_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return IANAZone_possibleConstructorReturn(this, result); }; }
function IANAZone_possibleConstructorReturn(self, call) { if (call && (IANAZone_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return IANAZone_assertThisInitialized(self); }
function IANAZone_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function IANAZone_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function IANAZone_getPrototypeOf(o) { IANAZone_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return IANAZone_getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    });
  }
  return dtfCache[zone];
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    _parsed = _slicedToArray(parsed, 8),
    fMonth = _parsed[1],
    fDay = _parsed[2],
    fYear = _parsed[3],
    fadOrBc = _parsed[4],
    fHour = _parsed[5],
    fMinute = _parsed[6],
    fSecond = _parsed[7];
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date);
  var filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
      type = _formatted$i.type,
      value = _formatted$i.value;
    var pos = typeToPos[type];
    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
var IANAZone_IANAZone = /*#__PURE__*/function (_Zone) {
  IANAZone_inherits(IANAZone, _Zone);
  var _super = IANAZone_createSuper(IANAZone);
  function IANAZone(name) {
    var _this;
    IANAZone_classCallCheck(this, IANAZone);
    _this = _super.call(this);
    /** @private **/
    _this.zoneName = name;
    /** @private **/
    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }

  /** @override **/
  IANAZone_createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }

    /** @override **/
  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }

    /** @override **/
  }, {
    key: "offsetName",
    value: function offsetName(ts, _ref) {
      var format = _ref.format,
        locale = _ref.locale;
      return parseZoneInfo(ts, format, locale, this.name);
    }

    /** @override **/
  }, {
    key: "formatOffset",
    value: function formatOffset(ts, format) {
      return util_formatOffset(this.offset(ts), format);
    }

    /** @override **/
  }, {
    key: "offset",
    value: function offset(ts) {
      var date = new Date(ts);
      if (isNaN(date)) return NaN;
      var dtf = makeDTF(this.name);
      var _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        _ref3 = _slicedToArray(_ref2, 7),
        year = _ref3[0],
        month = _ref3[1],
        day = _ref3[2],
        adOrBc = _ref3[3],
        hour = _ref3[4],
        minute = _ref3[5],
        second = _ref3[6];
      if (adOrBc === "BC") {
        year = -Math.abs(year) + 1;
      }

      // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
      var adjustedHour = hour === 24 ? 0 : hour;
      var asUTC = objToLocalTS({
        year: year,
        month: month,
        day: day,
        hour: adjustedHour,
        minute: minute,
        second: second,
        millisecond: 0
      });
      var asTS = +date;
      var over = asTS % 1000;
      asTS -= over >= 0 ? over : 1000 + over;
      return (asUTC - asTS) / (60 * 1000);
    }

    /** @override **/
  }, {
    key: "equals",
    value: function equals(otherZone) {
      return otherZone.type === "iana" && otherZone.name === this.name;
    }

    /** @override **/
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {string} name - Zone name
     * @return {IANAZone}
     */
    function create(name) {
      if (!ianaZoneCache[name]) {
        ianaZoneCache[name] = new IANAZone(name);
      }
      return ianaZoneCache[name];
    }

    /**
     * Reset local caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
  }, {
    key: "resetCache",
    value: function resetCache() {
      ianaZoneCache = {};
      dtfCache = {};
    }

    /**
     * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
     * @param {string} s - The string to check validity on
     * @example IANAZone.isValidSpecifier("America/New_York") //=> true
     * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
     * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
     * @return {boolean}
     */
  }, {
    key: "isValidSpecifier",
    value: function isValidSpecifier(s) {
      return this.isValidZone(s);
    }

    /**
     * Returns whether the provided string identifies a real zone
     * @param {string} zone - The string to check
     * @example IANAZone.isValidZone("America/New_York") //=> true
     * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
     * @example IANAZone.isValidZone("Sport~~blorp") //=> false
     * @return {boolean}
     */
  }, {
    key: "isValidZone",
    value: function isValidZone(zone) {
      if (!zone) {
        return false;
      }
      try {
        new Intl.DateTimeFormat("en-US", {
          timeZone: zone
        }).format();
        return true;
      } catch (e) {
        return false;
      }
    }
  }]);
  return IANAZone;
}(zone_Zone);

// CONCATENATED MODULE: ../node_modules/luxon/src/impl/locale.js
function locale_typeof(obj) { "@babel/helpers - typeof"; return locale_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, locale_typeof(obj); }
var _excluded = ["base"],
  _excluded2 = ["padTo", "floor"];
function locale_slicedToArray(arr, i) { return locale_arrayWithHoles(arr) || locale_iterableToArrayLimit(arr, i) || locale_unsupportedIterableToArray(arr, i) || locale_nonIterableRest(); }
function locale_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function locale_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return locale_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return locale_arrayLikeToArray(o, minLen); }
function locale_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function locale_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function locale_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = locale_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function locale_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function locale_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, locale_toPropertyKey(descriptor.key), descriptor); } }
function locale_createClass(Constructor, protoProps, staticProps) { if (protoProps) locale_defineProperties(Constructor.prototype, protoProps); if (staticProps) locale_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function locale_toPropertyKey(arg) { var key = locale_toPrimitive(arg, "string"); return locale_typeof(key) === "symbol" ? key : String(key); }
function locale_toPrimitive(input, hint) { if (locale_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (locale_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






// todo - remap caching

var intlLFCache = {};
function getCachedLF(locString) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var key = JSON.stringify([locString, opts]);
  var dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
var intlDTCache = {};
function getCachedDTF(locString) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
var intlNumCache = {};
function getCachedINF(locString) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
var intlRelCache = {};
function getCachedRTF(locString) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var base = opts.base,
    cacheKeyOpts = _objectWithoutProperties(opts, _excluded); // exclude `base` from the options
  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
var sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  // private subtags and unicode subtags have ordering requirements,
  // and we're not properly parsing this, so just strip out the
  // private ones if they exist.
  var xIndex = localeStr.indexOf("-x-");
  if (xIndex !== -1) {
    localeStr = localeStr.substring(0, xIndex);
  }
  var uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var selectedStr;
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
      selectedStr = localeStr;
    } catch (e) {
      var smaller = localeStr.substring(0, uIndex);
      options = getCachedDTF(smaller).resolvedOptions();
      selectedStr = smaller;
    }
    var _options = options,
      numberingSystem = _options.numberingSystem,
      calendar = _options.calendar;
    return [selectedStr, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    if (!localeStr.includes("-u-")) {
      localeStr += "-u";
    }
    if (outputCalendar) {
      localeStr += "-ca-".concat(outputCalendar);
    }
    if (numberingSystem) {
      localeStr += "-nu-".concat(numberingSystem);
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  var ms = [];
  for (var i = 1; i <= 12; i++) {
    var dt = datetime_DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  var ms = [];
  for (var i = 1; i <= 7; i++) {
    var dt = datetime_DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}

/**
 * @private
 */
var locale_PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    locale_classCallCheck(this, PolyNumberFormatter);
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    var padTo = opts.padTo,
      floor = opts.floor,
      otherOpts = _objectWithoutProperties(opts, _excluded2);
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      var intlOpts = _objectSpread({
        useGrouping: false
      }, opts);
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  locale_createClass(PolyNumberFormatter, [{
    key: "format",
    value: function format(i) {
      if (this.inf) {
        var fixed = this.floor ? Math.floor(i) : i;
        return this.inf.format(fixed);
      } else {
        // to match the browser's numberformatter defaults
        var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
        return padStart(_fixed, this.padTo);
      }
    }
  }]);
  return PolyNumberFormatter;
}();
/**
 * @private
 */
var locale_PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    locale_classCallCheck(this, PolyDateFormatter);
    this.opts = opts;
    var z = undefined;
    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      var gmtOffset = -1 * (dt.offset / 60);
      var offsetZ = gmtOffset >= 0 ? "Etc/GMT+".concat(gmtOffset) : "Etc/GMT".concat(gmtOffset);
      if (dt.offset !== 0 && IANAZone_IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : datetime_DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }
    var intlOpts = _objectSpread({}, this.opts);
    intlOpts.timeZone = intlOpts.timeZone || z;
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  locale_createClass(PolyDateFormatter, [{
    key: "format",
    value: function format() {
      return this.dtf.format(this.dt.toJSDate());
    }
  }, {
    key: "formatToParts",
    value: function formatToParts() {
      return this.dtf.formatToParts(this.dt.toJSDate());
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  }]);
  return PolyDateFormatter;
}();
/**
 * @private
 */
var locale_PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    locale_classCallCheck(this, PolyRelFormatter);
    this.opts = _objectSpread({
      style: "long"
    }, opts);
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  locale_createClass(PolyRelFormatter, [{
    key: "format",
    value: function format(count, unit) {
      if (this.rtf) {
        return this.rtf.format(count, unit);
      } else {
        return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
      }
    }
  }, {
    key: "formatToParts",
    value: function formatToParts(count, unit) {
      if (this.rtf) {
        return this.rtf.formatToParts(count, unit);
      } else {
        return [];
      }
    }
  }]);
  return PolyRelFormatter;
}();
/**
 * @private
 */
var locale_Locale = /*#__PURE__*/function () {
  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    locale_classCallCheck(this, Locale);
    var _parseLocaleString = parseLocaleString(locale),
      _parseLocaleString2 = locale_slicedToArray(_parseLocaleString, 3),
      parsedLocale = _parseLocaleString2[0],
      parsedNumberingSystem = _parseLocaleString2[1],
      parsedOutputCalendar = _parseLocaleString2[2];
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  locale_createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }
      return this.fastNumbersCached;
    }
  }, {
    key: "listingMode",
    value: function listingMode() {
      var isActuallyEn = this.isEnglish();
      var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
      return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    }
  }, {
    key: "clone",
    value: function clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
      }
    }
  }, {
    key: "redefaultToEN",
    value: function redefaultToEN() {
      var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.clone(_objectSpread(_objectSpread({}, alts), {}, {
        defaultToEN: true
      }));
    }
  }, {
    key: "redefaultToSystem",
    value: function redefaultToSystem() {
      var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.clone(_objectSpread(_objectSpread({}, alts), {}, {
        defaultToEN: false
      }));
    }
  }, {
    key: "months",
    value: function months(length) {
      var _this = this;
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return listStuff(this, length, defaultOK, english_months, function () {
        var intl = format ? {
            month: length,
            day: "numeric"
          } : {
            month: length
          },
          formatStr = format ? "format" : "standalone";
        if (!_this.monthsCache[formatStr][length]) {
          _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
            return _this.extract(dt, intl, "month");
          });
        }
        return _this.monthsCache[formatStr][length];
      });
    }
  }, {
    key: "weekdays",
    value: function weekdays(length) {
      var _this2 = this;
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return listStuff(this, length, defaultOK, english_weekdays, function () {
        var intl = format ? {
            weekday: length,
            year: "numeric",
            month: "long",
            day: "numeric"
          } : {
            weekday: length
          },
          formatStr = format ? "format" : "standalone";
        if (!_this2.weekdaysCache[formatStr][length]) {
          _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
            return _this2.extract(dt, intl, "weekday");
          });
        }
        return _this2.weekdaysCache[formatStr][length];
      });
    }
  }, {
    key: "meridiems",
    value: function meridiems() {
      var _this3 = this;
      var defaultOK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return listStuff(this, undefined, defaultOK, function () {
        return english_meridiems;
      }, function () {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!_this3.meridiemCache) {
          var intl = {
            hour: "numeric",
            hourCycle: "h12"
          };
          _this3.meridiemCache = [datetime_DateTime.utc(2016, 11, 13, 9), datetime_DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
            return _this3.extract(dt, intl, "dayperiod");
          });
        }
        return _this3.meridiemCache;
      });
    }
  }, {
    key: "eras",
    value: function eras(length) {
      var _this4 = this;
      var defaultOK = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return listStuff(this, length, defaultOK, english_eras, function () {
        var intl = {
          era: length
        };

        // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
        // to definitely enumerate them.
        if (!_this4.eraCache[length]) {
          _this4.eraCache[length] = [datetime_DateTime.utc(-40, 1, 1), datetime_DateTime.utc(2017, 1, 1)].map(function (dt) {
            return _this4.extract(dt, intl, "era");
          });
        }
        return _this4.eraCache[length];
      });
    }
  }, {
    key: "extract",
    value: function extract(dt, intlOpts, field) {
      var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
          return m.type.toLowerCase() === field;
        });
      return matching ? matching.value : null;
    }
  }, {
    key: "numberFormatter",
    value: function numberFormatter() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
      // (in contrast, the rest of the condition is used heavily)
      return new locale_PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    }
  }, {
    key: "dtFormatter",
    value: function dtFormatter(dt) {
      var intlOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new locale_PolyDateFormatter(dt, this.intl, intlOpts);
    }
  }, {
    key: "relFormatter",
    value: function relFormatter() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new locale_PolyRelFormatter(this.intl, this.isEnglish(), opts);
    }
  }, {
    key: "listFormatter",
    value: function listFormatter() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return getCachedLF(this.intl, opts);
    }
  }, {
    key: "isEnglish",
    value: function isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
  }], [{
    key: "fromOpts",
    value: function fromOpts(opts) {
      return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    }
  }, {
    key: "create",
    value: function create(locale, numberingSystem, outputCalendar) {
      var defaultToEN = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var specifiedLocale = locale || settings_Settings.defaultLocale;
      // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
      var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
      var numberingSystemR = numberingSystem || settings_Settings.defaultNumberingSystem;
      var outputCalendarR = outputCalendar || settings_Settings.defaultOutputCalendar;
      return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    }
  }, {
    key: "resetCache",
    value: function resetCache() {
      sysLocaleCache = null;
      intlDTCache = {};
      intlNumCache = {};
      intlRelCache = {};
    }
  }, {
    key: "fromObject",
    value: function fromObject() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;
      return Locale.create(locale, numberingSystem, outputCalendar);
    }
  }]);
  return Locale;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/zones/fixedOffsetZone.js
function fixedOffsetZone_typeof(obj) { "@babel/helpers - typeof"; return fixedOffsetZone_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, fixedOffsetZone_typeof(obj); }
function fixedOffsetZone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function fixedOffsetZone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, fixedOffsetZone_toPropertyKey(descriptor.key), descriptor); } }
function fixedOffsetZone_createClass(Constructor, protoProps, staticProps) { if (protoProps) fixedOffsetZone_defineProperties(Constructor.prototype, protoProps); if (staticProps) fixedOffsetZone_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function fixedOffsetZone_toPropertyKey(arg) { var key = fixedOffsetZone_toPrimitive(arg, "string"); return fixedOffsetZone_typeof(key) === "symbol" ? key : String(key); }
function fixedOffsetZone_toPrimitive(input, hint) { if (fixedOffsetZone_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (fixedOffsetZone_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function fixedOffsetZone_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) fixedOffsetZone_setPrototypeOf(subClass, superClass); }
function fixedOffsetZone_setPrototypeOf(o, p) { fixedOffsetZone_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fixedOffsetZone_setPrototypeOf(o, p); }
function fixedOffsetZone_createSuper(Derived) { var hasNativeReflectConstruct = fixedOffsetZone_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = fixedOffsetZone_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = fixedOffsetZone_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return fixedOffsetZone_possibleConstructorReturn(this, result); }; }
function fixedOffsetZone_possibleConstructorReturn(self, call) { if (call && (fixedOffsetZone_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return fixedOffsetZone_assertThisInitialized(self); }
function fixedOffsetZone_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function fixedOffsetZone_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function fixedOffsetZone_getPrototypeOf(o) { fixedOffsetZone_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fixedOffsetZone_getPrototypeOf(o); }


var fixedOffsetZone_singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
var fixedOffsetZone_FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  fixedOffsetZone_inherits(FixedOffsetZone, _Zone);
  var _super = fixedOffsetZone_createSuper(FixedOffsetZone);
  function FixedOffsetZone(offset) {
    var _this;
    fixedOffsetZone_classCallCheck(this, FixedOffsetZone);
    _this = _super.call(this);
    /** @private **/
    _this.fixed = offset;
    return _this;
  }

  /** @override **/
  fixedOffsetZone_createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC".concat(util_formatOffset(this.fixed, "narrow"));
    }
  }, {
    key: "ianaName",
    get: function get() {
      if (this.fixed === 0) {
        return "Etc/UTC";
      } else {
        return "Etc/GMT".concat(util_formatOffset(-this.fixed, "narrow"));
      }
    }

    /** @override **/
  }, {
    key: "offsetName",
    value: function offsetName() {
      return this.name;
    }

    /** @override **/
  }, {
    key: "formatOffset",
    value: function formatOffset(ts, format) {
      return util_formatOffset(this.fixed, format);
    }

    /** @override **/
  }, {
    key: "isUniversal",
    get: function get() {
      return true;
    }

    /** @override **/
  }, {
    key: "offset",
    value: function offset() {
      return this.fixed;
    }

    /** @override **/
  }, {
    key: "equals",
    value: function equals(otherZone) {
      return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }

    /** @override **/
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "utcInstance",
    get:
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    function get() {
      if (fixedOffsetZone_singleton === null) {
        fixedOffsetZone_singleton = new FixedOffsetZone(0);
      }
      return fixedOffsetZone_singleton;
    }

    /**
     * Get an instance with a specified offset
     * @param {number} offset - The offset in minutes
     * @return {FixedOffsetZone}
     */
  }, {
    key: "instance",
    value: function instance(offset) {
      return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    }

    /**
     * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
     * @param {string} s - The offset string to parse
     * @example FixedOffsetZone.parseSpecifier("UTC+6")
     * @example FixedOffsetZone.parseSpecifier("UTC+06")
     * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
     * @return {FixedOffsetZone}
     */
  }, {
    key: "parseSpecifier",
    value: function parseSpecifier(s) {
      if (s) {
        var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r) {
          return new FixedOffsetZone(signedOffset(r[1], r[2]));
        }
      }
      return null;
    }
  }]);
  return FixedOffsetZone;
}(zone_Zone);

// CONCATENATED MODULE: ../node_modules/luxon/src/zones/invalidZone.js
function invalidZone_typeof(obj) { "@babel/helpers - typeof"; return invalidZone_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, invalidZone_typeof(obj); }
function invalidZone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function invalidZone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, invalidZone_toPropertyKey(descriptor.key), descriptor); } }
function invalidZone_createClass(Constructor, protoProps, staticProps) { if (protoProps) invalidZone_defineProperties(Constructor.prototype, protoProps); if (staticProps) invalidZone_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function invalidZone_toPropertyKey(arg) { var key = invalidZone_toPrimitive(arg, "string"); return invalidZone_typeof(key) === "symbol" ? key : String(key); }
function invalidZone_toPrimitive(input, hint) { if (invalidZone_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (invalidZone_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function invalidZone_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) invalidZone_setPrototypeOf(subClass, superClass); }
function invalidZone_setPrototypeOf(o, p) { invalidZone_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return invalidZone_setPrototypeOf(o, p); }
function invalidZone_createSuper(Derived) { var hasNativeReflectConstruct = invalidZone_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = invalidZone_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = invalidZone_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return invalidZone_possibleConstructorReturn(this, result); }; }
function invalidZone_possibleConstructorReturn(self, call) { if (call && (invalidZone_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return invalidZone_assertThisInitialized(self); }
function invalidZone_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function invalidZone_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function invalidZone_getPrototypeOf(o) { invalidZone_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return invalidZone_getPrototypeOf(o); }


/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
var InvalidZone = /*#__PURE__*/function (_Zone) {
  invalidZone_inherits(InvalidZone, _Zone);
  var _super = invalidZone_createSuper(InvalidZone);
  function InvalidZone(zoneName) {
    var _this;
    invalidZone_classCallCheck(this, InvalidZone);
    _this = _super.call(this);
    /**  @private */
    _this.zoneName = zoneName;
    return _this;
  }

  /** @override **/
  invalidZone_createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }

    /** @override **/
  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }

    /** @override **/
  }, {
    key: "offsetName",
    value: function offsetName() {
      return null;
    }

    /** @override **/
  }, {
    key: "formatOffset",
    value: function formatOffset() {
      return "";
    }

    /** @override **/
  }, {
    key: "offset",
    value: function offset() {
      return NaN;
    }

    /** @override **/
  }, {
    key: "equals",
    value: function equals() {
      return false;
    }

    /** @override **/
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);
  return InvalidZone;
}(zone_Zone);

// CONCATENATED MODULE: ../node_modules/luxon/src/impl/zoneUtil.js
function zoneUtil_typeof(obj) { "@babel/helpers - typeof"; return zoneUtil_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, zoneUtil_typeof(obj); }
/**
 * @private
 */







function zoneUtil_normalizeZone(input, defaultZone) {
  var offset;
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof zone_Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone;else if (lowered === "local" || lowered === "system") return systemZone_SystemZone.instance;else if (lowered === "utc" || lowered === "gmt") return fixedOffsetZone_FixedOffsetZone.utcInstance;else return fixedOffsetZone_FixedOffsetZone.parseSpecifier(lowered) || IANAZone_IANAZone.create(input);
  } else if (isNumber(input)) {
    return fixedOffsetZone_FixedOffsetZone.instance(input);
  } else if (zoneUtil_typeof(input) === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}
// CONCATENATED MODULE: ../node_modules/luxon/src/settings.js
function settings_typeof(obj) { "@babel/helpers - typeof"; return settings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, settings_typeof(obj); }
function settings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function settings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, settings_toPropertyKey(descriptor.key), descriptor); } }
function settings_createClass(Constructor, protoProps, staticProps) { if (protoProps) settings_defineProperties(Constructor.prototype, protoProps); if (staticProps) settings_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function settings_toPropertyKey(arg) { var key = settings_toPrimitive(arg, "string"); return settings_typeof(key) === "symbol" ? key : String(key); }
function settings_toPrimitive(input, hint) { if (settings_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (settings_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var now = function now() {
    return Date.now();
  },
  settings_defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  twoDigitCutoffYear = 60,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
var settings_Settings = /*#__PURE__*/function () {
  function Settings() {
    settings_classCallCheck(this, Settings);
  }
  settings_createClass(Settings, null, [{
    key: "now",
    get:
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    function get() {
      return now;
    }

    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */,
    set: function set(n) {
      now = n;
    }

    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */
  }, {
    key: "defaultZone",
    get:
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    function get() {
      return zoneUtil_normalizeZone(settings_defaultZone, systemZone_SystemZone.instance);
    }

    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(zone) {
      settings_defaultZone = zone;
    }
  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }

    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(locale) {
      defaultLocale = locale;
    }

    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }

    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }

    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }

    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }

    /**
     * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
     * @type {number}
     */
  }, {
    key: "twoDigitCutoffYear",
    get: function get() {
      return twoDigitCutoffYear;
    }

    /**
     * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
     * @type {number}
     * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
     * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
     * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
     * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
     */,
    set: function set(cutoffYear) {
      twoDigitCutoffYear = cutoffYear % 100;
    }

    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }

    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */,
    set: function set(t) {
      throwOnInvalid = t;
    }

    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
  }, {
    key: "resetCaches",
    value: function resetCaches() {
      locale_Locale.resetCache();
      IANAZone_IANAZone.resetCache();
    }
  }]);
  return Settings;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/impl/util.js
function util_typeof(obj) { "@babel/helpers - typeof"; return util_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, util_typeof(obj); }
function util_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function util_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? util_ownKeys(Object(source), !0).forEach(function (key) { util_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : util_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function util_defineProperty(obj, key, value) { key = util_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function util_toPropertyKey(arg) { var key = util_toPrimitive(arg, "string"); return util_typeof(key) === "symbol" ? key : String(key); }
function util_toPrimitive(input, hint) { if (util_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (util_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/




/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce(function (best, next) {
    var pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function util_hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var isNeg = input < 0;
  var padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits) {
  var towardZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var factor = Math.pow(10, digits),
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > settings_Settings.twoDigitCutoffYear ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale) {
  var timeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  var modified = util_objectSpread({
    timeZoneName: offsetFormat
  }, intlOpts);
  var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
    return m.type.toLowerCase() === "timezonename";
  });
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  var offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value ".concat(value));
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  var normalized = {};
  for (var u in obj) {
    if (util_hasOwnProperty(obj, u)) {
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}
function util_formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return "".concat(sign).concat(padStart(hours, 2), ":").concat(padStart(minutes, 2));
    case "narrow":
      return "".concat(sign).concat(hours).concat(minutes > 0 ? ":".concat(minutes) : "");
    case "techie":
      return "".concat(sign).concat(padStart(hours, 2)).concat(padStart(minutes, 2));
    default:
      throw new RangeError("Value format ".concat(format, " is out of range for property format"));
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
// CONCATENATED MODULE: ../node_modules/luxon/src/impl/english.js


function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function english_months(length) {
  switch (length) {
    case "narrow":
      return [].concat(monthsNarrow);
    case "short":
      return [].concat(monthsShort);
    case "long":
      return [].concat(monthsLong);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function english_weekdays(length) {
  switch (length) {
    case "narrow":
      return [].concat(weekdaysNarrow);
    case "short":
      return [].concat(weekdaysShort);
    case "long":
      return [].concat(weekdaysLong);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var english_meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function english_eras(length) {
  switch (length) {
    case "narrow":
      return [].concat(erasNarrow);
    case "short":
      return [].concat(erasShort);
    case "long":
      return [].concat(erasLong);
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return english_meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return english_weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return english_months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return english_eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count) {
  var numeric = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "always";
  var narrow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next ".concat(units[unit][0]);
      case -1:
        return isDay ? "yesterday" : "last ".concat(units[unit][0]);
      case 0:
        return isDay ? "today" : "this ".concat(units[unit][0]);
      default: // fall through
    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? "".concat(fmtValue, " ").concat(fmtUnit, " ago") : "in ".concat(fmtValue, " ").concat(fmtUnit);
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle"]),
    key = stringify(filtered),
    dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";
    case stringify(DATE_MED):
      return "LLL d, yyyy";
    case stringify(DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";
    case stringify(DATE_FULL):
      return "LLLL d, yyyy";
    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";
    case stringify(TIME_SIMPLE):
      return "h:mm a";
    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";
    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";
    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";
    case stringify(TIME_24_SIMPLE):
      return "HH:mm";
    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";
    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";
    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";
    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";
    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";
    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";
    case stringify(DATETIME_HUGE):
      return dateTimeHuge;
    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";
    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";
    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";
    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";
    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return dateTimeHuge;
  }
}
// CONCATENATED MODULE: ../node_modules/luxon/src/impl/formatter.js
function formatter_typeof(obj) { "@babel/helpers - typeof"; return formatter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, formatter_typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || formatter_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return formatter_arrayLikeToArray(arr); }
function formatter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function formatter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? formatter_ownKeys(Object(source), !0).forEach(function (key) { formatter_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : formatter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function formatter_defineProperty(obj, key, value) { key = formatter_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function formatter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function formatter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, formatter_toPropertyKey(descriptor.key), descriptor); } }
function formatter_createClass(Constructor, protoProps, staticProps) { if (protoProps) formatter_defineProperties(Constructor.prototype, protoProps); if (staticProps) formatter_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function formatter_toPropertyKey(arg) { var key = formatter_toPrimitive(arg, "string"); return formatter_typeof(key) === "symbol" ? key : String(key); }
function formatter_toPrimitive(input, hint) { if (formatter_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (formatter_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = formatter_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function formatter_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return formatter_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return formatter_arrayLikeToArray(o, minLen); }
function formatter_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



function stringifyTokens(splits, tokenToString) {
  var s = "";
  var _iterator = _createForOfIteratorHelper(splits),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var token = _step.value;
      if (token.literal) {
        s += token.val;
      } else {
        s += tokenToString(token.val);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return s;
}
var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};

/**
 * @private
 */
var formatter_Formatter = /*#__PURE__*/function () {
  function Formatter(locale, formatOpts) {
    formatter_classCallCheck(this, Formatter);
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatter_createClass(Formatter, [{
    key: "formatWithSystemDefault",
    value: function formatWithSystemDefault(dt, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }
      var df = this.systemLoc.dtFormatter(dt, formatter_objectSpread(formatter_objectSpread({}, this.opts), opts));
      return df.format();
    }
  }, {
    key: "formatDateTime",
    value: function formatDateTime(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var df = this.loc.dtFormatter(dt, formatter_objectSpread(formatter_objectSpread({}, this.opts), opts));
      return df.format();
    }
  }, {
    key: "formatDateTimeParts",
    value: function formatDateTimeParts(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var df = this.loc.dtFormatter(dt, formatter_objectSpread(formatter_objectSpread({}, this.opts), opts));
      return df.formatToParts();
    }
  }, {
    key: "formatInterval",
    value: function formatInterval(interval) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var df = this.loc.dtFormatter(interval.start, formatter_objectSpread(formatter_objectSpread({}, this.opts), opts));
      return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var df = this.loc.dtFormatter(dt, formatter_objectSpread(formatter_objectSpread({}, this.opts), opts));
      return df.resolvedOptions();
    }
  }, {
    key: "num",
    value: function num(n) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // we get some perf out of doing this here, annoyingly
      if (this.opts.forceSimple) {
        return padStart(n, p);
      }
      var opts = formatter_objectSpread({}, this.opts);
      if (p > 0) {
        opts.padTo = p;
      }
      return this.loc.numberFormatter(opts).format(n);
    }
  }, {
    key: "formatDateTimeFromString",
    value: function formatDateTimeFromString(dt, fmt) {
      var _this = this;
      var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
        string = function string(opts, extract) {
          return _this.loc.extract(dt, opts, extract);
        },
        formatOffset = function formatOffset(opts) {
          if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
            return "Z";
          }
          return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        },
        meridiem = function meridiem() {
          return knownEnglish ? meridiemForDateTime(dt) : string({
            hour: "numeric",
            hourCycle: "h12"
          }, "dayperiod");
        },
        month = function month(length, standalone) {
          return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
            month: length
          } : {
            month: length,
            day: "numeric"
          }, "month");
        },
        weekday = function weekday(length, standalone) {
          return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
            weekday: length
          } : {
            weekday: length,
            month: "long",
            day: "numeric"
          }, "weekday");
        },
        maybeMacro = function maybeMacro(token) {
          var formatOpts = Formatter.macroTokenToFormatOpts(token);
          if (formatOpts) {
            return _this.formatWithSystemDefault(dt, formatOpts);
          } else {
            return token;
          }
        },
        era = function era(length) {
          return knownEnglish ? eraForDateTime(dt, length) : string({
            era: length
          }, "era");
        },
        tokenToString = function tokenToString(token) {
          // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
          switch (token) {
            // ms
            case "S":
              return _this.num(dt.millisecond);
            case "u":
            // falls through
            case "SSS":
              return _this.num(dt.millisecond, 3);
            // seconds
            case "s":
              return _this.num(dt.second);
            case "ss":
              return _this.num(dt.second, 2);
            // fractional seconds
            case "uu":
              return _this.num(Math.floor(dt.millisecond / 10), 2);
            case "uuu":
              return _this.num(Math.floor(dt.millisecond / 100));
            // minutes
            case "m":
              return _this.num(dt.minute);
            case "mm":
              return _this.num(dt.minute, 2);
            // hours
            case "h":
              return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
            case "hh":
              return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
            case "H":
              return _this.num(dt.hour);
            case "HH":
              return _this.num(dt.hour, 2);
            // offset
            case "Z":
              // like +6
              return formatOffset({
                format: "narrow",
                allowZ: _this.opts.allowZ
              });
            case "ZZ":
              // like +06:00
              return formatOffset({
                format: "short",
                allowZ: _this.opts.allowZ
              });
            case "ZZZ":
              // like +0600
              return formatOffset({
                format: "techie",
                allowZ: _this.opts.allowZ
              });
            case "ZZZZ":
              // like EST
              return dt.zone.offsetName(dt.ts, {
                format: "short",
                locale: _this.loc.locale
              });
            case "ZZZZZ":
              // like Eastern Standard Time
              return dt.zone.offsetName(dt.ts, {
                format: "long",
                locale: _this.loc.locale
              });
            // zone
            case "z":
              // like America/New_York
              return dt.zoneName;
            // meridiems
            case "a":
              return meridiem();
            // dates
            case "d":
              return useDateTimeFormatter ? string({
                day: "numeric"
              }, "day") : _this.num(dt.day);
            case "dd":
              return useDateTimeFormatter ? string({
                day: "2-digit"
              }, "day") : _this.num(dt.day, 2);
            // weekdays - standalone
            case "c":
              // like 1
              return _this.num(dt.weekday);
            case "ccc":
              // like 'Tues'
              return weekday("short", true);
            case "cccc":
              // like 'Tuesday'
              return weekday("long", true);
            case "ccccc":
              // like 'T'
              return weekday("narrow", true);
            // weekdays - format
            case "E":
              // like 1
              return _this.num(dt.weekday);
            case "EEE":
              // like 'Tues'
              return weekday("short", false);
            case "EEEE":
              // like 'Tuesday'
              return weekday("long", false);
            case "EEEEE":
              // like 'T'
              return weekday("narrow", false);
            // months - standalone
            case "L":
              // like 1
              return useDateTimeFormatter ? string({
                month: "numeric",
                day: "numeric"
              }, "month") : _this.num(dt.month);
            case "LL":
              // like 01, doesn't seem to work
              return useDateTimeFormatter ? string({
                month: "2-digit",
                day: "numeric"
              }, "month") : _this.num(dt.month, 2);
            case "LLL":
              // like Jan
              return month("short", true);
            case "LLLL":
              // like January
              return month("long", true);
            case "LLLLL":
              // like J
              return month("narrow", true);
            // months - format
            case "M":
              // like 1
              return useDateTimeFormatter ? string({
                month: "numeric"
              }, "month") : _this.num(dt.month);
            case "MM":
              // like 01
              return useDateTimeFormatter ? string({
                month: "2-digit"
              }, "month") : _this.num(dt.month, 2);
            case "MMM":
              // like Jan
              return month("short", false);
            case "MMMM":
              // like January
              return month("long", false);
            case "MMMMM":
              // like J
              return month("narrow", false);
            // years
            case "y":
              // like 2014
              return useDateTimeFormatter ? string({
                year: "numeric"
              }, "year") : _this.num(dt.year);
            case "yy":
              // like 14
              return useDateTimeFormatter ? string({
                year: "2-digit"
              }, "year") : _this.num(dt.year.toString().slice(-2), 2);
            case "yyyy":
              // like 0012
              return useDateTimeFormatter ? string({
                year: "numeric"
              }, "year") : _this.num(dt.year, 4);
            case "yyyyyy":
              // like 000012
              return useDateTimeFormatter ? string({
                year: "numeric"
              }, "year") : _this.num(dt.year, 6);
            // eras
            case "G":
              // like AD
              return era("short");
            case "GG":
              // like Anno Domini
              return era("long");
            case "GGGGG":
              return era("narrow");
            case "kk":
              return _this.num(dt.weekYear.toString().slice(-2), 2);
            case "kkkk":
              return _this.num(dt.weekYear, 4);
            case "W":
              return _this.num(dt.weekNumber);
            case "WW":
              return _this.num(dt.weekNumber, 2);
            case "o":
              return _this.num(dt.ordinal);
            case "ooo":
              return _this.num(dt.ordinal, 3);
            case "q":
              // like 1
              return _this.num(dt.quarter);
            case "qq":
              // like 01
              return _this.num(dt.quarter, 2);
            case "X":
              return _this.num(Math.floor(dt.ts / 1000));
            case "x":
              return _this.num(dt.ts);
            default:
              return maybeMacro(token);
          }
        };
      return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    }
  }, {
    key: "formatDurationFromString",
    value: function formatDurationFromString(dur, fmt) {
      var _this2 = this;
      var tokenToField = function tokenToField(token) {
          switch (token[0]) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
              return "hour";
            case "d":
              return "day";
            case "w":
              return "week";
            case "M":
              return "month";
            case "y":
              return "year";
            default:
              return null;
          }
        },
        tokenToString = function tokenToString(lildur) {
          return function (token) {
            var mapped = tokenToField(token);
            if (mapped) {
              return _this2.num(lildur.get(mapped), token.length);
            } else {
              return token;
            }
          };
        },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
          var literal = _ref.literal,
            val = _ref.val;
          return literal ? found : found.concat(val);
        }, []),
        collapsed = dur.shiftTo.apply(dur, _toConsumableArray(realTokens.map(tokenToField).filter(function (t) {
          return t;
        })));
      return stringifyTokens(tokens, tokenToString(collapsed));
    }
  }], [{
    key: "create",
    value: function create(locale) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Formatter(locale, opts);
    }
  }, {
    key: "parseFormat",
    value: function parseFormat(fmt) {
      var current = null,
        currentFull = "",
        bracketed = false;
      var splits = [];
      for (var i = 0; i < fmt.length; i++) {
        var c = fmt.charAt(i);
        if (c === "'") {
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }
          current = null;
          currentFull = "";
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({
              literal: false,
              val: currentFull
            });
          }
          currentFull = c;
          current = c;
        }
      }
      if (currentFull.length > 0) {
        splits.push({
          literal: bracketed,
          val: currentFull
        });
      }
      return splits;
    }
  }, {
    key: "macroTokenToFormatOpts",
    value: function macroTokenToFormatOpts(token) {
      return _macroTokenToFormatOpts[token];
    }
  }]);
  return Formatter;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/impl/invalid.js
function invalid_typeof(obj) { "@babel/helpers - typeof"; return invalid_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, invalid_typeof(obj); }
function invalid_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function invalid_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, invalid_toPropertyKey(descriptor.key), descriptor); } }
function invalid_createClass(Constructor, protoProps, staticProps) { if (protoProps) invalid_defineProperties(Constructor.prototype, protoProps); if (staticProps) invalid_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function invalid_toPropertyKey(arg) { var key = invalid_toPrimitive(arg, "string"); return invalid_typeof(key) === "symbol" ? key : String(key); }
function invalid_toPrimitive(input, hint) { if (invalid_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (invalid_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    invalid_classCallCheck(this, Invalid);
    this.reason = reason;
    this.explanation = explanation;
  }
  invalid_createClass(Invalid, [{
    key: "toMessage",
    value: function toMessage() {
      if (this.explanation) {
        return "".concat(this.reason, ": ").concat(this.explanation);
      } else {
        return this.reason;
      }
    }
  }]);
  return Invalid;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/impl/regexParser.js
function regexParser_typeof(obj) { "@babel/helpers - typeof"; return regexParser_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, regexParser_typeof(obj); }
function regexParser_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function regexParser_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? regexParser_ownKeys(Object(source), !0).forEach(function (key) { regexParser_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : regexParser_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function regexParser_defineProperty(obj, key, value) { key = regexParser_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function regexParser_toPropertyKey(arg) { var key = regexParser_toPrimitive(arg, "string"); return regexParser_typeof(key) === "symbol" ? key : String(key); }
function regexParser_toPrimitive(input, hint) { if (regexParser_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (regexParser_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function regexParser_slicedToArray(arr, i) { return regexParser_arrayWithHoles(arr) || regexParser_iterableToArrayLimit(arr, i) || regexParser_unsupportedIterableToArray(arr, i) || regexParser_nonIterableRest(); }
function regexParser_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function regexParser_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return regexParser_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return regexParser_arrayLikeToArray(o, minLen); }
function regexParser_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function regexParser_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function regexParser_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }
  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^".concat(full, "$"));
}
function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }
  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var _ref2 = regexParser_slicedToArray(_ref, 3),
        mergedVals = _ref2[0],
        mergedZone = _ref2[1],
        cursor = _ref2[2];
      var _ex = ex(m, cursor),
        _ex2 = regexParser_slicedToArray(_ex, 3),
        val = _ex2[0],
        zone = _ex2[1],
        next = _ex2[2];
      return [regexParser_objectSpread(regexParser_objectSpread({}, mergedVals), val), zone || mergedZone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}
function parse(s) {
  if (s == null) {
    return [null, null];
  }
  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }
  for (var _i2 = 0, _patterns = patterns; _i2 < _patterns.length; _i2++) {
    var _patterns$_i = regexParser_slicedToArray(_patterns[_i2], 2),
      regex = _patterns$_i[0],
      extractor = _patterns$_i[1];
    var m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }
  return function (match, cursor) {
    var ret = {};
    var i;
    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoExtendedZone = "(?:".concat(offsetRegex.source, "?(?:\\[(").concat(ianaRegex.source, ")\\])?)?");
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp("".concat(isoTimeBaseRegex.source).concat(isoExtendedZone));
var isoTimeExtensionRegex = RegExp("(?:T".concat(isoTimeRegex.source, ")?"));
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
var sqlTimeRegex = RegExp("".concat(isoTimeBaseRegex.source, " ?(?:").concat(offsetRegex.source, "|(").concat(ianaRegex.source, "))?"));
var sqlTimeExtensionRegex = RegExp("(?: ".concat(sqlTimeRegex.source, ")?"));
function regexParser_int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match, cursor) {
  var item = {
    year: regexParser_int(match, cursor),
    month: regexParser_int(match, cursor + 1, 1),
    day: regexParser_int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match, cursor) {
  var item = {
    hours: regexParser_int(match, cursor, 0),
    minutes: regexParser_int(match, cursor + 1, 0),
    seconds: regexParser_int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
    fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : fixedOffsetZone_FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone_IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

var isoTimeOnly = RegExp("^T?".concat(isoTimeBaseRegex.source, "$"));

// ISO duration parsing

var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match) {
  var _match = regexParser_slicedToArray(match, 9),
    s = _match[0],
    yearStr = _match[1],
    monthStr = _match[2],
    weekStr = _match[3],
    dayStr = _match[4],
    hourStr = _match[5],
    minuteStr = _match[6],
    secondStr = _match[7],
    millisecondsStr = _match[8];
  var hasNegativePrefix = s[0] === "-";
  var negativeSeconds = secondStr && secondStr[0] === "-";
  var maybeNegate = function maybeNegate(num) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
  };
  return [{
    years: maybeNegate(parseFloating(yearStr)),
    months: maybeNegate(parseFloating(monthStr)),
    weeks: maybeNegate(parseFloating(weekStr)),
    days: maybeNegate(parseFloating(dayStr)),
    hours: maybeNegate(parseFloating(hourStr)),
    minutes: maybeNegate(parseFloating(minuteStr)),
    seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
    milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
  }];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}

// RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match) {
  var _match2 = regexParser_slicedToArray(match, 12),
    weekdayStr = _match2[1],
    dayStr = _match2[2],
    monthStr = _match2[3],
    yearStr = _match2[4],
    hourStr = _match2[5],
    minuteStr = _match2[6],
    secondStr = _match2[7],
    obsOffset = _match2[8],
    milOffset = _match2[9],
    offHourStr = _match2[10],
    offMinuteStr = _match2[11],
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new fixedOffsetZone_FixedOffsetZone(offset)];
}
function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}

// http date

var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match) {
  var _match3 = regexParser_slicedToArray(match, 8),
    weekdayStr = _match3[1],
    dayStr = _match3[2],
    monthStr = _match3[3],
    yearStr = _match3[4],
    hourStr = _match3[5],
    minuteStr = _match3[6],
    secondStr = _match3[7],
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, fixedOffsetZone_FixedOffsetZone.utcInstance];
}
function extractASCII(match) {
  var _match4 = regexParser_slicedToArray(match, 8),
    weekdayStr = _match4[1],
    monthStr = _match4[2],
    dayStr = _match4[3],
    hourStr = _match4[4],
    minuteStr = _match4[5],
    secondStr = _match4[6],
    yearStr = _match4[7],
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, fixedOffsetZone_FixedOffsetZone.utcInstance];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);

/*
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}
// CONCATENATED MODULE: ../node_modules/luxon/src/duration.js
function duration_typeof(obj) { "@babel/helpers - typeof"; return duration_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, duration_typeof(obj); }
function duration_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function duration_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, duration_toPropertyKey(descriptor.key), descriptor); } }
function duration_createClass(Constructor, protoProps, staticProps) { if (protoProps) duration_defineProperties(Constructor.prototype, protoProps); if (staticProps) duration_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function duration_slicedToArray(arr, i) { return duration_arrayWithHoles(arr) || duration_iterableToArrayLimit(arr, i) || duration_unsupportedIterableToArray(arr, i) || duration_nonIterableRest(); }
function duration_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function duration_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return duration_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return duration_arrayLikeToArray(o, minLen); }
function duration_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function duration_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function duration_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function duration_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function duration_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? duration_ownKeys(Object(source), !0).forEach(function (key) { duration_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : duration_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function duration_defineProperty(obj, key, value) { key = duration_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function duration_toPropertyKey(arg) { var key = duration_toPrimitive(arg, "string"); return duration_typeof(key) === "symbol" ? key : String(key); }
function duration_toPrimitive(input, hint) { if (duration_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (duration_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var INVALID = "Invalid Duration";

// unit conversion constants
var lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000
    },
    hours: {
      minutes: 60,
      seconds: 60 * 60,
      milliseconds: 60 * 60 * 1000
    },
    minutes: {
      seconds: 60,
      milliseconds: 60 * 1000
    },
    seconds: {
      milliseconds: 1000
    }
  },
  casualMatrix = duration_objectSpread({
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000
    }
  }, lowOrderMatrix),
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = duration_objectSpread({
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: daysInYearAccurate * 24 / 4,
      minutes: daysInYearAccurate * 24 * 60 / 4,
      seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
    }
  }, lowOrderMatrix);

// units ordered by size
var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts) {
  var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // deep merge for vals
  var conf = {
    values: clear ? alts.values : duration_objectSpread(duration_objectSpread({}, dur.values), alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix
  };
  return new duration_Duration(conf);
}
function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
  var newVals = {};
  for (var _i = 0, _Object$entries = Object.entries(vals); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = duration_slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
var duration_Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    duration_classCallCheck(this, Duration);
    var accurate = config.conversionAccuracy === "longterm" || false;
    var matrix = accurate ? accurateMatrix : casualMatrix;
    if (config.matrix) {
      matrix = config.matrix;
    }

    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || locale_Locale.create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = matrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  duration_createClass(Duration, [{
    key: "locale",
    get:
    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @type {string}
     */
    function get() {
      return this.isValid ? this.loc.locale : null;
    }

    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }

    /**
     * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `w` for weeks
     * * `M` for months
     * * `y` for years
     * Notes:
     * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
     * * Tokens can be escaped by wrapping with single quotes.
     * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
     * @param {string} fmt - the format string
     * @param {Object} opts - options
     * @param {boolean} [opts.floor=true] - floor numerical values
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     * @return {string}
     */
  }, {
    key: "toFormat",
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // reverse-compat since 1.2; we always round down now, never up, and we do it by default
      var fmtOpts = duration_objectSpread(duration_objectSpread({}, opts), {}, {
        floor: opts.round !== false && opts.floor !== false
      });
      return this.isValid ? formatter_Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
    }

    /**
     * Returns a string representation of a Duration with all units included.
     * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
     * @example
     * ```js
     * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
     * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
     * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
     * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
     * ```
     */
  }, {
    key: "toHuman",
    value: function toHuman() {
      var _this = this;
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var l = orderedUnits.map(function (unit) {
        var val = _this.values[unit];
        if (isUndefined(val)) {
          return null;
        }
        return _this.loc.numberFormatter(duration_objectSpread(duration_objectSpread({
          style: "unit",
          unitDisplay: "long"
        }, opts), {}, {
          unit: unit.slice(0, -1)
        })).format(val);
      }).filter(function (n) {
        return n;
      });
      return this.loc.listFormatter(duration_objectSpread({
        type: "conjunction",
        style: opts.listStyle || "narrow"
      }, opts)).format(l);
    }

    /**
     * Returns a JavaScript object with this Duration's values.
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {Object}
     */
  }, {
    key: "toObject",
    value: function toObject() {
      if (!this.isValid) return {};
      return duration_objectSpread({}, this.values);
    }

    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     * @return {string}
     */
  }, {
    key: "toISO",
    value: function toISO() {
      // we could use the formatter, but this is an easier way to get the minimum string
      if (!this.isValid) return null;
      var s = "P";
      if (this.years !== 0) s += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
      if (this.weeks !== 0) s += this.weeks + "W";
      if (this.days !== 0) s += this.days + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
      if (this.hours !== 0) s += this.hours + "H";
      if (this.minutes !== 0) s += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0)
        // this will handle "floating point madness" by removing extra decimal places
        // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
      if (s === "P") s += "T0S";
      return s;
    }

    /**
     * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
     * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
     * @return {string}
     */
  }, {
    key: "toISOTime",
    value: function toISOTime() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return null;
      var millis = this.toMillis();
      if (millis < 0 || millis >= 86400000) return null;
      opts = duration_objectSpread({
        suppressMilliseconds: false,
        suppressSeconds: false,
        includePrefix: false,
        format: "extended"
      }, opts);
      var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
      var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
      if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
        fmt += opts.format === "basic" ? "ss" : ":ss";
        if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
          fmt += ".SSS";
        }
      }
      var str = value.toFormat(fmt);
      if (opts.includePrefix) {
        str = "T" + str;
      }
      return str;
    }

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toISO();
    }

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      return this.toISO();
    }

    /**
     * Returns an milliseconds value of this Duration.
     * @return {number}
     */
  }, {
    key: "toMillis",
    value: function toMillis() {
      return this.as("milliseconds");
    }

    /**
     * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
     * @return {number}
     */
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toMillis();
    }

    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
  }, {
    key: "plus",
    value: function plus(duration) {
      if (!this.isValid) return this;
      var dur = Duration.fromDurationLike(duration),
        result = {};
      for (var _i2 = 0, _orderedUnits = orderedUnits; _i2 < _orderedUnits.length; _i2++) {
        var k = _orderedUnits[_i2];
        if (util_hasOwnProperty(dur.values, k) || util_hasOwnProperty(this.values, k)) {
          result[k] = dur.get(k) + this.get(k);
        }
      }
      return clone(this, {
        values: result
      }, true);
    }

    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
  }, {
    key: "minus",
    value: function minus(duration) {
      if (!this.isValid) return this;
      var dur = Duration.fromDurationLike(duration);
      return this.plus(dur.negate());
    }

    /**
     * Scale this Duration by the specified amount. Return a newly-constructed Duration.
     * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
     * @return {Duration}
     */
  }, {
    key: "mapUnits",
    value: function mapUnits(fn) {
      if (!this.isValid) return this;
      var result = {};
      for (var _i3 = 0, _Object$keys = Object.keys(this.values); _i3 < _Object$keys.length; _i3++) {
        var k = _Object$keys[_i3];
        result[k] = asNumber(fn(this.values[k], k));
      }
      return clone(this, {
        values: result
      }, true);
    }

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
     * @return {number}
     */
  }, {
    key: "get",
    value: function get(unit) {
      return this[Duration.normalizeUnit(unit)];
    }

    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {Object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */
  }, {
    key: "set",
    value: function set(values) {
      if (!this.isValid) return this;
      var mixed = duration_objectSpread(duration_objectSpread({}, this.values), normalizeObject(values, Duration.normalizeUnit));
      return clone(this, {
        values: mixed
      });
    }

    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */
  }, {
    key: "reconfigure",
    value: function reconfigure() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy,
        matrix = _ref.matrix;
      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem
      });
      var opts = {
        loc: loc,
        matrix: matrix,
        conversionAccuracy: conversionAccuracy
      };
      return clone(this, opts);
    }

    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */
  }, {
    key: "as",
    value: function as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }

    /**
     * Reduce this Duration to its canonical representation in its current units.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @return {Duration}
     */
  }, {
    key: "normalize",
    value: function normalize() {
      if (!this.isValid) return this;
      var vals = this.toObject();
      normalizeValues(this.matrix, vals);
      return clone(this, {
        values: vals
      }, true);
    }

    /**
     * Rescale units to its largest representation
     * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
     * @return {Duration}
     */
  }, {
    key: "rescale",
    value: function rescale() {
      if (!this.isValid) return this;
      var vals = removeZeroes(this.normalize().shiftToAll().toObject());
      return clone(this, {
        values: vals
      }, true);
    }

    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */
  }, {
    key: "shiftTo",
    value: function shiftTo() {
      for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
        units[_key] = arguments[_key];
      }
      if (!this.isValid) return this;
      if (units.length === 0) {
        return this;
      }
      units = units.map(function (u) {
        return Duration.normalizeUnit(u);
      });
      var built = {},
        accumulated = {},
        vals = this.toObject();
      var lastUnit;
      for (var _i4 = 0, _orderedUnits2 = orderedUnits; _i4 < _orderedUnits2.length; _i4++) {
        var k = _orderedUnits2[_i4];
        if (units.indexOf(k) >= 0) {
          lastUnit = k;
          var own = 0;

          // anything we haven't boiled down yet should get boiled to this unit
          for (var ak in accumulated) {
            own += this.matrix[ak][k] * accumulated[ak];
            accumulated[ak] = 0;
          }

          // plus anything that's already in this unit
          if (isNumber(vals[k])) {
            own += vals[k];
          }
          var i = Math.trunc(own);
          built[k] = i;
          accumulated[k] = (own * 1000 - i * 1000) / 1000;

          // plus anything further down the chain that should be rolled up in to this
          for (var down in vals) {
            if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
              convert(this.matrix, vals, down, built, k);
            }
          }
          // otherwise, keep it in the wings to boil it later
        } else if (isNumber(vals[k])) {
          accumulated[k] = vals[k];
        }
      }

      // anything leftover becomes the decimal for the last unit
      // lastUnit must be defined since units is not empty
      for (var key in accumulated) {
        if (accumulated[key] !== 0) {
          built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        }
      }
      return clone(this, {
        values: built
      }, true).normalize();
    }

    /**
     * Shift this Duration to all available units.
     * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
     * @return {Duration}
     */
  }, {
    key: "shiftToAll",
    value: function shiftToAll() {
      if (!this.isValid) return this;
      return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
    }

    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */
  }, {
    key: "negate",
    value: function negate() {
      if (!this.isValid) return this;
      var negated = {};
      for (var _i5 = 0, _Object$keys2 = Object.keys(this.values); _i5 < _Object$keys2.length; _i5++) {
        var k = _Object$keys2[_i5];
        negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
      }
      return clone(this, {
        values: negated
      }, true);
    }

    /**
     * Get the years.
     * @type {number}
     */
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }

    /**
     * Get the quarters.
     * @type {number}
     */
  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }

    /**
     * Get the months.
     * @type {number}
     */
  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }

    /**
     * Get the weeks
     * @type {number}
     */
  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }

    /**
     * Get the days.
     * @type {number}
     */
  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }

    /**
     * Get the hours.
     * @type {number}
     */
  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }

    /**
     * Get the minutes.
     * @type {number}
     */
  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }

    /**
     * Get the seconds.
     * @return {number}
     */
  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }

    /**
     * Get the milliseconds.
     * @return {number}
     */
  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }

    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }

    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }

    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }

    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
  }, {
    key: "equals",
    value: function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      if (!this.loc.equals(other.loc)) {
        return false;
      }
      function eq(v1, v2) {
        // Consider 0 and undefined as equal
        if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
        return v1 === v2;
      }
      for (var _i6 = 0, _orderedUnits3 = orderedUnits; _i6 < _orderedUnits3.length; _i6++) {
        var u = _orderedUnits3[_i6];
        if (!eq(this.values[u], other.values[u])) {
          return false;
        }
      }
      return true;
    }
  }], [{
    key: "fromMillis",
    value: function fromMillis(count, opts) {
      return Duration.fromObject({
        milliseconds: count
      }, opts);
    }

    /**
     * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
     * If this object is empty then a zero milliseconds duration is returned.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.quarters
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {Object} [opts=[]] - options for creating this Duration
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the custom conversion system to use
     * @return {Duration}
     */
  }, {
    key: "fromObject",
    value: function fromObject(obj) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (obj == null || duration_typeof(obj) !== "object") {
        throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got ".concat(obj === null ? "null" : duration_typeof(obj)));
      }
      return new Duration({
        values: normalizeObject(obj, Duration.normalizeUnit),
        loc: locale_Locale.fromObject(opts),
        conversionAccuracy: opts.conversionAccuracy,
        matrix: opts.matrix
      });
    }

    /**
     * Create a Duration from DurationLike.
     *
     * @param {Object | number | Duration} durationLike
     * One of:
     * - object with keys like 'years' and 'hours'.
     * - number representing milliseconds
     * - Duration instance
     * @return {Duration}
     */
  }, {
    key: "fromDurationLike",
    value: function fromDurationLike(durationLike) {
      if (isNumber(durationLike)) {
        return Duration.fromMillis(durationLike);
      } else if (Duration.isDuration(durationLike)) {
        return durationLike;
      } else if (duration_typeof(durationLike) === "object") {
        return Duration.fromObject(durationLike);
      } else {
        throw new InvalidArgumentError("Unknown duration argument ".concat(durationLike, " of type ").concat(duration_typeof(durationLike)));
      }
    }

    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the preset conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */
  }, {
    key: "fromISO",
    value: function fromISO(text, opts) {
      var _parseISODuration = parseISODuration(text),
        _parseISODuration2 = duration_slicedToArray(_parseISODuration, 1),
        parsed = _parseISODuration2[0];
      if (parsed) {
        return Duration.fromObject(parsed, opts);
      } else {
        return Duration.invalid("unparsable", "the input \"".concat(text, "\" can't be parsed as ISO 8601"));
      }
    }

    /**
     * Create a Duration from an ISO 8601 time string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
     * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @return {Duration}
     */
  }, {
    key: "fromISOTime",
    value: function fromISOTime(text, opts) {
      var _parseISOTimeOnly = parseISOTimeOnly(text),
        _parseISOTimeOnly2 = duration_slicedToArray(_parseISOTimeOnly, 1),
        parsed = _parseISOTimeOnly2[0];
      if (parsed) {
        return Duration.fromObject(parsed, opts);
      } else {
        return Duration.invalid("unparsable", "the input \"".concat(text, "\" can't be parsed as ISO 8601"));
      }
    }

    /**
     * Create an invalid Duration.
     * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Duration}
     */
  }, {
    key: "invalid",
    value: function invalid(reason) {
      var explanation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
      }
      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (settings_Settings.throwOnInvalid) {
        throw new InvalidDurationError(invalid);
      } else {
        return new Duration({
          invalid: invalid
        });
      }
    }

    /**
     * @private
     */
  }, {
    key: "normalizeUnit",
    value: function normalizeUnit(unit) {
      var normalized = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[unit ? unit.toLowerCase() : unit];
      if (!normalized) throw new InvalidUnitError(unit);
      return normalized;
    }

    /**
     * Check if an object is a Duration. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
  }, {
    key: "isDuration",
    value: function isDuration(o) {
      return o && o.isLuxonDuration || false;
    }
  }]);
  return Duration;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/interval.js
function interval_typeof(obj) { "@babel/helpers - typeof"; return interval_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, interval_typeof(obj); }
function interval_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = interval_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function interval_toConsumableArray(arr) { return interval_arrayWithoutHoles(arr) || interval_iterableToArray(arr) || interval_unsupportedIterableToArray(arr) || interval_nonIterableSpread(); }
function interval_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function interval_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function interval_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return interval_arrayLikeToArray(arr); }
function interval_slicedToArray(arr, i) { return interval_arrayWithHoles(arr) || interval_iterableToArrayLimit(arr, i) || interval_unsupportedIterableToArray(arr, i) || interval_nonIterableRest(); }
function interval_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function interval_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return interval_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return interval_arrayLikeToArray(o, minLen); }
function interval_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function interval_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function interval_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function interval_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function interval_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, interval_toPropertyKey(descriptor.key), descriptor); } }
function interval_createClass(Constructor, protoProps, staticProps) { if (protoProps) interval_defineProperties(Constructor.prototype, protoProps); if (staticProps) interval_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function interval_toPropertyKey(arg) { var key = interval_toPrimitive(arg, "string"); return interval_typeof(key) === "symbol" ? key : String(key); }
function interval_toPrimitive(input, hint) { if (interval_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (interval_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var interval_INVALID = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return interval_Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return interval_Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return interval_Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=".concat(start.toISO(), " and end=").concat(end.toISO()));
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
var interval_Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    interval_classCallCheck(this, Interval);
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  interval_createClass(Interval, [{
    key: "start",
    get:
    /**
     * Returns the start of the Interval
     * @type {DateTime}
     */
    function get() {
      return this.isValid ? this.s : null;
    }

    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */
  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }

    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }

    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }

    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }

    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
  }, {
    key: "length",
    value: function length() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
    }

    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @return {number}
     */
  }, {
    key: "count",
    value: function count() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      if (!this.isValid) return NaN;
      var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
      return Math.floor(end.diff(start, unit).get(unit)) + 1;
    }

    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */
  }, {
    key: "hasSame",
    value: function hasSame(unit) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    }

    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }

    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
  }, {
    key: "isAfter",
    value: function isAfter(dateTime) {
      if (!this.isValid) return false;
      return this.s > dateTime;
    }

    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
  }, {
    key: "isBefore",
    value: function isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e <= dateTime;
    }

    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
  }, {
    key: "contains",
    value: function contains(dateTime) {
      if (!this.isValid) return false;
      return this.s <= dateTime && this.e > dateTime;
    }

    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {Object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */
  }, {
    key: "set",
    value: function set() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        start = _ref.start,
        end = _ref.end;
      if (!this.isValid) return this;
      return Interval.fromDateTimes(start || this.s, end || this.e);
    }

    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTime} dateTimes - the unit of time to count.
     * @return {Array}
     */
  }, {
    key: "splitAt",
    value: function splitAt() {
      var _this = this;
      if (!this.isValid) return [];
      for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }
      var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
          return _this.contains(d);
        }).sort(),
        results = [];
      var s = this.s,
        i = 0;
      while (s < this.e) {
        var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        i += 1;
      }
      return results;
    }

    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|Object|number} duration - The length of each resulting interval.
     * @return {Array}
     */
  }, {
    key: "splitBy",
    value: function splitBy(duration) {
      var dur = duration_Duration.fromDurationLike(duration);
      if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
        return [];
      }
      var s = this.s,
        idx = 1,
        next;
      var results = [];
      while (s < this.e) {
        var added = this.start.plus(dur.mapUnits(function (x) {
          return x * idx;
        }));
        next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        idx += 1;
      }
      return results;
    }

    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {Array}
     */
  }, {
    key: "divideEqually",
    value: function divideEqually(numberOfParts) {
      if (!this.isValid) return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }

    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */
  }, {
    key: "overlaps",
    value: function overlaps(other) {
      return this.e > other.s && this.s < other.e;
    }

    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */
  }, {
    key: "abutsStart",
    value: function abutsStart(other) {
      if (!this.isValid) return false;
      return +this.e === +other.s;
    }

    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */
  }, {
    key: "abutsEnd",
    value: function abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    }

    /**
     * Return whether this Interval engulfs the start and end of the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
  }, {
    key: "engulfs",
    value: function engulfs(other) {
      if (!this.isValid) return false;
      return this.s <= other.s && this.e >= other.e;
    }

    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
  }, {
    key: "equals",
    value: function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      return this.s.equals(other.s) && this.e.equals(other.e);
    }

    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, meaning, the intervals don't intersect.
     * @param {Interval} other
     * @return {Interval}
     */
  }, {
    key: "intersection",
    value: function intersection(other) {
      if (!this.isValid) return this;
      var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;
      if (s >= e) {
        return null;
      } else {
        return Interval.fromDateTimes(s, e);
      }
    }

    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */
  }, {
    key: "union",
    value: function union(other) {
      if (!this.isValid) return this;
      var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
      return Interval.fromDateTimes(s, e);
    }

    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
  }, {
    key: "difference",
    value:
    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {Array}
     */
    function difference() {
      var _this2 = this;
      for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        intervals[_key2] = arguments[_key2];
      }
      return Interval.xor([this].concat(intervals)).map(function (i) {
        return _this2.intersection(i);
      }).filter(function (i) {
        return i && !i.isEmpty();
      });
    }

    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      if (!this.isValid) return interval_INVALID;
      return "[".concat(this.s.toISO(), " \u2013 ").concat(this.e.toISO(), ")");
    }

    /**
     * Returns a localized string representing this Interval. Accepts the same options as the
     * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
     * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
     * is browser-specific, but in general it will return an appropriate representation of the
     * Interval in the assigned locale. Defaults to the system's locale if no locale has been
     * specified.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
     * Intl.DateTimeFormat constructor options.
     * @param {Object} opts - Options to override the configuration of the start DateTime.
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
     * @return {string}
     */
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var formatOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATE_SHORT;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.isValid ? formatter_Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : interval_INVALID;
    }

    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
  }, {
    key: "toISO",
    value: function toISO(opts) {
      if (!this.isValid) return interval_INVALID;
      return "".concat(this.s.toISO(opts), "/").concat(this.e.toISO(opts));
    }

    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {string}
     */
  }, {
    key: "toISODate",
    value: function toISODate() {
      if (!this.isValid) return interval_INVALID;
      return "".concat(this.s.toISODate(), "/").concat(this.e.toISODate());
    }

    /**
     * Returns an ISO 8601-compliant string representation of time of this Interval.
     * The date components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
  }, {
    key: "toISOTime",
    value: function toISOTime(opts) {
      if (!this.isValid) return interval_INVALID;
      return "".concat(this.s.toISOTime(opts), "/").concat(this.e.toISOTime(opts));
    }

    /**
     * Returns a string representation of this Interval formatted according to the specified format
     * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
     * formatting tool.
     * @param {string} dateFormat - The format string. This string formats the start and end time.
     * See {@link DateTime#toFormat} for details.
     * @param {Object} opts - Options.
     * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
     * representations.
     * @return {string}
     */
  }, {
    key: "toFormat",
    value: function toFormat(dateFormat) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$separator = _ref2.separator,
        separator = _ref2$separator === void 0 ? " – " : _ref2$separator;
      if (!this.isValid) return interval_INVALID;
      return "".concat(this.s.toFormat(dateFormat)).concat(separator).concat(this.e.toFormat(dateFormat));
    }

    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */
  }, {
    key: "toDuration",
    value: function toDuration(unit, opts) {
      if (!this.isValid) {
        return duration_Duration.invalid(this.invalidReason);
      }
      return this.e.diff(this.s, unit, opts);
    }

    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @param {function} mapFn
     * @return {Interval}
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */
  }, {
    key: "mapEndpoints",
    value: function mapEndpoints(mapFn) {
      return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    }
  }], [{
    key: "invalid",
    value: function invalid(reason) {
      var explanation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
      }
      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (settings_Settings.throwOnInvalid) {
        throw new InvalidIntervalError(invalid);
      } else {
        return new Interval({
          invalid: invalid
        });
      }
    }

    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|Date|Object} start
     * @param {DateTime|Date|Object} end
     * @return {Interval}
     */
  }, {
    key: "fromDateTimes",
    value: function fromDateTimes(start, end) {
      var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
      var validateError = validateStartEnd(builtStart, builtEnd);
      if (validateError == null) {
        return new Interval({
          start: builtStart,
          end: builtEnd
        });
      } else {
        return validateError;
      }
    }

    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|Date|Object} start
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
  }, {
    key: "after",
    value: function after(start, duration) {
      var dur = duration_Duration.fromDurationLike(duration),
        dt = friendlyDateTime(start);
      return Interval.fromDateTimes(dt, dt.plus(dur));
    }

    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
  }, {
    key: "before",
    value: function before(end, duration) {
      var dur = duration_Duration.fromDurationLike(duration),
        dt = friendlyDateTime(end);
      return Interval.fromDateTimes(dt.minus(dur), dt);
    }

    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @param {string} text - the ISO string to parse
     * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {Interval}
     */
  }, {
    key: "fromISO",
    value: function fromISO(text, opts) {
      var _split = (text || "").split("/", 2),
        _split2 = interval_slicedToArray(_split, 2),
        s = _split2[0],
        e = _split2[1];
      if (s && e) {
        var start, startIsValid;
        try {
          start = datetime_DateTime.fromISO(s, opts);
          startIsValid = start.isValid;
        } catch (e) {
          startIsValid = false;
        }
        var end, endIsValid;
        try {
          end = datetime_DateTime.fromISO(e, opts);
          endIsValid = end.isValid;
        } catch (e) {
          endIsValid = false;
        }
        if (startIsValid && endIsValid) {
          return Interval.fromDateTimes(start, end);
        }
        if (startIsValid) {
          var dur = duration_Duration.fromISO(e, opts);
          if (dur.isValid) {
            return Interval.after(start, dur);
          }
        } else if (endIsValid) {
          var _dur = duration_Duration.fromISO(s, opts);
          if (_dur.isValid) {
            return Interval.before(end, _dur);
          }
        }
      }
      return Interval.invalid("unparsable", "the input \"".concat(text, "\" can't be parsed as ISO 8601"));
    }

    /**
     * Check if an object is an Interval. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
  }, {
    key: "isInterval",
    value: function isInterval(o) {
      return o && o.isLuxonInterval || false;
    }
  }, {
    key: "merge",
    value: function merge(intervals) {
      var _intervals$sort$reduc = intervals.sort(function (a, b) {
          return a.s - b.s;
        }).reduce(function (_ref3, item) {
          var _ref4 = interval_slicedToArray(_ref3, 2),
            sofar = _ref4[0],
            current = _ref4[1];
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        }, [[], null]),
        _intervals$sort$reduc2 = interval_slicedToArray(_intervals$sort$reduc, 2),
        found = _intervals$sort$reduc2[0],
        final = _intervals$sort$reduc2[1];
      if (final) {
        found.push(final);
      }
      return found;
    }

    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
  }, {
    key: "xor",
    value: function xor(intervals) {
      var _Array$prototype;
      var start = null,
        currentCount = 0;
      var results = [],
        ends = intervals.map(function (i) {
          return [{
            time: i.s,
            type: "s"
          }, {
            time: i.e,
            type: "e"
          }];
        }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, interval_toConsumableArray(ends)),
        arr = flattened.sort(function (a, b) {
          return a.time - b.time;
        });
      var _iterator = interval_createForOfIteratorHelper(arr),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          currentCount += i.type === "s" ? 1 : -1;
          if (currentCount === 1) {
            start = i.time;
          } else {
            if (start && +start !== +i.time) {
              results.push(Interval.fromDateTimes(start, i.time));
            }
            start = null;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return Interval.merge(results);
    }
  }]);
  return Interval;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/info.js
function info_typeof(obj) { "@babel/helpers - typeof"; return info_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, info_typeof(obj); }
function info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, info_toPropertyKey(descriptor.key), descriptor); } }
function info_createClass(Constructor, protoProps, staticProps) { if (protoProps) info_defineProperties(Constructor.prototype, protoProps); if (staticProps) info_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function info_toPropertyKey(arg) { var key = info_toPrimitive(arg, "string"); return info_typeof(key) === "symbol" ? key : String(key); }
function info_toPrimitive(input, hint) { if (info_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (info_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
var info_Info = /*#__PURE__*/function () {
  function Info() {
    info_classCallCheck(this, Info);
  }
  info_createClass(Info, null, [{
    key: "hasDST",
    value:
    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    function hasDST() {
      var zone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : settings_Settings.defaultZone;
      var proto = datetime_DateTime.now().setZone(zone).set({
        month: 12
      });
      return !zone.isUniversal && proto.offset !== proto.set({
        month: 6
      }).offset;
    }

    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param {string} zone - Zone to check
     * @return {boolean}
     */
  }, {
    key: "isValidIANAZone",
    value: function isValidIANAZone(zone) {
      return IANAZone_IANAZone.isValidZone(zone);
    }

    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone#isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param {string|Zone|number} [input] - the value to be converted
     * @return {Zone}
     */
  }, {
    key: "normalizeZone",
    value: function normalizeZone(input) {
      return zoneUtil_normalizeZone(input, settings_Settings.defaultZone);
    }

    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {Array}
     */
  }, {
    key: "months",
    value: function months() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$locObj = _ref.locObj,
        locObj = _ref$locObj === void 0 ? null : _ref$locObj,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
      return (locObj || locale_Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    }

    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link Info#months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {Array}
     */
  }, {
    key: "monthsFormat",
    value: function monthsFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$locObj = _ref2.locObj,
        locObj = _ref2$locObj === void 0 ? null : _ref2$locObj,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
      return (locObj || locale_Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    }

    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {Array}
     */
  }, {
    key: "weekdays",
    value: function weekdays() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem,
        _ref3$locObj = _ref3.locObj,
        locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
      return (locObj || locale_Locale.create(locale, numberingSystem, null)).weekdays(length);
    }

    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link Info#weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @return {Array}
     */
  }, {
    key: "weekdaysFormat",
    value: function weekdaysFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem,
        _ref4$locObj = _ref4.locObj,
        locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
      return (locObj || locale_Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    }

    /**
     * Return an array of meridiems.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     * @return {Array}
     */
  }, {
    key: "meridiems",
    value: function meridiems() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;
      return locale_Locale.create(locale).meridiems();
    }

    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {Array}
     */
  }, {
    key: "eras",
    value: function eras() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "short";
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;
      return locale_Locale.create(locale, null, "gregory").eras(length);
    }

    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `relative`: whether this environment supports relative time formatting
     * @example Info.features() //=> { relative: false }
     * @return {Object}
     */
  }, {
    key: "features",
    value: function features() {
      return {
        relative: hasRelative()
      };
    }
  }]);
  return Info;
}();

// CONCATENATED MODULE: ../node_modules/luxon/src/impl/diff.js
function diff_typeof(obj) { "@babel/helpers - typeof"; return diff_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, diff_typeof(obj); }
function diff_toConsumableArray(arr) { return diff_arrayWithoutHoles(arr) || diff_iterableToArray(arr) || diff_unsupportedIterableToArray(arr) || diff_nonIterableSpread(); }
function diff_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function diff_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function diff_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return diff_arrayLikeToArray(arr); }
function diff_defineProperty(obj, key, value) { key = diff_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function diff_toPropertyKey(arg) { var key = diff_toPrimitive(arg, "string"); return diff_typeof(key) === "symbol" ? key : String(key); }
function diff_toPrimitive(input, hint) { if (diff_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (diff_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function diff_slicedToArray(arr, i) { return diff_arrayWithHoles(arr) || diff_iterableToArrayLimit(arr, i) || diff_unsupportedIterableToArray(arr, i) || diff_nonIterableRest(); }
function diff_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function diff_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return diff_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return diff_arrayLikeToArray(o, minLen); }
function diff_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function diff_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function diff_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
      return dt.toUTC(0, {
        keepLocalTime: true
      }).startOf("day").valueOf();
    },
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(duration_Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["quarters", function (a, b) {
    return b.quarter - a.quarter + (b.year - a.year) * 4;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var earlier = cursor;
  var lowestOrder, highWater;
  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = diff_slicedToArray(_differs[_i], 2),
      unit = _differs$_i[0],
      differ = _differs$_i[1];
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      results[unit] = differ(cursor, later);
      highWater = earlier.plus(results);
      if (highWater > later) {
        results[unit]--;
        cursor = earlier.plus(results);
      } else {
        cursor = highWater;
      }
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
/* harmony default export */ var impl_diff = (function (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
    _highOrderDiffs2 = diff_slicedToArray(_highOrderDiffs, 4),
    cursor = _highOrderDiffs2[0],
    results = _highOrderDiffs2[1],
    highWater = _highOrderDiffs2[2],
    lowestOrder = _highOrderDiffs2[3];
  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus(diff_defineProperty({}, lowestOrder, 1));
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  var duration = duration_Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;
    return (_Duration$fromMillis = duration_Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, diff_toConsumableArray(lowerOrderUnits)).plus(duration);
  } else {
    return duration;
  }
});
// CONCATENATED MODULE: ../node_modules/luxon/src/impl/digits.js
function digits_slicedToArray(arr, i) { return digits_arrayWithHoles(arr) || digits_iterableToArrayLimit(arr, i) || digits_unsupportedIterableToArray(arr, i) || digits_nonIterableRest(); }
function digits_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function digits_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return digits_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return digits_arrayLikeToArray(o, minLen); }
function digits_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function digits_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function digits_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = digits_slicedToArray(numberingSystemsUTF16[key], 2),
            min = _numberingSystemsUTF[0],
            max = _numberingSystemsUTF[1];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref) {
  var numberingSystem = _ref.numberingSystem;
  var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return new RegExp("".concat(numberingSystems[numberingSystem || "latn"]).concat(append));
}
// CONCATENATED MODULE: ../node_modules/luxon/src/impl/tokenParser.js
function tokenParser_toConsumableArray(arr) { return tokenParser_arrayWithoutHoles(arr) || tokenParser_iterableToArray(arr) || tokenParser_unsupportedIterableToArray(arr) || tokenParser_nonIterableSpread(); }
function tokenParser_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function tokenParser_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function tokenParser_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return tokenParser_arrayLikeToArray(arr); }
function tokenParser_typeof(obj) { "@babel/helpers - typeof"; return tokenParser_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, tokenParser_typeof(obj); }
function tokenParser_slicedToArray(arr, i) { return tokenParser_arrayWithHoles(arr) || tokenParser_iterableToArrayLimit(arr, i) || tokenParser_unsupportedIterableToArray(arr, i) || tokenParser_nonIterableRest(); }
function tokenParser_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function tokenParser_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tokenParser_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tokenParser_arrayLikeToArray(o, minLen); }
function tokenParser_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function tokenParser_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function tokenParser_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex) {
  var post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
    return i;
  };
  return {
    regex: regex,
    deser: function deser(_ref) {
      var _ref2 = tokenParser_slicedToArray(_ref, 1),
        s = _ref2[0];
      return post(parseDigits(s));
    }
  };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "[ ".concat(NBSP, "]");
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref3) {
        var _ref4 = tokenParser_slicedToArray(_ref3, 1),
          s = _ref4[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}
function tokenParser_offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref5) {
      var _ref6 = tokenParser_slicedToArray(_ref5, 3),
        h = _ref6[1],
        m = _ref6[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}
function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref7) {
      var _ref8 = tokenParser_slicedToArray(_ref7, 1),
        s = _ref8[0];
      return s;
    }
  };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  var one = digitRegex(loc),
    two = digitRegex(loc, "{2}"),
    three = digitRegex(loc, "{3}"),
    four = digitRegex(loc, "{4}"),
    six = digitRegex(loc, "{6}"),
    oneOrTwo = digitRegex(loc, "{1,2}"),
    oneToThree = digitRegex(loc, "{1,3}"),
    oneToSix = digitRegex(loc, "{1,6}"),
    oneToNine = digitRegex(loc, "{1,9}"),
    twoToFour = digitRegex(loc, "{2,4}"),
    fourToSix = digitRegex(loc, "{4,6}"),
    literal = function literal(t) {
      return {
        regex: RegExp(escapeToken(t.val)),
        deser: function deser(_ref9) {
          var _ref10 = tokenParser_slicedToArray(_ref9, 1),
            s = _ref10[0];
          return s;
        },
        literal: true
      };
    },
    unitate = function unitate(t) {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);
        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true, false), 1);
        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false, false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return tokenParser_offset(new RegExp("([+-]".concat(oneOrTwo.source, ")(?::(").concat(two.source, "))?")), 2);
        case "ZZZ":
          return tokenParser_offset(new RegExp("([+-]".concat(oneOrTwo.source, ")(").concat(two.source, ")?")), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        default:
          return literal(t);
      }
    };
  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function tokenForPart(part, formatOpts) {
  var type = part.type,
    value = part.value;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];
  if (tokenParser_typeof(val) === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val: val
    };
  }
  return undefined;
}
function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return "".concat(f, "(").concat(r.source, ")");
  }, "");
  return ["^".concat(re, "$"), units];
}
function tokenParser_match(input, regex, handlers) {
  var matches = input.match(regex);
  if (matches) {
    var all = {};
    var matchIndex = 1;
    for (var i in handlers) {
      if (util_hasOwnProperty(handlers, i)) {
        var h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  var zone = null;
  var specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone_IANAZone.create(matches.z);
  }
  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new fixedOffsetZone_FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);
    if (f) {
      r[f] = matches[k];
    }
    return r;
  }, {});
  return [vals, zone, specificOffset];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = datetime_DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  var formatOpts = formatter_Formatter.macroTokenToFormatOpts(token.val);
  var tokens = formatOptsToTokens(formatOpts, locale);
  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  var _Array$prototype;
  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokenParser_toConsumableArray(tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  })));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(formatter_Formatter.parseFormat(format), locale),
    units = tokens.map(function (t) {
      return unitForToken(t, locale);
    }),
    disqualifyingUnit = units.find(function (t) {
      return t.invalidReason;
    });
  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
      _buildRegex2 = tokenParser_slicedToArray(_buildRegex, 2),
      regexString = _buildRegex2[0],
      handlers = _buildRegex2[1],
      regex = RegExp(regexString, "i"),
      _match = tokenParser_match(input, regex, handlers),
      _match2 = tokenParser_slicedToArray(_match, 2),
      rawMatches = _match2[0],
      matches = _match2[1],
      _ref11 = matches ? dateTimeFromMatches(matches) : [null, null, undefined],
      _ref12 = tokenParser_slicedToArray(_ref11, 3),
      result = _ref12[0],
      zone = _ref12[1],
      specificOffset = _ref12[2];
    if (util_hasOwnProperty(matches, "a") && util_hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }
    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone,
      specificOffset: specificOffset
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
    result = _explainFromTokens.result,
    zone = _explainFromTokens.zone,
    specificOffset = _explainFromTokens.specificOffset,
    invalidReason = _explainFromTokens.invalidReason;
  return [result, zone, specificOffset, invalidReason];
}
function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }
  var formatter = formatter_Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map(function (p) {
    return tokenForPart(p, formatOpts);
  });
}
// CONCATENATED MODULE: ../node_modules/luxon/src/impl/conversions.js
function conversions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function conversions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? conversions_ownKeys(Object(source), !0).forEach(function (key) { conversions_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : conversions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function conversions_defineProperty(obj, key, value) { key = conversions_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function conversions_toPropertyKey(arg) { var key = conversions_toPrimitive(arg, "string"); return conversions_typeof(key) === "symbol" ? key : String(key); }
function conversions_toPrimitive(input, hint) { if (conversions_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (conversions_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function conversions_typeof(obj) { "@babel/helpers - typeof"; return conversions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, conversions_typeof(obj); }


var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified ".concat(value, " (of type ").concat(conversions_typeof(value), ") as a ").concat(unit, ", which is invalid"));
}
function dayOfWeek(year, month, day) {
  var d = new Date(Date.UTC(year, month - 1, day));
  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  var js = d.getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex(function (i) {
      return i < ordinal;
    }),
    day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  var year = gregObj.year,
    month = gregObj.month,
    day = gregObj.day,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return conversions_objectSpread({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
    weekNumber = weekData.weekNumber,
    weekday = weekData.weekday,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
    month = _uncomputeOrdinal.month,
    day = _uncomputeOrdinal.day;
  return conversions_objectSpread({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
    month = gregData.month,
    day = gregData.day;
  var ordinal = computeOrdinal(year, month, day);
  return conversions_objectSpread({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
    ordinal = ordinalData.ordinal;
  var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
    month = _uncomputeOrdinal2.month,
    day = _uncomputeOrdinal2.day;
  return conversions_objectSpread({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
    validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
    validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
    validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
    validMonth = integerBetween(obj.month, 1, 12),
    validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
    minute = obj.minute,
    second = obj.second,
    millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
    validMinute = integerBetween(minute, 0, 59),
    validSecond = integerBetween(second, 0, 59),
    validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}
// CONCATENATED MODULE: ../node_modules/luxon/src/datetime.js
function datetime_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function datetime_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, datetime_toPropertyKey(descriptor.key), descriptor); } }
function datetime_createClass(Constructor, protoProps, staticProps) { if (protoProps) datetime_defineProperties(Constructor.prototype, protoProps); if (staticProps) datetime_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function datetime_typeof(obj) { "@babel/helpers - typeof"; return datetime_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, datetime_typeof(obj); }
function datetime_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = datetime_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function datetime_slicedToArray(arr, i) { return datetime_arrayWithHoles(arr) || datetime_iterableToArrayLimit(arr, i) || datetime_unsupportedIterableToArray(arr, i) || datetime_nonIterableRest(); }
function datetime_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function datetime_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return datetime_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return datetime_arrayLikeToArray(o, minLen); }
function datetime_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function datetime_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function datetime_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function datetime_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function datetime_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? datetime_ownKeys(Object(source), !0).forEach(function (key) { datetime_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : datetime_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function datetime_defineProperty(obj, key, value) { key = datetime_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function datetime_toPropertyKey(arg) { var key = datetime_toPrimitive(arg, "string"); return datetime_typeof(key) === "symbol" ? key : String(key); }
function datetime_toPrimitive(input, hint) { if (datetime_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (datetime_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















var datetime_INVALID = "Invalid DateTime";
var MAX_DATE = 8.64e15;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"".concat(zone.name, "\" is not supported"));
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function datetime_clone(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new datetime_DateTime(datetime_objectSpread(datetime_objectSpread(datetime_objectSpread({}, current), alts), {}, {
    old: current
  }));
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  var o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  var o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  var oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = datetime_objectSpread(datetime_objectSpread({}, inst.c), {}, {
      year: year,
      month: month,
      day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }),
    millisToAdd = duration_Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds
    }).as("milliseconds"),
    localTS = objToLocalTS(c);
  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
    _fixOffset2 = datetime_slicedToArray(_fixOffset, 2),
    ts = _fixOffset2[0],
    o = _fixOffset2[1];
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }
  return {
    ts: ts,
    o: o
  };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  var setZone = opts.setZone,
    zone = opts.zone;
  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
      inst = datetime_DateTime.fromObject(parsed, datetime_objectSpread(datetime_objectSpread({}, opts), {}, {
        zone: interpretationZone,
        specificOffset: specificOffset
      }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return datetime_DateTime.invalid(new Invalid("unparsable", "the input \"".concat(text, "\" can't be parsed as ").concat(format)));
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format) {
  var allowZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return dt.isValid ? formatter_Formatter.create(locale_Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function _toISODate(o, extended) {
  var longFormat = o.c.year > 9999 || o.c.year < 0;
  var c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);
  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}
function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
  var c = padStart(o.c.hour);
  if (extended) {
    c += ":";
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }
  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);
    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }
  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}

// defaults for unspecified units in the supported calendars
var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };

// Units in the supported calendars, sorted by bigness
var datetime_orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function datetime_normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  var zone = zoneUtil_normalizeZone(opts.zone, settings_Settings.defaultZone),
    loc = locale_Locale.fromObject(opts),
    tsNow = settings_Settings.now();
  var ts, o;

  // assume we have the higher-order units
  if (!isUndefined(obj.year)) {
    for (var _i2 = 0, _orderedUnits = datetime_orderedUnits; _i2 < _orderedUnits.length; _i2++) {
      var u = _orderedUnits[_i2];
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return datetime_DateTime.invalid(invalid);
    }
    var offsetProvis = zone.offset(tsNow);
    var _objToTS = objToTS(obj, offsetProvis, zone);
    var _objToTS2 = datetime_slicedToArray(_objToTS, 2);
    ts = _objToTS2[0];
    o = _objToTS2[1];
  } else {
    ts = tsNow;
  }
  return new datetime_DateTime({
    ts: ts,
    zone: zone,
    loc: loc,
    o: o
  });
}
function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
    format = function format(c, unit) {
      c = roundTo(c, round || opts.calendary ? 0 : 2, true);
      var formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = function differ(unit) {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  var _iterator = datetime_createForOfIteratorHelper(opts.units),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var unit = _step.value;
      var count = differ(unit);
      if (Math.abs(count) >= 1) {
        return format(count, unit);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  var opts = {},
    args;
  if (argList.length > 0 && datetime_typeof(argList[argList.length - 1]) === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
var datetime_DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    datetime_classCallCheck(this, DateTime);
    var zone = config.zone || settings_Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = isUndefined(config.ts) ? settings_Settings.now() : config.ts;
    var c = null,
      o = null;
    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        var _ref = [config.old.c, config.old.o];
        c = _ref[0];
        o = _ref[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || locale_Locale.create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  datetime_createClass(DateTime, [{
    key: "get",
    value:
    // INFO

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    function get(unit) {
      return this[unit];
    }

    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }

    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }

    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }

    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }

    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }

    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }

    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }

    /**
     * Get the name of the time zone.
     * @type {string}
     */
  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }

    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }

    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }

    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }

    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }

    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }

    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }

    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }

    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }

    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }

    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }

    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }

    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }

    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? info_Info.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }

    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? info_Info.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }

    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? info_Info.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }

    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? info_Info.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }

    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }

    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.isUniversal : null;
    }

    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1,
          day: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }

    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }

    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }

    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }

    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }

    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {Object} opts - the same options as toLocaleString
     * @return {Object}
     */
  }, {
    key: "resolvedLocaleOptions",
    value: function resolvedLocaleOptions() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _Formatter$create$res = formatter_Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;
      return {
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: calendar
      };
    }

    // TRANSFORM

    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link DateTime#setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {Object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */
  }, {
    key: "toUTC",
    value: function toUTC() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.setZone(fixedOffsetZone_FixedOffsetZone.instance(offset), opts);
    }

    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */
  }, {
    key: "toLocal",
    value: function toLocal() {
      return this.setZone(settings_Settings.defaultZone);
    }

    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
     * @param {Object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */
  }, {
    key: "setZone",
    value: function setZone(zone) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$keepLocalTime = _ref2.keepLocalTime,
        keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime,
        _ref2$keepCalendarTim = _ref2.keepCalendarTime,
        keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
      zone = zoneUtil_normalizeZone(zone, settings_Settings.defaultZone);
      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return DateTime.invalid(unsupportedZone(zone));
      } else {
        var newTS = this.ts;
        if (keepLocalTime || keepCalendarTime) {
          var offsetGuess = zone.offset(this.ts);
          var asObj = this.toObject();
          var _objToTS3 = objToTS(asObj, offsetGuess, zone);
          var _objToTS4 = datetime_slicedToArray(_objToTS3, 1);
          newTS = _objToTS4[0];
        }
        return datetime_clone(this, {
          ts: newTS,
          zone: zone
        });
      }
    }

    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {Object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */
  }, {
    key: "reconfigure",
    value: function reconfigure() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref3.locale,
        numberingSystem = _ref3.numberingSystem,
        outputCalendar = _ref3.outputCalendar;
      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: outputCalendar
      });
      return datetime_clone(this, {
        loc: loc
      });
    }

    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      return this.reconfigure({
        locale: locale
      });
    }

    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
     * @param {Object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */
  }, {
    key: "set",
    value: function set(values) {
      if (!this.isValid) return this;
      var normalized = normalizeObject(values, datetime_normalizeUnit),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber;
      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      var mixed;
      if (settingWeekStuff) {
        mixed = weekToGregorian(datetime_objectSpread(datetime_objectSpread({}, gregorianToWeek(this.c)), normalized));
      } else if (!isUndefined(normalized.ordinal)) {
        mixed = ordinalToGregorian(datetime_objectSpread(datetime_objectSpread({}, gregorianToOrdinal(this.c)), normalized));
      } else {
        mixed = datetime_objectSpread(datetime_objectSpread({}, this.toObject()), normalized);

        // if we didn't set the day but we ended up on an overflow date,
        // use the last day of the right month
        if (isUndefined(normalized.day)) {
          mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }
      var _objToTS5 = objToTS(mixed, this.o, this.zone),
        _objToTS6 = datetime_slicedToArray(_objToTS5, 2),
        ts = _objToTS6[0],
        o = _objToTS6[1];
      return datetime_clone(this, {
        ts: ts,
        o: o
      });
    }

    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.now().plus(123) //~> in 123 milliseconds
     * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
     * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
     * @return {DateTime}
     */
  }, {
    key: "plus",
    value: function plus(duration) {
      if (!this.isValid) return this;
      var dur = duration_Duration.fromDurationLike(duration);
      return datetime_clone(this, adjustTime(this, dur));
    }

    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link DateTime#plus}
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
     */
  }, {
    key: "minus",
    value: function minus(duration) {
      if (!this.isValid) return this;
      var dur = duration_Duration.fromDurationLike(duration).negate();
      return datetime_clone(this, adjustTime(this, dur));
    }

    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */
  }, {
    key: "startOf",
    value: function startOf(unit) {
      if (!this.isValid) return this;
      var o = {},
        normalizedUnit = duration_Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
        case "years":
          o.month = 1;
        // falls through
        case "quarters":
        case "months":
          o.day = 1;
        // falls through
        case "weeks":
        case "days":
          o.hour = 0;
        // falls through
        case "hours":
          o.minute = 0;
        // falls through
        case "minutes":
          o.second = 0;
        // falls through
        case "seconds":
          o.millisecond = 0;
          break;
        case "milliseconds":
          break;
        // no default, invalid units throw in normalizeUnit()
      }

      if (normalizedUnit === "weeks") {
        o.weekday = 1;
      }
      if (normalizedUnit === "quarters") {
        var q = Math.ceil(this.month / 3);
        o.month = (q - 1) * 3 + 1;
      }
      return this.set(o);
    }

    /**
     * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */
  }, {
    key: "endOf",
    value: function endOf(unit) {
      return this.isValid ? this.plus(datetime_defineProperty({}, unit, 1)).startOf(unit).minus(1) : this;
    }

    // OUTPUT

    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @param {string} fmt - the format string
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */
  }, {
    key: "toFormat",
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.isValid ? formatter_Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : datetime_INVALID;
    }

    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toLocaleString(); //=> 4/20/2017
     * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
     * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
     * @return {string}
     */
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var formatOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATE_SHORT;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.isValid ? formatter_Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : datetime_INVALID;
    }

    /**
     * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.now().toLocaleParts(); //=> [
     *                                   //=>   { type: 'day', value: '25' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'month', value: '05' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'year', value: '1982' }
     *                                   //=> ]
     */
  }, {
    key: "toLocaleParts",
    value: function toLocaleParts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.isValid ? formatter_Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
     * @return {string}
     */
  }, {
    key: "toISO",
    value: function toISO() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$format = _ref4.format,
        format = _ref4$format === void 0 ? "extended" : _ref4$format,
        _ref4$suppressSeconds = _ref4.suppressSeconds,
        suppressSeconds = _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds,
        _ref4$suppressMillise = _ref4.suppressMilliseconds,
        suppressMilliseconds = _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise,
        _ref4$includeOffset = _ref4.includeOffset,
        includeOffset = _ref4$includeOffset === void 0 ? true : _ref4$includeOffset,
        _ref4$extendedZone = _ref4.extendedZone,
        extendedZone = _ref4$extendedZone === void 0 ? false : _ref4$extendedZone;
      if (!this.isValid) {
        return null;
      }
      var ext = format === "extended";
      var c = _toISODate(this, ext);
      c += "T";
      c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
      return c;
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @param {Object} opts - options
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
     * @return {string}
     */
  }, {
    key: "toISODate",
    value: function toISODate() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;
      if (!this.isValid) {
        return null;
      }
      return _toISODate(this, format === "extended");
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */
  }, {
    key: "toISOWeekDate",
    value: function toISOWeekDate() {
      return toTechFormat(this, "kkkk-'W'WW-c");
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
     * @return {string}
     */
  }, {
    key: "toISOTime",
    value: function toISOTime() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$includePrefix = _ref6.includePrefix,
        includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
        _ref6$extendedZone = _ref6.extendedZone,
        extendedZone = _ref6$extendedZone === void 0 ? false : _ref6$extendedZone,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;
      if (!this.isValid) {
        return null;
      }
      var c = includePrefix ? "T" : "";
      return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    }

    /**
     * Returns an RFC 2822-compatible string representation of this DateTime
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */
  }, {
    key: "toRFC2822",
    value: function toRFC2822() {
      return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */
  }, {
    key: "toHTTP",
    value: function toHTTP() {
      return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string}
     */
  }, {
    key: "toSQLDate",
    value: function toSQLDate() {
      if (!this.isValid) {
        return null;
      }
      return _toISODate(this, true);
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */
  }, {
    key: "toSQLTime",
    value: function toSQLTime() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone,
        _ref7$includeOffsetSp = _ref7.includeOffsetSpace,
        includeOffsetSpace = _ref7$includeOffsetSp === void 0 ? true : _ref7$includeOffsetSp;
      var fmt = "HH:mm:ss.SSS";
      if (includeZone || includeOffset) {
        if (includeOffsetSpace) {
          fmt += " ";
        }
        if (includeZone) {
          fmt += "z";
        } else if (includeOffset) {
          fmt += "ZZ";
        }
      }
      return toTechFormat(this, fmt, true);
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */
  }, {
    key: "toSQL",
    value: function toSQL() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) {
        return null;
      }
      return "".concat(this.toSQLDate(), " ").concat(this.toSQLTime(opts));
    }

    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      return this.isValid ? this.toISO() : datetime_INVALID;
    }

    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
     * @return {number}
     */
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toMillis();
    }

    /**
     * Returns the epoch milliseconds of this DateTime.
     * @return {number}
     */
  }, {
    key: "toMillis",
    value: function toMillis() {
      return this.isValid ? this.ts : NaN;
    }

    /**
     * Returns the epoch seconds of this DateTime.
     * @return {number}
     */
  }, {
    key: "toSeconds",
    value: function toSeconds() {
      return this.isValid ? this.ts / 1000 : NaN;
    }

    /**
     * Returns the epoch seconds (as a whole number) of this DateTime.
     * @return {number}
     */
  }, {
    key: "toUnixInteger",
    value: function toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1000) : NaN;
    }

    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toISO();
    }

    /**
     * Returns a BSON serializable equivalent to this DateTime.
     * @return {Date}
     */
  }, {
    key: "toBSON",
    value: function toBSON() {
      return this.toJSDate();
    }

    /**
     * Returns a JavaScript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {Object}
     */
  }, {
    key: "toObject",
    value: function toObject() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return {};
      var base = datetime_objectSpread({}, this.c);
      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    }

    /**
     * Returns a JavaScript Date equivalent to this DateTime.
     * @return {Date}
     */
  }, {
    key: "toJSDate",
    value: function toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }

    // COMPARE

    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */
  }, {
    key: "diff",
    value: function diff(otherDateTime) {
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "milliseconds";
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!this.isValid || !otherDateTime.isValid) {
        return duration_Duration.invalid("created by diffing an invalid DateTime");
      }
      var durOpts = datetime_objectSpread({
        locale: this.locale,
        numberingSystem: this.numberingSystem
      }, opts);
      var units = maybeArray(unit).map(duration_Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = impl_diff(earlier, later, units, durOpts);
      return otherIsLater ? diffed.negate() : diffed;
    }

    /**
     * Return the difference between this DateTime and right now.
     * See {@link DateTime#diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
  }, {
    key: "diffNow",
    value: function diffNow() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.diff(DateTime.now(), unit, opts);
    }

    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Interval}
     */
  }, {
    key: "until",
    value: function until(otherDateTime) {
      return this.isValid ? interval_Interval.fromDateTimes(this, otherDateTime) : this;
    }

    /**
     * Return whether this DateTime is in the same unit of time as another DateTime.
     * Higher-order units must also be identical for this function to return `true`.
     * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
     * @return {boolean}
     */
  }, {
    key: "hasSame",
    value: function hasSame(otherDateTime, unit) {
      if (!this.isValid) return false;
      var inputMs = otherDateTime.valueOf();
      var adjustedToZone = this.setZone(otherDateTime.zone, {
        keepLocalTime: true
      });
      return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
    }

    /**
     * Equality check
     * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === +dt2`.
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */
  }, {
    key: "equals",
    value: function equals(other) {
      return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    }

    /**
     * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
     * platform supports Intl.RelativeTimeFormat. Rounds down by default.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
     * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
     * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */
  }, {
    key: "toRelative",
    value: function toRelative() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return null;
      var base = options.base || DateTime.fromObject({}, {
          zone: this.zone
        }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
      var units = ["years", "months", "days", "hours", "minutes", "seconds"];
      var unit = options.unit;
      if (Array.isArray(options.unit)) {
        units = options.unit;
        unit = undefined;
      }
      return diffRelative(base, this.plus(padding), datetime_objectSpread(datetime_objectSpread({}, options), {}, {
        numeric: "always",
        units: units,
        unit: unit
      }));
    }

    /**
     * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
     * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */
  }, {
    key: "toRelativeCalendar",
    value: function toRelativeCalendar() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return null;
      return diffRelative(options.base || DateTime.fromObject({}, {
        zone: this.zone
      }), this, datetime_objectSpread(datetime_objectSpread({}, options), {}, {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: true
      }));
    }

    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */
  }], [{
    key: "now",
    value: function now() {
      return new DateTime({});
    }

    /**
     * Create a local DateTime
     * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month, 1-indexed
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example DateTime.local()                                  //~> now
     * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
     * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
     * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
     * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
     * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
     * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
     * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
     * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
     * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
     * @return {DateTime}
     */
  }, {
    key: "local",
    value: function local() {
      var _lastOpts = lastOpts(arguments),
        _lastOpts2 = datetime_slicedToArray(_lastOpts, 2),
        opts = _lastOpts2[0],
        args = _lastOpts2[1],
        _args = datetime_slicedToArray(args, 7),
        year = _args[0],
        month = _args[1],
        day = _args[2],
        hour = _args[3],
        minute = _args[4],
        second = _args[5],
        millisecond = _args[6];
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, opts);
    }

    /**
     * Create a DateTime in UTC
     * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @param {Object} options - configuration options for the DateTime
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @example DateTime.utc()                                              //~> now
     * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
     * @return {DateTime}
     */
  }, {
    key: "utc",
    value: function utc() {
      var _lastOpts3 = lastOpts(arguments),
        _lastOpts4 = datetime_slicedToArray(_lastOpts3, 2),
        opts = _lastOpts4[0],
        args = _lastOpts4[1],
        _args2 = datetime_slicedToArray(args, 7),
        year = _args2[0],
        month = _args2[1],
        day = _args2[2],
        hour = _args2[3],
        minute = _args2[4],
        second = _args2[5],
        millisecond = _args2[6];
      opts.zone = fixedOffsetZone_FixedOffsetZone.utcInstance;
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, opts);
    }

    /**
     * Create a DateTime from a JavaScript Date object. Uses the default zone.
     * @param {Date} date - a JavaScript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */
  }, {
    key: "fromJSDate",
    value: function fromJSDate(date) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ts = isDate(date) ? date.valueOf() : NaN;
      if (Number.isNaN(ts)) {
        return DateTime.invalid("invalid input");
      }
      var zoneToUse = zoneUtil_normalizeZone(options.zone, settings_Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return DateTime.invalid(unsupportedZone(zoneToUse));
      }
      return new DateTime({
        ts: ts,
        zone: zoneToUse,
        loc: locale_Locale.fromObject(options)
      });
    }

    /**
     * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */
  }, {
    key: "fromMillis",
    value: function fromMillis(milliseconds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!isNumber(milliseconds)) {
        throw new InvalidArgumentError("fromMillis requires a numerical input, but received a ".concat(datetime_typeof(milliseconds), " with value ").concat(milliseconds));
      } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
        // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
        return DateTime.invalid("Timestamp out of range");
      } else {
        return new DateTime({
          ts: milliseconds,
          zone: zoneUtil_normalizeZone(options.zone, settings_Settings.defaultZone),
          loc: locale_Locale.fromObject(options)
        });
      }
    }

    /**
     * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} seconds - a number of seconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */
  }, {
    key: "fromSeconds",
    value: function fromSeconds(seconds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!isNumber(seconds)) {
        throw new InvalidArgumentError("fromSeconds requires a numerical input");
      } else {
        return new DateTime({
          ts: seconds * 1000,
          zone: zoneUtil_normalizeZone(options.zone, settings_Settings.defaultZone),
          loc: locale_Locale.fromObject(options)
        });
      }
    }

    /**
     * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {Object} opts - options for creating this DateTime
     * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @return {DateTime}
     */
  }, {
    key: "fromObject",
    value: function fromObject(obj) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      obj = obj || {};
      var zoneToUse = zoneUtil_normalizeZone(opts.zone, settings_Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return DateTime.invalid(unsupportedZone(zoneToUse));
      }
      var tsNow = settings_Settings.now(),
        offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, datetime_normalizeUnit),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = locale_Locale.fromObject(opts);

      // cases:
      // just a weekday -> this week's instance of that weekday, no worries
      // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
      // (gregorian month or day) + ordinal -> error
      // otherwise just use weeks or ordinals or gregorian, depending on what's specified

      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;

      // configure ourselves to deal with gregorian dates or week stuff
      var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);
      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = gregorianToWeek(objNow);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = gregorianToOrdinal(objNow);
      } else {
        units = datetime_orderedUnits;
        defaultValues = defaultUnitValues;
      }

      // set default values for missing stuff
      var foundFirst = false;
      var _iterator2 = datetime_createForOfIteratorHelper(units),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var u = _step2.value;
          var v = normalized[u];
          if (!isUndefined(v)) {
            foundFirst = true;
          } else if (foundFirst) {
            normalized[u] = defaultValues[u];
          } else {
            normalized[u] = objNow[u];
          }
        }

        // make sure the values we have are in range
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
      if (invalid) {
        return DateTime.invalid(invalid);
      }

      // compute the actual time
      var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS7 = objToTS(gregorian, offsetProvis, zoneToUse),
        _objToTS8 = datetime_slicedToArray(_objToTS7, 2),
        tsFinal = _objToTS8[0],
        offsetFinal = _objToTS8[1],
        inst = new DateTime({
          ts: tsFinal,
          zone: zoneToUse,
          o: offsetFinal,
          loc: loc
        });

      // gregorian data + weekday serves only to validate
      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of ".concat(normalized.weekday, " and a date of ").concat(inst.toISO()));
      }
      return inst;
    }

    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */
  }, {
    key: "fromISO",
    value: function fromISO(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _parseISODate = parseISODate(text),
        _parseISODate2 = datetime_slicedToArray(_parseISODate, 2),
        vals = _parseISODate2[0],
        parsedZone = _parseISODate2[1];
      return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    }

    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */
  }, {
    key: "fromRFC2822",
    value: function fromRFC2822(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _parseRFC2822Date = parseRFC2822Date(text),
        _parseRFC2822Date2 = datetime_slicedToArray(_parseRFC2822Date, 2),
        vals = _parseRFC2822Date2[0],
        parsedZone = _parseRFC2822Date2[1];
      return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    }

    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */
  }, {
    key: "fromHTTP",
    value: function fromHTTP(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _parseHTTPDate = parseHTTPDate(text),
        _parseHTTPDate2 = datetime_slicedToArray(_parseHTTPDate, 2),
        vals = _parseHTTPDate2[0],
        parsedZone = _parseHTTPDate2[1];
      return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    }

    /**
     * Create a DateTime from an input string and format string.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */
  }, {
    key: "fromFormat",
    value: function fromFormat(text, fmt) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (isUndefined(text) || isUndefined(fmt)) {
        throw new InvalidArgumentError("fromFormat requires an input string and a format");
      }
      var _opts$locale = opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = locale_Locale.fromOpts({
          locale: locale,
          numberingSystem: numberingSystem,
          defaultToEN: true
        }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        _parseFromTokens2 = datetime_slicedToArray(_parseFromTokens, 4),
        vals = _parseFromTokens2[0],
        parsedZone = _parseFromTokens2[1],
        specificOffset = _parseFromTokens2[2],
        invalid = _parseFromTokens2[3];
      if (invalid) {
        return DateTime.invalid(invalid);
      } else {
        return parseDataToDateTime(vals, parsedZone, opts, "format ".concat(fmt), text, specificOffset);
      }
    }

    /**
     * @deprecated use fromFormat instead
     */
  }, {
    key: "fromString",
    value: function fromString(text, fmt) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return DateTime.fromFormat(text, fmt, opts);
    }

    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */
  }, {
    key: "fromSQL",
    value: function fromSQL(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _parseSQL = parseSQL(text),
        _parseSQL2 = datetime_slicedToArray(_parseSQL, 2),
        vals = _parseSQL2[0],
        parsedZone = _parseSQL2[1];
      return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    }

    /**
     * Create an invalid DateTime.
     * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {DateTime}
     */
  }, {
    key: "invalid",
    value: function invalid(reason) {
      var explanation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
      }
      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (settings_Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(invalid);
      } else {
        return new DateTime({
          invalid: invalid
        });
      }
    }

    /**
     * Check if an object is an instance of DateTime. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
  }, {
    key: "isDateTime",
    value: function isDateTime(o) {
      return o && o.isLuxonDateTime || false;
    }

    /**
     * Produce the format string for a set of options
     * @param formatOpts
     * @param localeOpts
     * @returns {string}
     */
  }, {
    key: "parseFormatForOpts",
    value: function parseFormatForOpts(formatOpts) {
      var localeOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var tokenList = formatOptsToTokens(formatOpts, locale_Locale.fromObject(localeOpts));
      return !tokenList ? null : tokenList.map(function (t) {
        return t ? t.val : null;
      }).join("");
    }

    /**
     * Produce the the fully expanded format token for the locale
     * Does NOT quote characters, so quoted tokens will not round trip correctly
     * @param fmt
     * @param localeOpts
     * @returns {string}
     */
  }, {
    key: "expandFormat",
    value: function expandFormat(fmt) {
      var localeOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var expanded = expandMacroTokens(formatter_Formatter.parseFormat(fmt), locale_Locale.fromObject(localeOpts));
      return expanded.map(function (t) {
        return t.val;
      }).join("");
    }
  }, {
    key: "min",
    value: function min() {
      for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }
      if (!dateTimes.every(DateTime.isDateTime)) {
        throw new InvalidArgumentError("min requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.min);
    }

    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */
  }, {
    key: "max",
    value: function max() {
      for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        dateTimes[_key2] = arguments[_key2];
      }
      if (!dateTimes.every(DateTime.isDateTime)) {
        throw new InvalidArgumentError("max requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.max);
    }

    // MISC

    /**
     * Explain how a string would be parsed by fromFormat()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options taken by fromFormat()
     * @return {Object}
     */
  }, {
    key: "fromFormatExplain",
    value: function fromFormatExplain(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$locale = options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = locale_Locale.fromOpts({
          locale: locale,
          numberingSystem: numberingSystem,
          defaultToEN: true
        });
      return explainFromTokens(localeToUse, text, fmt);
    }

    /**
     * @deprecated use fromFormatExplain instead
     */
  }, {
    key: "fromStringExplain",
    value: function fromStringExplain(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return DateTime.fromFormatExplain(text, fmt, options);
    }

    // FORMAT PRESETS

    /**
     * {@link DateTime#toLocaleString} format like 10/14/1983
     * @type {Object}
     */
  }, {
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }

    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);
  return DateTime;
}();
/**
 * @private
 */

function friendlyDateTime(dateTimeish) {
  if (datetime_DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return datetime_DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && datetime_typeof(dateTimeish) === "object") {
    return datetime_DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: ".concat(dateTimeish, ", of type ").concat(datetime_typeof(dateTimeish)));
  }
}
// CONCATENATED MODULE: ../node_modules/luxon/src/luxon.js










var VERSION = "3.2.1";


/***/ }),

/***/ "FA6U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"table-wrapper":"table-wrapper__1Zhb5","home":"home__uRcqa","resource":"resource__reFLt"});

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "KyR8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Fragment) {/* harmony import */ var preact_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("y+LV");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FA6U");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Etnu");
/* harmony import */ var _cachedProcessedRuns_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("SfBS");
var _cachedProcessedRuns_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("SfBS", 1);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pcq1");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Y4LV");
/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2+fx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function join(array, separator) {
  if (typeof separator === 'string') {
    separator = Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])(Fragment, null, separator);
  }
  for (var i = array.length - 1; i > 0; i--) {
    array.splice(i, 0, separator);
  }
  return array;
}

// add correct placement numbers
// add obsoleteness
// add scaled time data for dishes
// add scaled time data for players
// add scaled time data for dishes AND players
// add scaled time data for dishes, players, AND map-specific cards

var columnHelper = Object(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_6__[/* createColumnHelper */ "a"])();
var columnDefs = [columnHelper.accessor('place', {
  cell: function cell(props) {
    var leaderboardUrl = props.row.original.leaderboardUrl;
    return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("a", {
      href: leaderboardUrl
    }, props.getValue());
  },
  header: 'Placement'
}), columnHelper.accessor('time', {
  cell: function cell(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("a", {
      href: props.row.original.videoUrl
    }, luxon__WEBPACK_IMPORTED_MODULE_4__[/* Duration */ "b"].fromISO(props.row.original.time_s).toISOTime());
  },
  header: 'Time',
  sortDescFirst: false
}), columnHelper.accessor(function (row) {
  return row.players.length.toString() + row.players.map(function (p) {
    return p.name;
  }).join(', ');
}, {
  id: 'All Players',
  cell: function cell(props) {
    return join(props.row.original.players.map(function (p) {
      return p.url ? Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("a", {
        href: p.url
      }, p.name) : Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])(Fragment, null, p.name);
    }), Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])(Fragment, null, ", "));
  }
  //*/
}), columnHelper.accessor('time_adj', {
  cell: function cell(_ref) {
    var time_adj_s = _ref.row.original.time_adj_s;
    return time_adj_s;
  },
  header: function header() {
    return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("div", {
      title: "adjusted for player count and main dish modifiers"
    }, "Adj. Time");
  },
  sortDescFirst: false
}), columnHelper.accessor('verifyDate', {
  cell: function cell(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("a", {
      href: props.row.original.weblink
    }, luxon__WEBPACK_IMPORTED_MODULE_4__[/* DateTime */ "a"].fromISO(props.getValue()).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_4__[/* DateTime */ "a"].DATE_FULL));
  },
  header: 'Verify Date',
  sortDescFirst: true
}), columnHelper.accessor('2lg135el', {
  header: 'Seed'
}), columnHelper.accessor('wl3d19v8', {
  header: 'Dishes'
}), columnHelper.accessor(function (row) {
  switch (row['wlekw94l']) {
    case 'Solo':
      return 1;
    case 'Duo':
      return 2;
    case 'Trio':
      return 3;
    case 'Quad':
      return 4;
    default:
      return 0;
  }
}, {
  header: 'Players',
  cell: function cell(props) {
    return props.row.original['wlekw94l'];
  }
}), columnHelper.accessor('5lyx19gn', {
  header: 'Seed'
}), columnHelper.accessor('p855yjv8', {
  header: 'Patch'
}), columnHelper.accessor('onv4xmwn', {
  header: 'Map scene'
}), columnHelper.accessor('dishReduction', {
  header: 'Customer Modifier from Main',
  cell: function cell(props) {
    return Number(Math.pow(0.85, props.getValue()) - 1).toLocaleString(undefined, {
      style: 'percent',
      signDisplay: 'always',
      minimumFractionDigits: 2
    });
  },
  invertSorting: true
})];
var Home = function Home() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "k"])(_cachedProcessedRuns_json__WEBPACK_IMPORTED_MODULE_5__),
    _useState2 = _slicedToArray(_useState, 2),
    processedRuns = _useState2[0],
    setProcessedRuns = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "d"])(function () {
    Object(_processData__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])().then(function (_ref2) {
      var processedRuns = _ref2.processedRuns;
      console.log(JSON.stringify(processedRuns));
      setProcessedRuns(processedRuns);
    });
  }, []);
  var table = Object(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__[/* useReactTable */ "b"])({
    data: processedRuns,
    columns: columnDefs,
    getCoreRowModel: Object(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_6__[/* getCoreRowModel */ "c"])(),
    getSortedRowModel: Object(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_6__[/* getSortedRowModel */ "d"])(),
    // getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      sorting: [{
        id: 'time_adj',
        desc: false
      }]
    }
  });
  return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].home
  }, Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("h1", null, "All PlateUp! Speedruns"), Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]['table-wrapper']
  }, Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("table", null, Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("thead", null, table.getHeaderGroups().map(function (headerGroup) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("tr", {
      key: headerGroup.id
    }, headerGroup.headers.map(function (header) {
      var _asc$desc;
      return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("th", {
        key: header.id,
        colSpan: header.colSpan
      }, header.isPlaceholder ? null : Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])(Fragment, null, Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("div", {
        className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
        onClick: header.column.getToggleSortingHandler()
      }, Object(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__[/* flexRender */ "a"])(header.column.columnDef.header, header.getContext()), (_asc$desc = {
        asc: ' 🔼',
        desc: ' 🔽'
      }[header.column.getIsSorted()]) !== null && _asc$desc !== void 0 ? _asc$desc : ' ⏹️')));
    }));
  })), Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("tbody", null, table.getRowModel().rows.map(function (row) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("tr", {
      key: row.id
    }, row.getVisibleCells().map(function (cell) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_2__["h"])("td", {
        key: cell.id
      }, Object(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__[/* flexRender */ "a"])(cell.column.columnDef.cell, cell.getContext()));
    }));
  })))));
};
/* harmony default export */ __webpack_exports__["a"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "Mhmf":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"weblink\":\"https://www.speedrun.com/plateup#Any\",\"game\":\"yd4kq3k6\",\"category\":\"z275n0gk\",\"level\":null,\"platform\":null,\"region\":null,\"emulators\":null,\"video-only\":false,\"timing\":\"realtime\",\"values\":{},\"runs\":[{\"place\":1,\"run\":{\"id\":\"m7284qez\",\"weblink\":\"https://www.speedrun.com/plateup/run/m7284qez\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=-Lh2duX2pRg\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-11T04:29:18Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2023-01-10\",\"submitted\":\"2023-01-10T17:24:43Z\",\"times\":{\"primary\":\"PT16M27.710S\",\"primary_t\":987.71,\"realtime\":\"PT16M27.710S\",\"realtime_t\":987.71,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/abpf\"},\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klr2pzm1\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":2,\"run\":{\"id\":\"y8097oxm\",\"weblink\":\"https://www.speedrun.com/plateup/run/y8097oxm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1681294602\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-17T10:31:16Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-12-17\",\"submitted\":\"2022-12-17T06:51:40Z\",\"times\":{\"primary\":\"PT16M34.730S\",\"primary_t\":994.73,\"realtime\":\"PT16M34.730S\",\"realtime_t\":994.73,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"5q89zw61\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":3,\"run\":{\"id\":\"zx8x59km\",\"weblink\":\"https://www.speedrun.com/plateup/run/zx8x59km\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=i5vh58HU5zQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-10-10T09:48:00Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"}],\"date\":\"2022-10-06\",\"submitted\":\"2022-10-09T23:31:03Z\",\"times\":{\"primary\":\"PT16M52.970S\",\"primary_t\":1012.97,\"realtime\":\"PT16M52.970S\",\"realtime_t\":1012.97,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"81pgy8e1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"yl18vkxm\",\"weblink\":\"https://www.speedrun.com/plateup/run/yl18vkxm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/v1JAQBhQqgg\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-11-16T03:20:19Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-11-11\",\"submitted\":\"2022-11-15T11:56:00Z\",\"times\":{\"primary\":\"PT17M26.050S\",\"primary_t\":1046.05,\"realtime\":\"PT17M26.050S\",\"realtime_t\":1046.05,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"rqvnn451\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":0,\"run\":{\"id\":\"me1wqd3y\",\"weblink\":\"https://www.speedrun.com/plateup/run/me1wqd3y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=znHilUOhElA&ab_channel=pjmangopie\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-10-05T03:31:04Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-10-04\",\"submitted\":\"2022-10-05T02:19:44Z\",\"times\":{\"primary\":\"PT17M30.950S\",\"primary_t\":1050.95,\"realtime\":\"PT17M30.950S\",\"realtime_t\":1050.95,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"81pgy8e1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"ydg9po0y\",\"weblink\":\"https://www.speedrun.com/plateup/run/ydg9po0y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=inwP38XEiZk\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-11T04:28:33Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2023-01-10\",\"submitted\":\"2023-01-10T14:57:02Z\",\"times\":{\"primary\":\"PT17M36.960S\",\"primary_t\":1056.96,\"realtime\":\"PT17M36.960S\",\"realtime_t\":1056.96,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/abor\"},\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"xqknjrkq\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"yl12erxm\",\"weblink\":\"https://www.speedrun.com/plateup/run/yl12erxm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1642399210\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-11-04T01:36:01Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-11-03\",\"submitted\":\"2022-11-03T16:35:38Z\",\"times\":{\"primary\":\"PT17M44.480S\",\"primary_t\":1064.48,\"realtime\":\"PT17M44.480S\",\"realtime_t\":1064.48,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"21dmzwj1\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":0,\"run\":{\"id\":\"zxn41jkm\",\"weblink\":\"https://www.speedrun.com/plateup/run/zxn41jkm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1681291460\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-17T10:13:10Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"}],\"date\":\"2022-12-17\",\"submitted\":\"2022-12-17T06:43:21Z\",\"times\":{\"primary\":\"PT18M12.330S\",\"primary_t\":1092.33,\"realtime\":\"PT18M12.330S\",\"realtime_t\":1092.33,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"21dedxgl\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"ylnq093z\",\"weblink\":\"https://www.speedrun.com/plateup/run/ylnq093z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/nwt3BGxXP1s\"}]},\"comment\":\"it's COOKED man LOL honestly surprised this worked, north pole was pretty fun\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-14T04:42:08Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2023-01-12\",\"submitted\":\"2023-01-12T08:10:01Z\",\"times\":{\"primary\":\"PT18M16.260S\",\"primary_t\":1096.26,\"realtime\":\"PT18M16.260S\",\"realtime_t\":1096.26,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"jqz3yeg1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"xqkn7dnq\"}}},{\"place\":0,\"run\":{\"id\":\"y9xewkky\",\"weblink\":\"https://www.speedrun.com/plateup/run/y9xewkky\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=moWbv77stVw\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-10-23T21:23:57Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"}],\"date\":\"2022-10-21\",\"submitted\":\"2022-10-23T15:03:01Z\",\"times\":{\"primary\":\"PT18M53.450S\",\"primary_t\":1133.45,\"realtime\":\"PT18M53.450S\",\"realtime_t\":1133.45,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"5q8yw06l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":4,\"run\":{\"id\":\"ylnq452z\",\"weblink\":\"https://www.speedrun.com/plateup/run/ylnq452z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"http://twitch.tv/gc_monster7\"},{\"uri\":\"https://www.youtube.com/watch?v=_MKwqPxs9YM\"}]},\"comment\":\"Almost a sub 19, but that's good enough.\\r\\nSplits: https://splits.io/abwz8\\r\\n\\r\\nGGs!!\\r\\n\\r\\n► Follow me:\\r\\n  ●Twitch: http://twitch.tv/gc_monster7\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-12T08:09:47Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2023-01-12\",\"submitted\":\"2023-01-12T05:59:57Z\",\"times\":{\"primary\":\"PT19M2.330S\",\"primary_t\":1142.33,\"realtime\":\"PT19M2.330S\",\"realtime_t\":1142.33,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/abwz\"},\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"gq7xkyrl\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"yodr9g1m\",\"weblink\":\"https://www.speedrun.com/plateup/run/yodr9g1m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/TKQi6s8oNu8\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-02T01:35:43Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-09-02\",\"submitted\":\"2022-09-01T21:04:44Z\",\"times\":{\"primary\":\"PT19M16.320S\",\"primary_t\":1156.32,\"realtime\":\"PT19M16.320S\",\"realtime_t\":1156.32,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"8104p6jl\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"z1geo5wz\",\"weblink\":\"https://www.speedrun.com/plateup/run/z1geo5wz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/QK0dRXAFzLE\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-11-16T03:24:09Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-10-31\",\"submitted\":\"2022-11-15T12:00:24Z\",\"times\":{\"primary\":\"PT19M17.830S\",\"primary_t\":1157.83,\"realtime\":\"PT19M17.830S\",\"realtime_t\":1157.83,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"21dmzwj1\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":0,\"run\":{\"id\":\"zxnvkkgm\",\"weblink\":\"https://www.speedrun.com/plateup/run/zxnvkkgm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1668985911\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-12-05T07:53:16Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"}],\"date\":\"2022-12-03\",\"submitted\":\"2022-12-03T08:36:10Z\",\"times\":{\"primary\":\"PT19M21.910S\",\"primary_t\":1161.91,\"realtime\":\"PT19M21.910S\",\"realtime_t\":1161.91,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"810d64ol\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"y801wn5m\",\"weblink\":\"https://www.speedrun.com/plateup/run/y801wn5m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1685626250\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-24T10:25:31Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"}],\"date\":\"2022-12-21\",\"submitted\":\"2022-12-22T03:43:24Z\",\"times\":{\"primary\":\"PT19M25.070S\",\"primary_t\":1165.07,\"realtime\":\"PT19M25.070S\",\"realtime_t\":1165.07,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"81p5d7vl\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":5,\"run\":{\"id\":\"zpg1lggz\",\"weblink\":\"https://www.speedrun.com/plateup/run/zpg1lggz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=9uVVCoL8cng\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-14T05:01:56Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6qdloj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj\"},{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"}],\"date\":\"2023-01-12\",\"submitted\":\"2023-01-13T03:25:27Z\",\"times\":{\"primary\":\"PT19M25.150S\",\"primary_t\":1165.15,\"realtime\":\"PT19M25.150S\",\"realtime_t\":1165.15,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"jqz3yeg1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"0136d4r1\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":6,\"run\":{\"id\":\"z5xdq9gy\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xdq9gy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/IhaBb_kyk7g\"}]},\"comment\":\"sub 19:30!\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-31T10:46:23Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"}],\"date\":\"2022-08-31\",\"submitted\":\"2022-08-31T08:58:59Z\",\"times\":{\"primary\":\"PT19M25.950S\",\"primary_t\":1165.95,\"realtime\":\"PT19M25.950S\",\"realtime_t\":1165.95,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"gq78woy1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"mro8dg7m\",\"weblink\":\"https://www.speedrun.com/plateup/run/mro8dg7m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=25HjOq8-tUs\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-16T11:55:55Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2022-12-15\",\"submitted\":\"2022-12-16T00:30:30Z\",\"times\":{\"primary\":\"PT19M38.310S\",\"primary_t\":1178.31,\"realtime\":\"PT19M38.310S\",\"realtime_t\":1178.31,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"4lx64pjl\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"znq28w3z\",\"weblink\":\"https://www.speedrun.com/plateup/run/znq28w3z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=8y4Nt3p_-d8&ab_channel=pjmangopie\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-10-01T04:39:32Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-09-30\",\"submitted\":\"2022-09-30T20:19:52Z\",\"times\":{\"primary\":\"PT19M42.510S\",\"primary_t\":1182.51,\"realtime\":\"PT19M42.510S\",\"realtime_t\":1182.51,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"5q8yw06l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"y4x893dz\",\"weblink\":\"https://www.speedrun.com/plateup/run/y4x893dz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=POQsyP_50ek\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-31T14:54:20Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-08-31\",\"submitted\":\"2022-08-31T14:44:24Z\",\"times\":{\"primary\":\"PT19M43.370S\",\"primary_t\":1183.37,\"realtime\":\"PT19M43.370S\",\"realtime_t\":1183.37,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"gq78woy1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":7,\"run\":{\"id\":\"m7x789wy\",\"weblink\":\"https://www.speedrun.com/plateup/run/m7x789wy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/teWSvsiGxsI\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-08-28T08:59:57Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"kj9d37x4\",\"uri\":\"https://www.speedrun.com/api/v1/users/kj9d37x4\"}],\"date\":\"2022-08-28\",\"submitted\":\"2022-08-28T08:56:30Z\",\"times\":{\"primary\":\"PT19M46.990S\",\"primary_t\":1186.99,\"realtime\":\"PT19M46.990S\",\"realtime_t\":1186.99,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"gq78woy1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":8,\"run\":{\"id\":\"yol901dy\",\"weblink\":\"https://www.speedrun.com/plateup/run/yol901dy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/playlist?list=PLkANXvvIPXjk1pi18kmkp2QqNf4gc6XmB\"},{\"uri\":\"https://youtu.be/McK6bvghUv4\"}]},\"comment\":\"We are quite happy with sub20. We have been grinding these strats for about two weeks.\\r\\n\\r\\nYou can watch our other runs here\\r\\nhttps://www.youtube.com/playlist?list=PLkANXvvIPXjk1pi18kmkp2QqNf4gc6XmB\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-11T03:47:35Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"68wkm38g\",\"uri\":\"https://www.speedrun.com/api/v1/users/68wkm38g\"},{\"rel\":\"user\",\"id\":\"8lo132l8\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lo132l8\"}],\"date\":\"2023-01-09\",\"submitted\":\"2023-01-09T04:59:24Z\",\"times\":{\"primary\":\"PT19M53.120S\",\"primary_t\":1193.12,\"realtime\":\"PT19M53.120S\",\"realtime_t\":1193.12,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"zqovo741\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"yl15842m\",\"weblink\":\"https://www.speedrun.com/plateup/run/yl15842m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/xesZ8tgZr9o\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-10-31T05:20:32Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"}],\"date\":\"2022-10-30\",\"submitted\":\"2022-10-31T02:03:43Z\",\"times\":{\"primary\":\"PT20M38.650S\",\"primary_t\":1238.65,\"realtime\":\"PT20M38.650S\",\"realtime_t\":1238.65,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"21dmzwj1\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":0,\"run\":{\"id\":\"znqe0o3z\",\"weblink\":\"https://www.speedrun.com/plateup/run/znqe0o3z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/DJcc17se3EI\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-28T05:35:26Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"}],\"date\":\"2022-09-26\",\"submitted\":\"2022-09-26T11:17:23Z\",\"times\":{\"primary\":\"PT20M47.780S\",\"primary_t\":1247.78,\"realtime\":\"PT20M47.780S\",\"realtime_t\":1247.78,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"gq78woy1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"y9xgwwry\",\"weblink\":\"https://www.speedrun.com/plateup/run/y9xgwwry\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=UjgA4iQST_g\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-11-06T14:48:08Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-11-03\",\"submitted\":\"2022-11-06T05:47:57Z\",\"times\":{\"primary\":\"PT20M56.670S\",\"primary_t\":1256.67,\"realtime\":\"PT20M56.670S\",\"realtime_t\":1256.67,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"z19woekq\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":0,\"run\":{\"id\":\"yd1o7gwy\",\"weblink\":\"https://www.speedrun.com/plateup/run/yd1o7gwy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/2IUhove2obo\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-10-31T05:24:11Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-10-31\",\"submitted\":\"2022-10-31T04:52:40Z\",\"times\":{\"primary\":\"PT20M59.820S\",\"primary_t\":1259.82,\"realtime\":\"PT20M59.820S\",\"realtime_t\":1259.82,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"21g36r6q\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":9,\"run\":{\"id\":\"m7x00xey\",\"weblink\":\"https://www.speedrun.com/plateup/run/m7x00xey\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/QjiYm3A9e88\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-09-22T07:56:13Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8106zrpx\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106zrpx\"}],\"date\":\"2022-09-22\",\"submitted\":\"2022-09-22T07:54:00Z\",\"times\":{\"primary\":\"PT21M27.700S\",\"primary_t\":1287.7,\"realtime\":\"PT21M27.700S\",\"realtime_t\":1287.7,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"gq78woy1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":10,\"run\":{\"id\":\"mkd19gly\",\"weblink\":\"https://www.speedrun.com/plateup/run/mkd19gly\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=R2qUDStsKIw\"}]},\"comment\":\"still crying at how much potential this seed had and how I lost so much time due to dumb mistakes :')\\r\\n\\r\\nbut still an amazing run!\",\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-10-06T18:33:01Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3w61lkj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3w61lkj\"}],\"date\":\"2022-10-05\",\"submitted\":\"2022-10-06T00:40:37Z\",\"times\":{\"primary\":\"PT21M38.790S\",\"primary_t\":1298.79,\"realtime\":\"PT21M38.790S\",\"realtime_t\":1298.79,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"m7xd255y\",\"weblink\":\"https://www.speedrun.com/plateup/run/m7xd255y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/SmWG8DR6E04\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-08-25T05:45:20Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2022-08-24\",\"submitted\":\"2022-08-25T03:44:15Z\",\"times\":{\"primary\":\"PT21M39.990S\",\"primary_t\":1299.99,\"realtime\":\"PT21M39.990S\",\"realtime_t\":1299.99,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"8104p6jl\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"m3xw936m\",\"weblink\":\"https://www.speedrun.com/plateup/run/m3xw936m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=UwCHny3oySw\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-10-12T10:44:22Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-10-11\",\"submitted\":\"2022-10-11T11:42:14Z\",\"times\":{\"primary\":\"PT21M41.620S\",\"primary_t\":1301.62,\"realtime\":\"PT21M41.620S\",\"realtime_t\":1301.62,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"814n5x0l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"z5xd1ljy\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xd1ljy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=9-g2Aq5nsNQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-08-27T20:44:39Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2022-08-27\",\"submitted\":\"2022-08-27T18:49:02Z\",\"times\":{\"primary\":\"PT21M47S\",\"primary_t\":1307,\"realtime\":\"PT21M47S\",\"realtime_t\":1307,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"jq6dpd31\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"m3x7ed4m\",\"weblink\":\"https://www.speedrun.com/plateup/run/m3x7ed4m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/tbn5rq2Ht50\"}]},\"comment\":\"we are challengers! think we got lucky with some cards but messes are rough...\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-31T10:47:40Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"}],\"date\":\"2022-08-31\",\"submitted\":\"2022-08-31T09:43:24Z\",\"times\":{\"primary\":\"PT21M47.240S\",\"primary_t\":1307.24,\"realtime\":\"PT21M47.240S\",\"realtime_t\":1307.24,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"81wyjkoq\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"yd1ldlxy\",\"weblink\":\"https://www.speedrun.com/plateup/run/yd1ldlxy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"http://twitch.tv/gc_monster7\"},{\"uri\":\"https://www.twitch.tv/videos/1618387497\"},{\"uri\":\"https://www.youtube.com/watch?v=poskF-BcjpM\"}]},\"comment\":\"The Rusty came from 2 weeks without playing the game.\\r\\nBut wat.... WHAT JUST FUCKING HAPPENED?\\r\\n\\r\\n► Follow me:\\r\\n  ●Twitch: http://twitch.tv/gc_monster7\\r\\n\\r\\nVODs: https://www.twitch.tv/videos/1618387497\",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-10-09T06:17:05Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2022-10-08\",\"submitted\":\"2022-10-08T08:44:52Z\",\"times\":{\"primary\":\"PT21M51.850S\",\"primary_t\":1311.85,\"realtime\":\"PT21M51.850S\",\"realtime_t\":1311.85,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"814n5x0l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":11,\"run\":{\"id\":\"yd1pd3jy\",\"weblink\":\"https://www.speedrun.com/plateup/run/yd1pd3jy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1642634489\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-11-04T01:38:11Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xzlw5ve8\",\"uri\":\"https://www.speedrun.com/api/v1/users/xzlw5ve8\"}],\"date\":\"2022-11-03\",\"submitted\":\"2022-11-03T21:16:33Z\",\"times\":{\"primary\":\"PT21M59.720S\",\"primary_t\":1319.72,\"realtime\":\"PT21M59.720S\",\"realtime_t\":1319.72,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":0,\"run\":{\"id\":\"mee95nqm\",\"weblink\":\"https://www.speedrun.com/plateup/run/mee95nqm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=0Z0nF4h3zA4\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2023-01-11T10:01:36Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2023-01-10\",\"submitted\":\"2023-01-10T20:57:06Z\",\"times\":{\"primary\":\"PT22M11.920S\",\"primary_t\":1331.92,\"realtime\":\"PT22M11.920S\",\"realtime_t\":1331.92,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/abqd\"},\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"p120d24l\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"zqer305z\",\"weblink\":\"https://www.speedrun.com/plateup/run/zqer305z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=mJs_GxsE9JI\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-19T01:34:45Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2022-12-17\",\"submitted\":\"2022-12-18T06:27:07Z\",\"times\":{\"primary\":\"PT22M13.130S\",\"primary_t\":1333.13,\"realtime\":\"PT22M13.130S\",\"realtime_t\":1333.13,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"814zjjjl\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"jqz356m1\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"y962rpry\",\"weblink\":\"https://www.speedrun.com/plateup/run/y962rpry\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/NU-m2gLM6GA\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-17T10:32:09Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-12-17\",\"submitted\":\"2022-12-17T06:57:56Z\",\"times\":{\"primary\":\"PT22M27.290S\",\"primary_t\":1347.29,\"realtime\":\"PT22M27.290S\",\"realtime_t\":1347.29,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"9qj8dko1\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":12,\"run\":{\"id\":\"y6x9x86y\",\"weblink\":\"https://www.speedrun.com/plateup/run/y6x9x86y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=M9Db-oxHHLo\"}]},\"comment\":\"Still time that can be saved, both rng and inputs\\r\\n*Sorry about terrible quality\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-29T05:00:35Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8106gprx\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106gprx\"},{\"rel\":\"user\",\"id\":\"8rl79zw8\",\"uri\":\"https://www.speedrun.com/api/v1/users/8rl79zw8\"}],\"date\":\"2022-08-28\",\"submitted\":\"2022-08-29T04:31:20Z\",\"times\":{\"primary\":\"PT22M32.050S\",\"primary_t\":1352.05,\"realtime\":\"PT22M32.050S\",\"realtime_t\":1352.05,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"ydg0jlwy\",\"weblink\":\"https://www.speedrun.com/plateup/run/ydg0jlwy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=Ofa86kwjtbU\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-03T11:26:53Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2023-01-02\",\"submitted\":\"2023-01-03T05:05:38Z\",\"times\":{\"primary\":\"PT22M49.690S\",\"primary_t\":1369.69,\"realtime\":\"PT22M49.690S\",\"realtime_t\":1369.69,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/aaq9\"},\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"013g003l\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"81w0wevl\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"y80d115m\",\"weblink\":\"https://www.speedrun.com/plateup/run/y80d115m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"http://twitch.tv/gc_monster7\"},{\"uri\":\"https://www.youtube.com/watch?v=p649W7ynmrU\"}]},\"comment\":\"Trying new things with Stirfry, I would considered using Robo Buffer over Scrub Brush\\r\\n\\r\\nGGs!\\r\\n\\r\\n► Follow me:\\r\\n  ●Twitch: http://twitch.tv/gc_monster7\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-14T04:45:24Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2023-01-12\",\"submitted\":\"2023-01-12T09:52:54Z\",\"times\":{\"primary\":\"PT23M31.420S\",\"primary_t\":1411.42,\"realtime\":\"PT23M31.420S\",\"realtime_t\":1411.42,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"814zjjjl\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klr2p201\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"y2jqon7z\",\"weblink\":\"https://www.speedrun.com/plateup/run/y2jqon7z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1681292975\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-17T10:30:26Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-12-17\",\"submitted\":\"2022-12-17T06:47:00Z\",\"times\":{\"primary\":\"PT23M31.680S\",\"primary_t\":1411.68,\"realtime\":\"PT23M31.680S\",\"realtime_t\":1411.68,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"4lx64pjl\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"mro9no2m\",\"weblink\":\"https://www.speedrun.com/plateup/run/mro9no2m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=zaLaBnoHPbQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-03T11:24:32Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6qdloj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj\"},{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"}],\"date\":\"2023-01-01\",\"submitted\":\"2023-01-01T23:58:18Z\",\"times\":{\"primary\":\"PT23M36.600S\",\"primary_t\":1416.6,\"realtime\":\"PT23M36.600S\",\"realtime_t\":1416.6,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"jqz3yeg1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"0q53kmr1\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"z5e5nqdz\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5e5nqdz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1667209991\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-12-05T07:43:06Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"}],\"date\":\"2022-12-01\",\"submitted\":\"2022-12-01T05:11:14Z\",\"times\":{\"primary\":\"PT23M37.680S\",\"primary_t\":1417.68,\"realtime\":\"PT23M37.680S\",\"realtime_t\":1417.68,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"gq7x2rnl\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"y8xn705m\",\"weblink\":\"https://www.speedrun.com/plateup/run/y8xn705m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/92EgKjnWQGg\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-10-31T05:24:16Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-10-31\",\"submitted\":\"2022-10-31T04:58:34Z\",\"times\":{\"primary\":\"PT24M1.550S\",\"primary_t\":1441.55,\"realtime\":\"PT24M1.550S\",\"realtime_t\":1441.55,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"jq6dpd31\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"z1gpjx7z\",\"weblink\":\"https://www.speedrun.com/plateup/run/z1gpjx7z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/MJZbPv4Aao4\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-05T12:11:08Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"}],\"date\":\"2022-09-05\",\"submitted\":\"2022-09-05T09:26:33Z\",\"times\":{\"primary\":\"PT24M13.460S\",\"primary_t\":1453.46,\"realtime\":\"PT24M13.460S\",\"realtime_t\":1453.46,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"z5xw6kny\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xw6kny\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=qjeYETyMVik\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-10-23T21:24:23Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"}],\"date\":\"2022-10-20\",\"submitted\":\"2022-10-23T15:05:54Z\",\"times\":{\"primary\":\"PT24M13.600S\",\"primary_t\":1453.6,\"realtime\":\"PT24M13.600S\",\"realtime_t\":1453.6,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"814n5x0l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":13,\"run\":{\"id\":\"z1g031wz\",\"weblink\":\"https://www.speedrun.com/plateup/run/z1g031wz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/oo2BlVJveDs\"}]},\"comment\":\"easy\\r\\n\\r\\nCaramelbob go quad)\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-11-02T11:29:10Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j06lqpwj\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06lqpwj\"},{\"rel\":\"user\",\"id\":\"xyo9n6nj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyo9n6nj\"},{\"rel\":\"user\",\"id\":\"8lok5g48\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lok5g48\"}],\"date\":\"2022-11-01\",\"submitted\":\"2022-10-31T23:15:51Z\",\"times\":{\"primary\":\"PT24M15.450S\",\"primary_t\":1455.45,\"realtime\":\"PT24M15.450S\",\"realtime_t\":1455.45,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"z19new0q\",\"p855yjv8\":\"81wk8x61\"}}},{\"place\":0,\"run\":{\"id\":\"zpd943gz\",\"weblink\":\"https://www.speedrun.com/plateup/run/zpd943gz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=8S3IvM1FfNo\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-05T12:08:28Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"}],\"date\":\"2022-09-05\",\"submitted\":\"2022-09-05T08:40:31Z\",\"times\":{\"primary\":\"PT24M18.320S\",\"primary_t\":1458.32,\"realtime\":\"PT24M18.320S\",\"realtime_t\":1458.32,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"mlnxj3nq\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"z1q3jjjy\",\"weblink\":\"https://www.speedrun.com/plateup/run/z1q3jjjy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1668982978\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-12-05T07:52:06Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"}],\"date\":\"2022-12-03\",\"submitted\":\"2022-12-03T08:29:23Z\",\"times\":{\"primary\":\"PT25M11.750S\",\"primary_t\":1511.75,\"realtime\":\"PT25M11.750S\",\"realtime_t\":1511.75,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"mlnoegoq\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":14,\"run\":{\"id\":\"zg2ndg0y\",\"weblink\":\"https://www.speedrun.com/plateup/run/zg2ndg0y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=AO7dfMJnCt0\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-12-05T19:32:10Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j06o3q4j\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06o3q4j\"},{\"rel\":\"user\",\"id\":\"8lon3mr8\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lon3mr8\"}],\"date\":\"2022-12-04\",\"submitted\":\"2022-12-04T22:51:59Z\",\"times\":{\"primary\":\"PT25M27.200S\",\"primary_t\":1527.2,\"realtime\":\"PT25M27.200S\",\"realtime_t\":1527.2,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"z19p5r0l\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"mro4px4m\",\"weblink\":\"https://www.speedrun.com/plateup/run/mro4px4m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/30n_sQ0XF1Y\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2023-01-11T10:00:54Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"}],\"date\":\"2023-01-10\",\"submitted\":\"2023-01-10T20:34:07Z\",\"times\":{\"primary\":\"PT25M35.550S\",\"primary_t\":1535.55,\"realtime\":\"PT25M35.550S\",\"realtime_t\":1535.55,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/abq4\"},\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"0q53n221\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"y801wnnm\",\"weblink\":\"https://www.speedrun.com/plateup/run/y801wnnm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1685637807\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-24T10:23:43Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"}],\"date\":\"2022-12-21\",\"submitted\":\"2022-12-22T03:42:21Z\",\"times\":{\"primary\":\"PT25M46.230S\",\"primary_t\":1546.23,\"realtime\":\"PT25M46.230S\",\"realtime_t\":1546.23,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"814zjjjl\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"jqz356m1\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":15,\"run\":{\"id\":\"yw6joqnm\",\"weblink\":\"https://www.speedrun.com/plateup/run/yw6joqnm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/UWEwh6DUjlI\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-04T06:26:39Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8d04ddmx\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d04ddmx\"},{\"rel\":\"user\",\"id\":\"8gezm2yj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8gezm2yj\"},{\"rel\":\"guest\",\"name\":\"savagebeast\",\"uri\":\"https://www.speedrun.com/api/v1/guests/savagebeast\"}],\"date\":\"2022-09-03\",\"submitted\":\"2022-09-04T02:08:51Z\",\"times\":{\"primary\":\"PT25M59.680S\",\"primary_t\":1559.68,\"realtime\":\"PT25M59.680S\",\"realtime_t\":1559.68,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"z19new0q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":16,\"run\":{\"id\":\"znqej6vz\",\"weblink\":\"https://www.speedrun.com/plateup/run/znqej6vz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=xDcOQc8U4aQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-28T05:37:42Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"guest\",\"name\":\"KingdomofKroz\",\"uri\":\"https://www.speedrun.com/api/v1/guests/KingdomofKroz\"}],\"date\":\"2022-09-22\",\"submitted\":\"2022-09-27T14:53:24Z\",\"times\":{\"primary\":\"PT26M46.950S\",\"primary_t\":1606.95,\"realtime\":\"PT26M46.950S\",\"realtime_t\":1606.95,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"jq6j9wj1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"z1q8p9gy\",\"weblink\":\"https://www.speedrun.com/plateup/run/z1q8p9gy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=OPLYcRVr7fY\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2023-01-08T17:11:09Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6qdloj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj\"},{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"}],\"date\":\"2023-01-07\",\"submitted\":\"2023-01-08T02:43:26Z\",\"times\":{\"primary\":\"PT26M51.570S\",\"primary_t\":1611.57,\"realtime\":\"PT26M51.570S\",\"realtime_t\":1611.57,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"21degzjl\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":17,\"run\":{\"id\":\"y8x534dm\",\"weblink\":\"https://www.speedrun.com/plateup/run/y8x534dm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1658104309\"}]},\"comment\":\"lol\",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-11-20T14:24:15Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8wl1n2qj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8wl1n2qj\"}],\"date\":\"2022-11-20\",\"submitted\":\"2022-11-20T14:07:52Z\",\"times\":{\"primary\":\"PT26M58.460S\",\"primary_t\":1618.46,\"realtime\":\"PT26M58.460S\",\"realtime_t\":1618.46,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":0,\"run\":{\"id\":\"m7xd834y\",\"weblink\":\"https://www.speedrun.com/plateup/run/m7xd834y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=hcMAUKaz-80\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-08-24T04:13:16Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-08-15\",\"submitted\":\"2022-08-24T04:13:16Z\",\"times\":{\"primary\":\"PT26M59.030S\",\"primary_t\":1619.03,\"realtime\":\"PT26M59.030S\",\"realtime_t\":1619.03,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"81048y5l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"yodx3qjm\",\"weblink\":\"https://www.speedrun.com/plateup/run/yodx3qjm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1611255293\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-10-07T01:53:30Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"}],\"date\":\"2022-10-06\",\"submitted\":\"2022-10-06T23:08:48Z\",\"times\":{\"primary\":\"PT27M9.250S\",\"primary_t\":1629.25,\"realtime\":\"PT27M9.250S\",\"realtime_t\":1629.25,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"5lm92y01\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"zq9dq69y\",\"weblink\":\"https://www.speedrun.com/plateup/run/zq9dq69y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=fCagAhPkCYg\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-29T11:31:53Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"guest\",\"name\":\"KingdomofKroz\",\"uri\":\"https://www.speedrun.com/api/v1/guests/KingdomofKroz\"}],\"date\":\"2022-09-22\",\"submitted\":\"2022-09-28T10:04:50Z\",\"times\":{\"primary\":\"PT27M32.380S\",\"primary_t\":1652.38,\"realtime\":\"PT27M32.380S\",\"realtime_t\":1652.38,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"xqkxgvd1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"zpd8w8rz\",\"weblink\":\"https://www.speedrun.com/plateup/run/zpd8w8rz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=1piUKXqBgb0\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-08-29T18:55:29Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"}],\"date\":\"2022-08-29\",\"submitted\":\"2022-08-29T14:12:33Z\",\"times\":{\"primary\":\"PT27M49.280S\",\"primary_t\":1669.28,\"realtime\":\"PT27M49.280S\",\"realtime_t\":1669.28,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"jqzjwxkl\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":18,\"run\":{\"id\":\"yj8lwp7m\",\"weblink\":\"https://www.speedrun.com/plateup/run/yj8lwp7m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=Ic4LR--jHzU\"}]},\"comment\":\"28 minutes, 33 seconds, and 8 milliseconds Speedrun for PlateUp! v1.1.2\\r\\n\\r\\nPlayers: Duo - TheOneZachs, Alliekat\\r\\nDish: Turkey\\r\\nRandom Seed: WG8XH7D6\\r\\n\\r\\nMods: Harmony, KitchenLib, Kitchen Designer, Starting Meal Selector (Shown at end of run)\",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2023-01-02T21:48:04Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jp6qpq48\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp6qpq48\"},{\"rel\":\"guest\",\"name\":\"Alliekat\",\"uri\":\"https://www.speedrun.com/api/v1/guests/Alliekat\"}],\"date\":\"2022-12-28\",\"submitted\":\"2022-12-28T18:33:59Z\",\"times\":{\"primary\":\"PT28M33.008S\",\"primary_t\":1713.008,\"realtime\":\"PT28M33.008S\",\"realtime_t\":1713.008,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/a9vs\"},\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"jqz3yeg1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"zqov2eg1\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"yjdg1voy\",\"weblink\":\"https://www.speedrun.com/plateup/run/yjdg1voy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=1gZyf3ZVaXY&t=322s\"}]},\"comment\":\"A Sloppy run\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-24T05:46:11Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2022-08-21\",\"submitted\":\"2022-08-24T05:37:39Z\",\"times\":{\"primary\":\"PT28M54.800S\",\"primary_t\":1734.8,\"realtime\":\"PT28M54.800S\",\"realtime_t\":1734.8,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"81p9jzkq\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"yv012voz\",\"weblink\":\"https://www.speedrun.com/plateup/run/yv012voz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/IsZt0TsIJEw\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-24T04:04:23Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"kj9d37x4\",\"uri\":\"https://www.speedrun.com/api/v1/users/kj9d37x4\"}],\"date\":\"2022-08-11\",\"submitted\":\"2022-08-24T04:04:23Z\",\"times\":{\"primary\":\"PT28M56.970S\",\"primary_t\":1736.97,\"realtime\":\"PT28M56.970S\",\"realtime_t\":1736.97,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"81048y5l\",\"p855yjv8\":\"81wk8x61\"}}},{\"place\":19,\"run\":{\"id\":\"yjd92jny\",\"weblink\":\"https://www.speedrun.com/plateup/run/yjd92jny\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=hg8pcOb8AKg\"}]},\"comment\":\"I am posting this because it was the first time I was able to complete the race.\",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-10-09T06:23:47Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xy5yrzn8\",\"uri\":\"https://www.speedrun.com/api/v1/users/xy5yrzn8\"}],\"date\":\"2022-10-09\",\"submitted\":\"2022-10-08T19:20:40Z\",\"times\":{\"primary\":\"PT29M13.480S\",\"primary_t\":1753.48,\"realtime\":\"PT29M13.480S\",\"realtime_t\":1753.48,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"5q8m22kl\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":20,\"run\":{\"id\":\"y2ee7d6y\",\"weblink\":\"https://www.speedrun.com/plateup/run/y2ee7d6y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/GoU2Fvc6OlA\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-11T11:48:41Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"zx7nqwv8\",\"uri\":\"https://www.speedrun.com/api/v1/users/zx7nqwv8\"}],\"date\":\"2022-09-10\",\"submitted\":\"2022-09-10T20:20:07Z\",\"times\":{\"primary\":\"PT29M16.560S\",\"primary_t\":1756.56,\"realtime\":\"PT29M16.560S\",\"realtime_t\":1756.56,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"mlnxggdq\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"zq9jg35y\",\"weblink\":\"https://www.speedrun.com/plateup/run/zq9jg35y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=kqRKuwmgwLE\"}]},\"comment\":\"At least I got a good sub 30.\\r\\n\\r\\nNot the real WR tho, this can be beaten easily\\r\\nGGs\",\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-09-20T16:18:19Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2022-09-20\",\"submitted\":\"2022-09-20T15:11:16Z\",\"times\":{\"primary\":\"PT29M22.710S\",\"primary_t\":1762.71,\"realtime\":\"PT29M22.710S\",\"realtime_t\":1762.71,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/9xod\"},\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"0q5r35r1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"zgqgx0jy\",\"weblink\":\"https://www.speedrun.com/plateup/run/zgqgx0jy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=DPULP6AJ4Mc&t=303s\"}]},\"comment\":\"Was a test run, but become a speedrun.\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-24T05:49:22Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2022-08-21\",\"submitted\":\"2022-08-24T05:40:00Z\",\"times\":{\"primary\":\"PT29M38.760S\",\"primary_t\":1778.76,\"realtime\":\"PT29M38.760S\",\"realtime_t\":1778.76,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":21,\"run\":{\"id\":\"z5xvj0ny\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xvj0ny\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/bA4_VloRLHs\"}]},\"comment\":\"First attempt at a Trio run! \",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-01T08:33:24Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"x3wqp5qj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wqp5qj\"}],\"date\":\"2022-08-29\",\"submitted\":\"2022-09-01T08:07:28Z\",\"times\":{\"primary\":\"PT29M45.740S\",\"primary_t\":1785.74,\"realtime\":\"PT29M45.740S\",\"realtime_t\":1785.74,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"zqo40021\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"gq7837n1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"znq113lz\",\"weblink\":\"https://www.speedrun.com/plateup/run/znq113lz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=xs_bhGwW1Hs\"}]},\"comment\":\"Not a good run.\",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-08-24T08:34:24Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2022-08-24\",\"submitted\":\"2022-08-24T08:33:33Z\",\"times\":{\"primary\":\"PT30M0.920S\",\"primary_t\":1800.92,\"realtime\":\"PT30M0.920S\",\"realtime_t\":1800.92,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"814zjmjl\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":22,\"run\":{\"id\":\"yod1735m\",\"weblink\":\"https://www.speedrun.com/plateup/run/yod1735m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/lpEGQVHRjP0\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-11-22T09:03:51Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j40eoqw8\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40eoqw8\"}],\"date\":\"2022-11-21\",\"submitted\":\"2022-11-22T02:50:07Z\",\"times\":{\"primary\":\"PT30M9.640S\",\"primary_t\":1809.64,\"realtime\":\"PT30M9.640S\",\"realtime_t\":1809.64,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":23,\"run\":{\"id\":\"z5xwn45y\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xwn45y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=PmuS5an0qpM\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-10-23T21:22:39Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jmz0m7zx\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx\"},{\"rel\":\"user\",\"id\":\"j9py4rwx\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx\"}],\"date\":\"2022-10-23\",\"submitted\":\"2022-10-23T20:31:33Z\",\"times\":{\"primary\":\"PT30M27.290S\",\"primary_t\":1827.29,\"realtime\":\"PT30M27.290S\",\"realtime_t\":1827.29,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"21g3x38q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"y9x341ey\",\"weblink\":\"https://www.speedrun.com/plateup/run/y9x341ey\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/CxvXC-mEui0\"}]},\"comment\":\"definitely can be sub 30. Have to figure out a better dishwashing setup. Danger hob is dangerous. \",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-31T10:48:48Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"}],\"date\":\"2022-08-31\",\"submitted\":\"2022-08-31T10:29:30Z\",\"times\":{\"primary\":\"PT30M28.250S\",\"primary_t\":1828.25,\"realtime\":\"PT30M28.250S\",\"realtime_t\":1828.25,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"5lej0w51\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"y4xl113z\",\"weblink\":\"https://www.speedrun.com/plateup/run/y4xl113z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1610669751\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-10-06T18:34:41Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x767qeyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"}],\"date\":\"2022-10-06\",\"submitted\":\"2022-10-06T06:05:53Z\",\"times\":{\"primary\":\"PT30M56.130S\",\"primary_t\":1856.13,\"realtime\":\"PT30M56.130S\",\"realtime_t\":1856.13,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"8104p6jl\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"y8xj4g5m\",\"weblink\":\"https://www.speedrun.com/plateup/run/y8xj4g5m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/L43Ox6ixvJA\"}]},\"comment\":\"Not the best cards in the world, will probably retry this one some day.\\r\\n\\r\\nMod Note: Warning not to block game version.\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-04T11:10:02Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"}],\"date\":\"2022-09-04\",\"submitted\":\"2022-09-04T09:46:17Z\",\"times\":{\"primary\":\"PT31M5.910S\",\"primary_t\":1865.91,\"realtime\":\"PT31M5.910S\",\"realtime_t\":1865.91,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"81p9kggq\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":24,\"run\":{\"id\":\"y8x6dnwm\",\"weblink\":\"https://www.speedrun.com/plateup/run/y8x6dnwm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=LXf8V6aJXMc\"}]},\"comment\":\"I made some mistakes, but I had a game plan that I stuck to so I'm reasonably happy with the run.\",\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-09-21T14:24:52Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8g5vr01j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8g5vr01j\"}],\"date\":\"2022-09-19\",\"submitted\":\"2022-09-20T22:18:56Z\",\"times\":{\"primary\":\"PT31M8.080S\",\"primary_t\":1868.08,\"realtime\":\"PT31M8.080S\",\"realtime_t\":1868.08,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"4qy0w3dl\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":25,\"run\":{\"id\":\"yv86o6xm\",\"weblink\":\"https://www.speedrun.com/plateup/run/yv86o6xm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/SN4yeMEWLAs\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-28T02:48:40Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"},{\"rel\":\"guest\",\"name\":\"zzumiess\",\"uri\":\"https://www.speedrun.com/api/v1/guests/zzumiess\"}],\"date\":\"2022-12-26\",\"submitted\":\"2022-12-27T01:33:28Z\",\"times\":{\"primary\":\"PT31M40.500S\",\"primary_t\":1900.5,\"realtime\":\"PT31M40.500S\",\"realtime_t\":1900.5,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"yv08g7ez\",\"weblink\":\"https://www.speedrun.com/plateup/run/yv08g7ez\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/74a1O8gB4Ig\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-15T05:05:09Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"zx7nqwv8\",\"uri\":\"https://www.speedrun.com/api/v1/users/zx7nqwv8\"}],\"date\":\"2022-09-14\",\"submitted\":\"2022-09-14T16:42:16Z\",\"times\":{\"primary\":\"PT32M4.540S\",\"primary_t\":1924.54,\"realtime\":\"PT32M4.540S\",\"realtime_t\":1924.54,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":26,\"run\":{\"id\":\"yjddovdy\",\"weblink\":\"https://www.speedrun.com/plateup/run/yjddovdy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/A7znASNQ-yw\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-12T07:05:57Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"user\",\"id\":\"xk1392kj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk1392kj\"}],\"date\":\"2022-09-11\",\"submitted\":\"2022-09-12T06:19:06Z\",\"times\":{\"primary\":\"PT32M9.530S\",\"primary_t\":1929.53,\"realtime\":\"PT32M9.530S\",\"realtime_t\":1929.53,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":27,\"run\":{\"id\":\"m728474z\",\"weblink\":\"https://www.speedrun.com/plateup/run/m728474z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1703400778\"}]},\"comment\":\"Beating my time on pies,  got mushroom and veggie pies with potatos and chips.\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-11T04:43:28Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j03pp49j\",\"uri\":\"https://www.speedrun.com/api/v1/users/j03pp49j\"}],\"date\":\"2023-01-10\",\"submitted\":\"2023-01-10T18:37:21Z\",\"times\":{\"primary\":\"PT32M24.320S\",\"primary_t\":1944.32,\"realtime\":\"PT32M24.320S\",\"realtime_t\":1944.32,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":28,\"run\":{\"id\":\"z5ejd95z\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5ejd95z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/aeCbmR0WOYw\"}]},\"comment\":\"Black flowers.\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-30T07:01:04Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j40p6om8\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40p6om8\"}],\"date\":\"2022-12-26\",\"submitted\":\"2022-12-27T07:01:54Z\",\"times\":{\"primary\":\"PT32M44.960S\",\"primary_t\":1964.96,\"realtime\":\"PT32M44.960S\",\"realtime_t\":1964.96,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"xqkvddyl\",\"5lyx19gn\":\"4qyw8n61\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"jqz3ry41\"}}},{\"place\":29,\"run\":{\"id\":\"zpdw44gz\",\"weblink\":\"https://www.speedrun.com/plateup/run/zpdw44gz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/ybTWXkxfx5A\"}]},\"comment\":\"borger\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-20T02:17:12Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"e8ez5nd8\",\"uri\":\"https://www.speedrun.com/api/v1/users/e8ez5nd8\"}],\"date\":\"2022-09-19\",\"submitted\":\"2022-09-19T21:42:50Z\",\"times\":{\"primary\":\"PT33M34.510S\",\"primary_t\":2014.51,\"realtime\":\"PT33M34.510S\",\"realtime_t\":2014.51,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"p127057q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"m72qr45z\",\"weblink\":\"https://www.speedrun.com/plateup/run/m72qr45z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=H1iiA8GXHCI\"}]},\"comment\":\"Set the restaurant on fire, recovered (mostly)\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-24T10:36:55Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jmz0m7zx\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx\"},{\"rel\":\"user\",\"id\":\"j9py4rwx\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx\"}],\"date\":\"2022-12-09\",\"submitted\":\"2022-12-24T08:27:18Z\",\"times\":{\"primary\":\"PT34M10.450S\",\"primary_t\":2050.45,\"realtime\":\"PT34M10.450S\",\"realtime_t\":2050.45,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"jqz3xjk1\",\"p855yjv8\":\"zqo7n641\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":30,\"run\":{\"id\":\"mkde92vy\",\"weblink\":\"https://www.speedrun.com/plateup/run/mkde92vy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=d9an8RjPtIQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-01T01:37:49Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jp6mkry8\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp6mkry8\"}],\"date\":\"2022-08-31\",\"submitted\":\"2022-08-31T21:55:57Z\",\"times\":{\"primary\":\"PT34M11.090S\",\"primary_t\":2051.09,\"realtime\":\"PT34M11.090S\",\"realtime_t\":2051.09,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"gq783nn1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":31,\"run\":{\"id\":\"y4g1902y\",\"weblink\":\"https://www.speedrun.com/plateup/run/y4g1902y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/ACJH0eZpJM4\"}]},\"comment\":\"First attempts at Trios, plenty of room to improve. Taken from livestream.\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-19T01:31:36Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jmz0m7zx\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx\"},{\"rel\":\"user\",\"id\":\"j9py4rwx\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx\"},{\"rel\":\"user\",\"id\":\"8lozmq78\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lozmq78\"}],\"date\":\"2022-12-09\",\"submitted\":\"2022-12-17T20:34:21Z\",\"times\":{\"primary\":\"PT34M13.010S\",\"primary_t\":2053.01,\"realtime\":\"PT34M13.010S\",\"realtime_t\":2053.01,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"z19p9j8l\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"m3xrwqqm\",\"weblink\":\"https://www.speedrun.com/plateup/run/m3xrwqqm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=IL9jY-qihHY\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-08-26T07:27:10Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"}],\"date\":\"2022-08-25\",\"submitted\":\"2022-08-26T01:30:25Z\",\"times\":{\"primary\":\"PT35M27.060S\",\"primary_t\":2127.06,\"realtime\":\"PT35M27.060S\",\"realtime_t\":2127.06,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"814zjjjl\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"z19nkr4q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":32,\"run\":{\"id\":\"zpd2nxnz\",\"weblink\":\"https://www.speedrun.com/plateup/run/zpd2nxnz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=hwcYKv5HQ2Q\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-01T01:36:03Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"o860y7q8\",\"uri\":\"https://www.speedrun.com/api/v1/users/o860y7q8\"},{\"rel\":\"user\",\"id\":\"y8dvreg8\",\"uri\":\"https://www.speedrun.com/api/v1/users/y8dvreg8\"},{\"rel\":\"guest\",\"name\":\"Jawnee4\",\"uri\":\"https://www.speedrun.com/api/v1/guests/Jawnee4\"}],\"date\":\"2022-08-30\",\"submitted\":\"2022-08-31T16:23:24Z\",\"times\":{\"primary\":\"PT35M35.770S\",\"primary_t\":2135.77,\"realtime\":\"PT35M35.770S\",\"realtime_t\":2135.77,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"yjd55qdy\",\"weblink\":\"https://www.speedrun.com/plateup/run/yjd55qdy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=MWk11leyX78\"}]},\"comment\":\"Worst RNG cards ever... I'll try to make it better soon.\\r\\n\\r\\nMod Note: Run starts at 3:59.\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-29T03:58:03Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"}],\"date\":\"2022-08-29\",\"submitted\":\"2022-08-28T19:30:54Z\",\"times\":{\"primary\":\"PT36M14.200S\",\"primary_t\":2174.2,\"realtime\":\"PT36M14.200S\",\"realtime_t\":2174.2,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"814zjjjl\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"zqo4gy41\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":33,\"run\":{\"id\":\"yod6d6jm\",\"weblink\":\"https://www.speedrun.com/plateup/run/yod6d6jm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/BFGodsRJ3Ac\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-29T04:26:51Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j06370wj\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06370wj\"}],\"date\":\"2022-08-28\",\"submitted\":\"2022-08-29T03:09:12Z\",\"times\":{\"primary\":\"PT36M19S\",\"primary_t\":2179,\"realtime\":\"PT36M19S\",\"realtime_t\":2179,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":34,\"run\":{\"id\":\"y9xpdkey\",\"weblink\":\"https://www.speedrun.com/plateup/run/y9xpdkey\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/yF3yWebjtSQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-10-17T10:05:29Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8g0owwrx\",\"uri\":\"https://www.speedrun.com/api/v1/users/8g0owwrx\"}],\"date\":\"2022-10-15\",\"submitted\":\"2022-10-15T19:25:15Z\",\"times\":{\"primary\":\"PT36M30.800S\",\"primary_t\":2190.8,\"realtime\":\"PT36M30.800S\",\"realtime_t\":2190.8,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":35,\"run\":{\"id\":\"y4xgw0qz\",\"weblink\":\"https://www.speedrun.com/plateup/run/y4xgw0qz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=xs5Ut5R12p8\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-16T09:57:45Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8644gy3j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8644gy3j\"}],\"date\":\"2022-09-15\",\"submitted\":\"2022-09-15T11:38:31Z\",\"times\":{\"primary\":\"PT36M34.310S\",\"primary_t\":2194.31,\"realtime\":\"PT36M34.310S\",\"realtime_t\":2194.31,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":36,\"run\":{\"id\":\"znqjoxvz\",\"weblink\":\"https://www.speedrun.com/plateup/run/znqjoxvz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/13eQmw4bXaI\"}]},\"comment\":\"super pro gaming\\r\\nCommon#0957 discord\\r\\ncommon on top\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-26T03:09:31Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8v227gyj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v227gyj\"}],\"date\":\"2022-09-15\",\"submitted\":\"2022-09-15T21:35:18Z\",\"times\":{\"primary\":\"PT36M47.210S\",\"primary_t\":2207.21,\"realtime\":\"PT36M47.210S\",\"realtime_t\":2207.21,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"gq78woy1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":37,\"run\":{\"id\":\"y9x9wgvy\",\"weblink\":\"https://www.speedrun.com/plateup/run/y9x9wgvy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=HecJAOnl4d4\"}]},\"comment\":\"First run on the board , could have done better. \",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-08-26T14:18:54Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jn2d05dj\",\"uri\":\"https://www.speedrun.com/api/v1/users/jn2d05dj\"},{\"rel\":\"user\",\"id\":\"jp642d28\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp642d28\"}],\"date\":\"2022-08-26\",\"submitted\":\"2022-08-26T14:18:54Z\",\"times\":{\"primary\":\"PT37M5.680S\",\"primary_t\":2225.68,\"realtime\":\"PT37M5.680S\",\"realtime_t\":2225.68,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"gq78woy1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":38,\"run\":{\"id\":\"z5xdl9ny\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xdl9ny\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=jgy90Sw-R5I\"}]},\"comment\":\"making pies is miserable. \",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-30T12:47:54Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jonp1338\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"user\",\"id\":\"x76m6wvj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x76m6wvj\"}],\"date\":\"2022-08-30\",\"submitted\":\"2022-08-30T11:05:14Z\",\"times\":{\"primary\":\"PT37M59.860S\",\"primary_t\":2279.86,\"realtime\":\"PT37M59.860S\",\"realtime_t\":2279.86,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"zqo4g951\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":39,\"run\":{\"id\":\"z0l7qq4z\",\"weblink\":\"https://www.speedrun.com/plateup/run/z0l7qq4z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=6nvtQ7Bq8Z8\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-08-30T03:23:16Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j06vgk4j\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06vgk4j\"}],\"date\":\"2022-08-29\",\"submitted\":\"2022-08-30T03:00:54Z\",\"times\":{\"primary\":\"PT38M11.770S\",\"primary_t\":2291.77,\"realtime\":\"PT38M11.770S\",\"realtime_t\":2291.77,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"rqv877w1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"jqzjwk8l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":40,\"run\":{\"id\":\"mkdn2pvy\",\"weblink\":\"https://www.speedrun.com/plateup/run/mkdn2pvy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=QHjYoSp1zn0\"}]},\"comment\":\"Duo Steak\\r\\nRandom seed\\r\\nCards:\\r\\nSteak\\r\\nThin cut Steak\\r\\nCharming\\r\\nSteak Sauce - Red Wine Jus\\r\\nTrick - Spooky Solos\\r\\nPhotographic Memory\",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-11-08T15:28:17Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x3wqp5qj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wqp5qj\"},{\"rel\":\"user\",\"id\":\"8106vqqx\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106vqqx\"}],\"date\":\"2022-11-08\",\"submitted\":\"2022-11-08T06:41:41Z\",\"times\":{\"primary\":\"PT38M44.210S\",\"primary_t\":2324.21,\"realtime\":\"PT38M44.210S\",\"realtime_t\":2324.21,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"zqo7n641\"}}},{\"place\":41,\"run\":{\"id\":\"z5xelq5y\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xelq5y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=H9vN098YVlQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-09-19T01:57:48Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"81kp03rj\",\"uri\":\"https://www.speedrun.com/api/v1/users/81kp03rj\"}],\"date\":\"2022-09-17\",\"submitted\":\"2022-09-18T03:20:24Z\",\"times\":{\"primary\":\"PT38M44.370S\",\"primary_t\":2324.37,\"realtime\":\"PT38M44.370S\",\"realtime_t\":2324.37,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"4qy0692l\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":42,\"run\":{\"id\":\"z5e7d8gz\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5e7d8gz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=kz3_BszjRCE\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-12-20T10:56:25Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"x76ovzrj\",\"uri\":\"https://www.speedrun.com/api/v1/users/x76ovzrj\"}],\"date\":\"2022-12-19\",\"submitted\":\"2022-12-20T01:03:32Z\",\"times\":{\"primary\":\"PT39M3.920S\",\"primary_t\":2343.92,\"realtime\":\"PT39M3.920S\",\"realtime_t\":2343.92,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"81w0vp6l\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":43,\"run\":{\"id\":\"z5xw0xjy\",\"weblink\":\"https://www.speedrun.com/plateup/run/z5xw0xjy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/l98mu4Spkqo\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-10-20T00:19:55Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"816n2rpx\",\"uri\":\"https://www.speedrun.com/api/v1/users/816n2rpx\"},{\"rel\":\"user\",\"id\":\"j26owv6x\",\"uri\":\"https://www.speedrun.com/api/v1/users/j26owv6x\"}],\"date\":\"2022-10-19\",\"submitted\":\"2022-10-19T19:28:20Z\",\"times\":{\"primary\":\"PT39M32.610S\",\"primary_t\":2372.61,\"realtime\":\"PT39M32.610S\",\"realtime_t\":2372.61,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"814n25el\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":44,\"run\":{\"id\":\"y4x8wwnz\",\"weblink\":\"https://www.speedrun.com/plateup/run/y4x8wwnz\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/cVoasL-CLrs\"}]},\"comment\":\"Not the fastest run, but good enough for a blind run. I need to edit my recording settings. There's like 2 pixels in the video lol\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-01T08:31:27Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j206oplx\",\"uri\":\"https://www.speedrun.com/api/v1/users/j206oplx\"}],\"date\":\"2022-08-31\",\"submitted\":\"2022-09-01T07:12:36Z\",\"times\":{\"primary\":\"PT40M57.180S\",\"primary_t\":2457.18,\"realtime\":\"PT40M57.180S\",\"realtime_t\":2457.18,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"0q5r66n1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":45,\"run\":{\"id\":\"yl1xv23m\",\"weblink\":\"https://www.speedrun.com/plateup/run/yl1xv23m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=cEv03zXO8Rg\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-10-07T01:55:01Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"8q6p65dj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6p65dj\"}],\"date\":\"2022-10-05\",\"submitted\":\"2022-10-06T23:52:08Z\",\"times\":{\"primary\":\"PT43M14.690S\",\"primary_t\":2594.69,\"realtime\":\"PT43M14.690S\",\"realtime_t\":2594.69,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":{\"rel\":\"splits.io\",\"uri\":\"https://splits.io/api/v3/runs/9zyh\"},\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"81wk7g61\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":46,\"run\":{\"id\":\"mkv83xly\",\"weblink\":\"https://www.speedrun.com/plateup/run/mkv83xly\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/XVMdEWo8puQ\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2023-01-01T11:05:27Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xz0vp498\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz0vp498\"},{\"rel\":\"user\",\"id\":\"jnpqvrq8\",\"uri\":\"https://www.speedrun.com/api/v1/users/jnpqvrq8\"}],\"date\":\"2022-12-31\",\"submitted\":\"2023-01-01T02:27:15Z\",\"times\":{\"primary\":\"PT43M37.230S\",\"primary_t\":2617.23,\"realtime\":\"PT43M37.230S\",\"realtime_t\":2617.23,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"jqz3yeg1\",\"wlekw94l\":\"p127nnkq\",\"5lyx19gn\":\"rqvy377q\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":0,\"run\":{\"id\":\"mrr6dr4m\",\"weblink\":\"https://www.speedrun.com/plateup/run/mrr6dr4m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=EH5yCk38Qwo&t=6s\"}]},\"comment\":\"Mod Note: For future runs, the timer cannot block the seed.\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-04T07:08:12Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"81kp03rj\",\"uri\":\"https://www.speedrun.com/api/v1/users/81kp03rj\"}],\"date\":\"2022-09-03\",\"submitted\":\"2022-09-03T19:53:37Z\",\"times\":{\"primary\":\"PT43M50.450S\",\"primary_t\":2630.45,\"realtime\":\"PT43M50.450S\",\"realtime_t\":2630.45,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"zgq138vy\",\"weblink\":\"https://www.speedrun.com/plateup/run/zgq138vy\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=XHPEi-HQyq8\"}]},\"comment\":\"PIZZDA\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-11-02T11:28:29Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j06lqpwj\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06lqpwj\"},{\"rel\":\"user\",\"id\":\"xyo9n6nj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyo9n6nj\"},{\"rel\":\"user\",\"id\":\"8lok5g48\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lok5g48\"}],\"date\":\"2022-10-31\",\"submitted\":\"2022-10-31T20:04:07Z\",\"times\":{\"primary\":\"PT45M10.360S\",\"primary_t\":2710.36,\"realtime\":\"PT45M10.360S\",\"realtime_t\":2710.36,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"814n6gel\",\"p855yjv8\":\"81wk8x61\"}}},{\"place\":47,\"run\":{\"id\":\"m7x6ww0y\",\"weblink\":\"https://www.speedrun.com/plateup/run/m7x6ww0y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1583462434?collection=cJQHCXJGEhejLA\"}]},\"comment\":\"borgor\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-07T04:00:52Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xk131d2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk131d2j\"},{\"rel\":\"user\",\"id\":\"xyomozvj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyomozvj\"},{\"rel\":\"user\",\"id\":\"8ewkw468\",\"uri\":\"https://www.speedrun.com/api/v1/users/8ewkw468\"},{\"rel\":\"user\",\"id\":\"8q6o627j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6o627j\"}],\"date\":\"2022-09-06\",\"submitted\":\"2022-09-06T13:04:13Z\",\"times\":{\"primary\":\"PT46M21.240S\",\"primary_t\":2781.24,\"realtime\":\"PT46M21.240S\",\"realtime_t\":2781.24,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"xqkvddyl\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":48,\"run\":{\"id\":\"m7x2qo5y\",\"weblink\":\"https://www.speedrun.com/plateup/run/m7x2qo5y\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1591250753\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-15T05:08:10Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jprnl5k8\",\"uri\":\"https://www.speedrun.com/api/v1/users/jprnl5k8\"}],\"date\":\"2022-09-14\",\"submitted\":\"2022-09-15T01:32:37Z\",\"times\":{\"primary\":\"PT46M39.310S\",\"primary_t\":2799.31,\"realtime\":\"PT46M39.310S\",\"realtime_t\":2799.31,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":49,\"run\":{\"id\":\"z0lo6q9z\",\"weblink\":\"https://www.speedrun.com/plateup/run/z0lo6q9z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=_psbFlAyavg\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"x3wq6y2j\",\"verify-date\":\"2022-09-01T21:19:40Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"jnznzlqj\",\"uri\":\"https://www.speedrun.com/api/v1/users/jnznzlqj\"}],\"date\":\"2022-09-01\",\"submitted\":\"2022-09-01T20:05:59Z\",\"times\":{\"primary\":\"PT46M59.015S\",\"primary_t\":2819.015,\"realtime\":\"PT46M59.015S\",\"realtime_t\":2819.015,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lm5yy4q\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"jq6dpd31\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":0,\"run\":{\"id\":\"yv0rqq4z\",\"weblink\":\"https://www.speedrun.com/plateup/run/yv0rqq4z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.twitch.tv/videos/1583462435?collection=cJQHCXJGEhejLA\"}]},\"comment\":\"pizza in my tummy\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-07T03:53:02Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xk131d2j\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk131d2j\"},{\"rel\":\"user\",\"id\":\"xyomozvj\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyomozvj\"},{\"rel\":\"user\",\"id\":\"8ewkw468\",\"uri\":\"https://www.speedrun.com/api/v1/users/8ewkw468\"},{\"rel\":\"user\",\"id\":\"8q6o627j\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6o627j\"}],\"date\":\"2022-09-06\",\"submitted\":\"2022-09-06T12:52:42Z\",\"times\":{\"primary\":\"PT48M4.970S\",\"primary_t\":2884.97,\"realtime\":\"PT48M4.970S\",\"realtime_t\":2884.97,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"xqkvddyl\",\"5lyx19gn\":\"5lej75m1\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":50,\"run\":{\"id\":\"meeorj3m\",\"weblink\":\"https://www.speedrun.com/plateup/run/meeorj3m\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://youtu.be/GSPyFcfLoDM\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2023-01-01T11:04:01Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j20o5d6x\",\"uri\":\"https://www.speedrun.com/api/v1/users/j20o5d6x\"},{\"rel\":\"user\",\"id\":\"8d0rn9ox\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d0rn9ox\"},{\"rel\":\"user\",\"id\":\"8w06moqj\",\"uri\":\"https://www.speedrun.com/api/v1/users/8w06moqj\"}],\"date\":\"2022-12-30\",\"submitted\":\"2022-12-30T20:43:05Z\",\"times\":{\"primary\":\"PT48M31.100S\",\"primary_t\":2911.1,\"realtime\":\"PT48M31.100S\",\"realtime_t\":2911.1,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"5lejooz1\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"814w34jl\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":51,\"run\":{\"id\":\"m3x6xegm\",\"weblink\":\"https://www.speedrun.com/plateup/run/m3x6xegm\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=dfFnQB0peg0\"}]},\"comment\":\"Basically, a casual run done fast.\\r\\nThere is a hiccup at 38 minutes, where I restarted the game because I started the day without my thicc steak.\\r\\nNo rules against it, lost 8 minutes for it, oh well.\\r\\n(run will be up 20 minutes after this posts)\",\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2022-09-03T07:49:33Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"qjn92dwx\",\"uri\":\"https://www.speedrun.com/api/v1/users/qjn92dwx\"}],\"date\":\"2022-09-02\",\"submitted\":\"2022-09-02T17:30:36Z\",\"times\":{\"primary\":\"PT50M31.440S\",\"primary_t\":3031.44,\"realtime\":\"PT50M31.440S\",\"realtime_t\":3031.44,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"4lxnzzr1\",\"wlekw94l\":\"z19n33kq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"5lm9n001\"}}},{\"place\":52,\"run\":{\"id\":\"m72d719z\",\"weblink\":\"https://www.speedrun.com/plateup/run/m72d719z\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=_FhGDm1QOGo\"}]},\"comment\":null,\"status\":{\"status\":\"verified\",\"examiner\":\"kj9d37x4\",\"verify-date\":\"2023-01-14T05:04:44Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"j40wd4l8\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40wd4l8\"},{\"rel\":\"user\",\"id\":\"jmz0e1ex\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0e1ex\"},{\"rel\":\"user\",\"id\":\"8v2n9oej\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2n9oej\"}],\"date\":\"2023-01-13\",\"submitted\":\"2023-01-13T21:22:11Z\",\"times\":{\"primary\":\"PT51M15.660S\",\"primary_t\":3075.66,\"realtime\":\"PT51M15.660S\",\"realtime_t\":3075.66,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"9qj3rrgl\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"gq7x0jyl\",\"p855yjv8\":\"5lexvemq\",\"onv4xmwn\":\"klr2e601\"}}},{\"place\":53,\"run\":{\"id\":\"m721kwez\",\"weblink\":\"https://www.speedrun.com/plateup/run/m721kwez\",\"game\":\"yd4kq3k6\",\"level\":null,\"category\":\"z275n0gk\",\"videos\":{\"links\":[{\"uri\":\"https://www.youtube.com/watch?v=rWC79DPA54U\"}]},\"comment\":\"This run got rejected Yesterday cause the video was private my bad on that one, but it is public now. Again I dont think I did live split integration correctly  but this is my first speed run ever with my friends and time is correct. Sorry about that again.\",\"status\":{\"status\":\"verified\",\"examiner\":\"jn2d05dj\",\"verify-date\":\"2022-12-05T07:49:19Z\"},\"players\":[{\"rel\":\"user\",\"id\":\"xk3d2d78\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk3d2d78\"},{\"rel\":\"user\",\"id\":\"8d07dzox\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d07dzox\"},{\"rel\":\"guest\",\"name\":\"TuckerAndrews17\",\"uri\":\"https://www.speedrun.com/api/v1/guests/TuckerAndrews17\"}],\"date\":\"2022-12-01\",\"submitted\":\"2022-12-01T18:52:01Z\",\"times\":{\"primary\":\"PT56M30.160S\",\"primary_t\":3390.16,\"realtime\":\"PT56M30.160S\",\"realtime_t\":3390.16,\"realtime_noloads\":null,\"realtime_noloads_t\":0,\"ingame\":null,\"ingame_t\":0},\"system\":{\"platform\":\"8gej2n93\",\"emulated\":false,\"region\":null},\"splits\":null,\"values\":{\"2lg135el\":\"jq6dmm71\",\"wl3d19v8\":\"81wygg5q\",\"wlekw94l\":\"81p9jjkq\",\"5lyx19gn\":\"klrgm92q\",\"p855yjv8\":\"zqo7n641\",\"onv4xmwn\":\"klr2e601\"}}}],\"links\":[{\"rel\":\"game\",\"uri\":\"https://www.speedrun.com/api/v1/games/yd4kq3k6\"},{\"rel\":\"category\",\"uri\":\"https://www.speedrun.com/api/v1/categories/z275n0gk\"}],\"players\":{\"data\":[{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6qdloj\",\"names\":{\"international\":\"zzumiess\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/zzumiess\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2023-01-01T22:54:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6qdloj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6qdloj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"names\":{\"international\":\"spectater\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/spectater\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-23T02:09:14Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonqpdl8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonqpdl8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"names\":{\"international\":\"iForgot\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/iForgot\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:41:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk146ykj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk146ykj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"kj9d37x4\",\"names\":{\"international\":\"SwankyKoala\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"\",\"weblink\":\"https://www.speedrun.com/user/SwankyKoala\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"},\"color-to\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2015-03-16T08:17:25Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}},\"region\":{\"code\":\"au/qld\",\"names\":{\"international\":\"Queensland, Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCnXDCqYkoA-JSbN8vIpUKMQ/feed\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/kj9d37x4/image?v=9627389\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/kj9d37x4\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=kj9d37x4\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=kj9d37x4\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/kj9d37x4/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"68wkm38g\",\"names\":{\"international\":\"Imanex\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"\",\"weblink\":\"https://www.speedrun.com/user/Imanex\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2014-08-22T13:14:54Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}},\"region\":{\"code\":\"au/nsw\",\"names\":{\"international\":\"New South Wales, Australia\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/imanex01\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/user/jumpstart2109\"},\"twitter\":{\"uri\":\"https://www.twitter.com/Imanex_\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/68wkm38g/image?v=983e768\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/68wkm38g\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=68wkm38g\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=68wkm38g\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/68wkm38g/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8lo132l8\",\"names\":{\"international\":\"blacenrat\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/blacenrat\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2023-01-09T02:56:06Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lo132l8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8lo132l8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8lo132l8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lo132l8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8106zrpx\",\"names\":{\"international\":\"Hornlet\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Hornlet\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"},\"color-to\":{\"light\":\"#EF2081\",\"dark\":\"#FF3091\"}},\"role\":\"user\",\"signup\":\"2022-08-27T06:08:14Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106zrpx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8106zrpx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8106zrpx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106zrpx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3w61lkj\",\"names\":{\"international\":\"bunnybrittany\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/bunnybrittany\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-25T21:59:37Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3w61lkj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3w61lkj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3w61lkj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3w61lkj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"names\":{\"international\":\"iForgot\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/iForgot\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:41:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk146ykj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk146ykj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xzlw5ve8\",\"names\":{\"international\":\"angrytetris\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/angrytetris\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#E762B5\",\"dark\":\"#F772C5\"},\"color-to\":{\"light\":\"#E762B5\",\"dark\":\"#F772C5\"}},\"role\":\"user\",\"signup\":\"2022-01-20T17:14:08Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}},\"region\":{\"code\":\"us/oh\",\"names\":{\"international\":\"Ohio, USA\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/angrytetris\"},\"hitbox\":null,\"youtube\":null,\"twitter\":{\"uri\":\"https://www.twitter.com/angrytetris\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/xzlw5ve8/image?v=d97a5b2\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xzlw5ve8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xzlw5ve8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xzlw5ve8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xzlw5ve8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8106gprx\",\"names\":{\"international\":\"Inkks\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Inkks\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-27T21:56:27Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106gprx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8106gprx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8106gprx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106gprx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8rl79zw8\",\"names\":{\"international\":\"DasFenrir\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/DasFenrir\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-28T16:55:00Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8rl79zw8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8rl79zw8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8rl79zw8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8rl79zw8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6qdloj\",\"names\":{\"international\":\"zzumiess\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/zzumiess\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2023-01-01T22:54:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6qdloj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6qdloj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"names\":{\"international\":\"spectater\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/spectater\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-23T02:09:14Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonqpdl8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonqpdl8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"names\":{\"international\":\"iForgot\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/iForgot\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:41:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk146ykj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk146ykj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j06lqpwj\",\"names\":{\"international\":\"N1ghtMan\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/N1ghtMan\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#009856\",\"dark\":\"#09B876\"},\"color-to\":{\"light\":\"#FFB3F3\",\"dark\":\"#FFB3F3\"}},\"role\":\"user\",\"signup\":\"2022-10-31T01:26:28Z\",\"location\":{\"country\":{\"code\":\"md\",\"names\":{\"international\":\"Moldova\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06lqpwj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j06lqpwj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j06lqpwj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06lqpwj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xyo9n6nj\",\"names\":{\"international\":\"makemeblevota\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/makemeblevota\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#E762B5\",\"dark\":\"#F772C5\"},\"color-to\":{\"light\":\"#000000\",\"dark\":\"#FFFFFF\"}},\"role\":\"user\",\"signup\":\"2022-10-31T01:24:42Z\",\"location\":{\"country\":{\"code\":\"md\",\"names\":{\"international\":\"Moldova\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/makemeblevota\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyo9n6nj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xyo9n6nj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xyo9n6nj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyo9n6nj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8lok5g48\",\"names\":{\"international\":\"Deventeex\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/Deventeex\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF2081\",\"dark\":\"#FF3091\"}},\"role\":\"user\",\"signup\":\"2022-10-31T01:25:12Z\",\"location\":{\"country\":{\"code\":\"md\",\"names\":{\"international\":\"Moldova\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lok5g48\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8lok5g48\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8lok5g48\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lok5g48/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"names\":{\"international\":\"iForgot\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/iForgot\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:41:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk146ykj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk146ykj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j06o3q4j\",\"names\":{\"international\":\"DogKant\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/DogKant\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-03T11:05:15Z\",\"location\":{\"country\":{\"code\":\"va\",\"names\":{\"international\":\"Vatican City\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06o3q4j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j06o3q4j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j06o3q4j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06o3q4j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8lon3mr8\",\"names\":{\"international\":\"Truc\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Truc\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#FFB3F3\",\"dark\":\"#FFB3F3\"},\"color-to\":{\"light\":\"#E762B5\",\"dark\":\"#F772C5\"}},\"role\":\"user\",\"signup\":\"2022-12-05T14:13:33Z\",\"location\":{\"country\":{\"code\":\"hr\",\"names\":{\"international\":\"Croatia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/8lon3mr8/image?v=373b261\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lon3mr8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8lon3mr8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8lon3mr8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lon3mr8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6r5loj\",\"names\":{\"international\":\"PandaPenguin\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PandaPenguin\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:45:24Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6r5loj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6r5loj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6r5loj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v205z2j\",\"names\":{\"international\":\"vexicra\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/vexicra\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-23T00:40:55Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v205z2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v205z2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v205z2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8d04ddmx\",\"names\":{\"international\":\"slightly\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/slightly\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EF2081\",\"dark\":\"#FF3091\"}},\"role\":\"user\",\"signup\":\"2022-09-04T02:00:59Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d04ddmx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8d04ddmx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8d04ddmx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d04ddmx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8gezm2yj\",\"names\":{\"international\":\"Questie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Questie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2020-05-27T18:34:39Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}},\"region\":{\"code\":\"us/in\",\"names\":{\"international\":\"Indiana, USA\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/8gezm2yj/image?v=311d12a\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8gezm2yj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8gezm2yj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8gezm2yj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8gezm2yj/personal-bests\"}]},{\"rel\":\"guest\",\"name\":\"savagebeast\",\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/guests/savagebeast\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?guest=savagebeast\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"guest\",\"name\":\"KingdomofKroz\",\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/guests/KingdomofKroz\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?guest=KingdomofKroz\"}]},{\"rel\":\"user\",\"id\":\"8q6qdloj\",\"names\":{\"international\":\"zzumiess\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/zzumiess\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2023-01-01T22:54:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6qdloj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6qdloj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6qdloj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"names\":{\"international\":\"spectater\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/spectater\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-23T02:09:14Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonqpdl8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonqpdl8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8wl1n2qj\",\"names\":{\"international\":\"Kardi\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/Kardi\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2021-01-04T03:09:17Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Kardi\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8wl1n2qj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8wl1n2qj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8wl1n2qj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8wl1n2qj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"guest\",\"name\":\"KingdomofKroz\",\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/guests/KingdomofKroz\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?guest=KingdomofKroz\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jp6qpq48\",\"names\":{\"international\":\"TheOneZachs\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/TheOneZachs\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-27T17:59:50Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp6qpq48\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jp6qpq48\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jp6qpq48\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp6qpq48/personal-bests\"}]},{\"rel\":\"guest\",\"name\":\"Alliekat\",\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/guests/Alliekat\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?guest=Alliekat\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"kj9d37x4\",\"names\":{\"international\":\"SwankyKoala\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"\",\"weblink\":\"https://www.speedrun.com/user/SwankyKoala\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"},\"color-to\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2015-03-16T08:17:25Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}},\"region\":{\"code\":\"au/qld\",\"names\":{\"international\":\"Queensland, Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCnXDCqYkoA-JSbN8vIpUKMQ/feed\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/kj9d37x4/image?v=9627389\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/kj9d37x4\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=kj9d37x4\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=kj9d37x4\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/kj9d37x4/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xy5yrzn8\",\"names\":{\"international\":\"Hisakaki_Ui\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Hisakaki_Ui\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2020-05-26T18:10:34Z\",\"location\":{\"country\":{\"code\":\"jp\",\"names\":{\"international\":\"Japan\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UC1CsDaJwtnF8LpwtEqw4P7g\"},\"twitter\":{\"uri\":\"https://www.twitter.com/ui_hisakaki\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/xy5yrzn8/image?v=f09d9e9\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xy5yrzn8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xy5yrzn8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xy5yrzn8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xy5yrzn8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"zx7nqwv8\",\"names\":{\"international\":\"Vermicious\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"\",\"weblink\":\"https://www.speedrun.com/user/Vermicious\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"},\"color-to\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2019-06-05T22:02:44Z\",\"location\":{\"country\":{\"code\":\"gb/wls\",\"names\":{\"international\":\"Wales\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Vermicious\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/zx7nqwv8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=zx7nqwv8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=zx7nqwv8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/zx7nqwv8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wqp5qj\",\"names\":{\"international\":\"bsflames\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"She/Her, They/Them\",\"weblink\":\"https://www.speedrun.com/user/bsflames\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"},\"color-to\":{\"light\":\"#DAA520\",\"dark\":\"#F0C03E\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:51:09Z\",\"location\":{\"country\":{\"code\":\"ph\",\"names\":{\"international\":\"Philippines\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wqp5qj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wqp5qj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wqp5qj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wqp5qj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j40eoqw8\",\"names\":{\"international\":\"MaeNyx\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"She/Her\",\"weblink\":\"https://www.speedrun.com/user/MaeNyx\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-11-22T02:13:29Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40eoqw8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j40eoqw8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j40eoqw8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40eoqw8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jmz0m7zx\",\"names\":{\"international\":\"Kulutues\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Kulutues\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-10-22T10:50:24Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Kulutues\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCYO2mBpwOeDozkdTrEIrLkQ\"},\"twitter\":{\"uri\":\"https://www.twitter.com/Kulutues2332\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":\"https://www.speedrun.com/userasset/jmz0m7zx/icon?v=4628065\"},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/jmz0m7zx/image?v=e3cff17\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jmz0m7zx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jmz0m7zx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j9py4rwx\",\"names\":{\"international\":\"switch227\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/switch227\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-10-23T13:23:02Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/switch227\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/j9py4rwx/image?v=80caaac\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j9py4rwx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j9py4rwx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"names\":{\"international\":\"iForgot\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/iForgot\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:41:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk146ykj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk146ykj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x767qeyj\",\"names\":{\"international\":\"pjmangopie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/pjmangopie\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2022-09-22T23:08:04Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/pjmangopie\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCPqw_JAhK23icYsIwD2NV-Q\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/x767qeyj/image?v=5733aca\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x767qeyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x767qeyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x767qeyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8g5vr01j\",\"names\":{\"international\":\"SingularByte\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/SingularByte\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#808080\",\"dark\":\"#B8B8B8\"},\"color-to\":{\"light\":\"#808080\",\"dark\":\"#B8B8B8\"}},\"role\":\"user\",\"signup\":\"2021-11-23T20:13:18Z\",\"location\":{\"country\":{\"code\":\"gb\",\"names\":{\"international\":\"United Kingdom\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/8g5vr01j/image?v=08bf9a3\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8g5vr01j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8g5vr01j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8g5vr01j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8g5vr01j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonqpdl8\",\"names\":{\"international\":\"spectater\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/spectater\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-23T02:09:14Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonqpdl8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonqpdl8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonqpdl8/personal-bests\"}]},{\"rel\":\"guest\",\"name\":\"zzumiess\",\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/guests/zzumiess\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?guest=zzumiess\"}]},{\"rel\":\"user\",\"id\":\"zx7nqwv8\",\"names\":{\"international\":\"Vermicious\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"\",\"weblink\":\"https://www.speedrun.com/user/Vermicious\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"},\"color-to\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2019-06-05T22:02:44Z\",\"location\":{\"country\":{\"code\":\"gb/wls\",\"names\":{\"international\":\"Wales\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Vermicious\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/zx7nqwv8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=zx7nqwv8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=zx7nqwv8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/zx7nqwv8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"names\":{\"international\":\"iForgot\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/iForgot\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:41:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk146ykj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk146ykj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk1392kj\",\"names\":{\"international\":\"Keroia\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Keroia\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-12T06:16:41Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk1392kj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk1392kj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk1392kj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk1392kj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j03pp49j\",\"names\":{\"international\":\"DariusJames\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/DariusJames\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2021-04-26T20:34:06Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}},\"region\":{\"code\":\"us/il\",\"names\":{\"international\":\"Illinois, USA\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/dariusjames\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j03pp49j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j03pp49j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j03pp49j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j03pp49j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j40p6om8\",\"names\":{\"international\":\"ambersz\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/ambersz\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-10-06T16:16:02Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40p6om8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j40p6om8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j40p6om8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40p6om8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"e8ez5nd8\",\"names\":{\"international\":\"Nivrad00\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/Nivrad00\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#DAA520\",\"dark\":\"#F0C03E\"},\"color-to\":{\"light\":\"#EF8239\",\"dark\":\"#EF8241\"}},\"role\":\"user\",\"signup\":\"2017-08-31T19:47:45Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":{\"uri\":\"https://www.twitter.com/nivrad00\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/e8ez5nd8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=e8ez5nd8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=e8ez5nd8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/e8ez5nd8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jmz0m7zx\",\"names\":{\"international\":\"Kulutues\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Kulutues\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-10-22T10:50:24Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Kulutues\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCYO2mBpwOeDozkdTrEIrLkQ\"},\"twitter\":{\"uri\":\"https://www.twitter.com/Kulutues2332\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":\"https://www.speedrun.com/userasset/jmz0m7zx/icon?v=4628065\"},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/jmz0m7zx/image?v=e3cff17\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jmz0m7zx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jmz0m7zx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j9py4rwx\",\"names\":{\"international\":\"switch227\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/switch227\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-10-23T13:23:02Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/switch227\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/j9py4rwx/image?v=80caaac\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j9py4rwx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j9py4rwx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jp6mkry8\",\"names\":{\"international\":\"JAGeezus\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/JAGeezus\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-31T19:41:25Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp6mkry8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jp6mkry8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jp6mkry8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp6mkry8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jmz0m7zx\",\"names\":{\"international\":\"Kulutues\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Kulutues\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-10-22T10:50:24Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Kulutues\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCYO2mBpwOeDozkdTrEIrLkQ\"},\"twitter\":{\"uri\":\"https://www.twitter.com/Kulutues2332\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":\"https://www.speedrun.com/userasset/jmz0m7zx/icon?v=4628065\"},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/jmz0m7zx/image?v=e3cff17\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jmz0m7zx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jmz0m7zx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0m7zx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j9py4rwx\",\"names\":{\"international\":\"switch227\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/switch227\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-10-23T13:23:02Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/switch227\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/j9py4rwx/image?v=80caaac\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j9py4rwx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j9py4rwx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j9py4rwx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8lozmq78\",\"names\":{\"international\":\"BuzzyNutkins\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/BuzzyNutkins\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-10-30T08:35:48Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lozmq78\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8lozmq78\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8lozmq78\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lozmq78/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wq6y2j\",\"names\":{\"international\":\"CaramelBob\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/CaramelBob\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T03:13:39Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wq6y2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wq6y2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wq6y2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2k0l2j\",\"names\":{\"international\":\"Shawthing\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Shawthing\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:08:59Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2k0l2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2k0l2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2k0l2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"o860y7q8\",\"names\":{\"international\":\"ChuckRNorris\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"\",\"weblink\":\"https://www.speedrun.com/user/ChuckRNorris\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2018-11-05T00:38:53Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCjORRYHAlLggCslahoz3smw%3F\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/o860y7q8/image?v=479291e\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/o860y7q8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=o860y7q8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=o860y7q8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/o860y7q8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"y8dvreg8\",\"names\":{\"international\":\"jtkepic\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/jtkepic\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"},\"color-to\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2018-10-27T18:23:56Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}},\"region\":{\"code\":\"us/nj\",\"names\":{\"international\":\"New Jersey, USA\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/jtkepic\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCqOM9JTDxP_GQUoUB1hqdcA\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/y8dvreg8/image?v=2fa7a15\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/y8dvreg8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=y8dvreg8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=y8dvreg8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/y8dvreg8/personal-bests\"}]},{\"rel\":\"guest\",\"name\":\"Jawnee4\",\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/guests/Jawnee4\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?guest=Jawnee4\"}]},{\"rel\":\"user\",\"id\":\"xz1gwk0j\",\"names\":{\"international\":\"gc_monster7\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/gc_monster7\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-07-21T10:42:55Z\",\"location\":{\"country\":{\"code\":\"vn\",\"names\":{\"international\":\"Vietnam\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz1gwk0j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz1gwk0j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz1gwk0j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j06370wj\",\"names\":{\"international\":\"Deggradedrook\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"She/Her\",\"weblink\":\"https://www.speedrun.com/user/Deggradedrook\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#E762B5\",\"dark\":\"#F772C5\"}},\"role\":\"user\",\"signup\":\"2022-08-28T00:46:10Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06370wj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j06370wj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j06370wj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06370wj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8g0owwrx\",\"names\":{\"international\":\"snailsHouse\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/snailsHouse\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-10-15T15:59:27Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8g0owwrx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8g0owwrx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8g0owwrx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8g0owwrx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8644gy3j\",\"names\":{\"international\":\"Chemoony\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Chemoony\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#E762B5\",\"dark\":\"#F772C5\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-09-12T17:57:59Z\",\"location\":{\"country\":{\"code\":\"be\",\"names\":{\"international\":\"Belgium\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8644gy3j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8644gy3j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8644gy3j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8644gy3j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v227gyj\",\"names\":{\"international\":\"PlateUp\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/PlateUp\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-15T20:43:34Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v227gyj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v227gyj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v227gyj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v227gyj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jn2d05dj\",\"names\":{\"international\":\"Jonesy_Alr\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him, They/Them\",\"weblink\":\"https://www.speedrun.com/user/Jonesy_Alr\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"},\"color-to\":{\"light\":\"#EF2081\",\"dark\":\"#FF3091\"}},\"role\":\"user\",\"signup\":\"2022-07-10T11:00:46Z\",\"location\":{\"country\":{\"code\":\"gb/eng\",\"names\":{\"international\":\"England\",\"japanese\":null}},\"region\":{\"code\":\"gb/eng/gtm\",\"names\":{\"international\":\"Greater Manchester, England\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Jonesy_Alr\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/user/jonesyboy0073\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":\"https://www.speedrun.com/userasset/jn2d05dj/icon?v=6e71a5a\"},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jn2d05dj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jn2d05dj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jn2d05dj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jn2d05dj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jp642d28\",\"names\":{\"international\":\"SmartFridg\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/SmartFridg\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-26T13:29:51Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp642d28\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jp642d28\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jp642d28\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jp642d28/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jonp1338\",\"names\":{\"international\":\"redorangegamez\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/redorangegamez\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:50:43Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jonp1338\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jonp1338\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jonp1338/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk146ykj\",\"names\":{\"international\":\"iForgot\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/iForgot\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:41:18Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk146ykj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk146ykj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk146ykj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x76m6wvj\",\"names\":{\"international\":\"Josk\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Josk\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-30T11:01:59Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x76m6wvj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x76m6wvj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x76m6wvj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x76m6wvj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j06vgk4j\",\"names\":{\"international\":\"mrhotdogbun47\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/mrhotdogbun47\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-30T02:55:11Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06vgk4j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j06vgk4j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j06vgk4j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06vgk4j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x3wqp5qj\",\"names\":{\"international\":\"bsflames\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"She/Her, They/Them\",\"weblink\":\"https://www.speedrun.com/user/bsflames\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"},\"color-to\":{\"light\":\"#DAA520\",\"dark\":\"#F0C03E\"}},\"role\":\"user\",\"signup\":\"2022-08-24T04:51:09Z\",\"location\":{\"country\":{\"code\":\"ph\",\"names\":{\"international\":\"Philippines\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wqp5qj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x3wqp5qj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x3wqp5qj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x3wqp5qj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8106vqqx\",\"names\":{\"international\":\"lumina03\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/lumina03\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-08-24T15:08:46Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106vqqx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8106vqqx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8106vqqx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8106vqqx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"81kp03rj\",\"names\":{\"international\":\"MariOStorm5\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/MariOStorm5\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#DAA520\",\"dark\":\"#F0C03E\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-05-21T20:25:19Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/81kp03rj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=81kp03rj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=81kp03rj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/81kp03rj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"x76ovzrj\",\"names\":{\"international\":\"mythos_\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/mythos_\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-19T01:06:20Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/x76ovzrj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=x76ovzrj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=x76ovzrj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/x76ovzrj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"816n2rpx\",\"names\":{\"international\":\"QQ33\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/QQ33\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"},\"color-to\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2021-05-24T10:53:38Z\",\"location\":{\"country\":{\"code\":\"nl\",\"names\":{\"international\":\"Netherlands\",\"japanese\":null}},\"region\":{\"code\":\"nl/ge\",\"names\":{\"international\":\"Gelderland, Netherlands\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Quintus03\"},\"hitbox\":null,\"youtube\":null,\"twitter\":{\"uri\":\"https://www.twitter.com/Quintus003\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/816n2rpx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=816n2rpx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=816n2rpx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/816n2rpx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j26owv6x\",\"names\":{\"international\":\"bas0\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/bas0\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"},\"color-to\":{\"light\":\"#EF2081\",\"dark\":\"#FF3091\"}},\"role\":\"user\",\"signup\":\"2021-10-01T15:22:04Z\",\"location\":{\"country\":{\"code\":\"nl\",\"names\":{\"international\":\"Netherlands\",\"japanese\":null}},\"region\":{\"code\":\"nl/ge\",\"names\":{\"international\":\"Gelderland, Netherlands\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/user/B.+Franken\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/j26owv6x/image?v=146813d\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j26owv6x\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j26owv6x\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j26owv6x\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j26owv6x/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j206oplx\",\"names\":{\"international\":\"RS_Mind\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/RS_Mind\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-01T04:18:49Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j206oplx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j206oplx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j206oplx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j206oplx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6p65dj\",\"names\":{\"international\":\"craftykaname\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"She/Her\",\"weblink\":\"https://www.speedrun.com/user/craftykaname\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#009856\",\"dark\":\"#09B876\"}},\"role\":\"user\",\"signup\":\"2022-10-05T23:03:46Z\",\"location\":null,\"twitch\":{\"uri\":\"https://www.twitch.tv/CraftyKaname\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/user/CraftyKaname\"},\"twitter\":{\"uri\":\"https://www.twitter.com/CraftyKaname\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":\"https://www.speedrun.com/userasset/8q6p65dj/icon?v=2bc5d79\"},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6p65dj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6p65dj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6p65dj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6p65dj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xz0vp498\",\"names\":{\"international\":\"Ausapp\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Ausapp\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-31T06:01:22Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz0vp498\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xz0vp498\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xz0vp498\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xz0vp498/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jnpqvrq8\",\"names\":{\"international\":\"ZOSG_NeverDieGaming\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/ZOSG_NeverDieGaming\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-31T06:16:13Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jnpqvrq8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jnpqvrq8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jnpqvrq8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jnpqvrq8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"81kp03rj\",\"names\":{\"international\":\"MariOStorm5\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/MariOStorm5\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#DAA520\",\"dark\":\"#F0C03E\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2022-05-21T20:25:19Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/81kp03rj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=81kp03rj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=81kp03rj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/81kp03rj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j06lqpwj\",\"names\":{\"international\":\"N1ghtMan\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/N1ghtMan\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#009856\",\"dark\":\"#09B876\"},\"color-to\":{\"light\":\"#FFB3F3\",\"dark\":\"#FFB3F3\"}},\"role\":\"user\",\"signup\":\"2022-10-31T01:26:28Z\",\"location\":{\"country\":{\"code\":\"md\",\"names\":{\"international\":\"Moldova\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06lqpwj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j06lqpwj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j06lqpwj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j06lqpwj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xyo9n6nj\",\"names\":{\"international\":\"makemeblevota\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/makemeblevota\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#E762B5\",\"dark\":\"#F772C5\"},\"color-to\":{\"light\":\"#000000\",\"dark\":\"#FFFFFF\"}},\"role\":\"user\",\"signup\":\"2022-10-31T01:24:42Z\",\"location\":{\"country\":{\"code\":\"md\",\"names\":{\"international\":\"Moldova\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/makemeblevota\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyo9n6nj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xyo9n6nj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xyo9n6nj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyo9n6nj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8lok5g48\",\"names\":{\"international\":\"Deventeex\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/Deventeex\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#EF2081\",\"dark\":\"#FF3091\"}},\"role\":\"user\",\"signup\":\"2022-10-31T01:25:12Z\",\"location\":{\"country\":{\"code\":\"md\",\"names\":{\"international\":\"Moldova\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lok5g48\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8lok5g48\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8lok5g48\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8lok5g48/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk131d2j\",\"names\":{\"international\":\"Matthehehew\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/Matthehehew\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#009856\",\"dark\":\"#09B876\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:35:58Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/matthehehew\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk131d2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk131d2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk131d2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk131d2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xyomozvj\",\"names\":{\"international\":\"BigRom101\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/BigRom101\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:36:44Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyomozvj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xyomozvj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xyomozvj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyomozvj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8ewkw468\",\"names\":{\"international\":\"floubb\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/floubb\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:43:47Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8ewkw468\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8ewkw468\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8ewkw468\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8ewkw468/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6o627j\",\"names\":{\"international\":\"LachieFroggie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/LachieFroggie\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:43:23Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6o627j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6o627j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6o627j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6o627j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jprnl5k8\",\"names\":{\"international\":\"TopherKirch\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/TopherKirch\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2020-09-18T03:22:34Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}},\"region\":{\"code\":\"us/ny\",\"names\":{\"international\":\"New York, USA\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/Fusshy\"},\"hitbox\":null,\"youtube\":null,\"twitter\":{\"uri\":\"https://www.twitter.com/TopherKirch\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":\"https://www.speedrun.com/userasset/jprnl5k8/icon?v=2d4825b\"},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/jprnl5k8/image?v=1f9d856\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jprnl5k8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jprnl5k8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jprnl5k8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jprnl5k8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jnznzlqj\",\"names\":{\"international\":\"Danger_Russ\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/Danger_Russ\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"},\"color-to\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"}},\"role\":\"user\",\"signup\":\"2021-04-12T14:22:52Z\",\"location\":{\"country\":{\"code\":\"gb/eng\",\"names\":{\"international\":\"England\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UC-gtyy1m7BcHWsEP16haAKQ\"},\"twitter\":{\"uri\":\"https://www.twitter.com/TheDangerRuss\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/jnznzlqj/image?v=2dc39c8\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jnznzlqj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jnznzlqj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jnznzlqj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jnznzlqj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk131d2j\",\"names\":{\"international\":\"Matthehehew\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/Matthehehew\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#009856\",\"dark\":\"#09B876\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:35:58Z\",\"location\":{\"country\":{\"code\":\"au\",\"names\":{\"international\":\"Australia\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/matthehehew\"},\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk131d2j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk131d2j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk131d2j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk131d2j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xyomozvj\",\"names\":{\"international\":\"BigRom101\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/BigRom101\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:36:44Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyomozvj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xyomozvj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xyomozvj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xyomozvj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8ewkw468\",\"names\":{\"international\":\"floubb\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/floubb\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:43:47Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8ewkw468\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8ewkw468\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8ewkw468\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8ewkw468/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8q6o627j\",\"names\":{\"international\":\"LachieFroggie\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/LachieFroggie\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-09-06T12:43:23Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6o627j\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8q6o627j\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8q6o627j\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8q6o627j/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j20o5d6x\",\"names\":{\"international\":\"MisfitMaid\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"She/Her\",\"weblink\":\"https://www.speedrun.com/user/MisfitMaid\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"},\"color-to\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2022-12-12T12:40:40Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}},\"region\":{\"code\":\"us/or/pl\",\"names\":{\"international\":\"Portland, OR, USA\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/MisfitMaid\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCSsTzqsjWo6xzRaoWlriESw\"},\"twitter\":{\"uri\":\"https://www.twitter.com/MisfitMaid\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":\"https://www.speedrun.com/userasset/j20o5d6x/icon?v=1ee9382\"},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/j20o5d6x/image?v=c5efbea\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j20o5d6x\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j20o5d6x\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j20o5d6x\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j20o5d6x/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8d0rn9ox\",\"names\":{\"international\":\"ZyberLynx\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/ZyberLynx\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#900090\",\"dark\":\"#A010A0\"},\"color-to\":{\"light\":\"#A259C5\",\"dark\":\"#C279E5\"}},\"role\":\"user\",\"signup\":\"2022-12-13T04:33:54Z\",\"location\":{\"country\":{\"code\":\"ca\",\"names\":{\"international\":\"Canada\",\"japanese\":null}},\"region\":{\"code\":\"ca/bc\",\"names\":{\"international\":\"British Columbia, Canada\",\"japanese\":null}}},\"twitch\":{\"uri\":\"https://www.twitch.tv/zyberlynx\"},\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/user/zyberlynx\"},\"twitter\":{\"uri\":\"https://www.twitter.com/ZyberLynx\"},\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d0rn9ox\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8d0rn9ox\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8d0rn9ox\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d0rn9ox/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8w06moqj\",\"names\":{\"international\":\"the4bestgame\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/the4bestgame\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-12-30T19:21:33Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8w06moqj\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8w06moqj\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8w06moqj\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8w06moqj/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"qjn92dwx\",\"names\":{\"international\":\"SporkSlinger\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/SporkSlinger\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"}},\"role\":\"user\",\"signup\":\"2016-09-08T09:46:21Z\",\"location\":{\"country\":{\"code\":\"us\",\"names\":{\"international\":\"United States\",\"japanese\":null}},\"region\":{\"code\":\"us/fl\",\"names\":{\"international\":\"Florida, USA\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":\"https://www.speedrun.com/userasset/qjn92dwx/image?v=f620e6e\"}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/qjn92dwx\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=qjn92dwx\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=qjn92dwx\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/qjn92dwx/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"j40wd4l8\",\"names\":{\"international\":\"MarB\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":\"He/Him\",\"weblink\":\"https://www.speedrun.com/user/MarB\",\"name-style\":{\"style\":\"gradient\",\"color-from\":{\"light\":\"#249BCE\",\"dark\":\"#44BBEE\"},\"color-to\":{\"light\":\"#4646CE\",\"dark\":\"#6666EE\"}},\"role\":\"user\",\"signup\":\"2022-10-23T10:49:32Z\",\"location\":{\"country\":{\"code\":\"pl\",\"names\":{\"international\":\"Poland\",\"japanese\":null}}},\"twitch\":null,\"hitbox\":null,\"youtube\":{\"uri\":\"https://www.youtube.com/channel/UCpV39hhhdBEgfe1K1zceWYQ/featured\"},\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40wd4l8\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=j40wd4l8\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=j40wd4l8\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/j40wd4l8/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"jmz0e1ex\",\"names\":{\"international\":\"NamelessSpeedrunner\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/NamelessSpeedrunner\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-10-26T14:59:59Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0e1ex\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=jmz0e1ex\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=jmz0e1ex\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/jmz0e1ex/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8v2n9oej\",\"names\":{\"international\":\"SPECHS\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/SPECHS\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2023-01-13T19:14:19Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2n9oej\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8v2n9oej\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8v2n9oej\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8v2n9oej/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"xk3d2d78\",\"names\":{\"international\":\"Zebby\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/Zebby\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#7AB941\",\"dark\":\"#8AC951\"}},\"role\":\"user\",\"signup\":\"2022-07-10T12:48:43Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk3d2d78\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=xk3d2d78\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=xk3d2d78\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/xk3d2d78/personal-bests\"}]},{\"rel\":\"user\",\"id\":\"8d07dzox\",\"names\":{\"international\":\"GameMouth\",\"japanese\":null},\"supporterAnimation\":false,\"pronouns\":null,\"weblink\":\"https://www.speedrun.com/user/GameMouth\",\"name-style\":{\"style\":\"solid\",\"color\":{\"light\":\"#EE2222\",\"dark\":\"#EE4444\"}},\"role\":\"user\",\"signup\":\"2022-11-30T01:26:15Z\",\"location\":null,\"twitch\":null,\"hitbox\":null,\"youtube\":null,\"twitter\":null,\"speedrunslive\":null,\"assets\":{\"icon\":{\"uri\":null},\"supporterIcon\":null,\"image\":{\"uri\":null}},\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d07dzox\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?user=8d07dzox\"},{\"rel\":\"games\",\"uri\":\"https://www.speedrun.com/api/v1/games?moderator=8d07dzox\"},{\"rel\":\"personal-bests\",\"uri\":\"https://www.speedrun.com/api/v1/users/8d07dzox/personal-bests\"}]},{\"rel\":\"guest\",\"name\":\"TuckerAndrews17\",\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/guests/TuckerAndrews17\"},{\"rel\":\"runs\",\"uri\":\"https://www.speedrun.com/api/v1/runs?guest=TuckerAndrews17\"}]}]},\"variables\":{\"data\":[{\"id\":\"2lg135el\",\"name\":\"Seed\",\"category\":null,\"scope\":{\"type\":\"full-game\"},\"mandatory\":true,\"user-defined\":false,\"obsoletes\":true,\"values\":{\"_note\":\"`choices` is deprecated, please use `values` instead\",\"choices\":{\"9qj3rrgl\":\"Set Seed\",\"jq6dmm71\":\"Random Seed\"},\"values\":{\"9qj3rrgl\":{\"label\":\"Set Seed\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"jq6dmm71\":{\"label\":\"Random Seed\",\"rules\":null,\"flags\":{\"miscellaneous\":null}}},\"default\":\"9qj3rrgl\"},\"is-subcategory\":true,\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/variables/2lg135el\"},{\"rel\":\"game\",\"uri\":\"https://www.speedrun.com/api/v1/games/yd4kq3k6\"}]},{\"id\":\"wl3d19v8\",\"name\":\"Dishes\",\"category\":null,\"scope\":{\"type\":\"full-game\"},\"mandatory\":true,\"user-defined\":false,\"obsoletes\":true,\"values\":{\"_note\":\"`choices` is deprecated, please use `values` instead\",\"choices\":{\"5lm5yy4q\":\"Breakfast\",\"81wygg5q\":\"Burgers\",\"zqo40021\":\"Fish\",\"013g003l\":\"Hot Dogs\",\"rqv877w1\":\"Pies\",\"5lejooz1\":\"Pizza\",\"0q5r66n1\":\"Salad\",\"4lxnzzr1\":\"Steak\",\"814zjjjl\":\"Stir Fry\",\"jqz3yeg1\":\"Turkey\"},\"values\":{\"5lm5yy4q\":{\"label\":\"Breakfast\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"81wygg5q\":{\"label\":\"Burgers\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"zqo40021\":{\"label\":\"Fish\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"013g003l\":{\"label\":\"Hot Dogs\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"rqv877w1\":{\"label\":\"Pies\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"5lejooz1\":{\"label\":\"Pizza\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"0q5r66n1\":{\"label\":\"Salad\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"4lxnzzr1\":{\"label\":\"Steak\",\"rules\":null,\"flags\":{\"miscellaneous\":false}},\"814zjjjl\":{\"label\":\"Stir Fry\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"jqz3yeg1\":{\"label\":\"Turkey\",\"rules\":null,\"flags\":{\"miscellaneous\":null}}},\"default\":\"4lxnzzr1\"},\"is-subcategory\":true,\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/variables/wl3d19v8\"},{\"rel\":\"game\",\"uri\":\"https://www.speedrun.com/api/v1/games/yd4kq3k6\"}]},{\"id\":\"wlekw94l\",\"name\":\"Players\",\"category\":null,\"scope\":{\"type\":\"full-game\"},\"mandatory\":true,\"user-defined\":false,\"obsoletes\":true,\"values\":{\"_note\":\"`choices` is deprecated, please use `values` instead\",\"choices\":{\"z19n33kq\":\"Solo\",\"p127nnkq\":\"Duo\",\"81p9jjkq\":\"Trio\",\"xqkvddyl\":\"Quad\"},\"values\":{\"z19n33kq\":{\"label\":\"Solo\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"p127nnkq\":{\"label\":\"Duo\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"81p9jjkq\":{\"label\":\"Trio\",\"rules\":null,\"flags\":{\"miscellaneous\":null}},\"xqkvddyl\":{\"label\":\"Quad\",\"rules\":null,\"flags\":{\"miscellaneous\":null}}},\"default\":\"z19n33kq\"},\"is-subcategory\":true,\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/variables/wlekw94l\"},{\"rel\":\"game\",\"uri\":\"https://www.speedrun.com/api/v1/games/yd4kq3k6\"}]},{\"id\":\"5lyx19gn\",\"name\":\"Seed\",\"category\":null,\"scope\":{\"type\":\"full-game\"},\"mandatory\":true,\"user-defined\":true,\"obsoletes\":false,\"values\":{\"_note\":\"`choices` is deprecated, please use `values` instead\",\"choices\":{\"klrgm92q\":\"-\",\"81048y5l\":\"speedrun\",\"81p9jzkq\":\"TITTIES\",\"gq78woy1\":\"A\",\"814zjmjl\":\"RJTW4TQM\",\"8104p6jl\":\"H8M4AP89\",\"z19nkr4q\":\"WEQRDFSC\",\"jq6dpd31\":\"YOGSCAST\",\"zqo4gy41\":\"J9JYYVYQ\",\"jqzjwxkl\":\"QSADAS\",\"jqzjwk8l\":\"J6DMMBG6\",\"zqo4g951\":\"QV9JXBTV\",\"81wyjkoq\":\"VJ8YQ93J\",\"5lej0w51\":\"J4W493G3\",\"gq783nn1\":\"4H3TR8JJ\",\"gq7837n1\":\"WERSD\",\"z19new0q\":\"SQUISHY\",\"81p9kggq\":\"4Q7JRBJB\",\"mlnxj3nq\":\"64H96WHJ\",\"5q8yw06l\":\"522\",\"5lej75m1\":\"BELLE13\",\"21gmz561\":\"V6MQY394\",\"mlnxggdq\":\"TJDXTHYY\",\"4qy0692l\":\"64966XW3\",\"p127057q\":\"8XTRQWJX\",\"0q5r35r1\":\"633TX9VY\",\"4qy0w3dl\":\"V7JD4799\",\"814n5x0l\":\"GBJRYM8X\",\"jq6j9wj1\":\"MTD8BYD9\",\"xqkxgvd1\":\"GB3TBJGH\",\"81pgy8e1\":\"BIGLEZ\",\"5lm92y01\":\"7GQJ3X8Y\",\"81wk7g61\":\"J7V464RD\",\"5q8m22kl\":\"HISAKAKI\",\"814n25el\":\"QGQ4MW8M\",\"21g3x38q\":\"WMDQG6YR\",\"21dmzwj1\":\"AZ56HIWX\",\"21g36r6q\":\"AZ1UZQSZ\",\"814n6gel\":\"ANUSVOLK\",\"z19woekq\":\"AZPGX2OJ\",\"rqvnn451\":\"AZFN4VEM\",\"gq7x2rnl\":\"AZZSHH4W\",\"mlnoegoq\":\"AZHX3BIZ\",\"810d64ol\":\"AZ524TPK\",\"z19p5r0l\":\"AZG67IX7\",\"4lx64pjl\":\"AZLYHABP\",\"21dedxgl\":\"AZAU5OW5\",\"5q89zw61\":\"AZ9K2BA1\",\"9qj8dko1\":\"AZWV89JQ\",\"z19p9j8l\":\"7748Q879\",\"jqz356m1\":\"AZNN2HQC\",\"81p5d7vl\":\"AZIMAWGX\",\"jqz3xjk1\":\"MG43RHDB\",\"4qyw8n61\":\"AZSDRTD6\",\"zqov2eg1\":\"WG8XH7D6\",\"814w34jl\":\"GYB9VJR9\",\"rqvy377q\":\"JW9T38XM\",\"0q53kmr1\":\"V6YHG4YG\",\"gq7xkyrl\":\"Azbvxcc7\",\"81w0wevl\":\"AZ8C5FKN\",\"21degzjl\":\"7VRVXVXG\",\"zqovo741\":\"azj2wnr8\",\"xqknjrkq\":\"AZDDVART\",\"klr2pzm1\":\"AZ8ZZJ5P\",\"0q53n221\":\"D78XD7XX\",\"p120d24l\":\"D7T4GQ4M\",\"klr2p201\":\"AZCXDIQW\",\"0136d4r1\":\"DT7RXJ9H\",\"gq7x0jyl\":\"M38R8WDD\"},\"values\":{\"klrgm92q\":{\"label\":\"-\"},\"81048y5l\":{\"label\":\"speedrun\"},\"81p9jzkq\":{\"label\":\"TITTIES\"},\"gq78woy1\":{\"label\":\"A\"},\"814zjmjl\":{\"label\":\"RJTW4TQM\"},\"8104p6jl\":{\"label\":\"H8M4AP89\"},\"z19nkr4q\":{\"label\":\"WEQRDFSC\"},\"jq6dpd31\":{\"label\":\"YOGSCAST\"},\"zqo4gy41\":{\"label\":\"J9JYYVYQ\"},\"jqzjwxkl\":{\"label\":\"QSADAS\"},\"jqzjwk8l\":{\"label\":\"J6DMMBG6\"},\"zqo4g951\":{\"label\":\"QV9JXBTV\"},\"81wyjkoq\":{\"label\":\"VJ8YQ93J\"},\"5lej0w51\":{\"label\":\"J4W493G3\"},\"gq783nn1\":{\"label\":\"4H3TR8JJ\"},\"gq7837n1\":{\"label\":\"WERSD\"},\"z19new0q\":{\"label\":\"SQUISHY\"},\"81p9kggq\":{\"label\":\"4Q7JRBJB\"},\"mlnxj3nq\":{\"label\":\"64H96WHJ\"},\"5q8yw06l\":{\"label\":\"522\"},\"5lej75m1\":{\"label\":\"BELLE13\"},\"21gmz561\":{\"label\":\"V6MQY394\"},\"mlnxggdq\":{\"label\":\"TJDXTHYY\"},\"4qy0692l\":{\"label\":\"64966XW3\"},\"p127057q\":{\"label\":\"8XTRQWJX\"},\"0q5r35r1\":{\"label\":\"633TX9VY\"},\"4qy0w3dl\":{\"label\":\"V7JD4799\"},\"814n5x0l\":{\"label\":\"GBJRYM8X\"},\"jq6j9wj1\":{\"label\":\"MTD8BYD9\"},\"xqkxgvd1\":{\"label\":\"GB3TBJGH\"},\"81pgy8e1\":{\"label\":\"BIGLEZ\"},\"5lm92y01\":{\"label\":\"7GQJ3X8Y\"},\"81wk7g61\":{\"label\":\"J7V464RD\"},\"5q8m22kl\":{\"label\":\"HISAKAKI\"},\"814n25el\":{\"label\":\"QGQ4MW8M\"},\"21g3x38q\":{\"label\":\"WMDQG6YR\"},\"21dmzwj1\":{\"label\":\"AZ56HIWX\"},\"21g36r6q\":{\"label\":\"AZ1UZQSZ\"},\"814n6gel\":{\"label\":\"ANUSVOLK\"},\"z19woekq\":{\"label\":\"AZPGX2OJ\"},\"rqvnn451\":{\"label\":\"AZFN4VEM\"},\"gq7x2rnl\":{\"label\":\"AZZSHH4W\"},\"mlnoegoq\":{\"label\":\"AZHX3BIZ\"},\"810d64ol\":{\"label\":\"AZ524TPK\"},\"z19p5r0l\":{\"label\":\"AZG67IX7\"},\"4lx64pjl\":{\"label\":\"AZLYHABP\"},\"21dedxgl\":{\"label\":\"AZAU5OW5\"},\"5q89zw61\":{\"label\":\"AZ9K2BA1\"},\"9qj8dko1\":{\"label\":\"AZWV89JQ\"},\"z19p9j8l\":{\"label\":\"7748Q879\"},\"jqz356m1\":{\"label\":\"AZNN2HQC\"},\"81p5d7vl\":{\"label\":\"AZIMAWGX\"},\"jqz3xjk1\":{\"label\":\"MG43RHDB\"},\"4qyw8n61\":{\"label\":\"AZSDRTD6\"},\"zqov2eg1\":{\"label\":\"WG8XH7D6\"},\"814w34jl\":{\"label\":\"GYB9VJR9\"},\"rqvy377q\":{\"label\":\"JW9T38XM\"},\"0q53kmr1\":{\"label\":\"V6YHG4YG\"},\"gq7xkyrl\":{\"label\":\"Azbvxcc7\"},\"81w0wevl\":{\"label\":\"AZ8C5FKN\"},\"21degzjl\":{\"label\":\"7VRVXVXG\"},\"zqovo741\":{\"label\":\"azj2wnr8\"},\"xqknjrkq\":{\"label\":\"AZDDVART\"},\"klr2pzm1\":{\"label\":\"AZ8ZZJ5P\"},\"0q53n221\":{\"label\":\"D78XD7XX\"},\"p120d24l\":{\"label\":\"D7T4GQ4M\"},\"klr2p201\":{\"label\":\"AZCXDIQW\"},\"0136d4r1\":{\"label\":\"DT7RXJ9H\"},\"gq7x0jyl\":{\"label\":\"M38R8WDD\"}},\"default\":null},\"is-subcategory\":false,\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/variables/5lyx19gn\"},{\"rel\":\"game\",\"uri\":\"https://www.speedrun.com/api/v1/games/yd4kq3k6\"}]},{\"id\":\"p855yjv8\",\"name\":\"Patch\",\"category\":null,\"scope\":{\"type\":\"global\"},\"mandatory\":true,\"user-defined\":true,\"obsoletes\":true,\"values\":{\"_note\":\"`choices` is deprecated, please use `values` instead\",\"choices\":{\"5lm9n001\":\"1.0.5\",\"81wk8x61\":\"1.0.4\",\"zqo7n641\":\"1.1.0\",\"81w0vp6l\":\"1.1.1\",\"5lexvemq\":\"1.1.2\"},\"values\":{\"5lm9n001\":{\"label\":\"1.0.5\"},\"81wk8x61\":{\"label\":\"1.0.4\"},\"zqo7n641\":{\"label\":\"1.1.0\"},\"81w0vp6l\":{\"label\":\"1.1.1\"},\"5lexvemq\":{\"label\":\"1.1.2\"}},\"default\":\"5lexvemq\"},\"is-subcategory\":false,\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/variables/p855yjv8\"},{\"rel\":\"game\",\"uri\":\"https://www.speedrun.com/api/v1/games/yd4kq3k6\"}]},{\"id\":\"onv4xmwn\",\"name\":\"Map scene\",\"category\":null,\"scope\":{\"type\":\"global\"},\"mandatory\":true,\"user-defined\":true,\"obsoletes\":true,\"values\":{\"_note\":\"`choices` is deprecated, please use `values` instead\",\"choices\":{\"21gpwox1\":\"Halloween\",\"jqz3ry41\":\"Autumn\",\"klr2e601\":\"Normal\",\"xqkn7dnq\":\"North Pole (2-4 Players)\"},\"values\":{\"21gpwox1\":{\"label\":\"Halloween\"},\"jqz3ry41\":{\"label\":\"Autumn\"},\"klr2e601\":{\"label\":\"Normal\"},\"xqkn7dnq\":{\"label\":\"North Pole (2-4 Players)\"}},\"default\":\"klr2e601\"},\"is-subcategory\":false,\"links\":[{\"rel\":\"self\",\"uri\":\"https://www.speedrun.com/api/v1/variables/onv4xmwn\"},{\"rel\":\"game\",\"uri\":\"https://www.speedrun.com/api/v1/games/yd4kq3k6\"}]}]}}}");

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return h; });
/* unused harmony export useErrorBoundary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return p; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "SfBS":
/***/ (function(module) {

module.exports = JSON.parse("[{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/Shawthing\",\"name\":\"Shawthing\"},{\"url\":\"https://www.speedrun.com/user/CaramelBob\",\"name\":\"CaramelBob\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/y9xgwwry\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.81wygg5q-wlekw94l.p127nnkq\",\"time_adj\":907.944075,\"time_adj_s\":\"00:15:07.944\",\"time\":1256.67,\"time_s\":\"PT20M56.670S\",\"verifyDate\":\"2022-11-06T14:48:08Z\",\"dishReduction\":-2,\"videoUrl\":\"https://www.youtube.com/watch?v=UjgA4iQST_g\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Burgers\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"AZPGX2OJ\",\"p855yjv8\":\"1.1.0\"},{\"place\":\"2nd\",\"players\":[{\"url\":\"https://www.speedrun.com/user/pjmangopie\",\"name\":\"pjmangopie\"},{\"url\":\"https://www.speedrun.com/user/vexicra\",\"name\":\"vexicra\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/yd1o7gwy\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.81wygg5q-wlekw94l.p127nnkq\",\"time_adj\":910.2199499999999,\"time_adj_s\":\"00:15:10.219\",\"time\":1259.82,\"time_s\":\"PT20M59.820S\",\"verifyDate\":\"2022-10-31T05:24:11Z\",\"dishReduction\":-2,\"videoUrl\":\"https://youtu.be/2IUhove2obo\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Burgers\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"AZ1UZQSZ\",\"p855yjv8\":\"1.1.0\"},{\"place\":\"3rd\",\"players\":[{\"url\":\"https://www.speedrun.com/user/pjmangopie\",\"name\":\"pjmangopie\"},{\"url\":\"https://www.speedrun.com/user/vexicra\",\"name\":\"vexicra\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/y8xn705m\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.81wygg5q-wlekw94l.p127nnkq\",\"time_adj\":1041.519875,\"time_adj_s\":\"00:17:21.519\",\"time\":1441.55,\"time_s\":\"PT24M1.550S\",\"verifyDate\":\"2022-10-31T05:24:16Z\",\"dishReduction\":-2,\"videoUrl\":\"https://youtu.be/92EgKjnWQGg\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Burgers\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"YOGSCAST\",\"p855yjv8\":\"1.0.5\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/pjmangopie\",\"name\":\"pjmangopie\"},{\"url\":\"https://www.speedrun.com/user/vexicra\",\"name\":\"vexicra\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/yl12erxm\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.5lejooz1-wlekw94l.p127nnkq\",\"time_adj\":1064.48,\"time_adj_s\":\"00:17:44.480\",\"time\":1064.48,\"time_s\":\"PT17M44.480S\",\"verifyDate\":\"2022-11-04T01:36:01Z\",\"dishReduction\":0,\"videoUrl\":\"https://www.twitch.tv/videos/1642399210\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Pizza\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"AZ56HIWX\",\"p855yjv8\":\"1.1.0\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/gc_monster7\",\"name\":\"gc_monster7\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/z5erq9gz\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.81wygg5q-wlekw94l.z19n33kq\",\"time_adj\":1085.4930312499998,\"time_adj_s\":\"00:18:05.493\",\"time\":1201.93,\"time_s\":\"PT20M1.930S\",\"verifyDate\":\"2023-01-21T02:51:49Z\",\"dishReduction\":-2,\"videoUrl\":\"https://www.youtube.com/watch?v=VYBWecS_lMM\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Burgers\",\"wlekw94l\":\"Solo\",\"5lyx19gn\":\"AZ6LZJIM\",\"p855yjv8\":\"1.1.2\",\"onv4xmwn\":\"Normal\"},{\"place\":\"2nd\",\"players\":[{\"url\":\"https://www.speedrun.com/user/CaramelBob\",\"name\":\"CaramelBob\"},{\"url\":\"https://www.speedrun.com/user/Shawthing\",\"name\":\"Shawthing\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/y9xewkky\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.5lejooz1-wlekw94l.p127nnkq\",\"time_adj\":1133.45,\"time_adj_s\":\"00:18:53.450\",\"time\":1133.45,\"time_s\":\"PT18M53.450S\",\"verifyDate\":\"2022-10-23T21:23:57Z\",\"dishReduction\":0,\"videoUrl\":\"https://www.youtube.com/watch?v=moWbv77stVw\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Pizza\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"522\",\"p855yjv8\":\"1.0.5\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/pjmangopie\",\"name\":\"pjmangopie\"},{\"url\":\"https://www.speedrun.com/user/vexicra\",\"name\":\"vexicra\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/y8097oxm\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.rqv877w1-wlekw94l.p127nnkq\",\"time_adj\":1170.270588235294,\"time_adj_s\":\"00:19:30.270\",\"time\":994.73,\"time_s\":\"PT16M34.730S\",\"verifyDate\":\"2022-12-17T10:31:16Z\",\"dishReduction\":1,\"videoUrl\":\"https://www.twitch.tv/videos/1681294602\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Pies\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"AZ9K2BA1\",\"p855yjv8\":\"1.1.1\",\"onv4xmwn\":\"Normal\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/zzumiess\",\"name\":\"zzumiess\"},{\"url\":\"https://www.speedrun.com/user/spectater\",\"name\":\"spectater\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/zxngj8gm\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.jqz3yeg1-wlekw94l.p127nnkq\",\"time_adj\":1181.270588235294,\"time_adj_s\":\"00:19:41.270\",\"time\":1004.08,\"time_s\":\"PT16M44.080S\",\"verifyDate\":\"2023-01-16T11:41:41Z\",\"dishReduction\":1,\"videoUrl\":\"https://www.youtube.com/watch?v=9kA3moeRUk4\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Turkey\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"AZKLSCY8\",\"p855yjv8\":\"1.1.2\",\"onv4xmwn\":\"Normal\"},{\"place\":\"3rd\",\"players\":[{\"url\":\"https://www.speedrun.com/user/pjmangopie\",\"name\":\"pjmangopie\"},{\"url\":\"https://www.speedrun.com/user/vexicra\",\"name\":\"vexicra\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/znq28w3z\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.5lejooz1-wlekw94l.p127nnkq\",\"time_adj\":1182.51,\"time_adj_s\":\"00:19:42.510\",\"time\":1182.51,\"time_s\":\"PT19M42.510S\",\"verifyDate\":\"2022-10-01T04:39:32Z\",\"dishReduction\":0,\"videoUrl\":\"https://www.youtube.com/watch?v=8y4Nt3p_-d8&ab_channel=pjmangopie\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Pizza\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"522\",\"p855yjv8\":\"1.0.5\"},{\"place\":\"2nd\",\"players\":[{\"url\":\"https://www.speedrun.com/user/CaramelBob\",\"name\":\"CaramelBob\"},{\"url\":\"https://www.speedrun.com/user/Shawthing\",\"name\":\"Shawthing\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/zx8x59km\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.rqv877w1-wlekw94l.p127nnkq\",\"time_adj\":1191.729411764706,\"time_adj_s\":\"00:19:51.729\",\"time\":1012.97,\"time_s\":\"PT16M52.970S\",\"verifyDate\":\"2022-10-10T09:48:00Z\",\"dishReduction\":1,\"videoUrl\":\"https://www.youtube.com/watch?v=i5vh58HU5zQ\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Pies\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"BIGLEZ\",\"p855yjv8\":\"1.0.5\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/Imanex\",\"name\":\"Imanex\"},{\"url\":\"https://www.speedrun.com/user/blacenrat\",\"name\":\"blacenrat\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/yol901dy\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.4lxnzzr1-wlekw94l.p127nnkq\",\"time_adj\":1193.12,\"time_adj_s\":\"00:19:53.120\",\"time\":1193.12,\"time_s\":\"PT19M53.120S\",\"verifyDate\":\"2023-01-11T03:47:35Z\",\"dishReduction\":0,\"videoUrl\":\"https://youtu.be/McK6bvghUv4\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Steak\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"azj2wnr8\",\"p855yjv8\":\"1.1.2\",\"onv4xmwn\":\"Normal\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/pjmangopie\",\"name\":\"pjmangopie\"},{\"url\":\"https://www.speedrun.com/user/vexicra\",\"name\":\"vexicra\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/y2jqon7z\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.0q5r66n1-wlekw94l.p127nnkq\",\"time_adj\":1199.928,\"time_adj_s\":\"00:19:59.928\",\"time\":1411.68,\"time_s\":\"PT23M31.680S\",\"verifyDate\":\"2022-12-17T10:30:26Z\",\"dishReduction\":-1,\"videoUrl\":\"https://www.twitch.tv/videos/1681292975\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Salad\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"AZLYHABP\",\"p855yjv8\":\"1.1.1\",\"onv4xmwn\":\"Normal\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/gc_monster7\",\"name\":\"gc_monster7\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/ylnq452z\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.0q5r66n1-wlekw94l.z19n33kq\",\"time_adj\":1213.7256249999998,\"time_adj_s\":\"00:20:13.725\",\"time\":1142.33,\"time_s\":\"PT19M2.330S\",\"verifyDate\":\"2023-01-12T08:09:47Z\",\"dishReduction\":-1,\"videoUrl\":\"https://www.youtube.com/watch?v=_MKwqPxs9YM\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Salad\",\"wlekw94l\":\"Solo\",\"5lyx19gn\":\"Azbvxcc7\",\"p855yjv8\":\"1.1.2\",\"onv4xmwn\":\"Normal\"},{\"place\":\"1st\",\"players\":[{\"url\":\"https://www.speedrun.com/user/Shawthing\",\"name\":\"Shawthing\"},{\"url\":\"https://www.speedrun.com/user/CaramelBob\",\"name\":\"CaramelBob\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/yl18vkxm\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.zqo40021-wlekw94l.p127nnkq\",\"time_adj\":1230.6470588235293,\"time_adj_s\":\"00:20:30.647\",\"time\":1046.05,\"time_s\":\"PT17M26.050S\",\"verifyDate\":\"2022-11-16T03:20:19Z\",\"dishReduction\":1,\"videoUrl\":\"https://youtu.be/v1JAQBhQqgg\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Fish\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"AZFN4VEM\",\"p855yjv8\":\"1.1.0\"},{\"place\":\"3rd\",\"players\":[{\"url\":\"https://www.speedrun.com/user/pjmangopie\",\"name\":\"pjmangopie\"},{\"url\":\"https://www.speedrun.com/user/vexicra\",\"name\":\"vexicra\"}],\"weblink\":\"https://www.speedrun.com/plateup/run/me1wqd3y\",\"leaderboardUrl\":\"https://www.speedrun.com/plateup?x=z275n0gk-2lg135el.9qj3rrgl-wl3d19v8.rqv877w1-wlekw94l.p127nnkq\",\"time_adj\":1236.4117647058824,\"time_adj_s\":\"00:20:36.411\",\"time\":1050.95,\"time_s\":\"PT17M30.950S\",\"verifyDate\":\"2022-10-05T03:31:04Z\",\"dishReduction\":1,\"videoUrl\":\"https://www.youtube.com/watch?v=znHilUOhElA&ab_channel=pjmangopie\",\"2lg135el\":\"Set Seed\",\"wl3d19v8\":\"Pies\",\"wlekw94l\":\"Duo\",\"5lyx19gn\":\"BIGLEZ\",\"p855yjv8\":\"1.0.5\"}]");

/***/ }),

/***/ "Y4LV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ flexRender; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useReactTable; });

// UNUSED EXPORTS: ColumnSizing, Expanding, Filters, Grouping, Headers, Ordering, Pagination, Pinning, RowSelection, Sorting, Visibility, aggregationFns, buildHeaderGroups, createCell, createColumn, createColumnHelper, createRow, createTable, defaultColumnSizing, expandRows, filterFns, flattenBy, functionalUpdate, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel, isFunction, isRowSelected, isSubRowSelected, makeStateUpdater, memo, noop, orderColumns, passiveEventSupported, reSplitAlphaNumeric, selectRowsFn, shouldAutoRemoveFilter, sortingFns

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("QRet");

// CONCATENATED MODULE: ../node_modules/preact/compat/dist/compat.module.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
  this.props = n;
}
function R(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, Object(external_preact_["createElement"])(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new external_preact_["Component"]()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var x = external_preact_["options"].__b;
external_preact_["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var compat_module_A = function A(n, t) {
    return null == n ? null : Object(external_preact_["toChildArray"])(Object(external_preact_["toChildArray"])(n).map(t));
  },
  O = {
    map: compat_module_A,
    forEach: compat_module_A,
    count: function count(n) {
      return n ? Object(external_preact_["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(external_preact_["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: external_preact_["toChildArray"]
  },
  T = external_preact_["options"].__e;
external_preact_["options"].__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  T(n, t, e, r);
};
var I = external_preact_["options"].unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return Object(external_preact_["createElement"])(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
  this.u = null, this.o = null;
}
external_preact_["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new external_preact_["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = F(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Object(external_preact_["createElement"])(external_preact_["Fragment"], null, n.fallback);
  return i && (i.__h = null), [Object(external_preact_["createElement"])(external_preact_["Fragment"], null, e.__a ? null : n.children), i];
};
var W = function W(n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function $(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    Object(external_preact_["render"])(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), Object(external_preact_["render"])(Object(external_preact_["createElement"])(P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function j(n, e) {
  var r = Object(external_preact_["createElement"])($, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(V.prototype = new external_preact_["Component"]()).__a = function (n) {
  var t = this,
    e = F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = Object(external_preact_["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  H = "undefined" != typeof document,
  Z = function Z(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
  };
function Y(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(external_preact_["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function q(n, t, e) {
  return Object(external_preact_["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
external_preact_["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(external_preact_["Component"].prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var G = external_preact_["options"].event;
function J() {}
function K() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
external_preact_["options"].event = function (n) {
  return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
};
var X,
  nn = {
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  tn = external_preact_["options"].vnode;
external_preact_["options"].vnode = function (n) {
  var t = n.type,
    e = n.props,
    u = e;
  if ("string" == typeof t) {
    var o = -1 === t.indexOf("-");
    for (var i in u = {}, e) {
      var l = e[i];
      H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
    }
    "select" == t && u.multiple && Array.isArray(u.value) && (u.value = Object(external_preact_["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == t && null != u.defaultValue && (u.value = Object(external_preact_["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
  }
  n.$$typeof = z, tn && tn(n);
};
var en = external_preact_["options"].__r;
external_preact_["options"].__r = function (n) {
  en && en(n), X = n.__c;
};
var rn = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return X.__n[n.__c].props.value;
        }
      }
    }
  },
  un = "17.0.2";
function on(n) {
  return external_preact_["createElement"].bind(null, n);
}
function ln(n) {
  return !!n && n.$$typeof === z;
}
function cn(n) {
  return ln(n) ? external_preact_["cloneElement"].apply(null, arguments) : n;
}
function fn(n) {
  return !!n.__k && (Object(external_preact_["render"])(null, n), !0);
}
function an(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var sn = function sn(n, t) {
    return n(t);
  },
  hn = function hn(n, t) {
    return n(t);
  },
  vn = external_preact_["Fragment"];
function dn(n) {
  n();
}
function pn(n) {
  return n;
}
function mn() {
  return [!1, dn];
}
var yn = hooks_module["g" /* useLayoutEffect */];
function _n(n, t) {
  var e = t(),
    r = Object(hooks_module["k" /* useState */])({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return Object(hooks_module["g" /* useLayoutEffect */])(function () {
    u.__ = e, u.v = t, E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), Object(hooks_module["d" /* useEffect */])(function () {
    return E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var bn = {
  useState: hooks_module["k" /* useState */],
  useId: hooks_module["e" /* useId */],
  useReducer: hooks_module["i" /* useReducer */],
  useEffect: hooks_module["d" /* useEffect */],
  useLayoutEffect: hooks_module["g" /* useLayoutEffect */],
  useInsertionEffect: yn,
  useTransition: mn,
  useDeferredValue: pn,
  useSyncExternalStore: _n,
  startTransition: dn,
  useRef: hooks_module["j" /* useRef */],
  useImperativeHandle: hooks_module["f" /* useImperativeHandle */],
  useMemo: hooks_module["h" /* useMemo */],
  useCallback: hooks_module["a" /* useCallback */],
  useContext: hooks_module["b" /* useContext */],
  useDebugValue: hooks_module["c" /* useDebugValue */],
  version: "17.0.2",
  Children: O,
  render: Y,
  hydrate: q,
  unmountComponentAtNode: fn,
  createPortal: j,
  createElement: external_preact_["createElement"],
  createContext: external_preact_["createContext"],
  createFactory: on,
  cloneElement: cn,
  createRef: external_preact_["createRef"],
  Fragment: external_preact_["Fragment"],
  isValidElement: ln,
  findDOMNode: an,
  Component: external_preact_["Component"],
  PureComponent: w,
  memo: R,
  forwardRef: k,
  flushSync: hn,
  unstable_batchedUpdates: sn,
  StrictMode: vn,
  Suspense: D,
  SuspenseList: V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rn
};

// EXTERNAL MODULE: ../node_modules/@tanstack/table-core/build/lib/index.esm.js
var index_esm = __webpack_require__("pcq1");

// CONCATENATED MODULE: ../node_modules/@tanstack/react-table/build/lib/index.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return index_esm_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (index_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (index_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function index_esm_typeof(obj) { "@babel/helpers - typeof"; return index_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, index_esm_typeof(obj); }
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




//

function flexRender(Comp, props) {
  return !Comp ? null : isReactComponent(Comp) ? /*#__PURE__*/external_preact_["createElement"](Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === 'function' && function () {
    var proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  }();
}
function isExoticComponent(component) {
  return index_esm_typeof(component) === 'object' && index_esm_typeof(component.$$typeof) === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
}
function useReactTable(options) {
  // Compose in the generic options to the user options
  var resolvedOptions = _objectSpread({
    state: {},
    // Dummy state
    onStateChange: function onStateChange() {},
    // noop
    renderFallbackValue: null
  }, options);

  // Create a new table and store it in state
  var _React$useState = hooks_module["k" /* useState */](function () {
      return {
        current: Object(index_esm["b" /* createTable */])(resolvedOptions)
      };
    }),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    tableRef = _React$useState2[0];

  // By default, manage table state here using the table's initial state
  var _React$useState3 = hooks_module["k" /* useState */](function () {
      return tableRef.current.initialState;
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    state = _React$useState4[0],
    setState = _React$useState4[1];

  // Compose the default state above with any user state. This will allow the user
  // to only control a subset of the state if desired.
  tableRef.current.setOptions(function (prev) {
    return _objectSpread(_objectSpread(_objectSpread({}, prev), options), {}, {
      state: _objectSpread(_objectSpread({}, state), options.state),
      // Similarly, we'll maintain both our internal state and any user-provided
      // state.
      onStateChange: function onStateChange(updater) {
        setState(updater);
        options.onStateChange == null ? void 0 : options.onStateChange(updater);
      }
    });
  });
  return tableRef.current;
}


/***/ }),

/***/ "pcq1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColumnSizing */
/* unused harmony export Expanding */
/* unused harmony export Filters */
/* unused harmony export Grouping */
/* unused harmony export Headers */
/* unused harmony export Ordering */
/* unused harmony export Pagination */
/* unused harmony export Pinning */
/* unused harmony export RowSelection */
/* unused harmony export Sorting */
/* unused harmony export Visibility */
/* unused harmony export aggregationFns */
/* unused harmony export buildHeaderGroups */
/* unused harmony export createCell */
/* unused harmony export createColumn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createColumnHelper; });
/* unused harmony export createRow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createTable; });
/* unused harmony export defaultColumnSizing */
/* unused harmony export expandRows */
/* unused harmony export filterFns */
/* unused harmony export flattenBy */
/* unused harmony export functionalUpdate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCoreRowModel; });
/* unused harmony export getExpandedRowModel */
/* unused harmony export getFacetedMinMaxValues */
/* unused harmony export getFacetedRowModel */
/* unused harmony export getFacetedUniqueValues */
/* unused harmony export getFilteredRowModel */
/* unused harmony export getGroupedRowModel */
/* unused harmony export getPaginationRowModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSortedRowModel; });
/* unused harmony export isFunction */
/* unused harmony export isRowSelected */
/* unused harmony export isSubRowSelected */
/* unused harmony export makeStateUpdater */
/* unused harmony export memo */
/* unused harmony export noop */
/* unused harmony export orderColumns */
/* unused harmony export passiveEventSupported */
/* unused harmony export reSplitAlphaNumeric */
/* unused harmony export selectRowsFn */
/* unused harmony export shouldAutoRemoveFilter */
/* unused harmony export sortingFns */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
// Is this type a tuple?

// If this type is a tuple, what indices are allowed?

///

function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function noop() {
  //
}
function makeStateUpdater(key, instance) {
  return function (updater) {
    instance.setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, _defineProperty({}, key, functionalUpdate(updater, old[key])));
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function flattenBy(arr, getChildren) {
  var flat = [];
  var recurse = function recurse(subArr) {
    subArr.forEach(function (item) {
      flat.push(item);
      var children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  var deps = [];
  var result;
  return function () {
    var depTime;
    if (opts.key && opts.debug) depTime = Date.now();
    var newDeps = getDeps();
    var depsChanged = newDeps.length !== deps.length || newDeps.some(function (dep, index) {
      return deps[index] !== dep;
    });
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    var resultTime;
    if (opts.key && opts.debug) resultTime = Date.now();
    result = fn.apply(void 0, _toConsumableArray(newDeps));
    opts == null ? void 0 : opts.onChange == null ? void 0 : opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        var resultFpsPercentage = resultEndTime / 16;
        var pad = function pad(str, num) {
          str = String(str);
          while (str.length < num) {
            str = ' ' + str;
          }
          return str;
        };
        console.info("%c\u23F1 ".concat(pad(resultEndTime, 5), " /").concat(pad(depEndTime, 5), " ms"), "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(".concat(Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)), "deg 100% 31%);"), opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  var defaultColumn = table._getDefaultColumnDef();
  var resolvedColumnDef = _objectSpread(_objectSpread({}, defaultColumn), columnDef);
  var accessorKey = resolvedColumnDef.accessorKey;
  var id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? accessorKey.replace('.', '_') : undefined) != null ? _ref : typeof resolvedColumnDef.header === 'string' ? resolvedColumnDef.header : undefined;
  var accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    // Support deep accessor keys
    if (accessorKey.includes('.')) {
      accessorFn = function accessorFn(originalRow) {
        var result = originalRow;
        var _iterator = _createForOfIteratorHelper(accessorKey.split('.')),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            result = result[key];
            if (false) {}
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return result;
      };
    } else {
      accessorFn = function accessorFn(originalRow) {
        return originalRow[resolvedColumnDef.accessorKey];
      };
    }
  }
  if (!id) {
    if (false) {}
    throw new Error();
  }
  var column = {
    id: "".concat(String(id)),
    accessorFn: accessorFn,
    parent: parent,
    depth: depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(function () {
      return [true];
    }, function () {
      var _column$columns;
      return [column].concat(_toConsumableArray((_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap(function (d) {
        return d.getFlatColumns();
      })));
    }, {
      key:  true && 'column.getFlatColumns',
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
      }
    }),
    getLeafColumns: memo(function () {
      return [table._getOrderColumnsFn()];
    }, function (orderColumns) {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        var leafColumns = column.columns.flatMap(function (column) {
          return column.getLeafColumns();
        });
        return orderColumns(leafColumns);
      }
      return [column];
    }, {
      key:  true && 'column.getLeafColumns',
      debug: function debug() {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
      }
    })
  };
  column = table._features.reduce(function (obj, feature) {
    return _extends(obj, feature.createColumn == null ? void 0 : feature.createColumn(column, table));
  }, column);

  // Yes, we have to convert table to uknown, because we know more than the compiler here.
  return column;
}

//

function createHeader(table, column, options) {
  var _options$id;
  var id = (_options$id = options.id) != null ? _options$id : column.id;
  var header = {
    id: id,
    column: column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: function getLeafHeaders() {
      var leafHeaders = [];
      var recurseHeader = function recurseHeader(h) {
        if (h.subHeaders && h.subHeaders.length) {
          h.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: function getContext() {
      return {
        table: table,
        header: header,
        column: column
      };
    }
  };
  table._features.forEach(function (feature) {
    _extends(header, feature.createHeader == null ? void 0 : feature.createHeader(header, table));
  });
  return header;
}
var Headers = {
  createTable: function createTable(table) {
    return {
      // Header Groups

      getHeaderGroups: memo(function () {
        return [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right];
      }, function (allColumns, leafColumns, left, right) {
        var _left$map$filter, _right$map$filter;
        var leftColumns = (_left$map$filter = left == null ? void 0 : left.map(function (columnId) {
          return leafColumns.find(function (d) {
            return d.id === columnId;
          });
        }).filter(Boolean)) != null ? _left$map$filter : [];
        var rightColumns = (_right$map$filter = right == null ? void 0 : right.map(function (columnId) {
          return leafColumns.find(function (d) {
            return d.id === columnId;
          });
        }).filter(Boolean)) != null ? _right$map$filter : [];
        var centerColumns = leafColumns.filter(function (column) {
          return !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id));
        });
        var headerGroups = buildHeaderGroups(allColumns, [].concat(_toConsumableArray(leftColumns), _toConsumableArray(centerColumns), _toConsumableArray(rightColumns)), table);
        return headerGroups;
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugHeaders;
        }
      }),
      getCenterHeaderGroups: memo(function () {
        return [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right];
      }, function (allColumns, leafColumns, left, right) {
        leafColumns = leafColumns.filter(function (column) {
          return !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id));
        });
        return buildHeaderGroups(allColumns, leafColumns, table, 'center');
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugHeaders;
        }
      }),
      getLeftHeaderGroups: memo(function () {
        return [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left];
      }, function (allColumns, leafColumns, left) {
        var _left$map$filter2;
        var orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map(function (columnId) {
          return leafColumns.find(function (d) {
            return d.id === columnId;
          });
        }).filter(Boolean)) != null ? _left$map$filter2 : [];
        return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'left');
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugHeaders;
        }
      }),
      getRightHeaderGroups: memo(function () {
        return [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right];
      }, function (allColumns, leafColumns, right) {
        var _right$map$filter2;
        var orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map(function (columnId) {
          return leafColumns.find(function (d) {
            return d.id === columnId;
          });
        }).filter(Boolean)) != null ? _right$map$filter2 : [];
        return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'right');
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA4;
          return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugHeaders;
        }
      }),
      // Footer Groups

      getFooterGroups: memo(function () {
        return [table.getHeaderGroups()];
      }, function (headerGroups) {
        return _toConsumableArray(headerGroups).reverse();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA5;
          return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugHeaders;
        }
      }),
      getLeftFooterGroups: memo(function () {
        return [table.getLeftHeaderGroups()];
      }, function (headerGroups) {
        return _toConsumableArray(headerGroups).reverse();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA6;
          return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugHeaders;
        }
      }),
      getCenterFooterGroups: memo(function () {
        return [table.getCenterHeaderGroups()];
      }, function (headerGroups) {
        return _toConsumableArray(headerGroups).reverse();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA7;
          return (_table$options$debugA7 = table.options.debugAll) != null ? _table$options$debugA7 : table.options.debugHeaders;
        }
      }),
      getRightFooterGroups: memo(function () {
        return [table.getRightHeaderGroups()];
      }, function (headerGroups) {
        return _toConsumableArray(headerGroups).reverse();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA8;
          return (_table$options$debugA8 = table.options.debugAll) != null ? _table$options$debugA8 : table.options.debugHeaders;
        }
      }),
      // Flat Headers

      getFlatHeaders: memo(function () {
        return [table.getHeaderGroups()];
      }, function (headerGroups) {
        return headerGroups.map(function (headerGroup) {
          return headerGroup.headers;
        }).flat();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA9;
          return (_table$options$debugA9 = table.options.debugAll) != null ? _table$options$debugA9 : table.options.debugHeaders;
        }
      }),
      getLeftFlatHeaders: memo(function () {
        return [table.getLeftHeaderGroups()];
      }, function (left) {
        return left.map(function (headerGroup) {
          return headerGroup.headers;
        }).flat();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA10;
          return (_table$options$debugA10 = table.options.debugAll) != null ? _table$options$debugA10 : table.options.debugHeaders;
        }
      }),
      getCenterFlatHeaders: memo(function () {
        return [table.getCenterHeaderGroups()];
      }, function (left) {
        return left.map(function (headerGroup) {
          return headerGroup.headers;
        }).flat();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA11;
          return (_table$options$debugA11 = table.options.debugAll) != null ? _table$options$debugA11 : table.options.debugHeaders;
        }
      }),
      getRightFlatHeaders: memo(function () {
        return [table.getRightHeaderGroups()];
      }, function (left) {
        return left.map(function (headerGroup) {
          return headerGroup.headers;
        }).flat();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA12;
          return (_table$options$debugA12 = table.options.debugAll) != null ? _table$options$debugA12 : table.options.debugHeaders;
        }
      }),
      // Leaf Headers

      getCenterLeafHeaders: memo(function () {
        return [table.getCenterFlatHeaders()];
      }, function (flatHeaders) {
        return flatHeaders.filter(function (header) {
          var _header$subHeaders;
          return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
        });
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA13;
          return (_table$options$debugA13 = table.options.debugAll) != null ? _table$options$debugA13 : table.options.debugHeaders;
        }
      }),
      getLeftLeafHeaders: memo(function () {
        return [table.getLeftFlatHeaders()];
      }, function (flatHeaders) {
        return flatHeaders.filter(function (header) {
          var _header$subHeaders2;
          return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
        });
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA14;
          return (_table$options$debugA14 = table.options.debugAll) != null ? _table$options$debugA14 : table.options.debugHeaders;
        }
      }),
      getRightLeafHeaders: memo(function () {
        return [table.getRightFlatHeaders()];
      }, function (flatHeaders) {
        return flatHeaders.filter(function (header) {
          var _header$subHeaders3;
          return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
        });
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA15;
          return (_table$options$debugA15 = table.options.debugAll) != null ? _table$options$debugA15 : table.options.debugHeaders;
        }
      }),
      getLeafHeaders: memo(function () {
        return [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()];
      }, function (left, center, right) {
        var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
        return [].concat(_toConsumableArray((_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : []), _toConsumableArray((_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : []), _toConsumableArray((_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : [])).map(function (header) {
          return header.getLeafHeaders();
        }).flat();
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA16;
          return (_table$options$debugA16 = table.options.debugAll) != null ? _table$options$debugA16 : table.options.debugHeaders;
        }
      })
    };
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  // Find the max depth of the columns:
  // build the leaf column row
  // build each buffer row going up
  //    placeholder for non-existent level
  //    real column for existing level

  var maxDepth = 0;
  var findMaxDepth = function findMaxDepth(columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter(function (column) {
      return column.getIsVisible();
    }).forEach(function (column) {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  var headerGroups = [];
  var createHeaderGroup = function createHeaderGroup(headersToGroup, depth) {
    // The header group we are creating
    var headerGroup = {
      depth: depth,
      id: [headerFamily, "".concat(depth)].filter(Boolean).join('_'),
      headers: []
    };

    // The parent columns we're going to scan next
    var pendingParentHeaders = [];

    // Scan each column for parents
    headersToGroup.forEach(function (headerToGroup) {
      // What is the latest (last) parent column?

      var latestPendingParentHeader = [].concat(pendingParentHeaders).reverse()[0];
      var isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      var column;
      var isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        // The parent header is new
        column = headerToGroup.column.parent;
      } else {
        // The parent header is repeated
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        // This column is repeated. Add it as a sub header to the next batch
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        // This is a new header. Let's create it
        var header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join('_'),
          isPlaceholder: isPlaceholder,
          placeholderId: isPlaceholder ? "".concat(pendingParentHeaders.filter(function (d) {
            return d.column === column;
          }).length) : undefined,
          depth: depth,
          index: pendingParentHeaders.length
        });

        // Add the headerToGroup as a subHeader of the new header
        header.subHeaders.push(headerToGroup);
        // Add the new header to the pendingParentHeaders to get grouped
        // in the next batch
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  var bottomHeaders = columnsToGroup.map(function (column, index) {
    return createHeader(table, column, {
      depth: maxDepth,
      index: index
    });
  });
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();

  // headerGroups = headerGroups.filter(headerGroup => {
  //   return !headerGroup.headers.every(header => header.isPlaceholder)
  // })

  var recurseHeadersForSpans = function recurseHeadersForSpans(headers) {
    var filteredHeaders = headers.filter(function (header) {
      return header.column.getIsVisible();
    });
    return filteredHeaders.map(function (header) {
      var colSpan = 0;
      var rowSpan = 0;
      var childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach(function (_ref) {
          var childColSpan = _ref.colSpan,
            childRowSpan = _ref.rowSpan;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      var minChildRowSpan = Math.min.apply(Math, _toConsumableArray(childRowSpans));
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan: colSpan,
        rowSpan: rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}

//

var defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
var getDefaultColumnSizingInfoState = function getDefaultColumnSizingInfoState() {
  return {
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  };
};
var ColumnSizing = {
  getDefaultColumnDef: function getDefaultColumnDef() {
    return defaultColumnSizing;
  },
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState()
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      columnResizeMode: 'onEnd',
      onColumnSizingChange: makeStateUpdater('columnSizing', table),
      onColumnSizingInfoChange: makeStateUpdater('columnSizingInfo', table)
    };
  },
  createColumn: function createColumn(column, table) {
    return {
      getSize: function getSize() {
        var _column$columnDef$min, _ref, _column$columnDef$max;
        var columnSize = table.getState().columnSizing[column.id];
        return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
      },
      getStart: function getStart(position) {
        var columns = !position ? table.getVisibleLeafColumns() : position === 'left' ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
        var index = columns.findIndex(function (d) {
          return d.id === column.id;
        });
        if (index > 0) {
          var prevSiblingColumn = columns[index - 1];
          return prevSiblingColumn.getStart(position) + prevSiblingColumn.getSize();
        }
        return 0;
      },
      resetSize: function resetSize() {
        table.setColumnSizing(function (_ref2) {
          var _column$id = column.id,
            _ = _ref2[_column$id],
            rest = _objectWithoutProperties(_ref2, [_column$id].map(_toPropertyKey));
          return rest;
        });
      },
      getCanResize: function getCanResize() {
        var _column$columnDef$ena, _table$options$enable;
        return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
      },
      getIsResizing: function getIsResizing() {
        return table.getState().columnSizingInfo.isResizingColumn === column.id;
      }
    };
  },
  createHeader: function createHeader(header, table) {
    return {
      getSize: function getSize() {
        var sum = 0;
        var recurse = function recurse(header) {
          if (header.subHeaders.length) {
            header.subHeaders.forEach(recurse);
          } else {
            var _header$column$getSiz;
            sum += (_header$column$getSiz = header.column.getSize()) != null ? _header$column$getSiz : 0;
          }
        };
        recurse(header);
        return sum;
      },
      getStart: function getStart() {
        if (header.index > 0) {
          var prevSiblingHeader = header.headerGroup.headers[header.index - 1];
          return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
        }
        return 0;
      },
      getResizeHandler: function getResizeHandler() {
        var column = table.getColumn(header.column.id);
        var canResize = column.getCanResize();
        return function (e) {
          if (!canResize) {
            return;
          }
          e.persist == null ? void 0 : e.persist();
          if (isTouchStartEvent(e)) {
            // lets not respond to multiple touches (e.g. 2 or 3 fingers)
            if (e.touches && e.touches.length > 1) {
              return;
            }
          }
          var startSize = header.getSize();
          var columnSizingStart = header ? header.getLeafHeaders().map(function (d) {
            return [d.column.id, d.column.getSize()];
          }) : [[column.id, column.getSize()]];
          var clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
          var newColumnSizing = {};
          var updateOffset = function updateOffset(eventType, clientXPos) {
            if (typeof clientXPos !== 'number') {
              return;
            }
            table.setColumnSizingInfo(function (old) {
              var _old$startOffset, _old$startSize;
              var deltaOffset = clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0);
              var deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
              old.columnSizingStart.forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  columnId = _ref4[0],
                  headerSize = _ref4[1];
                newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
              });
              return _objectSpread(_objectSpread({}, old), {}, {
                deltaOffset: deltaOffset,
                deltaPercentage: deltaPercentage
              });
            });
            if (table.options.columnResizeMode === 'onChange' || eventType === 'end') {
              table.setColumnSizing(function (old) {
                return _objectSpread(_objectSpread({}, old), newColumnSizing);
              });
            }
          };
          var onMove = function onMove(clientXPos) {
            return updateOffset('move', clientXPos);
          };
          var onEnd = function onEnd(clientXPos) {
            updateOffset('end', clientXPos);
            table.setColumnSizingInfo(function (old) {
              return _objectSpread(_objectSpread({}, old), {}, {
                isResizingColumn: false,
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                columnSizingStart: []
              });
            });
          };
          var mouseEvents = {
            moveHandler: function moveHandler(e) {
              return onMove(e.clientX);
            },
            upHandler: function upHandler(e) {
              document.removeEventListener('mousemove', mouseEvents.moveHandler);
              document.removeEventListener('mouseup', mouseEvents.upHandler);
              onEnd(e.clientX);
            }
          };
          var touchEvents = {
            moveHandler: function moveHandler(e) {
              if (e.cancelable) {
                e.preventDefault();
                e.stopPropagation();
              }
              onMove(e.touches[0].clientX);
              return false;
            },
            upHandler: function upHandler(e) {
              var _e$touches$;
              document.removeEventListener('touchmove', touchEvents.moveHandler);
              document.removeEventListener('touchend', touchEvents.upHandler);
              if (e.cancelable) {
                e.preventDefault();
                e.stopPropagation();
              }
              onEnd((_e$touches$ = e.touches[0]) == null ? void 0 : _e$touches$.clientX);
            }
          };
          var passiveIfSupported = passiveEventSupported() ? {
            passive: false
          } : false;
          if (isTouchStartEvent(e)) {
            document.addEventListener('touchmove', touchEvents.moveHandler, passiveIfSupported);
            document.addEventListener('touchend', touchEvents.upHandler, passiveIfSupported);
          } else {
            document.addEventListener('mousemove', mouseEvents.moveHandler, passiveIfSupported);
            document.addEventListener('mouseup', mouseEvents.upHandler, passiveIfSupported);
          }
          table.setColumnSizingInfo(function (old) {
            return _objectSpread(_objectSpread({}, old), {}, {
              startOffset: clientX,
              startSize: startSize,
              deltaOffset: 0,
              deltaPercentage: 0,
              columnSizingStart: columnSizingStart,
              isResizingColumn: column.id
            });
          });
        };
      }
    };
  },
  createTable: function createTable(table) {
    return {
      setColumnSizing: function setColumnSizing(updater) {
        return table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
      },
      setColumnSizingInfo: function setColumnSizingInfo(updater) {
        return table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
      },
      resetColumnSizing: function resetColumnSizing(defaultState) {
        var _table$initialState$c;
        table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
      },
      resetHeaderSizeInfo: function resetHeaderSizeInfo(defaultState) {
        var _table$initialState$c2;
        table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
      },
      getTotalSize: function getTotalSize() {
        var _table$getHeaderGroup, _table$getHeaderGroup2;
        return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce(function (sum, header) {
          return sum + header.getSize();
        }, 0)) != null ? _table$getHeaderGroup : 0;
      },
      getLeftTotalSize: function getLeftTotalSize() {
        var _table$getLeftHeaderG, _table$getLeftHeaderG2;
        return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce(function (sum, header) {
          return sum + header.getSize();
        }, 0)) != null ? _table$getLeftHeaderG : 0;
      },
      getCenterTotalSize: function getCenterTotalSize() {
        var _table$getCenterHeade, _table$getCenterHeade2;
        return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce(function (sum, header) {
          return sum + header.getSize();
        }, 0)) != null ? _table$getCenterHeade : 0;
      },
      getRightTotalSize: function getRightTotalSize() {
        var _table$getRightHeader, _table$getRightHeader2;
        return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce(function (sum, header) {
          return sum + header.getSize();
        }, 0)) != null ? _table$getRightHeader : 0;
      }
    };
  }
};
var passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === 'boolean') return passiveSupported;
  var supported = false;
  try {
    var options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    var _noop = function _noop() {};
    window.addEventListener('test', _noop, options);
    window.removeEventListener('test', _noop);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === 'touchstart';
}

//

var Expanding = {
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      expanded: {}
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onExpandedChange: makeStateUpdater('expanded', table),
      paginateExpandedRows: true
    };
  },
  createTable: function createTable(table) {
    var registered = false;
    var queued = false;
    return {
      _autoResetExpanded: function _autoResetExpanded() {
        var _ref, _table$options$autoRe;
        if (!registered) {
          table._queue(function () {
            registered = true;
          });
          return;
        }
        if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
          if (queued) return;
          queued = true;
          table._queue(function () {
            table.resetExpanded();
            queued = false;
          });
        }
      },
      setExpanded: function setExpanded(updater) {
        return table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
      },
      toggleAllRowsExpanded: function toggleAllRowsExpanded(expanded) {
        if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
          table.setExpanded(true);
        } else {
          table.setExpanded({});
        }
      },
      resetExpanded: function resetExpanded(defaultState) {
        var _table$initialState$e, _table$initialState;
        table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
      },
      getCanSomeRowsExpand: function getCanSomeRowsExpand() {
        return table.getRowModel().flatRows.some(function (row) {
          return row.getCanExpand();
        });
      },
      getToggleAllRowsExpandedHandler: function getToggleAllRowsExpandedHandler() {
        return function (e) {
          e.persist == null ? void 0 : e.persist();
          table.toggleAllRowsExpanded();
        };
      },
      getIsSomeRowsExpanded: function getIsSomeRowsExpanded() {
        var expanded = table.getState().expanded;
        return expanded === true || Object.values(expanded).some(Boolean);
      },
      getIsAllRowsExpanded: function getIsAllRowsExpanded() {
        var expanded = table.getState().expanded;

        // If expanded is true, save some cycles and return true
        if (typeof expanded === 'boolean') {
          return expanded === true;
        }
        if (!Object.keys(expanded).length) {
          return false;
        }

        // If any row is not expanded, return false
        if (table.getRowModel().flatRows.some(function (row) {
          return !row.getIsExpanded();
        })) {
          return false;
        }

        // They must all be expanded :shrug:
        return true;
      },
      getExpandedDepth: function getExpandedDepth() {
        var maxDepth = 0;
        var rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
        rowIds.forEach(function (id) {
          var splitId = id.split('.');
          maxDepth = Math.max(maxDepth, splitId.length);
        });
        return maxDepth;
      },
      getPreExpandedRowModel: function getPreExpandedRowModel() {
        return table.getSortedRowModel();
      },
      getExpandedRowModel: function getExpandedRowModel() {
        if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
          table._getExpandedRowModel = table.options.getExpandedRowModel(table);
        }
        if (table.options.manualExpanding || !table._getExpandedRowModel) {
          return table.getPreExpandedRowModel();
        }
        return table._getExpandedRowModel();
      }
    };
  },
  createRow: function createRow(row, table) {
    return {
      toggleExpanded: function toggleExpanded(expanded) {
        table.setExpanded(function (old) {
          var _expanded;
          var exists = old === true ? true : !!(old != null && old[row.id]);
          var oldExpanded = {};
          if (old === true) {
            Object.keys(table.getRowModel().rowsById).forEach(function (rowId) {
              oldExpanded[rowId] = true;
            });
          } else {
            oldExpanded = old;
          }
          expanded = (_expanded = expanded) != null ? _expanded : !exists;
          if (!exists && expanded) {
            return _objectSpread(_objectSpread({}, oldExpanded), {}, _defineProperty({}, row.id, true));
          }
          if (exists && !expanded) {
            var _oldExpanded = oldExpanded,
              _row$id = row.id,
              _ = _oldExpanded[_row$id],
              rest = _objectWithoutProperties(_oldExpanded, [_row$id].map(_toPropertyKey));
            return rest;
          }
          return old;
        });
      },
      getIsExpanded: function getIsExpanded() {
        var _table$options$getIsR;
        var expanded = table.getState().expanded;
        return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
      },
      getCanExpand: function getCanExpand() {
        var _table$options$getRow, _table$options$enable, _row$subRows;
        return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
      },
      getToggleExpandedHandler: function getToggleExpandedHandler() {
        var canExpand = row.getCanExpand();
        return function () {
          if (!canExpand) return;
          row.toggleExpanded();
        };
      }
    };
  }
};
var includesString = function includesString(row, columnId, filterValue) {
  var _row$getValue;
  var search = filterValue.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null ? void 0 : _row$getValue.toLowerCase().includes(search));
};
includesString.autoRemove = function (val) {
  return testFalsey(val);
};
var includesStringSensitive = function includesStringSensitive(row, columnId, filterValue) {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = function (val) {
  return testFalsey(val);
};
var equalsString = function equalsString(row, columnId, filterValue) {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null ? void 0 : _row$getValue3.toLowerCase()) === filterValue.toLowerCase();
};
equalsString.autoRemove = function (val) {
  return testFalsey(val);
};
var arrIncludes = function arrIncludes(row, columnId, filterValue) {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = function (val) {
  return testFalsey(val) || !(val != null && val.length);
};
var arrIncludesAll = function arrIncludesAll(row, columnId, filterValue) {
  return !filterValue.some(function (val) {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = function (val) {
  return testFalsey(val) || !(val != null && val.length);
};
var arrIncludesSome = function arrIncludesSome(row, columnId, filterValue) {
  return filterValue.some(function (val) {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = function (val) {
  return testFalsey(val) || !(val != null && val.length);
};
var equals = function equals(row, columnId, filterValue) {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = function (val) {
  return testFalsey(val);
};
var weakEquals = function weakEquals(row, columnId, filterValue) {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = function (val) {
  return testFalsey(val);
};
var inNumberRange = function inNumberRange(row, columnId, filterValue) {
  var _filterValue = _slicedToArray(filterValue, 2),
    min = _filterValue[0],
    max = _filterValue[1];
  var rowValue = row.getValue(columnId);
  return rowValue >= min && rowValue <= max;
};
inNumberRange.resolveFilterValue = function (val) {
  var _val = _slicedToArray(val, 2),
    unsafeMin = _val[0],
    unsafeMax = _val[1];
  var parsedMin = typeof unsafeMin !== 'number' ? parseFloat(unsafeMin) : unsafeMin;
  var parsedMax = typeof unsafeMax !== 'number' ? parseFloat(unsafeMax) : unsafeMax;
  var min = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  var max = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }
  return [min, max];
};
inNumberRange.autoRemove = function (val) {
  return testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
};

// Export

var filterFns = {
  includesString: includesString,
  includesStringSensitive: includesStringSensitive,
  equalsString: equalsString,
  arrIncludes: arrIncludes,
  arrIncludesAll: arrIncludesAll,
  arrIncludesSome: arrIncludesSome,
  equals: equals,
  weakEquals: weakEquals,
  inNumberRange: inNumberRange
};
// Utils

function testFalsey(val) {
  return val === undefined || val === null || val === '';
}

//

var Filters = {
  getDefaultColumnDef: function getDefaultColumnDef() {
    return {
      filterFn: 'auto'
    };
  },
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      columnFilters: [],
      globalFilter: undefined
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onColumnFiltersChange: makeStateUpdater('columnFilters', table),
      onGlobalFilterChange: makeStateUpdater('globalFilter', table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100,
      globalFilterFn: 'auto',
      getColumnCanGlobalFilter: function getColumnCanGlobalFilter(column) {
        var _table$getCoreRowMode, _table$getCoreRowMode2;
        var value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null ? void 0 : (_table$getCoreRowMode2 = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode2.getValue();
        return typeof value === 'string' || typeof value === 'number';
      }
    };
  },
  createColumn: function createColumn(column, table) {
    return {
      getAutoFilterFn: function getAutoFilterFn() {
        var firstRow = table.getCoreRowModel().flatRows[0];
        var value = firstRow == null ? void 0 : firstRow.getValue(column.id);
        if (typeof value === 'string') {
          return filterFns.includesString;
        }
        if (typeof value === 'number') {
          return filterFns.inNumberRange;
        }
        if (typeof value === 'boolean') {
          return filterFns.equals;
        }
        if (value !== null && _typeof(value) === 'object') {
          return filterFns.equals;
        }
        if (Array.isArray(value)) {
          return filterFns.arrIncludes;
        }
        return filterFns.weakEquals;
      },
      getFilterFn: function getFilterFn() {
        var _table$options$filter, _table$options$filter2;
        return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === 'auto' ? column.getAutoFilterFn()
        // @ts-ignore 
        : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn];
      },
      getCanFilter: function getCanFilter() {
        var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
        return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
      },
      getCanGlobalFilter: function getCanGlobalFilter() {
        var _column$columnDef$ena2, _table$options$enable3, _table$options$enable4, _table$options$getCol;
        return ((_column$columnDef$ena2 = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena2 : true) && ((_table$options$enable3 = table.options.enableGlobalFilter) != null ? _table$options$enable3 : true) && ((_table$options$enable4 = table.options.enableFilters) != null ? _table$options$enable4 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
      },
      getIsFiltered: function getIsFiltered() {
        return column.getFilterIndex() > -1;
      },
      getFilterValue: function getFilterValue() {
        var _table$getState$colum, _table$getState$colum2;
        return (_table$getState$colum = table.getState().columnFilters) == null ? void 0 : (_table$getState$colum2 = _table$getState$colum.find(function (d) {
          return d.id === column.id;
        })) == null ? void 0 : _table$getState$colum2.value;
      },
      getFilterIndex: function getFilterIndex() {
        var _table$getState$colum3, _table$getState$colum4;
        return (_table$getState$colum3 = (_table$getState$colum4 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum4.findIndex(function (d) {
          return d.id === column.id;
        })) != null ? _table$getState$colum3 : -1;
      },
      setFilterValue: function setFilterValue(value) {
        table.setColumnFilters(function (old) {
          var filterFn = column.getFilterFn();
          var previousfilter = old == null ? void 0 : old.find(function (d) {
            return d.id === column.id;
          });
          var newFilter = functionalUpdate(value, previousfilter ? previousfilter.value : undefined);

          //
          if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
            var _old$filter;
            return (_old$filter = old == null ? void 0 : old.filter(function (d) {
              return d.id !== column.id;
            })) != null ? _old$filter : [];
          }
          var newFilterObj = {
            id: column.id,
            value: newFilter
          };
          if (previousfilter) {
            var _old$map;
            return (_old$map = old == null ? void 0 : old.map(function (d) {
              if (d.id === column.id) {
                return newFilterObj;
              }
              return d;
            })) != null ? _old$map : [];
          }
          if (old != null && old.length) {
            return [].concat(_toConsumableArray(old), [newFilterObj]);
          }
          return [newFilterObj];
        });
      },
      _getFacetedRowModel: table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id),
      getFacetedRowModel: function getFacetedRowModel() {
        if (!column._getFacetedRowModel) {
          return table.getPreFilteredRowModel();
        }
        return column._getFacetedRowModel();
      },
      _getFacetedUniqueValues: table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id),
      getFacetedUniqueValues: function getFacetedUniqueValues() {
        if (!column._getFacetedUniqueValues) {
          return new Map();
        }
        return column._getFacetedUniqueValues();
      },
      _getFacetedMinMaxValues: table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id),
      getFacetedMinMaxValues: function getFacetedMinMaxValues() {
        if (!column._getFacetedMinMaxValues) {
          return undefined;
        }
        return column._getFacetedMinMaxValues();
      }
      // () => [column.getFacetedRowModel()],
      // facetedRowModel => getRowModelMinMaxValues(facetedRowModel, column.id),
    };
  },

  createRow: function createRow(row, table) {
    return {
      columnFilters: {},
      columnFiltersMeta: {}
    };
  },
  createTable: function createTable(table) {
    return {
      getGlobalAutoFilterFn: function getGlobalAutoFilterFn() {
        return filterFns.includesString;
      },
      getGlobalFilterFn: function getGlobalFilterFn() {
        var _table$options$filter3, _table$options$filter4;
        var globalFilterFn = table.options.globalFilterFn;
        return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === 'auto' ? table.getGlobalAutoFilterFn()
        // @ts-ignore
        : (_table$options$filter3 = (_table$options$filter4 = table.options.filterFns) == null ? void 0 : _table$options$filter4[globalFilterFn]) != null ? _table$options$filter3 : filterFns[globalFilterFn];
      },
      setColumnFilters: function setColumnFilters(updater) {
        var leafColumns = table.getAllLeafColumns();
        var updateFn = function updateFn(old) {
          var _functionalUpdate;
          return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter(function (filter) {
            var column = leafColumns.find(function (d) {
              return d.id === filter.id;
            });
            if (column) {
              var filterFn = column.getFilterFn();
              if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
                return false;
              }
            }
            return true;
          });
        };
        table.options.onColumnFiltersChange == null ? void 0 : table.options.onColumnFiltersChange(updateFn);
      },
      setGlobalFilter: function setGlobalFilter(updater) {
        table.options.onGlobalFilterChange == null ? void 0 : table.options.onGlobalFilterChange(updater);
      },
      resetGlobalFilter: function resetGlobalFilter(defaultState) {
        table.setGlobalFilter(defaultState ? undefined : table.initialState.globalFilter);
      },
      resetColumnFilters: function resetColumnFilters(defaultState) {
        var _table$initialState$c, _table$initialState;
        table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
      },
      getPreFilteredRowModel: function getPreFilteredRowModel() {
        return table.getCoreRowModel();
      },
      getFilteredRowModel: function getFilteredRowModel() {
        if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
          table._getFilteredRowModel = table.options.getFilteredRowModel(table);
        }
        if (table.options.manualFiltering || !table._getFilteredRowModel) {
          return table.getPreFilteredRowModel();
        }
        return table._getFilteredRowModel();
      },
      _getGlobalFacetedRowModel: table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, '__global__'),
      getGlobalFacetedRowModel: function getGlobalFacetedRowModel() {
        if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
          return table.getPreFilteredRowModel();
        }
        return table._getGlobalFacetedRowModel();
      },
      _getGlobalFacetedUniqueValues: table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, '__global__'),
      getGlobalFacetedUniqueValues: function getGlobalFacetedUniqueValues() {
        if (!table._getGlobalFacetedUniqueValues) {
          return new Map();
        }
        return table._getGlobalFacetedUniqueValues();
      },
      _getGlobalFacetedMinMaxValues: table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, '__global__'),
      getGlobalFacetedMinMaxValues: function getGlobalFacetedMinMaxValues() {
        if (!table._getGlobalFacetedMinMaxValues) {
          return;
        }
        return table._getGlobalFacetedMinMaxValues();
      }
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === 'undefined' || typeof value === 'string' && !value;
}
var sum = function sum(columnId, _leafRows, childRows) {
  // It's faster to just add the aggregations together instead of
  // process leaf nodes individually
  return childRows.reduce(function (sum, next) {
    var nextValue = next.getValue(columnId);
    return sum + (typeof nextValue === 'number' ? nextValue : 0);
  }, 0);
};
var min = function min(columnId, _leafRows, childRows) {
  var min;
  childRows.forEach(function (row) {
    var value = row.getValue(columnId);
    if (value != null && (min > value || min === undefined && value >= value)) {
      min = value;
    }
  });
  return min;
};
var max = function max(columnId, _leafRows, childRows) {
  var max;
  childRows.forEach(function (row) {
    var value = row.getValue(columnId);
    if (value != null && (max < value || max === undefined && value >= value)) {
      max = value;
    }
  });
  return max;
};
var extent = function extent(columnId, _leafRows, childRows) {
  var min;
  var max;
  childRows.forEach(function (row) {
    var value = row.getValue(columnId);
    if (value != null) {
      if (min === undefined) {
        if (value >= value) min = max = value;
      } else {
        if (min > value) min = value;
        if (max < value) max = value;
      }
    }
  });
  return [min, max];
};
var mean = function mean(columnId, leafRows) {
  var count = 0;
  var sum = 0;
  leafRows.forEach(function (row) {
    var value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count, sum += value;
    }
  });
  if (count) return sum / count;
  return;
};
var median = function median(columnId, leafRows) {
  if (!leafRows.length) {
    return;
  }
  var min = 0;
  var max = 0;
  leafRows.forEach(function (row) {
    var value = row.getValue(columnId);
    if (typeof value === 'number') {
      min = Math.min(min, value);
      max = Math.max(max, value);
    }
  });
  return (min + max) / 2;
};
var unique = function unique(columnId, leafRows) {
  return Array.from(new Set(leafRows.map(function (d) {
    return d.getValue(columnId);
  })).values());
};
var uniqueCount = function uniqueCount(columnId, leafRows) {
  return new Set(leafRows.map(function (d) {
    return d.getValue(columnId);
  })).size;
};
var count = function count(_columnId, leafRows) {
  return leafRows.length;
};
var aggregationFns = {
  sum: sum,
  min: min,
  max: max,
  extent: extent,
  mean: mean,
  median: median,
  unique: unique,
  uniqueCount: uniqueCount,
  count: count
};

//

var Grouping = {
  getDefaultColumnDef: function getDefaultColumnDef() {
    return {
      aggregatedCell: function aggregatedCell(props) {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null ? void 0 : _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: 'auto'
    };
  },
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      grouping: []
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onGroupingChange: makeStateUpdater('grouping', table),
      groupedColumnMode: 'reorder'
    };
  },
  createColumn: function createColumn(column, table) {
    return {
      toggleGrouping: function toggleGrouping() {
        table.setGrouping(function (old) {
          // Find any existing grouping for this column
          if (old != null && old.includes(column.id)) {
            return old.filter(function (d) {
              return d !== column.id;
            });
          }
          return [].concat(_toConsumableArray(old != null ? old : []), [column.id]);
        });
      },
      getCanGroup: function getCanGroup() {
        var _ref, _ref2, _ref3, _column$columnDef$ena;
        return (_ref = (_ref2 = (_ref3 = (_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) != null ? _ref3 : table.options.enableGrouping) != null ? _ref2 : true) != null ? _ref : !!column.accessorFn;
      },
      getIsGrouped: function getIsGrouped() {
        var _table$getState$group;
        return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
      },
      getGroupedIndex: function getGroupedIndex() {
        var _table$getState$group2;
        return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
      },
      getToggleGroupingHandler: function getToggleGroupingHandler() {
        var canGroup = column.getCanGroup();
        return function () {
          if (!canGroup) return;
          column.toggleGrouping();
        };
      },
      getAutoAggregationFn: function getAutoAggregationFn() {
        var firstRow = table.getCoreRowModel().flatRows[0];
        var value = firstRow == null ? void 0 : firstRow.getValue(column.id);
        if (typeof value === 'number') {
          return aggregationFns.sum;
        }
        if (Object.prototype.toString.call(value) === '[object Date]') {
          return aggregationFns.extent;
        }
      },
      getAggregationFn: function getAggregationFn() {
        var _table$options$aggreg, _table$options$aggreg2;
        if (!column) {
          throw new Error();
        }
        return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === 'auto' ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
      }
    };
  },
  createTable: function createTable(table) {
    return {
      setGrouping: function setGrouping(updater) {
        return table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
      },
      resetGrouping: function resetGrouping(defaultState) {
        var _table$initialState$g, _table$initialState;
        table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
      },
      getPreGroupedRowModel: function getPreGroupedRowModel() {
        return table.getFilteredRowModel();
      },
      getGroupedRowModel: function getGroupedRowModel() {
        if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
          table._getGroupedRowModel = table.options.getGroupedRowModel(table);
        }
        if (table.options.manualGrouping || !table._getGroupedRowModel) {
          return table.getPreGroupedRowModel();
        }
        return table._getGroupedRowModel();
      }
    };
  },
  createRow: function createRow(row) {
    return {
      getIsGrouped: function getIsGrouped() {
        return !!row.groupingColumnId;
      },
      _groupingValuesCache: {}
    };
  },
  createCell: function createCell(cell, column, row, table) {
    return {
      getIsGrouped: function getIsGrouped() {
        return column.getIsGrouped() && column.id === row.groupingColumnId;
      },
      getIsPlaceholder: function getIsPlaceholder() {
        return !cell.getIsGrouped() && column.getIsGrouped();
      },
      getIsAggregated: function getIsAggregated() {
        var _row$subRows;
        return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
      }
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  var nonGroupingColumns = leafColumns.filter(function (col) {
    return !grouping.includes(col.id);
  });
  if (groupedColumnMode === 'remove') {
    return nonGroupingColumns;
  }
  var groupingColumns = grouping.map(function (g) {
    return leafColumns.find(function (col) {
      return col.id === g;
    });
  }).filter(Boolean);
  return [].concat(_toConsumableArray(groupingColumns), _toConsumableArray(nonGroupingColumns));
}

//

var Ordering = {
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      columnOrder: []
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onColumnOrderChange: makeStateUpdater('columnOrder', table)
    };
  },
  createTable: function createTable(table) {
    return {
      setColumnOrder: function setColumnOrder(updater) {
        return table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
      },
      resetColumnOrder: function resetColumnOrder(defaultState) {
        var _table$initialState$c;
        table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
      },
      _getOrderColumnsFn: memo(function () {
        return [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode];
      }, function (columnOrder, grouping, groupedColumnMode) {
        return function (columns) {
          // Sort grouped columns to the start of the column list
          // before the headers are built
          var orderedColumns = [];

          // If there is no order, return the normal columns
          if (!(columnOrder != null && columnOrder.length)) {
            orderedColumns = columns;
          } else {
            var columnOrderCopy = _toConsumableArray(columnOrder);

            // If there is an order, make a copy of the columns
            var columnsCopy = _toConsumableArray(columns);

            // And make a new ordered array of the columns

            // Loop over the columns and place them in order into the new array
            var _loop = function _loop() {
              var targetColumnId = columnOrderCopy.shift();
              var foundIndex = columnsCopy.findIndex(function (d) {
                return d.id === targetColumnId;
              });
              if (foundIndex > -1) {
                orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
              }
            };
            while (columnsCopy.length && columnOrderCopy.length) {
              _loop();
            }

            // If there are any columns left, add them to the end
            orderedColumns = [].concat(_toConsumableArray(orderedColumns), _toConsumableArray(columnsCopy));
          }
          return orderColumns(orderedColumns, grouping, groupedColumnMode);
        };
      }, {
        key:  false && false
        // debug: () => table.options.debugAll ?? table.options.debugTable,
      })
    };
  }
};

//

var defaultPageIndex = 0;
var defaultPageSize = 10;
var getDefaultPaginationState = function getDefaultPaginationState() {
  return {
    pageIndex: defaultPageIndex,
    pageSize: defaultPageSize
  };
};
var Pagination = {
  getInitialState: function getInitialState(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      pagination: _objectSpread(_objectSpread({}, getDefaultPaginationState()), state == null ? void 0 : state.pagination)
    });
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onPaginationChange: makeStateUpdater('pagination', table)
    };
  },
  createTable: function createTable(table) {
    var registered = false;
    var queued = false;
    return {
      _autoResetPageIndex: function _autoResetPageIndex() {
        var _ref, _table$options$autoRe;
        if (!registered) {
          table._queue(function () {
            registered = true;
          });
          return;
        }
        if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
          if (queued) return;
          queued = true;
          table._queue(function () {
            table.resetPageIndex();
            queued = false;
          });
        }
      },
      setPagination: function setPagination(updater) {
        var safeUpdater = function safeUpdater(old) {
          var newState = functionalUpdate(updater, old);
          return newState;
        };
        return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
      },
      resetPagination: function resetPagination(defaultState) {
        var _table$initialState$p;
        table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
      },
      setPageIndex: function setPageIndex(updater) {
        table.setPagination(function (old) {
          var pageIndex = functionalUpdate(updater, old.pageIndex);
          var maxPageIndex = typeof table.options.pageCount === 'undefined' || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
          pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
          return _objectSpread(_objectSpread({}, old), {}, {
            pageIndex: pageIndex
          });
        });
      },
      resetPageIndex: function resetPageIndex(defaultState) {
        var _table$initialState$p2, _table$initialState, _table$initialState$p3;
        table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null ? void 0 : (_table$initialState$p3 = _table$initialState.pagination) == null ? void 0 : _table$initialState$p3.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
      },
      resetPageSize: function resetPageSize(defaultState) {
        var _table$initialState$p4, _table$initialState2, _table$initialState2$;
        table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p4 = (_table$initialState2 = table.initialState) == null ? void 0 : (_table$initialState2$ = _table$initialState2.pagination) == null ? void 0 : _table$initialState2$.pageSize) != null ? _table$initialState$p4 : defaultPageSize);
      },
      setPageSize: function setPageSize(updater) {
        table.setPagination(function (old) {
          var pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
          var topRowIndex = old.pageSize * old.pageIndex;
          var pageIndex = Math.floor(topRowIndex / pageSize);
          return _objectSpread(_objectSpread({}, old), {}, {
            pageIndex: pageIndex,
            pageSize: pageSize
          });
        });
      },
      setPageCount: function setPageCount(updater) {
        return table.setPagination(function (old) {
          var _table$options$pageCo;
          var newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
          if (typeof newPageCount === 'number') {
            newPageCount = Math.max(-1, newPageCount);
          }
          return _objectSpread(_objectSpread({}, old), {}, {
            pageCount: newPageCount
          });
        });
      },
      getPageOptions: memo(function () {
        return [table.getPageCount()];
      }, function (pageCount) {
        var pageOptions = [];
        if (pageCount && pageCount > 0) {
          pageOptions = _toConsumableArray(new Array(pageCount)).fill(null).map(function (_, i) {
            return i;
          });
        }
        return pageOptions;
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
        }
      }),
      getCanPreviousPage: function getCanPreviousPage() {
        return table.getState().pagination.pageIndex > 0;
      },
      getCanNextPage: function getCanNextPage() {
        var pageIndex = table.getState().pagination.pageIndex;
        var pageCount = table.getPageCount();
        if (pageCount === -1) {
          return true;
        }
        if (pageCount === 0) {
          return false;
        }
        return pageIndex < pageCount - 1;
      },
      previousPage: function previousPage() {
        return table.setPageIndex(function (old) {
          return old - 1;
        });
      },
      nextPage: function nextPage() {
        return table.setPageIndex(function (old) {
          return old + 1;
        });
      },
      getPrePaginationRowModel: function getPrePaginationRowModel() {
        return table.getExpandedRowModel();
      },
      getPaginationRowModel: function getPaginationRowModel() {
        if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
          table._getPaginationRowModel = table.options.getPaginationRowModel(table);
        }
        if (table.options.manualPagination || !table._getPaginationRowModel) {
          return table.getPrePaginationRowModel();
        }
        return table._getPaginationRowModel();
      },
      getPageCount: function getPageCount() {
        var _table$options$pageCo2;
        return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getPrePaginationRowModel().rows.length / table.getState().pagination.pageSize);
      }
    };
  }
};

//

var getDefaultPinningState = function getDefaultPinningState() {
  return {
    left: [],
    right: []
  };
};
var Pinning = {
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      columnPinning: getDefaultPinningState()
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onColumnPinningChange: makeStateUpdater('columnPinning', table)
    };
  },
  createColumn: function createColumn(column, table) {
    return {
      pin: function pin(position) {
        var columnIds = column.getLeafColumns().map(function (d) {
          return d.id;
        }).filter(Boolean);
        table.setColumnPinning(function (old) {
          var _old$left3, _old$right3;
          if (position === 'right') {
            var _old$left, _old$right;
            return {
              left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter(function (d) {
                return !(columnIds != null && columnIds.includes(d));
              }),
              right: [].concat(_toConsumableArray(((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter(function (d) {
                return !(columnIds != null && columnIds.includes(d));
              })), _toConsumableArray(columnIds))
            };
          }
          if (position === 'left') {
            var _old$left2, _old$right2;
            return {
              left: [].concat(_toConsumableArray(((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter(function (d) {
                return !(columnIds != null && columnIds.includes(d));
              })), _toConsumableArray(columnIds)),
              right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter(function (d) {
                return !(columnIds != null && columnIds.includes(d));
              })
            };
          }
          return {
            left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter(function (d) {
              return !(columnIds != null && columnIds.includes(d));
            }),
            right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter(function (d) {
              return !(columnIds != null && columnIds.includes(d));
            })
          };
        });
      },
      getCanPin: function getCanPin() {
        var leafColumns = column.getLeafColumns();
        return leafColumns.some(function (d) {
          var _d$columnDef$enablePi, _table$options$enable;
          return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_table$options$enable = table.options.enablePinning) != null ? _table$options$enable : true);
        });
      },
      getIsPinned: function getIsPinned() {
        var leafColumnIds = column.getLeafColumns().map(function (d) {
          return d.id;
        });
        var _table$getState$colum5 = table.getState().columnPinning,
          left = _table$getState$colum5.left,
          right = _table$getState$colum5.right;
        var isLeft = leafColumnIds.some(function (d) {
          return left == null ? void 0 : left.includes(d);
        });
        var isRight = leafColumnIds.some(function (d) {
          return right == null ? void 0 : right.includes(d);
        });
        return isLeft ? 'left' : isRight ? 'right' : false;
      },
      getPinnedIndex: function getPinnedIndex() {
        var _table$getState$colum, _table$getState$colum2, _table$getState$colum3;
        var position = column.getIsPinned();
        return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null ? void 0 : (_table$getState$colum3 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum3.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
      }
    };
  },
  createRow: function createRow(row, table) {
    return {
      getCenterVisibleCells: memo(function () {
        return [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right];
      }, function (allCells, left, right) {
        var leftAndRight = [].concat(_toConsumableArray(left != null ? left : []), _toConsumableArray(right != null ? right : []));
        return allCells.filter(function (d) {
          return !leftAndRight.includes(d.column.id);
        });
      }, {
        key:  true && 'row.getCenterVisibleCells',
        debug: function debug() {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
        }
      }),
      getLeftVisibleCells: memo(function () {
        return [row._getAllVisibleCells(), table.getState().columnPinning.left,,];
      }, function (allCells, left) {
        var cells = (left != null ? left : []).map(function (columnId) {
          return allCells.find(function (cell) {
            return cell.column.id === columnId;
          });
        }).filter(Boolean).map(function (d) {
          return _objectSpread(_objectSpread({}, d), {}, {
            position: 'left'
          });
        });
        return cells;
      }, {
        key:  true && 'row.getLeftVisibleCells',
        debug: function debug() {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
        }
      }),
      getRightVisibleCells: memo(function () {
        return [row._getAllVisibleCells(), table.getState().columnPinning.right];
      }, function (allCells, right) {
        var cells = (right != null ? right : []).map(function (columnId) {
          return allCells.find(function (cell) {
            return cell.column.id === columnId;
          });
        }).filter(Boolean).map(function (d) {
          return _objectSpread(_objectSpread({}, d), {}, {
            position: 'right'
          });
        });
        return cells;
      }, {
        key:  true && 'row.getRightVisibleCells',
        debug: function debug() {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugRows;
        }
      })
    };
  },
  createTable: function createTable(table) {
    return {
      setColumnPinning: function setColumnPinning(updater) {
        return table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
      },
      resetColumnPinning: function resetColumnPinning(defaultState) {
        var _table$initialState$c, _table$initialState;
        return table.setColumnPinning(defaultState ? getDefaultPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultPinningState());
      },
      getIsSomeColumnsPinned: function getIsSomeColumnsPinned(position) {
        var _pinningState$positio;
        var pinningState = table.getState().columnPinning;
        if (!position) {
          var _pinningState$left, _pinningState$right;
          return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
        }
        return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
      },
      getLeftLeafColumns: memo(function () {
        return [table.getAllLeafColumns(), table.getState().columnPinning.left];
      }, function (allColumns, left) {
        return (left != null ? left : []).map(function (columnId) {
          return allColumns.find(function (column) {
            return column.id === columnId;
          });
        }).filter(Boolean);
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA4;
          return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
        }
      }),
      getRightLeafColumns: memo(function () {
        return [table.getAllLeafColumns(), table.getState().columnPinning.right];
      }, function (allColumns, right) {
        return (right != null ? right : []).map(function (columnId) {
          return allColumns.find(function (column) {
            return column.id === columnId;
          });
        }).filter(Boolean);
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA5;
          return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
        }
      }),
      getCenterLeafColumns: memo(function () {
        return [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right];
      }, function (allColumns, left, right) {
        var leftAndRight = [].concat(_toConsumableArray(left != null ? left : []), _toConsumableArray(right != null ? right : []));
        return allColumns.filter(function (d) {
          return !leftAndRight.includes(d.id);
        });
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA6;
          return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugColumns;
        }
      })
    };
  }
};

//

var RowSelection = {
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      rowSelection: {}
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onRowSelectionChange: makeStateUpdater('rowSelection', table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },

  createTable: function createTable(table) {
    return {
      setRowSelection: function setRowSelection(updater) {
        return table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
      },
      resetRowSelection: function resetRowSelection(defaultState) {
        var _table$initialState$r;
        return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
      },
      toggleAllRowsSelected: function toggleAllRowsSelected(value) {
        table.setRowSelection(function (old) {
          value = typeof value !== 'undefined' ? value : !table.getIsAllRowsSelected();
          var rowSelection = _objectSpread({}, old);
          var preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;

          // We don't use `mutateRowIsSelected` here for performance reasons.
          // All of the rows are flat already, so it wouldn't be worth it
          if (value) {
            preGroupedFlatRows.forEach(function (row) {
              if (!row.getCanSelect()) {
                return;
              }
              rowSelection[row.id] = true;
            });
          } else {
            preGroupedFlatRows.forEach(function (row) {
              delete rowSelection[row.id];
            });
          }
          return rowSelection;
        });
      },
      toggleAllPageRowsSelected: function toggleAllPageRowsSelected(value) {
        return table.setRowSelection(function (old) {
          var resolvedValue = typeof value !== 'undefined' ? value : !table.getIsAllPageRowsSelected();
          var rowSelection = _objectSpread({}, old);
          table.getRowModel().rows.forEach(function (row) {
            mutateRowIsSelected(rowSelection, row.id, resolvedValue, table);
          });
          return rowSelection;
        });
      },
      // addRowSelectionRange: rowId => {
      //   const {
      //     rows,
      //     rowsById,
      //     options: { selectGroupingRows, selectSubRows },
      //   } = table

      //   const findSelectedRow = (rows: Row[]) => {
      //     let found
      //     rows.find(d => {
      //       if (d.getIsSelected()) {
      //         found = d
      //         return true
      //       }
      //       const subFound = findSelectedRow(d.subRows || [])
      //       if (subFound) {
      //         found = subFound
      //         return true
      //       }
      //       return false
      //     })
      //     return found
      //   }

      //   const firstRow = findSelectedRow(rows) || rows[0]
      //   const lastRow = rowsById[rowId]

      //   let include = false
      //   const selectedRowIds = {}

      //   const addRow = (row: Row) => {
      //     mutateRowIsSelected(selectedRowIds, row.id, true, {
      //       rowsById,
      //       selectGroupingRows: selectGroupingRows!,
      //       selectSubRows: selectSubRows!,
      //     })
      //   }

      //   table.rows.forEach(row => {
      //     const isFirstRow = row.id === firstRow.id
      //     const isLastRow = row.id === lastRow.id

      //     if (isFirstRow || isLastRow) {
      //       if (!include) {
      //         include = true
      //       } else if (include) {
      //         addRow(row)
      //         include = false
      //       }
      //     }

      //     if (include) {
      //       addRow(row)
      //     }
      //   })

      //   table.setRowSelection(selectedRowIds)
      // },
      getPreSelectedRowModel: function getPreSelectedRowModel() {
        return table.getCoreRowModel();
      },
      getSelectedRowModel: memo(function () {
        return [table.getState().rowSelection, table.getCoreRowModel()];
      }, function (rowSelection, rowModel) {
        if (!Object.keys(rowSelection).length) {
          return {
            rows: [],
            flatRows: [],
            rowsById: {}
          };
        }
        return selectRowsFn(table, rowModel);
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
        }
      }),
      getFilteredSelectedRowModel: memo(function () {
        return [table.getState().rowSelection, table.getFilteredRowModel()];
      }, function (rowSelection, rowModel) {
        if (!Object.keys(rowSelection).length) {
          return {
            rows: [],
            flatRows: [],
            rowsById: {}
          };
        }
        return selectRowsFn(table, rowModel);
      }, {
        key:  true && 'getFilteredSelectedRowModel',
        debug: function debug() {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugTable;
        }
      }),
      getGroupedSelectedRowModel: memo(function () {
        return [table.getState().rowSelection, table.getSortedRowModel()];
      }, function (rowSelection, rowModel) {
        if (!Object.keys(rowSelection).length) {
          return {
            rows: [],
            flatRows: [],
            rowsById: {}
          };
        }
        return selectRowsFn(table, rowModel);
      }, {
        key:  true && 'getGroupedSelectedRowModel',
        debug: function debug() {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugTable;
        }
      }),
      ///

      // getGroupingRowCanSelect: rowId => {
      //   const row = table.getRow(rowId)

      //   if (!row) {
      //     throw new Error()
      //   }

      //   if (typeof table.options.enableGroupingRowSelection === 'function') {
      //     return table.options.enableGroupingRowSelection(row)
      //   }

      //   return table.options.enableGroupingRowSelection ?? false
      // },

      getIsAllRowsSelected: function getIsAllRowsSelected() {
        var preGroupedFlatRows = table.getFilteredRowModel().flatRows;
        var _table$getState = table.getState(),
          rowSelection = _table$getState.rowSelection;
        var isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
        if (isAllRowsSelected) {
          if (preGroupedFlatRows.some(function (row) {
            return row.getCanSelect() && !rowSelection[row.id];
          })) {
            isAllRowsSelected = false;
          }
        }
        return isAllRowsSelected;
      },
      getIsAllPageRowsSelected: function getIsAllPageRowsSelected() {
        var paginationFlatRows = table.getPaginationRowModel().flatRows;
        var _table$getState2 = table.getState(),
          rowSelection = _table$getState2.rowSelection;
        var isAllPageRowsSelected = !!paginationFlatRows.length;
        if (isAllPageRowsSelected && paginationFlatRows.some(function (row) {
          return !rowSelection[row.id];
        })) {
          isAllPageRowsSelected = false;
        }
        return isAllPageRowsSelected;
      },
      getIsSomeRowsSelected: function getIsSomeRowsSelected() {
        var _table$getState$rowSe;
        var totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
        return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
      },
      getIsSomePageRowsSelected: function getIsSomePageRowsSelected() {
        var paginationFlatRows = table.getPaginationRowModel().flatRows;
        return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.some(function (d) {
          return d.getIsSelected() || d.getIsSomeSelected();
        });
      },
      getToggleAllRowsSelectedHandler: function getToggleAllRowsSelectedHandler() {
        return function (e) {
          table.toggleAllRowsSelected(e.target.checked);
        };
      },
      getToggleAllPageRowsSelectedHandler: function getToggleAllPageRowsSelectedHandler() {
        return function (e) {
          table.toggleAllPageRowsSelected(e.target.checked);
        };
      }
    };
  },
  createRow: function createRow(row, table) {
    return {
      toggleSelected: function toggleSelected(value) {
        var isSelected = row.getIsSelected();
        table.setRowSelection(function (old) {
          value = typeof value !== 'undefined' ? value : !isSelected;
          if (isSelected === value) {
            return old;
          }
          var selectedRowIds = _objectSpread({}, old);
          mutateRowIsSelected(selectedRowIds, row.id, value, table);
          return selectedRowIds;
        });
      },
      getIsSelected: function getIsSelected() {
        var _table$getState3 = table.getState(),
          rowSelection = _table$getState3.rowSelection;
        return isRowSelected(row, rowSelection);
      },
      getIsSomeSelected: function getIsSomeSelected() {
        var _table$getState4 = table.getState(),
          rowSelection = _table$getState4.rowSelection;
        return isSubRowSelected(row, rowSelection) === 'some';
      },
      getIsAllSubRowsSelected: function getIsAllSubRowsSelected() {
        var _table$getState5 = table.getState(),
          rowSelection = _table$getState5.rowSelection;
        return isSubRowSelected(row, rowSelection) === 'all';
      },
      getCanSelect: function getCanSelect() {
        var _table$options$enable;
        if (typeof table.options.enableRowSelection === 'function') {
          return table.options.enableRowSelection(row);
        }
        return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
      },
      getCanSelectSubRows: function getCanSelectSubRows() {
        var _table$options$enable2;
        if (typeof table.options.enableSubRowSelection === 'function') {
          return table.options.enableSubRowSelection(row);
        }
        return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
      },
      getCanMultiSelect: function getCanMultiSelect() {
        var _table$options$enable3;
        if (typeof table.options.enableMultiRowSelection === 'function') {
          return table.options.enableMultiRowSelection(row);
        }
        return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
      },
      getToggleSelectedHandler: function getToggleSelectedHandler() {
        var canSelect = row.getCanSelect();
        return function (e) {
          var _target;
          if (!canSelect) return;
          row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
        };
      }
    };
  }
};
var mutateRowIsSelected = function mutateRowIsSelected(selectedRowIds, id, value, table) {
  var _row$subRows;
  var row = table.getRow(id);

  // const isGrouped = row.getIsGrouped()

  // if ( // TODO: enforce grouping row selection rules
  //   !isGrouped ||
  //   (isGrouped && table.options.enableGroupingRowSelection)
  // ) {
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach(function (key) {
        return delete selectedRowIds[key];
      });
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  // }

  if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach(function (row) {
      return mutateRowIsSelected(selectedRowIds, row.id, value, table);
    });
  }
};
function selectRowsFn(table, rowModel) {
  var rowSelection = table.getState().rowSelection;
  var newSelectedFlatRows = [];
  var newSelectedRowsById = {};

  // Filters top level and nested rows
  var recurseRows = function recurseRows(rows, depth) {
    return rows.map(function (row) {
      var _row$subRows2;
      var isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = _objectSpread(_objectSpread({}, row), {}, {
          subRows: recurseRows(row.subRows)
        });
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  if (row.subRows && row.subRows.length) {
    var allChildrenSelected = true;
    var someSelected = false;
    row.subRows.forEach(function (subRow) {
      // Bail out early if we know both of these
      if (someSelected && !allChildrenSelected) {
        return;
      }
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    });
    return allChildrenSelected ? 'all' : someSelected ? 'some' : false;
  }
  return false;
}
var reSplitAlphaNumeric = /([0-9]+)/gm;
var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
var alphanumericCaseSensitive = function alphanumericCaseSensitive(rowA, rowB, columnId) {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};

// The text filter is more basic (less numeric support)
// but is much faster
var text = function text(rowA, rowB, columnId) {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};

// The text filter is more basic (less numeric support)
// but is much faster
var textCaseSensitive = function textCaseSensitive(rowA, rowB, columnId) {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
var datetime = function datetime(rowA, rowB, columnId) {
  var a = rowA.getValue(columnId);
  var b = rowB.getValue(columnId);

  // Can handle nullish values
  // Use > and < because == (and ===) doesn't work with
  // Date objects (would require calling getTime()).
  return a > b ? 1 : a < b ? -1 : 0;
};
var basic = function basic(rowA, rowB, columnId) {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};

// Utils

function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
  if (typeof a === 'number') {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return '';
    }
    return String(a);
  }
  if (typeof a === 'string') {
    return a;
  }
  return '';
}

// Mixed sorting is slow, but very inclusive of many edge cases.
// It handles numbers, mixed alphanumeric combinations, and even
// null, undefined, and Infinity
function compareAlphanumeric(aStr, bStr) {
  // Split on number groups, but keep the delimiter
  // Then remove falsey split values
  var a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  var b = bStr.split(reSplitAlphaNumeric).filter(Boolean);

  // While
  while (a.length && b.length) {
    var aa = a.shift();
    var bb = b.shift();
    var an = parseInt(aa, 10);
    var bn = parseInt(bb, 10);
    var combo = [an, bn].sort();

    // Both are string
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }

    // One is a string, one is a number
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }

    // Both are numbers
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a.length - b.length;
}

// Exports

var sortingFns = {
  alphanumeric: alphanumeric,
  alphanumericCaseSensitive: alphanumericCaseSensitive,
  text: text,
  textCaseSensitive: textCaseSensitive,
  datetime: datetime,
  basic: basic
};

//

var Sorting = {
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      sorting: []
    }, state);
  },
  getDefaultColumnDef: function getDefaultColumnDef() {
    return {
      sortingFn: 'auto'
    };
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onSortingChange: makeStateUpdater('sorting', table),
      isMultiSortEvent: function isMultiSortEvent(e) {
        return e.shiftKey;
      }
    };
  },
  createColumn: function createColumn(column, table) {
    return {
      getAutoSortingFn: function getAutoSortingFn() {
        var firstRows = table.getFilteredRowModel().flatRows.slice(10);
        var isString = false;
        var _iterator2 = _createForOfIteratorHelper(firstRows),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var row = _step2.value;
            var value = row == null ? void 0 : row.getValue(column.id);
            if (Object.prototype.toString.call(value) === '[object Date]') {
              return sortingFns.datetime;
            }
            if (typeof value === 'string') {
              isString = true;
              if (value.split(reSplitAlphaNumeric).length > 1) {
                return sortingFns.alphanumeric;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (isString) {
          return sortingFns.text;
        }
        return sortingFns.basic;
      },
      getAutoSortDir: function getAutoSortDir() {
        var firstRow = table.getFilteredRowModel().flatRows[0];
        var value = firstRow == null ? void 0 : firstRow.getValue(column.id);
        if (typeof value === 'string') {
          return 'asc';
        }
        return 'desc';
      },
      getSortingFn: function getSortingFn() {
        var _table$options$sortin, _table$options$sortin2;
        if (!column) {
          throw new Error();
        }
        return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === 'auto' ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
      },
      toggleSorting: function toggleSorting(desc, multi) {
        // if (column.columns.length) {
        //   column.columns.forEach((c, i) => {
        //     if (c.id) {
        //       table.toggleColumnSorting(c.id, undefined, multi || !!i)
        //     }
        //   })
        //   return
        // }

        // this needs to be outside of table.setSorting to be in sync with rerender
        var nextSortingOrder = column.getNextSortingOrder();
        var hasManualValue = typeof desc !== 'undefined' && desc !== null;
        table.setSorting(function (old) {
          // Find any existing sorting for this column
          var existingSorting = old == null ? void 0 : old.find(function (d) {
            return d.id === column.id;
          });
          var existingIndex = old == null ? void 0 : old.findIndex(function (d) {
            return d.id === column.id;
          });
          var newSorting = [];

          // What should we do with this sort action?
          var sortAction;
          var nextDesc = hasManualValue ? desc : nextSortingOrder === 'desc';

          // Multi-mode
          if (old != null && old.length && column.getCanMultiSort() && multi) {
            if (existingSorting) {
              sortAction = 'toggle';
            } else {
              sortAction = 'add';
            }
          } else {
            // Normal mode
            if (old != null && old.length && existingIndex !== old.length - 1) {
              sortAction = 'replace';
            } else if (existingSorting) {
              sortAction = 'toggle';
            } else {
              sortAction = 'replace';
            }
          }

          // Handle toggle states that will remove the sorting
          if (sortAction === 'toggle') {
            // If we are "actually" toggling (not a manual set value), should we remove the sorting?
            if (!hasManualValue) {
              // Is our intention to remove?
              if (!nextSortingOrder) {
                sortAction = 'remove';
              }
            }
          }
          if (sortAction === 'add') {
            var _table$options$maxMul;
            newSorting = [].concat(_toConsumableArray(old), [{
              id: column.id,
              desc: nextDesc
            }]);
            // Take latest n columns
            newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
          } else if (sortAction === 'toggle') {
            // This flips (or sets) the
            newSorting = old.map(function (d) {
              if (d.id === column.id) {
                return _objectSpread(_objectSpread({}, d), {}, {
                  desc: nextDesc
                });
              }
              return d;
            });
          } else if (sortAction === 'remove') {
            newSorting = old.filter(function (d) {
              return d.id !== column.id;
            });
          } else {
            newSorting = [{
              id: column.id,
              desc: nextDesc
            }];
          }
          return newSorting;
        });
      },
      getFirstSortDir: function getFirstSortDir() {
        var _ref, _column$columnDef$sor;
        var sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === 'desc';
        return sortDescFirst ? 'desc' : 'asc';
      },
      getNextSortingOrder: function getNextSortingOrder(multi) {
        var _table$options$enable, _table$options$enable2;
        var firstSortDirection = column.getFirstSortDir();
        var isSorted = column.getIsSorted();
        if (!isSorted) {
          return firstSortDirection;
        }
        if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && (
        // If enableSortRemove, enable in general
        multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true) // If multi, don't allow if enableMultiRemove))
        ) {
          return false;
        }
        return isSorted === 'desc' ? 'asc' : 'desc';
      },
      getCanSort: function getCanSort() {
        var _column$columnDef$ena, _table$options$enable3;
        return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
      },
      getCanMultiSort: function getCanMultiSort() {
        var _ref2, _column$columnDef$ena2;
        return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
      },
      getIsSorted: function getIsSorted() {
        var _table$getState$sorti;
        var columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find(function (d) {
          return d.id === column.id;
        });
        return !columnSort ? false : columnSort.desc ? 'desc' : 'asc';
      },
      getSortIndex: function getSortIndex() {
        var _table$getState$sorti2, _table$getState$sorti3;
        return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex(function (d) {
          return d.id === column.id;
        })) != null ? _table$getState$sorti2 : -1;
      },
      clearSorting: function clearSorting() {
        //clear sorting for just 1 column
        table.setSorting(function (old) {
          return old != null && old.length ? old.filter(function (d) {
            return d.id !== column.id;
          }) : [];
        });
      },
      getToggleSortingHandler: function getToggleSortingHandler() {
        var canSort = column.getCanSort();
        return function (e) {
          if (!canSort) return;
          e.persist == null ? void 0 : e.persist();
          column.toggleSorting == null ? void 0 : column.toggleSorting(undefined, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
        };
      }
    };
  },
  createTable: function createTable(table) {
    return {
      setSorting: function setSorting(updater) {
        return table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
      },
      resetSorting: function resetSorting(defaultState) {
        var _table$initialState$s, _table$initialState;
        table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
      },
      getPreSortedRowModel: function getPreSortedRowModel() {
        return table.getGroupedRowModel();
      },
      getSortedRowModel: function getSortedRowModel() {
        if (!table._getSortedRowModel && table.options.getSortedRowModel) {
          table._getSortedRowModel = table.options.getSortedRowModel(table);
        }
        if (table.options.manualSorting || !table._getSortedRowModel) {
          return table.getPreSortedRowModel();
        }
        return table._getSortedRowModel();
      }
    };
  }
};

//

var Visibility = {
  getInitialState: function getInitialState(state) {
    return _objectSpread({
      columnVisibility: {}
    }, state);
  },
  getDefaultOptions: function getDefaultOptions(table) {
    return {
      onColumnVisibilityChange: makeStateUpdater('columnVisibility', table)
    };
  },
  createColumn: function createColumn(column, table) {
    return {
      toggleVisibility: function toggleVisibility(value) {
        if (column.getCanHide()) {
          table.setColumnVisibility(function (old) {
            return _objectSpread(_objectSpread({}, old), {}, _defineProperty({}, column.id, value != null ? value : !column.getIsVisible()));
          });
        }
      },
      getIsVisible: function getIsVisible() {
        var _table$getState$colum, _table$getState$colum2;
        return (_table$getState$colum = (_table$getState$colum2 = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum2[column.id]) != null ? _table$getState$colum : true;
      },
      getCanHide: function getCanHide() {
        var _column$columnDef$ena, _table$options$enable;
        return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
      },
      getToggleVisibilityHandler: function getToggleVisibilityHandler() {
        return function (e) {
          column.toggleVisibility == null ? void 0 : column.toggleVisibility(e.target.checked);
        };
      }
    };
  },
  createRow: function createRow(row, table) {
    return {
      _getAllVisibleCells: memo(function () {
        return [row.getAllCells(), table.getState().columnVisibility];
      }, function (cells) {
        return cells.filter(function (cell) {
          return cell.column.getIsVisible();
        });
      }, {
        key:  true && 'row._getAllVisibleCells',
        debug: function debug() {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
        }
      }),
      getVisibleCells: memo(function () {
        return [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()];
      }, function (left, center, right) {
        return [].concat(_toConsumableArray(left), _toConsumableArray(center), _toConsumableArray(right));
      }, {
        key:  false && false,
        debug: function debug() {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
        }
      })
    };
  },
  createTable: function createTable(table) {
    var makeVisibleColumnsMethod = function makeVisibleColumnsMethod(key, getColumns) {
      return memo(function () {
        return [getColumns(), getColumns().filter(function (d) {
          return d.getIsVisible();
        }).map(function (d) {
          return d.id;
        }).join('_')];
      }, function (columns) {
        return columns.filter(function (d) {
          return d.getIsVisible == null ? void 0 : d.getIsVisible();
        });
      }, {
        key: key,
        debug: function debug() {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
        }
      });
    };
    return {
      getVisibleFlatColumns: makeVisibleColumnsMethod('getVisibleFlatColumns', function () {
        return table.getAllFlatColumns();
      }),
      getVisibleLeafColumns: makeVisibleColumnsMethod('getVisibleLeafColumns', function () {
        return table.getAllLeafColumns();
      }),
      getLeftVisibleLeafColumns: makeVisibleColumnsMethod('getLeftVisibleLeafColumns', function () {
        return table.getLeftLeafColumns();
      }),
      getRightVisibleLeafColumns: makeVisibleColumnsMethod('getRightVisibleLeafColumns', function () {
        return table.getRightLeafColumns();
      }),
      getCenterVisibleLeafColumns: makeVisibleColumnsMethod('getCenterVisibleLeafColumns', function () {
        return table.getCenterLeafColumns();
      }),
      setColumnVisibility: function setColumnVisibility(updater) {
        return table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
      },
      resetColumnVisibility: function resetColumnVisibility(defaultState) {
        var _table$initialState$c;
        table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
      },
      toggleAllColumnsVisible: function toggleAllColumnsVisible(value) {
        var _value;
        value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
        table.setColumnVisibility(table.getAllLeafColumns().reduce(function (obj, column) {
          return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, column.id, !value ? !(column.getCanHide != null && column.getCanHide()) : value));
        }, {}));
      },
      getIsAllColumnsVisible: function getIsAllColumnsVisible() {
        return !table.getAllLeafColumns().some(function (column) {
          return !(column.getIsVisible != null && column.getIsVisible());
        });
      },
      getIsSomeColumnsVisible: function getIsSomeColumnsVisible() {
        return table.getAllLeafColumns().some(function (column) {
          return column.getIsVisible == null ? void 0 : column.getIsVisible();
        });
      },
      getToggleAllColumnsVisibilityHandler: function getToggleAllColumnsVisibilityHandler() {
        return function (e) {
          var _target;
          table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
        };
      }
    };
  }
};
var features = [Headers, Visibility, Ordering, Pinning, Filters, Sorting, Grouping, Expanding, Pagination, RowSelection, ColumnSizing];

//

function createTable(options) {
  var _options$initialState;
  if (options.debugAll || options.debugTable) {
    console.info('Creating Table Instance...');
  }
  var table = {
    _features: features
  };
  var defaultOptions = table._features.reduce(function (obj, feature) {
    return _extends(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  var mergeOptions = function mergeOptions(options) {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options);
    }
    return _objectSpread(_objectSpread({}, defaultOptions), options);
  };
  var coreInitialState = {};
  var initialState = _objectSpread(_objectSpread({}, coreInitialState), (_options$initialState = options.initialState) != null ? _options$initialState : {});
  table._features.forEach(function (feature) {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  var queued = [];
  var queuedTimeout = false;
  var coreInstance = {
    _features: features,
    options: _objectSpread(_objectSpread({}, defaultOptions), options),
    initialState: initialState,
    _queue: function _queue(cb) {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;

        // Schedule a microtask to run the queued callbacks after
        // the current call stack (render, etc) has finished.
        Promise.resolve().then(function () {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch(function (error) {
          return setTimeout(function () {
            throw error;
          });
        });
      }
    },
    reset: function reset() {
      table.setState(table.initialState);
    },
    setOptions: function setOptions(updater) {
      var newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: function getState() {
      return table.options.state;
    },
    setState: function setState(updater) {
      table.options.onStateChange == null ? void 0 : table.options.onStateChange(updater);
    },
    _getRowId: function _getRowId(row, index, parent) {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : "".concat(parent ? [parent.id, index].join('.') : index);
    },
    getCoreRowModel: function getCoreRowModel() {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up

    getRowModel: function getRowModel() {
      return table.getPaginationRowModel();
    },
    getRow: function getRow(id) {
      var row = table.getRowModel().rowsById[id];
      if (!row) {
        if (false) {}
        throw new Error();
      }
      return row;
    },
    _getDefaultColumnDef: memo(function () {
      return [table.options.defaultColumn];
    }, function (defaultColumn) {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return _objectSpread(_objectSpread({
        header: function header(props) {
          var resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: function cell(props) {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null ? void 0 : _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        }
      }, table._features.reduce(function (obj, feature) {
        return _extends(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
      }, {})), defaultColumn);
    }, {
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
      },
      key:  false && false
    }),
    _getColumnDefs: function _getColumnDefs() {
      return table.options.columns;
    },
    getAllColumns: memo(function () {
      return [table._getColumnDefs()];
    }, function (columnDefs) {
      var recurseColumns = function recurseColumns(columnDefs, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs.map(function (columnDef) {
          var column = createColumn(table, columnDef, depth, parent);
          var groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
      }
    }),
    getAllFlatColumns: memo(function () {
      return [table.getAllColumns()];
    }, function (allColumns) {
      return allColumns.flatMap(function (column) {
        return column.getFlatColumns();
      });
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
      }
    }),
    _getAllFlatColumnsById: memo(function () {
      return [table.getAllFlatColumns()];
    }, function (flatColumns) {
      return flatColumns.reduce(function (acc, column) {
        acc[column.id] = column;
        return acc;
      }, {});
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA4;
        return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
      }
    }),
    getAllLeafColumns: memo(function () {
      return [table.getAllColumns(), table._getOrderColumnsFn()];
    }, function (allColumns, orderColumns) {
      var leafColumns = allColumns.flatMap(function (column) {
        return column.getLeafColumns();
      });
      return orderColumns(leafColumns);
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA5;
        return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
      }
    }),
    getColumn: function getColumn(columnId) {
      var column = table._getAllFlatColumnsById()[columnId];
      if (!column) {
        if (false) {}
        throw new Error();
      }
      return column;
    }
  };
  _extends(table, coreInstance);
  table._features.forEach(function (feature) {
    return _extends(table, feature.createTable == null ? void 0 : feature.createTable(table));
  });
  return table;
}
function createCell(table, row, column, columnId) {
  var getRenderValue = function getRenderValue() {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  var cell = {
    id: "".concat(row.id, "_").concat(column.id),
    row: row,
    column: column,
    getValue: function getValue() {
      return row.getValue(columnId);
    },
    renderValue: getRenderValue,
    getContext: memo(function () {
      return [table, column, row, cell];
    }, function (table, column, row, cell) {
      return {
        table: table,
        column: column,
        row: row,
        cell: cell,
        getValue: cell.getValue,
        renderValue: cell.renderValue
      };
    }, {
      key:  false && false,
      debug: function debug() {
        return table.options.debugAll;
      }
    })
  };
  table._features.forEach(function (feature) {
    _extends(cell, feature.createCell == null ? void 0 : feature.createCell(cell, column, row, table));
  }, {});
  return cell;
}
var createRow = function createRow(table, id, original, rowIndex, depth, subRows) {
  var row = {
    id: id,
    index: rowIndex,
    original: original,
    depth: depth,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: function getValue(columnId) {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      var column = table.getColumn(columnId);
      if (!column.accessorFn) {
        return undefined;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: function getUniqueValues(columnId) {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      var column = table.getColumn(columnId);
      if (!column.accessorFn) {
        return undefined;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: function renderValue(columnId) {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: subRows != null ? subRows : [],
    getLeafRows: function getLeafRows() {
      return flattenBy(row.subRows, function (d) {
        return d.subRows;
      });
    },
    getAllCells: memo(function () {
      return [table.getAllLeafColumns()];
    }, function (leafColumns) {
      return leafColumns.map(function (column) {
        return createCell(table, row, column, column.id);
      });
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
      }
    }),
    _getAllCellsByColumnId: memo(function () {
      return [row.getAllCells()];
    }, function (allCells) {
      return allCells.reduce(function (acc, cell) {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, {
      key:  true && 'row.getAllCellsByColumnId',
      debug: function debug() {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
      }
    })
  };
  for (var i = 0; i < table._features.length; i++) {
    var feature = table._features[i];
    _extends(row, feature == null ? void 0 : feature.createRow == null ? void 0 : feature.createRow(row, table));
  }
  return row;
};

// type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   status: string
//   progress: number
//   createdAt: Date
//   nested: {
//     foo: [
//       {
//         bar: 'bar'
//       }
//     ]
//     bar: { subBar: boolean }[]
//     baz: {
//       foo: 'foo'
//       bar: {
//         baz: 'baz'
//       }
//     }
//   }
// }

// const test: DeepKeys<Person> = 'nested.foo.0.bar'
// const test2: DeepKeys<Person> = 'nested.bar'

// const helper = createColumnHelper<Person>()

// helper.accessor('nested.foo', {
//   cell: info => info.getValue(),
// })

// helper.accessor('nested.foo.0.bar', {
//   cell: info => info.getValue(),
// })

// helper.accessor('nested.bar', {
//   cell: info => info.getValue(),
// })

function createColumnHelper() {
  return {
    accessor: function accessor(_accessor, column) {
      return typeof _accessor === 'function' ? _objectSpread(_objectSpread({}, column), {}, {
        accessorFn: _accessor
      }) : _objectSpread(_objectSpread({}, column), {}, {
        accessorKey: _accessor
      });
    },
    display: function display(column) {
      return column;
    },
    group: function group(column) {
      return column;
    }
  };
}
function getCoreRowModel() {
  return function (table) {
    return memo(function () {
      return [table.options.data];
    }, function (data) {
      var rowModel = {
        rows: [],
        flatRows: [],
        rowsById: {}
      };
      var accessRows = function accessRows(originalRows, depth, parent) {
        if (depth === void 0) {
          depth = 0;
        }
        var rows = [];
        for (var i = 0; i < originalRows.length; i++) {
          // This could be an expensive check at scale, so we should move it somewhere else, but where?
          // if (!id) {
          //   if (process.env.NODE_ENV !== 'production') {
          //     throw new Error(`getRowId expected an ID, but got ${id}`)
          //   }
          // }

          // Make the row
          var row = createRow(table, table._getRowId(originalRows[i], i, parent), originalRows[i], i, depth);

          // Keep track of every row in a flat array
          rowModel.flatRows.push(row);
          // Also keep track of every row by its ID
          rowModel.rowsById[row.id] = row;
          // Push table row into parent
          rows.push(row);

          // Get the original subrows
          if (table.options.getSubRows) {
            var _row$originalSubRows;
            row.originalSubRows = table.options.getSubRows(originalRows[i], i);

            // Then recursively access them
            if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
              row.subRows = accessRows(row.originalSubRows, depth + 1, row);
            }
          }
        }
        return rows;
      };
      rowModel.rows = accessRows(data);
      return rowModel;
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: function onChange() {
        table._autoResetPageIndex();
      }
    });
  };
}
function filterRows(rows, filterRowImpl, table) {
  if (table.options.filterFromLeafRows) {
    return filterRowModelFromLeafs(rows, filterRowImpl, table);
  }
  return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
  var _table$options$maxLea;
  var newFilteredFlatRows = [];
  var newFilteredRowsById = {};
  var maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
  var recurseFilterRows = function recurseFilterRows(rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    var rows = [];

    // Filter from children up first
    for (var i = 0; i < rowsToFilter.length; i++) {
      var _row$subRows;
      var row = rowsToFilter[i];
      var newRow = createRow(table, row.id, row.original, row.index, row.depth);
      newRow.columnFilters = row.columnFilters;
      if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
        newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
        row = newRow;
        if (filterRow(row) && !newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredRowsById[i] = row;
          continue;
        }
        if (filterRow(row) || newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredRowsById[i] = row;
          continue;
        }
      } else {
        row = newRow;
        if (filterRow(row)) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredRowsById[i] = row;
        }
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
  var _table$options$maxLea2;
  var newFilteredFlatRows = [];
  var newFilteredRowsById = {};
  var maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;

  // Filters top level and nested rows
  var recurseFilterRows = function recurseFilterRows(rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    // Filter from parents downward first

    var rows = [];

    // Apply the filter to any subRows
    for (var i = 0; i < rowsToFilter.length; i++) {
      var row = rowsToFilter[i];
      var pass = filterRow(row);
      if (pass) {
        var _row$subRows2;
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
          var newRow = createRow(table, row.id, row.original, row.index, row.depth);
          newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
          row = newRow;
        }
        rows.push(row);
        newFilteredFlatRows.push(row);
        newFilteredRowsById[row.id] = row;
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function getFilteredRowModel() {
  return function (table) {
    return memo(function () {
      return [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter];
    }, function (rowModel, columnFilters, globalFilter) {
      if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
        for (var i = 0; i < rowModel.flatRows.length; i++) {
          rowModel.flatRows[i].columnFilters = {};
          rowModel.flatRows[i].columnFiltersMeta = {};
        }
        return rowModel;
      }
      var resolvedColumnFilters = [];
      var resolvedGlobalFilters = [];
      (columnFilters != null ? columnFilters : []).forEach(function (d) {
        var _filterFn$resolveFilt;
        var column = table.getColumn(d.id);
        if (!column) {
          if (false) {}
        }
        var filterFn = column.getFilterFn();
        if (!filterFn) {
          if (false) {}
          return;
        }
        resolvedColumnFilters.push({
          id: d.id,
          filterFn: filterFn,
          resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d.value)) != null ? _filterFn$resolveFilt : d.value
        });
      });
      var filterableIds = columnFilters.map(function (d) {
        return d.id;
      });
      var globalFilterFn = table.getGlobalFilterFn();
      var globallyFilterableColumns = table.getAllLeafColumns().filter(function (column) {
        return column.getCanGlobalFilter();
      });
      if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
        filterableIds.push('__global__');
        globallyFilterableColumns.forEach(function (column) {
          var _globalFilterFn$resol;
          resolvedGlobalFilters.push({
            id: column.id,
            filterFn: globalFilterFn,
            resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
          });
        });
      }
      var currentColumnFilter;
      var currentGlobalFilter;

      // Flag the prefiltered row model with each filter state
      var _loop2 = function _loop2() {
        var row = rowModel.flatRows[j];
        row.columnFilters = {};
        if (resolvedColumnFilters.length) {
          var _loop3 = function _loop3() {
            currentColumnFilter = resolvedColumnFilters[_i3];
            var id = currentColumnFilter.id;

            // Tag the row with the column filter state
            row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, function (filterMeta) {
              row.columnFiltersMeta[id] = filterMeta;
            });
          };
          for (var _i3 = 0; _i3 < resolvedColumnFilters.length; _i3++) {
            _loop3();
          }
        }
        if (resolvedGlobalFilters.length) {
          var _loop4 = function _loop4() {
            currentGlobalFilter = resolvedGlobalFilters[_i4];
            var id = currentGlobalFilter.id;
            // Tag the row with the first truthy global filter state
            if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, function (filterMeta) {
              row.columnFiltersMeta[id] = filterMeta;
            })) {
              row.columnFilters.__global__ = true;
              return "break";
            }
          };
          for (var _i4 = 0; _i4 < resolvedGlobalFilters.length; _i4++) {
            var _ret = _loop4();
            if (_ret === "break") break;
          }
          if (row.columnFilters.__global__ !== true) {
            row.columnFilters.__global__ = false;
          }
        }
      };
      for (var j = 0; j < rowModel.flatRows.length; j++) {
        _loop2();
      }
      var filterRowsImpl = function filterRowsImpl(row) {
        // Horizontally filter rows through each column
        for (var _i2 = 0; _i2 < filterableIds.length; _i2++) {
          if (row.columnFilters[filterableIds[_i2]] === false) {
            return false;
          }
        }
        return true;
      };

      // Filter final rows using all of the active filters
      return filterRows(rowModel.rows, filterRowsImpl, table);
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: function onChange() {
        table._autoResetPageIndex();
      }
    });
  };
}
function getFacetedRowModel() {
  return function (table, columnId) {
    return memo(function () {
      return [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter, table.getFilteredRowModel()];
    }, function (preRowModel, columnFilters, globalFilter) {
      if (!preRowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
        return preRowModel;
      }
      var filterableIds = [].concat(_toConsumableArray(columnFilters.map(function (d) {
        return d.id;
      }).filter(function (d) {
        return d !== columnId;
      })), [globalFilter ? '__global__' : undefined]).filter(Boolean);
      var filterRowsImpl = function filterRowsImpl(row) {
        // Horizontally filter rows through each column
        for (var i = 0; i < filterableIds.length; i++) {
          if (row.columnFilters[filterableIds[i]] === false) {
            return false;
          }
        }
        return true;
      };
      return filterRows(preRowModel.rows, filterRowsImpl, table);
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: function onChange() {}
    });
  };
}
function getFacetedUniqueValues() {
  return function (table, columnId) {
    return memo(function () {
      return [table.getColumn(columnId).getFacetedRowModel()];
    }, function (facetedRowModel) {
      var facetedUniqueValues = new Map();
      for (var i = 0; i < facetedRowModel.flatRows.length; i++) {
        var values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
        for (var j = 0; j < values.length; j++) {
          var value = values[j];
          if (facetedUniqueValues.has(value)) {
            var _facetedUniqueValues$;
            facetedUniqueValues.set(value, ((_facetedUniqueValues$ = facetedUniqueValues.get(value)) != null ? _facetedUniqueValues$ : 0) + 1);
          } else {
            facetedUniqueValues.set(value, 1);
          }
        }
      }
      return facetedUniqueValues;
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: function onChange() {}
    });
  };
}
function getFacetedMinMaxValues() {
  return function (table, columnId) {
    return memo(function () {
      return [table.getColumn(columnId).getFacetedRowModel()];
    }, function (facetedRowModel) {
      var _facetedRowModel$flat;
      var firstValue = (_facetedRowModel$flat = facetedRowModel.flatRows[0]) == null ? void 0 : _facetedRowModel$flat.getUniqueValues(columnId);
      if (typeof firstValue === 'undefined') {
        return undefined;
      }
      var facetedMinMaxValues = [firstValue, firstValue];
      for (var i = 0; i < facetedRowModel.flatRows.length; i++) {
        var values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
        for (var j = 0; j < values.length; j++) {
          var value = values[j];
          if (value < facetedMinMaxValues[0]) {
            facetedMinMaxValues[0] = value;
          } else if (value > facetedMinMaxValues[1]) {
            facetedMinMaxValues[1] = value;
          }
        }
      }
      return facetedMinMaxValues;
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: function onChange() {}
    });
  };
}
function getSortedRowModel() {
  return function (table) {
    return memo(function () {
      return [table.getState().sorting, table.getPreSortedRowModel()];
    }, function (sorting, rowModel) {
      if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
        return rowModel;
      }
      var sortingState = table.getState().sorting;
      var sortedFlatRows = [];

      // Filter out sortings that correspond to non existing columns
      var availableSorting = sortingState.filter(function (sort) {
        return table.getColumn(sort.id).getCanSort();
      });
      var columnInfoById = {};
      availableSorting.forEach(function (sortEntry) {
        var column = table.getColumn(sortEntry.id);
        columnInfoById[sortEntry.id] = {
          sortUndefined: column.columnDef.sortUndefined,
          invertSorting: column.columnDef.invertSorting,
          sortingFn: column.getSortingFn()
        };
      });
      var sortData = function sortData(rows) {
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = _toConsumableArray(rows);
        sortedData.sort(function (rowA, rowB) {
          for (var i = 0; i < availableSorting.length; i += 1) {
            var _sortEntry$desc;
            var sortEntry = availableSorting[i];
            var columnInfo = columnInfoById[sortEntry.id];
            var isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
            if (columnInfo.sortUndefined) {
              var aValue = rowA.getValue(sortEntry.id);
              var bValue = rowB.getValue(sortEntry.id);
              var aUndefined = typeof aValue === 'undefined';
              var bUndefined = typeof bValue === 'undefined';
              if (aUndefined || bUndefined) {
                return aUndefined && bUndefined ? 0 : aUndefined ? columnInfo.sortUndefined : -columnInfo.sortUndefined;
              }
            }

            // This function should always return in ascending order
            var sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
            if (sortInt !== 0) {
              if (isDesc) {
                sortInt *= -1;
              }
              if (columnInfo.invertSorting) {
                sortInt *= -1;
              }
              return sortInt;
            }
          }
          return rowA.index - rowB.index;
        });

        // If there are sub-rows, sort them
        sortedData.forEach(function (row) {
          var _row$subRows;
          sortedFlatRows.push(row);
          if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
            row.subRows = sortData(row.subRows);
          }
        });
        return sortedData;
      };
      return {
        rows: sortData(rowModel.rows),
        flatRows: sortedFlatRows,
        rowsById: rowModel.rowsById
      };
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: function onChange() {
        table._autoResetPageIndex();
      }
    });
  };
}
function getGroupedRowModel() {
  return function (table) {
    return memo(function () {
      return [table.getState().grouping, table.getPreGroupedRowModel()];
    }, function (grouping, rowModel) {
      if (!rowModel.rows.length || !grouping.length) {
        return rowModel;
      }

      // Filter the grouping list down to columns that exist
      var existingGrouping = grouping.filter(function (columnId) {
        return table.getColumn(columnId);
      });
      var groupedFlatRows = [];
      var groupedRowsById = {};
      // const onlyGroupedFlatRows: Row[] = [];
      // const onlyGroupedRowsById: Record<RowId, Row> = {};
      // const nonGroupedFlatRows: Row[] = [];
      // const nonGroupedRowsById: Record<RowId, Row> = {};

      // Recursively group the data
      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }
        // Grouping depth has been been met
        // Stop grouping and simply rewrite thd depth and row relationships
        if (depth >= existingGrouping.length) {
          return rows.map(function (row) {
            row.depth = depth;
            groupedFlatRows.push(row);
            groupedRowsById[row.id] = row;
            if (row.subRows) {
              row.subRows = groupUpRecursively(row.subRows, depth + 1);
            }
            return row;
          });
        }
        var columnId = existingGrouping[depth];

        // Group the rows together for this level
        var rowGroupsMap = groupBy(rows, columnId);

        // Peform aggregations for each group
        var aggregatedGroupedRows = Array.from(rowGroupsMap.entries()).map(function (_ref, index) {
          var _ref5 = _slicedToArray(_ref, 2),
            groupingValue = _ref5[0],
            groupedRows = _ref5[1];
          var id = "".concat(columnId, ":").concat(groupingValue);
          id = parentId ? "".concat(parentId, ">").concat(id) : id;

          // First, Recurse to group sub rows before aggregation
          var subRows = groupUpRecursively(groupedRows, depth + 1, id);

          // Flatten the leaf rows of the rows in this group
          var leafRows = depth ? flattenBy(groupedRows, function (row) {
            return row.subRows;
          }) : groupedRows;
          var row = createRow(table, id, leafRows[0].original, index, depth);
          _extends(row, {
            groupingColumnId: columnId,
            groupingValue: groupingValue,
            subRows: subRows,
            leafRows: leafRows,
            getValue: function getValue(columnId) {
              // Don't aggregate columns that are in the grouping
              if (existingGrouping.includes(columnId)) {
                if (row._valuesCache.hasOwnProperty(columnId)) {
                  return row._valuesCache[columnId];
                }
                if (groupedRows[0]) {
                  var _groupedRows$0$getVal;
                  row._valuesCache[columnId] = (_groupedRows$0$getVal = groupedRows[0].getValue(columnId)) != null ? _groupedRows$0$getVal : undefined;
                }
                return row._valuesCache[columnId];
              }
              if (row._groupingValuesCache.hasOwnProperty(columnId)) {
                return row._groupingValuesCache[columnId];
              }

              // Aggregate the values
              var column = table.getColumn(columnId);
              var aggregateFn = column.getAggregationFn();
              if (aggregateFn) {
                row._groupingValuesCache[columnId] = aggregateFn(columnId, leafRows, groupedRows);
                return row._groupingValuesCache[columnId];
              }
            }
          });
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;
            // if (subRow.getIsGrouped?.()) {
            //   onlyGroupedFlatRows.push(subRow);
            //   onlyGroupedRowsById[subRow.id] = subRow;
            // } else {
            //   nonGroupedFlatRows.push(subRow);
            //   nonGroupedRowsById[subRow.id] = subRow;
            // }
          });

          return row;
        });
        return aggregatedGroupedRows;
      };
      var groupedRows = groupUpRecursively(rowModel.rows, 0, '');
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;
        // if (subRow.getIsGrouped?.()) {
        //   onlyGroupedFlatRows.push(subRow);
        //   onlyGroupedRowsById[subRow.id] = subRow;
        // } else {
        //   nonGroupedFlatRows.push(subRow);
        //   nonGroupedRowsById[subRow.id] = subRow;
        // }
      });

      return {
        rows: groupedRows,
        flatRows: groupedFlatRows,
        rowsById: groupedRowsById
      };
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: function onChange() {
        table._queue(function () {
          table._autoResetExpanded();
          table._autoResetPageIndex();
        });
      }
    });
  };
}
function groupBy(rows, columnId) {
  var groupMap = new Map();
  return rows.reduce(function (map, row) {
    var resKey = "".concat(row.getValue(columnId));
    var previous = map.get(resKey);
    if (!previous) {
      map.set(resKey, [row]);
    } else {
      previous.push(row);
    }
    return map;
  }, groupMap);
}
function getExpandedRowModel() {
  return function (table) {
    return memo(function () {
      return [table.getState().expanded, table.getPreExpandedRowModel(), table.options.paginateExpandedRows];
    }, function (expanded, rowModel, paginateExpandedRows) {
      if (!rowModel.rows.length || expanded !== true && !Object.keys(expanded != null ? expanded : {}).length) {
        return rowModel;
      }
      if (!paginateExpandedRows) {
        // Only expand rows at this point if they are being paginated
        return rowModel;
      }
      return expandRows(rowModel);
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      }
    });
  };
}
function expandRows(rowModel) {
  var expandedRows = [];
  var handleRow = function handleRow(row) {
    var _row$subRows;
    expandedRows.push(row);
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
      row.subRows.forEach(handleRow);
    }
  };
  rowModel.rows.forEach(handleRow);
  return {
    rows: expandedRows,
    flatRows: rowModel.flatRows,
    rowsById: rowModel.rowsById
  };
}
function getPaginationRowModel(opts) {
  return function (table) {
    return memo(function () {
      return [table.getState().pagination, table.getPrePaginationRowModel(), table.options.paginateExpandedRows ? undefined : table.getState().expanded];
    }, function (pagination, rowModel) {
      if (!rowModel.rows.length) {
        return rowModel;
      }
      var pageSize = pagination.pageSize,
        pageIndex = pagination.pageIndex;
      var rows = rowModel.rows,
        flatRows = rowModel.flatRows,
        rowsById = rowModel.rowsById;
      var pageStart = pageSize * pageIndex;
      var pageEnd = pageStart + pageSize;
      rows = rows.slice(pageStart, pageEnd);
      var paginatedRowModel;
      if (!table.options.paginateExpandedRows) {
        paginatedRowModel = expandRows({
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById
        });
      } else {
        paginatedRowModel = {
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById
        };
      }
      paginatedRowModel.flatRows = [];
      var handleRow = function handleRow(row) {
        paginatedRowModel.flatRows.push(row);
        if (row.subRows.length) {
          row.subRows.forEach(handleRow);
        }
      };
      paginatedRowModel.rows.forEach(handleRow);
      return paginatedRowModel;
    }, {
      key:  false && false,
      debug: function debug() {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      }
    });
  };
}


/***/ }),

/***/ "qVkA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/preact/debug/dist/debug.module.js + 1 modules
var debug_module = __webpack_require__("y+LV");

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js

var EMPTY$1 = {};
function preact_router_es_assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (preact_router_es_canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var preact_router_es_Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(external_preact_["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          preact_router_es_assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(external_preact_["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(external_preact_["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(external_preact_["Component"]);
var preact_router_es_Link = function Link(props) {
  return Object(external_preact_["createElement"])('a', preact_router_es_assign({
    onClick: handleLinkClick
  }, props));
};
var preact_router_es_Route = function Route(props) {
  return Object(external_preact_["createElement"])(props.component, props);
};
preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
// EXTERNAL MODULE: ./routes/home/index.tsx
var home = __webpack_require__("KyR8");

// CONCATENATED MODULE: ./components/app.tsx


// Code-splitting is automated for `routes` directory

var base = '/plateup-leaderboard';
var app_App = function App() {
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es_Router, null, Object(external_preact_["h"])(preact_router_es_Route, {
    path: base,
    component: home["a" /* default */]
  }), Object(external_preact_["h"])(preact_router_es_Route, {
    default: true,
    component: home["a" /* default */]
  }))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.ts



/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "y+LV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: resetPropWarnings

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact/devtools/dist/devtools.module.js

function devtools_module_t(o, e) {
  return external_preact_["options"].__a && external_preact_["options"].__a(e), o;
}
"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.11.3", external_preact_["options"], {
  Fragment: external_preact_["Fragment"],
  Component: external_preact_["Component"]
});

// CONCATENATED MODULE: ../node_modules/preact/debug/dist/debug.module.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var debug_module_o = {};
function debug_module_r() {
  debug_module_o = {};
}
function debug_module_a(e) {
  return e.type === external_preact_["Fragment"] ? "Fragment" : "function" == typeof e.type ? e.type.displayName || e.type.name : "string" == typeof e.type ? e.type : "#text";
}
var i = [],
  c = [];
function debug_module_s() {
  return i.length > 0 ? i[i.length - 1] : null;
}
var debug_module_u = !1;
function l(e) {
  return "function" == typeof e.type && e.type != external_preact_["Fragment"];
}
function f(n) {
  for (var e = [n], t = n; null != t.__o;) e.push(t.__o), t = t.__o;
  return e.reduce(function (n, e) {
    n += "  in " + debug_module_a(e);
    var t = e.__source;
    return t ? n += " (at " + t.fileName + ":" + t.lineNumber + ")" : debug_module_u || (debug_module_u = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
  }, "");
}
var p = "function" == typeof WeakMap;
function d(n) {
  return n ? "function" == typeof n.type ? d(n.__) : n : {};
}
var debug_module_h = external_preact_["Component"].prototype.setState;
external_preact_["Component"].prototype.setState = function (n, e) {
  return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f(debug_module_s())), debug_module_h.call(this, n, e);
};
var debug_module_v = external_preact_["Component"].prototype.forceUpdate;
function y(n) {
  var e = n.props,
    t = debug_module_a(n),
    o = "";
  for (var r in e) if (e.hasOwnProperty(r) && "children" !== r) {
    var i = e[r];
    "function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), o += " " + r + "=" + JSON.stringify(i);
  }
  var c = e.children;
  return "<" + t + o + (c && c.length ? ">..</" + t + ">" : " />");
}
external_preact_["Component"].prototype.forceUpdate = function (n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f(debug_module_s())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + f(this.__v)), debug_module_v.call(this, n);
}, function () {
  !function () {
    var n = external_preact_["options"].__b,
      t = external_preact_["options"].diffed,
      o = external_preact_["options"].__,
      r = external_preact_["options"].vnode,
      a = external_preact_["options"].__r;
    external_preact_["options"].diffed = function (n) {
      l(n) && c.pop(), i.pop(), t && t(n);
    }, external_preact_["options"].__b = function (e) {
      l(e) && i.push(e), n && n(e);
    }, external_preact_["options"].__ = function (n, e) {
      c = [], o && o(n, e);
    }, external_preact_["options"].vnode = function (n) {
      n.__o = c.length > 0 ? c[c.length - 1] : null, r && r(n);
    }, external_preact_["options"].__r = function (n) {
      l(n) && c.push(n), a && a(n);
    };
  }();
  var n = !1,
    t = external_preact_["options"].__b,
    r = external_preact_["options"].diffed,
    s = external_preact_["options"].vnode,
    u = external_preact_["options"].__e,
    h = external_preact_["options"].__,
    v = external_preact_["options"].__h,
    m = p ? {
      useEffect: new WeakMap(),
      useLayoutEffect: new WeakMap(),
      lazyPropTypes: new WeakMap()
    } : null,
    b = [];
  external_preact_["options"].__e = function (n, e, t, o) {
    if (e && e.__c && "function" == typeof n.then) {
      var r = n;
      n = new Error("Missing Suspense. The throwing component was: " + debug_module_a(e));
      for (var i = e; i; i = i.__) if (i.__c && i.__c.__c) {
        n = r;
        break;
      }
      if (n instanceof Error) throw n;
    }
    try {
      (o = o || {}).componentStack = f(e), u(n, e, t, o), "function" != typeof n.then && setTimeout(function () {
        throw n;
      });
    } catch (n) {
      throw n;
    }
  }, external_preact_["options"].__ = function (n, e) {
    if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var t;
    switch (e.nodeType) {
      case 1:
      case 11:
      case 9:
        t = !0;
        break;
      default:
        t = !1;
    }
    if (!t) {
      var o = debug_module_a(n);
      throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + e + " instead: render(<" + o + " />, " + e + ");");
    }
    h && h(n, e);
  }, external_preact_["options"].__b = function (e) {
    var r = e.type,
      i = d(e.__);
    if (n = !0, void 0 === r) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y(e) + "\n\n" + f(e));
    if (null != r && "object" == _typeof(r)) {
      if (void 0 !== r.__k && void 0 !== r.__e) throw new Error("Invalid type passed to createElement(): " + r + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + debug_module_a(e) + " = " + y(r) + ";\n  let vnode = <My" + debug_module_a(e) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f(e));
      throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r) ? "array" : r));
    }
    if ("thead" !== r && "tfoot" !== r && "tbody" !== r || "table" === i.type ? "tr" === r && "thead" !== i.type && "tfoot" !== i.type && "tbody" !== i.type && "table" !== i.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(e) + "\n\n" + f(e)) : "td" === r && "tr" !== i.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(e) + "\n\n" + f(e)) : "th" === r && "tr" !== i.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(e) + "\n\n" + f(e)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(e) + "\n\n" + f(e)), void 0 !== e.ref && "function" != typeof e.ref && "object" != _typeof(e.ref) && !("$$typeof" in e)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + _typeof(e.ref) + "] instead\n" + y(e) + "\n\n" + f(e));
    if ("string" == typeof e.type) for (var c in e.props) if ("o" === c[0] && "n" === c[1] && "function" != typeof e.props[c] && null != e.props[c]) throw new Error("Component's \"" + c + '" property should be a function, but got [' + _typeof(e.props[c]) + "] instead\n" + y(e) + "\n\n" + f(e));
    if ("function" == typeof e.type && e.type.propTypes) {
      if ("Lazy" === e.type.displayName && m && !m.lazyPropTypes.has(e.type)) {
        var s = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
        try {
          var u = e.type();
          m.lazyPropTypes.set(e.type, !0), console.warn(s + "Component wrapped in lazy() is " + debug_module_a(u));
        } catch (n) {
          console.warn(s + "We will log the wrapped component's name once it is loaded.");
        }
      }
      var l = e.props;
      e.type.__f && delete (l = function (n, e) {
        for (var t in e) n[t] = e[t];
        return n;
      }({}, l)).ref, function (n, e, t, r, a) {
        Object.keys(n).forEach(function (t) {
          var i;
          try {
            i = n[t](e, t, r, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n) {
            i = n;
          }
          i && !(i.message in debug_module_o) && (debug_module_o[i.message] = !0, console.error("Failed prop type: " + i.message + (a && "\n" + a() || "")));
        });
      }(e.type.propTypes, l, 0, debug_module_a(e), function () {
        return f(e);
      });
    }
    t && t(e);
  }, external_preact_["options"].__h = function (e, t, o) {
    if (!e || !n) throw new Error("Hook can only be invoked from render methods.");
    v && v(e, t, o);
  };
  var w = function w(n, e) {
      return {
        get: function get() {
          var t = "get" + n + e;
          b && b.indexOf(t) < 0 && (b.push(t), console.warn("getting vnode." + n + " is deprecated, " + e));
        },
        set: function set() {
          var t = "set" + n + e;
          b && b.indexOf(t) < 0 && (b.push(t), console.warn("setting vnode." + n + " is not allowed, " + e));
        }
      };
    },
    g = {
      nodeName: w("nodeName", "use vnode.type"),
      attributes: w("attributes", "use vnode.props"),
      children: w("children", "use vnode.props.children")
    },
    E = Object.create({}, g);
  external_preact_["options"].vnode = function (n) {
    var e = n.props;
    if (null !== n.type && null != e && ("__source" in e || "__self" in e)) {
      var t = n.props = {};
      for (var o in e) {
        var r = e[o];
        "__source" === o ? n.__source = r : "__self" === o ? n.__self = r : t[o] = r;
      }
    }
    n.__proto__ = E, s && s(n);
  }, external_preact_["options"].diffed = function (e) {
    if (e.__k && e.__k.forEach(function (n) {
      if (n && void 0 === n.type) {
        delete n.__, delete n.__b;
        var t = Object.keys(n).join(",");
        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t + "}.\n\n" + f(e));
      }
    }), n = !1, r && r(e), null != e.__k) for (var t = [], o = 0; o < e.__k.length; o++) {
      var a = e.__k[o];
      if (a && null != a.key) {
        var i = a.key;
        if (-1 !== t.indexOf(i)) {
          console.error('Following component has two or more children with the same key attribute: "' + i + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y(e) + "\n\n" + f(e));
          break;
        }
        t.push(i);
      }
    }
  };
}();


/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map