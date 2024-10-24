"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewsProgressWrapper = exports.ReviewsProgressContent = exports.ReviewsProgressBar = exports.ReviewsMarkPoint = exports.ReviewContainer = exports.PhotoWrapper = exports.Photo = exports.CustomerName = exports.CommentsList = exports.Comments = exports.CommentButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Buttons = require("../../../styles/Buttons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ReviewContainer = exports.ReviewContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > h1 {\n    text-align: center;\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0 0 29px 0;\n  }\n\n  > button {\n    width: 100%;\n    height: 44px;\n    margin-top: 40px;\n  }\n"])));
var PhotoWrapper = exports.PhotoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 133px;\n  max-height: 133px;\n  height: 133px;\n  width: 133px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  svg {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n  }\n\n  @media print {\n    display: none;\n  }\n"])));
var PhotoStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var Photo = exports.Photo = function Photo(props) {
  return /*#__PURE__*/_react.default.createElement(PhotoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var CustomerName = exports.CustomerName = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 21px;\n  margin-top: 15px;\n"])));
var ReviewsProgressWrapper = exports.ReviewsProgressWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 30px 0;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 17px;\n    font-size: 14px;\n  }\n"])));
var ReviewsProgressContent = exports.ReviewsProgressContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 50px;\n  width: 100%;\n  height: 4px;\n  position: relative;\n  margin-bottom: 30px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var ReviewsProgressBar = exports.ReviewsProgressBar = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  height: 4px;\n  border-radius: 50px;\n  background: ", ";\n  transition: all 0.2s linear;\n"])), function (props) {
  return props.theme.colors.primary;
});
var ReviewsMarkPoint = exports.ReviewsMarkPoint = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 15px;\n  font-size: 12px;\n  color: #CED4DA;\n  cursor: pointer;\n\n  ", "\n\n  &.mark-point {\n    span {\n      position: relative;\n      margin-left: -50%;\n      ", "\n\n      > span {\n        position: absolute;\n        height: 6px;\n        top: -15px;\n        width: 2px;\n        background: #CED4DA;\n        transition: all 0.3s;\n      }\n    }\n  }\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    > span {\n      color: #344050;\n    }\n  "])));
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-right: -50%;\n        margin-left: 0;\n      "])));
}, function (_ref2) {
  var pass = _ref2.pass;
  return pass && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    span {\n      > span {\n        background: transparent !important;\n      }\n    }\n  "])));
});
var CommentsList = exports.CommentsList = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n\n  > button {\n    border-radius: 50px;\n    margin-bottom: 18px;\n    &:not(:last-child) {\n      ", "\n    }\n  \n    svg {\n      vertical-align: middle;\n      margin-left: 5px;\n\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 40px;\n      "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 40px;\n      "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n      "])));
});
var CommentButton = exports.CommentButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  margin-bottom: 18px;\n  padding: 0 10px;\n  font-size: 12px;\n  color: #414954;\n  background: ", ";\n  border: 1px solid ", ";\n  transition: all 0.3s linear;\n  line-height: 26px;\n\n  svg {\n    vertical-align: middle;\n    margin-left: 5px;\n\n    ", "\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid ", ";\n    color: white;\n  "])), function (props) {
    var _props$theme5;
    return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.primary;
  }, function (props) {
    var _props$theme6;
    return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.primary;
  });
});
var Comments = exports.Comments = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  margin-top: 10px;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n\n  textarea {\n    min-height: 104px;\n  }\n"])));