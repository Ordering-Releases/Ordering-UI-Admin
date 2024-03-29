"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _Select = require("../../../styles/Select");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverSelectorUI = function DriverSelectorUI(props) {
  var _configs$manual_drive;
  var driverActionStatus = props.driverActionStatus,
    companyActionStatus = props.companyActionStatus,
    isFirstSelect = props.isFirstSelect,
    order = props.order,
    driversList = props.driversList,
    defaultValue = props.defaultValue,
    isPhoneView = props.isPhoneView,
    small = props.small,
    padding = props.padding,
    handleAssignDriver = props.handleAssignDriver,
    isTourOpen = props.isTourOpen,
    setCurrentTourStep = props.setCurrentTourStep,
    handleOpenMessages = props.handleOpenMessages,
    setCommentInfostate = props.setCommentInfostate;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOption = _useState2[0],
    setDefaultOption = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    driversOptionList = _useState4[0],
    setDriversOptionList = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var driversLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      small: small
    }, /*#__PURE__*/_react.default.createElement("span", null, t('LOADING', 'loading'), "..."))
  }];
  var showDriverAssignmentComment = (configs === null || configs === void 0 || (_configs$manual_drive = configs.manual_driver_assignment_comment_enabled) === null || _configs$manual_drive === void 0 ? void 0 : _configs$manual_drive.value) === '1';
  var getOption = function getOption(driver) {
    var _theme$images$icons;
    return {
      value: driver.id,
      disabled: !(driver !== null && driver !== void 0 && driver.enabled && driver !== null && driver !== void 0 && driver.available && !(driver !== null && driver !== void 0 && driver.busy)),
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        small: small,
        isPhoneView: isPhoneView,
        padding: padding
      }, /*#__PURE__*/_react.default.createElement(_styles.OptionInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, {
        small: small,
        className: "driver-photo"
      }, /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
        bgimage: driver.photo || ((_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver),
        small: small
      })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverNameContainer, {
        className: "driver-info"
      }, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
        small: small
      }, driver.name, " ", driver.lastname, " ", /*#__PURE__*/_react.default.createElement("span", {
        className: "assigned-orders"
      }, "(", driver === null || driver === void 0 ? void 0 : driver.assigned_orders_count, " ", t('ASSIGNED_ORDERS', 'Assigned orders'), ")"))))))
    };
  };
  (0, _react.useEffect)(function () {
    var _driversOptionList = [{
      value: 'default',
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        padding: "0px"
      }, /*#__PURE__*/_react.default.createElement("span", null, t('SELECT_DRIVER', 'Select driver'))),
      color: 'primary',
      disabled: true,
      showDisable: true
    }];
    _driversOptionList.push({
      value: 'remove',
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        isRemove: true
      }, /*#__PURE__*/_react.default.createElement("span", null, t('REMOVE_DRIVER', 'Remove assigned driver'))),
      disabled: defaultValue === 'default'
    });
    if (!driversList.loading) {
      var _driverList;
      if (searchValue) {
        _driverList = driversList.drivers.filter(function (driver) {
          return (driver.name + driver.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
      } else {
        _driverList = driversList.drivers;
      }
      var availableDrivers = _driverList.filter(function (driver) {
        return (driver === null || driver === void 0 ? void 0 : driver.enabled) && (driver === null || driver === void 0 ? void 0 : driver.available) && !(driver !== null && driver !== void 0 && driver.busy);
      });
      if (availableDrivers.length) {
        _driversOptionList.push({
          value: 'available',
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("span", null, t('AVAILABLE', 'Available'))),
          disabled: true
        });
        availableDrivers.forEach(function (driver) {
          _driversOptionList.push(getOption(driver));
        });
      }
      var busyDrivers = _driverList.filter(function (driver) {
        return (driver === null || driver === void 0 ? void 0 : driver.enabled) && (driver === null || driver === void 0 ? void 0 : driver.available) && (driver === null || driver === void 0 ? void 0 : driver.busy);
      });
      if (busyDrivers.length) {
        _driversOptionList.push({
          value: 'busy',
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("span", null, t('BUSY', 'Busy'))),
          disabled: true
        });
        busyDrivers.forEach(function (driver) {
          _driversOptionList.push(getOption(driver));
        });
      }
      var notAvailableDrivers = _driverList.filter(function (driver) {
        return (driver === null || driver === void 0 ? void 0 : driver.enabled) && !(driver !== null && driver !== void 0 && driver.available);
      });
      if (notAvailableDrivers.length) {
        _driversOptionList.push({
          value: 'not_available',
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement("span", null, t('NOT_AVAILABLE', 'Not available'))),
          disabled: true
        });
        notAvailableDrivers.forEach(function (driver) {
          _driversOptionList.push(getOption(driver));
        });
      }
    }
    setDriversOptionList(_driversOptionList);
  }, [driversList, defaultValue, searchValue]);
  (0, _react.useEffect)(function () {
    if (!(companyActionStatus !== null && companyActionStatus !== void 0 && companyActionStatus.error) && !(driverActionStatus !== null && driverActionStatus !== void 0 && driverActionStatus.error)) return;
    setAlertState({
      open: true,
      content: (companyActionStatus === null || companyActionStatus === void 0 ? void 0 : companyActionStatus.error) || (driverActionStatus === null || driverActionStatus === void 0 ? void 0 : driverActionStatus.error)
    });
  }, [companyActionStatus === null || companyActionStatus === void 0 ? void 0 : companyActionStatus.error, driverActionStatus === null || driverActionStatus === void 0 ? void 0 : driverActionStatus.error]);
  var changeDriver = function changeDriver(driverId) {
    if (driverId === 'default') return;
    if (driverId === 'remove') {
      driverId = null;
    }
    if (driverId && setCommentInfostate && showDriverAssignmentComment) {
      setCommentInfostate({
        open: true,
        driverId: driverId
      });
    } else {
      setCommentInfostate && setCommentInfostate({
        open: false,
        driverId: null
      });
      handleAssignDriver({
        orderId: order.id,
        driverId: driverId
      });
    }
    if (isTourOpen && setCurrentTourStep) {
      handleOpenMessages('chat');
      setTimeout(function () {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3);
      }, 50);
    }
  };
  (0, _react.useEffect)(function () {
    setDefaultOption(defaultValue);
  }, [defaultValue]);
  var handleSearch = function handleSearch(val) {
    setSearchValue(val);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, !driversList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isFirstSelect ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: defaultOption || 'default',
    options: driversOptionList,
    optionInnerMaxHeight: "200px",
    onChange: function onChange(driverId) {
      return changeDriver(driverId);
    },
    isShowSearchBar: true,
    searchBarPlaceholder: t('SEARCH', 'Search'),
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: searchValue,
    handleChangeSearch: handleSearch,
    className: "driver-select"
  }) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: defaultOption || 'default',
    options: driversOptionList,
    optionInnerMaxHeight: "200px",
    onChange: function onChange(driverId) {
      return changeDriver(driverId);
    },
    isShowSearchBar: true,
    searchBarIsNotLazyLoad: true,
    searchBarPlaceholder: t('SEARCH', 'Search'),
    searchBarIsCustomLayout: true,
    searchValue: searchValue,
    handleChangeSearch: handleSearch,
    className: "driver-select"
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: t('SELECT_DRIVER', 'Select driver'),
    defaultValue: "default",
    options: driversLoading,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "200px",
    className: "driver-select"
  })));
};
var DriverSelector = function DriverSelector(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DriversList, DriversControlProps));
};
exports.DriverSelector = DriverSelector;