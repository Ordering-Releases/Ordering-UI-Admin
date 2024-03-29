"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductTagsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _ProductTagDetails = require("../ProductTagDetails");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductTagsListUI = function ProductTagsListUI(props) {
  var tagsState = props.tagsState,
    searchValue = props.searchValue,
    _onSearch = props.onSearch,
    selectedTagIds = props.selectedTagIds,
    actionState = props.actionState,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleSuccessDelete = props.handleSuccessDelete,
    handleSuccessAdd = props.handleSuccessAdd,
    handleChangeProductTag = props.handleChangeProductTag,
    handleSelectNoneTags = props.handleSelectNoneTags,
    handleSelectAllTags = props.handleSelectAllTags;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTag = _useState2[0],
    setSelectedTag = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpenTagDetail = _useState4[0],
    setIsOpenTagDetail = _useState4[1];
  var handleOpenProductTagDetail = function handleOpenProductTagDetail(e, tag, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.product-tag-checkbox');
    if (isInvalid) return;
    setSelectedTag(tag);
    setIsExtendExtraOpen(true);
    setIsOpenTagDetail(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tag: tag === null || tag === void 0 ? void 0 : tag.id
      });
    }
  };
  var handleCloseDetail = function handleCloseDetail() {
    setIsOpenTagDetail(false);
    setIsExtendExtraOpen(false);
    setSelectedTag(null);
    (0, _utils.removeQueryToUrl)(['tag']);
  };
  (0, _react.useEffect)(function () {
    if (tagsState.loading) return;
    var tagId = query.get('tag');
    if (tagId) {
      var initTag = tagsState.tags.find(function (tag) {
        return tag.id === Number(tagId);
      });
      handleOpenProductTagDetail(null, initTag, true);
    }
  }, [tagsState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.TagsListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    search: searchValue,
    onSearch: function onSearch(val) {
      return _onSearch(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SelectButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllTags();
    },
    disabled: actionState.loading || tagsState.tags.length === 0
  }, t('SELECT_ALL', 'Select all')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectNoneTags();
    },
    disabled: actionState.loading || tagsState.tags.length === 0
  }, t('SELECT_NONE', 'Select none'))), tagsState !== null && tagsState !== void 0 && tagsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductTagWrapper, {
      key: i,
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_styles2.TagImageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 32,
      height: 32
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 14
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 10,
      height: 13
    }));
  }) : /*#__PURE__*/_react.default.createElement(_styles2.TagsListWrapper, null, tagsState.tags.map(function (tag) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductTagWrapper, {
      key: tag.id,
      active: tag.id === (selectedTag === null || selectedTag === void 0 ? void 0 : selectedTag.id),
      onClick: function onClick(e) {
        return handleOpenProductTagDetail(e, tag);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      className: "product-tag-checkbox",
      checked: selectedTagIds.includes(tag.id),
      onChange: function onChange(e) {
        return handleChangeProductTag(e.target.checked, tag.id);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.TagImageWrapper, null, tag !== null && tag !== void 0 && tag.image ? /*#__PURE__*/_react.default.createElement("img", {
      src: tag.image,
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "tag-name"
    }, tag.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })), !tagsState.loading && /*#__PURE__*/_react.default.createElement(_styles2.AddNewLabel, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick(e) {
      return handleOpenProductTagDetail(e, null);
    }
  }, t('ADD_NEW_LABEL', 'Add new label')))), isOpenTagDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "product-tag-details",
    isBorderShow: true,
    open: isOpenTagDetail,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductTagDetails.ProductTagDetails, {
    tag: selectedTag,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessDelete: handleSuccessDelete,
    handleSuccessAdd: handleSuccessAdd,
    onClose: handleCloseDetail
  })));
};
var ProductTagsList = function ProductTagsList(props) {
  var tagsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductTagsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ProductTagsList, tagsProps);
};
exports.ProductTagsList = ProductTagsList;