"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectBusinessCategories = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var _CategoryTreeNode = function CategoryTreeNode(props) {
  var _category$subcategori2;
  var category = props.category,
    index = props.index,
    selectedCategoryIds = props.selectedCategoryIds,
    setSelectedCategoryIds = props.setSelectedCategoryIds,
    include = props.include;
  var content = (0, _react.useRef)(null);
  var checkboxRef = (0, _react.useRef)(null);
  var categoryRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('accordion__icon'),
    _useState4 = _slicedToArray(_useState3, 2),
    setRotate = _useState4[0],
    setRotateState = _useState4[1];
  var toggleAccordion = function toggleAccordion(e) {
    var _categoryRef$current, _checkboxRef$current;
    var isActionsClick = ((_categoryRef$current = categoryRef.current) === null || _categoryRef$current === void 0 ? void 0 : _categoryRef$current.contains(e.target)) || ((_checkboxRef$current = checkboxRef.current) === null || _checkboxRef$current === void 0 ? void 0 : _checkboxRef$current.contains(e.target));
    if (isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var handleChangeSelectCategory = function handleChangeSelectCategory(include) {
    var _category$subcategori;
    var categoryIds = [];
    if ((category === null || category === void 0 || (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0) {
      category.subcategories.forEach(function iterate(category) {
        categoryIds = [].concat(_toConsumableArray(categoryIds), [category.id]);
        Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
      });
    }
    var _selectedCaetegoryIds = {};
    if (selectedCategoryIds[category.id] && selectedCategoryIds[category.id].include === include) {
      _selectedCaetegoryIds = _objectSpread({}, selectedCategoryIds);
      delete _selectedCaetegoryIds[category.id];
    } else {
      _selectedCaetegoryIds = _objectSpread({}, selectedCategoryIds);
      _selectedCaetegoryIds[category.id] = {
        id: category.id,
        include: include
      };
      categoryIds.forEach(function (id) {
        _selectedCaetegoryIds[id] = {
          id: id,
          include: include
        };
      });
    }
    setSelectedCategoryIds(_selectedCaetegoryIds);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles2.Accordion, {
    onClick: function onClick(e) {
      return toggleAccordion(e, category.id);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionItem, {
    margin: 20 * index
  }, /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
    className: setRotate
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    ref: categoryRef,
    checked: !!selectedCategoryIds[category.id] && selectedCategoryIds[category.id].include === include,
    onChange: function onChange(e) {
      return handleChangeSelectCategory(include);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, category.name)))), /*#__PURE__*/_react.default.createElement(_styles2.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 || (_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0 && category.subcategories.map(function (subCategory) {
    return /*#__PURE__*/_react.default.createElement(_CategoryTreeNode, _extends({}, props, {
      key: subCategory.id,
      category: subCategory,
      index: index + 1
    }));
  })));
};
var SelectBusinessCategoriesUI = function SelectBusinessCategoriesUI(props) {
  var _businessState$busine;
  var businessState = props.businessState,
    selectedCategoryIds = props.selectedCategoryIds,
    setSelectedCategoryIds = props.setSelectedCategoryIds,
    include = props.include;
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 20
    }));
  })) : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.categories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category) {
    return /*#__PURE__*/_react.default.createElement(_CategoryTreeNode, {
      key: category.id,
      index: 0,
      category: category,
      selectedCategoryIds: selectedCategoryIds,
      setSelectedCategoryIds: setSelectedCategoryIds,
      include: include
    });
  }));
};
var SelectBusinessCategories = exports.SelectBusinessCategories = function SelectBusinessCategories(props) {
  var _useApi = (0, _orderingComponentsAdminExternal.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isInitialRender = _useState6[0],
    setIsInitialRender = _useState6[1];
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    ordering: ordering,
    UIComponent: SelectBusinessCategoriesUI,
    isInitialRender: isInitialRender,
    isAllCategoryProducts: true,
    isSearchByName: true,
    isSearchByDescription: true,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessProductsListing, businessProductslistingProps);
};