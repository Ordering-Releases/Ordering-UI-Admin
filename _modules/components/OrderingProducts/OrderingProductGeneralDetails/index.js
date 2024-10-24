"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProductGeneralDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _utils = require("../../../utils");
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderingProductGeneralDetails = exports.OrderingProductGeneralDetails = function OrderingProductGeneralDetails(props) {
  var _formState$changes, _siteState$site, _siteState$site2, _formState$changes2, _formState$changes3, _formState$changes4, _siteState$site3, _siteState$site4, _formState$changes5, _formState$changes6, _ref, _formState$changes$na, _formState$changes7, _siteState$site5, _ref2, _formState$changes$co, _formState$changes8, _siteState$site6, _ref3, _formState$changes$ur, _formState$changes9, _siteState$site7, _formState$changes10, _siteState$site8, _siteState$site9, _formState$changes11, _formState$changes12, _ref4, _formState$changes$re, _formState$changes13, _siteState$site10, _ref5, _formState$changes$tr, _formState$changes14, _siteState$site11, _ref6, _formState$changes$de, _formState$changes15, _siteState$site12, _ref7, _formState$changes$ch, _formState$changes16, _siteState$site13, _ref8, _formState$changes$ca, _formState$changes17, _siteState$site14, _ref9, _formState$changes$bu, _formState$changes18, _siteState$site15, _ref10, _formState$changes$ca2, _formState$changes19, _siteState$site16, _ref11, _formState$changes$pr, _formState$changes20, _siteState$site17, _ref12, _formState$changes$pr2, _formState$changes21, _siteState$site18;
  var siteState = props.siteState,
    formState = props.formState,
    isAddMode = props.isAddMode,
    handleChangeInput = props.handleChangeInput,
    handlechangeImage = props.handlechangeImage,
    handleUpdateSite = props.handleUpdateSite,
    handleAddSite = props.handleAddSite;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    watch = _useForm.watch;
  var businessUrlTemplate = watch('business_url_template', '');
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var headerImageInputRef = (0, _react.useRef)(null);
  var logoImageInputRef = (0, _react.useRef)(null);
  var socialShareInputRef = (0, _react.useRef)(null);
  var availableBusinessUrls = [{
    key: 0,
    value: '/:business_slug'
  }, {
    key: 1,
    value: '/store/:business_slug'
  }, {
    key: 2,
    value: '/store?<any>=:business_slug'
  }];
  var availableProductUrls = [{
    key: 0,
    value: '/store/:business_slug/:category_slug/:product_slug'
  }, {
    key: 1,
    value: '/store/:category_slug/:product_slug?<any>=:business_slug'
  }, {
    key: 2,
    value: '/store/:business_slug?<any>=:category_id&<any>=:product_id'
  }, {
    key: 3,
    value: '/:business_slug/:category_slug/:product_slug'
  }, {
    key: 4,
    value: '/:business_slug?<any>=:category_id&<any>=:product_id'
  }];
  var handleClickImage = function handleClickImage(type) {
    if (type === 'header') {
      headerImageInputRef.current.click();
    }
    if (type === 'logo') {
      logoImageInputRef.current.click();
    }
    if (type === 'social_share') {
      socialShareInputRef.current.click();
    }
  };
  var handleFiles = function handleFiles(files, name) {
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
      handlechangeImage(files[0], name);
    }
  };
  var onSubmit = function onSubmit() {
    if (isAddMode) {
      handleAddSite && handleAddSite();
    } else {
      handleUpdateSite && handleUpdateSite();
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleValidateProductUrl = function handleValidateProductUrl(value) {
    if (businessUrlTemplate.includes('?')) {
      var urls = businessUrlTemplate.split('?');
      if (value.indexOf(urls[0]) === 0 && value.includes(urls[1])) {
        return true;
      } else {
        return t('VALIDATE_PRODUCT_TEMPLATE_URL', 'The product url template do not match with business url template');
      }
    } else {
      if (value.indexOf(businessUrlTemplate) === 0) {
        return true;
      } else {
        return t('VALIDATE_PRODUCT_TEMPLATE_URL', 'The product url template do not match with business url template');
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!formState.error) return;
    setAlertState({
      open: true,
      content: formState.error
    });
  }, [formState.error]);
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
  return /*#__PURE__*/_react.default.createElement(_styles2.DetailContainer, null, !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ContactUsContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('NEED_HELP_WITH_SET_UP', 'Do you need help with the setup?')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return window.open('https://www.ordering.co/ordering-sales', '_blank');
    }
  }, t('CONTACT_US', 'Contact us'))), /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessImg, {
    onClick: function onClick() {
      return handleClickImage('header');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'header');
    },
    childRef: function childRef(e) {
      headerImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'header');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.header) || formState.error ? ((_siteState$site = siteState.site) === null || _siteState$site === void 0 ? void 0 : _siteState$site.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.header,
    alt: "header image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.header,
    alt: "header image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles2.LogoImage, {
    onClick: function onClick() {
      return handleClickImage('logo');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'logo');
    },
    childRef: function childRef(e) {
      logoImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'logo');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.logo) || formState.error ? ((_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site4 = siteState.site) === null || _siteState$site4 === void 0 ? void 0 : _siteState$site4.logo,
    alt: "logo image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.logo,
    alt: "logo image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "name",
    placeholder: t('NAME', 'Name'),
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : (_siteState$site5 = siteState.site) === null || _siteState$site5 === void 0 ? void 0 : _siteState$site5.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'The name field is required.').replace('_attribute_', t('NAME', 'Name'))
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CODE', 'Code')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "code",
    placeholder: t('CODE', 'Code'),
    value: (_ref2 = (_formState$changes$co = formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.code) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : (_siteState$site6 = siteState.site) === null || _siteState$site6 === void 0 ? void 0 : _siteState$site6.code) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'The name code is required.').replace('_attribute_', t('CODE', 'Code'))
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('URL', 'URL')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "url",
    placeholder: t('URL', 'Url'),
    value: (_ref3 = (_formState$changes$ur = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.url) !== null && _formState$changes$ur !== void 0 ? _formState$changes$ur : (_siteState$site7 = siteState.site) === null || _siteState$site7 === void 0 ? void 0 : _siteState$site7.url) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('URL', 'Url'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SOCIAL_SHARE', 'Social share')), /*#__PURE__*/_react.default.createElement(_styles2.SocialShareImage, {
    onClick: function onClick() {
      return handleClickImage('social_share');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'social_share');
    },
    childRef: function childRef(e) {
      socialShareInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'social_share');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes10 = formState.changes) !== null && _formState$changes10 !== void 0 && _formState$changes10.social_share) || formState.error ? ((_siteState$site8 = siteState.site) === null || _siteState$site8 === void 0 ? void 0 : _siteState$site8.social_share) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site9 = siteState.site) === null || _siteState$site9 === void 0 ? void 0 : _siteState$site9.social_share,
    alt: "social share image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.social_share) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.social_share,
    alt: "social share image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop')))))))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('RESET_PASSWORD_URL_TEMPLATE', 'Reset password url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "reset_password_url_template",
    placeholder: t('URL', 'Url'),
    defaultValue: (_ref4 = (_formState$changes$re = formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.reset_password_url_template) !== null && _formState$changes$re !== void 0 ? _formState$changes$re : (_siteState$site10 = siteState.site) === null || _siteState$site10 === void 0 ? void 0 : _siteState$site10.reset_password_url_template) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "track_order_url_template",
    defaultValue: (_ref5 = (_formState$changes$tr = formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.track_order_url_template) !== null && _formState$changes$tr !== void 0 ? _formState$changes$tr : (_siteState$site11 = siteState.site) === null || _siteState$site11 === void 0 ? void 0 : _siteState$site11.track_order_url_template) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    rows: 5,
    placeholder: t('SHORT_PROMOTION_ABOUT', 'Write a little description'),
    defaultValue: (_ref6 = (_formState$changes$de = formState === null || formState === void 0 || (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : (_siteState$site12 = siteState.site) === null || _siteState$site12 === void 0 ? void 0 : _siteState$site12.description) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CHECKOUT_URL_TEMPLATE', 'Checkout url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "checkout_url_template",
    defaultValue: (_ref7 = (_formState$changes$ch = formState === null || formState === void 0 || (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.checkout_url_template) !== null && _formState$changes$ch !== void 0 ? _formState$changes$ch : (_siteState$site13 = siteState.site) === null || _siteState$site13 === void 0 ? void 0 : _siteState$site13.checkout_url_template) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CART_URL_TEMPLATE', 'Cart url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "cart_url_template",
    defaultValue: (_ref8 = (_formState$changes$ca = formState === null || formState === void 0 || (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.cart_url_template) !== null && _formState$changes$ca !== void 0 ? _formState$changes$ca : (_siteState$site14 = siteState.site) === null || _siteState$site14 === void 0 ? void 0 : _siteState$site14.cart_url_template) !== null && _ref8 !== void 0 ? _ref8 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('BUSINESS_URL_TEMPLATE', 'Business url template')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoTitle, null, t('AVAILABLE_FORMATS', 'Available Formats')), availableBusinessUrls.map(function (url) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Info, {
      key: url.key
    }, url.value);
  })))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "business_url_template",
    defaultValue: (_ref9 = (_formState$changes$bu = formState === null || formState === void 0 || (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.business_url_template) !== null && _formState$changes$bu !== void 0 ? _formState$changes$bu : (_siteState$site15 = siteState.site) === null || _siteState$site15 === void 0 ? void 0 : _siteState$site15.business_url_template) !== null && _ref9 !== void 0 ? _ref9 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(^\/)(store)?((\/?:business_slug$)|(\/?\?[a-zA-Z]+=:business_slug$))$/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('BUSINESS_URL_TEMPLATE', 'Business url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CATEGORY_URL_TEMPLATE', 'Category url template')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoTitle, null, t('AVAILABLE_FORMATS', 'Available Formats')), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, "store/:business_slug/:category_slug"), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, "store/:category_slug?", '<any>', "=:business_slug"), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, ":business_slug/:category_slug"), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, ":category_slug?", '<any>', "=:business_slug")))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "category_url_template",
    defaultValue: (_ref10 = (_formState$changes$ca2 = formState === null || formState === void 0 || (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.category_url_template) !== null && _formState$changes$ca2 !== void 0 ? _formState$changes$ca2 : (_siteState$site16 = siteState.site) === null || _siteState$site16 === void 0 ? void 0 : _siteState$site16.category_url_template) !== null && _ref10 !== void 0 ? _ref10 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(store\/)?((:business_slug\/:category_slug$)|(:category_slug\?[a-zA-Z]+=:business_slug$))$/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('CATEGORY_URL_TEMPLATE', 'Category url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('PRODUCT_URL_TEMPLATE', 'Product url template')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoTitle, null, t('AVAILABLE_FORMATS', 'Available Formats')), availableProductUrls.map(function (url) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Info, {
      key: url.key
    }, url.value);
  })))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "product_url_template",
    defaultValue: (_ref11 = (_formState$changes$pr = formState === null || formState === void 0 || (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 ? void 0 : _formState$changes20.product_url_template) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : (_siteState$site17 = siteState.site) === null || _siteState$site17 === void 0 ? void 0 : _siteState$site17.product_url_template) !== null && _ref11 !== void 0 ? _ref11 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(^\/)(store\/)?((:business_slug\/:category_slug\/:product_slug$)|(:category_slug\/:product_slug\?[a-zA-Z]+=:business_slug$)|(:business_slug\?[a-zA-Z]+=:category_id&[a-zA-Z]+=:product_id$))$/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('PRODUCT_URL_TEMPLATE', 'Product url template'))
      },
      validate: handleValidateProductUrl
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('PROFILE_URL_TEMPLATE', 'Profile url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "profile_url_template",
    value: (_ref12 = (_formState$changes$pr2 = formState === null || formState === void 0 || (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.profile_url_template) !== null && _formState$changes$pr2 !== void 0 ? _formState$changes$pr2 : (_siteState$site18 = siteState.site) === null || _siteState$site18 === void 0 ? void 0 : _siteState$site18.profile_url_template) !== null && _ref12 !== void 0 ? _ref12 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SaveBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    type: "submit",
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING_PRODUCTS', 'Ordering products'),
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