"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverGroupDeliveryZoneList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _DriversGroupsDeliveryZoneDetails = require("../DriversGroupsDeliveryZoneDetails");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var DriverGroupDeliveryZoneList = exports.DriverGroupDeliveryZoneList = function DriverGroupDeliveryZoneList(props) {
  var _zoneList$zones;
  var drivergroup = props.drivergroup,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    handleSuccessUpdate = props.handleSuccessUpdate,
    zoneListState = props.zoneListState,
    handleChangeZoneState = props.handleChangeZoneState,
    handleChangeAllZoneState = props.handleChangeAllZoneState,
    handleParentSidebarMove = props.handleParentSidebarMove,
    zoneList = props.zoneList,
    setZoneList = props.setZoneList,
    setIsOpenDetails = props.setIsOpenDetails,
    isOpenDetails = props.isOpenDetails;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    curZone = _useState2[0],
    setCurZone = _useState2[1];
  var handleCloseOption = function handleCloseOption() {
    setIsOpenDetails(false);
    setIsExtendExtraOpen(false);
    setCurZone(null);
    handleParentSidebarMove(0);
  };
  var handleOpenZone = function handleOpenZone(e, zone) {
    var isInvalid = e.target.closest('.zone-enabled');
    if (isInvalid) return;
    setCurZone(zone);
    handleParentSidebarMove(500);
    setIsExtendExtraOpen(true);
    setIsOpenDetails(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ZoneContainer, null, zoneList.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.DeliveryZonesTableWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckSkeleteon, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: "100%",
      height: 18
    })));
  }) : /*#__PURE__*/_react.default.createElement(_styles2.DeliveryZonesTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: zoneListState === null || zoneListState === void 0 ? void 0 : zoneListState.isCheckAll,
    onChange: function onChange(e) {
      return handleChangeAllZoneState(e.target.checked);
    }
  }))), /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", null, t('MINIMUM', 'Minimum')), /*#__PURE__*/_react.default.createElement("th", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement("th", null))), zoneList === null || zoneList === void 0 || (_zoneList$zones = zoneList.zones) === null || _zoneList$zones === void 0 || (_zoneList$zones = _zoneList$zones.filter(function (zone) {
    return (zone === null || zone === void 0 ? void 0 : zone.type) !== 3;
  })) === null || _zoneList$zones === void 0 ? void 0 : _zoneList$zones.map(function (zone) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ZoneTbody, {
      key: zone === null || zone === void 0 ? void 0 : zone.id,
      active: (zone === null || zone === void 0 ? void 0 : zone.id) === (curZone === null || curZone === void 0 ? void 0 : curZone.id),
      onClick: function onClick(e) {
        return handleOpenZone(e, zone);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "zone-enabled"
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: !!(zoneListState !== null && zoneListState !== void 0 && zoneListState.changes[zone.id]),
      onChange: function onChange(e) {
        var _e$target;
        return handleChangeZoneState(zone === null || zone === void 0 ? void 0 : zone.id, e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.name), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.minimum), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.price), /*#__PURE__*/_react.default.createElement("td", {
      className: "arrow"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))));
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddDeliveryZoneButton, {
    onClick: function onClick(e) {
      return handleOpenZone(e, null);
    }
  }, t('ADD_DELIVERY_ZONE', 'Add delivery zone'))), isOpenDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: isOpenDetails,
    onClose: function onClose() {
      return handleCloseOption();
    }
  }, /*#__PURE__*/_react.default.createElement(_DriversGroupsDeliveryZoneDetails.DriverGroupDeliveryZoneDetails, {
    zone: curZone,
    setZoneList: setZoneList,
    drivergroup: drivergroup,
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleSuccessUpdate: handleSuccessUpdate,
    driverGroupsZones: zoneList
  })));
};