"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverMultiSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _MultiSelect = require("../../../styles/MultiSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var DriverMultiSelector = exports.DriverMultiSelector = function DriverMultiSelector(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverMultiSelectorUI,
    disableDriverLocationsSockets: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'pages'
    },
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DriversList, DriversControlProps));
};