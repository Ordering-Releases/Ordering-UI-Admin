"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.UserInfoContainer = exports.TableWrapper = exports.Table = exports.SeeChanges = exports.SchedulesWrapper = exports.Schedules = exports.ScheduleTitle = exports.ScheduleLapses = exports.ScheduleDay = exports.NoData = exports.HeaderTitleContainer = exports.HeaderContainer = exports.EventTypeContainer = exports.DriversGroupLogsContainer = exports.DateTimeWrapper = exports.DataListTable = exports.ConfigListTable = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DriversGroupLogsContainer = exports.DriversGroupLogsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: auto;\n"])));
var TableWrapper = exports.TableWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: auto;\n  max-height: calc(100vh - 200px);\n"])));
var SeeChanges = exports.SeeChanges = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Table = exports.Table = _styledComponents.default.table(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: 1000px;\n  color: ", ";\n\n  thead {\n    tr {\n      border-bottom: solid 1px ", ";\n      th {\n        padding: 13px 0;\n        font-size: 12px;\n        &:first-child {\n          width: 10%;\n          ", "\n          box-sizing: border-box;\n        }\n        &:nth-child(4) {\n          ", "\n          box-sizing: border-box;\n        }\n      }\n    }\n  }\n\n  > tbody {\n    border-bottom: 1px solid ", ";\n    td {\n      padding: 13px 0;\n      font-size: 12px;\n      &:first-child {\n        width: 10%;\n        ", "\n        box-sizing: border-box;\n      }\n      &:nth-child(4) {\n        ", "\n        box-sizing: border-box;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            padding-left: 15px;\n          "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            padding-right: 15px;\n          "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            padding-right: 15px;\n          "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            padding-left: 15px;\n          "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          padding-left: 15px;\n        "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          padding-right: 15px;\n        "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          padding-right: 15px;\n        "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          padding-left: 15px;\n        "])));
});
var UserInfoContainer = exports.UserInfoContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  p {\n    color: ", ";\n    margin: 0px;\n    font-size: 12px;\n    &:first-child {\n      color: ", ";\n      font-weight: 500;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
});
var DateTimeWrapper = exports.DateTimeWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  font-size: 12px;\n  min-height: 36px;\n  display: flex;\n  align-items: center;\n\n  ", "\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    padding-left: 15px;\n    margin-left: 15px;\n    border-left: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    padding-right: 15px;\n    margin-right: 15px;\n    border-right: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var NoData = exports.NoData = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 16px;\n"])));
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n  justify-content: flex-end;\n"])));
var DataListTable = exports.DataListTable = _styledComponents.default.table(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-right: 1px solid ", ";\n\n  tbody {\n    border-bottom: none;\n    td {\n      box-sizing: border-box;\n      &:first-child {\n        width: 50% !important;\n        padding-left: 15px;\n        padding-right: 15px;\n        box-sizing: border-box;\n      }\n      &:not(:first-child) {\n        width: initial !important;\n      }\n      white-space: nowrap;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        padding-left: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        padding-right: 15px;\n      "])));
});
var ConfigListTable = exports.ConfigListTable = _styledComponents.default.table(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-right: 1px solid ", ";\n  text-transform: capitalize;\n\n  tbody {\n    border-bottom: none;\n    td {\n      box-sizing: border-box;\n      &:first-child {\n        width: 50% !important;\n        padding-left: 15px;\n        padding-right: 15px;\n        box-sizing: border-box;\n      }\n      &:not(:first-child) {\n        width: initial !important;\n      }\n      white-space: nowrap;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n        padding-left: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        padding-right: 15px;\n      "])));
});
var EventTypeContainer = exports.EventTypeContainer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  font-size: 12px;\n  min-height: 36px;\n  display: flex;\n  align-items: center;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-left: 15px;\n  margin-right: 10px;\n  border-right: 1px solid ", ";\n  border-left: 1px solid ", ";\n  p{\n    margin-bottom: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
});
var SchedulesWrapper = exports.SchedulesWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  gap: 30px;\n  justify-content: center;\n\n  ", "\n"])), function (props) {
  return (props === null || props === void 0 ? void 0 : props.border) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    div:first-child {\n    border-right: 1px solid #E9ECEF;\n    padding-right: 30px;\n    "])));
});
var Schedules = exports.Schedules = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"])));
var ScheduleDay = exports.ScheduleDay = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: space-between;\n"])));
var ScheduleLapses = exports.ScheduleLapses = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid #E9ECEF;\n  padding-left: 10px;\n\n  p  {\n    margin: 0px;\n  }\n"])));
var ScheduleTitle = exports.ScheduleTitle = _styledComponents.default.h2(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  text-align: center;\n"])));
var HeaderContainer = exports.HeaderContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  input {\n    border: none;\n    background: #F8F9FA;\n    border-radius: 50px;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  h1 {\n    font-size: 20px;\n    margin: 10px 0 0 0;\n    font-weight: bold;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});