"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsLogs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SettingsLogsUI = function SettingsLogsUI(props) {
  var _configs$general_hour, _logsList$logs;
  var logsList = props.logsList,
    paginationProps = props.paginationProps,
    getSettingsLogs = props.getSettingsLogs;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = _react.default.useState({
      newSchedule: [],
      oldSchedule: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    schedules = _React$useState4[0],
    setSchedules = _React$useState4[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var formatTime = configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value;
  var handleChangePage = function handleChangePage(page) {
    getSettingsLogs(page, 10);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getDriversGroupLogs(expectedPage, pageSize);
  };
  var getValidLogData = function getValidLogData(data) {
    return _typeof(data) === 'object' ? Object.values(data) : typeof data === 'string' ? JSON.parse(data) : data;
  };
  var handleSchedules = function handleSchedules(_schedules) {
    setSchedules({
      newSchedule: _schedules === null || _schedules === void 0 ? void 0 : _schedules.new,
      oldSchedule: _schedules === null || _schedules === void 0 ? void 0 : _schedules.old
    });
  };
  var scheduleModalData = function scheduleModalData(_schedules) {
    setOpen(true);
    handleSchedules(_schedules);
  };
  (0, _react.useEffect)(function () {
    if (logsList.loading || logsList.logs.length > 0 || paginationProps.totalPages <= 1) return;
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [logsList.logs, paginationProps]);
  var daysOptions = [t('DAY7', 'Sunday'), t('DAY1', 'Monday'), t('DAY2', 'Tuesday'), t('DAY3', 'Wednesday'), t('DAY4', 'Thursday'), t('DAY5', 'Friday'), t('DAY6', 'Saturday')];
  var checkTime = function checkTime(val) {
    return val < 10 ? "0".concat(val) : val;
  };
  var timeFormated = function timeFormated(time) {
    return moment("1900-01-01 ".concat(checkTime(time.hour), ":").concat(checkTime(time.minute))).format(formatTime);
  };
  var getSchedule = function getSchedule(_schedules) {
    return !(_schedules !== null && _schedules !== void 0 && _schedules.length) && (_schedules === null || _schedules === void 0 ? void 0 : _schedules.length) < 1 ? /*#__PURE__*/_react.default.createElement("p", null, t('NONE', 'None')) : _schedules === null || _schedules === void 0 ? void 0 : _schedules.map(function (schedule, i) {
      var _schedule$lapses;
      return /*#__PURE__*/_react.default.createElement(_styles2.ScheduleDay, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("span", null, daysOptions[i]), /*#__PURE__*/_react.default.createElement(_styles2.ScheduleLapses, null, schedule === null || schedule === void 0 || (_schedule$lapses = schedule.lapses) === null || _schedule$lapses === void 0 ? void 0 : _schedule$lapses.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement("p", {
          key: i
        }, "".concat(timeFormated(item === null || item === void 0 ? void 0 : item.open), " - ").concat(timeFormated(item === null || item === void 0 ? void 0 : item.close)));
      })));
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriversGroupLogsContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SETTINGS_LOGS', 'Settings Logs')))), /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, logsList.loading || logsList.logs.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.Table, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('CONTROL_PANEL_USERS', 'Users')), /*#__PURE__*/_react.default.createElement("th", null, t('EVENTS_TYPE', 'Events type')), /*#__PURE__*/_react.default.createElement("th", null, t('CONFIG', 'Config')), /*#__PURE__*/_react.default.createElement("th", null, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement("th", null, t('NEW', 'New')), /*#__PURE__*/_react.default.createElement("th", null, t('OLD', 'Old')), /*#__PURE__*/_react.default.createElement("th", null, t('EXPORT_DATE', 'Date')), /*#__PURE__*/_react.default.createElement("th", null, t('USER_AGENT', 'User agent')))), logsList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DataListTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DateTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))));
  }) : !logsList.error && ((_logsList$logs = logsList.logs) === null || _logsList$logs === void 0 ? void 0 : _logsList$logs.map(function (log) {
    var _log$author, _log$user, _log$author2, _log$user2, _log$author3, _log$user3, _log$config, _log$config2;
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: log.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, (log === null || log === void 0 || (_log$author = log.author) === null || _log$author === void 0 ? void 0 : _log$author.name) || (log === null || log === void 0 || (_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name), " ", (log === null || log === void 0 || (_log$author2 = log.author) === null || _log$author2 === void 0 ? void 0 : _log$author2.lastname) || (log === null || log === void 0 || (_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.lastname)), /*#__PURE__*/_react.default.createElement("p", null, (log === null || log === void 0 || (_log$author3 = log.author) === null || _log$author3 === void 0 ? void 0 : _log$author3.email) || (log === null || log === void 0 || (_log$user3 = log.user) === null || _log$user3 === void 0 ? void 0 : _log$user3.email)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.EventTypeContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t(((log === null || log === void 0 ? void 0 : log.event) || '').toUpperCase())))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ConfigListTable, null, /*#__PURE__*/_react.default.createElement("p", null, t(((log === null || log === void 0 || (_log$config = log.config) === null || _log$config === void 0 ? void 0 : _log$config.key) || '').toUpperCase(), ((log === null || log === void 0 || (_log$config2 = log.config) === null || _log$config2 === void 0 ? void 0 : _log$config2.key) || '').replaceAll('_', ' '))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DataListTable, null, (log === null || log === void 0 ? void 0 : log.data) && getValidLogData(log === null || log === void 0 ? void 0 : log.data).map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement("tbody", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t(item === null || item === void 0 ? void 0 : item.attribute.toUpperCase(), item === null || item === void 0 ? void 0 : item.attribute.replaceAll('_', ' ')))));
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DataListTable, null, (log === null || log === void 0 ? void 0 : log.data) && getValidLogData(log === null || log === void 0 ? void 0 : log.data).map(function (item, i) {
      var _item$added, _item$added2;
      return /*#__PURE__*/_react.default.createElement("tbody", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, item.attribute !== 'schedule' ? /*#__PURE__*/_react.default.createElement("td", null, typeof (item === null || item === void 0 ? void 0 : item.new) !== 'undefined' && (item === null || item === void 0 ? void 0 : item.new) !== null ? "".concat(item === null || item === void 0 ? void 0 : item.new) : (item === null || item === void 0 || (_item$added = item.added) === null || _item$added === void 0 ? void 0 : _item$added.length) > 0 ? item === null || item === void 0 || (_item$added2 = item.added) === null || _item$added2 === void 0 ? void 0 : _item$added2.toString() : t('NONE', 'None')) : /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.SeeChanges, {
        onClick: function onClick() {
          return scheduleModalData(item, 'new');
        }
      }, t('SEE_CHANGES', 'See changes')))));
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DataListTable, null, (log === null || log === void 0 ? void 0 : log.data) && getValidLogData(log === null || log === void 0 ? void 0 : log.data).map(function (item, i) {
      var _item$removed, _item$removed2;
      return /*#__PURE__*/_react.default.createElement("tbody", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, item.attribute !== 'schedule' ? /*#__PURE__*/_react.default.createElement("td", null, typeof (item === null || item === void 0 ? void 0 : item.old) !== 'undefined' && (item === null || item === void 0 ? void 0 : item.old) !== null ? "".concat(item === null || item === void 0 ? void 0 : item.old) : (item === null || item === void 0 || (_item$removed = item.removed) === null || _item$removed === void 0 ? void 0 : _item$removed.length) > 0 ? item === null || item === void 0 || (_item$removed2 = item.removed) === null || _item$removed2 === void 0 ? void 0 : _item$removed2.toString() : t('NONE', 'None')) : /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.SeeChanges, {
        onClick: function onClick() {
          return scheduleModalData(item, 'old');
        }
      }, t('SEE_CHANGES', 'See changes')))));
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DateTimeWrapper, null, parseDate(log.created_at, {
      utc: false
    }))), /*#__PURE__*/_react.default.createElement("td", null, log === null || log === void 0 ? void 0 : log.user_agent)));
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.NoData, null, t('NO_DATA', 'No Data'))), (logsList === null || logsList === void 0 ? void 0 : logsList.logs.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    isHidePagecontrol: true,
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "40%",
    height: "60vh",
    style: {
      overflowY: 'auto'
    },
    padding: "30px",
    title: t('SCHEDULE_CHANGES', 'Schedule changes'),
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.SchedulesWrapper, {
    border: !!(schedules !== null && schedules !== void 0 && schedules.oldSchedule)
  }, (schedules === null || schedules === void 0 ? void 0 : schedules.newSchedule) && /*#__PURE__*/_react.default.createElement(_styles2.Schedules, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleTitle, null, t('NEW', 'New')), getSchedule(schedules === null || schedules === void 0 ? void 0 : schedules.newSchedule)), (schedules === null || schedules === void 0 ? void 0 : schedules.oldSchedule) && /*#__PURE__*/_react.default.createElement(_styles2.Schedules, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleTitle, null, t('OLD', 'Old')), getSchedule(schedules === null || schedules === void 0 ? void 0 : schedules.oldSchedule)))));
};
var SettingsLogs = function SettingsLogs(props) {
  var settingsLogsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SettingsLogsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.SettingsLogs, settingsLogsProps);
};
exports.SettingsLogs = SettingsLogs;