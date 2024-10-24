"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _FiMinusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiMinusCircle"));
var _FiPlusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiPlusCircle"));
var _MdcPlayCircleOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcPlayCircleOutline"));
var _Shared = require("../../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _utils = require("../../../../utils");
var _useWindowSize = require("../../../../hooks/useWindowSize");
var _ProductIngredient = require("../ProductIngredient");
var _ProductOption = require("../ProductOption");
var _ProductOptionSubOption = require("../ProductOptionSubOption");
var _styles = require("../../../../styles");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_swiper.default.use([_swiper.Navigation, _swiper.Thumbs]);
var ProductOptionsUI = function ProductOptionsUI(props) {
  var _configs$unaddressed_, _theme$business_view, _theme$defaultLanguag, _product$tags, _product$ingredients2, _product$extras, _product$ingredients3, _product$ingredients4, _product$ingredients5, _product$extras2, _theme$defaultLanguag2, _theme$defaultLanguag3, _props$afterMidElemen, _props$afterMidCompon, _orderState$options, _orderState$options2, _orderState$options3, _orderState$options4, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _error$;
  var editMode = props.editMode,
    isSoldOut = props.isSoldOut,
    productObject = props.productObject,
    productCart = props.productCart,
    increment = props.increment,
    decrement = props.decrement,
    handleChangeProductCartQuantity = props.handleChangeProductCartQuantity,
    showOption = props.showOption,
    maxProductQuantity = props.maxProductQuantity,
    errors = props.errors,
    handleSave = props.handleSave,
    handleChangeIngredientState = props.handleChangeIngredientState,
    handleChangeSuboptionState = props.handleChangeSuboptionState,
    handleChangeCommentState = props.handleChangeCommentState,
    productAddedToCartLength = props.productAddedToCartLength,
    handleFavoriteProduct = props.handleFavoriteProduct,
    actionStatus = props.actionStatus,
    isCustomerMode = props.isCustomerMode;
  var product = productObject.product,
    loading = productObject.loading,
    error = productObject.error;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  // const [{ auth }, { login }] = useSession()
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsAdminExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parsePrice = _useUtils2$.parsePrice;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)('all'),
    _useState2 = _slicedToArray(_useState, 2),
    tabValue = _useState2[0],
    setTabValue = _useState2[1];
  var productContainerRef = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    gallery = _useState4[0],
    setGallery = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    videoGallery = _useState6[0],
    setVideoGallery = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    thumbsSwiper = _useState8[0],
    setThumbsSwiper = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isHaveWeight = _useState10[0],
    setIsHaveWeight = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isScrollAvailable = _useState12[0],
    setIsScrollAvailable = _useState12[1];
  var _useState13 = (0, _react.useState)({
      weight_unit: false,
      pieces: true
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    qtyBy = _useState14[0],
    setQtyBy = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    pricePerWeightUnit = _useState16[0],
    setPricePerWeightUnit = _useState16[1];
  var _useState17 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    alertState = _useState18[0],
    setAlertState = _useState18[1];
  var galleryLength = (gallery === null || gallery === void 0 ? void 0 : gallery.length) + (videoGallery === null || videoGallery === void 0 ? void 0 : videoGallery.length);
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var unaddressedTypes = (configs === null || configs === void 0 || (_configs$unaddressed_ = configs.unaddressed_order_types_allowed) === null || _configs$unaddressed_ === void 0 ? void 0 : _configs$unaddressed_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var hideProductDescription = theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.products) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.product) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.description) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.hidden;
  var handleChangeFavorite = function handleChangeFavorite() {
    handleFavoriteProduct && handleFavoriteProduct(product, !(product !== null && product !== void 0 && product.favorite));
  };
  var handleSaveProduct = function handleSaveProduct() {
    var _Object$values;
    var isErrors = ((_Object$values = Object.values(errors)) === null || _Object$values === void 0 ? void 0 : _Object$values.length) > 0;
    if (!isErrors) {
      handleSave && handleSave();
      return;
    }
    var myElement = document.getElementsByClassName('error')[0];
    var productContainer = document.getElementsByClassName('product-container')[0];
    if (!myElement || !productContainer) {
      return;
    }
    var topPos = myElement.offsetTop - productContainer.offsetTop;
    if (windowSize.width <= 768) {
      var productImage = document.getElementById('product_image');
      topPos = topPos + (myElement.offsetTop < (productImage === null || productImage === void 0 ? void 0 : productImage.clientHeight) ? productImage === null || productImage === void 0 ? void 0 : productImage.clientHeight : 0);
    }
    (0, _utils.scrollTo)(productContainer, topPos, 1250);
  };
  var isError = function isError(id) {
    var classnames = '';
    if (errors["id:".concat(id)]) {
      classnames = 'error';
    }
    if (isSoldOut || maxProductQuantity <= 0) {
      classnames += ' soldout';
    }
    return classnames;
  };
  var handleChangeTabValue = function handleChangeTabValue(value) {
    if (document.getElementById("".concat(value))) {
      var extraHeight = 55;
      var top = document.getElementById("".concat(value)).offsetTop - extraHeight;
      var scrollElement = document.querySelector('.dialog-inner');
      scrollElement.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  };
  var handleSwitchQtyUnit = function handleSwitchQtyUnit(val) {
    setQtyBy(_defineProperty(_defineProperty({}, val, true), !val, false));
  };
  var getOverFlowImage = function getOverFlowImage(url) {
    var keys = url.split('/');
    var _videoId = keys[(keys === null || keys === void 0 ? void 0 : keys.length) - 1];
    var overFlowImg = 'http://img.youtube.com/vi/' + _videoId + '/0.jpg';
    return overFlowImg;
  };
  var onChangeProductCartQuantity = function onChangeProductCartQuantity(quantity) {
    if (quantity > maxProductQuantity) {
      setAlertState({
        open: true,
        content: [t('MAX_QUANTITY', 'The max quantity is _number_').replace('_number_', maxProductQuantity)]
      });
      return;
    }
    handleChangeProductCartQuantity(quantity);
  };
  var scrollDown = function scrollDown() {
    var _Object$values2, _document$getElements;
    var adjustHeight = (windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) > 768 ? 50 : 55;
    var isErrors = ((_Object$values2 = Object.values(errors)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.length) > 0;
    if (!isErrors) {
      return;
    }
    var productContainer = document.getElementsByClassName('popup-dialog')[0];
    var unselectedFirstSubOption = (_document$getElements = document.getElementsByClassName('error')) === null || _document$getElements === void 0 || (_document$getElements = _document$getElements[0]) === null || _document$getElements === void 0 ? void 0 : _document$getElements.parentNode;
    if (unselectedFirstSubOption) {
      var top = unselectedFirstSubOption.offsetTop;
      productContainer.scrollTo({
        top: top - adjustHeight,
        behavior: 'smooth'
      });
    }
  };
  var handleSlideChange = function handleSlideChange() {
    var videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === 'video') {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (isScrollAvailable) {
      setIsScrollAvailable(false);
      scrollDown();
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var scrollElement = document.querySelector('.dialog-inner');
    var handleScroll = function handleScroll() {
      var extraHeight = 60;
      if ((product === null || product === void 0 ? void 0 : product.ingredients.length) > 0 || (product === null || product === void 0 ? void 0 : product.extras.length) > 0) {
        var _product$ingredients;
        var menuList = [];
        if ((product === null || product === void 0 || (_product$ingredients = product.ingredients) === null || _product$ingredients === void 0 ? void 0 : _product$ingredients.length) > 0) {
          menuList.push('ingredients');
        }
        ((product === null || product === void 0 ? void 0 : product.extras.length) > 0 && (product === null || product === void 0 ? void 0 : product.extras) || []).sort(function (a, b) {
          return a.rank - b.rank;
        }).forEach(function (extra) {
          ((extra === null || extra === void 0 ? void 0 : extra.options.length) > 0 && (extra === null || extra === void 0 ? void 0 : extra.options) || []).sort(function (a, b) {
            return a.rank - b.rank;
          }).forEach(function (option) {
            showOption(option) && menuList.push("id_".concat(option === null || option === void 0 ? void 0 : option.id));
          });
        });
        menuList.length && menuList.forEach(function (menu) {
          var elementTop = scrollElement.scrollTop;
          if (document.getElementById(menu)) {
            var topPos = document.getElementById(menu).offsetTop;
            if (Math.abs(elementTop - topPos) < extraHeight) {
              setTabValue(menu);
              var elementLeft = document.getElementById("menu_".concat(menu)).offsetLeft;
              var scrollLeft = document.getElementById('all').scrollLeft;
              if (elementLeft < scrollLeft) {
                document.getElementById('all').scrollTo({
                  left: elementLeft,
                  behavior: 'smooth'
                });
              }
              if (elementLeft < scrollLeft + scrollElement.clientWidth) {
                document.getElementById('all').scrollTo({
                  left: elementLeft - scrollElement.clientWidth / 2,
                  behavior: 'smooth'
                });
              }
            }
          }
        });
      }
    };
    scrollElement && scrollElement.addEventListener('scroll', handleScroll);
    return function () {
      return scrollElement && scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [showOption]);
  (0, _react.useEffect)(function () {
    var _theme$images, _product$gallery;
    var imageList = [];
    var videoList = [];
    imageList.push((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product));
    if (product !== null && product !== void 0 && product.gallery && (product === null || product === void 0 || (_product$gallery = product.gallery) === null || _product$gallery === void 0 ? void 0 : _product$gallery.length) > 0) {
      var _iterator = _createForOfIteratorHelper(product === null || product === void 0 ? void 0 : product.gallery),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var galleryItem = _step.value;
          if (galleryItem !== null && galleryItem !== void 0 && galleryItem.file) {
            imageList.push(galleryItem === null || galleryItem === void 0 ? void 0 : galleryItem.file);
          }
          if (galleryItem !== null && galleryItem !== void 0 && galleryItem.video) {
            var _url = galleryItem === null || galleryItem === void 0 ? void 0 : galleryItem.video.split('/');
            var _videoId = _url[(_url === null || _url === void 0 ? void 0 : _url.length) - 1];
            if (_videoId.includes('watch')) {
              var __url = _videoId.split('=')[1];
              _videoId = __url;
            }
            var embedURL = 'https://www.youtube.com/embed/' + _videoId;
            videoList.push(embedURL);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setGallery(imageList);
    setVideoGallery(videoList);
    if (product !== null && product !== void 0 && product.weight && product !== null && product !== void 0 && product.weight_unit) {
      setIsHaveWeight(true);
      setPricePerWeightUnit((product === null || product === void 0 ? void 0 : product.price) / (product === null || product === void 0 ? void 0 : product.weight));
    }
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ProductContainer, {
    className: "product-container",
    ref: productContainerRef,
    useKioskApp: props.useKioskApp
  }, product && /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.SwiperWrapper, {
    isSoldOut: isSoldOut
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 10,
    navigation: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    parallax: true,
    thumbs: {
      swiper: thumbsSwiper
    },
    className: "mySwiper2",
    onSlideChange: function onSlideChange() {
      return handleSlideChange();
    }
  }, gallery === null || gallery === void 0 ? void 0 : gallery.map(function (img, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: img,
      alt: "",
      className: "active-img"
    }));
  }), videoGallery && (videoGallery === null || videoGallery === void 0 ? void 0 : videoGallery.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, videoGallery === null || videoGallery === void 0 ? void 0 : videoGallery.map(function (video, j) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: j
    }, /*#__PURE__*/_react.default.createElement("iframe", {
      style: {
        border: 'none',
        width: '100%',
        height: '100%'
      },
      src: video
    }));
  }))), galleryLength > 2 && /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    onSwiper: setThumbsSwiper,
    spaceBetween: 20,
    slidesPerView: 5,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      300: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      400: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      550: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      769: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "product-thumb",
    watchOverflow: true,
    observer: true,
    observeParents: true,
    parallax: true
  }, gallery === null || gallery === void 0 ? void 0 : gallery.map(function (img, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: img,
      alt: ""
    }));
  }), videoGallery && (videoGallery === null || videoGallery === void 0 ? void 0 : videoGallery.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, videoGallery === null || videoGallery === void 0 ? void 0 : videoGallery.map(function (video, j) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: j
    }, /*#__PURE__*/_react.default.createElement(_styles2.VideoGalleryWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: getOverFlowImage(video),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement(_MdcPlayCircleOutline.default, null)));
  }))))), loading && !error && /*#__PURE__*/_react.default.createElement(_styles2.SkeletonBlock, {
    width: 90
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 200
  })), !loading && !error && product && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductFormTitle, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductName, null, /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.name)), !isCustomerMode && /*#__PURE__*/_react.default.createElement("span", {
    className: "favorite",
    onClick: function onClick() {
      return handleChangeFavorite();
    }
  }, product !== null && product !== void 0 && product.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))), /*#__PURE__*/_react.default.createElement(_styles2.Properties, null, isHaveWeight ? /*#__PURE__*/_react.default.createElement(_styles2.PriceContent, null, parsePrice(pricePerWeightUnit), " / ", product === null || product === void 0 ? void 0 : product.weight_unit) : /*#__PURE__*/_react.default.createElement(_styles2.PriceContent, null, /*#__PURE__*/_react.default.createElement("p", null, product !== null && product !== void 0 && product.price ? parsePrice(product === null || product === void 0 ? void 0 : product.price) : ''), (product === null || product === void 0 ? void 0 : product.in_offer) && /*#__PURE__*/_react.default.createElement("span", {
    className: "offer-price"
  }, product !== null && product !== void 0 && product.offer_price ? parsePrice(product === null || product === void 0 ? void 0 : product.offer_price) : '')), /*#__PURE__*/_react.default.createElement(_styles2.ProductMeta, null, (product === null || product === void 0 ? void 0 : product.calories) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "calories"
  }, product === null || product === void 0 ? void 0 : product.calories, ' ', "cal"), /*#__PURE__*/_react.default.createElement("span", null, "\xA0\xB7\xA0")), (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && /*#__PURE__*/_react.default.createElement(_styles2.SkuContent, null, /*#__PURE__*/_react.default.createElement("span", null, t('SKU', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SKU) || 'Sku'), "\xA0"), /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.sku)), (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && (product === null || product === void 0 ? void 0 : product.estimated_person) && /*#__PURE__*/_react.default.createElement("span", null, "\xA0\xB7\xA0"), (product === null || product === void 0 ? void 0 : product.estimated_person) && /*#__PURE__*/_react.default.createElement(_styles2.EstimatedPersons, null, /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.estimated_person, "\xA0"), /*#__PURE__*/_react.default.createElement("span", null, t('ESTIMATED_PERSONS', 'persons'))))), (product === null || product === void 0 ? void 0 : product.description) && !hideProductDescription && /*#__PURE__*/_react.default.createElement(_styles2.ProductDescription, null, /*#__PURE__*/_react.default.createElement(_Shared.LinkableText, {
    text: product === null || product === void 0 ? void 0 : product.description
  }))), (product === null || product === void 0 || (_product$tags = product.tags) === null || _product$tags === void 0 ? void 0 : _product$tags.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.ProductTagsListContainer, null, product.tags.map(function (tag) {
    var _theme$images2;
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductTagWrapper, {
      key: tag.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage((tag === null || tag === void 0 ? void 0 : tag.image) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.product), 'h_40,c_limit'),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, tag.name));
  })), /*#__PURE__*/_react.default.createElement(_styles2.Divider, null), /*#__PURE__*/_react.default.createElement(_styles2.ProductEdition, null, ((product === null || product === void 0 || (_product$ingredients2 = product.ingredients) === null || _product$ingredients2 === void 0 ? void 0 : _product$ingredients2.length) > 0 || (product === null || product === void 0 || (_product$extras = product.extras) === null || _product$extras === void 0 ? void 0 : _product$extras.length) > 0) && /*#__PURE__*/_react.default.createElement(_styles2.ProductTabContainer, {
    id: "all"
  }, /*#__PURE__*/_react.default.createElement(_styles.Tabs, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    scrollId: "optionList"
  }, (product === null || product === void 0 || (_product$ingredients3 = product.ingredients) === null || _product$ingredients3 === void 0 ? void 0 : _product$ingredients3.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    key: "ingredients",
    id: "menu_ingredients",
    active: tabValue === 'ingredients',
    onClick: function onClick() {
      return handleChangeTabValue('ingredients');
    },
    borderBottom: true
  }, t('INGREDIENTS', 'ingredients')), product === null || product === void 0 ? void 0 : product.extras.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (extra) {
    var _extra$options;
    return (_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.sort(function (a, b) {
      return a.rank - b.rank;
    }).map(function (option) {
      return showOption(option) && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
        key: option === null || option === void 0 ? void 0 : option.id,
        id: "menu_id_".concat(option === null || option === void 0 ? void 0 : option.id),
        active: tabValue === "id_".concat(option === null || option === void 0 ? void 0 : option.id),
        onClick: function onClick() {
          return handleChangeTabValue("id_".concat(option === null || option === void 0 ? void 0 : option.id));
        },
        borderBottom: true
      }, option === null || option === void 0 ? void 0 : option.name);
    });
  })))), (product === null || product === void 0 || (_product$ingredients4 = product.ingredients) === null || _product$ingredients4 === void 0 ? void 0 : _product$ingredients4.length) > 0 && Object.keys(productCart.ingredients).length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    id: "ingredients"
  }, (product === null || product === void 0 || (_product$ingredients5 = product.ingredients) === null || _product$ingredients5 === void 0 ? void 0 : _product$ingredients5.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('INGREDIENTS', (theme === null || theme === void 0 ? void 0 : theme.defaultLanguages.INGREDIENTS) || 'Ingredients')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperIngredients, {
    isProductSoldout: isSoldOut || maxProductQuantity <= 0
  }, product === null || product === void 0 ? void 0 : product.ingredients.map(function (ingredient) {
    return /*#__PURE__*/_react.default.createElement(_ProductIngredient.ProductIngredient, {
      key: ingredient === null || ingredient === void 0 ? void 0 : ingredient.id,
      ingredient: ingredient,
      state: productCart.ingredients["id:".concat(ingredient === null || ingredient === void 0 ? void 0 : ingredient.id)],
      onChange: handleChangeIngredientState,
      isSoldOut: isSoldOut
    });
  }))), /*#__PURE__*/_react.default.createElement("div", null, product === null || product === void 0 || (_product$extras2 = product.extras) === null || _product$extras2 === void 0 ? void 0 : _product$extras2.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (extra) {
    return extra.options.sort(function (a, b) {
      return a.rank - b.rank;
    }).map(function (option) {
      var currentState = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)] || {};
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: option === null || option === void 0 ? void 0 : option.id
      }, showOption(option) && /*#__PURE__*/_react.default.createElement(_ProductOption.ProductOption, {
        option: option,
        currentState: currentState,
        error: errors["id:".concat(option === null || option === void 0 ? void 0 : option.id)]
      }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperSubOption, {
        className: isError(option === null || option === void 0 ? void 0 : option.id)
      }, option.suboptions.filter(function (suboptions) {
        return suboptions.enabled;
      }).sort(function (a, b) {
        return a.rank - b.rank;
      }).map(function (suboption) {
        var _productCart$options, _productCart$options2;
        var currentState = ((_productCart$options = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _productCart$options === void 0 ? void 0 : _productCart$options.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]) || {};
        var balance = ((_productCart$options2 = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _productCart$options2 === void 0 ? void 0 : _productCart$options2.balance) || 0;
        return /*#__PURE__*/_react.default.createElement(_ProductOptionSubOption.ProductOptionSubOption, {
          key: suboption === null || suboption === void 0 ? void 0 : suboption.id,
          onChange: handleChangeSuboptionState,
          balance: balance,
          option: option,
          suboption: suboption,
          state: currentState,
          isSoldOut: isSoldOut,
          scrollDown: scrollDown,
          setIsScrollAvailable: setIsScrollAvailable
        });
      }))));
    });
  })), !(product !== null && product !== void 0 && product.hide_special_instructions) && /*#__PURE__*/_react.default.createElement(_styles2.ProductComment, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('COMMENTS', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SPECIAL_COMMENT) || 'COMMENTS')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    placeholder: t('SPECIAL_COMMENT', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.SPECIAL_COMMENT) || 'Special comment'),
    defaultValue: productCart.comment,
    onChange: handleChangeCommentState,
    disabled: !(productCart && !isSoldOut && maxProductQuantity)
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  })), /*#__PURE__*/_react.default.createElement(_styles2.ProductActions, {
    isColumn: !((_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && _orderState$options.address_id || unaddressedTypes.includes(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type))
  }, actionStatus !== null && actionStatus !== void 0 && actionStatus.loading || orderState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.LoadingWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    width: 150
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "price-amount-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, /*#__PURE__*/_react.default.createElement("h4", null, productCart.total && parsePrice(productCart.total)), (product === null || product === void 0 ? void 0 : product.minimum_per_order) && (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) + productAddedToCartLength <= (product === null || product === void 0 ? void 0 : product.minimum_per_order) && (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) !== 1 && /*#__PURE__*/_react.default.createElement("span", null, t('MINIMUM_TO_ORDER', 'Minimum _number_ to order').replace('_number_', product === null || product === void 0 ? void 0 : product.minimum_per_order)), (product === null || product === void 0 ? void 0 : product.maximum_per_order) && (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) + productAddedToCartLength >= (product === null || product === void 0 ? void 0 : product.maximum_per_order) && /*#__PURE__*/_react.default.createElement("span", null, t('MAXIMUM_TO_ORDER', 'Max. _number_ to order'.replace('_number_', product === null || product === void 0 ? void 0 : product.maximum_per_order)))), productCart && !isSoldOut && maxProductQuantity > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: isHaveWeight ? 'incdec-control show-weight-unit' : 'incdec-control'
  }, /*#__PURE__*/_react.default.createElement(_FiMinusCircle.default, {
    onClick: decrement,
    className: "".concat(productCart.quantity === 1 || !productCart.quantity || isSoldOut || (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) + productAddedToCartLength <= (product === null || product === void 0 ? void 0 : product.minimum_per_order) ? 'disabled' : '')
  }), (qtyBy === null || qtyBy === void 0 ? void 0 : qtyBy.pieces) && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    className: "qty",
    value: (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) || '',
    onChange: function onChange(e) {
      return onChangeProductCartQuantity(parseInt(e.target.value));
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), (qtyBy === null || qtyBy === void 0 ? void 0 : qtyBy.weight_unit) && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    className: "qty",
    value: (productCart.quantity * (product === null || product === void 0 ? void 0 : product.weight)).toFixed(2)
  }), /*#__PURE__*/_react.default.createElement(_FiPlusCircle.default, {
    onClick: increment,
    className: "".concat(maxProductQuantity <= 0 || (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) + productAddedToCartLength >= maxProductQuantity || (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) + productAddedToCartLength >= (product === null || product === void 0 ? void 0 : product.maximum_per_order) && product !== null && product !== void 0 && product.maximum_per_order || isSoldOut ? 'disabled' : '')
  }), isHaveWeight && /*#__PURE__*/_react.default.createElement(_styles2.WeightUnitSwitch, null, /*#__PURE__*/_react.default.createElement(_styles2.WeightUnitItem, {
    onClick: function onClick() {
      return handleSwitchQtyUnit('pieces');
    },
    active: qtyBy === null || qtyBy === void 0 ? void 0 : qtyBy.pieces
  }, t('PIECES', 'pcs')), /*#__PURE__*/_react.default.createElement(_styles2.WeightUnitItem, {
    onClick: function onClick() {
      return handleSwitchQtyUnit('weight_unit');
    },
    active: qtyBy === null || qtyBy === void 0 ? void 0 : qtyBy.weight_unit
  }, product === null || product === void 0 ? void 0 : product.weight_unit)))), productCart && !isSoldOut && maxProductQuantity > 0 && (((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.address_id) || unaddressedTypes.includes(orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type)) && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    className: "add ".concat(maxProductQuantity === 0 || Object.keys(errors).length > 0 ? 'disabled' : ''),
    color: "primary",
    onClick: function onClick() {
      return handleSaveProduct();
    },
    disabled: orderState.loading || (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) === 0 || (product === null || product === void 0 ? void 0 : product.minimum_per_order) && (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) + productAddedToCartLength < (product === null || product === void 0 ? void 0 : product.minimum_per_order) || (product === null || product === void 0 ? void 0 : product.maximum_per_order) && (productCart === null || productCart === void 0 ? void 0 : productCart.quantity) + productAddedToCartLength > (product === null || product === void 0 ? void 0 : product.maximum_per_order)
  }, orderState.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.LOADING) || 'Loading')) : /*#__PURE__*/_react.default.createElement("span", null, editMode ? t('UPDATE', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.UPDATE) || 'Update') : t('ADD', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.ADD) || 'Add'))), (isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "add ".concat(!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''),
    color: "primary",
    outline: true,
    disabled: isSoldOut || maxProductQuantity <= 0
  }, t('SOLD_OUT', 'Sold out')))))), error && error.length > 0 && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0]
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SEARCH', 'Search'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var ProductForm = exports.ProductForm = function ProductForm(props) {
  var _props$productCart, _props$productCart2, _props$product;
  var productOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    productCart: _objectSpread(_objectSpread({}, props.productCart), {}, {
      quantity: (_props$productCart = props.productCart) !== null && _props$productCart !== void 0 && _props$productCart.code ? (_props$productCart2 = props.productCart) === null || _props$productCart2 === void 0 ? void 0 : _props$productCart2.quantity : (props === null || props === void 0 || (_props$product = props.product) === null || _props$product === void 0 ? void 0 : _props$product.minimum_per_order) || 1
    }),
    UIComponent: ProductOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ProductForm, productOptionsProps);
};
ProductForm.defaultProps = {
  productAddedToCartLength: 0
};