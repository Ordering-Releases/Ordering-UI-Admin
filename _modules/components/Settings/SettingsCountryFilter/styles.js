"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIconWrapper = exports.CountrySelectWrapper = exports.CountrySearchWrapper = exports.CountrySearchInput = exports.CountryListItem = exports.CountryListContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CountrySelectWrapper = exports.CountrySelectWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  z-index: 100;\n  position: relative;\n  margin-bottom: 20px;\n\n  > label {\n    margin-top: 0;\n    font-weight: 600;\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: ", ";\n  }\n\n  > p {\n    margin-top: 0;\n    margin-bottom: 5px;\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
});
var CountrySearchWrapper = exports.CountrySearchWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var SearchIconWrapper = exports.SearchIconWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  ", "\n\n  svg {\n    font-size: 16px;\n    color: #B1BCCC;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    right: 10px;\n  "])));
});
var CountrySearchInput = exports.CountrySearchInput = _styledComponents.default.input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: 1px solid #DEE2E6;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n  font-size: 13px;\n  padding: 11px 30px 11px 14px;\n  width: 100%;\n  outline: none;\n\n  ", "\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding: 11px 14px 11px 30px;\n  "])));
});
var CountryListContainer = exports.CountryListContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-top: 7px;\n  max-height: 250px;\n  overflow: auto;\n  position: absolute;\n  min-width: 100%;\n  background-color: ", ";\n  z-index: 10000;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  border-radius: 7.6px;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.primaryContrast;
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.borderColor;
});
var CountryListItem = exports.CountryListItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 10px 7px;\n  border-bottom: 1px solid ", ";\n  font-size: 13px;\n  color: ", ";\n  cursor: pointer;\n  transition: all 0.3s;\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.colors.borderColor;
}, function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.colors.headingColor;
}, function (props) {
  var _props$theme9;
  return (_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.colors.borderColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    var _props$theme10;
    return (_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.colors.borderColor;
  });
});