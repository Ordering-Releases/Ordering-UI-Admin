"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var PluginListUI = function PluginListUI(props) {
  var _pluginListState$sysP, _currentPlugins$plugi, _pluginListState$sysP2, _currentPlugins$sysPl;
  var pluginListState = props.pluginListState,
    isAddMode = props.isAddMode,
    setIsAddMode = props.setIsAddMode,
    setNewUrl = props.setNewUrl,
    handleAddNewPlugin = props.handleAddNewPlugin,
    actionState = props.actionState,
    handleDeletePlugin = props.handleDeletePlugin,
    handleUpdatePlugin = props.handleUpdatePlugin,
    handleInstallSysPlugin = props.handleInstallSysPlugin;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];

  // Change page
  var _useState7 = (0, _react.useState)({
      plugins: 1,
      sysPlugins: 1
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];
  var _useState9 = (0, _react.useState)({
      plugins: 10,
      sysPlugins: 10
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    pluginsPerPage = _useState10[0],
    setPluginsPerPage = _useState10[1];

  // Get current plugins
  var _useState11 = (0, _react.useState)({
      plugins: [],
      sysPlugins: []
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    currentPlugins = _useState12[0],
    setCurrentPlugins = _useState12[1];
  var _useState13 = (0, _react.useState)({
      plugins: null,
      sysPlugins: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    totalPages = _useState14[0],
    setTotalPages = _useState14[1];
  var _handleChangePage = function handleChangePage(page, type) {
    setCurrentPage(_objectSpread(_objectSpread({}, currentPage), {}, _defineProperty({}, type, page)));
  };
  var _handleChangePageSize = function handleChangePageSize(pageSize, type) {
    var expectedPage = Math.ceil(((currentPage[type] - 1) * pluginsPerPage[type] + 1) / pageSize);
    setCurrentPage(_objectSpread(_objectSpread({}, currentPage), {}, _defineProperty({}, type, expectedPage)));
    setPluginsPerPage(_objectSpread(_objectSpread({}, pluginsPerPage), {}, _defineProperty({}, type, pageSize)));
  };
  var onClickDeletePlugin = function onClickDeletePlugin(id) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PLUGIN', 'Are you sure to delete this plugin?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeletePlugin(id);
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (pluginListState.loading) return;
    var _totalPages;
    var _totalsysPages;
    var plugins = [];
    var sysPlugins = _toConsumableArray(pluginListState.sysPlugins);
    if (searchValue) {
      plugins = pluginListState.plugins.filter(function (plugin) {
        var _plugin$name;
        return (_plugin$name = plugin.name) === null || _plugin$name === void 0 ? void 0 : _plugin$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      plugins = _toConsumableArray(pluginListState.plugins);
    }
    if (plugins.length > 0) {
      _totalPages = Math.ceil(plugins.length / pluginsPerPage.plugins);
    }
    if (sysPlugins.length > 0) {
      _totalsysPages = Math.ceil(sysPlugins.length / pluginsPerPage.sysPlugins);
    }
    var indexOfLastPost = currentPage.plugins * pluginsPerPage.plugins;
    var indexOfFirstPost = indexOfLastPost - pluginsPerPage.plugins;
    var _currentPlugins = plugins.slice(indexOfFirstPost, indexOfLastPost);
    var indexOfLastPostSys = currentPage.sysPlugins * pluginsPerPage.sysPlugins;
    var indexOfFirstPostSys = indexOfLastPostSys - pluginsPerPage.sysPlugins;
    var _currentSysPlugins = sysPlugins.slice(indexOfFirstPostSys, indexOfLastPostSys);
    setTotalPages({
      plugins: _totalPages,
      sysPlugins: _totalsysPages
    });
    setCurrentPlugins({
      plugins: _currentPlugins,
      sysPlugins: _currentSysPlugins
    });
  }, [pluginListState, currentPage, pluginsPerPage, searchValue]);
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PluginListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PLuginsSeparator, {
    h: ((_pluginListState$sysP = pluginListState.sysPlugins) === null || _pluginListState$sysP === void 0 ? void 0 : _pluginListState$sysP.length) > 0 && '50%'
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PLUGINS', 'Plugins')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return setIsAddMode(true);
    }
  }, t('ADD_PLUGIN', 'Add plugin'))), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.PluginsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('PLUGINS', 'Plugins')), /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')))), pluginListState.loading ? _toConsumableArray(Array(pluginsPerPage.plugins).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PluginTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 15
    }))))));
  }) : currentPlugins.plugins.map(function (plugin) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PluginTbody, {
      key: plugin.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, plugin === null || plugin === void 0 ? void 0 : plugin.name, " (", plugin === null || plugin === void 0 ? void 0 : plugin.hooks.length, " ", t('HOOKS', 'Hooks'), ")"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: plugin === null || plugin === void 0 ? void 0 : plugin.enabled,
      onChange: function onChange(enabled) {
        return handleUpdatePlugin(plugin.id, {
          enabled: enabled
        });
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleUpdatePlugin(plugin.id, {
          root: plugin.root
        });
      }
    }, t('UPDATE', 'Update')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return onClickDeletePlugin(plugin.id);
      }
    }, t('DELETE', 'Delete'))))))));
  }), isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.PluginTbody, {
    isAddMode: true
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      return setNewUrl(e.target.value);
    },
    placeholder: t('URL', 'Url')
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    onClick: function onClick() {
      return handleAddNewPlugin();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircleFill, null)))))), !pluginListState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsAddMode(true);
    }
  }, t('ADD_NEW_PLUGIN ', 'Add new plugin')), ((_currentPlugins$plugi = currentPlugins.plugins) === null || _currentPlugins$plugi === void 0 ? void 0 : _currentPlugins$plugi.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage.plugins,
    totalPages: totalPages.plugins,
    handleChangePage: function handleChangePage(e) {
      return _handleChangePage(e, 'plugins');
    },
    defaultPageSize: pluginsPerPage.plugins,
    handleChangePageSize: function handleChangePageSize(e) {
      return _handleChangePageSize(e, 'plugins');
    }
  }))), !pluginListState.loading && ((_pluginListState$sysP2 = pluginListState.sysPlugins) === null || _pluginListState$sysP2 === void 0 ? void 0 : _pluginListState$sysP2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.PLuginsSeparator, {
    h: "50%"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, {
    mb: 0
  }, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, t('SYSTEM_PLUGINS', 'System Plugins'))), /*#__PURE__*/_react.default.createElement(_styles2.PluginsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('PLUGINS', 'Plugins')), /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')))), currentPlugins.sysPlugins.map(function (plugin) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PluginTbody, {
      key: plugin.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, plugin === null || plugin === void 0 ? void 0 : plugin.name), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, plugin !== null && plugin !== void 0 && plugin.installed ? /*#__PURE__*/_react.default.createElement("span", null, t('SYSTEM_PLUGIN_INSTALLED', 'Installed')) : /*#__PURE__*/_react.default.createElement(_styles.Button, {
      borderRadius: "8px",
      color: "lightPrimary",
      onClick: function onClick() {
        return handleInstallSysPlugin(plugin.id);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, t('INSTALL', 'Install')))))));
  })), /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, {
    justifyContent: "flex-end"
  }, ((_currentPlugins$sysPl = currentPlugins.sysPlugins) === null || _currentPlugins$sysPl === void 0 ? void 0 : _currentPlugins$sysPl.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage.sysPlugins,
    totalPages: totalPages.sysPlugins,
    handleChangePage: function handleChangePage(e) {
      return _handleChangePage(e, 'sysPlugins');
    },
    defaultPageSize: pluginsPerPage.sysPlugins,
    handleChangePageSize: function handleChangePageSize(e) {
      return _handleChangePageSize(e, 'sysPlugins');
    }
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }));
};
var PluginList = exports.PluginList = function PluginList(props) {
  var pluginListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PluginListUI,
    projectCode: window.localStorage.getItem('project')
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.PluginList, pluginListProps);
};