"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSpinnerLoader = exports.WrapMetaFields = exports.SkeletonItem = exports.RoundBorder = exports.NoMetaField = exports.MetaContainer = exports.MetaAddForm = exports.MetaAddContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WrapMetaFields = exports.WrapMetaFields = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n"])));
var MetaContainer = exports.MetaContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 20px;\n  color: ", ";\n\n  .meta_type {\n    width: 25%;\n    font-size: 14px;\n\n    .select {\n      border: none;\n      background-color: ", ";\n    }\n  }\n  .meta_key {\n    width: 25%;\n    padding: 0 10px;\n    box-sizing: border-box;\n  }\n\n  .meta_value {\n    flex: 1;\n    word-break: break-all;\n    display: flex;\n    column-gap: 10px;\n    > div {\n      width: 100%;\n    }\n  }\n\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
});
var MetaAddContainer = exports.MetaAddContainer = (0, _styledComponents.default)(MetaContainer)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  input {\n    border: 1px solid ", ";\n    border-radius: 5px;\n    padding: 6px 10px;\n    outline: none;\n    font-size: 14px;\n    box-sizing: border-box;\n    width: 100%;\n    height: 35px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var RoundBorder = exports.RoundBorder = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 14px;\n  color: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});
var NoMetaField = exports.NoMetaField = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 14px;\n"])));
var MetaAddForm = exports.MetaAddForm = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  .select-input {\n    width: 100%;\n\n    svg {\n      color: #000;\n    }\n  }\n  \n  .json_editor {\n    width: 100%;\n    height: 300px;\n    > div {\n      height: 100%;\n    }\n    .jsoneditor {\n      border: 1px solid ", ";\n      > div.jsoneditor-menu {\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n      }\n    }\n    .jsoneditor-search {\n      display: none;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var SkeletonItem = exports.SkeletonItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n\n  span {\n    border-radius: 5px;\n  }\n"])));
var WrapperSpinnerLoader = exports.WrapperSpinnerLoader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  > div {\n    position: absolute;\n    top: 0px;\n  }\n"])));