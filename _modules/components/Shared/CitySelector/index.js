"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CitySelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _MultiSelect = require("../../../styles/MultiSelect");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CitySelectorUI = function CitySelectorUI(props) {
  var isAddMode = props.isAddMode,
    citiesList = props.citiesList,
    isDefault = props.isDefault,
    filterValues = props.filterValues,
    defaultValue = props.defaultValue,
    handleChangeCity = props.handleChangeCity,
    position = props.position,
    optionInnerMaxHeight = props.optionInnerMaxHeight;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cityOptions = _useState2[0],
    setCityOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, {
    isDefault: isDefault
  }, t('SELECT_CITY', 'Select City'));
  var _useState5 = (0, _react.useState)({
      currentPage: 1,
      pageSize: 5,
      totalItems: null,
      totalPages: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    pagination = _useState6[0],
    setPagination = _useState6[1];
  var handleChangePage = function handleChangePage(page) {
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      currentPage: page
    }));
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil((((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) - 1) * (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) + 1) / pageSize);
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      currentPage: expectedPage,
      pageSize: pageSize,
      totalPages: Math.ceil((cityOptions === null || cityOptions === void 0 ? void 0 : cityOptions.length) / pageSize)
    }));
  };
  (0, _react.useEffect)(function () {
    if (citiesList !== null && citiesList !== void 0 && citiesList.loading) return;
    var _cityOptions = citiesList === null || citiesList === void 0 ? void 0 : citiesList.cities.filter(function (option) {
      return option === null || option === void 0 ? void 0 : option.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }).map(function (city) {
      return {
        value: city.id,
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
          noPadding: true,
          isDefault: isDefault
        }, city === null || city === void 0 ? void 0 : city.name),
        showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, {
          isDefault: isDefault
        }, city === null || city === void 0 ? void 0 : city.name)
      };
    });
    setCityOptions(_cityOptions);
  }, [citiesList, isDefault, searchValue]);
  (0, _react.useEffect)(function () {
    if (!isAddMode) return;
    if (cityOptions.length === 1) {
      var _citiesList$cities$;
      handleChangeCity(citiesList === null || citiesList === void 0 || (_citiesList$cities$ = citiesList.cities[0]) === null || _citiesList$cities$ === void 0 ? void 0 : _citiesList$cities$.id);
    }
  }, [cityOptions, isAddMode]);
  (0, _react.useEffect)(function () {
    if (cityOptions !== null && cityOptions !== void 0 && cityOptions.length) {
      setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
        totalItems: cityOptions === null || cityOptions === void 0 ? void 0 : cityOptions.length,
        totalPages: Math.ceil((cityOptions === null || cityOptions === void 0 ? void 0 : cityOptions.length) / 10)
      }));
    }
  }, [cityOptions]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, citiesList !== null && citiesList !== void 0 && citiesList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    style: {
      height: '100%',
      lineHeight: 'normal'
    }
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isDefault ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    position: position,
    optionInnerMaxHeight: optionInnerMaxHeight,
    placeholder: placeholder,
    defaultValue: defaultValue,
    options: cityOptions,
    onChange: function onChange(city) {
      return handleChangeCity(city);
    }
  }) : /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
    placeholder: placeholder,
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds,
    options: cityOptions,
    onChange: function onChange(city) {
      return handleChangeCity(city);
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: searchValue,
    handleChangeSearch: function handleChangeSearch(val) {
      return setSearchValue(val);
    },
    isHidePagecontrol: true,
    pagination: pagination,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  })));
};
var CitySelector = exports.CitySelector = function CitySelector(props) {
  var cityListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CitySelectorUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.CityList, cityListProps);
};