"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSchedule = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _styles = require("../../../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessScheduleUI = function BusinessScheduleUI(props) {
  var business = props.business,
      formState = props.formState,
      handleChangeScheduleState = props.handleChangeScheduleState,
      handleUpdateSchedule = props.handleUpdateSchedule,
      isTutorialMode = props.isTutorialMode,
      handleTutorialSkip = props.handleTutorialSkip;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement(_styles2.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_Shared.Schedule, {
    scheduleList: business === null || business === void 0 ? void 0 : business.schedule,
    handleChangeScheduleState: handleChangeScheduleState
  })), /*#__PURE__*/_react.default.createElement(_styles2.BottomActionContainer, null, /*#__PURE__*/_react.default.createElement("div", null, isTutorialMode && /*#__PURE__*/_react.default.createElement(_styles2.SkipButton, {
    onClick: function onClick() {
      return handleTutorialSkip();
    }
  }, t('TUTORIAL_SKIP', 'Skip')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 || (formState === null || formState === void 0 ? void 0 : formState.loading),
    onClick: function onClick() {
      return handleUpdateSchedule();
    }
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : isTutorialMode ? t('SAVE_AND_CONTINUE', 'Save and continue') : t('SAVE', 'Save'))))));
};

var BusinessSchedule = function BusinessSchedule(props) {
  var businessScheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessScheduleUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessSchedule, businessScheduleProps);
};

exports.BusinessSchedule = BusinessSchedule;