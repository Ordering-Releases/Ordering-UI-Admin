"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversDashboard = void 0;
var _react = _interopRequireDefault(require("react"));
var _DriversLocation = require("../DriversLocation");
var _DriversList = require("../DriversList");
var _DriversOnlineOfflineFilter = require("../DriversOnlineOfflineFilter");
var _DriversBusyStatusFilter = require("../DriversBusyStatusFilter");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var DriversDashboard = exports.DriversDashboard = function DriversDashboard(props) {
  var driversList = props.driversList,
    onlineDrivers = props.onlineDrivers,
    offlineDrivers = props.offlineDrivers,
    driversIsOnline = props.driversIsOnline,
    driversSubfilter = props.driversSubfilter,
    selectedDriver = props.selectedDriver,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeDriverIsOnline = props.handleChangeDriverIsOnline,
    handleChangeDriversSubFilter = props.handleChangeDriversSubFilter,
    handleOpenDriverOrders = props.handleOpenDriverOrders,
    assignedOrders = props.assignedOrders;
  var numberOfonlineDrivers = onlineDrivers.length;
  var numberOfofflineDrivers = offlineDrivers.length;
  var numberOfbusyDrivers = driversIsOnline ? onlineDrivers.filter(function (ele) {
    return ele.busy;
  }).length : offlineDrivers.filter(function (ele) {
    return ele.busy;
  }).length;
  var numberOfnotBusyDrivers = driversIsOnline ? onlineDrivers.filter(function (ele) {
    return !ele.busy;
  }).length : offlineDrivers.filter(function (ele) {
    return !ele.busy;
  }).length;
  return /*#__PURE__*/_react.default.createElement(_styles.DriversDashboardContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_DriversOnlineOfflineFilter.DriversOnlineOfflineFilter, {
    driversIsOnline: driversIsOnline,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline,
    numberOfonlineDrivers: numberOfonlineDrivers,
    numberOfofflineDrivers: numberOfofflineDrivers
  }), /*#__PURE__*/_react.default.createElement(_DriversBusyStatusFilter.DriversBusyStatusFilter, {
    driversSubfilter: driversSubfilter,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter,
    numberOfbusyDrivers: numberOfbusyDrivers,
    numberOfnotBusyDrivers: numberOfnotBusyDrivers
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversList, {
    id: "driversList"
  }, /*#__PURE__*/_react.default.createElement(_DriversList.DriversList, {
    loading: driversList.loading,
    driversIsOnline: driversIsOnline,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    selectedDriver: selectedDriver,
    handleChangeDriver: handleChangeDriver,
    handleOpenDriverOrders: handleOpenDriverOrders
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversLocation, null, /*#__PURE__*/_react.default.createElement(_DriversLocation.DriversLocation, {
    driversIsOnline: driversIsOnline,
    selectedDriver: selectedDriver,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    driversList: driversList,
    assignedOrders: assignedOrders
  })));
};