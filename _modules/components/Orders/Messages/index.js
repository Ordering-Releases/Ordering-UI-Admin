"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesUI = exports.Messages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactHookForm = require("react-hook-form");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AiOutlineInfoCircle = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineInfoCircle"));
var _MdcCloseOctagonOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcCloseOctagonOutline"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _reactBootstrap = require("react-bootstrap");
var _utils = require("../../../utils");
var _styles = require("./styles");
var _Shared = require("../../Shared");
var _styles2 = require("../../../styles");
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _IosSend = _interopRequireDefault(require("@meronex/icons/ios/IosSend"));
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));
var _Logistics = require("../Logistics");
var _OrderLogisticInformation = require("../OrderLogisticInformation");
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
  var _configs$change_order, _order$business, _order$customer, _order$driver, _theme$images, _order$business6, _order$business7, _order$customer6, _order$customer7, _order$customer8, _order$driver6, _order$driver7, _order$driver8;
  var isChat = props.isChat,
    order = props.order,
    messages = props.messages,
    handleSend = props.handleSend,
    image = props.image,
    message = props.message,
    sendMessage = props.sendMessage,
    setImage = props.setImage,
    setMessage = props.setMessage,
    canRead = props.canRead,
    setCanRead = props.setCanRead,
    history = props.history,
    messageDashboardView = props.messageDashboardView,
    handleMessageOrderDetail = props.handleMessageOrderDetail,
    handleReadMessages = props.handleReadMessages,
    isTourOpen = props.isTourOpen,
    setCurrentTourStep = props.setCurrentTourStep,
    orderDetailClose = props.orderDetailClose,
    getHistoryComment = props.getHistoryComment;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    setValue = _useForm.setValue,
    errors = _useForm.errors,
    control = _useForm.control;
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    getTimeAgo = _useUtils2$.getTimeAgo,
    optimizeImage = _useUtils2$.optimizeImage;
  var buttonRef = (0, _react.useRef)(null);
  var messageInputRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)('order_history'),
    _useState4 = _slicedToArray(_useState3, 2),
    tabActive = _useState4[0],
    setTabActive = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    messageSearchValue = _useState6[0],
    setMessageSearchValue = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredMessages = _useState8[0],
    setFilteredMessages = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    load = _useState10[0],
    setLoad = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    messageList = _useState12[0],
    setMessageList = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isChatDisabled = _useState14[0],
    setIsChatDisabled = _useState14[1];
  var previousStatus = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];
  var chatDisabled = previousStatus.includes(order === null || order === void 0 ? void 0 : order.status);
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var showExternalId = (configs === null || configs === void 0 || (_configs$change_order = configs.change_order_id) === null || _configs$change_order === void 0 ? void 0 : _configs$change_order.value) === '1';
  var adminMessageList = [{
    key: 'message_1',
    text: t('ADMIN_MESSAGE_1', 'admin_message_1')
  }, {
    key: 'message_2',
    text: t('ADMIN_MESSAGE_2', 'admin_message_2')
  }, {
    key: 'message_3',
    text: t('ADMIN_MESSAGE_3', 'admin_message_3')
  }, {
    key: 'message_4',
    text: t('ADMIN_MESSAGE_4', 'admin_message_4')
  }];
  var storeMessageList = [{
    key: 'message_1',
    text: t('STORE_MESSAGE_1', 'store_message_1')
  }, {
    key: 'message_2',
    text: t('STORE_MESSAGE_2', 'store_message_2')
  }, {
    key: 'message_3',
    text: t('STORE_MESSAGE_3', 'store_message_3')
  }, {
    key: 'message_4',
    text: t('STORE_MESSAGE_4', 'store_message_4')
  }];
  var handleClickQuickMessage = function handleClickQuickMessage(msg) {
    var quickMsg = message ? "".concat(message, " ").concat(msg) : msg;
    setValue('message', quickMsg);
    setMessage(quickMsg);
    var msgElement = messageInputRef === null || messageInputRef === void 0 ? void 0 : messageInputRef.current;
    if (msgElement) {
      msgElement.value = quickMsg;
      msgElement.focus();
      msgElement.selectionStart = msgElement.selectionEnd = msgElement.value.length;
      msgElement.scrollLeft = msgElement.scrollWidth;
    }
  };
  (0, _react.useEffect)(function () {
    if (user.level === 0) setMessageList(adminMessageList);else if (user.level === 2) setMessageList(storeMessageList);else setMessageList([]);
  }, [user]);
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
      if (chat) {
        chat.scrollTop = chat === null || chat === void 0 ? void 0 : chat.scrollHeight;
      }
    }
  }, [load]);
  (0, _react.useEffect)(function () {
    if (history) return;
    var chat = document.getElementById('chat');
    if (chat) {
      chat.scrollTop = chat === null || chat === void 0 ? void 0 : chat.scrollHeight;
    }
  }, [messages.messages.length, filteredMessages]);
  (0, _react.useEffect)(function () {
    if (history) return;
    setTimeout(function () {
      var chat = document.getElementById('chat');
      if (chat) {
        chat.scrollTop = chat === null || chat === void 0 ? void 0 : chat.scrollHeight;
      }
    }, 10);
  }, [isChat]);
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
  var getLevel = function getLevel(level) {
    switch (level) {
      case 0:
        return t('ADMIN', 'Admin');
      case 1:
        return t('CITY_MANAGER', 'City Manager');
      case 2:
        return t('BUSINESS', 'Business');
      case 3:
        return t('CUSTOMER', 'Customer');
      case 4:
        return t('DRIVER', 'Driver');
      case 5:
        return t('DRIVER_MANAGER', 'Driver Manager');
    }
  };
  var clearInputs = function clearInputs() {
    var input = messageInputRef === null || messageInputRef === void 0 ? void 0 : messageInputRef.current;
    if (input) {
      input.value = '';
      setValue('message', '');
    }
    removeImage();
    setMessage('');
  };
  var onSubmit = function onSubmit(values) {
    handleSend();
    if (isTourOpen && setCurrentTourStep && orderDetailClose) {
      orderDetailClose();
      setCurrentTourStep(4);
    }
  };
  var handleChangeTour = function handleChangeTour(evt) {
    if (isTourOpen && !evt.target.closest('.message-footer')) {
      orderDetailClose();
      setCurrentTourStep(4);
    }
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
    if (!isChat) return;
    if (order !== null && order !== void 0 && order.driver) {
      setCanRead({
        administrator: true,
        business: true,
        customer: true,
        driver: true
      });
    } else {
      setCanRead({
        administrator: true,
        business: true,
        customer: true,
        driver: false
      });
    }
  }, [isChat, order]);
  (0, _react.useEffect)(function () {
    if (!isChat || !(order !== null && order !== void 0 && order.id) || messages.loading) return;
    unreadMessageControl();
  }, [isChat, order === null || order === void 0 ? void 0 : order.id, messages]);
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
    if ((user === null || user === void 0 ? void 0 : user.level) !== 2) {
      if (!(canRead !== null && canRead !== void 0 && canRead.business) && !(canRead !== null && canRead !== void 0 && canRead.customer) && !(canRead !== null && canRead !== void 0 && canRead.driver)) setIsChatDisabled(true);else setIsChatDisabled(false);
    } else {
      if (!(canRead !== null && canRead !== void 0 && canRead.customer) && !(canRead !== null && canRead !== void 0 && canRead.driver)) setIsChatDisabled(true);else setIsChatDisabled(false);
    }
  }, [canRead]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setTabActive(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (!history) return;
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick('order_history');
    }
  }, [history]);
  return /*#__PURE__*/_react.default.createElement(_styles.MessagesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    onClick: handleChangeTour
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderProfile, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperHeader, {
    messageDashboardView: messageDashboardView,
    historyView: history
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, null, isChat && /*#__PURE__*/_react.default.createElement(_styles.ChatHeader, null, /*#__PURE__*/_react.default.createElement(_styles.OrderNumber, null, t('INVOICE_ORDER_NO', 'Order No'), " ", showExternalId && !!(order !== null && order !== void 0 && order.external_id) ? order.external_id : order.id), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo, 'h_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
  }), /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  }))), history && /*#__PURE__*/_react.default.createElement(_styles.WrapperHitoryHeader, null, /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive === 'order_history',
    onClick: function onClick() {
      return handleTabClick('order_history');
    }
  }, t('MOBILE_ORDER_HISTORY', 'Order History')), /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive === 'logistics',
    onClick: function onClick() {
      return handleTabClick('logistics');
    }
  }, t('LOGISTICS', 'Logistics')), /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive === 'logistic_information',
    onClick: function onClick() {
      return handleTabClick('logistic_information');
    }
  }, t('LOGISTIC_INFORMATION', 'Logistics information')))), messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.SearchAndDetailControlContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesSearch, null, /*#__PURE__*/_react.default.createElement("img", {
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
  }))), !messages.loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !tabActive === 'logistic_information' && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER_PLACED_FOR', 'Order placed for'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, parseDate(order.created_at)), " ", ' ', t('VIA', 'via'), " ", /*#__PURE__*/_react.default.createElement("strong", null, order.app_id ? t(order.app_id.toUpperCase(), "".concat(order.app_id)) : ''), ' ', /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "top",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(order.created_at))
  }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(order.created_at))))), history && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tabActive === 'logistics' && /*#__PURE__*/_react.default.createElement(_styles.WrapperLogistics, null, /*#__PURE__*/_react.default.createElement(_Logistics.Logistics, {
    orderId: order.id
  })), tabActive === 'logistic_information' && /*#__PURE__*/_react.default.createElement(_styles.WrapperLogisticInformation, null, /*#__PURE__*/_react.default.createElement(_OrderLogisticInformation.OrderLogisticInformation, {
    orderId: order.id
  }))), filteredMessages.length > 0 && filteredMessages.map(function (message) {
    var _message$author, _message$author2, _message$author3, _message$author4, _order$business2, _order$customer2, _order$driver2, _order$business3, _order$customer3, _order$driver3, _order$business4, _order$customer4, _order$driver4, _order$business5, _order$customer5, _order$driver5;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: message.id
    }, history && tabActive === 'order_history' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 0 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id
    }, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: t('ORDER_PLACED_FOR_VIA', 'Order placed for _for_ via _via_.').replace('_for_', '<b>' + (order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
          utc: false
        }) + " (".concat(t('BUSINESS_TIME', 'Business time'), ")")) + '</b>').replace('_via_', '<b>' + t(order.app_id ? order.app_id.toUpperCase() : 'OTHER') + '</b>')
      }
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('APP_ID', 'App ID'), ": "), message === null || message === void 0 ? void 0 : message.app_id), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('AUTHOR', 'Author'), ": "), message === null || message === void 0 || (_message$author = message.author) === null || _message$author === void 0 ? void 0 : _message$author.name, " ", message === null || message === void 0 || (_message$author2 = message.author) === null || _message$author2 === void 0 ? void 0 : _message$author2.lastname), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('USER_AGENT', 'User agent'), ": "), message === null || message === void 0 ? void 0 : message.user_agent), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('IP', 'IP'), ": "), message === null || message === void 0 ? void 0 : message.ip), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message === null || message === void 0 ? void 0 : message.created_at)))), message.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id,
      style: {
        display: "".concat(tabActive === 'order_history' ? 'inline-flex' : 'none')
      }
    }, getHistoryComment(message) && /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: getHistoryComment(message)
      }
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))))), isChat && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 0 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id
    }, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_PLACED_FOR', 'Order placed for'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, parseDate(order.created_at)), " ", ' ', t('VIA', 'Via'), ' ', /*#__PURE__*/_react.default.createElement("strong", null, order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')), ' '), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('APP_ID', 'App ID'), ": "), message === null || message === void 0 ? void 0 : message.app_id), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('AUTHOR', 'Author'), ": "), message === null || message === void 0 || (_message$author3 = message.author) === null || _message$author3 === void 0 ? void 0 : _message$author3.name, " ", message === null || message === void 0 || (_message$author4 = message.author) === null || _message$author4 === void 0 ? void 0 : _message$author4.lastname), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('USER_AGENT', 'User agent'), ": "), message === null || message === void 0 ? void 0 : message.user_agent), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, t('IP', 'IP'), ": "), message === null || message === void 0 ? void 0 : message.ip), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message === null || message === void 0 ? void 0 : message.created_at)))), message.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id,
      style: {
        display: "".concat(tabActive === 'order_history' ? 'inline-flex' : 'none')
      }
    }, getHistoryComment(message) && /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: getHistoryComment(message)
      }
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))), message.type === 2 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), message.comment, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    }))))), message.type === 3 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    }))))), message.type === 2 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), message.comment, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, {
      isReceived: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true,
      isReceived: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    }))))), message.type === 3 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, {
      isReceived: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true,
      isReceived: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    })))))));
  }))), !history && /*#__PURE__*/_react.default.createElement(_styles.SendForm, {
    className: "message-footer"
  }, /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.ChatContactInfoContainer, {
    disabled: !(canRead !== null && canRead !== void 0 && canRead.business),
    onClick: function onClick() {
      return setCanRead(_objectSpread(_objectSpread({}, canRead), {}, {
        business: !(canRead !== null && canRead !== void 0 && canRead.business)
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo, 'h_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.name), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS', 'Business')))), /*#__PURE__*/_react.default.createElement(_styles.ChatContactInfoContainer, {
    disabled: !(canRead !== null && canRead !== void 0 && canRead.customer),
    onClick: function onClick() {
      return setCanRead(_objectSpread(_objectSpread({}, canRead), {}, {
        customer: !(canRead !== null && canRead !== void 0 && canRead.customer)
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.name, " ", (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER', 'Customer')))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_styles.ChatContactInfoContainer, {
    disabled: !(canRead !== null && canRead !== void 0 && canRead.driver),
    onClick: function onClick() {
      return setCanRead(_objectSpread(_objectSpread({}, canRead), {}, {
        driver: !(canRead !== null && canRead !== void 0 && canRead.driver)
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.name, " ", (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))))), chatDisabled ? /*#__PURE__*/_react.default.createElement(_styles.NotSendMessage, null, /*#__PURE__*/_react.default.createElement(_MdcCloseOctagonOutline.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('NOT_SEND_MESSAGES', 'You can\'t send messages because the order has ended'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, messageList.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.QuickMessageWrapper, null, messageList.map(function (quickMessage, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Button, {
      key: i,
      color: "secundaryDark",
      onClick: function onClick() {
        return handleClickQuickMessage(quickMessage.text);
      }
    }, quickMessage.text);
  })), /*#__PURE__*/_react.default.createElement(_styles.Send, {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperSendInput, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "message",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_styles2.Input, {
        placeholder: t('WRITE_A_MESSAGE', 'Write a message...'),
        value: value,
        onChange: function onChange(e) {
          _onChange(e.target.value);
          onChangeMessage(e);
        },
        onFocus: unreadMessageControl,
        name: "message",
        ref: messageInputRef,
        autoComplete: "off",
        readOnly: isChatDisabled
      });
    },
    rules: {
      required: !image
    },
    defaultValue: ""
  }), !image && /*#__PURE__*/_react.default.createElement(_styles.SendImage, {
    htmlFor: "chat_image"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "image",
    id: "chat_image",
    accept: "image/png,image/jpg,image/jpeg",
    onChange: onChangeImage,
    disabled: isChatDisabled
  }), /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), image && /*#__PURE__*/_react.default.createElement(_styles.WrapperDeleteImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    circle: true,
    onClick: removeImage,
    type: "reset"
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSendMessageButton, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: sendMessage.loading || message === '' && !image || messages.loading,
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement(_IosSend.default, null), sendMessage.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('SENDING_MESSAGE', 'Sending...')) : /*#__PURE__*/_react.default.createElement("span", null, t('SEND', 'send'))))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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