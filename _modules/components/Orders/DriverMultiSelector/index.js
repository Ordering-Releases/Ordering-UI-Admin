"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverMultiSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _MultiSelect = require("../../../styles/MultiSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverMultiSelectorUI = function DriverMultiSelectorUI(props) {
  var _dictionary$LOADING, _dictionary$LOADING2, _dictionary$SELECT_DR3;
  var driversList = props.driversList,
    defaultValue = props.defaultValue,
    small = props.small,
    padding = props.padding,
    handleChangeDriver = props.handleChangeDriver,
    filterValues = props.filterValues,
    useTextStyle = props.useTextStyle,
    hideChevronIcon = props.hideChevronIcon,
    andText = props.andText,
    textClassnames = props.textClassnames,
    pagination = props.pagination,
    handleChangePage = props.handleChangePage,
    handleChangePageSize = props.handleChangePageSize,
    useDriversByProps = props.useDriversByProps,
    setSearchValue = props.setSearchValue,
    searchValue = props.searchValue,
    optionsPosition = props.optionsPosition;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 1),
    dictionary = _useLanguage2[0].dictionary;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    driversMultiOptionList = _useState2[0],
    setDriversMultiOptionList = _useState2[1];
  var driversLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      small: small
    }, (_dictionary$LOADING = dictionary === null || dictionary === void 0 ? void 0 : dictionary.LOADING) !== null && _dictionary$LOADING !== void 0 ? _dictionary$LOADING : 'loading', "..."),
    showOnSelected: useTextStyle ? (_dictionary$LOADING2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.LOADING) !== null && _dictionary$LOADING2 !== void 0 ? _dictionary$LOADING2 : 'loading' : null
  }];
  (0, _react.useEffect)(function () {
    var _dictionary$SELECT_DR, _dictionary$SELECT_DR2;
    var _driversOptionList = [{
      value: 'default',
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        padding: "0px"
      }, /*#__PURE__*/_react.default.createElement("span", null, (_dictionary$SELECT_DR = dictionary === null || dictionary === void 0 ? void 0 : dictionary.SELECT_DRIVER) !== null && _dictionary$SELECT_DR !== void 0 ? _dictionary$SELECT_DR : 'Select driver')),
      color: 'primary',
      showDisable: true,
      showOnSelected: useTextStyle ? (_dictionary$SELECT_DR2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.SELECT_DRIVER) !== null && _dictionary$SELECT_DR2 !== void 0 ? _dictionary$SELECT_DR2 : 'Select driver' : null
    }];
    if (!driversList.loading) {
      var _driverList;
      if (searchValue) {
        _driverList = driversList.drivers.filter(function (driver) {
          return (driver.name + driver.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
      } else {
        _driverList = driversList.drivers;
      }
      var _driversOptionListTemp = _driverList.map(function (driver, i) {
        var _theme$images$icons, _dictionary$DRIVER;
        return {
          value: driver.id,
          showDisable: true,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
            small: small,
            padding: padding
          }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, {
            small: small,
            className: "driver-photo"
          }, /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
            bgimage: driver.photo || ((_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver),
            small: small
          })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverNameContainer, {
            className: "driver-info"
          }, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
            small: small
          }, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement(_styles.DriverText, {
            small: small
          }, (_dictionary$DRIVER = dictionary === null || dictionary === void 0 ? void 0 : dictionary.DRIVER) !== null && _dictionary$DRIVER !== void 0 ? _dictionary$DRIVER : 'Driver')))),
          showOnSelected: useTextStyle ? driver.name : null
        };
      });
      setDriversMultiOptionList(_driversOptionListTemp);
      var _iterator = _createForOfIteratorHelper(_driversOptionListTemp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _driversOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, [driversList, defaultValue, searchValue]);
  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, (_dictionary$SELECT_DR3 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.SELECT_DRIVER) !== null && _dictionary$SELECT_DR3 !== void 0 ? _dictionary$SELECT_DR3 : 'Select driver');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !driversList.loading || !useDriversByProps && pagination ? /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
    isLoading: driversList.loading,
    useLazyPagination: !useDriversByProps,
    searchBarIsNotLazyLoad: useDriversByProps,
    useTextStyle: useTextStyle,
    hideChevronIcon: hideChevronIcon,
    andText: andText,
    textClassnames: textClassnames,
    defaultValue: driversList.loading && !useDriversByProps ? 'loading' : filterValues.driverIds,
    placeholder: Placeholder,
    options: driversList.loading && !useDriversByProps ? driversLoading : driversMultiOptionList,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    optionsPosition: optionsPosition,
    onChange: function onChange(driver) {
      return handleChangeDriver(driver);
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchValue: searchValue,
    handleChangeSearch: function handleChangeSearch(val) {
      return setSearchValue(val);
    },
    pagination: pagination,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  }) : /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
    searchBarIsNotLazyLoad: useDriversByProps,
    useTextStyle: useTextStyle,
    hideChevronIcon: hideChevronIcon,
    andText: andText,
    textClassnames: textClassnames,
    defaultValue: "default",
    options: driversLoading,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    className: "driver-select",
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchValue: searchValue,
    handleChangeSearch: function handleChangeSearch(val) {
      return setSearchValue(val);
    }
  }));
};
var DriverMultiSelector = function DriverMultiSelector(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverMultiSelectorUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'pages'
    },
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DriversList, DriversControlProps));
};
exports.DriverMultiSelector = DriverMultiSelector;