"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceholderTitle = exports.Option = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n\n  ", "\n\n  ", "\n\n  svg {\n    margin-right: 5px;\n    ", " \n  }\n\n  ", "\n"])), function (_ref) {
  var isDefault = _ref.isDefault;
  return isDefault ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 5px 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: 10px;\n  "])));
}, function (_ref2) {
  var noPadding = _ref2.noPadding;
  return noPadding && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 0px;\n  "])));
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (_ref3) {
  var isDefault = _ref3.isDefault;
  return !isDefault && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding: 10px;\n  "])));
});
var PlaceholderTitle = exports.PlaceholderTitle = (0, _styledComponents.default)(Option)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref4) {
  var isDefault = _ref4.isDefault;
  return isDefault ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 5px 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding: 10px;\n    margin-right: 0px;\n    margin-left: 0px;\n  "])));
});