"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDesktopPreview = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _BsDashCircle = _interopRequireDefault(require("@meronex/icons/bs/BsDashCircle"));
var _BsPlusCircle = _interopRequireDefault(require("@meronex/icons/bs/BsPlusCircle"));
var _BsCircleHalf = _interopRequireDefault(require("@meronex/icons/bs/BsCircleHalf"));
var _BsCircleFill = _interopRequireDefault(require("@meronex/icons/bs/BsCircleFill"));
var _FiMinusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiMinusCircle"));
var _FiPlusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiPlusCircle"));
var _styles2 = require("./styles");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_swiper.default.use([_swiper.Navigation, _swiper.Thumbs]);
var ProductDesktopPreview = exports.ProductDesktopPreview = function ProductDesktopPreview(props) {
  var _product$product, _product$product2, _theme$defaultLanguag, _product$ingredients, _product$extras, _product$ingredients2, _product$extras2, _product$ingredients3, _theme$defaultLanguag2, _product$extras3, _productCart$quantity;
  var product = props.product,
    productCart = props.productCart,
    showProductOption = props.showProductOption,
    isMobileView = props.isMobileView;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    thumbsSwiper = _useState2[0],
    setThumbsSwiper = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    gallery = _useState4[0],
    setGallery = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    tabValue = _useState6[0],
    setTabValue = _useState6[1];
  var productContainerRef = (0, _react.useRef)(null);
  var productInfoRef = (0, _react.useRef)(null);
  var isSoldOut = ((_product$product = product.product) === null || _product$product === void 0 ? void 0 : _product$product.inventoried) && ((_product$product2 = product.product) === null || _product$product2 === void 0 ? void 0 : _product$product2.quantity) === 0;
  var getMaxMin = function getMaxMin(option) {
    var maxMin = "(".concat(t('MIN', 'Min'), ": ").concat(option.min, " / ").concat(t('MAX', 'Max'), ": ").concat(option.max, ")");
    if (option.min === 1 && option.max === 1) {
      maxMin = t('REQUIRED', 'Required');
    } else if (option.min === 0 && option.max > 0) {
      maxMin = "(".concat(t('MAX', 'Max'), ": ").concat(option.max, ")");
    } else if (option.min > 0 && option.max === 0) {
      maxMin = "(".concat(t('MIN', 'Min'), ": ").concat(option.min, ")");
    }
    return maxMin;
  };
  (0, _react.useEffect)(function () {
    var _theme$images;
    var imageList = [];
    imageList.push((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product));
    if (product !== null && product !== void 0 && product.gallery) {
      var _iterator = _createForOfIteratorHelper(product === null || product === void 0 ? void 0 : product.gallery),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var galleryItem = _step.value;
          imageList.push(galleryItem.file);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setGallery(imageList);
  }, [product]);
  (0, _react.useEffect)(function () {
    if (!tabValue) return;
    if (document.getElementById("".concat(tabValue))) {
      var topOffset = tabValue === 'all' ? 0 : productInfoRef.current.offsetTop + document.getElementById("".concat(tabValue)).offsetTop - 120;
      productContainerRef.current.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  }, [tabValue]);
  var pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  };
  var ele = document.getElementById('product_mobile_view');
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
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isMobileView: isMobileView
  }, !isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.DesktopHeader, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement(_styles2.DesktopBackground, {
    ref: productContainerRef,
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductInfoModalPreview, {
    isMobileView: isMobileView,
    src: theme.images.general.mobileCase
  }, /*#__PURE__*/_react.default.createElement(_styles2.MobileContentMask, {
    isMobileView: isMobileView,
    src: theme.images.general.mobileMask,
    id: "product_mobile_view",
    onMouseDown: mouseDownHandler
  }, !isMobileView && /*#__PURE__*/_react.default.createElement(_styles2.ModalHeader, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.SwiperWrapper, null, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 10,
    navigation: true,
    thumbs: {
      swiper: thumbsSwiper
    },
    className: "mySwiper2"
  }, gallery.map(function (img, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: img,
      alt: ""
    }));
  })), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    onSwiper: setThumbsSwiper,
    spaceBetween: 20,
    slidesPerView: 6,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "product-thumb"
  }, gallery.map(function (img, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: img,
      alt: ""
    }));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ProductInfo, {
    ref: productInfoRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductFormTitle, null, /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name), (product === null || product === void 0 ? void 0 : product.price) && /*#__PURE__*/_react.default.createElement("div", {
    className: "price-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", null, productCart.total && parsePrice(productCart.total)), (product === null || product === void 0 ? void 0 : product.offer_price) && /*#__PURE__*/_react.default.createElement("span", {
    className: "price-discount"
  }, parsePrice(product === null || product === void 0 ? void 0 : product.offer_price))), (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description), (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && /*#__PURE__*/_react.default.createElement(_styles2.SkuContent, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SKU', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SKU) || 'Sku')), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.sku))), /*#__PURE__*/_react.default.createElement(_styles2.Divider, null), /*#__PURE__*/_react.default.createElement(_styles2.ProductEdition, null, ((product === null || product === void 0 || (_product$ingredients = product.ingredients) === null || _product$ingredients === void 0 ? void 0 : _product$ingredients.length) > 0 || (product === null || product === void 0 || (_product$extras = product.extras) === null || _product$extras === void 0 ? void 0 : _product$extras.length) > 0) && /*#__PURE__*/_react.default.createElement(_styles2.ProductTabContainer, {
    id: "all"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Tabs, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    key: "all",
    active: tabValue === 'all' || !tabValue,
    onClick: function onClick() {
      return setTabValue('all');
    }
  }, t('ALL', 'All')), (product === null || product === void 0 || (_product$ingredients2 = product.ingredients) === null || _product$ingredients2 === void 0 ? void 0 : _product$ingredients2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    key: "ingredients",
    active: tabValue === 'ingredients',
    onClick: function onClick() {
      return setTabValue('ingredients');
    }
  }, t('INGREDIENTS', 'ingredients')), (product === null || product === void 0 || (_product$extras2 = product.extras) === null || _product$extras2 === void 0 ? void 0 : _product$extras2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    key: "extra",
    active: tabValue === 'extra',
    onClick: function onClick() {
      return setTabValue('extra');
    }
  }, t('EXTRA', 'Extra')))), /*#__PURE__*/_react.default.createElement("div", {
    id: "ingredients"
  }, (product === null || product === void 0 || (_product$ingredients3 = product.ingredients) === null || _product$ingredients3 === void 0 ? void 0 : _product$ingredients3.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('INGREDIENTS', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.INGREDIENTS) || 'Ingredients')), (product === null || product === void 0 ? void 0 : product.ingredients) && /*#__PURE__*/_react.default.createElement(_styles2.WrapperIngredients, {
    isProductSoldout: isSoldOut
  }, product === null || product === void 0 ? void 0 : product.ingredients.map(function (ingredient) {
    var _productCart$ingredie;
    return /*#__PURE__*/_react.default.createElement(_styles2.IngredientContainer, {
      key: ingredient === null || ingredient === void 0 ? void 0 : ingredient.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      defaultChecked: (_productCart$ingredie = productCart.ingredients["id:".concat(ingredient === null || ingredient === void 0 ? void 0 : ingredient.id)]) === null || _productCart$ingredie === void 0 ? void 0 : _productCart$ingredie.selected
    }), /*#__PURE__*/_react.default.createElement("span", null, ingredient.name));
  }))), (product === null || product === void 0 ? void 0 : product.extras) && /*#__PURE__*/_react.default.createElement("div", {
    id: "extra"
  }, product === null || product === void 0 || (_product$extras3 = product.extras) === null || _product$extras3 === void 0 ? void 0 : _product$extras3.map(function (extra) {
    var _extra$options;
    return extra === null || extra === void 0 || (_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.map(function (option) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: option === null || option === void 0 ? void 0 : option.id
      }, showProductOption(option) && /*#__PURE__*/_react.default.createElement(_styles2.OptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionWrapHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionTitleContainer, null, option.image && option.image !== '-' && /*#__PURE__*/_react.default.createElement(_styles2.OptionThumbnail, {
        src: option.image
      }), /*#__PURE__*/_react.default.createElement(_styles2.OptionTitle, null, /*#__PURE__*/_react.default.createElement("span", null, option.name))), /*#__PURE__*/_react.default.createElement(_styles2.OptionFlag, null, getMaxMin(option))), /*#__PURE__*/_react.default.createElement(_styles2.WrapperSubOption, null, option.suboptions.map(function (suboption) {
        var _productCart$options;
        var currentState = ((_productCart$options = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _productCart$options === void 0 ? void 0 : _productCart$options.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]) || {};
        var price = option !== null && option !== void 0 && option.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && currentState.position !== 'whole' ? suboption === null || suboption === void 0 ? void 0 : suboption.half_price : suboption === null || suboption === void 0 ? void 0 : suboption.price;
        var inputId = "".concat(suboption.id);
        return suboption !== null && suboption !== void 0 && suboption.enabled ? /*#__PURE__*/_react.default.createElement(_styles2.ProductSuboptionContainer, {
          key: suboption === null || suboption === void 0 ? void 0 : suboption.id
        }, /*#__PURE__*/_react.default.createElement(_styles2.IconControl, null, (option === null || option === void 0 ? void 0 : option.min) === 0 && (option === null || option === void 0 ? void 0 : option.max) === 1 || (option === null || option === void 0 ? void 0 : option.max) > 1 ? /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
          id: inputId,
          defaultChecked: currentState === null || currentState === void 0 ? void 0 : currentState.selected
        }) : /*#__PURE__*/_react.default.createElement(_styles.RadioButton, {
          id: inputId
        })), suboption.image && suboption.image !== '-' && /*#__PURE__*/_react.default.createElement(_styles2.SubOptionThumbnail, {
          src: suboption.image
        }), /*#__PURE__*/_react.default.createElement(_styles2.SuoptionText, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
          htmlFor: inputId
        }, suboption === null || suboption === void 0 ? void 0 : suboption.name))), (option === null || option === void 0 ? void 0 : option.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.QuantityControl, null, /*#__PURE__*/_react.default.createElement(_BsDashCircle.default, null), currentState.quantity || 1, /*#__PURE__*/_react.default.createElement(_BsPlusCircle.default, null)), (option === null || option === void 0 ? void 0 : option.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.PositionControl, null, /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
          className: ['reverse', currentState.selected && currentState.position === 'left' ? 'selected' : null].filter(function (classname) {
            return classname;
          }).join(' ')
        }), /*#__PURE__*/_react.default.createElement(_BsCircleFill.default, {
          className: [currentState.selected && currentState.position === 'whole' ? 'selected' : null].filter(function (classname) {
            return classname;
          }).join(' ')
        }), /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
          className: [currentState.selected && currentState.position === 'right' ? 'selected' : null].filter(function (classname) {
            return classname;
          }).join(' ')
        })), /*#__PURE__*/_react.default.createElement(_styles2.SuboptionPrice, null, "+ ", parsePrice(price))) : null;
      }))));
    });
  })), /*#__PURE__*/_react.default.createElement(_styles2.ProductComment, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('COMMENTS', 'COMMENTS')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 3,
    placeholder: t('SPECIAL_COMMENT', 'Special comment'),
    defaultValue: productCart.comment
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ProductActions, {
    isMobileView: isMobileView
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, productCart.total && parsePrice(productCart.total)), productCart && !isSoldOut && /*#__PURE__*/_react.default.createElement("div", {
    className: "incdec-control"
  }, /*#__PURE__*/_react.default.createElement(_FiMinusCircle.default, {
    className: "".concat(productCart.quantity === 1 || isSoldOut ? 'disabled' : '')
  }), /*#__PURE__*/_react.default.createElement("span", null, (_productCart$quantity = productCart.quantity) !== null && _productCart$quantity !== void 0 ? _productCart$quantity : 1), /*#__PURE__*/_react.default.createElement(_FiPlusCircle.default, {
    className: "".concat(isSoldOut ? 'disabled' : '')
  })), productCart && !isSoldOut && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    className: "add"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('ADD', 'Add'))), isSoldOut && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "add ".concat(!(productCart && !isSoldOut) ? 'soldout' : ''),
    color: "primary",
    outline: true
  }, t('SOLD_OUT', 'Sold out'))))))));
};