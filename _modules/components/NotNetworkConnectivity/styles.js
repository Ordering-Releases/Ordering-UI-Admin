"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100vh;\n  margin: 0 auto;\n\n  h1 {\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (max-width: 576px) {\n    width: 80%;\n    h1 {\n      font-size: 24px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    h1 {\n      font-size: 20px;\n    }\n  }\n"])));
exports.Container = Container;
var Image = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 300px;\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
exports.Image = Image;