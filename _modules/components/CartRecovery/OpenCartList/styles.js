"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.WrapperImage = exports.WrapOrderStatusSelector = exports.Table = exports.OrderNumberContainer = exports.Image = exports.DriversInfo = exports.CustomerInfo = exports.CheckBox = exports.CartsContainer = exports.CartBody = exports.BusinessInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CartsContainer = exports.CartsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 410px);\n  overflow: auto;\n\n  ", "\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 385px);\n  }\n\n  @media (min-width: 992px) {\n    max-height: calc(100vh - 305px);\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    max-height: calc(100vh - 275px);\n    ", "\n  }\n"])), function (_ref) {
  var noScroll = _ref.noScroll;
  return noScroll && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    overflow: hidden;\n  "])));
}, function (_ref2) {
  var isSelectedOrders = _ref2.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      max-height: calc(100vh - 345px);\n    "])));
}, function (_ref3) {
  var isSelectedOrders = _ref3.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      max-height: calc(100vh - 345px);\n    "])));
});
var Table = exports.Table = _styledComponents.default.table(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n\n  th,\n  td {\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n\n    &:first-child {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n\n    &.carts-id {\n      height: 0px;\n      padding: 5px;\n    }\n  }\n\n  td {\n    &.customerInfo {\n      > div {\n        width: 100%;\n        ", "\n      }\n    }\n  }\n\n  th {\n    padding-top: 0px;\n    .bold {\n      font-weight: 600;\n    }\n    &.allow-colums {\n      width: 50px;\n    }\n  }\n\n  thead {\n    tr {\n      width: 100%;\n      border-bottom: solid 1px ", ";\n      th {\n        color: ", ";\n        white-space: nowrap;\n        z-index: 100;\n        background: ", ";\n      }\n    }\n  }\n\n  ", "\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  div.info {\n    p {\n      margin: 0px;\n      color: ", ";\n      font-size: 12px;\n    }\n    p.bold {\n      font-size: 14px;\n      font-weight: 500;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          border-left: 1px solid #E9ECEF;\n          padding-left: 15px;\n        "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          border-right: 1px solid #E9ECEF;\n          padding-right: 15px;\n        "])));
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref4) {
  var isRelative = _ref4.isRelative;
  return isRelative && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    thead {\n      tr {\n        th {\n          position: sticky;\n          top: 0px;\n        }\n      }\n    }\n  "])));
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
}, function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
});
var CartBody = exports.CartBody = _styledComponents.default.tbody(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n  &.active {\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", " !important;\n      border-bottom: 1px solid ", " !important;\n\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref5) {
  var isCustomStyle = _ref5.isCustomStyle;
  return isCustomStyle && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        &:first-child {\n          ", "\n        }\n        &:last-child {\n          ", "\n        }\n      "])), function (props) {
    var _props$theme2;
    return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n            border-right: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    }) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n            border-left: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    });
  }, function (props) {
    var _props$theme3;
    return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n            border-left: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    }) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n            border-right: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    });
  });
});
var OrderNumberContainer = exports.OrderNumberContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  /* height: 100%; */\n  height: 45px;\n\n  p {\n    max-width: 130px;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n    padding-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n    padding-right: 15px;\n  "])));
});
var CheckBox = exports.CheckBox = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", "\n  svg {\n    font-size: 18px;\n    color: ", ";\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
}, function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.secundaryLight;
}, function (_ref6) {
  var isChecked = _ref6.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
    var _props$theme$colors5;
    return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.primary;
  });
});
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  p {\n    max-width: 250px;\n  }\n  div.info {\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
var CustomerInfo = exports.CustomerInfo = (0, _styledComponents.default)(BusinessInfo)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  p {\n    max-width: 150px;\n  }\n"])));
var DriversInfo = exports.DriversInfo = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  > div {\n    > div {\n      border: none;\n      padding: 0px;\n      > div:first-child {\n        padding: 0px 10px;\n        p {\n          color: ", ";\n          font-size: 14px;\n        }\n      }\n      > div {\n        > div {\n          > div {\n            padding: 0px;\n          }\n        }\n      }\n    }\n  }\n  ", "\n"])), function (props) {
  var _props$theme$colors6;
  return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.headingColor;
}, function (_ref7) {
  var noClick = _ref7.noClick;
  return noClick && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])));
var ImageStyled = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 7.6px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var WrapOrderStatusSelector = exports.WrapOrderStatusSelector = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  > div {\n    p {\n      font-size: 14px;\n    }\n    > div:first-child {\n      p {\n        color: ", ";\n        max-width: 140px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors7;
  return (_props$theme$colors7 = props.theme.colors) === null || _props$theme$colors7 === void 0 ? void 0 : _props$theme$colors7.headingColor;
});
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  padding-top: 5px;\n  width: calc(100% - 10px);\n\n  > div {\n    justify-content: flex-end;\n    ", "\n  }\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n      justify-content: start;\n    "])));
});