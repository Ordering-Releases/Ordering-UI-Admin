"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionSpecficCategory = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionSpecficCategory = function EnterprisePromotionSpecficCategory(props) {
  var formState = props.formState,
      promotionState = props.promotionState,
      handleChangeItem = props.handleChangeItem,
      onClickDone = props.onClickDone,
      selectedCategoryIds = props.selectedCategoryIds,
      setSelectedCategoryIds = props.setSelectedCategoryIds,
      businessesList = props.businessesList;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      businessOptions = _useState2[0],
      setBusinessOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedBusinessSlug = _useState4[0],
      setSelectedBusinessSlug = _useState4[1];

  (0, _react.useEffect)(function () {
    var _promotionState$promo2, _promotionState$promo3;

    var businessIds = [];

    if (Object.keys(promotionState === null || promotionState === void 0 ? void 0 : promotionState.promotion).length) {
      var _promotionState$promo;

      businessIds = promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo = promotionState.promotion.businesses) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.reduce(function (ids, business) {
        return [].concat(_toConsumableArray(ids), [business.id]);
      }, []);
    } else {
      var _formState$changes, _formState$changes2;

      businessIds = formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.businesses ? _toConsumableArray(formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.businesses) : [];
    }

    var _businessOptions = businessesList.businesses.filter(function (business) {
      return businessIds.includes(business.id);
    }).map(function (business) {
      var _theme$images, _theme$images$dummies, _business$city;

      return {
        value: business.slug,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_50,c_limit'),
          alt: ""
        }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, business === null || business === void 0 ? void 0 : business.name), business === null || business === void 0 ? void 0 : (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name))
      };
    });

    setBusinessOptions(_businessOptions);

    if ((promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : (_promotionState$promo3 = _promotionState$promo2.categories) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.length) > 0) {
      var _promotionState$promo4, _promotionState$promo5;

      var businessId = promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : (_promotionState$promo5 = _promotionState$promo4.categories[0]) === null || _promotionState$promo5 === void 0 ? void 0 : _promotionState$promo5.business_id;
      var foundBusiness = businessesList.businesses.find(function (business) {
        return business.id === businessId;
      });

      if (foundBusiness !== null && foundBusiness !== void 0 && foundBusiness.slug) {
        setSelectedBusinessSlug(foundBusiness === null || foundBusiness === void 0 ? void 0 : foundBusiness.slug);
      }
    } else if (_businessOptions.length) {
      var _businessOptions$;

      setSelectedBusinessSlug((_businessOptions$ = _businessOptions[0]) === null || _businessOptions$ === void 0 ? void 0 : _businessOptions$.value);
    }
  }, []);
  (0, _react.useEffect)(function () {
    var filteredCategories = [];
    Object.values(selectedCategoryIds).forEach(function (category) {
      filteredCategories.push({
        id: category.id,
        include: category.include,
        is_condition: true
      });
    });
    handleChangeItem({
      categories: filteredCategories
    });
  }, [selectedCategoryIds]);
  (0, _react.useEffect)(function () {
    var _promotionState$promo6, _promotionState$promo7, _promotionState$promo8;

    if (!(promotionState !== null && promotionState !== void 0 && (_promotionState$promo6 = promotionState.promotion) !== null && _promotionState$promo6 !== void 0 && _promotionState$promo6.categories)) return;

    var _selectedCategoryIds = promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo7 = promotionState.promotion) === null || _promotionState$promo7 === void 0 ? void 0 : (_promotionState$promo8 = _promotionState$promo7.categories) === null || _promotionState$promo8 === void 0 ? void 0 : _promotionState$promo8.reduce(function (ids, category) {
      ids[category.id] = {
        id: category.id,
        include: category.pivot.include
      };
      return ids;
    }, {});

    setSelectedCategoryIds(_selectedCategoryIds);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CATEGORY_SPECIFIC', 'Category specific')), /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')), /*#__PURE__*/_react.default.createElement(_styles2.BusinessSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    defaultValue: selectedBusinessSlug,
    placeholder: t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business'),
    options: businessOptions,
    onChange: function onChange(val) {
      return setSelectedBusinessSlug(val);
    },
    optionInnerMaxHeight: "300px"
  }))), selectedBusinessSlug ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SELECT_CATEGORY_INCLUDE', 'Select category to include')), /*#__PURE__*/_react.default.createElement(_Shared.SelectBusinessCategories, {
    slug: selectedBusinessSlug,
    selectedCategoryIds: selectedCategoryIds,
    setSelectedCategoryIds: setSelectedCategoryIds,
    include: true
  }), /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SELECT_CATEGORY_EXCLUDE', 'Select category to exclude')), /*#__PURE__*/_react.default.createElement(_Shared.SelectBusinessCategories, {
    slug: selectedBusinessSlug,
    selectedCategoryIds: selectedCategoryIds,
    setSelectedCategoryIds: setSelectedCategoryIds,
    include: false
  })) : /*#__PURE__*/_react.default.createElement(_styles2.NoSelectedBusiness, null, t('SELECT_BUSINESS_BEFORE_CATEGORY', 'Please select a business before selecting your cateogries.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};

exports.EnterprisePromotionSpecficCategory = EnterprisePromotionSpecficCategory;