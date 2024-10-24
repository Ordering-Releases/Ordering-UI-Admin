"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilterGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));
var _TiWarningOutline = _interopRequireDefault(require("@meronex/icons/ti/TiWarningOutline"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BusinessesSelector = require("../BusinessesSelector");
var _DriversGroupTypeSelector = require("../DriversGroupTypeSelector");
var _DateTypeSelector = require("../DateTypeSelector");
var _DriverMultiSelector = require("../DriverMultiSelector");
var _Shared = require("../../Shared");
var _DeliveryTypeSelector = require("../DeliveryTypeSelector");
var _PaymethodTypeSelector = require("../PaymethodTypeSelector");
var _CountryFilter = require("../CountryFilter");
var _styles = require("../../../styles");
var _CurrencyFilter = require("../CurrencyFilter");
var _AdminsSelector = require("../AdminsSelector");
var _utils = require("../../../utils");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _FilterValuesContext = require("../../../contexts/FilterValuesContext");
var _styles2 = require("./styles");
var _styles3 = require("../OrdersTable/styles");
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
var OrdersFilterGroupUI = function OrdersFilterGroupUI(props) {
  var _configs$filter_order, _filterValues$logisti, _filterValues$assigne;
  var isLateralBar = props.isLateralBar,
    filterModalOpen = props.filterModalOpen,
    setFilterModalOpen = props.setFilterModalOpen,
    searchValue = props.searchValue,
    handleChangeSearch = props.handleChangeSearch,
    filterValues = props.filterValues,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    citiesList = props.citiesList,
    adminsList = props.adminsList,
    handleChangeGroup = props.handleChangeGroup,
    handleChangeDateType = props.handleChangeDateType,
    handleChangeFromDate = props.handleChangeFromDate,
    handleChangeEndDate = props.handleChangeEndDate,
    handleChangeBusinesses = props.handleChangeBusinesses,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeCity = props.handleChangeCity,
    handleChangeDeliveryType = props.handleChangeDeliveryType,
    handleChangePaymethodType = props.handleChangePaymethodType,
    handleResetFilterValues = props.handleResetFilterValues,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleChangeOrderId = props.handleChangeOrderId,
    handleChangeCountryCode = props.handleChangeCountryCode,
    handleChangeCurrency = props.handleChangeCurrency,
    handleChangeMetaFieldValue = props.handleChangeMetaFieldValue,
    handleAddMetaField = props.handleAddMetaField,
    handleChangeAdmin = props.handleChangeAdmin,
    handleDeleteMetafield = props.handleDeleteMetafield,
    handleChangeExternalId = props.handleChangeExternalId,
    handleChangeChildFilterValue = props.handleChangeChildFilterValue,
    handleChangeGroupUnassigned = props.handleChangeGroupUnassigned,
    handleFilterValues = props.handleFilterValues,
    handleChangeOfferId = props.handleChangeOfferId;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      key: '',
      value: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    metafield = _useState2[0],
    setMetaField = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShow = _useState4[0],
    setIsShow = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    filterApplied = _useState6[0],
    setFilterApplied = _useState6[1];
  var metafieldRef = (0, _react.useRef)();
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useFilterValues = (0, _FilterValuesContext.useFilterValues)(),
    _useFilterValues2 = _slicedToArray(_useFilterValues, 1),
    _filterValues = _useFilterValues2[0];
  var configFilter = (configs === null || configs === void 0 || (_configs$filter_order = configs.filter_order_options) === null || _configs$filter_order === void 0 ? void 0 : _configs$filter_order.value.split('|').map(function (value) {
    return value;
  })) || [];
  var logisticStatusList = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('PENDING', 'Pending'), /*#__PURE__*/_react.default.createElement(_styles3.LogisticStatusDot, {
      status: 0
    }))
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('IN_PROGRESS', 'In progress'), /*#__PURE__*/_react.default.createElement(_styles3.LogisticStatusDot, {
      status: 1
    }))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('IN_QUEUE', 'In queue'), /*#__PURE__*/_react.default.createElement(_styles3.LogisticStatusDot, {
      status: 2
    }))
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('EXPIRED', 'Expired'), /*#__PURE__*/_react.default.createElement(_styles3.LogisticStatusDot, {
      status: 3
    }))
  }, {
    value: 4,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('RESOLVED', 'Resolved'), /*#__PURE__*/_react.default.createElement(_styles3.LogisticStatusDot, {
      status: 4
    }))
  }];
  var assignedFilterOptions = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('ASSIGNED', 'Assigned'))
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('UNASSIGNED', 'Unassigned'))
  }];
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(filterValues);
    handleFilterValues(filterValues);
    setFilterModalOpen(false);
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  var handleAddMetafieldValue = function handleAddMetafieldValue() {
    handleAddMetaField({
      id: (0, _utils.getUniqueId)(),
      key: metafield === null || metafield === void 0 ? void 0 : metafield.key,
      value: metafield === null || metafield === void 0 ? void 0 : metafield.value
    });
    setMetaField({
      key: '',
      value: ''
    });
    setIsShow(false);
  };
  var handleDeleteMetafieldValue = function handleDeleteMetafieldValue(id) {
    handleDeleteMetafield(id);
  };
  var handleClearFilters = function handleClearFilters() {
    if (searchValue) handleChangeSearch('');
    if (filterApplied) handleClearFilter();
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _metafieldRef$current;
    if (!isShow) return;
    var outsideCalendar = !((_metafieldRef$current = metafieldRef.current) !== null && _metafieldRef$current !== void 0 && _metafieldRef$current.contains(e.target));
    if (outsideCalendar) {
      setIsShow(false);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isShow]);
  (0, _react.useEffect)(function () {
    var _filterApplied = false;
    if (Object.keys(_filterValues).length === 0) {
      _filterApplied = false;
    } else {
      Object.values(_filterValues).forEach(function (value) {
        if (Array.isArray(value)) {
          if (value.length > 0) _filterApplied = true;
        } else {
          if (value) _filterApplied = true;
        }
      });
    }
    setFilterApplied(_filterApplied);
  }, [_filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return setFilterModalOpen && setFilterModalOpen(true);
    },
    name: "filter-btn"
  }, filterApplied ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Funnel, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null)), (filterApplied || !!searchValue) && /*#__PURE__*/_react.default.createElement(_styles2.WarningMessage, {
    isLateralBar: isLateralBar
  }, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('WARNING_FILTER_APPLIED', 'Filters applied. You may miss new orders.')), /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleClearFilters();
    }
  }, t('CLEAR_FILTERS', 'Clear filters'))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    padding: "0px",
    open: filterModalOpen,
    onClose: function onClose() {
      return setFilterModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.FilterGroupListContainer, {
    className: "filter-modal"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('FILTER', 'Filter')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "ID",
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId) || '',
    onChange: function onChange(e) {
      return handleChangeOrderId(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_DateTypeSelector.DateTypeSelector, {
    filterValues: filterValues,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('CUSTOMER_NAME', 'Customer Name'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerName) || '',
    onChange: function onChange(e) {
      var _e$target;
      return handleChangeChildFilterValue({
        customerName: e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('CUSTOMER_LASTNAME', 'Customer Lastname'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerLastname) || '',
    onChange: function onChange(e) {
      var _e$target2;
      return handleChangeChildFilterValue({
        customerLastname: e === null || e === void 0 || (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('CUSTOMER_EMAIL', 'Customer Email'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerEmail) || '',
    onChange: function onChange(e) {
      var _e$target3;
      return handleChangeChildFilterValue({
        customerEmail: e === null || e === void 0 || (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('CUSTOMER_CELLPHONE', 'Customer Cellphone'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerCellphone) || '',
    onChange: function onChange(e) {
      var _e$target4;
      return handleChangeChildFilterValue({
        customerCellphone: e === null || e === void 0 || (_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DriversGroupTypeSelector.DriversGroupTypeSelector, {
    driverGroupList: driverGroupList,
    handleChangeGroup: handleChangeGroupUnassigned,
    filterValues: filterValues.groupTypesUnassigned,
    title: t('DRIVER_GROUP_ASSIGNED', 'Driver group (assigned)')
  }), /*#__PURE__*/_react.default.createElement(_BusinessesSelector.BusinessesSelector, {
    filterValues: filterValues,
    businessesList: businessesList,
    handleChangeBusinesses: handleChangeBusinesses
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_CountryFilter.CountryFilter, {
    filterValues: filterValues,
    handleChangeCountryCode: handleChangeCountryCode
  }), /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
    cities: citiesList,
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DeliveryTypeSelector.DeliveryTypeSelector, {
    filterValues: filterValues,
    handleChangeDeliveryType: handleChangeDeliveryType
  }), /*#__PURE__*/_react.default.createElement(_PaymethodTypeSelector.PaymethodTypeSelector, {
    paymethodsList: paymethodsList,
    filterValues: filterValues,
    handleChangePaymethodType: handleChangePaymethodType
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_CurrencyFilter.CurrencyFilter, {
    filterValues: filterValues,
    handleChangeCurrency: handleChangeCurrency
  }), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: logisticStatusList,
    className: "select",
    defaultValue: (_filterValues$logisti = filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus) !== null && _filterValues$logisti !== void 0 ? _filterValues$logisti : '',
    placeholder: t('SELECT_LOGISTIC_STATUS', 'Select a logistic status'),
    onChange: function onChange(value) {
      return handleChangeChildFilterValue({
        logisticStatus: value
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('OFFER_ID', 'Offer id'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.offerId) || '',
    onChange: function onChange(e) {
      return handleChangeOfferId(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('COUPON', 'Coupon'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.coupon) || '',
    onChange: function onChange(e) {
      var _e$target5;
      return handleChangeChildFilterValue({
        coupon: e === null || e === void 0 || (_e$target5 = e.target) === null || _e$target5 === void 0 ? void 0 : _e$target5.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: assignedFilterOptions,
    className: "select",
    defaultValue: (_filterValues$assigne = filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) !== null && _filterValues$assigne !== void 0 ? _filterValues$assigne : '',
    placeholder: t('SELECT_DRIVER_STATUS', 'Select a driver status'),
    onChange: function onChange(value) {
      return handleChangeChildFilterValue({
        assigned: value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_AdminsSelector.AdminsSelector, {
    filterValues: filterValues,
    adminsList: adminsList,
    handleChangeAdmin: handleChangeAdmin
  })), filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, {
      key: item.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "text",
      name: "key",
      placeholder: t('METAFIELD_NAME', 'Metafield name'),
      autoComplete: "off",
      value: item.key || '',
      onChange: function onChange(e) {
        return handleChangeMetaFieldValue(e, item.id);
      }
    }), (item === null || item === void 0 ? void 0 : item.key) && /*#__PURE__*/_react.default.createElement(_styles2.AddInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "text",
      name: "value",
      placeholder: t('METAFIELD_VALUE', 'Metafield value'),
      autoComplete: "off",
      value: (item === null || item === void 0 ? void 0 : item.value) || '',
      onChange: function onChange(e) {
        return handleChangeMetaFieldValue(e, item.id);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      onClick: function onClick() {
        return handleDeleteMetafieldValue(item.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash3, null))));
  }), !isShow && /*#__PURE__*/_react.default.createElement(_styles2.AddMetaFiled, {
    onClick: function onClick() {
      return setIsShow(true);
    }
  }, t('ADD_METAFIELD', 'Add a metafield')), isShow && /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, {
    ref: metafieldRef
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "key",
    placeholder: t('METAFIELD_NAME', 'Metafield name'),
    autoComplete: "off",
    value: metafield.key || '',
    onChange: function onChange(e) {
      return setMetaField(_objectSpread(_objectSpread({}, metafield), {}, {
        key: e.target.value
      }));
    }
  }), (metafield === null || metafield === void 0 ? void 0 : metafield.key) && /*#__PURE__*/_react.default.createElement(_styles2.AddInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "value",
    placeholder: t('METAFIELD_VALUE', 'Metafield value'),
    autoComplete: "off",
    value: metafield.value || '',
    onChange: function onChange(e) {
      return setMetaField(_objectSpread(_objectSpread({}, metafield), {}, {
        value: e.target.value
      }));
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    onClick: handleAddMetafieldValue
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear'))))));
};
var OrdersFilterGroup = exports.OrdersFilterGroup = function OrdersFilterGroup(props) {
  var _useFilterValues3 = (0, _FilterValuesContext.useFilterValues)(),
    _useFilterValues4 = _slicedToArray(_useFilterValues3, 2),
    filterValues = _useFilterValues4[0],
    handleFilterValues = _useFilterValues4[1].handleFilterValues;
  var _useState7 = (0, _react.useState)(filterValues),
    _useState8 = _slicedToArray(_useState7, 2),
    savedFilterValues = _useState8[0],
    setSavedFilterValues = _useState8[1];
  (0, _react.useEffect)(function () {
    setSavedFilterValues(filterValues);
  }, [filterValues]);
  var FilterControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersFilterGroupUI,
    driverGroupList: props.driverGroupList,
    filterValues: savedFilterValues,
    setFilterValues: setSavedFilterValues,
    handleFilterValues: handleFilterValues
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.OrdersFilter, FilterControlProps));
};