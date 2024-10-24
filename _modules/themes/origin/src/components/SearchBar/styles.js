"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersSearch = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var OrdersSearch = exports.OrdersSearch = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  img {\n    position: absolute;\n    top: 13px;\n    left: 14px;\n  }\n\n  input {\n    width: 250px;\n    border: 1px solid #1C202E;\n    border-radius: 22px;\n    outline: none;\n    padding: 8px;\n    padding-left: 40px;\n    font-size: 15px;\n\n    &::placeholder {\n      color: #182964;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    flex: 1;\n\n    input {\n      width: 100%;\n      box-sizing: border-box;\n    }\n  }\n"])));