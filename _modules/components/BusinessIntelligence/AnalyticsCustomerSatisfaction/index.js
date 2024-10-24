"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsCustomerSatisfaction = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AiOutlineStar = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineStar"));
var _AiFillStar = _interopRequireDefault(require("@meronex/icons/ai/AiFillStar"));
var _styles = require("./styles");
var _GraphLoadingMessage = require("../GraphLoadingMessage");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var Score = function Score(_ref) {
  var star = _ref.star,
    text = _ref.text;
  return /*#__PURE__*/_react.default.createElement(_styles.ScoreDiv, null, /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement(_styles.StarContent, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return star > i ? /*#__PURE__*/_react.default.createElement(_AiFillStar.default, {
      key: i
    }) : /*#__PURE__*/_react.default.createElement(_AiOutlineStar.default, {
      key: i
    });
  })));
};
var AnalyticsCustomerSatisfaction = exports.AnalyticsCustomerSatisfaction = function AnalyticsCustomerSatisfaction(props) {
  var _dataList$data, _dataList$data2, _dataList$data3, _dataList$data4, _dataList$data5, _dataList$data6, _dataList$data7, _dataList$data8, _dataList$data9, _dataList$data10, _dataList$data11, _dataList$data12, _dataList$data13, _dataList$data14, _dataList$data15, _dataList$data16, _dataList$data17, _dataList$data18, _dataList$data19, _dataList$data20;
  var dataList = props.dataList;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var downloadElementRef = (0, _react.useRef)(null);
  var downloadImage = function downloadImage() {
    var csv = "".concat(t('TYPE', 'Type'), ", ").concat(t('RATE', 'Rate'), "\n");
    for (var row in dataList === null || dataList === void 0 ? void 0 : dataList.data) {
      csv += row + ',';
      csv += "".concat(dataList === null || dataList === void 0 ? void 0 : dataList.data[row], ",");
      csv += '\n';
    }
    var link = document.createElement('a');
    var fileSuffix = new Date().getTime();
    link.download = "customer_satification_".concat(fileSuffix, ".csv");
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
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerSatisfactionHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER_SATISFACTION', 'Customer Safisfaction')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: !(dataList !== null && dataList !== void 0 && (_dataList$data = dataList.data) !== null && _dataList$data !== void 0 && _dataList$data.general) && !(dataList !== null && dataList !== void 0 && (_dataList$data2 = dataList.data) !== null && _dataList$data2 !== void 0 && _dataList$data2.quality) && !(dataList !== null && dataList !== void 0 && (_dataList$data3 = dataList.data) !== null && _dataList$data3 !== void 0 && _dataList$data3.delivery) && !(dataList !== null && dataList !== void 0 && (_dataList$data4 = dataList.data) !== null && _dataList$data4 !== void 0 && _dataList$data4.service) && !(dataList !== null && dataList !== void 0 && (_dataList$data5 = dataList.data) !== null && _dataList$data5 !== void 0 && _dataList$data5.package)
  }, /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    onClick: downloadImage
  }))), dataList !== null && dataList !== void 0 && dataList.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainerWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 30
    }));
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : /*#__PURE__*/_react.default.createElement(_styles.CustomerSatisfactionWrapper, null, !(dataList !== null && dataList !== void 0 && (_dataList$data6 = dataList.data) !== null && _dataList$data6 !== void 0 && _dataList$data6.general) && !(dataList !== null && dataList !== void 0 && (_dataList$data7 = dataList.data) !== null && _dataList$data7 !== void 0 && _dataList$data7.quality) && !(dataList !== null && dataList !== void 0 && (_dataList$data8 = dataList.data) !== null && _dataList$data8 !== void 0 && _dataList$data8.delivery) && !(dataList !== null && dataList !== void 0 && (_dataList$data9 = dataList.data) !== null && _dataList$data9 !== void 0 && _dataList$data9.service) && !(dataList !== null && dataList !== void 0 && (_dataList$data10 = dataList.data) !== null && _dataList$data10 !== void 0 && _dataList$data10.package) ? /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')) : /*#__PURE__*/_react.default.createElement(_styles.CustomerSatisfactionContent, {
    ref: downloadElementRef
  }, (dataList === null || dataList === void 0 || (_dataList$data11 = dataList.data) === null || _dataList$data11 === void 0 ? void 0 : _dataList$data11.general) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 || (_dataList$data12 = dataList.data) === null || _dataList$data12 === void 0 ? void 0 : _dataList$data12.general,
    text: t('GENERAL', 'General')
  }), (dataList === null || dataList === void 0 || (_dataList$data13 = dataList.data) === null || _dataList$data13 === void 0 ? void 0 : _dataList$data13.quality) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 || (_dataList$data14 = dataList.data) === null || _dataList$data14 === void 0 ? void 0 : _dataList$data14.quality,
    text: t('QUALITY', 'Quality')
  }), (dataList === null || dataList === void 0 || (_dataList$data15 = dataList.data) === null || _dataList$data15 === void 0 ? void 0 : _dataList$data15.delivery) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 || (_dataList$data16 = dataList.data) === null || _dataList$data16 === void 0 ? void 0 : _dataList$data16.delivery,
    text: t('DELIVERY', 'Delivery')
  }), (dataList === null || dataList === void 0 || (_dataList$data17 = dataList.data) === null || _dataList$data17 === void 0 ? void 0 : _dataList$data17.service) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 || (_dataList$data18 = dataList.data) === null || _dataList$data18 === void 0 ? void 0 : _dataList$data18.service,
    text: t('SERVICE', 'Service')
  }), (dataList === null || dataList === void 0 || (_dataList$data19 = dataList.data) === null || _dataList$data19 === void 0 ? void 0 : _dataList$data19.package) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 || (_dataList$data20 = dataList.data) === null || _dataList$data20 === void 0 ? void 0 : _dataList$data20.package,
    text: t('PACKAGE', 'Package')
  }))));
};