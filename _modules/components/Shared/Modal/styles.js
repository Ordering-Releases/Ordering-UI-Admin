"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTitle = exports.ModalOrderTypes = exports.ModalIcon = exports.ModalHeader = exports.ModalDialogInnerContainer = exports.ModalDialog = exports.ModalActions = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var zx = _ref.zx;
  return zx && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    .popup {\n      z-index: ", " !important;\n    }\n  "])), zx);
});
var ModalDialog = exports.ModalDialog = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  border-radius: 10px;\n  box-sizing: border-box;\n  margin-top: auto;\n  margin-bottom: auto;\n  overflow: auto;\n  max-height: calc(var(--vh, 1vh) * 90);\n\n  ", "\n\n  @media (max-width: 860px) {\n    width: 80%;\n  }\n  @media (max-width: 768px) {\n    width: 100vw;\n    height: calc(var(--vh, 1vh) * 100);\n    max-height: calc(var(--vh, 1vh) * 100);\n    border-radius: 0px;\n  }\n"])), function (_ref2) {
  var width = _ref2.width;
  return width || '50%';
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var maxWidth = _ref4.maxWidth;
  return maxWidth && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    max-width: ", " !important;\n  "])), maxWidth);
});
var ModalDialogInnerContainer = exports.ModalDialogInnerContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: ", ";\n  overflow: ", ";\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n"])), function (_ref5) {
  var padding = _ref5.padding;
  return padding || '20px';
}, function (_ref6) {
  var overflow = _ref6.overflow;
  return overflow || 'auto';
}, function (_ref7) {
  var isTransparent = _ref7.isTransparent,
    theme = _ref7.theme;
  return isTransparent ? 'transparent' : theme.colors.backgroundPage || '#FFF';
});
var ModalActions = exports.ModalActions = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  margin: 30px 0px 0px;\n\n  button {\n    width: 100%;\n    border-radius: 32px;\n    opacity: 1;\n    max-width: 300px;\n    margin-top: 10px;\n    height: 60px;\n  }\n"])));
var ModalHeader = exports.ModalHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var ModalTitle = exports.ModalTitle = _styledComponents.default.h2(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  color: #010300;\n  opacity: 1;\n  margin: 0px 0px;\n  margin-bottom: 20px;\n  text-transform: capitalize;\n  flex: 1;\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    text-align: right;\n    padding-right: 10px;\n    padding-left: 0px;\n  "])));
});
var ModalOrderTypes = exports.ModalOrderTypes = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-right: 15px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding-left: 15px;\n    padding-right: 0px;\n  "])));
});
var ModalIcon = exports.ModalIcon = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1;\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});