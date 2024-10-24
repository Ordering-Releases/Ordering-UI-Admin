"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardBusiness = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _BusinessSchedule = require("../BusinessSchedule");
var _BusinessPaymentMethods = require("../BusinessPaymentMethods");
var _BusinessProductsCategoyDetails = require("../BusinessProductsCategoyDetails");
var _BusinessProductAddForm = require("../BusinessProductAddForm");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var WizardBusiness = exports.WizardBusiness = function WizardBusiness(props) {
  var isTutorialMode = props.isTutorialMode,
    business = props.business,
    openTutorialSidebarState = props.openTutorialSidebarState,
    setOpenTutorialSidebarState = props.setOpenTutorialSidebarState,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isTutorialMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openTutorialSidebarState === 'schedule' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "business_schedule_detail",
    open: openTutorialSidebarState === 'schedule',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessSchedule.BusinessSchedule, {
    isTutorialMode: true,
    business: business,
    handleSuccessUpdate: function handleSuccessUpdate(result) {
      handleSucessUpdateBusiness(result);
      setOpenTutorialSidebarState('payments');
    },
    handleTutorialSkip: function handleTutorialSkip() {
      return setOpenTutorialSidebarState('payments');
    }
  }))), openTutorialSidebarState === 'payments' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "business_payments_detail",
    open: openTutorialSidebarState === 'payments',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessPaymentMethodsContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessPaymentMethods.BusinessPaymentMethods, {
    isTutorialMode: true,
    business: business,
    handleSuccessUpdate: handleSucessUpdateBusiness,
    setIsExtendExtraOpen: function setIsExtendExtraOpen() {
      return console.log('');
    },
    handleTutorialContinue: function handleTutorialContinue() {
      return setOpenTutorialSidebarState('new_category');
    }
  }))), openTutorialSidebarState === 'new_category' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "business_new_category_form",
    open: openTutorialSidebarState === 'new_category',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategoyDetails.BusinessProductsCategoyDetails, {
    isTutorialMode: true,
    category: null,
    businessState: {
      loading: false,
      business: business
    },
    handleTutorialSkip: function handleTutorialSkip() {
      return setOpenTutorialSidebarState('tutorial_end');
    },
    handleUpdateBusinessState: function handleUpdateBusinessState(val) {
      handleSucessUpdateBusiness(val);
      setOpenTutorialSidebarState('new_product');
    }
  })), openTutorialSidebarState === 'new_product' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "business_new_product_form",
    open: openTutorialSidebarState === 'new_product',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductAddForm.BusinessProductAddForm, {
    isTutorialMode: true,
    business: business,
    setIsAddProduct: function setIsAddProduct() {
      return setOpenTutorialSidebarState('tutorial_end');
    },
    categorySelected: business === null || business === void 0 ? void 0 : business.categories[0],
    handleTutorialSkip: function handleTutorialSkip() {
      return setOpenTutorialSidebarState('tutorial_end');
    }
  })), openTutorialSidebarState === 'tutorial_end' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openTutorialSidebarState === 'tutorial_end',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.TurtorialEndContainier, null, /*#__PURE__*/_react.default.createElement("h1", null, t('NEW_STORE', 'New store')), /*#__PURE__*/_react.default.createElement(_styles2.FirstStoreContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.tutorials.businessTutorial2,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('CONGRATULATIONS', 'Congratulations!')), /*#__PURE__*/_react.default.createElement("p", null, t('FIRST_STORE_IS_REDAY', 'Your first store is ready.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return setOpenTutorialSidebarState(null);
    }
  }, t('GO_TO_STORE_LIST', 'Go to store list')))))));
};