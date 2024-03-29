"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    font-size: 13px;\n    line-height: 2;\n    white-space: nowrap;\n    font-weight: 500;\n"])));
exports.Option = Option;