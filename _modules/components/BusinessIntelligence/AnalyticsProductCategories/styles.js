"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainerWrapper = exports.ProductCategoryHeader = exports.ProductCategoryContentWrapper = exports.ProductCategoryContent = exports.ProductCategoryContainer = exports.PercentContainer = exports.EmptyContent = exports.Container = exports.ActionBlock = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 10px;\n  height: 100%;\n"])));
var ProductCategoryHeader = exports.ProductCategoryHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 10px 10px 0 10px;\n\n  p {\n    margin: 0;\n    font-size: 14px;\n    color: ", ";\n    text-transform: uppercase;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});
var ActionBlock = exports.ActionBlock = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  svg {\n    font-size: 16px;\n    color: #212121;\n    cursor: pointer;\n  }\n\n  ", "\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n  "])), function (props) {
    var _props$theme2;
    return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.disabled;
  });
});
var ProductCategoryContentWrapper = exports.ProductCategoryContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
var ProductCategoryContent = exports.ProductCategoryContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 12px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 5px;\n\n  p {\n    margin: 0;\n    font-size: 14px;\n    color: ", ";\n    margin-right: 10px;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});
var SkeletonContainerWrapper = exports.SkeletonContainerWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  > div {\n    margin-bottom: 5px;\n  }\n"])));
var PercentContainer = exports.PercentContainer = _styledComponents.default.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.headingColor;
}, function (_ref2) {
  var percent = _ref2.percent;
  return percent > 50 && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    color: #00D27A;\n  "])));
}, function (_ref3) {
  var percent = _ref3.percent;
  return percent < 30 && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    color: #E63757;\n  "])));
});
var EmptyContent = exports.EmptyContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n"])));
var ProductCategoryContainer = exports.ProductCategoryContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  padding: 0 10px 10px 10px;\n"])));