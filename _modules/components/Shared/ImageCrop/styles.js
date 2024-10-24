"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeWrapper = exports.ImageCropWrapper = exports.ImageCropActionWrapper = exports.Container = exports.ButtonWrapper = exports.ActionContentWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var ImageCropWrapper = exports.ImageCropWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 400px;\n  margin-bottom: 8px;\n  position: relative;\n\n  > div {\n    border-radius: 8px;\n    overflow: hidden;\n  }\n\n  img {\n    display: block;\n    /* This rule is very important, please don't ignore this */\n    max-width: 100%;\n  }\n"])));
var ImageCropActionWrapper = exports.ImageCropActionWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n  flex-direction: column;\n  \n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n"])));
var RangeWrapper = exports.RangeWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  span {\n    font-size: 14px;\n    white-space: nowrap;\n    &.title {\n      margin-right: 5px;\n      ", "\n    }\n    &.percent {\n      margin-left: 5px;\n      ", "\n    }\n  }\n\n  input[type='range'] {\n    height: 8px;\n    border: 0px;\n    outline: none !important;\n    flex: 1;\n    border-radius: 10px;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    z-index: 10;\n    position: relative;\n  }\n\n  input[type='range'],\n  input[type='range']::-webkit-slider-runnable-track,\n  input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n\n  input[type='range']::-webkit-slider-thumb {\n    position: relative;\n    height: 20px;\n    width: 20px;\n    background: #FFFFFF;\n    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);\n    border-radius: 50%;\n    border: 5px solid ", ";\n  }\n\n  @media (min-width: 576px) {\n    width: auto;\n    flex: 1;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 5px;\n      "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
var ActionContentWrapper = exports.ActionContentWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > button {\n    margin-left: 15px;\n    font-size: 14px;\n    ", "\n\n    svg {\n      width: 16px;\n      height: 16px;\n      margin-left: 5px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      margin-left: 0;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n      "])));
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n  }\n"])));