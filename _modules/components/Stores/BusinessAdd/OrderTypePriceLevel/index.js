"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypePriceLevel = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderTypePriceLevel = exports.OrderTypePriceLevel = function OrderTypePriceLevel(props) {
  var _configs$format_numbe;
  var formState = props.formState,
    changeFormState = props.changeFormState;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var priceSymbol = configs === null || configs === void 0 || (_configs$format_numbe = configs.format_number_currency) === null || _configs$format_numbe === void 0 || (_configs$format_numbe = _configs$format_numbe.value) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.trim();
  var priceList = [{
    key: '1',
    value: "".concat(priceSymbol)
  }, {
    key: '2',
    value: "".concat(Array(2).fill(priceSymbol).join(''))
  }, {
    key: '3',
    value: "".concat(Array(3).fill(priceSymbol).join(''))
  }, {
    key: '4',
    value: "".concat(Array(4).fill(priceSymbol).join(''))
  }, {
    key: '5',
    value: "".concat(Array(5).fill(priceSymbol).join(''))
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.PriceLevelContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRICE_LEVEL', 'Price level')), /*#__PURE__*/_react.default.createElement(_styles.PriceLevelList, null, priceList.map(function (item, i) {
    var _formState$changes, _formState$changes2;
    return /*#__PURE__*/_react.default.createElement(_styles.PriceLevelItem, {
      key: i,
      onClick: function onClick() {
        return changeFormState({
          price_level: item.key
        });
      },
      active: (formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.price_level) === item.key
    }, (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.price_level) === item.key ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, item.value));
  }))));
};