"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2;
var _excluded = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
/**
 * Create ThemeContext
 * Context to use theme on the app
 */
var ThemeContext = exports.ThemeContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Api provider to manage theme
 * @param {props} props
 */
var ThemeProvider = exports.ThemeProvider = function ThemeProvider(_ref) {
  var _theme$fonts$primary;
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(props.theme),
    _useState2 = _slicedToArray(_useState, 2),
    theme = _useState2[0],
    setTheme = _useState2[1];
  var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    @media (min-width: 578px) {\n      /** Mozilla scrollbar*/\n      * {\n        scrollbar-color: #CCC !important;\n        scrollbar-width: thin !important;\n      }\n\n      /** Scrollbar for browser based on webkit */\n      ::-webkit-scrollbar {\n        width: 6px;\n        height: 6px;\n      }\n      ::-webkit-scrollbar-thumb {\n        background: #CCCCCC;\n      }\n      ::-webkit-scrollbar-thumb:hover {\n        background: #AFAFAF;\n      }\n      ::-webkit-scrollbar-thumb:active {\n        background: #6b6b6b;\n      }\n      ::-webkit-scrollbar-track {\n        background: rgba(204, 204, 204, 0.3);\n      }\n    }\n\n    body {\n      font-family: '", "', sans-serif;\n      margin: 0;\n      background-color: ", ";\n      color: ", ";\n\n      ", "\n    }\n\n    input, textarea, button {\n      font-family: inherit;\n    }\n\n    * {\n      box-sizing: border-box;\n    }\n\n    .dxc-tooltip {\n      z-index: 9999;\n    }\n\n    .popup-backdrop {\n      background-color: rgba(0, 0, 0, 0.4);\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 3000;\n    }\n\n    .modal-backdrop {\n      display: none;\n    }\n\n    .popup-component {\n      background-color: rgba(0, 0, 0, 0.3);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .ghostDragging {\n      border-radius: 8px;\n      background: ", ";\n      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n      border: 1px solid ", ";\n      font-size: 14px;\n      padding: 10px 19px;\n      width: fit-content;\n      min-width: 200px;\n      font-size: 14px;\n      position: fixed;\n    }\n\n    #___reactour {\n      > div:first-child {\n        opacity: 0.7;\n        color: #000;\n        z-index: 2000;\n      }\n\n      span[data-tour-elem=badge] {\n        display: none;\n      }\n      div[data-tour-elem=controls] {\n        display: none;\n      }\n    }\n  "])), ((_theme$fonts$primary = theme.fonts.primary) === null || _theme$fonts$primary === void 0 ? void 0 : _theme$fonts$primary.name) || 'Helvetica', function (props) {
    var _props$theme$colors;
    return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFFFFF';
  }, function (props) {
    var _props$theme$colors2;
    return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor) || '#000';
  }, theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        direction: rtl;\n      "]))), function (props) {
    var _props$theme$colors3;
    return ((_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.backgroundPage) || '#FFF';
  }, function (props) {
    var _props$theme$colors4;
    return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.borderColor;
  });
  (0, _react.useEffect)(function () {
    var fonts = Object.entries(theme.fonts || {});
    fonts.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        fontFamily = _ref3[1];
      if (!window.document.getElementById("".concat(name, "-font-styles"))) {
        var font = window.document.createElement('link');
        font.id = "".concat(name, "-font-styles");
        font.rel = 'stylesheet';
        font.async = true;
        font.defer = true;
        font.href = "https://fonts.googleapis.com/css2?family=".concat(fontFamily.name, ":wght@").concat(fontFamily.weights.join(';'), "&display=swap");
        window.document.body.appendChild(font);
      }
    });
  }, []);
  var update = function update(theme) {
    setTheme(theme);
  };
  var merge = function merge(partTheme) {
    setTheme(_objectSpread(_objectSpread({}, theme), partTheme));
  };
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: [theme, {
      update: update,
      merge: merge
    }]
  }, /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(GlobalStyle, null), children));
};

/**
 * Hook to get theme state
 */
var useTheme = exports.useTheme = function useTheme() {
  var themeManager = (0, _react.useContext)(ThemeContext);
  return themeManager || [{}];
};