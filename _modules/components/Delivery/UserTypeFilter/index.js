"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTypeFilterUI = exports.UserTypeFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var UserTypeFilterUI = exports.UserTypeFilterUI = function UserTypeFilterUI(props) {
  var handleChangeUserType = props.handleChangeUserType,
    userTypes = props.userTypes,
    currentTypesSelected = props.currentTypesSelected;
  var handleChangeUserRole = function handleChangeUserRole(type) {
    handleChangeUserType && handleChangeUserType(type);
  };
  var checkIsActive = function checkIsActive(subTypes) {
    var isSame = subTypes.length === currentTypesSelected.length && subTypes.every(function (element, index) {
      return element === currentTypesSelected[index];
    });
    return isSame;
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.UserTypeFilterContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, userTypes && userTypes.length > 0 && userTypes.map(function (type) {
    return /*#__PURE__*/_react.default.createElement(_styles.Button, {
      key: type.id,
      color: checkIsActive(type.value) ? 'primary' : 'secundaryDark',
      onClick: function onClick() {
        return handleChangeUserRole(type.value);
      }
    }, type.title, checkIsActive(type.value) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  })));
};
var UserTypeFilter = exports.UserTypeFilter = function UserTypeFilter(props) {
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var userTypeFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserTypeFilterUI,
    userTypes: props.userTypes || [{
      id: 1,
      title: t('ALL', 'All'),
      value: [0, 1, 2]
    }, {
      id: 2,
      title: t('BUSINESS_OWNER', 'Business owner'),
      value: [2]
    }, {
      id: 3,
      title: t('CITY_MANAGER', 'City manager'),
      value: [1]
    }, {
      id: 4,
      title: t('ADMINISTRATORS', 'Administrators'),
      value: [0]
    }],
    defaultUserTypes: props.defaultUserTypes || [0, 1, 2],
    onChangeUserType: props.handleChangeUserType
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.UserTypeFilter, userTypeFilterProps);
};