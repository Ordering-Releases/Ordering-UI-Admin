"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GiftCards = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _GiftCardDetail = require("../GiftCardDetail");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import { Switch } from '../../../styles'
var GiftCardsUI = function GiftCardsUI(props) {
  var _platformProductsList;
  var platformProductsListState = props.platformProductsListState,
    handleParentSidebarMove = props.handleParentSidebarMove,
    handleSuccessDeleteProduct = props.handleSuccessDeleteProduct,
    handleSuccessUpdateProduct = props.handleSuccessUpdateProduct,
    handleSuccessAddProduct = props.handleSuccessAddProduct;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parsePrice = _useUtils2$.parsePrice;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    extraOpen = _useState4[0],
    setExtraOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedProduct = _useState6[0],
    setSelectedProduct = _useState6[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleOpenDetail = function handleOpenDetail(product, isInitialRender) {
    setSelectedProduct(product);
    setExtraOpen(true);
    if (width >= 1100) {
      handleParentSidebarMove(550);
    }
    if (product && !isInitialRender) {
      var id = query.get('id');
      history.replace("".concat(location.pathname, "?id=").concat(id, "&product=").concat(product.id));
    }
  };
  var handleGiftDetail = function handleGiftDetail() {
    setExtraOpen(false);
    setSelectedProduct(null);
    handleParentSidebarMove(0);
    var id = query.get('id');
    history.replace("".concat(location.pathname, "?id=").concat(id));
  };
  (0, _react.useEffect)(function () {
    if (width < 1100) {
      handleParentSidebarMove(0);
    } else {
      if (extraOpen) handleParentSidebarMove(550);
    }
  }, [width, extraOpen]);
  (0, _react.useEffect)(function () {
    if (platformProductsListState.loading) return;
    var productId = query.get('product');
    if (productId) {
      var initProduct = platformProductsListState === null || platformProductsListState === void 0 ? void 0 : platformProductsListState.products.find(function (product) {
        return product.id === Number(productId);
      });
      if (initProduct) {
        handleOpenDetail(initProduct, true);
      }
    }
  }, [platformProductsListState.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('GIFT_CARD', 'Gift Card'))), /*#__PURE__*/_react.default.createElement(_styles.RequireDescription, null, /*#__PURE__*/_react.default.createElement("b", null, t('', 'Stripe activation is required.')), " ", /*#__PURE__*/_react.default.createElement("i", null, t('', 'Compatible only with Wallet.'))), /*#__PURE__*/_react.default.createElement(_styles.ProductContainer, null, platformProductsListState !== null && platformProductsListState !== void 0 && platformProductsListState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      className: "d-flex h-100"
    })), /*#__PURE__*/_react.default.createElement(_styles.ProductName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (platformProductsListState === null || platformProductsListState === void 0 || (_platformProductsList = platformProductsListState.products) === null || _platformProductsList === void 0 ? void 0 : _platformProductsList.length) > 0 ? platformProductsListState === null || platformProductsListState === void 0 ? void 0 : platformProductsListState.products.map(function (product) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles.ItemContainer, {
      key: product.id,
      onClick: function onClick() {
        return handleOpenDetail(product);
      },
      active: (product === null || product === void 0 ? void 0 : product.id) === (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.image) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product))
    })), /*#__PURE__*/_react.default.createElement(_styles.ProductName, null, product === null || product === void 0 ? void 0 : product.name)), /*#__PURE__*/_react.default.createElement(_styles.PriceWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product === null || product === void 0 ? void 0 : product.price)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)));
  }) : /*#__PURE__*/_react.default.createElement(_styles.NotFoundSourceWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, null)))), /*#__PURE__*/_react.default.createElement(_styles.BottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenDetail({});
    }
  }, t('ADD_NEW_GIFT_CARD', 'Add new gift card'))), extraOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1100 ? /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: extraOpen,
    defaultSideBarWidth: 550,
    sidebarId: "loyaltyLevel",
    onClose: handleGiftDetail
  }, /*#__PURE__*/_react.default.createElement(_GiftCardDetail.GiftCardDetail, {
    product: selectedProduct,
    handleSuccessDeleteProduct: handleSuccessDeleteProduct,
    handleSuccessUpdateProduct: handleSuccessUpdateProduct,
    handleSuccessAddProduct: handleSuccessAddProduct,
    setSelectedProduct: setSelectedProduct,
    onClose: handleGiftDetail
  })) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    padding: "0px",
    open: extraOpen,
    onClose: handleGiftDetail
  }, /*#__PURE__*/_react.default.createElement(_GiftCardDetail.GiftCardDetail, {
    product: selectedProduct,
    handleSuccessDeleteProduct: handleSuccessDeleteProduct,
    handleSuccessUpdateProduct: handleSuccessUpdateProduct,
    handleSuccessAddProduct: handleSuccessAddProduct,
    setSelectedProduct: setSelectedProduct,
    onClose: handleGiftDetail
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('LEVELS', 'Levels'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var GiftCards = exports.GiftCards = function GiftCards(props) {
  var giftCardsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GiftCardsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.PlatformProductsList, giftCardsProps);
};