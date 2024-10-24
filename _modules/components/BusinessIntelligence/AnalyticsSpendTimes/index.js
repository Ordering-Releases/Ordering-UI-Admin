"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsSpendTimes = void 0;
var _react = _interopRequireWildcard(require("react"));
require("chartjs-adapter-moment");
var _moment = _interopRequireDefault(require("moment"));
var _styles = require("./styles");
var _BsArrowsAngleExpand = _interopRequireDefault(require("@meronex/icons/bs/BsArrowsAngleExpand"));
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactChartjs = require("react-chartjs-2");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
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
var AnalyticsSpendTimes = exports.AnalyticsSpendTimes = function AnalyticsSpendTimes(props) {
  var chartDataList = props.chartDataList,
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
  var generateAcceptData = function generateAcceptData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _chartDataList$data;
      var index = chartDataList === null || chartDataList === void 0 || (_chartDataList$data = chartDataList.data) === null || _chartDataList$data === void 0 ? void 0 : _chartDataList$data.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });
      if (index !== -1) {
        var _chartDataList$data$i, _chartDataList$data$i2, _chartDataList$data$i3;
        values.push({
          x: chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i = chartDataList.data[index]) === null || _chartDataList$data$i === void 0 ? void 0 : _chartDataList$data$i.time,
          y: chartDataList !== null && chartDataList !== void 0 && (_chartDataList$data$i2 = chartDataList.data[index]) !== null && _chartDataList$data$i2 !== void 0 && _chartDataList$data$i2.accept_spend ? (chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i3 = chartDataList.data[index]) === null || _chartDataList$data$i3 === void 0 ? void 0 : _chartDataList$data$i3.accept_spend) / 60 : 0
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
  var generatePickUPData = function generatePickUPData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _chartDataList$data2;
      var index = chartDataList === null || chartDataList === void 0 || (_chartDataList$data2 = chartDataList.data) === null || _chartDataList$data2 === void 0 ? void 0 : _chartDataList$data2.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });
      if (index !== -1) {
        var _chartDataList$data$i4, _chartDataList$data$i5, _chartDataList$data$i6;
        values.push({
          x: chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i4 = chartDataList.data[index]) === null || _chartDataList$data$i4 === void 0 ? void 0 : _chartDataList$data$i4.time,
          y: chartDataList !== null && chartDataList !== void 0 && (_chartDataList$data$i5 = chartDataList.data[index]) !== null && _chartDataList$data$i5 !== void 0 && _chartDataList$data$i5.pickup_spend ? (chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i6 = chartDataList.data[index]) === null || _chartDataList$data$i6 === void 0 ? void 0 : _chartDataList$data$i6.pickup_spend) / 60 : 0
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
  var generateDeliveryData = function generateDeliveryData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _chartDataList$data3;
      var index = chartDataList === null || chartDataList === void 0 || (_chartDataList$data3 = chartDataList.data) === null || _chartDataList$data3 === void 0 ? void 0 : _chartDataList$data3.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });
      if (index !== -1) {
        var _chartDataList$data$i7, _chartDataList$data$i8, _chartDataList$data$i9;
        values.push({
          x: chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i7 = chartDataList.data[index]) === null || _chartDataList$data$i7 === void 0 ? void 0 : _chartDataList$data$i7.time,
          y: chartDataList !== null && chartDataList !== void 0 && (_chartDataList$data$i8 = chartDataList.data[index]) !== null && _chartDataList$data$i8 !== void 0 && _chartDataList$data$i8.delivery_spend ? (chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i9 = chartDataList.data[index]) === null || _chartDataList$data$i9 === void 0 ? void 0 : _chartDataList$data$i9.delivery_spend) / 60 : 0
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
  var generateCompletedData = function generateCompletedData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _chartDataList$data4;
      var index = chartDataList === null || chartDataList === void 0 || (_chartDataList$data4 = chartDataList.data) === null || _chartDataList$data4 === void 0 ? void 0 : _chartDataList$data4.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });
      if (index !== -1) {
        var _chartDataList$data$i10, _chartDataList$data$i11, _chartDataList$data$i12;
        values.push({
          x: chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i10 = chartDataList.data[index]) === null || _chartDataList$data$i10 === void 0 ? void 0 : _chartDataList$data$i10.time,
          y: chartDataList !== null && chartDataList !== void 0 && (_chartDataList$data$i11 = chartDataList.data[index]) !== null && _chartDataList$data$i11 !== void 0 && _chartDataList$data$i11.complete_spend ? (chartDataList === null || chartDataList === void 0 || (_chartDataList$data$i12 = chartDataList.data[index]) === null || _chartDataList$data$i12 === void 0 ? void 0 : _chartDataList$data$i12.complete_spend) / 60 : 0
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
  var defaultData = {
    datasets: [{
      label: t('ACCEPT', 'Accept'),
      data: generateAcceptData(),
      fill: false,
      backgroundColor: '#FFC700',
      borderColor: '#FFC700',
      tension: 0.4
    }, {
      label: t('PICKUP', 'PickUP'),
      data: generatePickUPData(),
      fill: false,
      backgroundColor: '#F0879A',
      borderColor: '#F0879A',
      tension: 0.4
    }, {
      label: t('DELIVERY', 'Delivery'),
      data: generateDeliveryData(),
      fill: false,
      backgroundColor: '#52C9FD',
      borderColor: '#52C9FD',
      tension: 0.4
    }, {
      label: t('COMPLETED', 'Completed'),
      data: generateCompletedData(),
      fill: false,
      backgroundColor: '#00D27A',
      borderColor: '#00D27A',
      tension: 0.4
    }]
  };
  var options = {
    scales: {
      x: getTimeAxes(filterList === null || filterList === void 0 ? void 0 : filterList.lapse),
      y: {
        beginAtZero: true,
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
        position: 'bottom'
      }
    },
    pointRadius: 0
  };
  var downloadCSV = function downloadCSV() {
    var csv = "".concat(t('TIME', 'Time'), ", ").concat(t('ACCEPT', 'Accept'), ", ").concat(t('PICKUP', 'PickUP'), ", ").concat(t('DELIVERY', 'Delivery'), ", ").concat(t('COMPLETED', 'Completed'), "\n");
    var _iterator = _createForOfIteratorHelper(chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;
        csv += "".concat(row.time, ",");
        csv += "".concat(row.accept_spend, ",");
        csv += "".concat(row.pickup_spend, ",");
        csv += "".concat(row.delivery_spend, ",");
        csv += "".concat(row.complete_spend, ",");
        csv += '\n';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var downloadLink = document.createElement('a');
    var blob = new Blob(["\uFEFF", csv]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    var fileSuffix = new Date().getTime();
    downloadLink.download = "times_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  var previewChart = function previewChart() {
    if ((chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data.length) > 0) setIsShowPreview(true);
  };
  (0, _react.useEffect)(function () {
    updateTimeAxes();
  }, [filterList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ChartHeaderContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('TIMES', 'Times')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: (chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_BsArrowsAngleExpand.default, {
    onClick: previewChart
  }), /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    className: "download-view",
    onClick: downloadCSV
  }))), /*#__PURE__*/_react.default.createElement(_styles.ChartContentWrapper, null, chartDataList !== null && chartDataList !== void 0 && chartDataList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : (chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data.length) > 0 ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: defaultData,
    options: options,
    ref: chartRef
  }) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "80vh",
    padding: "30px",
    title: t('TIMES', 'Times'),
    open: isShowPreview,
    onClose: function onClose() {
      return setIsShowPreview(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ChartContentWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: defaultData,
    options: options
  }))));
};