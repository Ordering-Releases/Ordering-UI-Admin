"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContactList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));
var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _styledComponents = require("styled-components");
var _Orders = require("../../Orders");
var _styles = require("./styles");
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ChatContactListUI = function ChatContactListUI(props) {
  var isDriver = props.isDriver,
    isCustomer = props.isCustomer,
    usersList = props.usersList,
    paginationProps = props.paginationProps,
    paginationDetail = props.paginationDetail,
    getUsers = props.getUsers;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenOrders = _useState2[0],
    setIsOpenOrders = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    openUser = _useState4[0],
    setOpenUser = _useState4[1];
  var handleOpenOrders = function handleOpenOrders(user) {
    setOpenUser(user);
    setIsOpenOrders(true);
  };
  var prevNextPage = function prevNextPage(isNextPage) {
    getUsers && getUsers(false, isNextPage);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.CustomersListConatainer, null, usersList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, usersList.users.map(function (user) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: user.id
      // onClick={(e) => handleClickUser(e, user)}
      ,
      active: (user === null || user === void 0 ? void 0 : user.id) === (openUser === null || openUser === void 0 ? void 0 : openUser.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((user === null || user === void 0 ? void 0 : user.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver), 'h_200,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement(_styles.AssignedOrdersCount, {
      className: "driver_orders",
      disabled: isDriver && (!(user !== null && user !== void 0 && user.assigned_orders_count) || (user === null || user === void 0 ? void 0 : user.assigned_orders_count) === 0),
      onClick: function onClick() {
        return handleOpenOrders(user);
      }
    }, isDriver && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, user === null || user === void 0 ? void 0 : user.assigned_orders_count), " ", t('ORDERS', 'Orders')))));
  }))), (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperPageState, null, "".concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.from, " - ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.to, " of ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) === 1 || usersList.loading,
    onClick: function onClick() {
      return prevNextPage(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: usersList.loading || (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) || (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === 1,
    onClick: function onClick() {
      return prevNextPage(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null))), isOpenOrders && openUser && /*#__PURE__*/_react.default.createElement(_Orders.OrdersLateralBar, {
    open: isOpenOrders,
    isDriver: isDriver,
    isCustomer: isCustomer,
    user: openUser,
    onClose: function onClose() {
      return setIsOpenOrders(false);
    }
  }));
};
var ChatContactList = exports.ChatContactList = function ChatContactList(props) {
  var customersControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ChatContactListUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    defaultUserTypesSelected: props.isDriver ? [4] : [3],
    propsToFetch: ['name', 'lastname', 'photo', 'assigned_orders_count']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.UsersList, customersControlProps);
};