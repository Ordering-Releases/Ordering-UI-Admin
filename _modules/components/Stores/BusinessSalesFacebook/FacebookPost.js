"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookPost = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FacebookPost = function FacebookPost() {
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.FacebookPostContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_POST_DESC1', 'It’s very easy to connect Ordering with a Facebook post!')), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_POST_DESC2', 'Lorem ipsum dolor sit amet consectetur. Platea eget blandit viverra scelerisque gravida sit tortor tellus interdum. Dolor amet quis vitae commodo nisl vestibulum ut sit.')), /*#__PURE__*/_react.default.createElement(_styles.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 1"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_POST_STEP1_DESC', 'To post something on Facebook, you first need to choose the audience to which your advertising is directed.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.facebookPostStep1,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 2"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_POST_STEP2_DESC', 'Then, add what you will publish on your page, and that\'s it!')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.facebookPostStep2,
    alt: ""
  })));
};
exports.FacebookPost = FacebookPost;