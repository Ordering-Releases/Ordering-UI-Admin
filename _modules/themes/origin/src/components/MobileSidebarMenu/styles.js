"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappContent = exports.TextInfo = exports.SidebarContent = exports.MenuLinkText = exports.MenuLinkSeparator = exports.MenuLinkIcon = exports.MenuLink = exports.MenuClose = exports.IconContent = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])));
var IconContent = exports.IconContent = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 100%;\n  margin: 0px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: ", ";\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: ", ";\n  }\n"])), function (_ref) {
  var isHome = _ref.isHome;
  return isHome ? '#333' : 'rgb(247, 247, 247)';
}, function (_ref2) {
  var isHome = _ref2.isHome;
  return isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)';
}, function (_ref3) {
  var isHome = _ref3.isHome;
  return isHome ? 'rgb(255, 255, 255)' : '#333';
});
var SidebarContent = exports.SidebarContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n  background: #1C202E;\n\n  @media (max-height: 450px) {\n    padding-top: 15px;\n  }\n"])));
var MenuClose = exports.MenuClose = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  max-width: 100%;\n  margin: 6px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: ", ";\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n  }\n"])), function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome ? '#333' : 'rgb(247, 247, 247)';
});
var MenuLink = exports.MenuLink = _styledComponents.default.a(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  text-align: inherit;\n  display: block;\n  width: 100%;\n  outline: none !important;\n\n  &:hover {\n    color: #f1f1f1;\n  }\n\n  ", "\n\n  @media (max-height: 450px) {\n    font-size: 18px;\n  }\n"])), function (_ref5) {
  var active = _ref5.active;
  return active && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background: #4B5474;\n  "])));
});
var WrappContent = exports.WrappContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  column-gap: 20px;\n  padding: 16px;\n"])));
var MenuLinkIcon = exports.MenuLinkIcon = _styledComponents.default.img(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 25px;\n"])));
var MenuLinkText = exports.MenuLinkText = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  flex-grow: 1;\n  overflow: hidden;\n  flex-basis: 100%;\n  grid-area: 2 / 2 / auto / auto;\n"])));
var TextInfo = exports.TextInfo = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.04ch;\n  text-transform: none;\n  text-align: left;\n  margin: 0px;\n  padding: 0px;\n  display: block;\n  font-variant-ligatures: no-common-ligatures;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #fff;\n"])));
var MenuLinkSeparator = exports.MenuLinkSeparator = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));