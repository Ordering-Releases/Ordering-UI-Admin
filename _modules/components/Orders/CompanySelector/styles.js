"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperCompanyImage = exports.PlaceholderTitle = exports.OptionContent = exports.Option = exports.CompanyText = exports.CompanyNameContainer = exports.CompanyName = exports.CompanyImage = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding: ", ";\n  white-space: nowrap;\n  ", "\n  ", "\n\n  img {\n    width: 45px;\n    border-radius: 8px;\n  }\n\n  ", "\n\n  span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 350px;\n    font-size: 14px;\n  }\n\n  @media (max-width: 576px) {\n    padding: ", ";\n    ", "\n    span {\n      max-width: 280px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (_ref) {
  var padding = _ref.padding;
  return padding || '5px 10px';
}, function (_ref2) {
  var isPhoneView = _ref2.isPhoneView;
  return isPhoneView && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
}, function (_ref3) {
  var isRemove = _ref3.isRemove;
  return isRemove && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: ", ";\n    padding: 3px 10px;\n    font-size: 14px;\n  "])), function (props) {
    return props.theme.colors.danger;
  });
}, function (_ref4) {
  var small = _ref4.small;
  return small && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: ", ";\n    img {\n      width: 25px;\n    }\n  "])), function (_ref5) {
    var padding = _ref5.padding;
    return padding || '5px 0px';
  });
}, function (_ref6) {
  var padding = _ref6.padding;
  return padding || '5px 0px';
}, function (_ref7) {
  var isFilterView = _ref7.isFilterView;
  return isFilterView && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
  });
});
var OptionContent = exports.OptionContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var CompanyNameContainer = exports.CompanyNameContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  line-height: 1.3;\n  color: #263238;\n"])));
var CompanyName = exports.CompanyName = _styledComponents.default.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.3;\n  color: ", ";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n  margin: 0px;\n\n  ", "\n\n  @media (max-width: 576px) {\n    max-width: 90px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref8) {
  var small = _ref8.small;
  return small && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    font-weight: 400;\n  "])));
});
var CompanyText = exports.CompanyText = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: ", ";\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref9) {
  var small = _ref9.small;
  return small && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
});
var WrapperCompanyImage = exports.WrapperCompanyImage = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 45px;\n  height: 45px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  display: flex;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n\n  ", "\n\n  ", "\n"])), function (_ref10) {
  var small = _ref10.small;
  return small && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    width: 24px;\n    height: 24px;\n    border-radius: 8px;\n    svg {\n      padding: 3px;\n    }\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-left: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-right: 8px;\n  "])));
});
var CompanyImageStyled = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));
var CompanyImage = exports.CompanyImage = function CompanyImage(props) {
  return /*#__PURE__*/_react.default.createElement(CompanyImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var PlaceholderTitle = exports.PlaceholderTitle = (0, _styledComponents.default)(Option)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  padding: 10px;\n\n  ", "\n"])), function (_ref11) {
  var isSingle = _ref11.isSingle;
  return isSingle && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    padding: 0px;\n    font-size: 14px;\n  "])));
});