"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRow = exports.Option = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WrapperRow = exports.WrapperRow = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-bottom: 0px;\n\n  & > div {\n    width: 100%;\n    height: 47px;\n    max-width: 1000px;\n    margin-right: 10px;\n    background-color: ", ";\n    border: none;\n    font-size: 14px;\n    border-radius: 8px;\n    > div:first-child {\n      height: 100%;\n    }\n    @media (min-width: 798px) {\n      max-width: 300px;\n    }\n  }\n\n  .order-status-multi-select {\n    p {\n      padding: 0;\n      color: ", " !important;\n    }\n  }\n\n  .date-filter-container {\n    z-index: 100;\n  }\n\n  input {\n    width: 100%;\n    height: 47px;\n    padding: 10px 25px;\n    box-sizing: border-box;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    -moz-appearance: textfield;\n  }\n\n  .close {\n    right: 8px;\n  }\n\n  .external_id {\n    @media (max-width: 1200px) {\n     flex: auto;\n    }\n  }\n\n  @media (max-width: 798px) {\n    flex-direction: column !important;\n    padding: 10px 15px 0 0px;\n    & > div {\n      margin-top: 15px;\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var isSelectedOrders = _ref.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      flex-direction: column !important;\n      padding: ", ";\n      & > div {\n        margin-top: 15px;\n      }\n  "])), !isSelectedOrders && '10px 15px 0 0px');
});
var Option = exports.Option = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  padding: 5px;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});