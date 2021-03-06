"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignAmountOption = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("../../../styles");

var _reactNumericInput = _interopRequireDefault(require("react-numeric-input"));

var _styles2 = require("./styles");

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

var CampaignAmountOptionUI = function CampaignAmountOptionUI(props) {
  var type = props.type,
      ruleFormState = props.ruleFormState,
      handleChangeItem = props.handleChangeItem,
      onClose = props.onClose,
      handleChangeValue = props.handleChangeValue,
      isAddMode = props.isAddMode,
      handleUpdateRule = props.handleUpdateRule,
      formState = props.formState,
      handleAddRule = props.handleAddRule;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var ruleList = [{
    key: '>',
    name: t('MORE_THAN', 'More than')
  }, // { key: '=', name: t('EXACTLY', 'Exactly') },
  {
    key: '<',
    name: t('LESS_THAN', 'Less than')
  }];

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleSaveRule = function handleSaveRule() {
    var _ruleFormState$change, _ruleFormState$change2, _ruleFormState$change3;

    if (!((_ruleFormState$change = ruleFormState.changes) !== null && _ruleFormState$change !== void 0 && _ruleFormState$change.condition)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Condition is required').replace('_attribute_', t('CONDITION', 'Condition'))
      });
      return;
    }

    if (!((_ruleFormState$change2 = ruleFormState.changes) !== null && _ruleFormState$change2 !== void 0 && _ruleFormState$change2.value)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Value'))
      });
      return;
    }

    if (isAddMode) {
      var _formState$changes;

      var conditions = _toConsumableArray(formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.conditions);

      var updatedConditions = conditions.map(function (condition) {
        if (condition.type === type) {
          return _objectSpread(_objectSpread({}, condition), ruleFormState.changes);
        }

        return condition;
      });
      handleChangeItem('conditions', updatedConditions);
    } else if ((_ruleFormState$change3 = ruleFormState.changes) !== null && _ruleFormState$change3 !== void 0 && _ruleFormState$change3.id) {
      handleUpdateRule();
    } else {
      handleAddRule();
    }

    onClose && onClose();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options')), /*#__PURE__*/_react.default.createElement(_styles2.SubTitle, null, t('RELATIVE', 'Relative')), ruleList.map(function (item, i) {
    var _ruleFormState$change4, _ruleFormState$change5, _ruleFormState$change6;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        return handleChangeValue('condition', item.key);
      }
    }, ((_ruleFormState$change4 = ruleFormState.changes) === null || _ruleFormState$change4 === void 0 ? void 0 : _ruleFormState$change4.condition) === item.key ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, item.name))), ((_ruleFormState$change5 = ruleFormState.changes) === null || _ruleFormState$change5 === void 0 ? void 0 : _ruleFormState$change5.condition) === item.key && /*#__PURE__*/_react.default.createElement(_styles2.DaysContent, null, /*#__PURE__*/_react.default.createElement(_reactNumericInput.default, {
      placeholder: "00",
      onKeyPress: function onKeyPress(e) {
        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      },
      value: ((_ruleFormState$change6 = ruleFormState.changes) === null || _ruleFormState$change6 === void 0 ? void 0 : _ruleFormState$change6.value) || '',
      onChange: function onChange(value) {
        return handleChangeValue('value', value);
      },
      min: 0
    })));
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: handleSaveRule
  }, t('DONE', 'Done'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CAMPAIGN', 'Campaign'),
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

var CampaignAmountOption = function CampaignAmountOption(props) {
  var campaignAmountOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CampaignAmountOptionUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CampaignAmountOption, campaignAmountOptionProps);
};

exports.CampaignAmountOption = CampaignAmountOption;