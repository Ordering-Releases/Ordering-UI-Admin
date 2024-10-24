"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperAddressForm = exports.WrappNotAddresses = exports.FormActions = exports.ContinueButton = exports.AddressListUl = exports.AddressListContainer = exports.AddressItemActions = exports.AddressItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var AddressListContainer = exports.AddressListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  ", "\n\n  button.add {\n    height: 42px;\n  }\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var AddressListUl = exports.AddressListUl = _styledComponents.default.ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  margin-top: 40px;\n"])));
var AddressItem = exports.AddressItem = _styledComponents.default.li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0px;\n\n  label {\n    font-size: 15px;\n    margin-left: 5px;\n    font-weight: bold;\n    ", "\n  }\n\n  .wrapAddress {\n    display: flex;\n    align-items: center;\n\n    span {\n      color: ", ";\n      svg {\n        color: ", ";\n      }\n      font-size: 14px;\n      display: flex;\n      cursor: pointer;\n      margin-right: 15px;\n      ", "\n      &.radio {\n        color: ", ";\n        font-size: 24px;\n      }\n    }\n  }\n\n  .address {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.5;\n    span {\n      text-align: initial;\n\n      &:last-child {\n        font-size: 10px;\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.disabled;
});
var AddressItemActions = exports.AddressItemActions = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  a {\n    display: flex;\n    cursor: pointer;\n    margin: 0px 5px;\n    font-size: 20px;\n\n    &:nth-child(1) {\n      svg {\n        font-size: 16px;\n        color: #03459E;\n      }\n    }\n\n    &:nth-child(2) {\n      svg {\n        font-size: 16px;\n        color: #D81212;\n      }\n    }\n  }\n  a.disabled {\n    svg {\n      color: #CCC;\n    }\n    pointer-events: none;\n  }\n"])));
var WrappNotAddresses = exports.WrappNotAddresses = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  height: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 20px auto 10px;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"])));
var FormActions = exports.FormActions = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 45px;\n    flex: 1;\n\n    &:last-child#second-btn {\n      margin-left: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 769px) {\n    button {\n      &:last-child#second-btn {\n        margin-left: 25px;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 10px;\n      "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          margin-left: 0;\n          margin-right: 25px;\n      "])));
});
var ContinueButton = exports.ContinueButton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: sticky;\n  bottom: 1px;\n  \n  button {\n    width: 100%;\n    white-space: nowrap;\n    height: 50px;\n  }\n"])));
var WrapperAddressForm = exports.WrapperAddressForm = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0px;\n  ", "\n  background: ", ";\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  overflow: auto;\n  box-sizing: border-box;\n  padding: 25px 20px;\n\n  ", "\n\n  @media (min-width: 500px) {\n    width: 500px;\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    left: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    right: 0px;\n  "])));
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n  "])));
});