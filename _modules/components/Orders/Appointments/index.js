"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Appointments = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _BusinessSelectHeader = require("../../Stores/BusinessSelectHeader");
var _moment = _interopRequireDefault(require("moment"));
var _reactBigCalendar = require("react-big-calendar");
require("react-big-calendar/lib/addons/dragAndDrop/styles.css");
require("react-big-calendar/lib/css/react-big-calendar.css");
var _CalendarHeader = require("./CalendarHeader");
var _EventComponent = require("./EventComponent");
var _OrderDetails = require("../OrderDetails");
var _Shared = require("../../Shared");
var _styles3 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var localizer = (0, _reactBigCalendar.momentLocalizer)(_moment.default);
var AppointmentsUI = function AppointmentsUI(props) {
  var _configs$appointments, _configs$format_time;
  var selectedBusiness = props.selectedBusiness,
    setSelectedBusiness = props.setSelectedBusiness,
    businessCalendarEvents = props.businessCalendarEvents;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showSelectHeader = _useState2[0],
    setShowSelectHeader = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openDetails = _useState4[0],
    setOpenDetails = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedAppointment = _useState6[0],
    setSelectedAppointment = _useState6[1];
  var isEnabledAppointmentsFeature = configs === null || configs === void 0 || (_configs$appointments = configs.appointments) === null || _configs$appointments === void 0 ? void 0 : _configs$appointments.value;
  var changeBusinessState = function changeBusinessState(business) {
    setShowSelectHeader(false);
    setSelectedBusiness(business);
  };
  var handleOpenDetails = function handleOpenDetails(event) {
    setOpenDetails(true);
    setSelectedAppointment(event);
  };
  return /*#__PURE__*/_react.default.createElement(_styles3.Container, null, businessCalendarEvents.loading && /*#__PURE__*/_react.default.createElement(_styles3.SpinnerLoaderWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, null)), /*#__PURE__*/_react.default.createElement(_styles3.Header, null, /*#__PURE__*/_react.default.createElement(_styles3.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('APPOINTMENT', 'Appointment')), isEnabledAppointmentsFeature && /*#__PURE__*/_react.default.createElement(_styles3.BusinessSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.BusinessName, {
    onClick: function onClick() {
      return setShowSelectHeader(!showSelectHeader);
    }
  }, (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.name) || t('SELECT_BUSINESS', 'Select a business')), showSelectHeader && /*#__PURE__*/_react.default.createElement(_BusinessSelectHeader.BusinessSelectHeader, {
    close: function close() {
      return setShowSelectHeader(false);
    },
    isOpen: showSelectHeader,
    changeBusinessState: changeBusinessState
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null), /*#__PURE__*/_react.default.createElement("span", {
    className: "calendar"
  }, t('CALENDAR', 'Calendar')))))), isEnabledAppointmentsFeature ? /*#__PURE__*/_react.default.createElement(_styles3.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBigCalendar.Calendar, {
    localizer: localizer,
    formats: {
      timeGutterFormat: (configs === null || configs === void 0 || (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '24' ? 'HH:mm' : 'HH:mm A'
    },
    defaultView: _reactBigCalendar.Views.MONTH,
    events: businessCalendarEvents.result,
    startAccessor: function startAccessor(event) {
      return (0, _moment.default)(parseDate(event.start, {
        outputFormat: 'YYYY-MM-DD HH:mm:ss'
      })).toDate();
    },
    endAccessor: function endAccessor(event) {
      return (0, _moment.default)(parseDate(event.end, {
        outputFormat: 'YYYY-MM-DD HH:mm:ss'
      })).toDate();
    },
    views: ['month', 'week', 'day'],
    showMultiDayTimes: false,
    messages: {
      showMore: function showMore(total) {
        return "+".concat(total, " ").concat(t('MORE', 'More'));
      }
    },
    onSelectEvent: function onSelectEvent(event) {
      return handleOpenDetails(event);
    },
    components: {
      toolbar: _CalendarHeader.CalendarHeader,
      event: _EventComponent.EventComponent
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles3.WarningText, null, t('APPOINTMENTS_FEATURE_NOT_ENABLED', 'The appointments feature is not enabled.')), openDetails && /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    isServiceOrder: true,
    open: openDetails,
    orderId: selectedAppointment === null || selectedAppointment === void 0 ? void 0 : selectedAppointment.order_id,
    onClose: function onClose() {
      setOpenDetails(false);
      setSelectedAppointment(null);
    }
  }));
};
var Appointments = function Appointments(props) {
  var appointmentsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AppointmentsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.Appointments, appointmentsProps);
};
exports.Appointments = Appointments;