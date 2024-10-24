"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperIndicator = exports.WrapItemView = exports.OrdersListContainer = exports.OrdersInnerContent = exports.OrdersContent = exports.OrderSubFilterControls = exports.OrderStatusSubFilterWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var OrdersListContainer = exports.OrdersListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: auto;\n  max-height: 100vh;\n  ", "\n  @media print {\n    display: none;\n  }\n"])), function (_ref) {
  var isSelectedOrders = _ref.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-top: 0px;\n    padding: 20px 0 0 0;\n  "])));
});
var OrdersContent = exports.OrdersContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"])));
var OrdersInnerContent = exports.OrdersInnerContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n"])));
var WrapperIndicator = exports.WrapperIndicator = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 100px;\n  height: 50px;\n  border-radius: 5px;\n  background: #151824;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 500;\n  font-size: 24px;\n"])));
var WrapItemView = exports.WrapItemView = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var OrderSubFilterControls = exports.OrderSubFilterControls = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n"])));
var OrderStatusSubFilterWrapper = exports.OrderStatusSubFilterWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: inline-block;\n  flex: 1;\n  margin-right: 20px;\n"])));