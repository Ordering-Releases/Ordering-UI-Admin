"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsBusyTimes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _BsArrowsAngleExpand = _interopRequireDefault(require("@meronex/icons/bs/BsArrowsAngleExpand"));
var _reactChartjs = require("react-chartjs-2");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _moment = _interopRequireDefault(require("moment"));
var _Shared = require("../../Shared");
var _styles = require("./styles");
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
var AnalyticsBusyTimes = exports.AnalyticsBusyTimes = function AnalyticsBusyTimes(props) {
  var _busyTimesList$data11, _busyTimesList$data12, _busyTimesList$data13, _busyTimesList$data14;
  var filterList = props.filterList,
    busyTimesList = props.busyTimesList;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseNumber = _useUtils2[0].parseNumber;
  var chartRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowPreview = _useState2[0],
    setIsShowPreview = _useState2[1];
  var generateLabels = function generateLabels() {
    var _busyTimesList$data;
    var labels = [];
    if (busyTimesList !== null && busyTimesList !== void 0 && (_busyTimesList$data = busyTimesList.data) !== null && _busyTimesList$data !== void 0 && _busyTimesList$data.busy) {
      var _busyTimesList$data2;
      var _iterator = _createForOfIteratorHelper(busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data2 = busyTimesList.data) === null || _busyTimesList$data2 === void 0 || (_busyTimesList$data2 = _busyTimesList$data2.busy) === null || _busyTimesList$data2 === void 0 ? void 0 : _busyTimesList$data2.sort(function (a, b) {
          return new Date(a.at) - new Date(b.at);
        })),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var label = _step.value;
          var timeConvert = getTimeFormat(label.at, filterList === null || filterList === void 0 ? void 0 : filterList.lapse);
          labels.push(timeConvert);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return labels;
  };
  var getTimeFormat = function getTimeFormat(date, lapse) {
    var newDate;
    switch (lapse) {
      case 'today':
      case 'yesterday':
        newDate = (0, _moment.default)(date).format('HH:00');
        break;
      case 'last_7_days':
      case 'last_30_days':
        newDate = (0, _moment.default)(date).format('MMM DD');
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
            newDate = (0, _moment.default)(date).format('HH:MM:SS');
          } else if (days <= 30) {
            newDate = (0, _moment.default)(date).format('MMM DD');
          } else if (months <= 12) {
            newDate = (0, _moment.default)(date).format('YYYY-MM');
          } else {
            newDate = (0, _moment.default)(date).format('YYYY-MM');
          }
          break;
        }
    }
    return newDate;
  };
  var generateBusyData = function generateBusyData() {
    var _busyTimesList$data3;
    var datasets = [];
    if (busyTimesList !== null && busyTimesList !== void 0 && (_busyTimesList$data3 = busyTimesList.data) !== null && _busyTimesList$data3 !== void 0 && _busyTimesList$data3.busy) {
      var _busyTimesList$data4;
      var _iterator2 = _createForOfIteratorHelper(busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data4 = busyTimesList.data) === null || _busyTimesList$data4 === void 0 || (_busyTimesList$data4 = _busyTimesList$data4.busy) === null || _busyTimesList$data4 === void 0 ? void 0 : _busyTimesList$data4.sort(function (a, b) {
          return new Date(a.at) - new Date(b.at);
        })),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _data = _step2.value;
          var _time = parseNumber(_data.time / 3600, {
            separator: '.'
          });
          datasets.push(_time);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return datasets;
  };
  var generateNotBusyData = function generateNotBusyData() {
    var _busyTimesList$data5;
    var datasets = [];
    if (busyTimesList !== null && busyTimesList !== void 0 && (_busyTimesList$data5 = busyTimesList.data) !== null && _busyTimesList$data5 !== void 0 && (_busyTimesList$data5 = _busyTimesList$data5.not_busy) !== null && _busyTimesList$data5 !== void 0 && _busyTimesList$data5.sort(function (a, b) {
      return new Date(a.at) - new Date(b.at);
    })) {
      var _busyTimesList$data6;
      var _iterator3 = _createForOfIteratorHelper(busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data6 = busyTimesList.data) === null || _busyTimesList$data6 === void 0 ? void 0 : _busyTimesList$data6.not_busy),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _data2 = _step3.value;
          var _time = parseNumber(_data2.time / 3600, {
            separator: '.'
          });
          datasets.push(_time);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return datasets;
  };
  var downloadCSV = function downloadCSV() {
    var _busyTimesList$data7;
    var csv = "".concat(t('TIME', 'Time'), ", ").concat(t('BUSY', 'Busy'), "(h), ").concat(t('NOT_BUSY', 'Not busy'), "(h)\n");
    var _iterator4 = _createForOfIteratorHelper(busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data7 = busyTimesList.data) === null || _busyTimesList$data7 === void 0 ? void 0 : _busyTimesList$data7.busy),
      _step4;
    try {
      var _loop = function _loop() {
        var _busyTimesList$data8;
        var row = _step4.value;
        csv += "".concat(row.at, ",");
        csv += "".concat(parseNumber(row.time / 3600, {
          separator: '.'
        }), ",");
        var notBusy = busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data8 = busyTimesList.data) === null || _busyTimesList$data8 === void 0 ? void 0 : _busyTimesList$data8.not_busy.find(function (item) {
          return item.at === row.at;
        });
        csv += notBusy ? "".concat(parseNumber(notBusy.time / 3600, {
          separator: '.'
        }), ",") : 0;
        csv += '\n';
      };
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var downloadLink = document.createElement('a');
    var blob = new Blob(["\uFEFF", csv]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    var fileSuffix = new Date().getTime();
    downloadLink.download = "busy_times_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  var data = {
    labels: generateLabels(),
    datasets: [{
      label: t('NOT_BUSY', 'Not Busy'),
      data: generateNotBusyData(),
      fill: true,
      borderColor: '#A9E4FE',
      backgroundColor: '#A9E4FE',
      borderWidth: 2,
      borderRadius: {
        topRight: 7.6,
        topLeft: 7.6
      },
      borderSkipped: true
    }, {
      label: t('BUSY', 'Busy'),
      data: generateBusyData(),
      fill: true,
      borderColor: '#52C9FD',
      backgroundColor: '#52C9FD',
      borderWidth: 2,
      borderRadius: {
        topRight: 7.6,
        topLeft: 7.6
      }
    }]
  };
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      },
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        borderRadius: 7.6
      }
    },
    pointRadius: 0
  };
  var previewChart = function previewChart() {
    var _busyTimesList$data9, _busyTimesList$data10;
    if ((busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data9 = busyTimesList.data) === null || _busyTimesList$data9 === void 0 || (_busyTimesList$data9 = _busyTimesList$data9.busy) === null || _busyTimesList$data9 === void 0 ? void 0 : _busyTimesList$data9.length) > 0 || (busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data10 = busyTimesList.data) === null || _busyTimesList$data10 === void 0 || (_busyTimesList$data10 = _busyTimesList$data10.not_busy) === null || _busyTimesList$data10 === void 0 ? void 0 : _busyTimesList$data10.length) > 0) setIsShowPreview(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ChartHeaderContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('BUSY_TIMES', 'Busy Times')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: !((busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data11 = busyTimesList.data) === null || _busyTimesList$data11 === void 0 || (_busyTimesList$data11 = _busyTimesList$data11.busy) === null || _busyTimesList$data11 === void 0 ? void 0 : _busyTimesList$data11.length) > 0 || (busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data12 = busyTimesList.data) === null || _busyTimesList$data12 === void 0 || (_busyTimesList$data12 = _busyTimesList$data12.not_busy) === null || _busyTimesList$data12 === void 0 ? void 0 : _busyTimesList$data12.length) > 0)
  }, /*#__PURE__*/_react.default.createElement(_BsArrowsAngleExpand.default, {
    onClick: previewChart
  }), /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    className: "download-view",
    onClick: downloadCSV
  }))), busyTimesList !== null && busyTimesList !== void 0 && busyTimesList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : (busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data13 = busyTimesList.data) === null || _busyTimesList$data13 === void 0 || (_busyTimesList$data13 = _busyTimesList$data13.busy) === null || _busyTimesList$data13 === void 0 ? void 0 : _busyTimesList$data13.length) > 0 || (busyTimesList === null || busyTimesList === void 0 || (_busyTimesList$data14 = busyTimesList.data) === null || _busyTimesList$data14 === void 0 || (_busyTimesList$data14 = _busyTimesList$data14.not_busy) === null || _busyTimesList$data14 === void 0 ? void 0 : _busyTimesList$data14.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.BarChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options,
    ref: chartRef
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data'))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "80vh",
    padding: "30px",
    title: t('BUSY_TIMES', 'Busy Times'),
    open: isShowPreview,
    onClose: function onClose() {
      return setIsShowPreview(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BarChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options
  }))));
};