"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageTransSpread = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("./styles");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Shared = require("../../Shared");

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

var LanguageTransSpreadUI = function LanguageTransSpreadUI(props) {
  var translationList = props.translationList,
      creationFormState = props.creationFormState,
      handleItemChange = props.handleItemChange,
      handleAfterSectionEnd = props.handleAfterSectionEnd,
      handleoutsideClickDeselects = props.handleoutsideClickDeselects,
      searchValue = props.searchValue;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
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

      translations = translationList === null || translationList === void 0 ? void 0 : (_translationList$tran = translationList.translations) === null || _translationList$tran === void 0 ? void 0 : _translationList$tran.filter(function (translation) {
        var _translation$key, _translation$text;

        return ((_translation$key = translation.key) === null || _translation$key === void 0 ? void 0 : _translation$key.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase())) || ((_translation$text = translation.text) === null || _translation$text === void 0 ? void 0 : _translation$text.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase()));
      });
    } else {
      translations = _toConsumableArray(translationList === null || translationList === void 0 ? void 0 : translationList.translations);
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
        content: creationFormState === null || creationFormState === void 0 ? void 0 : (_creationFormState$re2 = creationFormState.result) === null || _creationFormState$re2 === void 0 ? void 0 : _creationFormState$re2.result
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

var LanguageTransSpread = function LanguageTransSpread(props) {
  var languageTransSpreadProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LanguageTransSpreadUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.LanguageTransSpread, languageTransSpreadProps);
};

exports.LanguageTransSpread = LanguageTransSpread;