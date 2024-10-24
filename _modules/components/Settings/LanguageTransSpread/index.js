"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageTransSpread = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var LanguageTransSpreadUI = function LanguageTransSpreadUI(props) {
  var translationList = props.translationList,
    creationFormState = props.creationFormState,
    handleItemChange = props.handleItemChange,
    handleAfterSectionEnd = props.handleAfterSectionEnd,
    handleoutsideClickDeselects = props.handleoutsideClickDeselects,
    searchValue = props.searchValue;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    hotTableData = _useState2[0],
    setHotTableData = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var spreadSheetHeaderItems = [{
    title: t('KEY', 'Key'),
    code: 'key',
    readOnly: true,
    type: 'text'
  }, {
    title: t('TEXT', 'Text'),
    code: 'text',
    readOnly: false,
    type: 'text'
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleHotTableData = (0, _react.useCallback)(function () {
    if (translationList !== null && translationList !== void 0 && translationList.loading) return;
    var translations = [];
    if (searchValue) {
      var _translationList$tran;
      translations = translationList === null || translationList === void 0 || (_translationList$tran = translationList.translations) === null || _translationList$tran === void 0 ? void 0 : _translationList$tran.filter(function (translation) {
        var _translation$key, _translation$text;
        return ((_translation$key = translation.key) === null || _translation$key === void 0 ? void 0 : _translation$key.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase())) || ((_translation$text = translation.text) === null || _translation$text === void 0 ? void 0 : _translation$text.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase()));
      });
    } else {
      translations = JSON.parse(JSON.stringify(translationList === null || translationList === void 0 ? void 0 : translationList.translations));
    }
    setHotTableData(translations);
  }, [translationList, searchValue]);
  (0, _react.useEffect)(function () {
    handleHotTableData();
  }, [handleHotTableData]);
  (0, _react.useEffect)(function () {
    var _creationFormState$re;
    if (creationFormState !== null && creationFormState !== void 0 && (_creationFormState$re = creationFormState.result) !== null && _creationFormState$re !== void 0 && _creationFormState$re.error) {
      var _creationFormState$re2;
      setAlertState({
        open: true,
        content: creationFormState === null || creationFormState === void 0 || (_creationFormState$re2 = creationFormState.result) === null || _creationFormState$re2 === void 0 ? void 0 : _creationFormState$re2.result
      });
    }
  }, [creationFormState === null || creationFormState === void 0 ? void 0 : creationFormState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.TransSpreadContainer, null, translationList !== null && translationList !== void 0 && translationList.loading && !(creationFormState !== null && creationFormState !== void 0 && creationFormState.result) ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200
  }) : /*#__PURE__*/_react.default.createElement(_Shared.SpreadSheetEditor, {
    headerItems: spreadSheetHeaderItems,
    hotTableData: hotTableData,
    handleItemChange: handleItemChange,
    handleAfterSectionEnd: handleAfterSectionEnd,
    handleoutsideClickDeselects: handleoutsideClickDeselects
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('TRANSLATIONS', 'Translations'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var LanguageTransSpread = exports.LanguageTransSpread = function LanguageTransSpread(props) {
  var languageTransSpreadProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LanguageTransSpreadUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.LanguageTransSpread, languageTransSpreadProps);
};