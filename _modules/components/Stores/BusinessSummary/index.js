"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSummary = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));
var _styledComponents = require("styled-components");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BusinessPreview = require("../BusinessPreview");
var _SnoozeComponent = require("../SnoozeComponent");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
var _utils = require("../../../utils");
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
var BusinessSummary = exports.BusinessSummary = function BusinessSummary(props) {
  var _configs$white_label_, _sessionState$user, _sessionState$user2, _configs$allow_busine, _businessState$busine5, _businessState$busine6, _businessState$busine7, _businessState$busine8, _theme$images, _businessState$busine9;
  var isAdmin = props.isAdmin,
    businessState = props.businessState,
    actionSidebar = props.actionSidebar,
    handleChangeActiveBusiness = props.handleChangeActiveBusiness,
    selectedItem = props.selectedItem,
    handleSelectedItem = props.handleSelectedItem,
    handleDuplicateBusiness = props.handleDuplicateBusiness,
    handleDeleteBusiness = props.handleDeleteBusiness,
    handleSyncEvent = props.handleSyncEvent,
    handleUpdateBusinessClick = props.handleUpdateBusinessClick,
    extraOpen = props.extraOpen,
    spoonityConfig = props.spoonityConfig,
    siteState = props.siteState,
    isExpand = props.isExpand,
    setIsExpand = props.setIsExpand,
    formState = props.formState,
    setFormState = props.setFormState;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useEvent = (0, _orderingComponentsAdminExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponentsAdminExternal.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isBusinessPreview = _useState2[0],
    setIsBusinessPreview = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isBusinessSnooze = _useState4[0],
    setIsBusinessSnooze = _useState4[1];
  var _useState5 = (0, _react.useState)('desktop'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedView = _useState6[0],
    setSelectedView = _useState6[1];
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    confirm = _useState8[0],
    setConfirm = _useState8[1];
  var isEnabledWhiteLabelModule = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
  var isAllowRegisteredBusiness = (sessionState === null || sessionState === void 0 || (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.level) === 0 || (sessionState === null || sessionState === void 0 || (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.level) === 2 && (configs === null || configs === void 0 || (_configs$allow_busine = configs.allow_business_owner_register_business) === null || _configs$allow_busine === void 0 ? void 0 : _configs$allow_busine.value) === '1';
  var projectsForEnableSync = ['dominosordering'];
  var enableSyncFunctions = projectsForEnableSync.includes(ordering.project);
  var handleOpenCategory = function handleOpenCategory() {
    var _businessState$busine;
    events.emit('go_to_page', {
      page: 'store',
      params: {
        store: businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.slug
      }
    });
  };
  var handleOpenSite = function handleOpenSite() {
    var _siteState$site, _siteState$site2, _siteState$site3, _businessState$busine2, _configs$site_url, _configs$site_url2, _businessState$busine3, _businessState$busine4;
    var storeUrl = siteState !== null && siteState !== void 0 && (_siteState$site = siteState.site) !== null && _siteState$site !== void 0 && _siteState$site.domain && (siteState === null || siteState === void 0 || (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.ssl_process_status) === 'ended' ? "https://".concat(siteState === null || siteState === void 0 || (_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3.domain, "/store/").concat(businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.slug) : configs !== null && configs !== void 0 && (_configs$site_url = configs.site_url) !== null && _configs$site_url !== void 0 && _configs$site_url.value ? "".concat((0, _utils.checkSiteUrl)(configs === null || configs === void 0 || (_configs$site_url2 = configs.site_url) === null || _configs$site_url2 === void 0 ? void 0 : _configs$site_url2.value), "store/").concat(businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.slug) : "https://".concat(ordering.project, ".tryordering.com/store/").concat(businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.slug);
    window.open(storeUrl, '_blank');
  };
  var itemsExcluded = spoonityConfig ? ['publishing', 'personalization', 'logs'] : ['publishing', 'spoonity_key', 'personalization', 'logs'];
  var businessConfigs = [{
    key: 'store_details',
    value: t('STORE_DETAILS', 'Store details')
  }, {
    key: 'schedule',
    value: t('SCHEDULE', 'Schedule')
  }, {
    key: 'menu',
    value: t('MENU_V21', 'Menu')
  }, {
    key: 'delivery_pickup_more',
    value: t('DELIVERY_PICKUP_MORE', 'Delivery, pickup & more')
  }, {
    key: 'notifications',
    value: t('NOTIFICATIONS', 'Notifications')
  }, {
    key: 'payment_methods',
    value: t('PAYMENTS_METHODS', 'Payment methods')
  }, {
    key: 'tax_fees',
    value: t('TAX_AND_FEES', 'Tax & fees')
  }, {
    key: 'promotions',
    value: t('PROMOTIONS', 'Promotions')
  }, {
    key: 'preorder',
    value: t('PREORDERS_SETTING', 'Preorders and lead times')
  }, {
    key: 'custom_fields',
    value: t('CUSTOM_FIELDS', 'Custom fields')
  }, {
    key: 'personalization',
    value: t('PERSONALIZATION', 'Personalization')
  }, {
    key: 'ordering_channels',
    value: t('ORDERING_CHANNELS', 'Ordering channels')
  }, {
    key: 'publishing',
    value: t('PUBLISHING', 'Publishing')
  }, {
    key: 'sales_channels',
    value: t('SALES_CHANNELS', 'Sales channels')
  }, {
    key: 'layout',
    value: t('LAYOUT', 'Layout')
  }, {
    key: 'webhooks',
    value: t('WEBHOOKS', 'Webhooks')
  }, {
    key: 'places',
    value: t('PLACES', 'Places')
  }, {
    key: 'spoonity_key',
    value: t('SPOONITY_KEY', 'Sponity key')
  }, {
    key: 'logs',
    value: t('LOGS', 'Logs')
  }];
  var onClickDeleteBusiness = function onClickDeleteBusiness() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_BUSINESS', 'Are you sure that you want to delete this business?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteBusiness();
      }
    });
  };
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('business_details_bar');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, businessState === null || businessState === void 0 || (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.name), businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.enabled,
    onChange: handleChangeActiveBusiness
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    disabled: true
    // onClick={() => handleSelectedItem('support')}
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)), width > 576 && !extraOpen && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return expandSideBar();
    }
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsBusinessPreview(true);
    }
  }, t('PREVIEW', 'Preview')), isAllowRegisteredBusiness && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDuplicateBusiness();
    }
  }, t('DUPLICATE', 'Duplicate')), !isEnabledWhiteLabelModule && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleSelectedItem('personalization');
    }
  }, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleSelectedItem('custom_fields');
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), enableSyncFunctions && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleSyncEvent('business');
    }
  }, t('SYNC_BUSINESS', 'Sync Business')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleSyncEvent('menu');
    }
  }, t('SYNC_PRODUCTS', 'Sync Products')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleSyncEvent('coupons');
    }
  }, t('SYNC_COUPONS', 'Sync Coupons'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeleteBusiness();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeader, {
    isSkeleton: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeader, {
    bgimage: optimizeImage(businessState === null || businessState === void 0 || (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.header, 'h_200,c_limit')
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, {
    bgimage: optimizeImage((businessState === null || businessState === void 0 || (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_100,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessDetailsContent, null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: handleOpenCategory,
    disabled: businessState === null || businessState === void 0 ? void 0 : businessState.loading
  }, t('CATEGORIES_AND_PRODUCTS', 'Categories & products')), !isEnabledWhiteLabelModule && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    borderRadius: "8px",
    onClick: handleOpenSite,
    disabled: businessState === null || businessState === void 0 ? void 0 : businessState.loading
  }, t('STORE_WEBSITE', 'Store website'))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightGreen",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsBusinessSnooze(true);
    },
    disabled: businessState === null || businessState === void 0 ? void 0 : businessState.loading
  }, t('SNOOZE', 'Snooze')))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessDescription, null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 300
  }) : businessState === null || businessState === void 0 || (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.description), /*#__PURE__*/_react.default.createElement(_styles2.BusinessConfigsContainer, {
    isLoading: businessState === null || businessState === void 0 ? void 0 : businessState.loading
  }, (isAdmin ? spoonityConfig ? businessConfigs : businessConfigs.filter(function (configs) {
    return configs.key !== 'spoonity_key';
  }) : businessConfigs.filter(function (c) {
    return !itemsExcluded.includes(c.key);
  })).filter(function (item) {
    return isEnabledWhiteLabelModule ? !['personalization', 'sales_channels'].includes(item.key) : true;
  }).map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessConfigItem, {
      key: config.key,
      active: selectedItem === config.key,
      onClick: function onClick() {
        return handleSelectedItem(config.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, config.value), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "900px",
    open: isBusinessPreview,
    onClose: function onClose() {
      setIsBusinessPreview(false);
      setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessPreviewHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'desktop' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Laptop, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'mobile' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('mobile');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null)))), /*#__PURE__*/_react.default.createElement(_BusinessPreview.BusinessPreview, {
    isMobileView: selectedView === 'mobile',
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "85%",
    maxWidth: "1000px",
    open: isBusinessSnooze,
    onClose: function onClose() {
      return setIsBusinessSnooze(false);
    },
    closeOnBackdrop: false
  }, /*#__PURE__*/_react.default.createElement(_SnoozeComponent.SnoozeComponent, {
    dataState: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleUpdate: handleUpdateBusinessClick,
    setFormState: setFormState,
    formState: formState,
    onClose: function onClose() {
      return setIsBusinessSnooze(false);
    }
  })));
};