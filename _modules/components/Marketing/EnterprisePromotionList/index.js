"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var EnterprisePromotionList = exports.EnterprisePromotionList = function EnterprisePromotionList(props) {
  var _promotionListState$p;
  var eventDisabled = props.eventDisabled,
    promotionListState = props.promotionListState,
    paginationProps = props.paginationProps,
    getPromotions = props.getPromotions,
    selectedPromotion = props.selectedPromotion,
    handleOpenDetails = props.handleOpenDetails,
    dataSelected = props.dataSelected,
    handleDragStart = props.handleDragStart,
    handleAllowDrop = props.handleAllowDrop,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd,
    handleEnablePromotion = props.handleEnablePromotion,
    isPromotionBottom = props.isPromotionBottom,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useState = (0, _react.useState)({
      promotions: true,
      promotionType: true,
      how: true,
      dateRange: true,
      actions: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    allowColumns = _useState2[0],
    setAllowColumns = _useState2[1];
  var optionsDefault = [{
    value: 'promotions',
    content: t('PROMOTIONS', 'Promotions')
  }, {
    value: 'promotionType',
    content: t('PROMOTION_TYPE', 'Promotion type')
  }, {
    value: 'how',
    content: t('QUESTION_HOW', 'How?')
  }, {
    value: 'dateRange',
    content: t('DATE_RANGE', 'Date Range')
  }, {
    value: 'actions',
    content: t('ACTIONS', 'Actions')
  }];
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };
  var getPromotionType = function getPromotionType(type) {
    var promotionTypes = [{
      type: 1,
      content: t('MOBILE_FRONT_SUB_TOTAL', 'Subtotal')
    }, {
      type: 2,
      content: t('DELIVERY_FEE', 'Delivery fee')
    }, {
      type: 3,
      content: t('BUSINESS_SERVICE_FEE', 'Service fee')
    }];
    var found = promotionTypes.find(function (item) {
      return item.type === type;
    });
    if (found) {
      return found.content;
    } else {
      return type;
    }
  };
  var handleChangePage = function handleChangePage(page) {
    getPromotions(page, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getPromotions(expectedPage, pageSize);
  };
  var handleClickPromotion = function handleClickPromotion(e, promotion) {
    var inValid = e.target.closest('.enable_control');
    if (inValid) return;
    handleOpenDetails(promotion);
  };
  (0, _react.useEffect)(function () {
    if (promotionListState.loading || promotionListState.promotions.length > 0 || paginationProps.totalPages <= 1) return;
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [promotionListState.promotions, paginationProps]);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.currentPage) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.pageSize) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.totalPages)) return;
    (0, _utils.addQueryToUrl)({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    });
  }, [paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionListContainer, {
    eventDisabled: eventDisabled
  }, /*#__PURE__*/_react.default.createElement(_styles2.PromotionListTable, {
    noFixedHeader: !promotionListState.loading && ((_promotionListState$p = promotionListState.promotions) === null || _promotionListState$p === void 0 ? void 0 : _promotionListState$p.length) < 4
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotions) && /*#__PURE__*/_react.default.createElement("th", {
    className: "promotion"
  }, t('PROMOTIONS', 'Promotions')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotionType) && /*#__PURE__*/_react.default.createElement("th", null, t('PROMOTION_TYPES', 'Promotion types')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.how) && /*#__PURE__*/_react.default.createElement("th", null, t('QUESTION_HOW', 'How?')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateRange) && /*#__PURE__*/_react.default.createElement("th", {
    className: "date_range"
  }, t('DATE_RANGE', 'Date Range')), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), promotionListState !== null && promotionListState !== void 0 && promotionListState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SinglePromotionTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotions) && /*#__PURE__*/_react.default.createElement("td", {
      className: "promotion"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragableContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 10,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 40
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotionType) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.how) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateRange) && /*#__PURE__*/_react.default.createElement("td", {
      className: "date_range"
    }, /*#__PURE__*/_react.default.createElement(_styles2.PromotionDateRanageWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70
    }))))), /*#__PURE__*/_react.default.createElement("td", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.actions) && /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "enable_control"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 30
    })))));
  }) : promotionListState.promotions.sort(function (a, b) {
    return Number(a === null || a === void 0 ? void 0 : a.rank) - Number(b === null || b === void 0 ? void 0 : b.rank);
  }).map(function (promotion, index) {
    var _theme$images$icons;
    return /*#__PURE__*/_react.default.createElement(_styles2.SinglePromotionTbody, {
      key: promotion.id,
      className: (selectedPromotion === null || selectedPromotion === void 0 ? void 0 : selectedPromotion.id) === promotion.id ? 'draggable_promotion active' : 'draggable_promotion',
      onClick: function onClick(e) {
        return handleClickPromotion(e, promotion);
      },
      onDragOver: function onDragOver(e) {
        return handleAllowDrop === null || handleAllowDrop === void 0 ? void 0 : handleAllowDrop(e, promotion.id, index);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, promotion);
      },
      onDragEnd: function onDragEnd(e) {
        return handleDragEnd(e);
      },
      isAccept: dataSelected && dataSelected === (promotion === null || promotion === void 0 ? void 0 : promotion.id),
      isPromotionBottom: isPromotionBottom
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotions) && /*#__PURE__*/_react.default.createElement("td", {
      className: "promotion"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragableContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
      alt: "six dots",
      draggable: true,
      onDragStart: function onDragStart(e) {
        return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, promotion);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, promotion !== null && promotion !== void 0 && promotion.image ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage(promotion === null || promotion === void 0 ? void 0 : promotion.image, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_styles2.DummyImageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null))), /*#__PURE__*/_react.default.createElement("span", null, promotion === null || promotion === void 0 ? void 0 : promotion.name)), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotionType) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionTypeWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, getPromotionType(promotion === null || promotion === void 0 ? void 0 : promotion.target)), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.how) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionHow, null, /*#__PURE__*/_react.default.createElement("span", null, (promotion === null || promotion === void 0 ? void 0 : promotion.type) === 1 ? promotion !== null && promotion !== void 0 && promotion.auto ? t('AUTOMATIC_DISCOUNT', 'Automatic discount') : t('DISCOUNT', 'discount') : promotion !== null && promotion !== void 0 && promotion.auto ? t('AUTOMATIC_COUPON', 'Automatic coupon') : t('COUPON', 'Coupon')), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateRange) && /*#__PURE__*/_react.default.createElement("td", {
      className: "date_range"
    }, /*#__PURE__*/_react.default.createElement(_styles2.PromotionDateRanageWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.start, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    })), /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.end, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    }))), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), /*#__PURE__*/_react.default.createElement("td", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.actions) && /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: promotion === null || promotion === void 0 ? void 0 : promotion.enabled,
      onChange: function onChange(enabled) {
        return handleEnablePromotion(promotion.id, enabled);
      }
    })))));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.PromotionListBottom, {
    eventDisabled: eventDisabled
  }, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenDetails();
    }
  }, t('ADD_NEW_PROMOTION', 'Add new promotion')), (promotionListState === null || promotionListState === void 0 ? void 0 : promotionListState.promotions.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage,
    totalPages: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize
  }))));
};