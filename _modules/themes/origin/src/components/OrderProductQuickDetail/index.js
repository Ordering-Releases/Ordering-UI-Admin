"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderProductsQuickDetail = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderProductsQuickDetailUI = function OrderProductsQuickDetailUI(props) {
  var _order$summary, _order$summary2, _order$summary3, _order$summary4, _order$summary5, _order$summary6, _order$summary7, _order$summary8, _order$summary9, _order$summary10, _order$summary11;
  var _props$order = props.order,
    order = _props$order.order,
    loading = _props$order.loading;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber;
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
      name = _ref.name,
      position = _ref.position,
      price = _ref.price;
    if (name !== 'No') {
      var pos = position ? "(".concat(position, ")") : '';
      return price > 0 ? "".concat(name, " ").concat(pos, " ").concat(parsePrice(quantity * price)) : "".concat(name, " ").concat(pos);
    } else {
      return 'No';
    }
  };
  var getProductPrice = function getProductPrice(product) {
    var _product$options;
    var subOptionPrice = 0;
    if (((_product$options = product.options) === null || _product$options === void 0 ? void 0 : _product$options.length) > 0) {
      var _iterator = _createForOfIteratorHelper(product.options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          var _iterator2 = _createForOfIteratorHelper(option.suboptions),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var suboption = _step2.value;
              subOptionPrice += suboption.quantity * suboption.price;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    var price = product.quantity * (product.price + subOptionPrice);
    return parseFloat(price.toFixed(2));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading ? /*#__PURE__*/_react.default.createElement(_styles.WrapSkelton, null, /*#__PURE__*/_react.default.createElement(_styles.ProductTable, {
    skeleton: "skeleton"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50,
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50,
    height: 50
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "totalFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })))))) : /*#__PURE__*/_react.default.createElement(_styles.OrderProductsQuickDetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderProductsInner, null, /*#__PURE__*/_react.default.createElement(_styles.ProductTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement("th", null, t('QTY', 'QTY')), /*#__PURE__*/_react.default.createElement("th", null, t('DISC.', 'Disc.')), /*#__PURE__*/_react.default.createElement("th", null, t('Total', 'Total')))), /*#__PURE__*/_react.default.createElement("tbody", null, order.products.map(function (product) {
    var _product$ingredients, _product$options2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: product.id
    }, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ProductImageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperProductImage, null, /*#__PURE__*/_react.default.createElement(_styles.AccordionImage, {
      bgimage: product.images
    })), product.name), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, null, ((_product$ingredients = product.ingredients) === null || _product$ingredients === void 0 ? void 0 : _product$ingredients.length) > 0 && product.ingredients.some(function (ingredient) {
      return !ingredient.selected;
    }) && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('INGREDIENTS', 'Ingredients')), product.ingredients.map(function (ingredient) {
      return !ingredient.selected && /*#__PURE__*/_react.default.createElement("li", {
        className: "ingredient",
        key: ingredient.id
      }, /*#__PURE__*/_react.default.createElement("span", null, t('NO', 'No'), " ", ingredient.name));
    })), ((_product$options2 = product.options) === null || _product$options2 === void 0 ? void 0 : _product$options2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, product.options.map(function (option, i) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("p", null, option.name), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, {
        className: "suboption"
      }, option.suboptions.map(function (suboption) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: suboption.id
        }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("span", null, getFormattedSubOptionName({
          quantity: suboption.quantity,
          name: suboption.name,
          position: suboption.position !== 'whole' ? t(suboption.position.toUpperCase(), suboption.position) : '',
          price: suboption.price
        }))));
      })));
    })), product.comment && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement("p", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("h3", null, product.comment)))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(product === null || product === void 0 ? void 0 : product.price)), /*#__PURE__*/_react.default.createElement("td", null, "X ", product.quantity), /*#__PURE__*/_react.default.createElement("td", null, product.comment), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(getProductPrice(product))));
  }), /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.subtotal))), (order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.discount) > 0 && /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "-", parsePrice(order === null || order === void 0 || (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.discount))), (order === null || order === void 0 || (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.tax) > 0 && /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), " (", parseNumber(order === null || order === void 0 ? void 0 : order.tax), "%)"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 || (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.tax))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 || (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.delivery_price))), (order === null || order === void 0 || (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.driver_tip) > 0 && /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver Tip')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 || (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.driver_tip))), (order === null || order === void 0 || (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.service_fee) > 0 && /*#__PURE__*/_react.default.createElement("tr", {
    className: "subFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service Fee'), " (", parseNumber(order === null || order === void 0 ? void 0 : order.service_fee), "%)"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 || (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.service_fee))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "totalFee"
  }, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 || (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.total))))))));
};
var OrderProductsQuickDetail = exports.OrderProductsQuickDetail = function OrderProductsQuickDetail(props) {
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: OrderProductsQuickDetailUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.OrderDetails, orderDetailsProps);
};