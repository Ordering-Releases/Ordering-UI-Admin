"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalDetailUI = exports.ProfessionalDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Shared = require("../../Shared");
var _UserDetailsMenu = require("../UserDetailsMenu");
var _UserProfileForm = require("../UserProfileForm");
var _ProfessionalSchedule = require("../ProfessionalSchedule");
var _ProfessionalBusinessService = require("../ProfessionalBusinessService");
var _UserMetaFields = require("../UserMetaFields");
var _styles = require("../../../styles");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfessionalDetailUI = function ProfessionalDetailUI(props) {
  var _configs$white_label_, _userState$user, _userState$user2, _userState$user3, _adminUserState$user, _userState$user4, _adminUserState$user2, _userState$user5;
  var userState = props.userState,
    occupations = props.occupations,
    setExtraOpen = props.setExtraOpen,
    handleSuccessUserUpdate = props.handleSuccessUserUpdate,
    handleDeleteUser = props.handleDeleteUser,
    handleChangeActiveUser = props.handleChangeActiveUser,
    handleGoogleCalendarSync = props.handleGoogleCalendarSync,
    actionStatus = props.actionStatus;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    adminUserState = _useSession2[0];
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)('profile'),
    _useState2 = _slicedToArray(_useState, 2),
    currentMenuSelected = _useState2[0],
    setCurrentMenuSelected = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    extraSelected = _useState4[0],
    setExtraSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isExpand = _useState10[0],
    setIsExpand = _useState10[1];
  var isWhiteLabel = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
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
  var handleOpenExtra = function handleOpenExtra(index) {
    if (index) {
      setExtraSelected(index);
      setExtraOpen(true);
    } else {
      setExtraSelected(null);
      setExtraOpen(false);
    }
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('user_lateral_bar');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    setExtraOpen(false);
    setExtraSelected(null);
  }, [currentMenuSelected]);
  (0, _react.useEffect)(function () {
    if (actionStatus.error) {
      setAlertState({
        open: true,
        content: actionStatus.error
      });
    }
  }, [actionStatus.error]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setCurrentMenuSelected(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick(currentMenuSelected);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.UserName, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
  }))), /*#__PURE__*/_react.default.createElement(_styles2.CalendarSyncWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: handleGoogleCalendarSync
  }, /*#__PURE__*/_react.default.createElement("span", null, t('CALENDAR_SYNC', 'Calendar sync')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4Event, null))), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, width > 576 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), ((_adminUserState$user = adminUserState.user) === null || _adminUserState$user === void 0 ? void 0 : _adminUserState$user.id) !== ((_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.id) && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleOpenExtra('custom_fields');
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), !isWhiteLabel && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleOpenExtra('personalization');
    }
  }, t('PERSONALIZATION', 'Personalization')), (adminUserState === null || adminUserState === void 0 || (_adminUserState$user2 = adminUserState.user) === null || _adminUserState$user2 === void 0 ? void 0 : _adminUserState$user2.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onDeleteCustomer();
    }
  }, t('DELETE', 'Delete')))))), /*#__PURE__*/_react.default.createElement(_UserDetailsMenu.UserDetailsMenu, {
    currentMenuSelected: currentMenuSelected,
    handleChangeMenu: handleTabClick,
    isProfessional: true
  }), !(userState !== null && userState !== void 0 && userState.loading) && (userState === null || userState === void 0 ? void 0 : userState.user) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentMenuSelected === 'profile' && /*#__PURE__*/_react.default.createElement(_UserProfileForm.UserProfileForm, {
    user: userState.user,
    occupations: occupations,
    handleSuccessUpdate: handleSuccessUserUpdate,
    isProfessional: true
  }), currentMenuSelected === 'schedule' && /*#__PURE__*/_react.default.createElement(_ProfessionalSchedule.ProfessionalSchedule, {
    user: userState.user,
    handleSuccessUpdate: handleSuccessUserUpdate,
    setExtraOpen: setExtraOpen
  }), currentMenuSelected === 'business_services' && /*#__PURE__*/_react.default.createElement(_ProfessionalBusinessService.ProfessionalBusinessService, {
    user: userState.user,
    handleSuccessUpdate: handleSuccessUserUpdate,
    setExtraOpen: setExtraOpen,
    extraSelected: extraSelected,
    setExtraSelected: setExtraSelected
  })), extraSelected && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "extra_field",
    defaultSideBarWidth: 500,
    isBorderShow: true,
    IconTop: "30px",
    open: extraSelected,
    onClose: function onClose() {
      return handleOpenExtra();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.SideBarWrapper, null, extraSelected === 'custom_fields' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_UserMetaFields.UserMetaFields, {
    userId: (_userState$user5 = userState.user) === null || _userState$user5 === void 0 ? void 0 : _userState$user5.id
  })), extraSelected === 'personalization' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement(_Shared.Personalization, null)))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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
exports.ProfessionalDetailUI = ProfessionalDetailUI;
var ProfessionalDetail = function ProfessionalDetail(props) {
  var userDetailsControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProfessionalDetailUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.UserDetails, userDetailsControlProps));
};
exports.ProfessionalDetail = ProfessionalDetail;