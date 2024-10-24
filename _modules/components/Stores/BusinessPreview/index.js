"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPreview = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BsInfoCircle = _interopRequireDefault(require("@meronex/icons/bs/BsInfoCircle"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var BusinessPreview = exports.BusinessPreview = function BusinessPreview(props) {
  var _configs$white_label_, _theme$images, _sessionState$user, _sessionState$user2, _orderState$options, _business$reviews, _business$reviews2, _theme$images2, _theme$images3, _orderState$options2, _business$reviews3, _business$reviews4, _business$categories, _selectedCategory$pro, _business$categories2;
  var business = props.business,
    isMobileView = props.isMobileView;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var _useOrder = (0, _orderingComponentsAdminExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)({
      id: 'all'
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCategory = _useState4[0],
    setSelectedCateogry = _useState4[1];
  var isWhiteLabel = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
  var pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  };
  var ele = document.getElementById('product_mobile_view');
  var types = ['food', 'laundry', 'alcohol', 'groceries'];
  var mouseDownHandler = function mouseDownHandler(e) {
    if (!isMobileView) return;
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', _mouseUpHandler);
  };
  var mouseMoveHandler = function mouseMoveHandler(e) {
    var dx = e.clientX - pos.x;
    var dy = e.clientY - pos.y;
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };
  var _mouseUpHandler = function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', _mouseUpHandler);
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
  };
  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 || (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };
  var convertHoursToMinutes = function convertHoursToMinutes(time) {
    var _useLanguage3 = (0, _orderingComponentsAdminExternal.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];
    if (!time) return '0min';
    var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hour = _time$split2[0],
      minute = _time$split2[1];
    var result = parseInt(hour, 10) * 60 + parseInt(minute, 10);
    return "".concat(result).concat(t('MIN', 'min'));
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isMobileView: isMobileView
  }, !isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.DesktopHeader, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement(_styles2.DesktopBackground, {
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductInfoModalPreview, {
    isMobileView: isMobileView,
    src: theme.images.general.mobileCase
  }, /*#__PURE__*/_react.default.createElement(_styles2.MobileContentMask, {
    isMobileView: isMobileView,
    src: theme.images.general.mobileMask,
    id: "product_mobile_view",
    onMouseDown: mouseDownHandler
  }, !isMobileView && width > 650 && /*#__PURE__*/_react.default.createElement(_styles2.Contentheader, null, !isWhiteLabel && /*#__PURE__*/_react.default.createElement(_styles2.HeaderLogo, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "100px",
    height: "30px",
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.logotype,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles2.HeaderInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.AddressWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), /*#__PURE__*/_react.default.createElement("span", null, "New York")), /*#__PURE__*/_react.default.createElement(_styles2.MomentWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ASAP_ABBREVIATION', 'ASAP'))), /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery')))), /*#__PURE__*/_react.default.createElement(_styles2.CartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("span", null, "0")), /*#__PURE__*/_react.default.createElement(_styles2.UserWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null), /*#__PURE__*/_react.default.createElement("div", null, sessionState !== null && sessionState !== void 0 && (_sessionState$user = sessionState.user) !== null && _sessionState$user !== void 0 && _sessionState$user.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: sessionState === null || sessionState === void 0 || (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.photo
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, null, !isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoContainer, {
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, getBusinessType()), /*#__PURE__*/_react.default.createElement(_styles2.BusinessDetail, null, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")), (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, convertHoursToMinutes(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, convertHoursToMinutes(business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")), /*#__PURE__*/_react.default.createElement("h5", null, parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"), /*#__PURE__*/_react.default.createElement("div", {
    className: "review"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
    className: "start"
  }), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total))), /*#__PURE__*/_react.default.createElement("div", {
    className: "preorder-Reviews"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'Preorder')), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"), ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && /*#__PURE__*/_react.default.createElement("span", null, t('REVIEWS', 'Reviews')))))), /*#__PURE__*/_react.default.createElement(_styles2.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    searchValue: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  }))), isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.MobileHeaderWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, null), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Search, null)), /*#__PURE__*/_react.default.createElement(_styles2.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    id: "container",
    isClosed: !(business !== null && business !== void 0 && business.open),
    isMobileView: isMobileView
  }, !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed')), !isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo), 'h_200,c_limit')
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessMoreDetail, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, null))), isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessLogo, {
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.businessLogo), 'h_200,c_limit')
  })), isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, getBusinessType()), /*#__PURE__*/_react.default.createElement(_styles2.BusinessDetail, null, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")), (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, convertHoursToMinutes(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, convertHoursToMinutes(business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")), /*#__PURE__*/_react.default.createElement("h5", null, parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"), /*#__PURE__*/_react.default.createElement("div", {
    className: "review"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
    className: "start"
  }), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 || (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.total))), /*#__PURE__*/_react.default.createElement("div", {
    className: "preorder-Reviews"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'Preorder')), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"), ((_business$reviews4 = business.reviews) === null || _business$reviews4 === void 0 ? void 0 : _business$reviews4.reviews) && /*#__PURE__*/_react.default.createElement("span", null, t('REVIEWS', 'Reviews')))))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessProductContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessProductListWrapper, {
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement(_styles2.CategoryWrapper, {
    className: "order_status_filter"
  }, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, (business === null || business === void 0 || (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) > 0 && [{
    id: 'all',
    name: t('ALL', 'All')
  }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories)).map(function (category, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: i,
      active: (category === null || category === void 0 ? void 0 : category.id) === (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id),
      onClick: function onClick() {
        return setSelectedCateogry(category);
      }
    }, category === null || category === void 0 ? void 0 : category.name);
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessProductList, null, (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) !== 'all' && /*#__PURE__*/_react.default.createElement(_styles2.ProductsListing, null, selectedCategory === null || selectedCategory === void 0 || (_selectedCategory$pro = selectedCategory.products) === null || _selectedCategory$pro === void 0 ? void 0 : _selectedCategory$pro.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(SingleProductCard, {
      key: product === null || product === void 0 ? void 0 : product.id,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      businessId: business === null || business === void 0 ? void 0 : business.id,
      isMobileView: isMobileView
    });
  })), (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) === 'all' && (business === null || business === void 0 || (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.map(function (category, i) {
    var _category$products, _category$products2;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, (category === null || category === void 0 || (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapAllCategories, {
      id: "category".concat(category === null || category === void 0 ? void 0 : category.id)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "category-title"
    }, (category === null || category === void 0 ? void 0 : category.image) && /*#__PURE__*/_react.default.createElement("img", {
      src: category.image
    }), /*#__PURE__*/_react.default.createElement("h3", null, category === null || category === void 0 ? void 0 : category.name)), /*#__PURE__*/_react.default.createElement(_styles2.ProductsListing, null, category === null || category === void 0 || (_category$products2 = category.products) === null || _category$products2 === void 0 ? void 0 : _category$products2.map(function (product) {
      return /*#__PURE__*/_react.default.createElement(SingleProductCard, {
        key: product === null || product === void 0 ? void 0 : product.id,
        isSoldOut: product.inventoried && !product.quantity,
        businessId: business === null || business === void 0 ? void 0 : business.id,
        product: product,
        isMobileView: isMobileView
      });
    }))));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessCartWrapper, {
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessCartContent, null, /*#__PURE__*/_react.default.createElement(_styles2.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles2.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, "$0.00"), /*#__PURE__*/_react.default.createElement(_styles.Button, null, t('EMPTY_CART', 'Empty cart')))))))), isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.MobileCartViewWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary"
  }, t('VIEW_CART', 'View cart')))))));
};
var SingleProductCard = function SingleProductCard(props) {
  var _orderState$carts, _cart$products, _cart$products2, _theme$images4;
  var product = props.product,
    businessId = props.businessId,
    isSoldOut = props.isSoldOut,
    isMobileView = props.isMobileView;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage5 = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage6 = _slicedToArray(_useLanguage5, 2),
    t = _useLanguage6[1];
  var _useConfig3 = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig4 = _slicedToArray(_useConfig3, 1),
    stateConfig = _useConfig4[0];
  var _useOrder3 = (0, _orderingComponentsAdminExternal.useOrder)(),
    _useOrder4 = _slicedToArray(_useOrder3, 1),
    orderState = _useOrder4[0];
  var _useUtils3 = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils4 = _slicedToArray(_useUtils3, 1),
    _useUtils4$ = _useUtils4[0],
    parsePrice = _useUtils4$.parsePrice,
    optimizeImage = _useUtils4$.optimizeImage;
  var editMode = typeof (product === null || product === void 0 ? void 0 : product.code) !== 'undefined';
  var removeToBalance = editMode ? product === null || product === void 0 ? void 0 : product.quantity : 0;
  var cart = (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(businessId)];
  var productCart = cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.find(function (prod) {
    return prod.id === (product === null || product === void 0 ? void 0 : product.id);
  });
  var totalBalance = ((productCart === null || productCart === void 0 ? void 0 : productCart.quantity) || 0) - removeToBalance;
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  var productBalance = ((cart === null || cart === void 0 || (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.reduce(function (sum, _product) {
    return sum + (product && _product.id === (product === null || product === void 0 ? void 0 : product.id) ? _product.quantity : 0);
  }, 0)) || 0) - removeToBalance;
  var maxCartProductInventory = (product !== null && product !== void 0 && product.inventoried ? product === null || product === void 0 ? void 0 : product.quantity : undefined) - productBalance;
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;
  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);
  return /*#__PURE__*/_react.default.createElement(_styles2.CardContainer, {
    soldOut: isSoldOut || maxProductQuantity <= 0,
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement(_styles2.CardInfo, {
    soldOut: isSoldOut || maxProductQuantity <= 0
  }, /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement(_styles2.PriceWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product === null || product === void 0 ? void 0 : product.price))), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description)), /*#__PURE__*/_react.default.createElement(_styles2.WrapLogo, null, /*#__PURE__*/_react.default.createElement(_styles2.CardLogo, {
    className: "image",
    soldOut: isSoldOut || maxProductQuantity <= 0,
    bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.dummies) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.product), 'h_200,c_limit')
  })), (isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_styles2.SoldOut, null, t('SOLD_OUT', 'SOLD OUT')));
};