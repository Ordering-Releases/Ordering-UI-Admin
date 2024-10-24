"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryUsersListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _utils = require("../../../utils");
var _moment = _interopRequireDefault(require("moment"));
var _styles2 = require("./styles");
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
var DeliveryUsersListing = exports.DeliveryUsersListing = function DeliveryUsersListing(props) {
  var _configs$general_hour, _configs$general_hour2, _driversList$users, _driversList$users2;
  var date = props.date,
    driversList = props.driversList,
    paginationProps = props.paginationProps,
    getDrivers = props.getDrivers,
    handleSelectDriver = props.handleSelectDriver,
    selectedGroup = props.selectedGroup,
    setStackEventsState = props.setStackEventsState;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)({
      open: false,
      handleOnConfirm: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirmAdmin = _useState2[0],
    setConfirmAdmin = _useState2[1];
  var is12hours = (configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value) === 'hh:mma';
  var hourFormat = configs === null || configs === void 0 || (_configs$general_hour2 = configs.general_hour_format) === null || _configs$general_hour2 === void 0 ? void 0 : _configs$general_hour2.value;
  var handleChangePage = function handleChangePage(page) {
    getDrivers(page, 10, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getDrivers(expectedPage, pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
  };
  var getDatesInRange = function getDatesInRange(dateRange) {
    var start = (0, _moment.default)(dateRange[0]);
    var end = (0, _moment.default)(dateRange[1]);
    var dates = [];
    var current = start;
    while (current <= end) {
      dates.push(current.format('YYYY-MM-DD'));
      current = current.clone().add(1, 'days');
    }
    return dates;
  };
  var handleHourBlockWidth = function handleHourBlockWidth(block) {
    if (!block) return;
    var width = 0;
    var startHour = (0, _moment.default)(block === null || block === void 0 ? void 0 : block.start).hour();
    var endHour = (0, _moment.default)(block === null || block === void 0 ? void 0 : block.end).hour();
    var startMinutes = (0, _moment.default)(block === null || block === void 0 ? void 0 : block.start).minutes() / 15;
    var endMinutes = (0, _moment.default)(block === null || block === void 0 ? void 0 : block.end).minutes() / 15;
    var minutesDiff = startMinutes < endMinutes ? endMinutes - startMinutes : startMinutes - endMinutes;
    if (startMinutes !== endMinutes) {
      width = (startHour === 0 ? endHour - 1 - startHour : endHour - startHour) * 86 + minutesDiff * 21.5;
    } else {
      width = (startHour === 0 ? endHour - 1 - startHour : endHour - startHour) * 86;
    }
    return width;
  };
  var handleBlockHourToShow = function handleBlockHourToShow(block, user) {
    var _user$name, _user$lastname;
    if (!block) return;
    return block.start && block.end && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.Block, {
      innerWidth: handleHourBlockWidth(block),
      rowPosition: (0, _moment.default)(block === null || block === void 0 ? void 0 : block.start).hour(),
      cellPosition: (0, _moment.default)(block === null || block === void 0 ? void 0 : block.start).minutes() / 15,
      cellWidth: 86,
      cellSections: 21.5,
      onClick: function onClick() {
        return handleSelectDriver(user, block);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.UserName, null, "".concat((_user$name = user === null || user === void 0 ? void 0 : user.name) !== null && _user$name !== void 0 ? _user$name : '', " ").concat((_user$lastname = user === null || user === void 0 ? void 0 : user.lastname) !== null && _user$lastname !== void 0 ? _user$lastname : '')), /*#__PURE__*/_react.default.createElement("p", null, (0, _moment.default)(block.start).format(hourFormat), " - ", (0, _moment.default)(block.end).format(hourFormat))));
  };
  var handleBlockWeekToShow = function handleBlockWeekToShow(block, user, allBlocks, blockByDay) {
    if (!block) return;
    return block.start && block.end && ((blockByDay === null || blockByDay === void 0 ? void 0 : blockByDay.length) === 1 ? /*#__PURE__*/_react.default.createElement(_styles2.Block, {
      innerWidth: 106,
      rowPosition: allBlocks.indexOf((0, _moment.default)(block === null || block === void 0 ? void 0 : block.start).format('YYYY-MM-DD')),
      cellPosition: 4,
      cellWidth: 160,
      cellSections: 6.67,
      onClick: function onClick() {
        return handleSelectDriver(user, block);
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, (0, _moment.default)(block.start).format(hourFormat), " - ", (0, _moment.default)(block.end).format(hourFormat))) : /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
      rowPosition: allBlocks.indexOf((0, _moment.default)(block === null || block === void 0 ? void 0 : block.start).format('YYYY-MM-DD')),
      cellPosition: (0, _moment.default)(block === null || block === void 0 ? void 0 : block.start).hour(),
      cellWidth: 160,
      cellSections: 6.67
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "lightPrimary",
      borderRadius: "8px",
      onClick: function onClick() {
        return setStackEventsState({
          open: true,
          events: blockByDay,
          user: user
        });
      }
    }, blockByDay === null || blockByDay === void 0 ? void 0 : blockByDay.length, " ", t('BLOCKS', 'Blocks'))));
  };
  var getBlocksByDate = function getBlocksByDate(blocks, _date) {
    return blocks === null || blocks === void 0 ? void 0 : blocks.filter(function (obj) {
      var objDate = (0, _moment.default)(obj.start);
      return objDate.date() === (0, _moment.default)(_date).date();
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.UsersListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersConatiner, null, /*#__PURE__*/_react.default.createElement(_styles2.UserTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_styles2.ThId, null, t('ID', 'ID')), /*#__PURE__*/_react.default.createElement(_styles2.ThName, null, t('NAME', 'Name')), getDatesInRange(date).length === 1 && (is12hours ? _utils.TwelveHours : _utils.TwentyFourHours).map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.HoursHeader, {
      key: i
    }, hour);
  }), getDatesInRange(date).length > 1 && getDatesInRange(date).map(function (_date, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.WeekHeader, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", null, (0, _moment.default)(_date).format('ddd')), /*#__PURE__*/_react.default.createElement("h4", null, (0, _moment.default)(_date).date()));
  }))), driversList !== null && driversList !== void 0 && driversList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserIdWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))))));
  }) : driversList === null || driversList === void 0 || (_driversList$users = driversList.users) === null || _driversList$users === void 0 ? void 0 : _driversList$users.map(function (user, i) {
    var _user$name2, _user$lastname2, _getDatesInRange, _user$delivery_blocks, _user$delivery_blocks2, _getDatesInRange2;
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.UserRow, null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserIdWrapper, null, user === null || user === void 0 ? void 0 : user.id)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage(user === null || user === void 0 ? void 0 : user.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "bold"
    }, "".concat((_user$name2 = user.name) !== null && _user$name2 !== void 0 ? _user$name2 : '', " ").concat((_user$lastname2 = user === null || user === void 0 ? void 0 : user.lastname) !== null && _user$lastname2 !== void 0 ? _user$lastname2 : '')), /*#__PURE__*/_react.default.createElement("span", null, user === null || user === void 0 ? void 0 : user.email)), ((user === null || user === void 0 ? void 0 : user.phone_verified) || (user === null || user === void 0 ? void 0 : user.email_verified)) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItemsContainer, null, !!(user !== null && user !== void 0 && user.phone_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null), t('VERIFIED', 'Verified')), !!(user !== null && user !== void 0 && user.email_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null), t('VERIFIED', 'Verified'))))), ((_getDatesInRange = getDatesInRange(date)) === null || _getDatesInRange === void 0 ? void 0 : _getDatesInRange.length) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(24 - (user === null || user === void 0 || (_user$delivery_blocks = user.delivery_blocks) === null || _user$delivery_blocks === void 0 ? void 0 : _user$delivery_blocks.length)).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_styles2.EmptyBlock, {
        onClick: function onClick() {
          return handleSelectDriver(user, null);
        }
      }));
    }), user === null || user === void 0 || (_user$delivery_blocks2 = user.delivery_blocks) === null || _user$delivery_blocks2 === void 0 ? void 0 : _user$delivery_blocks2.map(function (block, j) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: j
      }, handleBlockHourToShow(block, user));
    })), ((_getDatesInRange2 = getDatesInRange(date)) === null || _getDatesInRange2 === void 0 ? void 0 : _getDatesInRange2.length) > 1 && getDatesInRange(date).map(function (_date, i) {
      var _getBlocksByDate;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("td", {
        key: i
      }, (_getBlocksByDate = getBlocksByDate(user === null || user === void 0 ? void 0 : user.delivery_blocks, _date)) === null || _getBlocksByDate === void 0 ? void 0 : _getBlocksByDate.map(function (block, j) {
        return j === 0 && handleBlockWeekToShow(block, user, getDatesInRange(date), getBlocksByDate(user === null || user === void 0 ? void 0 : user.delivery_blocks, _date));
      }), /*#__PURE__*/_react.default.createElement(_styles2.EmptyBlock, {
        onClick: function onClick() {
          return handleSelectDriver(user, null, _date);
        }
      })));
    })));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.UsersBottomContainer, null, (driversList === null || driversList === void 0 || (_driversList$users2 = driversList.users) === null || _driversList$users2 === void 0 ? void 0 : _driversList$users2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize
  })))), /*#__PURE__*/_react.default.createElement(_Shared.ConfirmAdmin, {
    open: confirmAdmin.open,
    onClose: function onClose() {
      return setConfirmAdmin(_objectSpread(_objectSpread({}, confirmAdmin), {}, {
        open: false
      }));
    },
    onConfirm: confirmAdmin.handleOnConfirm
  }));
};