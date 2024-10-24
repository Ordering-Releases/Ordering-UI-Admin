"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserTypeSelector = exports.WrapperPassword = exports.TogglePassword = exports.SkeletonForm = exports.InputWrapper = exports.FormInput = exports.DriverZoneRestrictionWrapper = exports.CalendarWrapper = exports.ActionsForm = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  div.phone_number {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n  input {\n    color: ", ";\n  }\n  input.form {\n    padding: 10px 15px;\n    width: 100%;\n    margin-bottom: 20px;\n    box-sizing: border-box;\n    &:disabled {\n      background-color: rgba(239, 239, 239, 0.3);\n      cursor: not-allowed;\n    }\n  }\n  div.PhoneInput {\n    input {\n      border-radius: 8px;\n    }\n  }\n  > button {\n    width: 100%;\n    padding: 7px 0;\n  }\n  @media (min-width: 769px) {\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      div.phone_number  {\n        width: 49%;\n      }\n    "])));
});
var ActionsForm = exports.ActionsForm = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  button {\n    flex: 1;\n    margin-top: 10px;\n    padding: 7px 0px;\n    width: 49%;\n    box-sizing: border-box;\n\n    &:disabled {\n      cursor: not-allowed;\n    }\n\n    &:nth-child(2) {\n      margin-left: 10px;\n    }\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    button {\n      &:nth-child(1) {\n        margin-right: 0px;\n      }\n      &:last-child {\n        margin-right: 5px;\n      }\n    }\n  "])));
});
var SkeletonForm = exports.SkeletonForm = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  justify-content: center;\n  height: auto;\n  display: inline-flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-top: 0px;\n  > * {\n    width: 100%;\n    margin: 10px 0;\n    display: inline;\n    height: 50px;\n    span{\n      border-radius: 16px;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media (min-width: 768px){\n    justify-content: flex-start;\n    > * {\n      width: calc(50% - 10px);\n      margin: 5px;\n    }\n  }\n"])));
var DriverZoneRestrictionWrapper = exports.DriverZoneRestrictionWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  > span {\n    font-size: 14px;\n  }\n"])));
var WrapperPassword = exports.WrapperPassword = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    margin-bottom: 0 !important;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      padding-left: 40px !important;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      padding-right: 40px !important;\n    "])));
});
var TogglePassword = exports.TogglePassword = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  color: #333;\n  font-size: 24px;\n  cursor: pointer;\n  ", "\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    right: 10px;\n  "])));
});
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 20px;\n"])));
var WrapperUserTypeSelector = exports.WrapperUserTypeSelector = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 10px;\n\n  div.select {\n    border: none;\n    background-color: ", ";\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n    }\n  }\n\n  > div {\n    width: 100%;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
});
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n\n  .select {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    border: none;\n    background-color: ", ";\n    font-size: 14px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (_ref2) {
  var isTimezone = _ref2.isTimezone;
  return isTimezone && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      > div:first-child {\n        > div {\n          overflow: hidden;\n        }\n      }\n      .list-wrapper {\n        font-size: 12px;\n        max-height: 220px;\n      }\n    "])));
});