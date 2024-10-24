"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStatusTypeSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Select = require("../../../styles/Select");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _MultiSelect = require("../../../styles/MultiSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var OrderStatusTypeSelector = exports.OrderStatusTypeSelector = function OrderStatusTypeSelector(props) {
  var isFirstSelect = props.isFirstSelect,
    defaultValue = props.defaultValue,
    deliveryType = props.deliveryType,
    mutiOrdersChange = props.mutiOrdersChange,
    orderId = props.orderId,
    type = props.type,
    orderControl = props.orderControl,
    noPadding = props.noPadding,
    noSelected = props.noSelected,
    isFilterView = props.isFilterView,
    filterValues = props.filterValues,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
    handleChangeOrderStatus = props.handleChangeOrderStatus,
    viewOnly = props.viewOnly;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('default'),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOptionValue = _useState2[0],
    setDefaultOptionValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredOrderStatuses = _useState4[0],
    setFilteredOrderStatuses = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_STATUS', 'Select Status')));
  var orderStatuses = [{
    value: 'default',
    name: t('CHANGE_STATUS', 'Change Status'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('CHANGE_STATUS', 'Change Status'))),
    disabled: true,
    showDisable: true
  }, {
    value: 'pending',
    name: t('PENDING', 'Pending'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding,
      isSubTitle: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PENDING', 'Pending'))),
    disabled: true
  }, {
    value: 0,
    name: t('PENDING', 'Pending'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PENDING', 'Pending'))),
    color: 'primary'
  }, {
    value: 13,
    name: t('PREORDER', 'Preorder'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PREORDER', 'Preorder'))),
    color: 'primary',
    disabled: true
  }, {
    value: 'inProgress',
    name: t('IN_PROGRESS', 'In Progress'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding,
      isSubTitle: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('IN_PROGRESS', 'In Progress'))),
    disabled: true
  }, {
    value: 7,
    name: t('ACCEPTED_BY_BUSINESS', 'Accepted by Business'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ACCEPTED_BY_BUSINESS', 'Accepted by Business'))),
    color: 'primary'
  }, {
    value: 4,
    name: t('PREPARATION_COMPLETED', 'Preparation Completed'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PREPARATION_COMPLETED', 'Preparation Completed'))),
    color: 'primary'
  }, {
    value: 8,
    name: t('ACCEPTED_BY_DRIVER', 'Accepted by Driver'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ACCEPTED_BY_DRIVER', 'Accepted by Driver'))),
    color: 'primary'
  }, {
    value: 3,
    name: t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business'))),
    color: 'primary'
  }, {
    value: 9,
    name: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'))),
    color: 'primary'
  }, {
    value: 14,
    name: t('ORDER_NOT_READY', 'Order not ready'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_NOT_READY', 'Order not ready'))),
    color: 'primary'
  }, {
    value: 18,
    name: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business'))),
    color: 'primary'
  }, {
    value: 19,
    name: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer'))),
    color: 'primary'
  }, {
    value: 20,
    name: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business'))),
    color: 'primary'
  }, {
    value: 21,
    name: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business'))),
    color: 'primary'
  }, {
    value: 22,
    name: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver'))),
    color: 'primary'
  }, {
    value: 23,
    name: t('ORDER_DRIVER_ON_WAY', 'Driver on way'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_DRIVER_ON_WAY', 'Driver on way'))),
    color: 'primary'
  }, {
    value: 24,
    name: t('ORDER_STATUS_DRIVER_WAITING_FOR_ORDER', 'Driver waiting for order'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_STATUS_DRIVER_WAITING_FOR_ORDER', 'Driver waiting for order'))),
    color: 'primary'
  }, {
    value: 25,
    name: t('ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY', 'Accepted by driver company'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY', 'Accepted by driver company'))),
    color: 'primary'
  }, {
    value: 26,
    name: t('ORDER_DRIVER_ARRIVED_CUSTOMER', 'Driver arrived to customer'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_DRIVER_ARRIVED_CUSTOMER', 'Driver arrived to customer'))),
    color: 'primary'
  }, {
    value: null,
    name: t('COMPLETED', 'Completed'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding,
      isSubTitle: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('COMPLETED', 'Completed'))),
    disabled: true
  }, {
    value: 1,
    name: t('COMPLETED_BY_ADMIN', 'Completed by Admin'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('COMPLETED_BY_ADMIN', 'Completed by Admin'))),
    color: 'primary'
  }, {
    value: 11,
    name: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver'))),
    color: 'primary'
  }, {
    value: 15,
    name: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer'))),
    color: 'primary'
  }, {
    value: null,
    name: t('CANCELLED', 'Cancelled'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding,
      isSubTitle: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('CANCELLED', 'Cancelled'))),
    disabled: true
  }, {
    value: 2,
    name: t('REJECTED_BY_ADMIN', 'Rejected by Admin'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('REJECTED_BY_ADMIN', 'Rejected by Admin'))),
    color: 'primary'
  }, {
    value: 5,
    name: t('REJECTED_BY_BUSINESS', 'Rejected by Business'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('REJECTED_BY_BUSINESS', 'Rejected by Business'))),
    color: 'primary'
  }, {
    value: 6,
    name: t('REJECTED_BY_DRIVER', 'Rejected by Driver'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('REJECTED_BY_DRIVER', 'Rejected by Driver'))),
    color: 'primary'
  }, {
    value: 10,
    name: t('PICK_UP_FAILED_BY_DRIVER', 'Pickup Failed by Driver'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PICK_UP_FAILED_BY_DRIVER', 'Pickup Failed by Driver'))),
    color: 'primary'
  }, {
    value: 12,
    name: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver'))),
    color: 'primary'
  }, {
    value: 16,
    name: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer'))),
    color: 'primary'
  }, {
    value: 17,
    name: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer'))),
    color: 'primary'
  }];
  var changeOrderStatus = function changeOrderStatus(orderStatus) {
    if (orderStatus !== 'default' && orderStatus !== defaultValue) {
      if (!mutiOrdersChange) {
        handleUpdateOrderStatus({
          id: orderId,
          newStatus: orderStatus
        });
      } else {
        handleChangeMultiOrdersStatus(orderStatus);
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!isFilterView) {
      if (orderControl) {
        setFilteredOrderStatuses(orderStatuses);
      } else {
        var _filteredOrderStatuses = [];
        var extractOrderStatus = [];
        switch (deliveryType) {
          case 1:
            _filteredOrderStatuses = orderStatuses;
            if (searchValue) {
              var _filteredOrderStatuse;
              _filteredOrderStatuses = _toConsumableArray((_filteredOrderStatuse = _filteredOrderStatuses) === null || _filteredOrderStatuse === void 0 ? void 0 : _filteredOrderStatuse.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
          case 2:
            extractOrderStatus = orderStatuses.slice(0, 7);
            _filteredOrderStatuses = _toConsumableArray(extractOrderStatus);
            extractOrderStatus = orderStatuses.slice(10, 11);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(13, 15);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(20, 22);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(23, 26);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(30, 31);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            if (searchValue) {
              var _filteredOrderStatuse2;
              _filteredOrderStatuses = _toConsumableArray((_filteredOrderStatuse2 = _filteredOrderStatuses) === null || _filteredOrderStatuse2 === void 0 ? void 0 : _filteredOrderStatuse2.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
          case 3:
            extractOrderStatus = orderStatuses.slice(0, 3);
            _filteredOrderStatuses = _toConsumableArray(extractOrderStatus);
            extractOrderStatus = orderStatuses.slice(4, 7);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(10, 11);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(20, 22);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(23, 26);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(30, 31);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            if (searchValue) {
              var _filteredOrderStatuse3;
              _filteredOrderStatuses = _toConsumableArray((_filteredOrderStatuse3 = _filteredOrderStatuses) === null || _filteredOrderStatuse3 === void 0 ? void 0 : _filteredOrderStatuse3.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
          case 4:
            extractOrderStatus = orderStatuses.slice(0, 7);
            _filteredOrderStatuses = _toConsumableArray(extractOrderStatus);
            extractOrderStatus = orderStatuses.slice(10, 11);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(13, 15);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(20, 22);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(23, 26);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(30, 31);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            if (searchValue) {
              var _filteredOrderStatuse4;
              _filteredOrderStatuses = _toConsumableArray((_filteredOrderStatuse4 = _filteredOrderStatuses) === null || _filteredOrderStatuse4 === void 0 ? void 0 : _filteredOrderStatuse4.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
          case 5:
            extractOrderStatus = orderStatuses.slice(0, 7);
            _filteredOrderStatuses = _toConsumableArray(extractOrderStatus);
            extractOrderStatus = orderStatuses.slice(10, 11);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(13, 15);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(20, 22);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(23, 26);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(30, 31);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            if (searchValue) {
              var _filteredOrderStatuse5;
              _filteredOrderStatuses = _toConsumableArray((_filteredOrderStatuse5 = _filteredOrderStatuses) === null || _filteredOrderStatuse5 === void 0 ? void 0 : _filteredOrderStatuse5.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
          case 7:
            _filteredOrderStatuses = orderStatuses;
            if (searchValue) {
              var _filteredOrderStatuse6;
              _filteredOrderStatuses = _toConsumableArray((_filteredOrderStatuse6 = _filteredOrderStatuses) === null || _filteredOrderStatuse6 === void 0 ? void 0 : _filteredOrderStatuse6.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
          case 8:
            extractOrderStatus = orderStatuses.slice(0, 7);
            _filteredOrderStatuses = _toConsumableArray(extractOrderStatus);
            extractOrderStatus = orderStatuses.slice(10, 11);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(13, 15);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(20, 22);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(23, 26);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            extractOrderStatus = orderStatuses.slice(30, 31);
            _filteredOrderStatuses = [].concat(_toConsumableArray(_filteredOrderStatuses), _toConsumableArray(extractOrderStatus));
            if (searchValue) {
              var _filteredOrderStatuse7;
              _filteredOrderStatuses = _toConsumableArray((_filteredOrderStatuse7 = _filteredOrderStatuses) === null || _filteredOrderStatuse7 === void 0 ? void 0 : _filteredOrderStatuse7.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
          default:
            if (searchValue) {
              _filteredOrderStatuses = _toConsumableArray(orderStatuses === null || orderStatuses === void 0 ? void 0 : orderStatuses.filter(function (orderStatus) {
                return orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
              }));
            }
            setFilteredOrderStatuses(_filteredOrderStatuses);
            break;
        }
      }
    } else {
      var _filteredOrderStatuses2 = [];
      var _extractOrderStatus = [];
      _extractOrderStatus = orderStatuses.slice(2, 4);
      _filteredOrderStatuses2 = _toConsumableArray(_extractOrderStatus);
      _extractOrderStatus = orderStatuses.slice(5, 17);
      _filteredOrderStatuses2 = [].concat(_toConsumableArray(_filteredOrderStatuses2), _toConsumableArray(_extractOrderStatus));
      _extractOrderStatus = orderStatuses.slice(18, 21);
      _filteredOrderStatuses2 = [].concat(_toConsumableArray(_filteredOrderStatuses2), _toConsumableArray(_extractOrderStatus));
      _extractOrderStatus = orderStatuses.slice(22, 29);
      _filteredOrderStatuses2 = [].concat(_toConsumableArray(_filteredOrderStatuses2), _toConsumableArray(_extractOrderStatus));
      setFilteredOrderStatuses(_filteredOrderStatuses2);
    }
  }, [deliveryType, searchValue]);
  (0, _react.useEffect)(function () {
    setDefaultOptionValue(defaultValue);
  }, [defaultValue]);
  var filterChangeOrderStatus = function filterChangeOrderStatus(status) {
    handleChangeOrderStatus(status);
  };
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultFilterValues = _useState8[0],
    setDefaultFilterValues = _useState8[1];
  (0, _react.useEffect)(function () {
    if (isFilterView) {
      var _defaultFilterValues = _toConsumableArray(filterValues.statuses);
      setDefaultFilterValues(_defaultFilterValues);
    }
  }, [filterValues]);
  var handleChangeSearch = function handleChangeSearch(searchValue) {
    setSearchValue(searchValue);
  };
  if (isFilterView) {
    return /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      className: "order-status-multi-select",
      optionInnerMaxHeight: "50vh",
      placeholder: placeholder,
      defaultValue: defaultFilterValues,
      options: filteredOrderStatuses,
      onChange: function onChange(orderStatus) {
        return filterChangeOrderStatus(orderStatus);
      }
    });
  } else {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderStatusTypeSelectWrapper, null, isFirstSelect ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchBarPlaceholder: t('SEARCH', 'Search'),
      type: type,
      placeholder: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        noPadding: noPadding,
        isSubTitle: true
      }, /*#__PURE__*/_react.default.createElement("p", null, t('CHANGE_STATUS', 'Change Status'))),
      optionInnerMaxHeight: "50vh",
      noSelected: noSelected,
      defaultValue: defaultOptionValue,
      options: filteredOrderStatuses,
      onChange: function onChange(orderStatus) {
        return changeOrderStatus(orderStatus);
      },
      className: "orderStatus",
      isShowSearchBar: true,
      searchValue: searchValue,
      handleChangeSearch: handleChangeSearch,
      isDisabled: viewOnly
    }) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchBarPlaceholder: t('SEARCH', 'Search'),
      type: type,
      placeholder: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        noPadding: noPadding,
        isSubTitle: true
      }, /*#__PURE__*/_react.default.createElement("p", null, t('CHANGE_STATUS', 'Change Status'))),
      optionInnerMaxHeight: "50vh",
      noSelected: noSelected,
      defaultValue: defaultOptionValue,
      options: filteredOrderStatuses,
      searchValue: searchValue,
      onChange: function onChange(orderStatus) {
        return changeOrderStatus(orderStatus);
      },
      className: "orderStatus"
    }));
  }
};