"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Select = require("../../styles/Select");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LanguageSelectorUI = function LanguageSelectorUI(props) {
  var _languagesState$langu, _languages$;
  var languagesState = props.languagesState,
    currentLanguage = props.currentLanguage,
    handleChangeLanguage = props.handleChangeLanguage,
    notReload = props.notReload,
    defaultLanguages = props.defaultLanguages,
    defaultCurrentLanguage = props.defaultCurrentLanguage;
  var _languages = languagesState === null || languagesState === void 0 || (_languagesState$langu = languagesState.languages) === null || _languagesState$langu === void 0 ? void 0 : _languagesState$langu.map(function (language) {
    return {
      value: language === null || language === void 0 ? void 0 : language.code,
      content: language === null || language === void 0 ? void 0 : language.name
    };
  });
  _languages && _languages.sort(function (a, b) {
    return a.content > b.content ? 1 : b.content > a.content ? -1 : 0;
  });
  return _languages && _languages.length > 1 ? /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Globe2, null), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    optionInnerMaxHeight: "300px",
    options: languagesState !== null && languagesState !== void 0 && languagesState.loading ? defaultLanguages : _languages,
    defaultValue: languagesState !== null && languagesState !== void 0 && languagesState.loading ? defaultCurrentLanguage : currentLanguage,
    onChange: function onChange(languageId) {
      return handleChangeLanguage(languageId, true);
    },
    notReload: notReload,
    minWidth: "200px"
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _languages && _languages.length === 1 ? /*#__PURE__*/_react.default.createElement(_styles.LanguageItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Globe2, null), /*#__PURE__*/_react.default.createElement(_styles.LanguageText, null, (_languages$ = _languages[0]) === null || _languages$ === void 0 ? void 0 : _languages$.content)) : null);
};
var LanguageSelector = exports.LanguageSelector = function LanguageSelector(props) {
  var DefaultChangeLanguage = function DefaultChangeLanguage() {};
  var langProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage,
    defaultLanguages: [{
      content: 'English',
      showOnSelected: 'EN',
      value: 'en'
    }],
    defaultCurrentLanguage: 'en'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.LanguageSelector, langProps);
};