"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TimeZoneAndCalendar = exports.ReportsOrdersContainer = exports.EmptyContent = exports.ChartWrapper = exports.ChartTitleBlock = exports.ChartFooterContainer = exports.ChartBlockWrapper = exports.CalendarWrapper = exports.ButtonActionList = exports.BrandBusinessWrapper = exports.AnalyticsTimeZoneWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ReportsOrdersContainer = exports.ReportsOrdersContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 25px 15px 70px 15px;\n  width: 100%;\n  overflow: auto;\n\n  @media (min-width: 700px) {\n    padding: 25px 35px 70px 35px;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 20px;\n  color: ", ";\n  margin-top: 0;\n  margin-bottom: 30px;\n  margin-right: 35px;\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 0;\n    margin-left: 35px;\n  "])));
});
var ButtonActionList = exports.ButtonActionList = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"])));
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n\n  > button {\n    margin-top: 5px;\n    padding: 7px 15px;\n    color: ", ";\n    background: ", ";\n    border-radius: 7.6px;\n    border: none;\n    text-align: left;\n    margin-left: 10px;\n\n    ", "\n\n    svg {\n      font-size: 16px;\n      margin-right: 12px;\n\n      ", "\n    }\n  }\n\n  @media only screen and (min-width: 374px) and (max-width: 450px) {\n    .ordering-calendar {\n      right: calc((100vw - 364px) / 2);\n    }\n  }\n\n  @media (max-width: 450px) {\n    width: 100%;\n    flex-wrap: wrap;\n    > button {\n      width: 100%;\n      margin-left: 0 !important;\n      margin-right: 0 !important;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.secundaryContrast;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.secundary;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 12px;\n      "])));
});
var BrandBusinessWrapper = exports.BrandBusinessWrapper = (0, _styledComponents.default)(CalendarWrapper)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n\n  > button {\n    margin-right: 10px;\n    margin-left: 0;\n\n  ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
});
var ChartBlockWrapper = exports.ChartBlockWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 25px;\n  padding: 20px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n"])));
var ChartTitleBlock = exports.ChartTitleBlock = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 12px;\n    margin: 0;\n    text-transform: uppercase;\n  }\n\n  svg {\n    font-size: 16px;\n    color: #212121;\n    cursor: pointer;\n  }\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return !active && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    svg {\n      cursor: not-allowed;\n    }\n  "])));
});
var ChartWrapper = exports.ChartWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  min-height: 350px;\n"])));
var EmptyContent = exports.EmptyContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n"])));
var ChartFooterContainer = exports.ChartFooterContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n\n  h2 {\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n    margin: 0;\n  }\n\n  p {\n    font-size: 14px;\n    color: ", ";\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
});
var AnalyticsTimeZoneWrapper = exports.AnalyticsTimeZoneWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  button {\n    margin-top: 5px;\n    background: ", ";\n    border-radius: 7.6px;\n    padding: 7px 15px;\n    font-size: 14px;\n    color: ", ";\n    border: none;\n  }\n\n  @media (min-width: 600px) {\n    width: fit-content;\n    margin-left: 10px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var TimeZoneAndCalendar = exports.TimeZoneAndCalendar = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n\n  @media (min-width: 600px) {\n    flex-direction: row;\n    width: fit-content;\n  }\n"])));