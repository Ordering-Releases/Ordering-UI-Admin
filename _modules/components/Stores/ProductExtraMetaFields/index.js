"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraMetaFields = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BsTrash = _interopRequireDefault(require("@meronex/icons/bs/BsTrash"));
var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));
var _Shared = require("../../Shared");
var _Select = require("../../../styles/Select");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _reactHookForm = require("react-hook-form");
var _jsoneditorReact = require("jsoneditor-react");
require("jsoneditor-react/es/editor.min.css");
var _styles = require("./styles");
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
var ProductExtraMetaFieldsUI = function ProductExtraMetaFieldsUI(props) {
  var businessId = props.businessId,
    extraId = props.extraId,
    metaFieldsList = props.metaFieldsList,
    actionState = props.actionState,
    handleDeleteMetaField = props.handleDeleteMetaField,
    handeAddMetaField = props.handeAddMetaField;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)('text'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedMetaKey = _useState4[0],
    setSelectedMetaKey = _useState4[1];
  var _useState5 = (0, _react.useState)('1'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedBoolean = _useState6[0],
    setSelectedBoolean = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    metaKey = _useState8[0],
    setMetaKey = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    metaValue = _useState10[0],
    setMetaValue = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    json = _useState12[0],
    setJson = _useState12[1];
  var metaTypeOptions = [{
    value: 'integer',
    content: t('INTEGER', 'integer')
  }, {
    value: 'decimal',
    content: t('DECIMAL', 'decimal')
  }, {
    value: 'boolean',
    content: t('BOOLEAN', 'boolean')
  }, {
    value: 'text',
    content: t('TEXT', 'text')
  }, {
    value: 'json',
    content: t('JSON', 'json')
  }];
  var booleanOptions = [{
    value: '1',
    content: t('TRUE', 'true')
  }, {
    value: '0',
    content: t('FALSE', 'false')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangeJson = function handleChangeJson(v) {
    setJson(v);
  };
  var onSubmit = function onSubmit() {
    var value;
    if (selectedMetaKey === 'json') {
      value = JSON.stringify(json);
    } else if (selectedMetaKey === 'boolean') {
      value = selectedBoolean;
    } else {
      value = metaValue;
    }
    handeAddMetaField({
      key: metaKey,
      business_id: businessId,
      extra_id: extraId,
      value: value,
      value_type: selectedMetaKey
    });
  };
  (0, _react.useEffect)(function () {
    if (document.getElementById('meta_key')) {
      document.getElementById('meta_key').value = '';
    }
    if (document.getElementById('meta_value')) {
      document.getElementById('meta_value').value = '';
    }
  }, [selectedMetaKey]);
  (0, _react.useEffect)(function () {
    var _actionState$result, _actionState$result3;
    if (!actionState.loading && (_actionState$result = actionState.result) !== null && _actionState$result !== void 0 && _actionState$result.error) {
      var _actionState$result2;
      setAlertState({
        open: true,
        content: ((_actionState$result2 = actionState.result) === null || _actionState$result2 === void 0 ? void 0 : _actionState$result2.result) || [t('ERROR')]
      });
    }
    if (!actionState.loading && !((_actionState$result3 = actionState.result) !== null && _actionState$result3 !== void 0 && _actionState$result3.error)) {
      if (document.getElementById('meta_key')) {
        document.getElementById('meta_key').value = '';
      }
      if (document.getElementById('meta_value')) {
        document.getElementById('meta_value').value = '';
      }
    }
  }, [actionState]);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, metaFieldsList.loading ? /*#__PURE__*/_react.default.createElement(_styles.WrapMetaFields, null, _toConsumableArray(Array(3).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 30
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.WrapMetaFields, null, /*#__PURE__*/_react.default.createElement(_styles.MetaTitle, null, t('CUSTOM_FIELDS', 'Custom Fields')), metaFieldsList.metaFields.map(function (metaField) {
    return /*#__PURE__*/_react.default.createElement(_styles.MetaContainer, {
      key: metaField.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "meta_type"
    }, metaField.value_type), /*#__PURE__*/_react.default.createElement("div", {
      className: "meta_key"
    }, /*#__PURE__*/_react.default.createElement(_styles.RoundBorder, null, metaField.key)), /*#__PURE__*/_react.default.createElement("div", {
      className: "meta_value"
    }, /*#__PURE__*/_react.default.createElement(_styles.RoundBorder, null, metaField.value_type === 'boolean' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, metaField.value === '0' ? t('FALSE', 'fase') : t('TRUE', 'true')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, metaField.value)), /*#__PURE__*/_react.default.createElement(_BsTrash.default, {
      onClick: function onClick() {
        return handleDeleteMetaField(metaField.id);
      }
    })));
  }), /*#__PURE__*/_react.default.createElement(_styles.MetaAddForm, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.MetaAddContainer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "meta_type"
  }, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: selectedMetaKey || 'text',
    options: metaTypeOptions,
    onChange: function onChange(key) {
      return setSelectedMetaKey(key);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "meta_key"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "key",
    id: "meta_key",
    onChange: function onChange(e) {
      return setMetaKey(e.target.value);
    },
    placeholder: t('KEY', 'key'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Key is required').replace('_attribute_', t('KEY', 'Key'))
    })
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "meta_value"
  }, selectedMetaKey === 'text' && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "value",
    id: "meta_value",
    onChange: function onChange(e) {
      return setMetaValue(e.target.value);
    },
    placeholder: t('VALUE', 'Vlue'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Vlue'))
    })
  }), selectedMetaKey === 'integer' && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "value",
    onChange: function onChange(e) {
      return setMetaValue(e.target.value);
    },
    placeholder: t('VALUE', 'Vlue'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Vlue')),
      pattern: {
        value: /^\d+$/,
        message: t('VALIDATION_ERROR_INTEGER', 'Invalid integer').replace('_attribute_', t('VALUE', 'Vlue'))
      }
    })
  }), selectedMetaKey === 'decimal' && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "value",
    onChange: function onChange(e) {
      return setMetaValue(e.target.value);
    },
    placeholder: t('VALUE', 'Vlue'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Vlue')),
      pattern: {
        value: /^[+-]?\d*\.?\d+(?:[Ee][+-]?\d+)?$/,
        message: t('VALIDATION_ERROR_DECIMAL', 'Invalid decimal').replace('_attribute_', t('VALUE', 'Vlue'))
      }
    })
  }), selectedMetaKey === 'boolean' && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    className: "select-input",
    defaultValue: selectedBoolean || '1',
    options: booleanOptions,
    onChange: function onChange(val) {
      return setSelectedBoolean(val);
    }
  }), selectedMetaKey === 'json' && /*#__PURE__*/_react.default.createElement("div", {
    className: "json_editor"
  }, /*#__PURE__*/_react.default.createElement(_jsoneditorReact.JsonEditor, {
    value: json,
    onChange: function onChange(v) {
      return handleChangeJson(v);
    }
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null)))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR'),
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
  }));
};
var ProductExtraMetaFields = exports.ProductExtraMetaFields = function ProductExtraMetaFields(props) {
  var MetaFieldsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: ProductExtraMetaFieldsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ProductExtraMetaFields, MetaFieldsProps);
};