"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsCountryFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _constants = require("../../../config/constants");
var _GoSearch = _interopRequireDefault(require("@meronex/icons/go/GoSearch"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SettingsCountryFilter = function SettingsCountryFilter(props) {
  var defaultValue = props.defaultValue,
    handleSelectChange = props.handleSelectChange,
    label = props.label,
    description = props.description;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(_constants.countryList),
    _useState2 = _slicedToArray(_useState, 2),
    timeZoneList = _useState2[0],
    setTimeZoneList = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultValue),
    _useState4 = _slicedToArray(_useState3, 2),
    searchVal = _useState4[0],
    setSearchVal = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowCountryList = _useState6[0],
    setIsShowCountryList = _useState6[1];
  var countryRef = (0, _react.useRef)(null);
  var filterTimeZone = function filterTimeZone(evt) {
    var timeZoneToFilter = _toConsumableArray(_constants.countryList);
    var _timeZoneList = timeZoneToFilter === null || timeZoneToFilter === void 0 ? void 0 : timeZoneToFilter.filter(function (item) {
      var _item$code;
      return item === null || item === void 0 || (_item$code = item.code) === null || _item$code === void 0 ? void 0 : _item$code.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase());
    });
    setTimeZoneList(_timeZoneList);
    setSearchVal(evt.target.value);
  };
  var handleChangeTimeZone = function handleChangeTimeZone(code) {
    handleSelectChange(code);
    setSearchVal(code);
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _countryRef$current;
    if (!isShowCountryList) return;
    var outsideTimeZone = !((_countryRef$current = countryRef.current) !== null && _countryRef$current !== void 0 && _countryRef$current.contains(e.target));
    if (outsideTimeZone) {
      setIsShowCountryList(false);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [isShowCountryList]);
  return /*#__PURE__*/_react.default.createElement(_styles.CountrySelectWrapper, null, label && /*#__PURE__*/_react.default.createElement("label", null, label), description && /*#__PURE__*/_react.default.createElement("p", null, description), /*#__PURE__*/_react.default.createElement(_styles.CountrySearchWrapper, {
    ref: countryRef
  }, /*#__PURE__*/_react.default.createElement(_styles.CountrySearchInput, {
    type: "text",
    placeholder: t('SELECT_A_OPTION', 'Select a option'),
    value: searchVal,
    onChange: filterTimeZone,
    onClick: function onClick() {
      return setIsShowCountryList(true);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.SearchIconWrapper, null, /*#__PURE__*/_react.default.createElement(_GoSearch.default, null))), isShowCountryList && /*#__PURE__*/_react.default.createElement(_styles.CountryListContainer, null, timeZoneList && (timeZoneList === null || timeZoneList === void 0 ? void 0 : timeZoneList.map(function (timezone, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.CountryListItem, {
      key: i,
      onClick: function onClick() {
        return handleChangeTimeZone(timezone.code.toLocaleLowerCase());
      },
      active: timezone.code.toLocaleLowerCase() === searchVal
    }, timezone.name, " (", timezone.code, ")");
  }))));
};
exports.SettingsCountryFilter = SettingsCountryFilter;