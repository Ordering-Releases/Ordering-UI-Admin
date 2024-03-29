"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.Option = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SelectWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 50px 0 30px 0;\n\n  > p {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 11px;\n  }\n\n  .select {\n    width: 100%;\n    background: ", ";\n    border: none;\n    font-size: 14px;\n\n    > div:first-child {\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n    .list {\n      max-width: 100%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.SelectWrapper = SelectWrapper;
var Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > span {\n    font-size: 14px;\n    font-weight: 700;\n  }\n"])));
exports.Option = Option;