"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategories = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _SingleBusinessSubCateogries = require("../SingleBusinessSubCateogries");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var BusinessProductsCategories = exports.BusinessProductsCategories = function BusinessProductsCategories(props) {
  var _businessState$busine;
  var businessState = props.businessState,
    categorySelected = props.categorySelected,
    handleChangeCategory = props.handleChangeCategory,
    handleOpenCategoryDetails = props.handleOpenCategoryDetails,
    categoryListRef = props.categoryListRef;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    dataSelected = _useState2[0],
    setDataSelected = _useState2[1];
  var containerRef = (0, _react.useRef)();
  var listRef = (0, _react.useRef)();
  var addButtonRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var listener;
    if (containerRef !== null && containerRef !== void 0 && containerRef.current && categoryListRef) {
      listener = window.addEventListener('click', function (e) {
        var _containerRef$current, _addButtonRef$current;
        if (!(containerRef !== null && containerRef !== void 0 && (_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) && !(addButtonRef !== null && addButtonRef !== void 0 && (_addButtonRef$current = addButtonRef.current) !== null && _addButtonRef$current !== void 0 && _addButtonRef$current.contains(e.target)) && categoryListRef !== null && categoryListRef !== void 0 && categoryListRef.contains(e.target)) {
          handleChangeCategory(null, null);
        }
      });
    }
    return function () {
      window.removeEventListener('click', listener);
    };
  }, [containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, categoryListRef]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryListContainer, {
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_CATEGORY', 'Business category'))), /*#__PURE__*/_react.default.createElement(_styles2.ListContent, {
    ref: listRef
  }, (businessState === null || businessState === void 0 ? void 0 : businessState.loading) && _toConsumableArray(Array(6).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessSubCateogries.SingleBusinessSubCateogries, {
      key: i,
      isSkeleton: true
    });
  }), !(businessState !== null && businessState !== void 0 && businessState.loading) && (businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 || (_businessState$busine = _businessState$busine.categories) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.length) > 0 && (businessState === null || businessState === void 0 ? void 0 : businessState.business.categories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category, i) {
    var _businessState$busine2;
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessSubCateogries.SingleBusinessSubCateogries, _extends({}, props, {
      index: 0,
      key: category.id,
      category: category,
      categorySelected: categorySelected,
      handleChangeCategory: handleChangeCategory,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
      dataSelected: dataSelected,
      setDataSelected: setDataSelected,
      isLastCategory: (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 || (_businessState$busine2 = _businessState$busine2.categories) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.length) - 1 === i
    }));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.AddCategoryWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    ref: addButtonRef,
    onClick: function onClick() {
      return handleOpenCategoryDetails();
    }
  }, t('ADD_NEW_CATEGORY', 'Add new category'))));
};