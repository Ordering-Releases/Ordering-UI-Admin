"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionContainer = exports.Container = exports.ButtonsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0 0 29px 0;\n  }\n"])));
exports.Container = Container;
var SectionContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 25px 38px;\n  margin: 25px 20px 34px 20px;\n\n  > div {\n    max-width: 1024px;\n  }\n"])));
exports.SectionContainer = SectionContainer;
var ButtonsContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  position: sticky;\n  z-index: 100;\n  bottom: 0;\n  background-color: ", ";\n\n  > button {\n    border-radius: 8px;\n    height: 44px;\n    &:last-child {\n      margin: 0 10px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
exports.ButtonsContainer = ButtonsContainer;