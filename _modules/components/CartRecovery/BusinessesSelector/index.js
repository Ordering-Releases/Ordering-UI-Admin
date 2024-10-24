"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessesSelector = exports.BusinessesSelector = function BusinessesSelector(props) {
  var filterValues = props.filterValues,
    businessesList = props.businessesList,
    handleChangeBusinesses = props.handleChangeBusinesses;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    businessTypes = _useState2[0],
    setBusinessTypes = _useState2[1];
  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles2.PlaceholderTitle, null, t('SELECT_BUSINESS', 'Select business'));
  var businessesLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('BUSINESSES_LOADING', 'Businesses loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _businessesOptionList = [];
    if (!businessesList.loading) {
      var _businessesOption = businessesList.businesses.map(function (business) {
        return {
          value: business.id,
          content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessImage, null, business.logo && /*#__PURE__*/_react.default.createElement(_styles2.BusinessImage, {
            bgimage: business.logo
          })), /*#__PURE__*/_react.default.createElement(_styles2.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionName, null, business.name), /*#__PURE__*/_react.default.createElement(_styles2.OptionCategory, null, (business === null || business === void 0 ? void 0 : business.alcohol) && t('ALCOHOL', 'Alcohol'), (business === null || business === void 0 ? void 0 : business.food) && t('FOOD', 'Food'), (business === null || business === void 0 ? void 0 : business.groceries) && t('GROCERIES', 'Groceries'), (business === null || business === void 0 ? void 0 : business.laundry) && t('LAUNDRY', 'Laundry'))))
        };
      });
      var _iterator = _createForOfIteratorHelper(_businessesOption),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _businessesOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setBusinessTypes(_businessesOptionList);
  }, [businessesList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !businessesList.loading ? /*#__PURE__*/_react.default.createElement(_styles.MultiSelect, {
    defaultValue: filterValues.businessIds,
    placeholder: Placeholder,
    options: businessTypes,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    optionBottomBorder: true,
    onChange: function onChange(business) {
      return handleChangeBusinesses(business);
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.MultiSelect, {
    defaultValue: "default",
    options: businessesLoading,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    optionBottomBorder: true
  }));
};