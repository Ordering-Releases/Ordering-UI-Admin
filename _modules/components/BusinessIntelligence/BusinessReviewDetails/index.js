"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessReviewDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessReviewDetailsUI = function BusinessReviewDetailsUI(props) {
  var _businessState$busine, _businessState$busine2, _theme$images;
  var businessState = props.businessState,
    reviewsList = props.reviewsList,
    handleOpenProducts = props.handleOpenProducts,
    handleChangeReviewEnabled = props.handleChangeReviewEnabled;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parseDate = _useUtils2$.parseDate;
  var getReviewPercent = function getReviewPercent(quality) {
    return quality / 5 * 100;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.name), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenProducts(businessState.business);
    }
  }, t('PRODUCT_REVIEW', 'Product review'))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
    bgimage: optimizeImage(((_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_120,c_limit')
  }))), reviewsList !== null && reviewsList !== void 0 && reviewsList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ReviewItemContatiner, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.ReviewItemHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSmall: true,
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 40
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 10
    }))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    }))), /*#__PURE__*/_react.default.createElement(_styles2.Comment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200
    }))));
  }) : reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.map(function (review) {
    var _review$user, _review$user2, _review$user3, _review$user4;
    return /*#__PURE__*/_react.default.createElement(_styles2.ReviewItemContatiner, {
      key: review === null || review === void 0 ? void 0 : review.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.ReviewItemHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSmall: true
    }, review !== null && review !== void 0 && (_review$user = review.user) !== null && _review$user !== void 0 && _review$user.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage(review === null || review === void 0 || (_review$user2 = review.user) === null || _review$user2 === void 0 ? void 0 : _review$user2.photo)
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, review === null || review === void 0 || (_review$user3 = review.user) === null || _review$user3 === void 0 ? void 0 : _review$user3.name, " ", review === null || review === void 0 || (_review$user4 = review.user) === null || _review$user4 === void 0 ? void 0 : _review$user4.lastname), (review === null || review === void 0 ? void 0 : review.created_at) && /*#__PURE__*/_react.default.createElement("p", null, parseDate(review === null || review === void 0 ? void 0 : review.created_at, {
      utc: false
    })), (review === null || review === void 0 ? void 0 : review.order_id) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_ORDER_NO', 'Order No.'), ' '), /*#__PURE__*/_react.default.createElement("span", null, review === null || review === void 0 ? void 0 : review.order_id)))), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: review === null || review === void 0 ? void 0 : review.enabled,
      onChange: function onChange(val) {
        return handleChangeReviewEnabled(review === null || review === void 0 ? void 0 : review.id, val);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewBar, {
      percentage: getReviewPercent(review === null || review === void 0 ? void 0 : review.quality)
    })), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('TERRIBLE', 'Terrible')), /*#__PURE__*/_react.default.createElement("p", null, t('BAD', 'Bad')), /*#__PURE__*/_react.default.createElement("p", null, t('OKAY', 'Okay')), /*#__PURE__*/_react.default.createElement("p", null, t('GOOD', 'Good')), /*#__PURE__*/_react.default.createElement("p", null, t('GREAT', 'Great')))), /*#__PURE__*/_react.default.createElement(_styles2.Comment, null, review === null || review === void 0 ? void 0 : review.comment));
  }), !(reviewsList !== null && reviewsList !== void 0 && reviewsList.loading) && (reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles2.NotReviewed, null, t('ERROR_REVIEW_FIND', 'The review does not exist.'))));
};
var BusinessReviewDetails = exports.BusinessReviewDetails = function BusinessReviewDetails(props) {
  var businessReviewDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessReviewDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessReviews, businessReviewDetailsProps);
};