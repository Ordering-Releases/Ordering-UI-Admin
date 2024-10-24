"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionRules = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactHookForm = require("react-hook-form");
var _Shared = require("../../Shared");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _EnterprisePromotionConditions = require("../EnterprisePromotionConditions");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var EnterprisePromotionRules = exports.EnterprisePromotionRules = function EnterprisePromotionRules(props) {
  var _formState$changes4, _promotionState$promo4, _formState$changes5, _formState$changes6, _promotionState$promo5, _formState$changes$ra4, _formState$changes7, _promotionState$promo6, _formState$changes8, _promotionState$promo7, _formState$changes9, _promotionState$promo8, _formState$changes10, _promotionState$promo9, _ref3, _formState$changes$co, _formState$changes11, _promotionState$promo10, _formState$changes12, _promotionState$promo11, _formState$changes13, _promotionState$promo12, _formState$changes14, _formState$changes15, _promotionState$promo13, _formState$changes16, _formState$changes17, _promotionState$promo14;
  var isAddMode = props.isAddMode,
    promotionState = props.promotionState,
    formState = props.formState,
    actionState = props.actionState,
    handleChangeInput = props.handleChangeInput,
    handleChangeItem = props.handleChangeItem,
    handleAddPromotion = props.handleAddPromotion,
    handleUpdateClick = props.handleUpdateClick,
    setMoveDistance = props.setMoveDistance,
    setSideBarWidth = props.setSideBarWidth,
    isExpand = props.isExpand;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowConditions = _useState4[0],
    setIsShowConditions = _useState4[1];
  var promotionTypes = [{
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('MOBILE_FRONT_SUB_TOTAL', 'Subtotal'))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('DELIVERY_FEE', 'Delivery fee'))
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('BUSINESS_SERVICE_FEE', 'Service fee'))
  }];
  var discountTypes = [{
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('PERCENTAGE', 'Percentage'))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('PRICE', 'Price'))
  }];
  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length > 0) {
      if (isAddMode) {
        handleAddPromotion();
      } else {
        handleUpdateClick();
      }
    }
  };
  var hanndleClickApply = function hanndleClickApply() {
    if (width > 1300) {
      setSideBarWidth(isExpand ? width : 1300);
      setMoveDistance(700);
    }
    setIsShowConditions(true);
  };
  var handleMaxPercentValidate = function handleMaxPercentValidate() {
    var _formState$changes$ra, _formState$changes, _promotionState$promo, _ref, _formState$changes$ra2, _formState$changes2, _promotionState$promo2;
    var rateType = (_formState$changes$ra = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.rate_type) !== null && _formState$changes$ra !== void 0 ? _formState$changes$ra : (_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.rate_type;
    if (rateType !== 1) return true;
    var rate = (_ref = (_formState$changes$ra2 = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.rate) !== null && _formState$changes$ra2 !== void 0 ? _formState$changes$ra2 : promotionState === null || promotionState === void 0 || (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.rate) !== null && _ref !== void 0 ? _ref : '';
    if (parseFloat(rate) <= 100) {
      return true;
    } else {
      return t('VALIDATION_ERROR_MAX_NUMERIC', 'The _attribute_ may not be greater than _max_.').replace('_attribute_', t('PERCENTAGE', 'Percentage')).replace('_max_', 100);
    }
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    if (width < 1300) {
      setMoveDistance(0);
    } else {
      if (isShowConditions) {
        setMoveDistance(700);
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    var _ref2, _formState$changes$ra3, _formState$changes3, _promotionState$promo3;
    var rate = (_ref2 = (_formState$changes$ra3 = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.rate) !== null && _formState$changes$ra3 !== void 0 ? _formState$changes$ra3 : promotionState === null || promotionState === void 0 || (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.rate) !== null && _ref2 !== void 0 ? _ref2 : '';
    formMethods.setValue('rate', rate);
  }, [(_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.rate, promotionState === null || promotionState === void 0 || (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.rate]);
  return /*#__PURE__*/_react.default.createElement(_styles2.RulesContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('PROMOTION_TYPES', 'Promotion types')), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: typeof ((_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.target) !== 'undefined' ? (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.target : (_promotionState$promo5 = promotionState.promotion) === null || _promotionState$promo5 === void 0 ? void 0 : _promotionState$promo5.target,
    options: promotionTypes,
    onChange: function onChange(val) {
      return handleChangeItem({
        target: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.DiscountContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, t('DISCOUNT_TYPE', 'Discount type')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: (_formState$changes$ra4 = (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.rate_type) !== null && _formState$changes$ra4 !== void 0 ? _formState$changes$ra4 : (_promotionState$promo6 = promotionState.promotion) === null || _promotionState$promo6 === void 0 ? void 0 : _promotionState$promo6.rate_type,
    options: discountTypes,
    onChange: function onChange(val) {
      return handleChangeItem({
        rate_type: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "rate",
    id: "discount_value",
    placeholder: 0,
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_REQUIRED', 'The _attribute_ field is required.').replace('_attribute_', t('RATE', 'Rate')),
      validate: handleMaxPercentValidate
    }),
    autoComplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('QUESTION_HOW_GOING_APPLIED', 'How it\'s going to be applied?')), /*#__PURE__*/_react.default.createElement(_styles2.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CouponHeader, {
    active: ((_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.type) === 2 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo7 = promotionState.promotion) === null || _promotionState$promo7 === void 0 ? void 0 : _promotionState$promo7.type) === 2,
    onClick: function onClick() {
      return handleChangeItem({
        type: 2
      });
    }
  }, ((_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.type) === 2 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo8 = promotionState.promotion) === null || _promotionState$promo8 === void 0 ? void 0 : _promotionState$promo8.type) === 2 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('COUPON', 'Coupon'))), (((_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.type) === 2 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo9 = promotionState.promotion) === null || _promotionState$promo9 === void 0 ? void 0 : _promotionState$promo9.type) === 2) && /*#__PURE__*/_react.default.createElement(_styles2.CouponContent, null, /*#__PURE__*/_react.default.createElement(_styles2.CouponCodeContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('COUPON_CODE', 'Coupon code')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "coupon",
    value: (_ref3 = (_formState$changes$co = (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.coupon) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : promotionState === null || promotionState === void 0 || (_promotionState$promo10 = promotionState.promotion) === null || _promotionState$promo10 === void 0 ? void 0 : _promotionState$promo10.coupon) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeItem({
        coupon: e.target.value.replace(/\s+/g, '')
      });
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.DiscountOption, null, /*#__PURE__*/_react.default.createElement(_styles2.CouponHeader, {
    active: ((_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.type) === 1 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo11 = promotionState.promotion) === null || _promotionState$promo11 === void 0 ? void 0 : _promotionState$promo11.type) === 1,
    onClick: function onClick() {
      return handleChangeItem({
        type: 1
      });
    }
  }, ((_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.type) === 1 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo12 = promotionState.promotion) === null || _promotionState$promo12 === void 0 ? void 0 : _promotionState$promo12.type) === 1 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('DISCOUNT', 'discount')))), /*#__PURE__*/_react.default.createElement(_styles2.AutomaticEnableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: typeof ((_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.auto) !== 'undefined' ? (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.auto : (_promotionState$promo13 = promotionState.promotion) === null || _promotionState$promo13 === void 0 ? void 0 : _promotionState$promo13.auto,
    onChange: function onChange(e) {
      return handleChangeItem({
        auto: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('AUTOMATIC_OFFER', 'Automatic offer'))), /*#__PURE__*/_react.default.createElement(_styles2.PublicEnableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: typeof ((_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.public) !== 'undefined' ? (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.public : (_promotionState$promo14 = promotionState.promotion) === null || _promotionState$promo14 === void 0 ? void 0 : _promotionState$promo14.public,
    onChange: function onChange(e) {
      return handleChangeItem({
        public: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('PUBLIC', 'Public')), /*#__PURE__*/_react.default.createElement("p", null, t('USERS_WILL_ABLE_TO_SEE', 'Users will be able to see it')))), /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('CONDITIONS', 'Conditions')), /*#__PURE__*/_react.default.createElement(_styles2.CondtionItem, {
    active: isShowConditions,
    onClick: function onClick() {
      return hanndleClickApply();
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, isShowConditions ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('FRONT_VISUALS_APPLY', 'Apply'))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState.changes).length === 0 || actionState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('PROFILE', 'Profile'),
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
  }), width >= 1300 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShowConditions && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    sidebarId: "promotion_conditions_details",
    defaultSideBarWidth: "700",
    open: isShowConditions,
    onClose: function onClose() {
      setMoveDistance(0);
      setIsShowConditions(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_EnterprisePromotionConditions.EnterprisePromotionConditions, props))) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: isShowConditions,
    isTopPosition: true,
    onClose: function onClose() {
      setMoveDistance(0);
      setIsShowConditions(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_EnterprisePromotionConditions.EnterprisePromotionConditions, props)));
};