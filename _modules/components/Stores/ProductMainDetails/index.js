"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductMainDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Shared = require("../../Shared");
var _SeoOptions = require("../SeoOptions");
var _ProductDetatilsInformation = require("../ProductDetatilsInformation");
var _ProductDetailsAdvanced = require("../ProductDetailsAdvanced");
var _ProductTagsList = require("../ProductTagsList");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductMainDetails = exports.ProductMainDetails = function ProductMainDetails(props) {
  var product = props.product,
    formState = props.formState,
    handlechangeImage = props.handlechangeImage,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleChangeRibbon = props.handleChangeRibbon,
    handleUpdateClick = props.handleUpdateClick,
    isExtendExtraOpen = props.isExtendExtraOpen,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    business = props.business,
    handleSuccessUpdate = props.handleSuccessUpdate,
    setFormTaxState = props.setFormTaxState,
    formTaxState = props.formTaxState,
    taxes = props.taxes,
    setTaxes = props.setTaxes,
    fees = props.fees,
    setFees = props.setFees,
    cleanFormState = props.cleanFormState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('information'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var listOptions = [{
    key: 'information',
    content: t('INFORMATION', 'Information')
  }, {
    key: 'advanced',
    content: t('ADVANCED', 'Advanced')
  }, {
    key: 'labels',
    content: t('LABELS', 'Labels')
  }, {
    key: 'seo_options',
    content: t('SEO_OPTIONS', 'SEO options')
  }];
  var handleSelectOption = function handleSelectOption(tab, isInitialRender) {
    setSelectedOption(tab);
    setIsExtendExtraOpen(false);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      handleSelectOption(tab, true);
    } else {
      handleSelectOption(selectedOption);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    maxLimit: isExtendExtraOpen
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_DETAILS', 'Product details')), /*#__PURE__*/_react.default.createElement(_styles.TabsConatiner, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, listOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleSelectOption(option.key);
      }
    }, option.content);
  }))), selectedOption === 'information' && /*#__PURE__*/_react.default.createElement(_ProductDetatilsInformation.ProductDetatilsInformation, {
    product: product,
    formState: formState,
    handlechangeImage: handlechangeImage,
    handleChangeRibbon: handleChangeRibbon,
    handleChangeInput: handleChangeInput,
    handleChangeFormState: handleChangeFormState,
    handleButtonUpdateClick: handleUpdateClick
  }), selectedOption === 'advanced' && /*#__PURE__*/_react.default.createElement(_ProductDetailsAdvanced.ProductDetailsAdvanced, {
    product: product,
    business: business,
    handleSuccessUpdate: handleSuccessUpdate,
    setFormTaxState: setFormTaxState,
    formTaxState: formTaxState,
    taxes: taxes,
    setTaxes: setTaxes,
    fees: fees,
    setFees: setFees
  }), selectedOption === 'labels' && /*#__PURE__*/_react.default.createElement(_ProductTagsList.ProductTagsList, {
    tags: (product === null || product === void 0 ? void 0 : product.tags) || [],
    businessId: business.id,
    product: product,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessProductUpdate: handleSuccessUpdate
  }), selectedOption === 'seo_options' && /*#__PURE__*/_react.default.createElement(_SeoOptions.SeoOptions, {
    data: product,
    formState: formState,
    setFormState: handleChangeFormState,
    handleUpdateClick: handleUpdateClick,
    handlechangeImageProductCategory: handlechangeImage,
    handleProductCategoryChangeInput: handleChangeInput,
    isProductSeo: true,
    cleanFormState: cleanFormState
  }));
};