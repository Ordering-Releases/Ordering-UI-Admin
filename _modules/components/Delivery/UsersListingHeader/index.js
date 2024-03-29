"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersListingHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _Users = require("../../Users");
var _reactBootstrap = require("react-bootstrap");
var _styles2 = require("./styles");
var _TiWarningOutline = _interopRequireDefault(require("@meronex/icons/ti/TiWarningOutline"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UsersListingHeader = function UsersListingHeader(props) {
  var defaultUserTypesSelected = props.defaultUserTypesSelected,
    disabledActiveStateCondition = props.disabledActiveStateCondition,
    title = props.title,
    selectedUsers = props.selectedUsers,
    deleteUsersActionState = props.deleteUsersActionState,
    handleDeleteSeveralUsers = props.handleDeleteSeveralUsers,
    userTypesSelected = props.userTypesSelected,
    selectedUserActiveState = props.selectedUserActiveState,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    handleOpenUserAddForm = props.handleOpenUserAddForm,
    isDriversPage = props.isDriversPage,
    isDriversManagersPage = props.isDriversManagersPage,
    handleOpenTour = props.handleOpenTour,
    actionDisabled = props.actionDisabled;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var handleClearFilters = function handleClearFilters() {
    if (searchValue) onSearch('');
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, title), (isDriversPage || isDriversManagersPage) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleOpenTour();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ActionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenUserAddForm();
    },
    "data-tour": "tour_add",
    disabled: actionDisabled
  }, isDriversPage ? t('ADD_DRIVER', 'Add driver') : isDriversManagersPage ? t('ADD_DRIVER_MANAGER', 'Add driver manager') : t('ADD_USER', 'Add user')), /*#__PURE__*/_react.default.createElement(_Users.UsersExportCSV, {
    defaultUserTypesSelected: defaultUserTypesSelected,
    disabledActiveStateCondition: disabledActiveStateCondition,
    userTypesSelected: userTypesSelected,
    selectedUserActiveState: selectedUserActiveState,
    disabled: actionDisabled
  }), /*#__PURE__*/_react.default.createElement(_Users.UsersDeleteButton, {
    selectedUsers: selectedUsers,
    deleteUsersActionState: deleteUsersActionState,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers,
    disabled: actionDisabled
  }), !!searchValue && /*#__PURE__*/_react.default.createElement(_styles2.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('WARNING_FILTER_APPLIED', 'Filters applied. You may miss new orders.')), /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleClearFilters();
    }
  }, t('CLEAR_FILTERS', 'Clear filters'))), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    isCustomLayout: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  })));
};
exports.UsersListingHeader = UsersListingHeader;