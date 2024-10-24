"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Shared = require("../../Shared");
var _SingleBusinessProduct = require("../SingleBusinessProduct");
var _BusinessSpreadSheet = require("../BusinessSpreadSheet");
var _BusinessProductAddForm = require("../BusinessProductAddForm");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var BusinessProductList = exports.BusinessProductList = function BusinessProductList(props) {
  var _businessState$busine, _businessState$busine2, _categoryState$produc, _categoryState$pagina, _businessState$busine3, _businessState$busine4;
  var productDetailsId = props.productDetailsId,
    categoryState = props.categoryState,
    viewMethod = props.viewMethod,
    businessState = props.businessState,
    searchValue = props.searchValue,
    errorQuantityProducts = props.errorQuantityProducts,
    handleSearchRedirect = props.handleSearchRedirect,
    handleChangeSearch = props.handleChangeSearch,
    handleOpenProductDetails = props.handleOpenProductDetails,
    isParentProductAdd = props.isParentProductAdd,
    handleParentProductAdd = props.handleParentProductAdd,
    allowSpreadColumns = props.allowSpreadColumns,
    getPageProducts = props.getPageProducts,
    productsPerPage = props.productsPerPage,
    setProductsPerPage = props.setProductsPerPage,
    categorySelected = props.categorySelected;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var isLazyLoadProducts = (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAddProduct = _useState2[0],
    setIsAddProduct = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    dataSelected = _useState4[0],
    setDataSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({
      products: true,
      description: true,
      price: true,
      // offer_price: true,
      cost_price: true,
      tax: true,
      fee: true
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    allowColumns = _useState6[0],
    setAllowColumns = _useState6[1];
  var optionsDefault = [{
    value: 'products',
    content: t('PRODUCTS', 'Products')
  }, {
    value: 'description',
    content: t('DESCRIPTION', 'Description')
  }, {
    value: 'price',
    content: t('PRICE', 'Price')
  },
  // {
  //   value: 'offer_price',
  //   content: t('REQULAR_PRICE', 'Regular Price')
  // },
  {
    value: 'cost_price',
    content: t('PRODUCT_COST', 'Product cost')
  }, {
    value: 'tax',
    content: t('TAX', 'Tax')
  }, {
    value: 'fee',
    content: t('FEE', 'Fee')
  }];
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };

  // Change page
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];

  // Get current products
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    currentProducts = _useState10[0],
    setCurrentProducts = _useState10[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
    if (isLazyLoadProducts) {
      getPageProducts(true, page, productsPerPage);
    }
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * productsPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setProductsPerPage(pageSize);
    if (isLazyLoadProducts) {
      getPageProducts(true, expectedPage, pageSize);
    }
  };
  (0, _react.useEffect)(function () {
    if (categoryState.loading || isLazyLoadProducts) return;
    var indexOfLastPost = currentPage * productsPerPage;
    var indexOfFirstPost = indexOfLastPost - productsPerPage;
    var _currentProducts = categoryState.products.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentProducts(_currentProducts);
  }, [categoryState, currentPage, productsPerPage, isLazyLoadProducts]);
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
  }, [categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id, isLazyLoadProducts]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ListContent, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessProductListTable, {
    noFixedHeader: !businessState.loading && currentProducts.length <= 4
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.products) && /*#__PURE__*/_react.default.createElement("th", null, t('PRODUCTS', 'Products')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("th", {
    className: "description"
  }, t('DESCRIPTION', 'Description')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("th", {
    className: "price"
  }, t('PRICE', 'Price')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.offer_price) && /*#__PURE__*/_react.default.createElement("th", {
    className: "regular-price"
  }, t('REGULAR_PRICE', 'Regular Price')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.cost_price) && /*#__PURE__*/_react.default.createElement("th", {
    className: "regular-price"
  }, t('PRODUCT_COST', 'Product cost')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.tax) && /*#__PURE__*/_react.default.createElement("th", {
    className: "tax"
  }, t('TAX', 'Tax')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.fee) && /*#__PURE__*/_react.default.createElement("th", {
    className: "fee"
  }, t('FEE', 'Fee')), /*#__PURE__*/_react.default.createElement("th", {
    className: "more"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), categoryState.loading || businessState.loading ? _toConsumableArray(Array(30).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isLazyLoadProducts ? categoryState.products : currentProducts).sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (product, i) {
    var _categorySelected$sub;
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, _extends({}, props, {
      key: "".concat(product === null || product === void 0 ? void 0 : product.id, "_").concat(i),
      productDetailsId: productDetailsId,
      product: product,
      allowColumns: allowColumns,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
      handleOpenProductDetails: handleOpenProductDetails,
      dataSelected: dataSelected,
      setDataSelected: setDataSelected,
      category: categoryState,
      isLastProduct: currentProducts.length - 1 === i,
      hasSubcategories: categorySelected === null || categorySelected === void 0 || (_categorySelected$sub = categorySelected.subcategories) === null || _categorySelected$sub === void 0 ? void 0 : _categorySelected$sub.some(function (subcategory) {
        var _subcategory$products;
        return (subcategory === null || subcategory === void 0 || (_subcategory$products = subcategory.products) === null || _subcategory$products === void 0 ? void 0 : _subcategory$products.length) > 0;
      })
    }));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ProductListBottom, null, !businessState.loading && (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 || (_businessState$busine2 = _businessState$busine2.categories) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.length) > 0 && categorySelected && /*#__PURE__*/_react.default.createElement(_styles2.AddProductBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleParentProductAdd(true);
    }
  }, t('ADD_NEW_PRODUCT', 'Add new product'))), !businessState.loading && (categoryState === null || categoryState === void 0 || (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: isLazyLoadProducts ? categoryState === null || categoryState === void 0 ? void 0 : categoryState.pagination.currentPage : currentPage,
    totalPages: isLazyLoadProducts ? Math.ceil((categoryState === null || categoryState === void 0 || (_categoryState$pagina = categoryState.pagination) === null || _categoryState$pagina === void 0 ? void 0 : _categoryState$pagina.totalItems) / productsPerPage) : Math.ceil(categoryState.products.length / productsPerPage),
    handleChangePage: handleChangePage,
    defaultPageSize: productsPerPage,
    handleChangePageSize: handleChangePageSize
  })), !businessState.loading && (businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 || (_businessState$busine3 = _businessState$busine3.categories) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNotFound, null, t('CREATE_CATEGORY_BEFORE_PRODUCT', 'Please create a category before adding your products.')), !businessState.loading && (businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 || (_businessState$busine4 = _businessState$busine4.categories) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.length) > 0 && !categorySelected && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNotFound, null, t('SELECT_CATEGORY_BEFORE_PRODUCT', 'Please select a category before adding your products.'))), viewMethod === 'spreedsheet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductListSpreadContainer, null, categoryState.loading || businessState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessProductListTable, null, _toConsumableArray(Array(15).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  })) : /*#__PURE__*/_react.default.createElement(_BusinessSpreadSheet.BusinessSpreadSheet, _extends({}, props, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    allowSpreadColumns: allowSpreadColumns
  }))), !categoryState.loading && !businessState.loading && categoryState.products.length === 0 && !(searchValue && errorQuantityProducts || !searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.'),
    btnTitle: !searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters'),
    onClickButton: function onClickButton() {
      return !searchValue ? handleSearchRedirect() : handleChangeSearch('');
    }
  }))), (isAddProduct || isParentProductAdd) && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "productAddForm",
    open: isAddProduct || isParentProductAdd,
    onClose: function onClose() {
      setIsAddProduct(false);
      handleParentProductAdd && handleParentProductAdd(false);
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductAddForm.BusinessProductAddForm, _extends({}, props, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsAddProduct: setIsAddProduct
  }))));
};