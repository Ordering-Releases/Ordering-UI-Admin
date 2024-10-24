"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryZoneDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BusinessDeliveryZoneInformation = require("../BusinessDeliveryZoneInformation");
var _BusinessDeliveryZoneShare = require("../BusinessDeliveryZoneShare");
var _SnoozeComponent = require("../SnoozeComponent");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
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
var BusinessDeliveryZoneDetailsUI = function BusinessDeliveryZoneDetailsUI(props) {
  var _zoneState$zone;
  var business = props.business,
    businessZones = props.businessZones,
    zoneState = props.zoneState,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleUpdateBusinessDeliveryZone = props.handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone = props.handleAddBusinessDeliveryZone,
    handleDeleteBusinessDeliveryZone = props.handleDeleteBusinessDeliveryZone,
    kmlData = props.kmlData,
    handleUploadKmlFiles = props.handleUploadKmlFiles,
    handleSuccessUpdate = props.handleSuccessUpdate;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isDeliveryZoneSnooze = _useState4[0],
    setIsDeliveryZoneSnooze = _useState4[1];
  var _useState5 = (0, _react.useState)('information'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedMenuOption = _useState6[0],
    setSelectedMenuOption = _useState6[1];
  var tabs = [{
    key: 'information',
    content: t('INFORMATION', 'Information')
  }, {
    key: 'share_with',
    content: t('SHARE_WITH', 'Share with')
  }
  // { key: 'channels', content: t('CHANNELS', 'Channels') },
  ];
  var onClickDelete = function onClickDelete() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DELIVERYZONE', 'Are you sure that you want to delete this delivery zone?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteBusinessDeliveryZone();
      }
    });
  };
  var handleTabClick = function handleTabClick(zoneTab, isInitialRender) {
    setSelectedMenuOption(zoneTab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        zone_tab: zoneTab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var zoneTab = query.get('zone_tab');
    if (zoneTab) {
      handleTabClick(zoneTab, true);
    } else {
      handleTabClick('information');
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, zoneState !== null && zoneState !== void 0 && zoneState.zone ? zoneState === null || zoneState === void 0 || (_zoneState$zone = zoneState.zone) === null || _zoneState$zone === void 0 ? void 0 : _zoneState$zone.name : t('ZONE_DELIVERY_SETTINGS', 'Zone delivery settings')), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "snooze",
    color: "lightGreen",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsDeliveryZoneSnooze(true);
    }
  }, t('SNOOZE', 'Snooze')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDelete();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles2.TabContainer, null, tabs.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: tab.key,
      active: selectedMenuOption === tab.key,
      onClick: function onClick() {
        return handleTabClick(tab.key);
      }
    }, tab.content);
  })), selectedMenuOption === 'information' && /*#__PURE__*/_react.default.createElement(_BusinessDeliveryZoneInformation.BusinessDeliveryZoneInformation, {
    business: business,
    zone: zoneState.zone,
    businessZones: businessZones,
    formState: formState,
    handleChangeInput: handleChangeInput,
    handleChangeFormState: handleChangeFormState,
    handleUpdateBusinessDeliveryZone: handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone: handleAddBusinessDeliveryZone,
    kmlData: kmlData,
    handleUploadKmlFiles: handleUploadKmlFiles
  }), selectedMenuOption === 'share_with' && /*#__PURE__*/_react.default.createElement(_BusinessDeliveryZoneShare.BusinessDeliveryZoneShare, {
    business: business,
    zone: zoneState.zone,
    handleSuccessUpdate: handleSuccessUpdate
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "85%",
    maxWidth: "1000px",
    open: isDeliveryZoneSnooze,
    onClose: function onClose() {
      return setIsDeliveryZoneSnooze(false);
    },
    closeOnBackdrop: false
  }, /*#__PURE__*/_react.default.createElement(_SnoozeComponent.SnoozeComponent, {
    dataState: zoneState === null || zoneState === void 0 ? void 0 : zoneState.zone,
    handleUpdate: handleUpdateBusinessDeliveryZone,
    handleChangeFormState: handleChangeFormState,
    formState: formState,
    onClose: function onClose() {
      return setIsDeliveryZoneSnooze(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }));
};
var BusinessDeliveryZoneDetails = exports.BusinessDeliveryZoneDetails = function BusinessDeliveryZoneDetails(props) {
  var businessDeliveryZoneProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessDeliveryZoneDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessDeliveryZone, businessDeliveryZoneProps);
};