"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductStartGuide = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var ProductStartGuide = exports.ProductStartGuide = function ProductStartGuide(props) {
  var onClose = props.onClose,
    setStep = props.setStep,
    setOption = props.setOption,
    countriesState = props.countriesState;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var guideList = [{
    id: 1,
    title: t('START_WITH_AN_EMPTY_MENU', 'Start with an empty Menu'),
    description: t('START_WITH_AN_EMPTY_MENU_DESC', 'Start with an empty Menu and enter your menu items'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.FileMedical, null),
    enabled: true
  }, {
    id: 2,
    title: t('IMPORT_MENU_ONLY_USA_CANADA', 'Import Menu (Only if USA and Canada)'),
    description: t('IMPORT_MENU_ONLY_USA_CANADA_DESC', 'Import your menu from the Ordering Network that includes over 1M restaurants and stores from the US and Canada.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ColumnsGap, null),
    enabled: countriesState === null || countriesState === void 0 ? void 0 : countriesState.enabled
  }, {
    id: 3,
    title: t('UPLOAD_YOUR_MENU', 'Upload your Menu'),
    description: t('UPLOAD_YOUR_MENU_DESC', 'Click to upload your menu (PDF or image file) or share your menu link (For website or another online ordering system)'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.FileEarmarkArrowUp, null),
    enabled: true
  }, {
    id: 4,
    title: t('INTEGRATE_MY_POS_TO_EXTRACT_MENU', 'Integrate my POS to extract the menu'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.TabletLandscape, null),
    enabled: true
  }];
  var handleChangeStep = function handleChangeStep(id) {
    switch (id) {
      case 2:
        setStep(2);
        setOption(2);
        break;
      case 3:
        setStep(2);
        setOption(3);
        break;
      case 4:
        setStep(2);
        setOption(4);
        break;
      default:
        onClose();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HOW_DO_YOU_WANT_TO_START', 'How do you want to start?')), (countriesState === null || countriesState === void 0 ? void 0 : countriesState.loading) && _toConsumableArray(Array(4).keys()).map(function (idx) {
    return /*#__PURE__*/_react.default.createElement(_styles.GuideItemContainer, {
      key: idx
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 24,
      height: 24
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 18,
      width: 200
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 10
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 10
    }))));
  }), !(countriesState !== null && countriesState !== void 0 && countriesState.loading) && guideList.map(function (guide) {
    return guide.enabled && /*#__PURE__*/_react.default.createElement(_styles.GuideItemContainer, {
      key: guide.id,
      onClick: function onClick() {
        return handleChangeStep(guide.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, guide.icon), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, guide.title), guide.description && /*#__PURE__*/_react.default.createElement("p", null, guide.description)));
  }));
};