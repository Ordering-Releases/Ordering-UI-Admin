"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PurchasedProductsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PurchasedProductsList = exports.PurchasedProductsList = function PurchasedProductsList(props) {
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var productsRef = (0, _react.useRef)(null);
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedProduct = _useState2[0],
    setSelectedProduct = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpenProduct = _useState4[0],
    setIsOpenProduct = _useState4[1];
  var productItems = [{
    key: 'store_app',
    type: 1,
    title: t('ORDERING_STORE_APP', 'Store App _version_').replace('_version_', '2.0'),
    short_description: t('STORE_APP_PURCHASE_SHORT_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole business´s incoming orders on the go by installing a branded app on any mobile device they have.'),
    long_description: t('STORE_APP_PURCHASE_LONG_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole business´s incoming orders on the go by installing a branded app on any mobile device they have.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CartPlusFill, null),
    image: theme.images.apps.storeApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717'
  }, {
    key: 'driver_app',
    type: 1,
    title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
    short_description: t('DRIVER_APP_PURCHASE_SHORT_DESCRIPTION', 'Your fleets best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.'),
    long_description: t('DRIVER_APP_PURCHASE_LONG_DESCRIPTION', 'Your fleets best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.delivery,
      alt: "delivery app icon"
    }),
    image: theme.images.apps.driverApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718'
  }, {
    key: 'pos_app',
    type: 1,
    title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
    short_description: t('POS_APP_PURCHASE_SHORT_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.'),
    long_description: t('POS_APP_PURCHASE_LONG_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.posTerminal,
      alt: "pos app icon"
    }),
    image: theme.images.apps.posApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793'
  }, {
    key: 'kiosk_app',
    type: 1,
    title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
    short_description: t('KIOSK_APP_PURCHASE_SHORT_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.'),
    long_description: t('KIOSK_APP_PURCHASE_LONG_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.poster,
      alt: "kiosk app icon"
    }),
    image: theme.images.apps.kioskApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794'
  }, {
    key: 'call_center',
    type: 2,
    title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
    short_description: t('CALL_CENTER_PURCHASE_SHORT_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.'),
    long_description: t('CALL_CENTER_PURCHASE_LONG_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null),
    image: theme.images.apps.callCenterApp,
    web_url: 'https://apps.tryordering.com/store/marketplace?category=306&product=1792'
  }];
  var handleOpenProductDetails = function handleOpenProductDetails(e, product) {
    var isInvalid = e.target.closest('.purchase-btn');
    if (isInvalid) return;
    setSelectedProduct(product);
    setIsOpenProduct(true);
  };
  var handleCloseProduct = function handleCloseProduct() {
    setIsOpenProduct(false);
    setSelectedProduct(null);
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _productsRef$current;
    var isInvalid = e.target.closest('.purchased-product-row') || !((_productsRef$current = productsRef.current) !== null && _productsRef$current !== void 0 && _productsRef$current.contains(e.target));
    if (isInvalid) return;
    handleCloseProduct();
  };
  (0, _react.useEffect)(function () {
    if (!isOpenProduct) return;
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isOpenProduct]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductsListContainer, {
    ref: productsRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('PURCHASED_PRODUCTS', 'Purchased Products'))), /*#__PURE__*/_react.default.createElement(_styles2.ProductsTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppImageWrapper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, null, t('PRODUCTS', 'Products')))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppDescriptionWarpper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, null, t('DESCRIPTION', 'Description')))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, {
    isCenter: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.apple,
    alt: "apple icon"
  }), /*#__PURE__*/_react.default.createElement("span", null, "iOS"))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, {
    isCenter: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.android,
    alt: "android icon"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Android"))))), productItems.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductTboday, {
      key: product.key,
      className: "purchased-product-row",
      active: product.key === (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.key),
      onClick: function onClick(e) {
        return handleOpenProductDetails(e, product);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.AppImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: product.image,
      alt: ""
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.AppDescriptionWarpper, null, /*#__PURE__*/_react.default.createElement("h3", null, product.title), /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: product.short_description
      }
    }))), product.type === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
      className: "purchase-btn"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open("".concat(product.app_store), '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase now')))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
      className: "purchase-btn"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open("".concat(product.google_play_store), '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase now'))))), product.type === 2 && /*#__PURE__*/_react.default.createElement("td", {
      colSpan: 2
    }, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
      className: "purchase-btn"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open("".concat(product.web_url), '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase now'))))));
  })))), isOpenProduct && selectedProduct && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: isOpenProduct,
    onClose: function onClose() {
      return handleCloseProduct();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductDetailsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, selectedProduct.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: selectedProduct.long_description
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.DownloadLinksContainer, null, selectedProduct.type === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    onClick: function onClick() {
      return window.open("".concat(selectedProduct.app_store), '_blank');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.appStore,
    alt: "App store"
  })), /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    onClick: function onClick() {
      return window.open("".concat(selectedProduct.google_play_store), '_blank');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.googlePlay,
    alt: "Google play"
  }))), selectedProduct.type === 2 && /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    onClick: function onClick() {
      return window.open("".concat(selectedProduct.web_url), '_blank');
    }
  }, selectedProduct.title)))));
};