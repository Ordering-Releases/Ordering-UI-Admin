"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceholderTitle = exports.Option = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n"])));
exports.Option = Option;
var PlaceholderTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  padding: 5px 10px;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"])));
exports.PlaceholderTitle = PlaceholderTitle;