"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.PopoverList = exports.PopoverBody = exports.HeaderItem = exports.CopyItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n  cursor: pointer;\n  svg {\n    color: ", ";\n    font-size: 20px;\n  }\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    text-align: left;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    opacity: 0.6;\n  "])));
});
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  background: ", ";\n  padding: 15px 0px;\n  border-radius: 10px;\n  max-width: 250px;\n  z-index: 1001;\n  border: 1px solid #E9ECEF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 6px;\n\n  ", "\n\n  > button {\n    width: calc(100% - 20px);\n    margin: 5px 10px 0 10px;\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    left: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    right: 0px;\n  "])));
});
var Title = exports.Title = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  padding: 0 10px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var PopoverList = exports.PopoverList = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n"])));
var CopyItem = exports.CopyItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 7px 10px;\n  cursor: pointer;\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n  span {\n    color: ", ";\n    white-space: nowrap;\n    font-size: 14px;\n    font-weight: 400;\n    ", "\n  }\n\n  ", "\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
}, function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.lightGray;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
}, function (_ref2) {
  var isChecked = _ref2.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors5;
    return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.primary;
  });
}, function (props) {
  return props.theme.colors.borderColor;
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    svg {\n      opacity: 0.5;\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors6;
    return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.primary;
  });
});