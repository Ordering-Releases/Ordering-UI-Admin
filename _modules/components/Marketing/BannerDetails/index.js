"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _BannerImages = require("./BannerImages");
var _AddBanner = require("./AddBanner");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Businesses = require("./Businesses");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BannerDetailsUI = function BannerDetailsUI(props) {
  var _bannerState$banner3, _bannerState$banner4, _bannerState$banner5, _bannerState$banner6, _bannerState$banner7;
  var bannerState = props.bannerState,
    changesState = props.changesState,
    actionState = props.actionState,
    isAddMode = props.isAddMode,
    handleUpdateClick = props.handleUpdateClick,
    handleAddBanner = props.handleAddBanner,
    handleChangeItem = props.handleChangeItem,
    handleDeleteBanner = props.handleDeleteBanner,
    setBannerMoveDistance = props.setBannerMoveDistance,
    businessList = props.businessList,
    selectedBusinessIds = props.selectedBusinessIds,
    handleSelectBusiness = props.handleSelectBusiness,
    handleSelectAllBusiness = props.handleSelectAllBusiness,
    defaultPosition = props.defaultPosition;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('images'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: [],
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var tabOptions = (0, _react.useMemo)(function () {
    var _bannerState$banner, _bannerState$banner2;
    if ((bannerState === null || bannerState === void 0 || (_bannerState$banner = bannerState.banner) === null || _bannerState$banner === void 0 ? void 0 : _bannerState$banner.position) === 'web_business_page' || (bannerState === null || bannerState === void 0 || (_bannerState$banner2 = bannerState.banner) === null || _bannerState$banner2 === void 0 ? void 0 : _bannerState$banner2.position) === 'app_business_page') {
      return [{
        key: 'images',
        content: t('IMAGES', 'Images')
      }, {
        key: 'businesses',
        content: t('BUSINESSES', 'Businesses')
      }];
    } else {
      return [{
        key: 'images',
        content: t('IMAGES', 'Images')
      }];
    }
  }, [bannerState]);
  var onClickDeleteBanner = function onClickDeleteBanner() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('BANNER', 'Banner')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteBanner();
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error) || actionState.loading) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState]);
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    timer = _useState8[0],
    setTimer = _useState8[1];
  var handleChangeBannerName = function handleChangeBannerName(name) {
    if (!name) return;
    clearTimeout(timer);
    var _timer = setTimeout(function () {
      handleUpdateClick({
        name: name
      });
    }, 750);
    setTimer(_timer);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, isAddMode ? t('ADD_BANNER', 'Add banner') : bannerState === null || bannerState === void 0 || (_bannerState$banner3 = bannerState.banner) === null || _bannerState$banner3 === void 0 ? void 0 : _bannerState$banner3.name), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_bannerState$banner4 = bannerState.banner) === null || _bannerState$banner4 === void 0 ? void 0 : _bannerState$banner4.enabled,
    onChange: function onChange(enabled) {
      return handleUpdateClick({
        enabled: enabled
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeleteBanner();
    }
  }, t('DELETE', 'Delete')))))), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.FormController, {
    key: bannerState === null || bannerState === void 0 || (_bannerState$banner5 = bannerState.banner) === null || _bannerState$banner5 === void 0 ? void 0 : _bannerState$banner5.id
  }, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: (bannerState === null || bannerState === void 0 || (_bannerState$banner6 = bannerState.banner) === null || _bannerState$banner6 === void 0 ? void 0 : _bannerState$banner6.name) || '',
    onChange: function onChange(e) {
      return handleChangeBannerName(e.target.value);
    }
  })), isAddMode ? /*#__PURE__*/_react.default.createElement(_AddBanner.AddBanner, {
    changesState: changesState,
    handleChangeItem: handleChangeItem,
    handleAddBanner: handleAddBanner,
    actionState: actionState,
    businessList: businessList,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    defaultPosition: defaultPosition
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.TabsConatiner, null, tabOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedTab === option.key,
      onClick: function onClick() {
        setSelectedTab(option.key);
        setBannerMoveDistance(0);
      }
    }, option.content);
  })), selectedTab === 'images' && /*#__PURE__*/_react.default.createElement(_BannerImages.BannerImages, _extends({}, props, {
    bannerId: bannerState === null || bannerState === void 0 || (_bannerState$banner7 = bannerState.banner) === null || _bannerState$banner7 === void 0 ? void 0 : _bannerState$banner7.id,
    setBannerMoveDistance: setBannerMoveDistance
  })), selectedTab === 'businesses' && /*#__PURE__*/_react.default.createElement(_Businesses.Businesses, {
    actionState: actionState,
    businessList: businessList,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    handleUpdateClick: handleUpdateClick
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
      return alertState !== null && alertState !== void 0 && alertState.handleOnAccept ? alertState.handleOnAccept() : setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var BannerDetails = function BannerDetails(props) {
  var bannerItemsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BannerDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BannerDetails, bannerItemsProps);
};
exports.BannerDetails = BannerDetails;