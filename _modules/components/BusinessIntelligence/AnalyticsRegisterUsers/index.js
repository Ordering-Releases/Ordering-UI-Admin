"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsRegisterUsers = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
require("chartjs-adapter-moment");
var _BsArrowsAngleExpand = _interopRequireDefault(require("@meronex/icons/bs/BsArrowsAngleExpand"));
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactChartjs = require("react-chartjs-2");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _moment = _interopRequireDefault(require("moment"));
var _Shared = require("../../Shared");
var _GraphLoadingMessage = require("../GraphLoadingMessage");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AnalyticsRegisterUsers = exports.AnalyticsRegisterUsers = function AnalyticsRegisterUsers(props) {
  var _registerUsersList$da5, _registerUsersList$da6;
  var registerUsersList = props.registerUsersList,
    filterList = props.filterList;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var chartRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowPreview = _useState2[0],
    setIsShowPreview = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    timeAxes = _useState4[0],
    setTimeAxes = _useState4[1];
  var updateTimeAxes = function updateTimeAxes() {
    var unitdate = getTimeAxes(filterList === null || filterList === void 0 ? void 0 : filterList.lapse).time.unit;
    var maxdate = (0, _moment.default)(getTimeAxes(filterList === null || filterList === void 0 ? void 0 : filterList.lapse).time.max).endOf(unitdate);
    var mindate = (0, _moment.default)(getTimeAxes(filterList === null || filterList === void 0 ? void 0 : filterList.lapse).time.min).startOf(unitdate);
    var curDate = mindate;
    var newTimeAxes = [];
    var adder = 'd';
    switch (unitdate) {
      case 'day':
        adder = 'd';
        break;
      case 'month':
        adder = 'M';
        break;
      case 'year':
        adder = 'y';
        break;
      case 'hour':
        adder = 'h';
        break;
      default:
        break;
    }
    do {
      newTimeAxes.push((0, _moment.default)(curDate._d.getTime()).format('YYYY-MM-DD HH:mm:ss'));
      curDate = curDate.clone().add(1, adder);
    } while (curDate <= maxdate);
    setTimeAxes(newTimeAxes);
  };
  var generateData = function generateData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _registerUsersList$da;
      var index = registerUsersList === null || registerUsersList === void 0 || (_registerUsersList$da = registerUsersList.data) === null || _registerUsersList$da === void 0 ? void 0 : _registerUsersList$da.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });
      if (index !== -1) {
        var _registerUsersList$da2, _registerUsersList$da3;
        values.push({
          x: registerUsersList === null || registerUsersList === void 0 || (_registerUsersList$da2 = registerUsersList.data[index]) === null || _registerUsersList$da2 === void 0 ? void 0 : _registerUsersList$da2.time,
          y: registerUsersList === null || registerUsersList === void 0 || (_registerUsersList$da3 = registerUsersList.data[index]) === null || _registerUsersList$da3 === void 0 ? void 0 : _registerUsersList$da3.users
        });
      } else {
        values.push({
          x: axe,
          y: 0
        });
      }
    });
    return values;
  };
  var getTimeAxes = function getTimeAxes(lapse) {
    var xAxes = {
      type: 'time',
      grid: {
        display: false
      },
      time: {
        stepSize: 1,
        displayFormats: {
          hour: 'LT'
        }
      },
      ticks: {
        fontSize: 12,
        fontColor: '#CED4DA'
      }
    };
    switch (lapse) {
      case 'today':
      case 'yesterday':
        xAxes.time.unit = 'hour';
        xAxes.time.min = (0, _moment.default)().subtract(lapse === 'today' ? 0 : 1, 'days').format('YYYY-MM-DD 00:00:00');
        xAxes.time.max = (0, _moment.default)().subtract(lapse === 'today' ? 0 : 1, 'days').format('YYYY-MM-DD 24:00:00');
        break;
      case 'last_7_days':
      case 'last_30_days':
        xAxes.time.unit = 'day';
        xAxes.time.min = (0, _moment.default)().subtract(lapse === 'last_7_days' ? 7 : 30, 'days').format('YYYY-MM-DD');
        xAxes.time.max = (0, _moment.default)().format('YYYY-MM-DD');
        break;
      default:
        {
          var _lapse = lapse.split(',');
          var from = (0, _moment.default)(_lapse[0] + ' 00:00:00');
          var to = (0, _moment.default)(_lapse[1] + ' 24:00:00');
          var duration = _moment.default.duration(from.diff(to));
          var hours = Math.abs(duration.asHours());
          var days = Math.abs(duration.asDays());
          var months = Math.abs(duration.asMonths());
          if (hours <= 24) {
            xAxes.time.unit = 'hour';
            xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss');
            xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss');
          } else if (days <= 30) {
            xAxes.time.unit = 'day';
            xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss');
            xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss');
          } else if (months <= 12) {
            xAxes.time.unit = 'month';
            xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss');
            xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss');
          } else {
            xAxes.time.unit = 'year';
            xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss');
            xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss');
          }
          break;
        }
    }
    return xAxes;
  };
  var downloadImage = function downloadImage() {
    var csv = "".concat(t('TIME', 'Time'), ", ").concat(t('USERS', 'Users'), "\n");
    var _iterator = _createForOfIteratorHelper(registerUsersList === null || registerUsersList === void 0 ? void 0 : registerUsersList.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;
        csv += row.time + ',';
        csv += "".concat(row.users, ",");
        csv += '\n';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var link = document.createElement('a');
    var fileSuffix = new Date().getTime();
    link.download = "registers_users_".concat(fileSuffix, ".csv");
    var blob = new Blob(["\uFEFF", csv], {
      type: 'text/csv'
    });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function () {
      link.href = reader.result;
      link.click();
    };
  };
  var defaultData = {
    datasets: [{
      data: generateData(),
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#2C7BE5',
      tension: 0.4,
      borderWidth: 3
    }]
  };
  var options = {
    scales: {
      x: getTimeAxes(filterList === null || filterList === void 0 ? void 0 : filterList.lapse),
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#CED4DA'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  };
  var previewChart = function previewChart() {
    var _registerUsersList$da4;
    if ((registerUsersList === null || registerUsersList === void 0 || (_registerUsersList$da4 = registerUsersList.data) === null || _registerUsersList$da4 === void 0 ? void 0 : _registerUsersList$da4.length) > 0) setIsShowPreview(true);
  };
  (0, _react.useEffect)(function () {
    updateTimeAxes();
  }, [filterList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.RegisterUsersHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('REGISTER_USERS', 'Register Users')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: (registerUsersList === null || registerUsersList === void 0 || (_registerUsersList$da5 = registerUsersList.data) === null || _registerUsersList$da5 === void 0 ? void 0 : _registerUsersList$da5.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_BsArrowsAngleExpand.default, {
    onClick: previewChart
  }), /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    className: "download-view",
    onClick: downloadImage
  }))), /*#__PURE__*/_react.default.createElement(_styles.RegisterUserChartWrapper, null, registerUsersList !== null && registerUsersList !== void 0 && registerUsersList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : (registerUsersList === null || registerUsersList === void 0 || (_registerUsersList$da6 = registerUsersList.data) === null || _registerUsersList$da6 === void 0 ? void 0 : _registerUsersList$da6.length) > 0 ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: defaultData,
    options: options,
    ref: chartRef
  }) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "80vh",
    padding: "30px",
    title: t('REGISTER_USERS', 'Register Users'),
    open: isShowPreview,
    onClose: function onClose() {
      return setIsShowPreview(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.RegisterUserChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: defaultData,
    options: options
  }))));
};