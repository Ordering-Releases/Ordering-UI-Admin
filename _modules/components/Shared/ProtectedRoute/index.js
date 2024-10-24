"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtectedRoute = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _PageNotFound = require("../../PageNotFound");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProtectedRoute = exports.ProtectedRoute = function ProtectedRoute(props) {
  var path = props.path,
    allowedLevels = props.allowedLevels;
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: path
  }, auth ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, allowedLevels.includes(user === null || user === void 0 ? void 0 : user.level) ? props.children : /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null)) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: {
      pathname: '/login',
      state: {
        from: path
      }
    }
  }));
};