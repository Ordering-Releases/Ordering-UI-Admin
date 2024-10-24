"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductAddForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("../../../styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles2 = require("./styles");
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
var BusinessProductAddFormUI = function BusinessProductAddFormUI(props) {
  var _configs$appointments, _formState$changes, _formState$changes2, _formState$changes3, _formState$changes$ty, _formState$changes4, _formState$changes5, _formState$changes$du, _formState$changes6, _formState$changes7, _formState$changes8, _formState$changes9;
  var formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleUpdateClick = props.handleUpdateClick,
    handlechangeImage = props.handlechangeImage,
    isTutorialMode = props.isTutorialMode,
    handleTutorialSkip = props.handleTutorialSkip,
    handleChangeItem = props.handleChangeItem;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var productImageInputRef = (0, _react.useRef)(null);
  var isEnabledAppointmentsFeature = configs === null || configs === void 0 || (_configs$appointments = configs.appointments) === null || _configs$appointments === void 0 ? void 0 : _configs$appointments.value;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    hours = _useState2[0],
    setHours = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    minutes = _useState4[0],
    setMinutes = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    cropState = _useState8[0],
    setCropState = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    curPreorderTime = _useState10[0],
    setCurPreorderTime = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isCustom = _useState12[0],
    setIsCustom = _useState12[1];
  var typeList = [{
    value: 'item',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('ITEM', 'Item'))
  }, {
    value: 'service',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SERVICE', 'Service'))
  }];
  var durationList = [{
    value: 15,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "15 ", /*#__PURE__*/_react.default.createElement("span", null, t('MINUTES', 'minutes')))
  }, {
    value: 30,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "30 ", /*#__PURE__*/_react.default.createElement("span", null, t('MINUTES', 'minutes')))
  }, {
    value: 45,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "45 ", /*#__PURE__*/_react.default.createElement("span", null, t('MINUTES', 'minutes')))
  }, {
    value: 60,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "1 ", /*#__PURE__*/_react.default.createElement("span", null, ('HOUR', 'hour')))
  }, {
    value: 'custom',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("span", null, ('CUSTOME', 'custom')))
  }];
  var setTimeList = function setTimeList() {
    var _hours = [];
    var _minutes = [];
    for (var i = 0; i < 24; i++) {
      var text = (i < 10 ? '0' : ' ') + i;
      _hours.push({
        text: text,
        hour: i
      });
    }
    for (var _i = 0; _i < 60; _i++) {
      var _text = (_i < 10 ? '0' : '') + _i;
      _minutes.push({
        text: _text,
        minute: _i
      });
    }
    setHours(_hours);
    setMinutes(_minutes);
  };
  var handleClickImage = function handleClickImage() {
    productImageInputRef.current.click();
  };
  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;
      var type = files[0].type.split('/')[0];
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }
      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }
      var reader = new window.FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setCropState({
          name: 'images',
          data: reader.result,
          open: true
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
      handlechangeImage(files[0]);
    }
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg));
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangePreorderTime = function handleChangePreorderTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurPreorderTime(_objectSpread(_objectSpread({}, curPreorderTime), {}, _defineProperty({}, type, value)));
    var preorderTime = 0;
    if (type === 'hour') preorderTime = parseInt(value) * 60 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute);else preorderTime = parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour) * 60 + parseInt(value);
    handleChangeItem({
      duration: preorderTime
    });
  };
  var handleChangeSelect = function handleChangeSelect(value) {
    setCurPreorderTime({
      hour: '0',
      minute: '0'
    });
    if (value === 'custom') {
      setIsCustom(true);
      handleChangeItem({
        duration: null
      });
      return;
    }
    setIsCustom(false);
    handleChangeItem({
      duration: value
    });
  };
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.result]);
  (0, _react.useEffect)(function () {
    setTimeList();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, null, /*#__PURE__*/_react.default.createElement("h1", null, t('NEW_PRODUCT', 'New product')), /*#__PURE__*/_react.default.createElement(_styles2.ProductImage, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      productImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState !== null && formState !== void 0 && formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !(formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.images) ? /*#__PURE__*/_react.default.createElement("div", null) : (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.images) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.images,
    alt: "business type image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))))))), isEnabledAppointmentsFeature && (typeList === null || typeList === void 0 ? void 0 : typeList.length) > 1 && /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, {
    notAllow: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: typeList,
    className: "select",
    defaultValue: (_formState$changes$ty = formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.type) !== null && _formState$changes$ty !== void 0 ? _formState$changes$ty : 'item',
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeItem({
        type: value
      });
    }
  })), (formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.type) === 'service' && /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DURATION', 'Duration')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: durationList,
    className: "select",
    defaultValue: isCustom ? 'custom' : (_formState$changes$du = formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.duration) !== null && _formState$changes$du !== void 0 ? _formState$changes$du : '',
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeSelect(value);
    }
  })), isCustom && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CUSTOM_DURATION', 'Custom duration')), /*#__PURE__*/_react.default.createElement(_styles2.TimeContent, null, /*#__PURE__*/_react.default.createElement(_styles2.TimeBlock, null, /*#__PURE__*/_react.default.createElement("select", {
    value: curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour,
    name: "hour",
    onChange: handleChangePreorderTime
  }, hours === null || hours === void 0 ? void 0 : hours.map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: hour.hour,
      key: i
    }, hour.text);
  })), /*#__PURE__*/_react.default.createElement("span", null, ":"), /*#__PURE__*/_react.default.createElement("select", {
    value: curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute,
    name: "minute",
    onChange: handleChangePreorderTime
  }, minutes === null || minutes === void 0 ? void 0 : minutes.map(function (minute, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: minute.minute,
      key: i
    }, minute.text);
  })))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRODUCT_NAME', 'Product name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "name",
    defaultValue: (formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.name) || '',
    onChange: handleChangeInput,
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "price",
    defaultValue: (formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.price) || '',
    onChange: handleChangeInput,
    placeholder: t('WRITE_PRICE', 'Write price'),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    name: "description",
    defaultValue: (formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.description) || '',
    onChange: handleChangeInput,
    placeholder: t('WRITE_DESCRIPTION', 'Write description'),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, isTutorialMode && /*#__PURE__*/_react.default.createElement(_styles2.SkipButton, {
    onClick: function onClick() {
      return handleTutorialSkip();
    }
  }, t('TUTORIAL_SKIP', 'Skip')), formState && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "7.6px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 1,
    onClick: function onClick() {
      return Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 1 && handleUpdateClick();
    }
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : isTutorialMode ? t('SAVE_AND_CONTINUE', 'Save and continue') : t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('IMAGE_CROP', 'Image crop'),
    open: cropState === null || cropState === void 0 ? void 0 : cropState.open,
    onRemove: function onRemove() {
      return setCropState(_objectSpread(_objectSpread({}, cropState), {}, {
        open: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })));
};
var BusinessProductAddForm = exports.BusinessProductAddForm = function BusinessProductAddForm(props) {
  var businessProductAddProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductAddFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessProductCreator, businessProductAddProps);
};