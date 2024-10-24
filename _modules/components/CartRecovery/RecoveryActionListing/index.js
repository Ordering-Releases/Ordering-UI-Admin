"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecoveryActionListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _RecoveryActionHeader = require("../RecoveryActionHeader");
var _RecoveryActionList = require("../RecoveryActionList");
var _Shared = require("../../Shared");
var _RecoveryActionDetail = require("../RecoveryActionDetail");
var _RecoveryActionAdd = require("../RecoveryActionAdd");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var RecoveryActionListingUI = function RecoveryActionListingUI(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenDetail = _useState2[0],
    setIsOpenDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedAction = _useState4[0],
    setSelectedAction = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedActionId = _useState6[0],
    setSelectedActionId = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isAddMode = _useState8[0],
    setIsAddMode = _useState8[1];
  var handleCloseDetail = function handleCloseDetail() {
    setIsOpenDetail(false);
    setSelectedAction(null);
    setIsAddMode(false);
    (0, _utils.removeQueryToUrl)(['id', 'tab']);
  };
  var handleOpenDetail = function handleOpenDetail(action, isInitialRender) {
    setSelectedAction(action);
    setSelectedActionId(action === null || action === void 0 ? void 0 : action.id);
    setIsOpenDetail(true);
    if (!Object.keys(action || {}).length) {
      setIsAddMode(true);
      (0, _utils.removeQueryToUrl)(['id']);
      return;
    } else {
      setIsAddMode(false);
    }
    if (action && !isInitialRender) {
      (0, _utils.addQueryToUrl)({
        id: action.id
      });
    }
  };
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id) {
      setSelectedAction({});
      setSelectedActionId(Number(id));
      setIsOpenDetail(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.RecoveryActionsContainer, null, /*#__PURE__*/_react.default.createElement(_RecoveryActionHeader.RecoveryActionHeader, _extends({}, props, {
    handleOpenDetail: handleOpenDetail
  })), !isAddMode ? /*#__PURE__*/_react.default.createElement(_RecoveryActionList.RecoveryActionList, _extends({}, props, {
    handleOpenDetail: handleOpenDetail,
    selectedAction: selectedAction
  })) : /*#__PURE__*/_react.default.createElement(_RecoveryActionAdd.RecoveryActionAdd, _extends({}, props, {
    action: selectedAction,
    actionId: selectedActionId,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }))), isOpenDetail && !isAddMode && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: isOpenDetail,
    onClose: function onClose() {
      return handleCloseDetail();
    },
    defaultSideBarWidth: 550
  }, /*#__PURE__*/_react.default.createElement(_RecoveryActionDetail.RecoveryActionDetail, _extends({}, props, {
    action: selectedAction,
    actionId: selectedActionId,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }))));
};
var RecoveryActionListing = exports.RecoveryActionListing = function RecoveryActionListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var recoveryActionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: RecoveryActionListingUI,
    isSearchByName: true,
    isSearchByDescription: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.RecoveryActionListing, recoveryActionsProps);
};