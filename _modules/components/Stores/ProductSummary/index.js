"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductSummary = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Switch = require("../../../styles/Switch");
var _styles = require("../../../styles");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _ProductDesktopPreview = require("../ProductDesktopPreview");
var _SnoozeComponent = require("../SnoozeComponent");
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
var ProductSummary = exports.ProductSummary = function ProductSummary(props) {
  var _configs$white_label_, _productState$product5, _productState$product6, _productState$product7, _productState$product8, _productState$product9, _productState$product10, _productState$product11, _productState$product12, _productState$product13, _productState$product14, _productState$product15, _productState$product16, _productState$product17, _productState$product18, _productState$product19, _productState$product20, _productState$product21, _productState$product22, _productState$product23, _productState$product24, _productState$product25;
  var actionSidebar = props.actionSidebar,
    showOption = props.showOption,
    handleShowOption = props.handleShowOption,
    handleChangeProductActiveState = props.handleChangeProductActiveState,
    productState = props.productState,
    productCart = props.productCart,
    handleDeleteProduct = props.handleDeleteProduct,
    showProductOption = props.showProductOption,
    isExpand = props.isExpand,
    setIsExpand = props.setIsExpand,
    handleDuplicateProduct = props.handleDuplicateProduct,
    getProduct = props.getProduct,
    formState = props.formState,
    handleChangeFormState = props.handleChangeFormState,
    handleUpdateClick = props.handleUpdateClick;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parsePrice = _useUtils2$.parsePrice;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditMode = _useState2[0],
    setIsEditMode = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isProductPreview = _useState6[0],
    setIsProductPreview = _useState6[1];
  var _useState7 = (0, _react.useState)('desktop'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedView = _useState8[0],
    setSelectedView = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isProductSnooze = _useState10[0],
    setIsProductSnooze = _useState10[1];
  var isWhiteLabel = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
  var productConfigOptions = [{
    key: 'product_details',
    value: t('PRODUCT_DETAILS', 'Product details')
  }, {
    key: 'ingredients',
    value: /*#__PURE__*/_react.default.createElement("span", null, t('INGREDIENTS', 'Ingredients'), " / ", t('PROPERTIES', 'Properties'))
  }, {
    key: 'product_options',
    value: t('PRODUCT_OPTIONS', 'Product options')
  }, {
    key: 'product_images',
    value: t('PRODUCT_IMAGES', 'Product images')
  }, {
    key: 'product_video',
    value: t('PRODUCT_VIDEO', 'Product video')
  }
  // {
  //   key: 'custom_fields',
  //   value: t('CUSTOM_FIELDS', 'Custom fields')
  // },
  // {
  //   key: 'personalization',
  //   value: t('PERSONALIZATION', 'Personalization')
  // }
  ];
  var serviceConfigOptions = [{
    key: 'service_details',
    value: t('SERVICE_DETAILS', 'Service details')
  }, {
    key: 'professionals',
    value: t('PROFESSIONALS', 'Professionals')
  }, {
    key: 'product_options',
    value: t('PRODUCT_OPTIONS', 'Product options')
  }, {
    key: 'product_images',
    value: t('PRODUCT_IMAGES', 'Product images')
  }];
  var handleDeleteClick = function handleDeleteClick() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete this product?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteProduct();
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var getPercentage = function getPercentage() {
    if (productState.product) {
      var _productState$product;
      if (productState !== null && productState !== void 0 && (_productState$product = productState.product) !== null && _productState$product !== void 0 && _productState$product.price) {
        var _productState$product2, _productState$product3, _productState$product4;
        return ((productState === null || productState === void 0 || (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.price) - (productState === null || productState === void 0 || (_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.cost_price)) * 100 / (productState === null || productState === void 0 || (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.price);
      } else {
        return 100;
      }
    } else {
      return 0;
    }
  };
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('product_details');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductDetailsContainer, {
    disabled: productState.loading
  }, /*#__PURE__*/_react.default.createElement(_styles2.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductName, null, productState === null || productState === void 0 || (_productState$product5 = productState.product) === null || _productState$product5 === void 0 ? void 0 : _productState$product5.name), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: (productState === null || productState === void 0 || (_productState$product6 = productState.product) === null || _productState$product6 === void 0 ? void 0 : _productState$product6.enabled) || false,
    onChange: handleChangeProductActiveState
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "snooze",
    color: "lightGreen",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsProductSnooze(true);
    }
  }, t('SNOOZE', 'Snooze'))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return expandSideBar();
    }
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsProductPreview(true);
    }
  }, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: handleDuplicateProduct
  }, t('DUPLICATE', 'Duplicate')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleShowOption('custom_fields');
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), !isWhiteLabel && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleShowOption('personalization');
    }
  }, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteClick();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return isEditMode ? setIsEditMode(false) : actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ProductSummaryContent, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductImageWrapper, null, productState !== null && productState !== void 0 && (_productState$product7 = productState.product) !== null && _productState$product7 !== void 0 && _productState$product7.images ? /*#__PURE__*/_react.default.createElement(_styles2.ProductImage, {
    bgimage: optimizeImage(productState === null || productState === void 0 || (_productState$product8 = productState.product) === null || _productState$product8 === void 0 ? void 0 : _productState$product8.images, 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_BiImage.default, null)), (productState === null || productState === void 0 || (_productState$product9 = productState.product) === null || _productState$product9 === void 0 ? void 0 : _productState$product9.type) !== 'service' && /*#__PURE__*/_react.default.createElement(_styles2.ProductSales, null, /*#__PURE__*/_react.default.createElement(_Shared.ProgressRing, {
    isShowPercent: true,
    percent: getPercentage(),
    size: 70,
    lineWidth: 8,
    progressColor: theme.colors.primary,
    trackColor: theme.colors.borderColor,
    caps: "round",
    children: true,
    spin: false,
    transitionDuration: 200
  }), /*#__PURE__*/_react.default.createElement(_styles2.RolWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice((productState === null || productState === void 0 || (_productState$product10 = productState.product) === null || _productState$product10 === void 0 ? void 0 : _productState$product10.price) - (productState === null || productState === void 0 || (_productState$product11 = productState.product) === null || _productState$product11 === void 0 ? void 0 : _productState$product11.cost_price))), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_SALES_ROI', 'Product sales ROI'))))), /*#__PURE__*/_react.default.createElement(_styles2.ProductDetailsContent, null, (productState === null || productState === void 0 || (_productState$product12 = productState.product) === null || _productState$product12 === void 0 ? void 0 : _productState$product12.type) !== 'service' && /*#__PURE__*/_react.default.createElement(_styles2.ProductDetails, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 || (_productState$product13 = productState.product) === null || _productState$product13 === void 0 ? void 0 : _productState$product13.price)), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_SELLING_PRICE', 'Selling price'))), (productState === null || productState === void 0 || (_productState$product14 = productState.product) === null || _productState$product14 === void 0 ? void 0 : _productState$product14.in_offer) && /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 || (_productState$product15 = productState.product) === null || _productState$product15 === void 0 ? void 0 : _productState$product15.offer_price)), /*#__PURE__*/_react.default.createElement("p", null, t('REGULAR_PRICE', 'Regular Price'))), (productState === null || productState === void 0 || (_productState$product16 = productState.product) === null || _productState$product16 === void 0 ? void 0 : _productState$product16.cost_price) && /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 || (_productState$product17 = productState.product) === null || _productState$product17 === void 0 ? void 0 : _productState$product17.cost_price)), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_COST', 'Product cost'))), (productState === null || productState === void 0 || (_productState$product18 = productState.product) === null || _productState$product18 === void 0 ? void 0 : _productState$product18.cost_offer_price) && /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 || (_productState$product19 = productState.product) === null || _productState$product19 === void 0 ? void 0 : _productState$product19.cost_offer_price)), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_REGULAR_COST', 'Product cost - regular price')))), (productState === null || productState === void 0 || (_productState$product20 = productState.product) === null || _productState$product20 === void 0 ? void 0 : _productState$product20.type) === 'service' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PriceDuration, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(productState === null || productState === void 0 || (_productState$product21 = productState.product) === null || _productState$product21 === void 0 ? void 0 : _productState$product21.price)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"), /*#__PURE__*/_react.default.createElement("span", null, productState === null || productState === void 0 || (_productState$product22 = productState.product) === null || _productState$product22 === void 0 ? void 0 : _productState$product22.duration, "min")), (productState === null || productState === void 0 || (_productState$product23 = productState.product) === null || _productState$product23 === void 0 ? void 0 : _productState$product23.description) && /*#__PURE__*/_react.default.createElement(_styles2.ProductDescription, null, productState === null || productState === void 0 || (_productState$product24 = productState.product) === null || _productState$product24 === void 0 ? void 0 : _productState$product24.description)), /*#__PURE__*/_react.default.createElement(_styles2.ProductConfigsContainer, null, ((productState === null || productState === void 0 || (_productState$product25 = productState.product) === null || _productState$product25 === void 0 ? void 0 : _productState$product25.type) === 'service' ? serviceConfigOptions : productConfigOptions).map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductConfigOption, {
      key: config.key,
      active: showOption === config.key,
      onClick: function onClick() {
        return handleShowOption(config.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, config.value), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    width: "700px",
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "900px",
    open: isProductPreview,
    onClose: function onClose() {
      setIsProductPreview(false);
      setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductPreviewHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "7.6px",
    onClick: function onClick() {
      return getProduct();
    }
  }, t('RELOAD', 'Reload')), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'desktop' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Laptop, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'mobile' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('mobile');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null)))), /*#__PURE__*/_react.default.createElement(_ProductDesktopPreview.ProductDesktopPreview, {
    isMobileView: selectedView === 'mobile',
    product: productState === null || productState === void 0 ? void 0 : productState.product,
    productCart: productCart,
    showProductOption: showProductOption
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "85%",
    maxWidth: "1000px",
    open: isProductSnooze,
    onClose: function onClose() {
      return setIsProductSnooze(false);
    },
    closeOnBackdrop: false
  }, /*#__PURE__*/_react.default.createElement(_SnoozeComponent.SnoozeComponent, {
    dataState: productState === null || productState === void 0 ? void 0 : productState.product,
    handleUpdate: handleUpdateClick,
    handleChangeFormState: handleChangeFormState,
    formState: formState,
    onClose: function onClose() {
      return setIsProductSnooze(false);
    }
  })));
};