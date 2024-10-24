"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _ProfessionalList = require("../ProfessionalList");
var _UsersListingHeader = require("../UsersListingHeader");
var _UserActiveStateFilter = require("../UserActiveStateFilter");
var _UserDetailsLateralBar = require("../UserDetailsLateralBar");
var _ProfessionalAddForm = require("../ProfessionalAddForm");
var _Shared = require("../../Shared");
var _UsersDeleteButton = require("../UsersDeleteButton");
var _UsersExportCSV = require("../UsersExportCSV");
var _styles = require("../../../styles");
var _OccupationsFilter = require("../OccupationsFilter");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
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
var ProfessionalListingUI = function ProfessionalListingUI(props) {
  var _configs$appointments;
  var defaultUserTypesSelected = props.defaultUserTypesSelected,
    disabledActiveStateCondition = props.disabledActiveStateCondition,
    headerTitle = props.headerTitle,
    usersList = props.usersList,
    paginationProps = props.paginationProps,
    getUsers = props.getUsers,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    userTypesSelected = props.userTypesSelected,
    paginationDetail = props.paginationDetail,
    selectedUserActiveState = props.selectedUserActiveState,
    handleChangeUserActiveState = props.handleChangeUserActiveState,
    handleChangeActiveUser = props.handleChangeActiveUser,
    selectedUsers = props.selectedUsers,
    handleSelectedUsers = props.handleSelectedUsers,
    deleteUsersActionState = props.deleteUsersActionState,
    handleDeleteSeveralUsers = props.handleDeleteSeveralUsers,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleSuccessAddUser = props.handleSuccessAddUser,
    handleSuccessDeleteUser = props.handleSuccessDeleteUser,
    occupationsState = props.occupationsState,
    selectedOccupation = props.selectedOccupation,
    handleSelectOccupation = props.handleSelectOccupation,
    setSelectedUsers = props.setSelectedUsers,
    handleChangeMultiFilterValues = props.handleChangeMultiFilterValues,
    multiFilterValues = props.multiFilterValues,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    queryId = _useState2[0],
    setQueryId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpenUserDetails = _useState4[0],
    setIsOpenUserDetails = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    openUser = _useState6[0],
    setOpenUser = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openUserAddForm = _useState8[0],
    setOpenUserAddForm = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var isEnabledAppointmentsFeature = configs === null || configs === void 0 || (_configs$appointments = configs.appointments) === null || _configs$appointments === void 0 ? void 0 : _configs$appointments.value;
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenUserDetails(false);
    setOpenUser(null);
    setQueryId(null);
    (0, _utils.removeQueryToUrl)(['id', 'tab']);
  };
  var handleOpenUserDetails = function handleOpenUserDetails(user) {
    (0, _utils.addQueryToUrl)({
      id: user === null || user === void 0 ? void 0 : user.id
    });
    setOpenUser(user);
    setOpenUserAddForm(false);
    setIsOpenUserDetails(true);
  };
  var handleOpenUserAddForm = function handleOpenUserAddForm() {
    var id = query.get('id');
    if (id) {
      handleBackRedirect();
    }
    setIsOpenUserDetails(false);
    setOpenUserAddForm(true);
  };
  (0, _react.useEffect)(function () {
    if (usersList.loading) return;
    var id = query.get('id');
    if (id === null) setIsOpenUserDetails(false);else {
      var user = usersList.users.find(function (_user) {
        return _user.id === parseInt(id);
      });
      if (user) {
        setOpenUser(user);
      } else {
        setQueryId(parseInt(id));
      }
      setIsOpenUserDetails(true);
    }
  }, [usersList]);
  (0, _react.useEffect)(function () {
    if (!(usersList !== null && usersList !== void 0 && usersList.error)) return;
    setAlertState({
      open: true,
      content: usersList === null || usersList === void 0 ? void 0 : usersList.error
    });
  }, [usersList === null || usersList === void 0 ? void 0 : usersList.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersListingContainer, null, isEnabledAppointmentsFeature ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UsersListingHeader.UsersListingHeader, {
    isProfessionals: true,
    title: headerTitle,
    searchValue: searchValue,
    onSearch: onSearch,
    handleChangeMultiFilterValues: handleChangeMultiFilterValues,
    multiFilterValues: multiFilterValues
  }), /*#__PURE__*/_react.default.createElement(_UserActiveStateFilter.UserActiveStateFilter, {
    selectedUserActiveState: selectedUserActiveState,
    handleChangeUserActiveState: handleChangeUserActiveState
  }), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_OccupationsFilter.OccupationsFilter, {
    occupationsState: occupationsState,
    selectedOccupation: selectedOccupation,
    handleSelectOccupation: handleSelectOccupation
  }), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtonsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenUserAddForm();
    }
  }, t('ADD_PROFESSIONAL', 'Add professional')), /*#__PURE__*/_react.default.createElement(_UsersExportCSV.UsersExportCSV, {
    defaultUserTypesSelected: defaultUserTypesSelected,
    disabledActiveStateCondition: disabledActiveStateCondition,
    userTypesSelected: userTypesSelected,
    selectedUserActiveState: selectedUserActiveState
  }), /*#__PURE__*/_react.default.createElement(_UsersDeleteButton.UsersDeleteButton, {
    selectedUsers: selectedUsers,
    deleteUsersActionState: deleteUsersActionState,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers
  }))), /*#__PURE__*/_react.default.createElement(_ProfessionalList.ProfessionalList, {
    usersList: usersList,
    getUsers: getUsers,
    paginationProps: paginationProps,
    paginationDetail: paginationDetail,
    handleChangeActiveUser: handleChangeActiveUser,
    selectedUsers: selectedUsers,
    handleSelectedUsers: handleSelectedUsers,
    userDetailsId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    handleOpenUserDetails: handleOpenUserDetails,
    handleOpenUserAddForm: handleOpenUserAddForm,
    setSelectedUsers: setSelectedUsers,
    isUseQuery: isUseQuery
  })) : /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('APPOINTMENTS_FEATURE_NOT_ENABLED', 'The appointments feature is not enabled.'))), isOpenUserDetails && /*#__PURE__*/_react.default.createElement(_UserDetailsLateralBar.UserDetailsLateralBar, {
    isProfessionals: true,
    open: isOpenUserDetails,
    user: openUser,
    userId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    occupations: occupationsState.occupations,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessDeleteUser: handleSuccessDeleteUser,
    handleChangeActiveUser: handleChangeActiveUser
  }), openUserAddForm && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "user_add_form",
    open: openUserAddForm,
    onClose: function onClose() {
      return setOpenUserAddForm(false);
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalAddForm.ProfessionalAddForm, {
    occupations: occupationsState.occupations,
    handleSuccessAdd: handleSuccessAddUser,
    onClose: function onClose() {
      return setOpenUserAddForm(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var ProfessionalListing = exports.ProfessionalListing = function ProfessionalListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultUserActiveState = query.get('enabled') !== 'inactive';
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var usersListingProps = _objectSpread(_objectSpread({}, props), {}, {
    defaultUserActiveState: defaultUserActiveState,
    isProfessional: true,
    UIComponent: ProfessionalListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.UsersList, usersListingProps);
};