"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersHeaderFilterGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _DriversGroupTypeSelector = require("../DriversGroupTypeSelector");
var _DriverMultiSelector = require("../DriverMultiSelector");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _FilterValuesContext = require("../../../contexts/FilterValuesContext");
var _Shared = require("../../Shared");
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
var OrdersHeaderFilterGroupUI = function OrdersHeaderFilterGroupUI(props) {
  var _configs$filter_order, _dictionary$EXTERNAL_;
  var filterValues = props.filterValues,
    searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleChangeExternalId = props.handleChangeExternalId,
    handleChangeGroupUnassigned = props.handleChangeGroupUnassigned,
    handleChangeSearch = props.handleChangeSearch,
    isSelectedOrders = props.isSelectedOrders;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 1),
    dictionary = _useLanguage2[0].dictionary;
  var wrapperRef = (0, _react.useRef)(null);
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    _useConfig2$ = _useConfig2[0],
    configs = _useConfig2$.configs,
    loading = _useConfig2$.loading;
  var _useState = (0, _react.useState)({
      width: null,
      height: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    wrapperSize = _useState2[0],
    setWrapperSize = _useState2[1];
  var configFilter = (configs === null || configs === void 0 || (_configs$filter_order = configs.filter_order_options) === null || _configs$filter_order === void 0 ? void 0 : _configs$filter_order.value.split('|').map(function (value) {
    return value;
  })) || [];
  (0, _react.useEffect)(function () {
    var handleResize = function handleResize() {
      if (wrapperRef !== null && wrapperRef !== void 0 && wrapperRef.current) {
        var _wrapperRef$current, _wrapperRef$current2;
        var divWidth = wrapperRef === null || wrapperRef === void 0 || (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.offsetWidth;
        var divHeight = wrapperRef === null || wrapperRef === void 0 || (_wrapperRef$current2 = wrapperRef.current) === null || _wrapperRef$current2 === void 0 ? void 0 : _wrapperRef$current2.offsetHeight;
        setWrapperSize({
          width: divWidth,
          height: divHeight
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (Object.keys(filterValues).length > 0) {
      handleChangeFilterValues(filterValues);
    }
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, {
    ref: wrapperRef,
    wrapperWidth: wrapperSize.width,
    isSelectedOrders: isSelectedOrders
  }, !loading && configFilter.includes('external_id') && /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: (_dictionary$EXTERNAL_ = dictionary === null || dictionary === void 0 ? void 0 : dictionary.EXTERNAL_ID) !== null && _dictionary$EXTERNAL_ !== void 0 ? _dictionary$EXTERNAL_ : 'External Id',
    onChange: handleChangeExternalId,
    search: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId) || '',
    isCustomLayout: true,
    hideSearchIcon: true,
    lazyLoad: true,
    CustomInput: _styles.Input,
    onSearch: function onSearch(value) {
      return handleChangeExternalId({
        target: {
          value: value
        }
      });
    },
    customClass: "external_id"
  }), !loading && configFilter.includes('driver') && /*#__PURE__*/_react.default.createElement(_DriverMultiSelector.DriverMultiSelector, {
    drivers: driversList.drivers,
    filterValues: filterValues,
    handleChangeDriver: handleChangeDriver
  }), !loading && configFilter.includes('driver_group_general') &&
  /*#__PURE__*/
  // <DriversGroupTypeSelector
  //   driverGroupList={driverGroupList}
  //   handleChangeGroup={handleChangeGroupUnassigned}
  //   filterValues={filterValues.groupTypesUnassigned}
  //   title={dictionary?.DRIVER_GROUP_NOT_ASSIGNED ?? 'Driver group (general)'}
  // />
  _react.default.createElement(_Shared.SearchBar, {
    customClass: "external_id",
    isCustomLayout: true,
    hideSearchIcon: true,
    lazyLoad: true,
    onSearch: handleChangeSearch,
    search: searchValue || '',
    placeholder: (dictionary === null || dictionary === void 0 ? void 0 : dictionary.SEARCH_BY_STORE_NAME) || 'Store name'
  })));
};
var OrdersHeaderFilterGroup = function OrdersHeaderFilterGroup(props) {
  var _useFilterValues = (0, _FilterValuesContext.useFilterValues)(),
    _useFilterValues2 = _slicedToArray(_useFilterValues, 2),
    filterValues = _useFilterValues2[0],
    handleFilterValues = _useFilterValues2[1].handleFilterValues;
  var FilterControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersHeaderFilterGroupUI,
    driverGroupList: props.driverGroupList,
    filterValues: filterValues,
    setFilterValues: handleFilterValues
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.OrdersFilter, FilterControlProps));
};
exports.OrdersHeaderFilterGroup = OrdersHeaderFilterGroup;