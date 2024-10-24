"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentGateway = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _SettingsDetail = require("../SettingsDetail");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("./styles");
var _BacCredomatic = require("../BacCredomatic");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PaymentGatewayUI = function PaymentGatewayUI(props) {
  var _categoryList$categor;
  var categoryList = props.categoryList,
    showOption = props.showOption,
    setShowOption = props.setShowOption,
    handleCloseSettings = props.handleCloseSettings,
    handleOpenBasicSetting = props.handleOpenBasicSetting;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdminExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var allowOptions = ['stripe', 'stripe_connect'];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCategory = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showDetail = _useState4[0],
    setShowDetail = _useState4[1];
  var handleBackRedirect = function handleBackRedirect() {
    setShowDetail(false);
    setSelectedCategory(null);
    history.replace("".concat(location.pathname));
  };
  var onBasicSettingsRedirect = function onBasicSettingsRedirect(_ref) {
    var category = _ref.category;
    if (!category) {
      return events.emit('go_to_page', {
        page: 'integrations',
        replace: true
      });
    }
    if (category) {
      events.emit('go_to_page', {
        page: 'integrations',
        search: "?category=".concat(category),
        replace: true
      });
    }
  };
  var handleOpenSetting = function handleOpenSetting(category, initialRender) {
    setSelectedCategory(category);
    setShowOption('payment-gateway');
    setShowDetail(true);
    if (!initialRender) {
      history.replace("".concat(location.pathname, "?category=").concat(category === null || category === void 0 ? void 0 : category.id));
    }
  };
  (0, _react.useEffect)(function () {
    if (categoryList.loading) return;
    var categoryId = query.get('category');
    if (categoryId) {
      var categorySelected = categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories.find(function (item) {
        return (item === null || item === void 0 ? void 0 : item.id) === parseInt(categoryId);
      });
      if (categorySelected) {
        handleOpenSetting(categorySelected, true);
      }
    }
  }, [categoryList.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.CategorySection, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_GETWAYS', 'Payment Gateways')), !(categoryList !== null && categoryList !== void 0 && categoryList.loading) && /*#__PURE__*/_react.default.createElement(_styles.SettingList, null, categoryList === null || categoryList === void 0 || (_categoryList$categor = categoryList.categories) === null || _categoryList$categor === void 0 ? void 0 : _categoryList$categor.filter(function (item) {
    return allowOptions.includes(item.key);
  }).map(function (setting) {
    return /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
      key: setting === null || setting === void 0 ? void 0 : setting.id,
      onClick: function onClick() {
        return handleOpenSetting(setting);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null)), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, setting === null || setting === void 0 ? void 0 : setting.name), /*#__PURE__*/_react.default.createElement("p", null, setting === null || setting === void 0 ? void 0 : setting.description)));
  }), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenBasicSetting('bac_credomatic');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null)), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('BAC_CREDOMATIC', 'BAC Credomatic')), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('BAC_CREDOMATIC_DESCRIPTION', 'Accept payments in Central America')
    }
  })))), (categoryList === null || categoryList === void 0 ? void 0 : categoryList.loading) && /*#__PURE__*/_react.default.createElement(_styles.SettingList, null, _toConsumableArray(Array(2).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 24,
      height: 24
    })), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 18,
      width: 120
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 13,
      count: 2
    }))));
  })), showDetail && showOption === 'payment-gateway' && /*#__PURE__*/_react.default.createElement(_SettingsDetail.SettingsDetail, _extends({}, props, {
    open: showDetail,
    category: selectedCategory,
    onClose: handleBackRedirect,
    onBasicSettingsRedirect: onBasicSettingsRedirect
  })), showOption === 'bac_credomatic' && /*#__PURE__*/_react.default.createElement(_BacCredomatic.BacCredomatic, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }));
};
var PaymentGateway = exports.PaymentGateway = function PaymentGateway(props) {
  var paymentGatewayProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentGatewayUI,
    settingsType: 'key_basic'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.Settings, paymentGatewayProps);
};