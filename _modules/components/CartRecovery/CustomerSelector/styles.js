"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessImage = exports.SkeletonWrapper = exports.PlaceholderTitle = exports.OptionName = exports.OptionContent = exports.Option = exports.BusinessImage = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  padding: 5px 10px;\n\n  img {\n    width: 30px;\n  }\n"])));
var PlaceholderTitle = exports.PlaceholderTitle = (0, _styledComponents.default)(Option)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px;\n  font-size: 14px;\n"])));
var OptionContent = exports.OptionContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var OptionName = exports.OptionName = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #263238;\n  font-size: 14px;\n  line-height: 1.3;\n"])));
var WrapperBusinessImage = exports.WrapperBusinessImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  border: 1px solid #E3E3E3;\n  border-radius: 7px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 5px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])));
var BusinessImageStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var BusinessImage = exports.BusinessImage = function BusinessImage(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: transparent !important;\n\n  > span {\n    display: flex;\n  }\n"])));