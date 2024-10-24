"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("../../../styles");
var _jquery = _interopRequireDefault(require("jquery"));
var _reactSummernote = _interopRequireDefault(require("react-summernote"));
require("react-summernote/dist/react-summernote.css");
require("bootstrap/js/dist/modal");
require("bootstrap/js/dist/dropdown");
require("bootstrap/js/dist/tooltip");
require("bootstrap/dist/css/bootstrap.css");
var _Shared = require("../../Shared");
var _InsertLink = require("../InsertLink");
var _InsertVideo = require("../InsertVideo");
var _InsertImage = require("../InsertImage");
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
var PageFormUI = function PageFormUI(props) {
  var _ref, _formState$changes$na, _formState$changes, _pageState$page, _pageState$page2, _pageState$page3, _ref2, _formState$changes$sl, _formState$changes2, _pageState$page4, _pageState$page5;
  var pageState = props.pageState,
    formState = props.formState,
    imageListState = props.imageListState,
    insertImageState = props.insertImageState,
    handleInsertImage = props.handleInsertImage,
    handleDeleteImage = props.handleDeleteImage,
    handleChangeFormState = props.handleChangeFormState,
    handleSavePage = props.handleSavePage,
    selectedImageUrl = props.selectedImageUrl,
    setSelectedImageUrl = props.setSelectedImageUrl,
    handleCancel = props.handleCancel,
    isAddMode = props.isAddMode,
    handleAddPage = props.handleAddPage;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editorContext = _useState4[0],
    setEditorContext = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    pageContent = _useState8[0],
    setPageContent = _useState8[1];
  var insertLink = function insertLink(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-link"/>',
      tooltip: 'link',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('link');
      }
    });
    return button.render();
  };
  var handleRestoreEditor = function handleRestoreEditor() {
    return editorContext.invoke('restoreRange');
  };
  var insertImage = function insertImage(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-picture"/>',
      tooltip: 'picture',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('image');
      }
    });
    return button.render();
  };
  var insertVideo = function insertVideo(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-video"/>',
      tooltip: 'video',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('video');
      }
    });
    return button.render();
  };
  var handleCloseModal = function handleCloseModal() {
    setOpenModal(false);
    setEditorContext(null);
  };
  (0, _react.useEffect)(function () {
    if (!(formState !== null && formState !== void 0 && formState.error)) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 ? void 0 : formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
  (0, _react.useEffect)(function () {
    if (!pageContent) return;
    handleChangeFormState('body', pageContent);
  }, [pageContent]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PageContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, isAddMode ? t('ADD_PAGE', 'Add page') : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pageState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }) : (_ref = (_formState$changes$na = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : (_pageState$page = pageState.page) === null || _pageState$page === void 0 ? void 0 : _pageState$page.name) !== null && _ref !== void 0 ? _ref : '')), !isAddMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pageState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  }) : /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_pageState$page2 = pageState.page) === null || _pageState$page2 === void 0 ? void 0 : _pageState$page2.enabled,
    onChange: function onChange(enabled) {
      return handleChangeFormState('enabled', enabled);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.InputGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: (_pageState$page3 = pageState.page) === null || _pageState$page3 === void 0 ? void 0 : _pageState$page3.name,
    onChange: function onChange(e) {
      return handleChangeFormState('name', e.target.value);
    },
    placeholder: t('NAME', 'Name')
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: (_ref2 = (_formState$changes$sl = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.slug) !== null && _formState$changes$sl !== void 0 ? _formState$changes$sl : (_pageState$page4 = pageState.page) === null || _pageState$page4 === void 0 ? void 0 : _pageState$page4.slug) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeFormState('slug', e.target.value.replace(/\s/g, ''));
    },
    placeholder: t('Slug', 'Slug'),
    onKeyPress: function onKeyPress(e) {
      if (e.which === 32) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.WrapperEditor, null, /*#__PURE__*/_react.default.createElement(_reactSummernote.default, {
    value: (_pageState$page5 = pageState.page) === null || _pageState$page5 === void 0 ? void 0 : _pageState$page5.body,
    placeholder: t('START_NEW_PAGE'),
    options: {
      height: 350,
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
      toolbar: [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'paragraph']], ['table', ['table']], ['insert', ['insertLink', 'insertImage', 'insertVideo']], ['codeview', ['codeview']]],
      buttons: {
        insertLink: insertLink,
        insertImage: insertImage,
        insertVideo: insertVideo
      }
    },
    onChange: function onChange(content) {
      return setPageContent(content);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroupWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: Object.keys(formState.changes).length === 0,
    onClick: function onClick() {
      return isAddMode ? handleAddPage() : handleSavePage();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleCancel();
    }
  }, t('CANCEL', 'Cancel')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "60%",
    open: openModal === 'link',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertLink.InsertLink, {
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "60%",
    open: openModal === 'video',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertVideo.InsertVideo, {
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "60%",
    open: openModal === 'image',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertImage.InsertImage, {
    imageListState: imageListState,
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    },
    insertImageState: insertImageState,
    handleInsertImage: handleInsertImage,
    handleDeleteImage: handleDeleteImage,
    selectedImageUrl: selectedImageUrl,
    setSelectedImageUrl: setSelectedImageUrl
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('BUSINESS', 'Business'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var PageForm = exports.PageForm = function PageForm(props) {
  var pageFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PageFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.PageForm, pageFormProps);
};