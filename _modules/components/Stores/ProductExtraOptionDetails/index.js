"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptionDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("../../../styles");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _ProductExtraOptionMetaFields = require("../ProductExtraOptionMetaFields");
var _ProductExtraSubOptionMetaFields = require("../ProductExtraSubOptionMetaFields");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactHookForm = require("react-hook-form");
var _ProductExtraSuboption = require("../ProductExtraSuboption");
var _ProductExtraOptionForm = require("../ProductExtraOptionForm");
var _ProductOptionExternalId = require("../ProductOptionExternalId");
var _SnoozeComponent = require("../SnoozeComponent");
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
var ProductExtraOptionDetailsUI = function ProductExtraOptionDetailsUI(props) {
  var _optionState$option2, _settingChangeState$c, _settingChangeState$c2, _optionState$option3, _settingChangeState$c3, _settingChangeState$c4, _optionState$option4, _optionState$option5, _optionState$option7, _changesState$changes3, _optionState$option8, _changesState$changes4, _settingChangeState$c5, _settingChangeState$c6, _optionState$option9, _optionState$option10, _changesState$changes5, _settingChangeState$c7, _settingChangeState$c8, _optionState$option11, _optionState$option12, _changesState$changes6;
  var optionState = props.optionState,
    optionChangesState = props.optionChangesState,
    handleOptionFiles = props.handleOptionFiles,
    handleChangeOptionInput = props.handleChangeOptionInput,
    handleChangeOptionEnable = props.handleChangeOptionEnable,
    changesState = props.changesState,
    editSubOptionId = props.editSubOptionId,
    handleChangeSubOptionImage = props.handleChangeSubOptionImage,
    handleDeteteSubOption = props.handleDeteteSubOption,
    handleOptionSetting = props.handleOptionSetting,
    settingChangeState = props.settingChangeState,
    handleChangeSettingsChangeState = props.handleChangeSettingsChangeState,
    conditionalOptions = props.conditionalOptions,
    conditionalSubOptions = props.conditionalSubOptions,
    conditionalOptionId = props.conditionalOptionId,
    conditionalSubOptionId = props.conditionalSubOptionId,
    handleChangeConditionalOption = props.handleChangeConditionalOption,
    handleChangeConditionalSubOption = props.handleChangeConditionalSubOption,
    handleChangeDefaultSuboption = props.handleChangeDefaultSuboption,
    handleUpdateSubOption = props.handleUpdateSubOption,
    handleUpdateOption = props.handleUpdateOption,
    business = props.business,
    extra = props.extra,
    handleAddOption = props.handleAddOption,
    handleDeteteOption = props.handleDeteteOption,
    isMaxError = props.isMaxError,
    handleChangeItem = props.handleChangeItem,
    isAddForm = props.isAddForm,
    setIsAddForm = props.setIsAddForm,
    handleDuplicateOption = props.handleDuplicateOption,
    handleDuplicateSubOption = props.handleDuplicateSubOption,
    dragoverSubOptionId = props.dragoverSubOptionId,
    isSubOptionsBottom = props.isSubOptionsBottom,
    handleDragStart = props.handleDragStart,
    hanldeDragOver = props.hanldeDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    openModal = _useState6[0],
    setOpenModal = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedSubOptionId = _useState8[0],
    setSelectedSubOptionId = _useState8[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    control = _useForm.control,
    setValue = _useForm.setValue;
  var _useState9 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    cropState = _useState10[0],
    setCropState = _useState10[1];
  var _useState11 = (0, _react.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    externalId = _useState12[0],
    setExternalId = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isExtraOptionSnooze = _useState14[0],
    setIsExtraOptionSnooze = _useState14[1];
  var handleClickSubOptionImage = function handleClickSubOptionImage(id) {
    document.getElementById(id).click();
  };
  var handleSubOptionFiles = function handleSubOptionFiles(files, subOptionId) {
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
          name: 'image',
          data: reader.result,
          open: true,
          id: subOptionId
        });
        if (!subOptionId) {
          setValue('image', reader.result);
        }
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
      if (subOptionId) {
        handleChangeSubOptionImage(files[0], subOptionId);
      }
    }
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg), cropState === null || cropState === void 0 ? void 0 : cropState.id);
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var handleDeleteOption = function handleDeleteOption() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeteteOption();
      }
    });
  };
  var handleUpdateExternalId = function handleUpdateExternalId() {
    handleUpdateOption({
      external_id: externalId
    });
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
      externalId: false
    }));
  };
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
    var _optionState$option;
    setExternalId(optionState === null || optionState === void 0 || (_optionState$option = optionState.option) === null || _optionState$option === void 0 ? void 0 : _optionState$option.external_id);
  }, [optionState === null || optionState === void 0 || (_optionState$option2 = optionState.option) === null || _optionState$option2 === void 0 ? void 0 : _optionState$option2.external_id]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_OPTION', 'Product option')), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "snooze",
    color: "lightGreen",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsExtraOptionSnooze(true);
    }
  }, t('SNOOZE', 'Snooze')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        option: true
      }));
    }
  }, t('CUSTOM_FIELDS', 'Custom Fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: handleDuplicateOption
  }, t('DUPLICATE', 'Duplicate')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        externalId: true
      }));
    }
  }, t('EXTERNAL_ID', 'External ID')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteOption();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_ProductExtraOptionForm.ProductExtraOptionForm, {
    optionState: optionState,
    optionChangesState: optionChangesState,
    isMaxError: isMaxError,
    handleOptionFiles: handleOptionFiles,
    handleChangeOptionInput: handleChangeOptionInput,
    handleChangeOptionEnable: handleChangeOptionEnable,
    handleOptionSetting: handleOptionSetting,
    conditionalOptions: conditionalOptions,
    conditionalSubOptions: conditionalSubOptions,
    conditionalOptionId: conditionalOptionId,
    conditionalSubOptionId: conditionalSubOptionId,
    handleChangeConditionalOption: handleChangeConditionalOption,
    handleChangeConditionalSubOption: handleChangeConditionalSubOption,
    handleUpdateOption: handleUpdateOption
  }), /*#__PURE__*/_react.default.createElement(_styles2.Dvider, null), /*#__PURE__*/_react.default.createElement(_styles2.ModifierOptionsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MODIFIER_OPTIONS', 'Modifier options')), /*#__PURE__*/_react.default.createElement(_styles2.SubOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftSubOptionContent, {
    header: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.SubOptionImage, null), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, null))), /*#__PURE__*/_react.default.createElement(_styles2.RightSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), (typeof (settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c = settingChangeState.changes) === null || _settingChangeState$c === void 0 ? void 0 : _settingChangeState$c.with_half_option) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c2 = settingChangeState.changes) === null || _settingChangeState$c2 === void 0 ? void 0 : _settingChangeState$c2.with_half_option : optionState === null || optionState === void 0 || (_optionState$option3 = optionState.option) === null || _optionState$option3 === void 0 ? void 0 : _optionState$option3.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('HALF_PRICE', 'Half price')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), (typeof (settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c3 = settingChangeState.changes) === null || _settingChangeState$c3 === void 0 ? void 0 : _settingChangeState$c3.allow_suboption_quantity) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c4 = settingChangeState.changes) === null || _settingChangeState$c4 === void 0 ? void 0 : _settingChangeState$c4.allow_suboption_quantity : optionState === null || optionState === void 0 || (_optionState$option4 = optionState.option) === null || _optionState$option4 === void 0 ? void 0 : _optionState$option4.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('PRESELECT', 'Preselect'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    header: true
  }))), optionState === null || optionState === void 0 || (_optionState$option5 = optionState.option) === null || _optionState$option5 === void 0 || (_optionState$option5 = _optionState$option5.suboptions) === null || _optionState$option5 === void 0 ? void 0 : _optionState$option5.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (subOption, index) {
    var _optionState$option6;
    var isLastSubOption = index === (optionState === null || optionState === void 0 || (_optionState$option6 = optionState.option) === null || _optionState$option6 === void 0 ? void 0 : _optionState$option6.suboptions.length) - 1;
    return /*#__PURE__*/_react.default.createElement(_ProductExtraSuboption.ProductExtraSuboption, {
      key: subOption.id,
      subOption: subOption,
      optionState: optionState,
      editSubOptionId: editSubOptionId,
      settingChangeState: settingChangeState,
      changesState: changesState,
      setSelectedSubOptionId: setSelectedSubOptionId,
      openModal: openModal,
      setOpenModal: setOpenModal,
      handleChangeDefaultSuboption: handleChangeDefaultSuboption,
      handleDeteteSubOption: handleDeteteSubOption,
      handleUpdateSubOption: handleUpdateSubOption,
      isLastSubOption: isLastSubOption,
      dragoverSubOptionId: dragoverSubOptionId,
      isSubOptionsBottom: isSubOptionsBottom,
      handleDragStart: handleDragStart,
      hanldeDragOver: hanldeDragOver,
      handleDrop: handleDrop,
      handleDragEnd: handleDragEnd,
      handleDuplicateSubOption: handleDuplicateSubOption
    });
  }), isAddForm && /*#__PURE__*/_react.default.createElement(_styles2.AdddSubOptionForm, {
    onSubmit: handleSubmit(handleAddOption)
  }, /*#__PURE__*/_react.default.createElement(_styles2.LeftSubOptionContent, {
    header: true
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "image",
    control: control,
    render: function render() {
      var _changesState$result, _changesState$result2, _changesState$changes, _changesState$changes2;
      return /*#__PURE__*/_react.default.createElement(_styles2.SubOptionImage, {
        onClick: function onClick() {
          return handleClickSubOptionImage('add_suboption_image');
        }
      }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ExamineClick, {
        onFiles: function onFiles(files) {
          return handleSubOptionFiles(files, null);
        },
        childId: "add_suboption_image",
        accept: "image/png, image/jpeg, image/jpg",
        disabled: optionState.loading
      }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DragAndDrop, {
        onDrop: function onDrop(dataTransfer) {
          return handleSubOptionFiles(dataTransfer.files, 'add_suboption_image');
        },
        accept: "image/png, image/jpeg, image/jpg",
        disabled: optionState.loading
      }, changesState !== null && changesState !== void 0 && (_changesState$result = changesState.result) !== null && _changesState$result !== void 0 && _changesState$result.image && editSubOptionId === null ? /*#__PURE__*/_react.default.createElement("img", {
        src: changesState === null || changesState === void 0 || (_changesState$result2 = changesState.result) === null || _changesState$result2 === void 0 ? void 0 : _changesState$result2.image,
        alt: "sub option image",
        loading: "lazy"
      }) : (changesState === null || changesState === void 0 || (_changesState$changes = changesState.changes) === null || _changesState$changes === void 0 ? void 0 : _changesState$changes.image) && editSubOptionId === null && /*#__PURE__*/_react.default.createElement("img", {
        src: changesState === null || changesState === void 0 || (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.image,
        alt: "sub option image",
        loading: "lazy"
      }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
        small: true
      }, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))));
    },
    defaultValue: ""
  }), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 || (_optionState$option7 = optionState.option) === null || _optionState$option7 === void 0 || (_optionState$option7 = _optionState$option7.suboptions) === null || _optionState$option7 === void 0 ? void 0 : _optionState$option7.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    autoComplete: "off",
    placeholder: t('NAME', 'Name'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 || (_changesState$changes3 = changesState.changes) === null || _changesState$changes3 === void 0 ? void 0 : _changesState$changes3.name) || '',
    onKeyDown: function onKeyDown(e) {
      var code = e.keyCode || e.which;
      if (code === 13) {
        e.preventDefault();
        return false;
      }
    },
    ref: register({
      required: t('NAME_REQUIRED', 'The name is required.')
    }),
    readOnly: optionState === null || optionState === void 0 ? void 0 : optionState.loading
  }))), /*#__PURE__*/_react.default.createElement(_styles2.RightSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 || (_optionState$option8 = optionState.option) === null || _optionState$option8 === void 0 || (_optionState$option8 = _optionState$option8.suboptions) === null || _optionState$option8 === void 0 ? void 0 : _optionState$option8.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "price",
    placeholder: t('PRICE', 'Price'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 || (_changesState$changes4 = changesState.changes) === null || _changesState$changes4 === void 0 ? void 0 : _changesState$changes4.price) || 0,
    ref: register(),
    onKeyPress: function onKeyPress(e) {
      var code = e.keyCode || e.which;
      if (code === 13) {
        e.preventDefault();
        return false;
      }
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), (typeof (settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c5 = settingChangeState.changes) === null || _settingChangeState$c5 === void 0 ? void 0 : _settingChangeState$c5.with_half_option) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c6 = settingChangeState.changes) === null || _settingChangeState$c6 === void 0 ? void 0 : _settingChangeState$c6.with_half_option : optionState === null || optionState === void 0 || (_optionState$option9 = optionState.option) === null || _optionState$option9 === void 0 ? void 0 : _optionState$option9.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 || (_optionState$option10 = optionState.option) === null || _optionState$option10 === void 0 || (_optionState$option10 = _optionState$option10.suboptions) === null || _optionState$option10 === void 0 ? void 0 : _optionState$option10.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "half_price",
    placeholder: t('HALF_PRICE', 'Half price'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 || (_changesState$changes5 = changesState.changes) === null || _changesState$changes5 === void 0 ? void 0 : _changesState$changes5.half_price) || '',
    ref: register(),
    onKeyPress: function onKeyPress(e) {
      var code = e.keyCode || e.which;
      if (code === 13) {
        e.preventDefault();
        return false;
      }
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), (typeof (settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c7 = settingChangeState.changes) === null || _settingChangeState$c7 === void 0 ? void 0 : _settingChangeState$c7.allow_suboption_quantity) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 || (_settingChangeState$c8 = settingChangeState.changes) === null || _settingChangeState$c8 === void 0 ? void 0 : _settingChangeState$c8.allow_suboption_quantity : optionState === null || optionState === void 0 || (_optionState$option11 = optionState.option) === null || _optionState$option11 === void 0 ? void 0 : _optionState$option11.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 || (_optionState$option12 = optionState.option) === null || _optionState$option12 === void 0 || (_optionState$option12 = _optionState$option12.suboptions) === null || _optionState$option12 === void 0 ? void 0 : _optionState$option12.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "max",
    placeholder: t('MAX', 'Max'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 || (_changesState$changes6 = changesState.changes) === null || _changesState$changes6 === void 0 ? void 0 : _changesState$changes6.max) || '',
    ref: register(),
    onKeyPress: function onKeyPress(e) {
      var code = e.keyCode || e.which;
      if (code === 13) {
        e.preventDefault();
        return false;
      }
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    maxHeight: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    name: "preselected",
    className: "default"
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null))))), !isAddForm && /*#__PURE__*/_react.default.createElement(_styles2.AddNewOptionButton, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    className: "add-option-btn",
    onClick: function onClick() {
      return setIsAddForm(true);
    }
  }, t('ADD_SUBOPTION', 'Add suboption')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: false
      }));
    },
    onAccept: function onAccept() {
      return setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: false
      }));
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "600px",
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
  }), (openModal === null || openModal === void 0 ? void 0 : openModal.option) && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    overflow: "initial",
    padding: "0px",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.option,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        option: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptionMetaFields.ProductExtraOptionMetaFields, {
    businessId: business.id,
    extraId: extra.id,
    optionId: optionState.option.id
  })), (openModal === null || openModal === void 0 ? void 0 : openModal.subOptionMetaFields) && selectedSubOptionId && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.subOptionMetaFields,
    onClose: function onClose() {
      setSelectedSubOptionId(null);
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        option: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraSubOptionMetaFields.ProductExtraSubOptionMetaFields, {
    businessId: business.id,
    extraId: extra.id,
    optionId: optionState.option.id,
    subOptionId: selectedSubOptionId
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    title: t('PRODUCT_SUBOPTION', 'Product suboption'),
    open: openModal === null || openModal === void 0 ? void 0 : openModal.externalId,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        externalId: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductOptionExternalId.ProductOptionExternalId, {
    value: externalId,
    handleChange: setExternalId,
    handleUpdate: handleUpdateExternalId
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('IMAGE_CROP', 'Image crop'),
    open: cropState === null || cropState === void 0 ? void 0 : cropState.open,
    onRemove: function onRemove() {
      return setCropState(_objectSpread(_objectSpread({}, cropState), {}, {
        open: false
      }));
    },
    className: "ordering-img-crop"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "85%",
    maxWidth: "1000px",
    open: isExtraOptionSnooze,
    onClose: function onClose() {
      return setIsExtraOptionSnooze(false);
    },
    closeOnBackdrop: false
  }, /*#__PURE__*/_react.default.createElement(_SnoozeComponent.SnoozeComponent, {
    isAutomaticUpdate: true,
    dataState: optionState === null || optionState === void 0 ? void 0 : optionState.option,
    handleUpdate: handleUpdateOption,
    handleChangeFormState: handleChangeSettingsChangeState,
    formState: settingChangeState,
    onClose: function onClose() {
      return setIsExtraOptionSnooze(false);
    }
  })));
};
var ProductExtraOptionDetails = exports.ProductExtraOptionDetails = function ProductExtraOptionDetails(props) {
  var productExtraOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtraOptionDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ProductExtraOptionDetails, productExtraOptionProps);
};