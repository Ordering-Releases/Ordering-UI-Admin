"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;
var _react = _interopRequireWildcard(require("react"));
var _EnChevronDown = _interopRequireDefault(require("@meronex/icons/en/EnChevronDown"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _Buttons = require("../Buttons");
var _Shared = require("../../components/Shared");
var _Selects = require("../Selects");
var _styles = require("./styles");
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
var MultiSelect = exports.MultiSelect = function MultiSelect(props) {
  var placeholder = props.placeholder,
    options = props.options,
    onChange = props.onChange,
    defaultValue = props.defaultValue,
    className = props.className,
    isShowSearchBar = props.isShowSearchBar,
    searchBarIsNotLazyLoad = props.searchBarIsNotLazyLoad,
    searchBarPlaceholder = props.searchBarPlaceholder,
    searchBarIsCustomLayout = props.searchBarIsCustomLayout,
    searchValue = props.searchValue,
    handleChangeSearch = props.handleChangeSearch,
    useTextStyle = props.useTextStyle,
    textClassnames = props.textClassnames,
    hideChevronIcon = props.hideChevronIcon,
    andText = props.andText,
    pagination = props.pagination,
    handleChangePage = props.handleChangePage,
    handleChangePageSize = props.handleChangePageSize,
    useLazyPagination = props.useLazyPagination,
    isLoading = props.isLoading,
    optionsPosition = props.optionsPosition,
    isHidePagecontrol = props.isHidePagecontrol;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    values = _useState4[0],
    setValues = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOptions = _useState6[0],
    setSelectedOptions = _useState6[1];
  var dropdownReference = (0, _react.useRef)();
  var handleSelectClick = function handleSelectClick(e) {
    var isInvalid = e.target.closest('.remove_option');
    if (isInvalid) return;
    setOpen(!open);
  };
  var closeSelect = function closeSelect(e) {
    if (open && !isLoading) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        setOpen(false);
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (isShowSearchBar && searchValue) return;
    var _defaultOption = options === null || options === void 0 ? void 0 : options.filter(function (option) {
      return defaultValue.includes(option.value);
    });
    if (!(useLazyPagination && pagination)) {
      setSelectedOptions(_defaultOption);
    }
    setValues(defaultValue);
  }, [defaultValue, options, searchValue]);
  (0, _react.useEffect)(function () {
    if (!open) {
      handleChangeSearch && handleChangeSearch('');
      return;
    }
    document.addEventListener('click', closeSelect);
    return function () {
      return document.removeEventListener('click', closeSelect);
    };
  }, [open]);
  var handlerChangePage = function handlerChangePage(page) {
    setOpen(true);
    handleChangePage(page);
  };
  var handleSelectOption = function handleSelectOption(option) {
    if (option.value === null || option.value === 'default') return;
    var _selectedOptions = _toConsumableArray(selectedOptions);
    var _values = _toConsumableArray(values);
    if (!_values.includes(option.value)) {
      _values.push(option.value);
      _selectedOptions.push(option);
    } else {
      for (var i = 0; i < _values.length; i++) {
        if (_values[i] === option.value) {
          _values.splice(i, 1);
          _selectedOptions.splice(i, 1);
          i--;
        }
      }
    }
    setSelectedOptions(_selectedOptions);
    setValues(_values);
    onChange && onChange(option.value);
  };
  var optionsTextFormatted = function optionsTextFormatted(selectedOption, index) {
    if (index <= 2) {
      return "".concat(selectedOption.showOnSelected || selectedOption.content).concat(index + 1 !== (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) && index <= 2 ? ', ' : ' ');
    }
    if (index + 1 === (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) && (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) >= 4) {
      return "".concat(andText || 'And', " ").concat(index - 2, " +");
    }
    return null;
  };
  var filterFunction = function filterFunction(_, index) {
    if (!pagination || useLazyPagination) return true;
    var validation = (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === 1 ? index < pagination.pageSize * pagination.currentPage : index >= pagination.pageSize * (pagination.currentPage - 1) && index < pagination.pageSize * pagination.currentPage;
    return validation;
  };
  return /*#__PURE__*/_react.default.createElement(_Selects.Select, {
    useTextStyle: useTextStyle,
    className: className || 'multi-select'
  }, selectedOptions.length === 0 ? /*#__PURE__*/_react.default.createElement(_Selects.Selected, {
    useTextStyle: useTextStyle,
    onClick: function onClick(e) {
      return handleSelectClick(e);
    }
  }, useTextStyle ? /*#__PURE__*/_react.default.createElement(_Selects.Header, null, /*#__PURE__*/_react.default.createElement(_styles.TextFormatted, {
    className: textClassnames
  }, placeholder || '')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, placeholder || ''), !hideChevronIcon && /*#__PURE__*/_react.default.createElement(_Selects.Chevron, null, /*#__PURE__*/_react.default.createElement(_EnChevronDown.default, null))) : /*#__PURE__*/_react.default.createElement(_Selects.Selected, {
    onClick: function onClick(e) {
      return handleSelectClick(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_Selects.Header, {
    useTextStyle: useTextStyle
  }, selectedOptions.map(function (selectedOption, index) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: selectedOption.value
    }, useTextStyle ? /*#__PURE__*/_react.default.createElement(_styles.TextFormatted, {
      className: textClassnames,
      primary: true
    }, optionsTextFormatted(selectedOption, index)) : /*#__PURE__*/_react.default.createElement(_Selects.MultiSelectOption, null, selectedOption.showOnSelected || selectedOption.content, (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) !== 'default' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      circle: true,
      outline: true,
      color: "primary",
      type: "reset",
      className: "remove_option",
      onClick: function onClick() {
        return onChange && onChange(selectedOption.value);
      }
    }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null))));
  })), !hideChevronIcon && /*#__PURE__*/_react.default.createElement(_Selects.Chevron, null, /*#__PURE__*/_react.default.createElement(_EnChevronDown.default, null))), open && options && /*#__PURE__*/_react.default.createElement(_Selects.Options, {
    isAbsolute: true,
    position: optionsPosition !== null && optionsPosition !== void 0 ? optionsPosition : 'right',
    ref: dropdownReference,
    minWidth: "330px"
  }, isShowSearchBar && /*#__PURE__*/_react.default.createElement(_Selects.SearchBarWrapper, {
    className: "search-bar-container"
  }, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: !searchBarIsNotLazyLoad,
    isCustomLayout: searchBarIsCustomLayout,
    search: searchValue,
    onSearch: handleChangeSearch,
    placeholder: searchBarPlaceholder || ''
  })), /*#__PURE__*/_react.default.createElement(_Selects.OptionsInner, {
    optionInnerMargin: props.optionInnerMargin,
    optionInnerMaxHeight: props.optionInnerMaxHeight
  }, options.filter(filterFunction).map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_Selects.MultiOption, {
      key: i,
      color: option.color,
      onClick: function onClick() {
        return handleSelectOption(option);
      },
      optionBottomBorder: props.optionBottomBorder
    }, option.value !== 'default' && /*#__PURE__*/_react.default.createElement(_styles.CheckBox, null, values.includes(option.value) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), option.content);
  })), pagination && handleChangePageSize && handleChangePage && /*#__PURE__*/_react.default.createElement(_styles.PaginationWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.currentPage,
    totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.totalPages,
    handleChangePage: handlerChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: pagination === null || pagination === void 0 ? void 0 : pagination.pageSize,
    isHidePagecontrol: isHidePagecontrol
  }))));
};