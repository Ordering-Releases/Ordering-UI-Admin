"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TabsContainer = exports.Tab = exports.SelectButtonGroup = exports.SearchBarWrapper = exports.MeunItem = exports.MenuName = exports.MenuContainer = exports.MainContainer = exports.Header = exports.CheckboxWrapper = exports.AddMenuButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));
var MenuContainer = exports.MenuContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  transition: 0.3s;\n  @media (min-width: 576px) {\n    ", "\n  }\n"])), function (_ref) {
  var isHide = _ref.isHide;
  return isHide ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 0px;\n    overflow: hidden;\n    flex: initial;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex: 1;\n  "])));
}, function (_ref2) {
  var isHide = _ref2.isHide;
  return isHide ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding: 20px;\n    "])));
});
var Header = exports.Header = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  button {\n    height: 42px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 40px;\n    "])));
});
var Title = exports.Title = _styledComponents.default.h1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n  margin: 0px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var MeunItem = exports.MeunItem = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n  user-select: none;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  > svg {\n    color: ", ";\n    margin: 0 3px;\n    font-size: 13px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref3) {
  var isBorderTop = _ref3.isBorderTop;
  return isBorderTop && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.secundaryLight;
});
var MenuName = exports.MenuName = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  flex: 1;\n  font-size: 14px;\n"])));
var CheckboxWrapper = exports.CheckboxWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});
var AddMenuButtonWrapper = exports.AddMenuButtonWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin: 15px 0;\n"])));
var TabsContainer = exports.TabsContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid ", ";\n  margin-bottom: 10px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  user-select: none;\n  padding: 10px 0px;\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  white-space: nowrap;\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "])));
}, function (_ref5) {
  var active = _ref5.active;
  return active && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    border-bottom: 2px solid;\n    font-weight: 500;\n  "])));
}, function (_ref6) {
  var active = _ref6.active;
  return !active && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    var _props$theme$colors2;
    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
  });
}, function (_ref7) {
  var disabledFeature = _ref7.disabledFeature;
  return disabledFeature && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    cursor: not-allowed;\n  "])));
});
var SearchBarWrapper = exports.SearchBarWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n"])));
var SelectButtonGroup = exports.SelectButtonGroup = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid ", ";\n  button {\n    font-size: 12px;\n\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n        margin-left: 16px;\n      "]))) : (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n        margin-right: 16px;\n      "])));
});