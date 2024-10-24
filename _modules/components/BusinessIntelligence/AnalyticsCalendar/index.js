"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsCalendar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _moment = _interopRequireDefault(require("moment"));
var _reactDateRange = require("react-date-range");
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("../../../styles");
var _styles3 = require("./styles");
var locales = _interopRequireWildcard(require("react-date-range/dist/locale"));
var _utils = require("../../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AnalyticsCalendar = exports.AnalyticsCalendar = function AnalyticsCalendar(props) {
  var _state$language, _state$language2;
  var handleChangeDate = props.handleChangeDate,
    defaultValue = props.defaultValue,
    leftAlign = props.leftAlign,
    isSingleDate = props.isSingleDate;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    state = _useLanguage2[0],
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var _useState3 = (0, _react.useState)([{
      startDate: null,
      endDate: null,
      key: 'selection'
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    dateRange = _useState4[0],
    setDateRange = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowCalendar = _useState6[0],
    setIsShowCalendar = _useState6[1];
  var calendarRef = (0, _react.useRef)();
  var handleClickOutside = function handleClickOutside(e) {
    var _calendarRef$current;
    if (!isShowCalendar) return;
    var outsideCalendar = !((_calendarRef$current = calendarRef.current) !== null && _calendarRef$current !== void 0 && _calendarRef$current.contains(e.target));
    if (outsideCalendar) {
      setIsShowCalendar(false);
    }
  };
  var handleOpenCalendar = function handleOpenCalendar(evt) {
    evt.preventDefault();
    setIsShowCalendar(true);
  };
  var handleChangeDates = function handleChangeDates(item) {
    var _item$selection, _item$selection2;
    if ((_item$selection = item.selection) !== null && _item$selection !== void 0 && _item$selection.startDate && (_item$selection2 = item.selection) !== null && _item$selection2 !== void 0 && _item$selection2.endDate) {
      handleChangeDate((0, _moment.default)(item.selection.startDate).format('YYYY-MM-DD'), (0, _moment.default)(item.selection.endDate).format('YYYY-MM-DD'));
    }
    setDateRange([item.selection]);
  };
  var handleChangeSingleDate = function handleChangeSingleDate(selectedDate) {
    handleChangeDate((0, _moment.default)(selectedDate).format('YYYY-MM-DD'), (0, _moment.default)(selectedDate).format('YYYY-MM-DD'));
    setDate(selectedDate);
  };
  var dateFormat = function dateFormat(date1, date2) {
    var formattedDate = "".concat((0, _moment.default)(date1).format('YYYY-MM-DD'), "~").concat((0, _moment.default)(date2).format('YYYY-MM-DD'));
    if ((0, _moment.default)(date1).format('YYYY') === (0, _moment.default)(date2).format('YYYY')) {
      if ((0, _moment.default)(date1).format('MM') === (0, _moment.default)(date2).format('MM')) formattedDate = "".concat((0, _moment.default)(date1).format('DD'), " - ").concat((0, _moment.default)(date2).format('DD'), " ").concat((0, _moment.default)(date2).format('MMM'), ", ").concat((0, _moment.default)(date1).format('YYYY'));else formattedDate = "".concat((0, _moment.default)(date1).format('MM-DD'), " ~ ").concat((0, _moment.default)(date2).format('MM-DD'), ", ").concat((0, _moment.default)(date1).format('YYYY'));
    }
    return formattedDate;
  };
  var singleDateFormat = function singleDateFormat(selectedDate) {};
  (0, _react.useEffect)(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [isShowCalendar]);
  (0, _react.useEffect)(function () {
    if (isSingleDate && defaultValue) {
      setDate(new Date(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.from));
      console.log('this is date');
      return;
    }
    if (defaultValue && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.from) !== '' && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.to) !== '') {
      setDateRange([{
        startDate: new Date(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.from),
        endDate: new Date(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.to),
        key: 'selection'
      }]);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    onClick: handleOpenCalendar
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4, null), isSingleDate ? date ? (0, _moment.default)(date).format('YYYY-MM-DD') : t('SELECT_DATE', 'Select a Date') : dateRange[0].startDate ? dateFormat(dateRange[0].startDate, dateRange[0].endDate) : t('SELECT_DATE_RANGE', 'Select Date Range')), isShowCalendar && /*#__PURE__*/_react.default.createElement(_styles3.AnalyticsCalendarContainer, {
    className: "ordering-calendar",
    ref: calendarRef,
    leftAlign: leftAlign
  }, isSingleDate ? /*#__PURE__*/_react.default.createElement(_reactDateRange.Calendar, {
    locale: (0, _utils.getLocale)(state === null || state === void 0 || (_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.code, locales),
    date: date,
    onChange: function onChange(date) {
      return handleChangeSingleDate(date);
    },
    startDatePlaceholder: t('EARLY', 'Early'),
    endDatePlaceholder: t('CONTINUOUS', 'Continuous')
  }) : /*#__PURE__*/_react.default.createElement(_reactDateRange.DateRange, {
    editableDateInputs: true,
    locale: (0, _utils.getLocale)(state === null || state === void 0 || (_state$language2 = state.language) === null || _state$language2 === void 0 ? void 0 : _state$language2.code, locales),
    onChange: function onChange(item) {
      return handleChangeDates(item);
    },
    moveRangeOnFirstSelection: false,
    ranges: dateRange,
    startDatePlaceholder: t('EARLY', 'Early'),
    endDatePlaceholder: t('CONTINUOUS', 'Continuous')
  })));
};