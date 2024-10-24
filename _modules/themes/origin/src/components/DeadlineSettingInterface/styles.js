"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopContainer = exports.Input = exports.DeadlineSettingContainer = exports.DeadlineInputContainer = exports.BottomContainer = exports.BorderContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DeadlineSettingContainer = exports.DeadlineSettingContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 0 10px 0;\n"])));
var TopContainer = exports.TopContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 80%;\n  padding: 0 27px 0 21px;\n  box-sizing: border-box;\n"])));
var BorderContainer = exports.BorderContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-left: 13px solid #F2F2F2;\n  border-right: 13px solid #F2F2F2;\n  border-top: 13px solid #F2F2F2;\n\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  color: #FFBF12;\n"])));
var BottomContainer = exports.BottomContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n"])));
var DeadlineInputContainer = exports.DeadlineInputContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n"])), function (_ref) {
  var color = _ref.color;
  return color;
});
var Input = exports.Input = _styledComponents.default.input.attrs({
  type: 'number'
})(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  -moz-appearance: textfield;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  outline: none;\n  width: 55px;\n  height: 50px;\n  font-size: 24px;\n  text-align: center;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 1px #00000029;\n  border: 1px solid;\n  border-color: ", ";\n  border-radius: 9px;\n  color: #ADADAD;\n"])), function (_ref2) {
  var borderColor = _ref2.borderColor;
  return borderColor;
});