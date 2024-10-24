"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _UserDetails = require("../UserDetails");
var _CustomerCashWallet = require("../CustomerCashWallet");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
var _CustomerPointsWallet = require("../CustomerPointsWallet");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
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
var CustomerDetailsUI = function CustomerDetailsUI(props) {
  var _userState$user, _userState$user2, _userState$user3, _userState$user4, _userState$user5, _userState$user6, _userState$user7, _userState$user8, _userState$user9;
  var userState = props.userState,
    handleDeleteUser = props.handleDeleteUser,
    handleParentSidebarMove = props.handleParentSidebarMove,
    handleChangeActiveUser = props.handleChangeActiveUser,
    setSideBarWidth = props.setSideBarWidth,
    userId = props.userId;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var firstRender = (0, _react.useRef)(true);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
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
    isOpenMenu = _useState6[0],
    setIsOpenMenu = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    menuMoveDistance = _useState8[0],
    setMenuMoveDistance = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isExpand = _useState10[0],
    setIsExpand = _useState10[1];
  var customerMenus = [{
    key: 'user_details',
    value: t('USER_DETAILS', 'User details')
  },
  // { key: 'businesses_opened', value: t('BUSINESSES_OPENED', 'Businesses opened') },
  // { key: 'products_opened', value: t('PRODUCTS_OPENED', 'Products opened') },
  {
    key: 'cash_wallet',
    value: t('CASH_WALLET', 'Cash wallet')
  }, {
    key: 'points_wallet',
    value: t('POINTS_WALLET', 'Points wallet')
  }];
  var onDeleteCustomer = function onDeleteCustomer() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_USER', 'Are you sure that you want to delete this user?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteUser();
      }
    });
  };
  var handleClickMenu = function handleClickMenu(key, isInitialRender) {
    setShowOption(key);
    setSideBarWidth(isExpand ? width : 1000);
    handleParentSidebarMove(isExpand ? width / 2 : 500);
    setIsOpenMenu(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        section: key
      });
    }
    firstRender.current = false;
  };
  var handleCloseMenu = function handleCloseMenu() {
    setSideBarWidth(isExpand ? width : 500);
    handleParentSidebarMove(0);
    setShowOption(null);
    setIsOpenMenu(false);
    setMenuMoveDistance(0);
    (0, _utils.removeQueryToUrl)(['section', 'tab']);
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('customer_details');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (firstRender.current) return;
    handleParentSidebarMove(0);
    setIsOpenMenu(false);
    setShowOption(null);
    setSideBarWidth(500);
    (0, _utils.removeQueryToUrl)(['section', 'tab']);
  }, [userId]);
  (0, _react.useEffect)(function () {
    if (userState.loading) return;
    var section = query.get('section');
    if (section) {
      handleClickMenu(section, true);
    }
  }, [userState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.UserName, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  }) : /*#__PURE__*/_react.default.createElement("span", {
    className: "customer-name"
  }, (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.name, " ", (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.lastname), userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50,
    style: {
      margin: '0px 5px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, handleChangeActiveUser && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (userState === null || userState === void 0 || (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.enabled) || false,
    onChange: function onChange(enabled) {
      return handleChangeActiveUser(_objectSpread(_objectSpread({}, userState === null || userState === void 0 ? void 0 : userState.user), {}, {
        enabled: enabled
      }));
    }
  }))), !!((_userState$user4 = userState.user) !== null && _userState$user4 !== void 0 && _userState$user4.phone_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null), t('VERIFIED', 'Verified')), !!((_userState$user5 = userState.user) !== null && _userState$user5 !== void 0 && _userState$user5.email_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null), t('VERIFIED', 'Verified'))), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, width > 576 && !isOpenMenu && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return expandSidebar();
    }
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onDeleteCustomer();
    }
  }, t('DELETE', 'Delete')))))), /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null) : (_userState$user6 = userState.user) !== null && _userState$user6 !== void 0 && _userState$user6.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage((_userState$user7 = userState.user) === null || _userState$user7 === void 0 ? void 0 : _userState$user7.photo, 'w_220,c_limit'),
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null)), /*#__PURE__*/_react.default.createElement(_styles2.MenusContainer, {
    isLoading: userState.loading
  }, customerMenus.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionMenu, {
      key: option.key,
      active: showOption === option.key,
      onClick: function onClick() {
        return handleClickMenu(option.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, option.value), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
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
  }), isOpenMenu && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: isOpenMenu,
    onClose: function onClose() {
      return handleCloseMenu();
    },
    isBorderShow: true,
    defaultSideBarWidth: isExpand ? width / 2 : 500 + menuMoveDistance,
    moveDistance: menuMoveDistance
  }, showOption === 'user_details' && /*#__PURE__*/_react.default.createElement(_styles2.UserDetailsWrapper, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    userId: props.userId,
    user: userState.user,
    setExtraOpen: function setExtraOpen(isOpen) {
      return setMenuMoveDistance(isOpen ? 500 : 0);
    }
  })), showOption === 'cash_wallet' && /*#__PURE__*/_react.default.createElement(_CustomerCashWallet.CustomerCashWallet, {
    userId: (_userState$user8 = userState.user) === null || _userState$user8 === void 0 ? void 0 : _userState$user8.id
  }), showOption === 'points_wallet' && /*#__PURE__*/_react.default.createElement(_CustomerPointsWallet.CustomerPointsWallet, {
    userId: (_userState$user9 = userState.user) === null || _userState$user9 === void 0 ? void 0 : _userState$user9.id,
    user: userState.user
  })));
};
var CustomerDetails = exports.CustomerDetails = function CustomerDetails(props) {
  var customerDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CustomerDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.UserDetails, customerDetailsProps));
};