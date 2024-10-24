"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wallet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _PointsWalletBusinessDetail = require("../PointsWalletBusinessDetail");
var _PointsWalletBusinessList = require("../PointsWalletBusinessList");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var WalletUI = function WalletUI(props) {
  var handleParentSidebarMove = props.handleParentSidebarMove,
    pointWallet = props.pointWallet,
    handleUpdatePointsWallet = props.handleUpdatePointsWallet,
    moveDistance = props.moveDistance,
    loyaltyPlanList = props.loyaltyPlanList,
    title = props.title;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)('general'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBusinessList = _useState4[0],
    setSelectedBusinessList = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isExpand = _useState6[0],
    setIsExpand = _useState6[1];
  var walletOptionList = [{
    key: 'general',
    name: t('GENERAL', 'General')
  }, {
    key: 'business',
    name: t('BUSINESSES', 'Businesses')
  }];
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('loyaltyWallet');
    if (isExpand) element.style.width = '550px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (selectedOption !== 'business') handleParentSidebarMove(0);
  }, [selectedOption]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setSelectedOption(tab);
    if (!isInitialRender) {
      var id = query.get('id');
      history.replace("".concat(location.pathname, "?id=").concat(id, "&tab=").concat(tab));
    }
  };
  (0, _react.useEffect)(function () {
    if (loyaltyPlanList !== null && loyaltyPlanList !== void 0 && loyaltyPlanList.loading) return;
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick(selectedOption);
    }
  }, [loyaltyPlanList === null || loyaltyPlanList === void 0 ? void 0 : loyaltyPlanList.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, title), width > 576 && moveDistance === 0 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null))), /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, walletOptionList.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleTabClick(option.key);
      }
    }, option.name);
  })), loyaltyPlanList !== null && loyaltyPlanList !== void 0 && loyaltyPlanList.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 20
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 18,
    style: {
      marginBottom: 10
    },
    count: 8
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedOption === 'general' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_PointsWalletBusinessDetail.PointsWalletBusinessDetail, {
    loyaltyPlanList: loyaltyPlanList,
    walletData: pointWallet,
    handleUpdatePointsWallet: handleUpdatePointsWallet,
    selectedBusinessList: selectedBusinessList
  })), selectedOption === 'business' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_PointsWalletBusinessList.PointsWalletBusinessList, _extends({}, props, {
    setSelectedBusinessList: setSelectedBusinessList,
    isCloseBusinessDetails: selectedOption !== 'business'
  })))));
};
var Wallet = exports.Wallet = function Wallet(props) {
  var walletProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: WalletUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.RewardsPrograms, walletProps);
};