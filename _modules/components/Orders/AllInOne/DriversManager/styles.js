"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriversList = exports.FilterContainer = exports.DriversHeader = exports.DriversContent = exports.DriversContainer = exports.DriverListContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DriversContainer = exports.DriversContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n"])));
var DriversHeader = exports.DriversHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  > div:last-child {\n    margin-top: 20px;\n  }\n  input {\n    background: ", ";\n    border: none;\n  }\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    > div:last-child {\n      margin-top: 0px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var DriversContent = exports.DriversContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));
var DriverListContainer = exports.DriverListContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow: hidden;\n  margin-top: 20px;\n  @media (min-width: 992px) {\n    width: 350px;\n    max-width: 350px;\n    margin-top: 0px;\n  }\n"])));
var FilterContainer = exports.FilterContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0px;\n  background: ", ";\n  z-index: 100;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
var WrapperDriversList = exports.WrapperDriversList = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow-x: hidden;\n  .driver-info-container {\n    p.name {\n      min-width: 50%;\n      max-width: 50%;\n    }\n  }\n  @media (min-width: 992px) {\n    max-height: calc(var(--vh, 1vh) * 50 - 115px);\n  }\n"])));