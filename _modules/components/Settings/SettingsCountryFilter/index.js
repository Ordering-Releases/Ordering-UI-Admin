"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsCountryFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _constants = require("../../../config/constants");
var _GoSearch = _interopRequireDefault(require("@meronex/icons/go/GoSearch"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SettingsCountryFilter = exports.SettingsCountryFilter = function SettingsCountryFilter(props) {
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