"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContactList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));

var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

var _styledComponents = require("styled-components");

var _Orders = require("../../Orders");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ChatContactListUI = function ChatContactListUI(props) {
  var isDriver = props.isDriver,
      isCustomer = props.isCustomer,
      usersList = props.usersList,
      paginationProps = props.paginationProps,
      paginationDetail = props.paginationDetail,
      getUsers = props.getUsers;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenOrders = _useState2[0],
      setIsOpenOrders = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      openUser = _useState4[0],
      setOpenUser = _useState4[1];

  var handleOpenOrders = function handleOpenOrders(user) {
    setOpenUser(user);
    setIsOpenOrders(true);
  };

  var prevNextPage = function prevNextPage(isNextPage) {
    getUsers && getUsers(false, isNextPage);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.CustomersListConatainer, null, usersList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, usersList.users.map(function (user) {
    var _theme$images, _theme$images$icons;

    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: user.id // onClick={(e) => handleClickUser(e, user)}
      ,
      active: (user === null || user === void 0 ? void 0 : user.id) === (openUser === null || openUser === void 0 ? void 0 : openUser.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((user === null || user === void 0 ? void 0 : user.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$icons = _theme$images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver), 'h_200,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement(_styles.AssignedOrdersCount, {
      className: "driver_orders",
      disabled: isDriver && (!(user !== null && user !== void 0 && user.assigned_orders_count) || (user === null || user === void 0 ? void 0 : user.assigned_orders_count) === 0),
      onClick: function onClick() {
        return handleOpenOrders(user);
      }
    }, isDriver && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, user === null || user === void 0 ? void 0 : user.assigned_orders_count), " ", t('ORDERS', 'Orders')))));
  }))), (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperPageState, null, "".concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.from, " - ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.to, " of ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) === 1 || usersList.loading,
    onClick: function onClick() {
      return prevNextPage(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: usersList.loading || (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) || (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === 1,
    onClick: function onClick() {
      return prevNextPage(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null))), isOpenOrders && openUser && /*#__PURE__*/_react.default.createElement(_Orders.OrdersLateralBar, {
    open: isOpenOrders,
    isDriver: isDriver,
    isCustomer: isCustomer,
    user: openUser,
    onClose: function onClose() {
      return setIsOpenOrders(false);
    }
  }));
};

var ChatContactList = function ChatContactList(props) {
  var customersControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ChatContactListUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    defaultUserTypesSelected: props.isDriver ? [4] : [3],
    propsToFetch: ['name', 'lastname', 'photo', 'assigned_orders_count']
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, customersControlProps);
};

exports.ChatContactList = ChatContactList;