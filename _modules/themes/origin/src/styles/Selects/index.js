"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selected = exports.SelectImage = exports.Select = exports.OptionsInner = exports.Options = exports.Option = exports.Header = exports.Chevron = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  min-width: 100px;\n  color: #333;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  svg {\n    vertical-align: text-top;\n  }\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    cursor: no-drop;\n    opacity: 0.6;\n  "])));
}, function (_ref2) {
  var showDisable = _ref2.showDisable;
  return showDisable && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
}, function (_ref3) {
  var optionBottomBorder = _ref3.optionBottomBorder;
  return optionBottomBorder && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid #D8D8D8;\n  "])));
}, (0, _polished.darken)(0.03, '#fafafa'), function (props) {
  return props.selected && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  \n    &:hover {\n      background-color: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#fafafa'), (0, _polished.darken)(0.07, '#fafafa'));
}, function (_ref4) {
  var withIcons = _ref4.withIcons;
  return withIcons && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      svg {\n        margin-right: 3px;\n        ", "\n      }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          margin-left: 3px;\n          margin-right: 0px;\n       "])));
  });
}, function (_ref5) {
  var color = _ref5.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: #C3C3C3;\n  "])));
});
var Options = exports.Options = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  min-width: 100%;\n  background: ", ";\n  margin-top: 7px;\n  z-index: 10000;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #1C202E;\n  border-radius: 10px;\n  overflow: hidden;\n\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (_ref6) {
  var position = _ref6.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'left' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    left: 0;\n    margin-left: -1px;\n    ", "\n  "])), function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-right: -1px;\n        margin-left: 0px;\n        right: 0;\n        left: initial\n    "])));
  });
}, function (_ref7) {
  var position = _ref7.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'right' && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    right: 0;\n    margin-right: -1px;\n    ", "\n  "])), function (props) {
    var _props$theme3;
    return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: -1px;\n        margin-right: 0px;\n        left: 0;\n        right: initial;\n    "])));
  });
});
var OptionsInner = exports.OptionsInner = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  overflow: auto;\n  margin: ", ";\n  max-height: ", ";\n  overscroll-behavior: contain;\n"])), function (_ref8) {
  var optionInnerMargin = _ref8.optionInnerMargin;
  return optionInnerMargin;
}, function (_ref9) {
  var optionInnerMaxHeight = _ref9.optionInnerMaxHeight;
  return optionInnerMaxHeight;
});
var Selected = exports.Selected = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 11;\n\n  p {\n    margin: 0px;\n  }\n\n  @media (max-width: 380px) {\n    padding-left: 9px;\n    padding-right: 9px;\n    font-size: 13px;\n  }\n"])));
var Select = exports.Select = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 40px;\n  line-height: 34px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #1C202E;\n  color: #1C202E;\n  position: relative;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref10) {
  var type = _ref10.type;
  return type === 'primary' && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    border-radius: 6px;\n  "])), function (props) {
    return props.theme.colors.btnPrimary;
  }, function (props) {
    return props.theme.colors.btnPrimaryContrast;
  }, function (props) {
    return props.theme.colors.btnPrimary;
  });
});
var Chevron = exports.Chevron = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  margin-right: -5px;\n  ", "\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: -5px;\n    "])));
});
var Header = exports.Header = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: baseline;\n"])));
var SelectImage = exports.SelectImage = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 28px;\n  height: 28px;\n  border-radius: 1000px;\n  margin-left: 5px;\n  overflow: hidden;\n\n  ", "\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n  "])));
});