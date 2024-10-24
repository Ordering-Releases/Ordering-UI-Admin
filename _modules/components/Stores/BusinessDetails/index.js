"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetailsUI = exports.BusinessDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _BusinessSummary = require("../BusinessSummary");
var _BusinessSupport = require("../BusinessSupport");
var _BusinessDetail = require("../BusinessDetail");
var _BusinessSchedule = require("../BusinessSchedule");
var _BusinessMenu = require("../BusinessMenu");
var _BusinessDeliveryPickupMore = require("../BusinessDeliveryPickupMore");
var _BusinessPaymentMethods = require("../BusinessPaymentMethods");
var _BusinessPreorderDetails = require("../BusinessPreorderDetails");
var _BusinessTaxAndFees = require("../BusinessTaxAndFees");
var _BusinessPromotionList = require("../BusinessPromotionList");
var _BusinessCustomFields = require("../BusinessCustomFields");
var _BusinessWebhooks = require("../BusinessWebhooks");
var _BusinessNotifications = require("../BusinessNotifications");
var _BusinessOrderingChannels = require("../BusinessOrderingChannels");
var _BusinessFrontLayout = require("../BusinessFrontLayout");
var _BusinessPlaceGroupList = require("../BusinessPlaceGroupList");
var _BusinessLogs = require("../BusinessLogs");
var _SpoonityApiKey = require("../SpoonityApiKey");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("./styles");
var _BusinessSalesChannel = require("../BusinessSalesChannel");
var _BusinessQRCodeOptions = require("../BusinessQRCodeOptions");
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import { BusinessPublishing } from '../BusinessPublishing'
var BusinessDetailsUI = exports.BusinessDetailsUI = function BusinessDetailsUI(props) {
  var _businessState$busine, _businessState$busine2, _businessState$busine3, _businessState$busine4, _businessState$busine5, _businessState$busine6, _businessState$busine7;
  var open = props.open,
    businessId = props.businessId,
    businessState = props.businessState,
    handleChangeActiveBusiness = props.handleChangeActiveBusiness,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    handleDeleteBusinessOwner = props.handleDeleteBusinessOwner,
    handleAddBusinessOwner = props.handleAddBusinessOwner,
    businessTypes = props.businessTypes,
    formState = props.formState,
    setFormState = props.setFormState,
    handleUpdateBusinessClick = props.handleUpdateBusinessClick,
    setBusinessTypes = props.setBusinessTypes,
    handleSuccessAddBusinessItem = props.handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem = props.handleSuccessDeleteBusinessItem,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleDuplicateBusiness = props.handleDuplicateBusiness,
    handleDeleteBusiness = props.handleDeleteBusiness,
    actionStatus = props.actionStatus,
    handleUpdatePreorderConfigs = props.handleUpdatePreorderConfigs,
    handleUpdateSpoonityKey = props.handleUpdateSpoonityKey,
    handleSyncEvent = props.handleSyncEvent,
    spoonityKeyState = props.spoonityKeyState,
    siteState = props.siteState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    extraOpen = _useState4[0],
    setExtraOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isExtendExtraOpen = _useState6[0],
    setIsExtendExtraOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isExpand = _useState8[0],
    setIsExpand = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var spoonityConfig = businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 || (_businessState$busine = _businessState$busine.configs) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.find(function (config) {
    return config.key === 'spoonity_integration_api_key';
  });
  var isAdmin = (user === null || user === void 0 ? void 0 : user.level) === 0;
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedItem = _useState12[0],
    setSelectedItem = _useState12[1];
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    if (!value) {
      props.onClose();
    }
  };
  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('business_details_bar').style.width = '100vw';
      } else {
        if (isExpand) {
          document.getElementById('business_details_bar').style.width = '100vw';
        } else {
          if (extraOpen && width >= 1000) {
            document.getElementById('business_details_bar').style.width = '1000px';
          } else {
            document.getElementById('business_details_bar').style.width = '500px';
          }
        }
      }
    }
  };
  var handleSelectedItem = function handleSelectedItem(item, isInitialRender) {
    setIsExtendExtraOpen(false);
    setSelectedItem(item);
    setExtraOpen(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        section: item
      });
    }
  };
  var handleCloseExtraOpen = function handleCloseExtraOpen() {
    setIsExtendExtraOpen(false);
    setExtraOpen(false);
    setSelectedItem(null);
    (0, _utils.removeQueryToUrl)(['section', 'tab', 'business_type', 'paymethod', 'payemthod_tab', 'setting_tab', 'menu', 'zone', 'zone_tab', 'wallet']);
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [extraOpen, isExpand, width]);
  (0, _react.useEffect)(function () {
    setExtraOpen(false);
    setIsExtendExtraOpen(false);
  }, [businessId]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose();
    }
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.error)) return;
    setAlertState({
      open: true,
      content: actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error
    });
  }, [actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error]);
  (0, _react.useEffect)(function () {
    if (!(businessState !== null && businessState !== void 0 && businessState.error)) return;
    setAlertState({
      open: true,
      content: businessState === null || businessState === void 0 ? void 0 : businessState.error
    });
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.error]);
  (0, _react.useEffect)(function () {
    if (businessState !== null && businessState !== void 0 && businessState.loading) return;
    var detailKey = query.get('section');
    if (detailKey) {
      handleSelectedItem(detailKey, true);
    }
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.BarContainer, {
    id: "business_details_bar"
  }, (!isExtendExtraOpen || width < 1000) && /*#__PURE__*/_react.default.createElement(_BusinessSummary.BusinessSummary, {
    isAdmin: isAdmin,
    businessState: businessState,
    handleChangeActiveBusiness: handleChangeActiveBusiness,
    actionSidebar: actionSidebar,
    selectedItem: selectedItem,
    handleSelectedItem: handleSelectedItem,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleDuplicateBusiness: handleDuplicateBusiness,
    handleDeleteBusiness: handleDeleteBusiness,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    handleSyncEvent: handleSyncEvent,
    extraOpen: extraOpen,
    spoonityConfig: spoonityConfig,
    siteState: siteState,
    isExpand: isExpand,
    setIsExpand: setIsExpand,
    formState: formState,
    setFormState: setFormState
  }), extraOpen && /*#__PURE__*/_react.default.createElement(_Shared.MoreSidebarLayout, {
    isExtendExtraOpen: isExtendExtraOpen,
    onClose: handleCloseExtraOpen
  }, selectedItem === 'support' && /*#__PURE__*/_react.default.createElement(_BusinessSupport.BusinessSupport, {
    businessState: businessState
  }), selectedItem === 'store_details' && /*#__PURE__*/_react.default.createElement(_BusinessDetail.BusinessDetail, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner,
    formState: formState,
    setFormState: setFormState,
    businessTypes: businessTypes || (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.types),
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    setBusinessTypes: setBusinessTypes,
    handleSuccessAddBusinessItem: handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem: handleSuccessDeleteBusinessItem,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    isExtendExtraOpen: isExtendExtraOpen,
    handleUpdateBusinessState: handleUpdateBusinessState
  }), selectedItem === 'schedule' && /*#__PURE__*/_react.default.createElement(_BusinessSchedule.BusinessSchedule, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'menu' && /*#__PURE__*/_react.default.createElement(_BusinessMenu.BusinessMenu, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessBusinessMenu: handleUpdateBusinessState,
    setIsExtendExtraOpen: setIsExtendExtraOpen
  }), selectedItem === 'delivery_pickup_more' && /*#__PURE__*/_react.default.createElement(_BusinessDeliveryPickupMore.BusinessDeliveryPickupMore, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleUpdateBusinessState: handleUpdateBusinessState
  }), selectedItem === 'notifications' && /*#__PURE__*/_react.default.createElement(_BusinessNotifications.BusinessNotifications, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    formState: formState,
    setFormState: setFormState
  }), selectedItem === 'payment_methods' && /*#__PURE__*/_react.default.createElement(_BusinessPaymentMethods.BusinessPaymentMethods, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'tax_fees' && /*#__PURE__*/_react.default.createElement(_BusinessTaxAndFees.BusinessTaxAndFees, {
    formState: formState,
    setFormState: setFormState,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleUpdateBusinessClick: handleUpdateBusinessClick
  }), selectedItem === 'promotions' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionList.BusinessPromotionList, {
    promotions: businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.offers,
    businessId: businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'preorder' && /*#__PURE__*/_react.default.createElement(_BusinessPreorderDetails.BusinessPreorderDetails, {
    formState: formState,
    setFormState: setFormState,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    actionStatus: actionStatus,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    handleUpdatePreorderConfigs: handleUpdatePreorderConfigs
  }), selectedItem === 'custom_fields' && /*#__PURE__*/_react.default.createElement(_BusinessCustomFields.BusinessCustomFields, {
    businessId: businessState === null || businessState === void 0 || (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id,
    metafields: businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.metafields,
    handleSuccessAddMetaFields: function handleSuccessAddMetaFields(result) {
      return handleSuccessAddBusinessItem('metafields', result);
    },
    handleSuccessDeleteBusinessMetaFields: function handleSuccessDeleteBusinessMetaFields(id) {
      return handleSuccessDeleteBusinessItem('metafields', id);
    }
  }), selectedItem === 'personalization' && /*#__PURE__*/_react.default.createElement(_Shared.Personalization, {
    isShowTitle: true
  }), selectedItem === 'ordering_channels' && /*#__PURE__*/_react.default.createElement(_BusinessOrderingChannels.BusinessOrderingChannels, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    formState: formState,
    setFormState: setFormState
  }), selectedItem === 'publishing' && isAdmin && /*#__PURE__*/_react.default.createElement(_BusinessQRCodeOptions.BusinessQRCodeOptions, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen
  }), selectedItem === 'sales_channels' && /*#__PURE__*/_react.default.createElement(_BusinessSalesChannel.BusinessSalesChannel, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    siteState: siteState
  }), selectedItem === 'layout' && /*#__PURE__*/_react.default.createElement(_BusinessFrontLayout.BusinessFrontLayout, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    formState: formState,
    setFormState: setFormState
  }), selectedItem === 'webhooks' && /*#__PURE__*/_react.default.createElement(_BusinessWebhooks.BusinessWebhooks, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'places' && /*#__PURE__*/_react.default.createElement(_BusinessPlaceGroupList.BusinessPlaceGroupList, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    setIsExtendExtraOpen: setIsExtendExtraOpen
  }), selectedItem === 'spoonity_key' && /*#__PURE__*/_react.default.createElement(_SpoonityApiKey.SpoonityApiKey, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    spoonityConfig: spoonityConfig,
    handleUpdateSpoonityKey: handleUpdateSpoonityKey,
    spoonityKeyState: spoonityKeyState
  }), selectedItem === 'logs' && /*#__PURE__*/_react.default.createElement(_BusinessLogs.BusinessLogs, {
    businessId: businessState === null || businessState === void 0 || (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.id
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var BusinessDetails = exports.BusinessDetails = function BusinessDetails(props) {
  var businessDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: BusinessDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessDetails, businessDetailsProps);
};