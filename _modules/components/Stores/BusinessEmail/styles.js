"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = exports.OrdersAppPushContainer = exports.Label = exports.FormControl = exports.BusinessEmailContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessEmailContainer = exports.BusinessEmailContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  input[type=text] {\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    height: 44px;\n    width: 100%;\n  }\n"])));
var Label = exports.Label = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: ", ";\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});
var SectionTitle = exports.SectionTitle = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  margin-bottom: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n"])));
var OrdersAppPushContainer = exports.OrdersAppPushContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 44px;\n  margin-bottom: 60px;\n  p {\n    margin-top: 0;\n    margin-bottom: 15px;\n    font-size: 13px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.lightGray;
});