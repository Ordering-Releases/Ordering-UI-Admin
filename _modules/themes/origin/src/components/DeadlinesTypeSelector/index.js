"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeadlinesTypeSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Select = require("../../styles/Select");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DeadlinesTypeSelector = exports.DeadlinesTypeSelector = function DeadlinesTypeSelector(props) {
  var _theme$images, _theme$images2, _theme$images3, _theme$images4, _theme$images5;
  var defaultValue = props.defaultValue,
    handleChangeDeadlineType = props.handleChangeDeadlineType;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var deadlineTypes = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.deadline,
      alt: "deadline"
    }), t('DEADLINES', 'deadlines'))
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.icons) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.deadlineOK,
      alt: "deadline OK"
    }), /*#__PURE__*/_react.default.createElement(_styles.DeadlineOk, null, t('OK', 'ok')))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.icons) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.deadlineRisk,
      alt: "deadline risk"
    }), /*#__PURE__*/_react.default.createElement(_styles.DeadlineRisk, null, t('AT_RISK', 'at risk')))
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.icons) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.deadlineDelayed,
      alt: "deadline delayed"
    }), /*#__PURE__*/_react.default.createElement(_styles.DeadlineDelayed, null, t('DELAYED', 'delayed')))
  }, {
    value: 4,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images5 = theme.images) === null || _theme$images5 === void 0 || (_theme$images5 = _theme$images5.icons) === null || _theme$images5 === void 0 ? void 0 : _theme$images5.deadlineSetting,
      alt: "deadline setting"
    }), t('SETTINGS', 'settings'))
  }];
  return /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: defaultValue,
    options: deadlineTypes,
    onChange: function onChange(deadlineType) {
      return handleChangeDeadlineType(deadlineType);
    }
  });
};