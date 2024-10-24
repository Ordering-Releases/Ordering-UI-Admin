"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectProducts = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _Shared = require("../../../Shared");
var _ProductForm = require("../ProductForm");
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
var SelectProducts = exports.SelectProducts = function SelectProducts(props) {
  var _cart$products, _cart$products2;
  var productList = props.productList,
    handeUpdateProductCart = props.handeUpdateProductCart,
    cart = props.cart,
    business = props.business,
    getProducts = props.getProducts;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useOrder = (0, _orderingComponentsAdminExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    removeProduct = _useOrder2[1].removeProduct;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    productsOptions = _useState2[0],
    setProductsOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openProduct = _useState6[0],
    setOpenProduct = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    curProduct = _useState8[0],
    setCurProduct = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedProductCart = _useState10[0],
    setSelectedProductCart = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isCartProduct = _useState12[0],
    setIsCartProduct = _useState12[1];
  var _useState13 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    confirm = _useState14[0],
    setConfirm = _useState14[1];
  var handleSelectProduct = function handleSelectProduct(product) {
    setIsCartProduct(false);
    setSelectedProductCart(null);
    setCurProduct(product);
    setOpenProduct(true);
  };
  var handleEditProduct = function handleEditProduct(product) {
    setIsCartProduct(true);
    setCurProduct(null);
    setSelectedProductCart(product);
    setOpenProduct(true);
  };
  var closeModalProductForm = function closeModalProductForm() {
    setCurProduct(null);
    setOpenProduct(false);
  };
  var handleDeleteClick = function handleDeleteClick(product) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: function handleOnAccept() {
        removeProduct(product, cart);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  (0, _react.useEffect)(function () {
    var _productList$products;
    if (!(productList !== null && productList !== void 0 && (_productList$products = productList.products) !== null && _productList$products !== void 0 && _productList$products.length)) return;
    var el = document.querySelector('.custom-order-content');
    if (el) {
      el.scrollTo({
        top: 350,
        behavior: 'smooth'
      });
    }
  }, [productList === null || productList === void 0 ? void 0 : productList.products]);
  var onChange = function onChange(val) {
    var findProduct = productList === null || productList === void 0 ? void 0 : productList.products.find(function (product) {
      return (product === null || product === void 0 ? void 0 : product.id) === val;
    });
    handleSelectProduct(findProduct);
    setSearchValue('');
  };
  (0, _react.useEffect)(function () {
    var _productsOptions = [];
    if (productList !== null && productList !== void 0 && productList.loading) {
      _productsOptions.push({
        value: null,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('LOADING', 'Loading'), "...")
      });
      setProductsOptions(_productsOptions);
      return;
    }
    if (!(productList !== null && productList !== void 0 && productList.products)) {
      setProductsOptions(_productsOptions);
      return;
    }
    productList.products.filter(function (product) {
      return ((product === null || product === void 0 ? void 0 : product.name) || '').toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }).map(function (product) {
      _productsOptions.push({
        value: product === null || product === void 0 ? void 0 : product.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_50,c_limit'),
          alt: ""
        }), /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.name))
      });
    });
    setProductsOptions(_productsOptions);
  }, [productList, searchValue]);
  (0, _react.useEffect)(function () {
    if (productList !== null && productList !== void 0 && productList.products) {
      var _productList$products2;
      var productsExist = productList === null || productList === void 0 || (_productList$products2 = productList.products) === null || _productList$products2 === void 0 ? void 0 : _productList$products2.filter(function (product) {
        return ((product === null || product === void 0 ? void 0 : product.name) || '').toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      });
      if (productsExist.length <= 3) {
        getProducts(searchValue);
      }
    }
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h3", null, t('WAHT_WANT_TO_BUY', 'What do you want us to buy?')), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    noSelected: true,
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SELECT_PRODUCT', 'Select product')),
    options: productsOptions,
    onChange: onChange,
    optionInnerMaxHeight: "300px",
    isShowSearchBar: true,
    searchValue: searchValue,
    handleChangeSearch: setSearchValue
  })), /*#__PURE__*/_react.default.createElement(_styles2.CartProductsConatiner, null, cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.map(function (product, index) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CartProductsWrapper, {
      key: "".concat(product.id, "_").concat(index)
    }, /*#__PURE__*/_react.default.createElement(_styles2.SelectOption, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, product !== null && product !== void 0 && product.images ? /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_50,c_limit'),
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_BiImage.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, product === null || product === void 0 ? void 0 : product.name)), /*#__PURE__*/_react.default.createElement(_styles2.ProductQuantityActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      disabled: (product === null || product === void 0 ? void 0 : product.quantity) === 1,
      onClick: function onClick() {
        return handeUpdateProductCart(product, false);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.DashCircle, null)), /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "number",
      disabled: true,
      max: product === null || product === void 0 ? void 0 : product.maximum_per_order,
      value: product === null || product === void 0 ? void 0 : product.quantity
    }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      disabled: (product === null || product === void 0 ? void 0 : product.maximum_per_order) === (product === null || product === void 0 ? void 0 : product.quantity),
      onClick: function onClick() {
        return handeUpdateProductCart(product, true);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null))), /*#__PURE__*/_react.default.createElement(_styles2.ProductEditDeleteActions, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      onClick: function onClick() {
        return handleEditProduct(product);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      onClick: function onClick() {
        return handleDeleteClick(product);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, null))));
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "760px",
    open: openProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true,
    disableOverflowX: true
  }, /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    isCartProduct: isCartProduct,
    product: curProduct,
    productCart: selectedProductCart,
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    categoryId: (curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id) || (selectedProductCart === null || selectedProductCart === void 0 ? void 0 : selectedProductCart.category_id),
    productId: (curProduct === null || curProduct === void 0 ? void 0 : curProduct.id) || (selectedProductCart === null || selectedProductCart === void 0 ? void 0 : selectedProductCart.id),
    onSave: function onSave() {
      return setOpenProduct(false);
    },
    productAddedToCartLength: (cart === null || cart === void 0 || (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.reduce(function (productsLength, Cproduct) {
      return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (curProduct === null || curProduct === void 0 ? void 0 : curProduct.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
    }, 0)) || 0
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('PRODUCT', 'Product'),
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