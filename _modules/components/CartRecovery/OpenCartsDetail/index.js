"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartsDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _ProductItemAccordion = require("../../Orders/ProductItemAccordion");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _OpenCartBill = require("../OpenCartBill");
var _OpenCartsContactInformation = require("../OpenCartsContactInformation");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles2 = require("./styles");
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
var OpenCartsDetailUI = function OpenCartsDetailUI(props) {
  var _cartState$cart, _cartState$cart2, _cartState$cart3, _cartState$cart4, _cartState$cart5;
  var isSelectedOrders = props.isSelectedOrders,
    open = props.open,
    handleBackRedirect = props.handleBackRedirect,
    cartState = props.cartState,
    handleDeleteCart = props.handleDeleteCart;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isExpand = _useState4[0],
    setIsExpand = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    if (!value) {
      props.onClose();
    }
  };
  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('cartDetails').style.width = '100vw';
      } else {
        document.getElementById('cartDetails').style.width = '500px';
      }
    }
  };
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose();
    }
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('cartDetails');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  var onDeleteCart = function onDeleteCart(cart) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CART', 'Are you sure that you want to delete this cart?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteCart(cart);
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isSelectedOrders: isSelectedOrders,
    id: "cartDetails"
  }, cartState !== null && cartState !== void 0 && cartState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 200,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    count: 2,
    style: {
      marginBottom: '15px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25,
    width: 150,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    count: 5,
    style: {
      marginBottom: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30,
    style: {
      marginTop: '10px'
    }
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (cartState === null || cartState === void 0 ? void 0 : cartState.cart) && Object.keys(cartState === null || cartState === void 0 ? void 0 : cartState.cart).length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsContent, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderInfoWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, ('ID', 'ID'), " ", cartState === null || cartState === void 0 || (_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.id), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('LAST_UPDATED', 'Last updated'), ":"), (cartState === null || cartState === void 0 || (_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.updated_at) && parseDate(cartState === null || cartState === void 0 || (_cartState$cart3 = cartState.cart) === null || _cartState$cart3 === void 0 ? void 0 : _cartState$cart3.updated_at, {
    outputFormat: 'MM/DD/YY • HH:mm a'
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, width > 576 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onDeleteCart(cartState === null || cartState === void 0 ? void 0 : cartState.cart);
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return props.onClose() && props.onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_OpenCartsContactInformation.OpenCartsContactInformation, {
    cart: cartState === null || cartState === void 0 ? void 0 : cartState.cart
  }), /*#__PURE__*/_react.default.createElement(_styles2.OrderProducts, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDER_DETAILS', 'Order details')), (cartState === null || cartState === void 0 || (_cartState$cart4 = cartState.cart) === null || _cartState$cart4 === void 0 || (_cartState$cart4 = _cartState$cart4.products) === null || _cartState$cart4 === void 0 ? void 0 : _cartState$cart4.length) && (cartState === null || cartState === void 0 || (_cartState$cart5 = cartState.cart) === null || _cartState$cart5 === void 0 ? void 0 : _cartState$cart5.products.map(function (product) {
    var _cartState$cart6;
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product,
      toppingsRemoved: cartState === null || cartState === void 0 || (_cartState$cart6 = cartState.cart) === null || _cartState$cart6 === void 0 || (_cartState$cart6 = _cartState$cart6.toppings_removed) === null || _cartState$cart6 === void 0 ? void 0 : _cartState$cart6[product === null || product === void 0 ? void 0 : product.code]
    });
  }))), /*#__PURE__*/_react.default.createElement(_OpenCartBill.OpenCartBill, {
    cart: cartState === null || cartState === void 0 ? void 0 : cartState.cart
  })))), !(cartState !== null && cartState !== void 0 && cartState.loading) && !(cartState !== null && cartState !== void 0 && cartState.cart) && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('PROFILE_ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleBackRedirect
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var OpenCartsDetail = exports.OpenCartsDetail = function OpenCartsDetail(props) {
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    driversList: props.driversList,
    UIComponent: OpenCartsDetailUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.OpenCartsDetail, orderDetailsProps);
};