"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuBasicOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _Shared = require("../../Shared");
var _BusinessMenuCategoryTreeNode = require("../BusinessMenuCategoryTreeNode");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessMenuBasicOptions = exports.BusinessMenuBasicOptions = function BusinessMenuBasicOptions(props) {
  var _formState$result3, _ref, _formState$changes$na, _formState$changes3, _businessMenuState$me, _formState$changes$us, _formState$changes4, _businessMenuState$me2, _formState$changes$us3, _formState$changes6, _businessMenuState$me4, _formState$changes$us4, _formState$changes7, _businessMenuState$me5, _businessMenuState$me6, _ref2, _formState$changes$co, _formState$changes8, _businessMenuState$me7, _formState$changes$al, _formState$changes9, _businessMenuState$me8, _formState$changes$al3, _formState$changes11, _businessMenuState$me10, _formState$changes$al4, _formState$changes12, _businessMenuState$me11;
  var business = props.business,
    businessMenuState = props.businessMenuState,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleCheckOrderType = props.handleCheckOrderType,
    handleUpdateBusinessMenuOption = props.handleUpdateBusinessMenuOption,
    handleAddBusinessMenuOption = props.handleAddBusinessMenuOption,
    selectedProductsIds = props.selectedProductsIds,
    setSelectedProductsIds = props.setSelectedProductsIds,
    selectedProducts = props.selectedProducts,
    setSelectedProducts = props.setSelectedProducts,
    handleChangeScheduleState = props.handleChangeScheduleState,
    subCategoriesList = props.subCategoriesList;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var isEdit = Object.keys(businessMenuState === null || businessMenuState === void 0 ? void 0 : businessMenuState.menu).length;
  var orderTypes = [{
    value: 1,
    key: 'delivery',
    content: t('DELIVERY', 'Delivery')
  }, {
    value: 2,
    key: 'pickup',
    content: t('PICKUP', 'Pickup')
  }, {
    value: 3,
    key: 'eatin',
    content: t('EAT_IN', 'Eat in')
  }, {
    value: 4,
    key: 'curbside',
    content: t('CURBSIDE', 'Curbside')
  }, {
    value: 5,
    key: 'driver_thru',
    content: t('DRIVE_THRU', 'Drive thru')
  }, {
    value: 7,
    key: 'catering_delivery',
    content: t('CATERING_DELIVERY', 'Catering delivery')
  }, {
    value: 8,
    key: 'catering_pickup',
    content: t('CATERING_PICKUP', 'Catering pickup')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onAddBusinessMenuOption = function onAddBusinessMenuOption() {
    var _formState$changes, _formState$changes2;
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && (_formState$changes = _formState$changes.products) !== null && _formState$changes !== void 0 && _formState$changes.length || (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.all_products) {
      handleAddBusinessMenuOption();
    } else {
      setAlertState({
        open: true,
        content: [t('ERROR_MENU_PRODUCTS', 'You have not selected any product for the menu')]
      });
    }
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result2;
    if (!(formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error)) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
    });
  }, [formState === null || formState === void 0 || (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessMenuBasicContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('MENU_NAME', 'Menu name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('NAME', 'Name'),
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : businessMenuState === null || businessMenuState === void 0 || (_businessMenuState$me = businessMenuState.menu) === null || _businessMenuState$me === void 0 ? void 0 : _businessMenuState$me.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, {
    isBorderBottom: true
  }, t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type')), orderTypes.map(function (orderType) {
    var _formState$changes$or, _formState$changes$or2;
    return /*#__PURE__*/_react.default.createElement(_styles2.OrderType, {
      key: orderType.value,
      active: (_formState$changes$or = formState === null || formState === void 0 ? void 0 : formState.changes[orderType.key]) !== null && _formState$changes$or !== void 0 ? _formState$changes$or : businessMenuState.menu[orderType.key],
      onClick: function onClick() {
        return handleCheckOrderType(orderType.key);
      }
    }, ((_formState$changes$or2 = formState === null || formState === void 0 ? void 0 : formState.changes[orderType.key]) !== null && _formState$changes$or2 !== void 0 ? _formState$changes$or2 : businessMenuState.menu[orderType.key]) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, orderType.content));
  }), /*#__PURE__*/_react.default.createElement(_styles2.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement(_styles2.OrderType, {
    noBorder: true,
    active: (_formState$changes$us = formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.use_business_schedule) !== null && _formState$changes$us !== void 0 ? _formState$changes$us : (_businessMenuState$me2 = businessMenuState.menu) === null || _businessMenuState$me2 === void 0 ? void 0 : _businessMenuState$me2.use_business_schedule,
    onClick: function onClick() {
      var _formState$changes$us2, _formState$changes5, _businessMenuState$me3;
      return handleChangeInput({
        target: {
          name: 'use_business_schedule',
          value: !((_formState$changes$us2 = formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.use_business_schedule) !== null && _formState$changes$us2 !== void 0 ? _formState$changes$us2 : (_businessMenuState$me3 = businessMenuState.menu) === null || _businessMenuState$me3 === void 0 ? void 0 : _businessMenuState$me3.use_business_schedule)
        }
      });
    }
  }, ((_formState$changes$us3 = formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.use_business_schedule) !== null && _formState$changes$us3 !== void 0 ? _formState$changes$us3 : (_businessMenuState$me4 = businessMenuState.menu) === null || _businessMenuState$me4 === void 0 ? void 0 : _businessMenuState$me4.use_business_schedule) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('USE_BUSINESS_SCHEDULE', 'Use business schedule'))), !((_formState$changes$us4 = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.use_business_schedule) !== null && _formState$changes$us4 !== void 0 ? _formState$changes$us4 : (_businessMenuState$me5 = businessMenuState.menu) === null || _businessMenuState$me5 === void 0 ? void 0 : _businessMenuState$me5.use_business_schedule) && /*#__PURE__*/_react.default.createElement(_styles2.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_Shared.Schedule, {
    scheduleList: businessMenuState === null || businessMenuState === void 0 || (_businessMenuState$me6 = businessMenuState.menu) === null || _businessMenuState$me6 === void 0 ? void 0 : _businessMenuState$me6.schedule,
    handleChangeScheduleState: handleChangeScheduleState
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('COMMENTS', 'Comments')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    name: "comment",
    defaultValue: (_ref2 = (_formState$changes$co = formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.comment) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : businessMenuState === null || businessMenuState === void 0 || (_businessMenuState$me7 = businessMenuState.menu) === null || _businessMenuState$me7 === void 0 ? void 0 : _businessMenuState$me7.comment) !== null && _ref2 !== void 0 ? _ref2 : '',
    placeholder: t('WRITE_HERE', 'Write here'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('PRODUCTS', 'Products')), /*#__PURE__*/_react.default.createElement(_styles2.OrderType, {
    noBorder: true,
    active: (_formState$changes$al = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.all_products) !== null && _formState$changes$al !== void 0 ? _formState$changes$al : (_businessMenuState$me8 = businessMenuState.menu) === null || _businessMenuState$me8 === void 0 ? void 0 : _businessMenuState$me8.all_products,
    onClick: function onClick() {
      var _formState$changes$al2, _formState$changes10, _businessMenuState$me9;
      return handleChangeInput({
        target: {
          name: 'all_products',
          value: !((_formState$changes$al2 = formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.all_products) !== null && _formState$changes$al2 !== void 0 ? _formState$changes$al2 : (_businessMenuState$me9 = businessMenuState.menu) === null || _businessMenuState$me9 === void 0 ? void 0 : _businessMenuState$me9.all_products)
        }
      });
    },
    style: {
      paddingTop: 0,
      paddingBottom: 10,
      marginBottom: 10
    }
  }, ((_formState$changes$al3 = formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.all_products) !== null && _formState$changes$al3 !== void 0 ? _formState$changes$al3 : (_businessMenuState$me10 = businessMenuState.menu) === null || _businessMenuState$me10 === void 0 ? void 0 : _businessMenuState$me10.all_products) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('ALL_PRODUCTS', 'All products'))), !((_formState$changes$al4 = formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.all_products) !== null && _formState$changes$al4 !== void 0 ? _formState$changes$al4 : (_businessMenuState$me11 = businessMenuState.menu) === null || _businessMenuState$me11 === void 0 ? void 0 : _businessMenuState$me11.all_products) && (business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category) {
    return /*#__PURE__*/_react.default.createElement(_BusinessMenuCategoryTreeNode.BusinessMenuCategoryTreeNode, {
      key: category.id,
      index: 0,
      category: category,
      selectedProductsIds: selectedProductsIds,
      setSelectedProductsIds: setSelectedProductsIds,
      selectedProducts: selectedProducts,
      setSelectedProducts: setSelectedProducts,
      subCategoriesList: subCategoriesList
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "5px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: function onClick() {
      return isEdit ? handleUpdateBusinessMenuOption() : onAddBusinessMenuOption();
    }
  }, formState.loading ? t('LOADING', 'Loading') : isEdit ? t('UPDATE', 'Update') : t('ADD', 'Add')), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};