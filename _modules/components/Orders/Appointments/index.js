"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var Appointments = exports.Appointments = function Appointments(props) {
  var appointmentsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AppointmentsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.Appointments, appointmentsProps);
};