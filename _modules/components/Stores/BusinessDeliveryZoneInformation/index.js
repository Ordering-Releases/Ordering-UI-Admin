"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryZoneInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessDeliveryZoneInformation = exports.BusinessDeliveryZoneInformation = function BusinessDeliveryZoneInformation(props) {
  var _zone$businesses, _zone$pivot, _ref, _formState$changes$na, _formState$changes2, _formState$changes3, _ref2, _formState$changes$mi, _formState$changes4, _ref3, _formState$changes$pr, _formState$changes5, _configState$configs2, _ref4, _formState$changes$da, _formState$changes6, _zone$data, _configState$configs4, _formState$changes7, _configState$configs5, _formState$changes8;
  var business = props.business,
    zone = props.zone,
    businessZones = props.businessZones,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleUpdateBusinessDeliveryZone = props.handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone = props.handleAddBusinessDeliveryZone,
    handleUploadKmlFiles = props.handleUploadKmlFiles,
    kmlData = props.kmlData;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseNumber = _useUtils2[0].parseNumber;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    clearState = _useState2[0],
    setClearState = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    infoContentString = _useState4[0],
    setInfoContentString = _useState4[1];
  var _useState5 = (0, _react.useState)((zone === null || zone === void 0 ? void 0 : zone.type) || 2),
    _useState6 = _slicedToArray(_useState5, 2),
    zoneType = _useState6[0],
    setZoneType = _useState6[1];
  var _useState7 = (0, _react.useState)(zone === null || zone === void 0 ? void 0 : zone.data),
    _useState8 = _slicedToArray(_useState7, 2),
    zoneData = _useState8[0],
    setZoneData = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isShowMap = _useState12[0],
    setIsShowMap = _useState12[1];
  var kmlRef = (0, _react.useRef)(null);
  var isMyZone = zone !== null && zone !== void 0 && (_zone$businesses = zone.businesses) !== null && _zone$businesses !== void 0 && _zone$businesses.length ? (zone === null || zone === void 0 || (_zone$pivot = zone.pivot) === null || _zone$pivot === void 0 ? void 0 : _zone$pivot.business_id) === parseInt(zone === null || zone === void 0 ? void 0 : zone.business_id) : true;
  var typeOptions = [{
    value: 1,
    content: t('CIRCLE', 'Circle')
  }, {
    value: 2,
    content: t('POLYGON', 'Polygon')
  }, {
    value: 4,
    content: t('EVERYWHERE', 'Everywhere')
  }, {
    value: 5,
    content: t('DISTANCE_BASED', 'Distance based')
  }];
  var googleMapsControls = {
    defaultZoom: 8,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: false,
    defaultPosition: {
      lat: 40.77473399999999,
      lng: -73.9653844
    }
  };
  var fillStyle = {
    fillColor: '#2C7BE5',
    strokeColor: '#03459E',
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: true
  };
  var greenFillStyle = {
    fillColor: '#008000',
    fillOpacity: 0.3,
    strokeColor: '#008000',
    strokeOpacity: 0.8,
    strokeWeight: 2
  };
  var handleChangeType = function handleChangeType(type) {
    handleChangeFormState({
      type: type
    });
    setClearState(true);
    setZoneType(type);
  };
  var handleZoneData = function handleZoneData(data) {
    setZoneData(data);
    handleChangeFormState({
      data: data
    });
  };
  var onSubmit = function onSubmit() {
    var _formState$changes;
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.data || zoneType === 4) {
      if (!zone) handleAddBusinessDeliveryZone();else handleUpdateBusinessDeliveryZone();
    } else {
      setAlertState({
        open: true,
        content: t('REQUIRED_POLYGON_CIRCLE', 'Add a distance based or draw a polygon or circle.')
      });
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    if (clearState) {
      handleZoneData(null);
    }
  }, [clearState]);
  (0, _react.useEffect)(function () {
    var _configState$configs;
    if (zoneType === 2 || zoneType === 4) return;
    var content = '<div style="width: 90px; height: 30px">' + '<span>Radius: </span>';
    content += parseNumber((zoneData === null || zoneData === void 0 ? void 0 : zoneData.radio) || (zoneData === null || zoneData === void 0 ? void 0 : zoneData.distance));
    content += "<span>".concat(zoneType === 5 ? configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.distance_unit) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value : 'km', "</span>") + '</div>';
    setInfoContentString(content);
  }, [zoneData, zoneType]);
  (0, _react.useEffect)(function () {
    setClearState(false);
    setZoneType((zone === null || zone === void 0 ? void 0 : zone.type) || 2);
    setZoneData(zone === null || zone === void 0 ? void 0 : zone.data);
    setIsShowMap(false);
    setTimeout(function () {
      setIsShowMap(true);
    }, [100]);
  }, [zone === null || zone === void 0 ? void 0 : zone.id]);
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
    if (formState.error) {
      setAlertState({
        open: true,
        content: formState.error
      });
    }
  }, [formState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
    onSubmit: handleSubmit(onSubmit),
    autoComplete: "off"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    disabled: !isMyZone,
    placeholder: t('NAME', 'Name'),
    name: "name",
    value: (_ref = (_formState$changes$na = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : zone === null || zone === void 0 ? void 0 : zone.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('NAME_REQUIRED', 'The name is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    isDisabled: !isMyZone,
    defaultValue: parseInt(((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.type) || zoneType),
    options: typeOptions,
    onChange: handleChangeType
  })))), /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('MINIMUN_PURCHASED', 'Minimum purchase')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "minimum",
    value: (_ref2 = (_formState$changes$mi = (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.minimum) !== null && _formState$changes$mi !== void 0 ? _formState$changes$mi : zone === null || zone === void 0 ? void 0 : zone.minimum) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DELIVERY_FEE', 'Delivery fee')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "price",
    value: (_ref3 = (_formState$changes$pr = (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.price) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : zone === null || zone === void 0 ? void 0 : zone.price) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.')
    })
  }))), zoneType === 5 && /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DISTANCE_FROM_STORE', 'Distance from store')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    disabled: !isMyZone,
    placeholder: "1 - 99 ".concat(configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.distance_unit) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value),
    name: "distance",
    value: (_ref4 = (_formState$changes$da = (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 || (_formState$changes6 = _formState$changes6.data) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.distance) !== null && _formState$changes$da !== void 0 ? _formState$changes$da : zone === null || zone === void 0 || (_zone$data = zone.data) === null || _zone$data === void 0 ? void 0 : _zone$data.distance) !== null && _ref4 !== void 0 ? _ref4 : '',
    onInput: function onInput(e) {
      e.target.value = Number(e.target.value) > 99 || e.target.value === '.' || (e.target.value.match(/\./g) || []).length > 1 ? e.target.value.slice(0, -1) : e.target.value.match("^[".concat(e.target.value === '0' ? '1' : '0', "-9/.]{1,9}$"));
    },
    onChange: function onChange(e) {
      var _configState$configs3;
      return handleChangeInput(e, configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.distance_unit) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value);
    },
    ref: register({
      required: t('DISTANCE_FROM_STORE', 'Distance from store')
    })
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('BUSINESS_ADDRESS', 'Business address')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "address",
    defaultValue: business === null || business === void 0 ? void 0 : business.address,
    disabled: true
  })), zoneType !== 4 && isShowMap && (configState !== null && configState !== void 0 && (_configState$configs4 = configState.configs) !== null && _configState$configs4 !== void 0 && (_configState$configs4 = _configState$configs4.google_maps_api_key) !== null && _configState$configs4 !== void 0 && _configState$configs4.value ? /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, zoneType !== 5 && isMyZone && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setClearState(true);
    }
  }, t('CLEAR', 'Clear')), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessZoneGoogleMaps, {
    distance: (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 || (_formState$changes7 = _formState$changes7.data) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.distance,
    disabled: isMyZone,
    apiKey: configState === null || configState === void 0 || (_configState$configs5 = configState.configs) === null || _configState$configs5 === void 0 || (_configState$configs5 = _configState$configs5.google_maps_api_key) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value,
    mapControls: googleMapsControls,
    location: business === null || business === void 0 ? void 0 : business.location,
    clearState: clearState,
    setClearState: setClearState,
    type: zoneType,
    data: ((_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.data) || zoneData,
    handleData: handleZoneData,
    fillStyle: fillStyle,
    infoContentString: infoContentString,
    greenFillStyle: greenFillStyle,
    isAddMode: !zone,
    businessZones: businessZones,
    kmlData: kmlData
  })) : /*#__PURE__*/_react.default.createElement(_styles2.ErrorText, null, t('REQUIRED_GOOGLE_MAP_API_KEY', 'Google Maps api key is required'))), !zone && zoneType !== 5 && zoneType !== 4 && /*#__PURE__*/_react.default.createElement(_styles2.KmlButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    type: "button",
    onClick: function onClick() {
      return kmlRef.current.click();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleUploadKmlFiles(files);
    },
    childRef: function childRef(e) {
      kmlRef.current = e;
    },
    accept: ".kml,.kmz"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('UPLOAD_KML', 'Upload KML'))))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    type: "submit",
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, !zone ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }));
};