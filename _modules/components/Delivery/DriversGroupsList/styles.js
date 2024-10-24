"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.TableWrapper = exports.PagesBottomContainer = exports.InfoBlock = exports.Image = exports.GroupsTable = exports.GroupNameContainer = exports.GroupIdWrapper = exports.EnableWrapper = exports.DriversGroupsContainer = exports.DriverManagerContainer = exports.DriverGroupTypeContainer = exports.CheckBoxWrapper = exports.BorderWrapper = exports.ActionsContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DriversGroupsContainer = exports.DriversGroupsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n"])));
var TableWrapper = exports.TableWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: auto;\n"])));
var GroupsTable = exports.GroupsTable = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n  color: ", ";\n\n  td, th {\n    padding: 13px 0;\n    font-size: 12px;\n  }\n\n  thead {\n    tr {\n      border-bottom: solid 1px ", ";\n    }\n  }\n\n  tbody {\n    border-bottom: 1px solid ", ";\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var disabled = _ref.disabled;
  return !disabled && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      cursor: pointer;\n      &:hover {\n        background-color: ", ";\n      }\n      &.active {\n        background-color: ", ";\n        td {\n          border-top: 1px solid ", ";\n          border-bottom: 1px solid ", ";\n        }\n      }\n    "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var BorderWrapper = exports.BorderWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  ", "\n"])), function (_ref2) {
  var isHeader = _ref2.isHeader;
  return isHeader ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    font-weight: 700;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    height: 40px;\n    display: flex;\n    align-items: center;\n    ", "  \n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      padding-left: 10px;\n      border-left: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    }) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n      padding-right: 10px;\n      border-right: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    });
  });
});
var GroupNameContainer = exports.GroupNameContainer = (0, _styledComponents.default)(BorderWrapper)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > p {\n    font-size: 12px;\n    margin: 0px;\n  }\n"])));
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  svg {\n    font-size: 24px;\n    color: #B1BCCC;\n  }\n\n  ", "\n"])), function (_ref3) {
  var isChecked = _ref3.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors2;
    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.primary;
  });
});
var DriverManagerContainer = exports.DriverManagerContainer = (0, _styledComponents.default)(BorderWrapper)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 700;\n\n  > div:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  ", "\n  border-radius: 10px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n\n  ", "\n"])), function (_ref4) {
  var isSkeleton = _ref4.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border: 1px solid #E3E3E3;\n  "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var InfoBlock = exports.InfoBlock = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  p {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n    color: ", ";\n  }\n  p.bold {\n    margin: 0px;\n    font-size: 13px;\n    font-weight: 600;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
});
var DriverGroupTypeContainer = exports.DriverGroupTypeContainer = (0, _styledComponents.default)(BorderWrapper)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref5) {
  var isHeader = _ref5.isHeader;
  return isHeader && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    font-weight: 700;\n  "])));
});
var ActionsContainer = exports.ActionsContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 8px;\n  padding-bottom: 8px;\n"])));
var EnableWrapper = exports.EnableWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 12px;\n    color: ", ";\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});
var PagesBottomContainer = exports.PagesBottomContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  margin: 15px 0 38px 0;\n"])));
var GroupIdWrapper = exports.GroupIdWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > span {\n    margin: 0 20px;\n  }\n"])));