"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.UploadImageIconContainer = exports.SelectWrapper = exports.SearchBarWrapper = exports.RightHeader = exports.RadioButton = exports.ProductLinkContainer = exports.Option = exports.LeftHeader = exports.Image = exports.HeaderContainer = exports.FormController = exports.DropDownWrapper = exports.Container = exports.BusinessName = exports.BusinessListWrapper = exports.BusinessItemContainer = exports.BannerImage = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  > button {\n    height: 44px;\n    margin-top: 25px;\n  }\n"])));
var HeaderContainer = exports.HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  ", "\n\n  h1 {\n    font-size: 20px;\n    margin: 0;\n    font-weight: 700;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
});
var LeftHeader = exports.LeftHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var RightHeader = exports.RightHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var DropDownWrapper = exports.DropDownWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n  button {\n    display: flex;\n    background: transparent !important;\n    border: none;\n    padding: 5px;\n    border-radius: 8px;\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    &:after {\n      display: none;\n    }\n    &:hover {\n      background: ", " !important;\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        padding: 7px 20px;\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundaryDarkContrast);
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
}, function (props) {
  return props.theme.colors.danger;
});
var BannerImage = exports.BannerImage = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", "\n  margin-bottom: 20px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref) {
  var isWebBanner = _ref.isWebBanner;
  return isWebBanner ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    height: 95px;\n  "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    width: 130px;\n    height: 130px;\n  "])));
});
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  svg {\n    font-size: 55px;\n    color: ", ";\n  }\n\n  p {\n    margin: 0px;\n    padding-top: 14px;\n    font-size: 12px;\n    color: ", ";\n    text-align: center;\n  }\n"])), function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightGray;
});
var FormController = exports.FormController = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 8px;\n  }\n"])));
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  .select {\n    ", "\n    font-size: 14px;\n    background: ", ";\n    border: none;\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n    }\n    .list {\n      > div {\n        white-space: nowrap;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-left: 2px;\n    "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-right: 2px;\n    "])));
}, function (props) {
  return props.theme.colors.secundary;
});
var SearchBarWrapper = exports.SearchBarWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin: 20px 0;\n"])));
var BusinessListWrapper = exports.BusinessListWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  height: calc(100% - 440px);\n  overflow-x: hidden;\n\n  #not-found-source {\n    height: 100%;\n  }\n"])));
var BusinessItemContainer = exports.BusinessItemContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 5px;\n"])));
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  max-width: 38px;\n  max-height: 38px;\n  height: 38px;\n  width: 38px;\n  ", "\n  border-radius: 7.6px;\n\n  ", "\n"])), function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  "])));
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    margin-right: 12px;\n  "]))) : (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    margin-left: 12px;\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 7.6px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var BusinessName = exports.BusinessName = _styledComponents.default.span(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  ", "\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    margin-right: 12px;\n  "]))) : (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    margin-left: 12px;\n  "])));
});
var ProductLinkContainer = exports.ProductLinkContainer = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  margin: 20px 0;\n  height: calc(100% - 410px);\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  \n  img {\n    min-height: 38px;\n    min-width: 38px;\n    height: 38px;\n    width: 38px;\n    border-radius: 8px;\n    object-fit: cover;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border: 1px solid ", ";\n    margin-right: 8px;\n    ", "\n  }\n  span {\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    max-width: 170px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    color: ", ";\n    b {\n      font-size: 14px;\n      line-height: 20px;\n      font-weight: 400;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 8px;\n    "])));
}, function (props) {
  return props.theme.colors.textGray;
}, function (props) {
  return props.theme.colors.textBlack;
});
var RadioButton = exports.RadioButton = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  cursor: pointer;\n"])));