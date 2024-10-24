"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesUI = exports.Messages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactHookForm = require("react-hook-form");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _HiOutlineArrowLeft = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineArrowLeft"));
var _AiOutlineInfoCircle = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineInfoCircle"));
var _styles = require("./styles");
var _Image = require("../Image");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _IosSend = _interopRequireDefault(require("@meronex/icons/ios/IosSend"));
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));
var _Confirm = require("../Confirm");
var _Logistics = require("../Logistics");
var _LogisticInformation = require("../LogisticInformation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var MessagesUI = exports.MessagesUI = function MessagesUI(props) {
  var _order$customer, _order$business, _order$driver, _order$customer2, _order$customer3, _order$business2, _order$driver2, _theme$images;
  var order = props.order,
    messages = props.messages,
    handleSend = props.handleSend,
    image = props.image,
    message = props.message,
    sendMessage = props.sendMessage,
    setImage = props.setImage,
    setMessage = props.setMessage,
    setCanRead = props.setCanRead,
    history = props.history,
    messageDashboardView = props.messageDashboardView,
    handleMessageOrderDetail = props.handleMessageOrderDetail,
    handleReadMessages = props.handleReadMessages,
    handleSetMessageType = props.handleSetMessageType;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    getTimeAgo = _useUtils2$.getTimeAgo;
  var buttonRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    messageLevel = _useState4[0],
    setMessageLevel = _useState4[1];
  var _useState5 = (0, _react.useState)({
      orderHistory: true,
      logistics: false,
      logistic_information: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    tabActive = _useState6[0],
    setTabActive = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    messageSearchValue = _useState8[0],
    setMessageSearchValue = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    filteredMessages = _useState10[0],
    setFilteredMessages = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    driverNoneCase = _useState12[0],
    setDriverNoneCase = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    load = _useState14[0],
    setLoad = _useState14[1];
  var _useState15 = (0, _react.useState)(props.business),
    _useState16 = _slicedToArray(_useState15, 2),
    business = _useState16[0],
    setBusiness = _useState16[1];
  var _useState17 = (0, _react.useState)(props.customer),
    _useState18 = _slicedToArray(_useState17, 2),
    customer = _useState18[0],
    setCustomer = _useState18[1];
  var _useState19 = (0, _react.useState)(props.driver),
    _useState20 = _slicedToArray(_useState19, 2),
    driver = _useState20[0],
    setDriver = _useState20[1];
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    setMessageSearchValue('');
  }, [order.id]);
  (0, _react.useEffect)(function () {
    if (!sendMessage.loading && sendMessage !== null && sendMessage !== void 0 && sendMessage.error) {
      setAlertState({
        open: true,
        content: sendMessage.error || [t('ERROR')]
      });
    }
    if (sendMessage.loading) {
      clearInputs();
    }
  }, [sendMessage]);
  (0, _react.useEffect)(function () {
    if (history) return;
    if (load < 3) {
      var chat = document.getElementById('chat');
      chat.scrollTop = chat.scrollHeight;
    }
  }, [load]);
  (0, _react.useEffect)(function () {
    if (history) return;
    var chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }, [messages.messages.length, filteredMessages]);
  (0, _react.useEffect)(function () {
    if (history) return;
    setTimeout(function () {
      var chat = document.getElementById('chat');
      chat.scrollTop = chat.scrollHeight;
    }, 10);
  }, [customer, business, driver]);
  var onChangeMessage = function onChangeMessage(e) {
    setMessage(e.target.value);
  };
  var removeImage = function removeImage(e) {
    setImage(null);
  };
  var onChangeImage = function onChangeImage(e) {
    var files = e.target.files[0];
    var reader = new window.FileReader();
    reader.readAsDataURL(files);
    reader.onload = function () {
      setImage(reader.result);
      buttonRef.current.focus();
    };
    reader.onerror = function (error) {
      console.log(error);
    };
  };
  var getStatus = function getStatus(status) {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('COMPLETED_BY_ADMIN', 'Completed by admin');
      case 2:
        return t('REJECTED_BY_ADMIN', 'Rejected by admin');
      case 3:
        return t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business');
      case 4:
        return t('READY_FOR_PICKUP', 'Ready for pickup');
      case 5:
        return t('REJECT_BY_BUSINESS', 'Reject by business');
      case 6:
        return t('REJECT_BY_DRIVER', 'Reject by driver');
      case 7:
        return t('ACCEPTED_BY_BUSINESS', 'Accepted by Business');
      case 8:
        return t('ACCEPTED_BY_DRIVER', 'Accepted by Driver');
      case 9:
        return t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver');
      case 10:
        return t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver');
      case 11:
        return t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver');
      case 12:
        return t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver');
      case 13:
        return t('PREORDER', 'Preorder');
      case 14:
        return t('ORDER_NOT_READY', 'Order not ready');
      case 15:
        return t('PICKUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer');
      case 16:
        return t('CANCELLED_BY_CUSTOMER', 'Cancelled by customer');
      case 17:
        return t('NOT_PICKED_BY_CUSTOMER', 'Not picked by customer');
      case 18:
        return t('DRIVER_ALMOST_ARRIVED_TO_BUSINESS', 'Driver almost arrived to business');
      case 19:
        return t('DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', 'Driver almost arrived to customer');
      case 20:
        return t('CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', 'Customer almost arrived to business');
      case 21:
        return t('CUSTOMER_ARRIVED_TO_BUSINESS', 'Customer arrived to business');
      default:
        return status;
    }
  };
  var getLevel = function getLevel(level) {
    switch (level) {
      case 0:
        return 'admin';
      case 2:
        return 'business';
      case 4:
        return 'driver';
      case 3:
        return 'customer';
    }
  };
  var clearInputs = function clearInputs() {
    var input = document.getElementById('message');
    if (input) {
      input.value = '';
    }
    removeImage();
    setMessage('');
  };
  var onSubmit = function onSubmit(values) {
    handleSend();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var unreadMessageControl = function unreadMessageControl() {
    if (messages.loading || messages.messages.length === 0) return;
    if (messages.messages[messages.messages.length - 1].read) return;
    handleReadMessages(messages.messages[messages.messages.length - 1].id);
  };
  (0, _react.useEffect)(function () {
    if (messages.loading) return;
    var _filteredMessages = messages.messages.filter(function (message) {
      if (message.type === 2) {
        return message.comment.toLocaleLowerCase().includes(messageSearchValue.toLocaleLowerCase());
      }
      return true;
    });
    setFilteredMessages(_filteredMessages);
  }, [messages, messageSearchValue]);
  (0, _react.useEffect)(function () {
    if (customer) {
      setMessageLevel(3);
      setCanRead({
        business: false,
        administrator: true,
        driver: false,
        customer: true
      });
    }
    if (business || driverNoneCase) {
      setMessageLevel(2);
      setCanRead({
        business: true,
        administrator: true,
        driver: false,
        customer: false
      });
    }
    if (driver && !driverNoneCase) {
      setMessageLevel(4);
      setCanRead({
        business: false,
        administrator: true,
        driver: true,
        customer: false
      });
    }
  }, [customer, business, driver, driverNoneCase]);
  (0, _react.useEffect)(function () {
    if (driver && (order === null || order === void 0 ? void 0 : order.driver_id) === null) {
      setDriverNoneCase(true);
    } else {
      setDriverNoneCase(false);
    }
  }, [order === null || order === void 0 ? void 0 : order.driver_id, driver]);
  (0, _react.useEffect)(function () {
    if (props.business) {
      setBusiness(true);
      setCustomer(false);
      setDriver(false);
    }
    if (props.customer) {
      setBusiness(false);
      setCustomer(true);
      setDriver(false);
    }
    if (props.driver) {
      setBusiness(false);
      setCustomer(false);
      setDriver(true);
    }
  }, [props.business, props.customer, props.driver]);
  (0, _react.useEffect)(function () {
    if (messages.loading || props.business || props.customer || props.driver || history) return;
    var _messages = messages.messages.filter(function (_message) {
      var _message$author;
      return _message.type !== 1 && _message.type !== 0 && (_message === null || _message === void 0 || (_message$author = _message.author) === null || _message$author === void 0 ? void 0 : _message$author.level) !== 0;
    });
    if (_messages.length > 0) {
      var _messages$author;
      var level = (_messages$author = _messages[_messages.length - 1].author) === null || _messages$author === void 0 ? void 0 : _messages$author.level;
      if (level === 2) {
        setBusiness(true);
        setCustomer(false);
        setDriver(false);
        handleSetMessageType('business');
      }
      if (level === 3) {
        setBusiness(false);
        setCustomer(true);
        setDriver(false);
        handleSetMessageType('customer');
      }
      if (level === 4) {
        setBusiness(false);
        setCustomer(false);
        setDriver(true);
        handleSetMessageType('driver');
      }
    } else {
      setBusiness(true);
      setCustomer(false);
      setDriver(false);
      handleSetMessageType('business');
    }
  }, [messages.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.MessagesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, !history && !messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.BackActions, null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return props.onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineArrowLeft.default, null))), /*#__PURE__*/_react.default.createElement(_styles.HeaderProfile, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperHeader, {
    messageDashboardView: messageDashboardView,
    historyView: history
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, null, !history && /*#__PURE__*/_react.default.createElement(_styles.Image, null, customer && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), (business || driverNoneCase) && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo,
    fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
  }), driver && !driverNoneCase && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  })), customer && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.name, " ", order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.lastname), !messageDashboardView ? /*#__PURE__*/_react.default.createElement("span", null, t('ONLINE', 'Online')) : /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_ORDER_NO', 'Order No'), ". ", order.id)), (business || driverNoneCase) && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), !messageDashboardView ? /*#__PURE__*/_react.default.createElement("span", null, t('ONLINE', 'Online')) : /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_ORDER_NO', 'Order No'), ". ", order.id)), driver && !driverNoneCase && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.name), !messageDashboardView ? /*#__PURE__*/_react.default.createElement("span", null, t('ONLINE', 'Online')) : /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_ORDER_NO', 'Order No'), ". ", order.id)), history && /*#__PURE__*/_react.default.createElement(_styles.WrapperHitoryHeader, null, /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive.orderHistory,
    onClick: function onClick() {
      return setTabActive({
        orderHistory: true,
        logistics: false,
        logistic_information: false
      });
    }
  }, t('MOBILE_ORDER_HISTORY', 'Order History')), /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive.logistics,
    onClick: function onClick() {
      return setTabActive({
        orderHistory: false,
        logistics: true,
        logistic_information: false
      });
    }
  }, t('LOGISTICS', 'Logistics')), /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive.logistic_information,
    onClick: function onClick() {
      return setTabActive({
        orderHistory: false,
        logistics: false,
        logistic_information: true
      });
    }
  }, t('LOGISTIC_INFORMATION', 'Logistics Information')))), messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.SearchAndDetailControlContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesSearch, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.search,
    alt: "search"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "search",
    placeholder: "Search",
    value: messageSearchValue,
    onChange: function onChange(e) {
      return setMessageSearchValue(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderDetailIconButton, {
    onClick: function onClick() {
      return handleMessageOrderDetail(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineInfoCircle.default, null))))), /*#__PURE__*/_react.default.createElement(_styles.Chat, {
    id: "chat"
  }, messages.loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !history ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleBusiness, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleBusiness, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 100
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonHitory, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 380,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 450,
      height: 50
    }));
  }))), !messages.loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !tabActive.logistic_information && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER_PLACED_FOR', 'Order placed for'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, parseDate(order.created_at)), " ", ' ', t('VIA', 'via'), " ", /*#__PURE__*/_react.default.createElement("strong", null, order.app_id), ' ', /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(order.created_at)))), history && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tabActive.logistics && /*#__PURE__*/_react.default.createElement(_styles.WrapperLogistics, null, /*#__PURE__*/_react.default.createElement(_Logistics.Logistics, {
    orderId: order.id
  })), tabActive.logistic_information && /*#__PURE__*/_react.default.createElement(_styles.WrapperLogisticInformation, null, /*#__PURE__*/_react.default.createElement(_LogisticInformation.LogisticInformation, {
    orderId: order.id
  }))), filteredMessages.length > 0 && filteredMessages.map(function (message) {
    var _message$change, _message$change2, _message$change3, _message$driver, _message$driver2, _message$author2, _message$author3, _message$author4, _message$change4, _message$change5, _message$change6, _message$change7, _message$driver3, _message$driver4, _message$author5, _message$author6, _message$author7, _message$author8, _message$author9, _message$author10, _message$author11, _message$author12, _message$author13, _message$author14, _message$author15, _message$author16, _message$author17, _message$author18, _message$author19, _message$author20, _message$author21, _message$author22, _message$author23, _message$author24, _message$author25, _message$author26, _message$author27, _message$author28;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: message.id
    }, history && tabActive.orderHistory && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id,
      style: {
        display: "".concat(tabActive.orderHistory ? 'inline-flex' : 'none')
      }
    }, ((_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER', 'Order'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, t(message.change.attribute)), " ", ' ', t('CHANGED_FROM', 'Changed from'), " ", ' ', message.change.old !== null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, getStatus(parseInt(message.change.old, 10))), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('TO', 'to'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, message.change.old === null && message.change.attribute === 'delivery_in' ? 'null' : t(getStatus(parseInt(message.change.new, 10)))), message !== null && message !== void 0 && (_message$change2 = message.change) !== null && _message$change2 !== void 0 && _message$change2.comment ? "\n'".concat(message === null || message === void 0 || (_message$change3 = message.change) === null || _message$change3 === void 0 ? void 0 : _message$change3.comment, "'") : ''), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.new !== null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver = message.driver) === null || _message$driver === void 0 ? void 0 : _message$driver.name, " ", ' ', " ", ((_message$driver2 = message.driver) === null || _message$driver2 === void 0 ? void 0 : _message$driver2.lastname) && message.driver.lastname), t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver'), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), " ", message.comment.length)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'The driver was unnasigned'))), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))), !history && ((message === null || message === void 0 || (_message$author2 = message.author) === null || _message$author2 === void 0 ? void 0 : _message$author2.level) === 0 || (message === null || message === void 0 || (_message$author3 = message.author) === null || _message$author3 === void 0 ? void 0 : _message$author3.level) === 2 || (message === null || message === void 0 || (_message$author4 = message.author) === null || _message$author4 === void 0 ? void 0 : _message$author4.level) === messageLevel) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 1 && ((_message$change4 = message.change) === null || _message$change4 === void 0 ? void 0 : _message$change4.attribute) !== 'comment' && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id
    }, ((_message$change5 = message.change) === null || _message$change5 === void 0 ? void 0 : _message$change5.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER', 'Order'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, t(message.change.attribute)), " ", ' ', t('CHANGED_FROM', 'Changed from'), " ", ' ', message.change.old !== null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, t(getStatus(parseInt(message.change.old, 10)))), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('TO', 'to'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, message.change.old === null && message.change.attribute === 'delivery_in' ? 'null' : t(getStatus(parseInt(message.change.new, 10)))), message !== null && message !== void 0 && (_message$change6 = message.change) !== null && _message$change6 !== void 0 && _message$change6.comment ? "\n'".concat(message === null || message === void 0 || (_message$change7 = message.change) === null || _message$change7 === void 0 ? void 0 : _message$change7.comment, "'") : ''), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.new !== null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver3 = message.driver) === null || _message$driver3 === void 0 ? void 0 : _message$driver3.name, " ", ' ', " ", ((_message$driver4 = message.driver) === null || _message$driver4 === void 0 ? void 0 : _message$driver4.lastname) && message.driver.lastname), t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver'), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), " ", message.comment.length)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'The driver was unnasigned'))), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), message.type === 2 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, customer && message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message === null || message === void 0 || (_message$author5 = message.author) === null || _message$author5 === void 0 ? void 0 : _message$author5.name, " (", getLevel(message === null || message === void 0 || (_message$author6 = message.author) === null || _message$author6 === void 0 ? void 0 : _message$author6.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), (business || driverNoneCase) && message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message === null || message === void 0 || (_message$author7 = message.author) === null || _message$author7 === void 0 ? void 0 : _message$author7.name, " (", getLevel(message === null || message === void 0 || (_message$author8 = message.author) === null || _message$author8 === void 0 ? void 0 : _message$author8.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), driver && !driverNoneCase && message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message === null || message === void 0 || (_message$author9 = message.author) === null || _message$author9 === void 0 ? void 0 : _message$author9.name, " (", getLevel(message === null || message === void 0 || (_message$author10 = message.author) === null || _message$author10 === void 0 ? void 0 : _message$author10.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))), message.type === 3 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, customer && message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message === null || message === void 0 || (_message$author11 = message.author) === null || _message$author11 === void 0 ? void 0 : _message$author11.name, " (", getLevel(message === null || message === void 0 || (_message$author12 = message.author) === null || _message$author12 === void 0 ? void 0 : _message$author12.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), (business || driverNoneCase) && message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message === null || message === void 0 || (_message$author13 = message.author) === null || _message$author13 === void 0 ? void 0 : _message$author13.name, " (", getLevel(message === null || message === void 0 || (_message$author14 = message.author) === null || _message$author14 === void 0 ? void 0 : _message$author14.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), driver && !driverNoneCase && message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message === null || message === void 0 || (_message$author15 = message.author) === null || _message$author15 === void 0 ? void 0 : _message$author15.name, " (", getLevel(message === null || message === void 0 || (_message$author16 = message.author) === null || _message$author16 === void 0 ? void 0 : _message$author16.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))), message.type === 2 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, customer && message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message === null || message === void 0 || (_message$author17 = message.author) === null || _message$author17 === void 0 ? void 0 : _message$author17.name, " (", getLevel(message === null || message === void 0 || (_message$author18 = message.author) === null || _message$author18 === void 0 ? void 0 : _message$author18.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), (business || driverNoneCase) && message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message === null || message === void 0 || (_message$author19 = message.author) === null || _message$author19 === void 0 ? void 0 : _message$author19.name, " (", getLevel(message === null || message === void 0 || (_message$author20 = message.author) === null || _message$author20 === void 0 ? void 0 : _message$author20.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), driver && !driverNoneCase && message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message === null || message === void 0 || (_message$author21 = message.author) === null || _message$author21 === void 0 ? void 0 : _message$author21.name, " (", getLevel(message === null || message === void 0 || (_message$author22 = message.author) === null || _message$author22 === void 0 ? void 0 : _message$author22.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))), message.type === 3 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, customer && message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message === null || message === void 0 || (_message$author23 = message.author) === null || _message$author23 === void 0 ? void 0 : _message$author23.name, " (", getLevel(message === null || message === void 0 || (_message$author24 = message.author) === null || _message$author24 === void 0 ? void 0 : _message$author24.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), (business || driverNoneCase) && message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message === null || message === void 0 || (_message$author25 = message.author) === null || _message$author25 === void 0 ? void 0 : _message$author25.name, " (", getLevel(message === null || message === void 0 || (_message$author26 = message.author) === null || _message$author26 === void 0 ? void 0 : _message$author26.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), driver && !driverNoneCase && message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message === null || message === void 0 || (_message$author27 = message.author) === null || _message$author27 === void 0 ? void 0 : _message$author27.name, " (", getLevel(message === null || message === void 0 || (_message$author28 = message.author) === null || _message$author28 === void 0 ? void 0 : _message$author28.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))))));
  }))), !history && /*#__PURE__*/_react.default.createElement(_styles.SendForm, null, /*#__PURE__*/_react.default.createElement(_styles.Send, {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true,
    messageDashboardView: messageDashboardView
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperSendInput, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('WRITE_A_MESSAGE', 'Write a message...'),
    onChange: onChangeMessage,
    onFocus: unreadMessageControl,
    name: "message",
    id: "message",
    ref: register({
      required: !image
    })
  }), !image && /*#__PURE__*/_react.default.createElement(_styles.SendImage, {
    htmlFor: "chat_image"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "image",
    id: "chat_image",
    accept: "image/png,image/jpg,image/jpeg",
    onChange: onChangeImage
  }), /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), image && /*#__PURE__*/_react.default.createElement(_styles.WrapperDeleteImage, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    circle: true,
    onClick: removeImage,
    type: "reset"
  }, t('X', 'X')))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSendMessageButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "darkBlue",
    type: "submit",
    disabled: sendMessage.loading || message === '' && !image || messages.loading,
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement(_IosSend.default, null), sendMessage.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('SENDING_MESSAGE', 'Sending...')) : /*#__PURE__*/_react.default.createElement("span", null, t('SEND', 'send')))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'error'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  })));
};
var Messages = exports.Messages = function Messages(props) {
  var MessagesProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: MessagesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.Messages, MessagesProps);
};