"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverTemporalSchedule = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var _moment = _interopRequireDefault(require("moment"));
var locales = _interopRequireWildcard(require("react-date-range/dist/locale"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _utils = require("../../../utils");
var _styles2 = require("../../../styles");
var _styles3 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverTemporalSchedule = function DriverTemporalSchedule(props) {
  var _state$language;
  var driverSchedule = props.driverSchedule,
    handleSelectDriverTemporary = props.handleSelectDriverTemporary,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    state = _useLanguage2[0],
    t = _useLanguage2[1];
  var datePickerRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(driverSchedule !== null && driverSchedule !== void 0 && driverSchedule.temporary_at ? _moment.default.utc(driverSchedule === null || driverSchedule === void 0 ? void 0 : driverSchedule.temporary_at).local().toDate() : new Date()),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var handleSelect = function handleSelect(date) {
    setSelectedDate(date);
    handleSelectDriverTemporary(driverSchedule === null || driverSchedule === void 0 ? void 0 : driverSchedule.id, true, (0, _moment.default)(date).utc().format('YYYY-MM-DD HH:mm:ss'));
  };
  var handleOnClick = function handleOnClick() {
    onClose();
  };
  (0, _react.useEffect)(function () {
    datePickerRef.current.setOpen(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles3.Container, null, /*#__PURE__*/_react.default.createElement(_styles3.DateContainer, null, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    ref: datePickerRef,
    locale: (0, _utils.getLocale)(state === null || state === void 0 || (_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.code, locales),
    selected: selectedDate,
    minDate: new Date(),
    onChange: handleSelect,
    onCalendarClose: onClose,
    showTimeSelect: true,
    timeFormat: "HH:mm",
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "MMMM d, yyyy HH:mm"
  })), /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    onClick: function onClick() {
      return handleOnClick();
    }
  }, t('SAVE', 'Save')));
};
exports.DriverTemporalSchedule = DriverTemporalSchedule;