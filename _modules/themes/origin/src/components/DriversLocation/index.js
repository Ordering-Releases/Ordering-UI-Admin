"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversLocation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _DriverMapMarkerAndInfo = require("../DriverMapMarkerAndInfo");
var _InterActOrderMarker = require("../InterActOrderMarker");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _AutoScroll = require("../../components/AutoScroll");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriversLocation = exports.DriversLocation = function DriversLocation(props) {
  var _configState$configs, _interActionMapOrder$6, _interActionMapOrder$7, _interActionMapOrder$8, _interActionMapOrder$9, _interActionMapOrder$10, _interActionMapOrder$11, _interActionMapOrder$12, _interActionMapOrder$13, _interActionMapOrder$14;
  var driversList = props.driversList,
    driverAvailable = props.driverAvailable,
    interActionMapOrder = props.interActionMapOrder;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var _useState = (0, _react.useState)({
      lat: 19.4326,
      lng: -99.1332
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mapCenter = _useState2[0],
    setMapCenter = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    mapZoom = _useState4[0],
    setMapZoom = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    onlineDrivers = _useState6[0],
    setOnlineDrivers = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    offlineDrivers = _useState8[0],
    setOfflineDrivers = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    mapLoaded = _useState10[0],
    setMapLoaded = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    interActionOrderDriverLocation = _useState12[0],
    setInterActionOrderDriverLocation = _useState12[1];
  var defaultCenter = {
    lat: 19.4326,
    lng: -99.1332
  };
  var defaultZoom = 10;
  var mapRef = (0, _react.useRef)(null);
  var mapFit = function mapFit() {
    var _onlineDrivers = driversList.drivers.filter(function (driver) {
      return driver.enabled && driver.available && !driver.busy;
    });
    setOnlineDrivers(_onlineDrivers);
    var _offlineDrivers = driversList.drivers.filter(function (driver) {
      return !(driver.enabled && driver.available && !driver.busy);
    });
    setOfflineDrivers(_offlineDrivers);
    var bounds = new window.google.maps.LatLngBounds();
    if (interActionMapOrder === null && driverAvailable === 'all') {
      if (driversList.drivers.length === 1) {
        setMapCenter(driversList.drivers[0].location);
        setMapZoom(defaultZoom);
        return;
      }
      var _iterator = _createForOfIteratorHelper(driversList.drivers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var driver = _step.value;
          var marker = driver.location !== null ? driver.location : defaultCenter;
          var newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
          bounds.extend(newPoint);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (driverAvailable === 'online' || interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null) {
      var _iterator2 = _createForOfIteratorHelper(_onlineDrivers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _driver = _step2.value;
          var _marker = _driver.location !== null ? _driver.location : defaultCenter;
          var _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
          bounds.extend(_newPoint);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    if (driverAvailable === 'online') {
      if (_onlineDrivers.length === 0) return;
      if (_onlineDrivers.length === 1) {
        setMapCenter(_onlineDrivers[0].location);
        setMapZoom(defaultZoom);
        return;
      }
    }
    if (!(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null) {
      var _interActionMapOrder$, _interActionMapOrder$2, _interActionMapOrder$3;
      var _marker2, _newPoint2;
      _marker2 = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$ = interActionMapOrder.business) === null || _interActionMapOrder$ === void 0 ? void 0 : _interActionMapOrder$.location) !== null ? interActionMapOrder.business.location : defaultCenter;
      _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
      bounds.extend(_newPoint2);
      _marker2 = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$2 = interActionMapOrder.customer) === null || _interActionMapOrder$2 === void 0 ? void 0 : _interActionMapOrder$2.location) !== null && interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$3 = interActionMapOrder.customer) !== null && _interActionMapOrder$3 !== void 0 && (_interActionMapOrder$3 = _interActionMapOrder$3.location) !== null && _interActionMapOrder$3 !== void 0 && _interActionMapOrder$3.lat ? interActionMapOrder.customer.location : defaultCenter;
      _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
      bounds.extend(_newPoint2);
      if (interActionMapOrder.driver !== null && interActionOrderDriverLocation) {
        _marker2 = interActionOrderDriverLocation !== null ? interActionOrderDriverLocation : defaultCenter;
        _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
        bounds.extend(_newPoint2);
      }
    }
    if (driverAvailable === 'offline') {
      if (_offlineDrivers.length === 0) {
        return;
      } else {
        var checkLocation = false;
        var _iterator3 = _createForOfIteratorHelper(_offlineDrivers),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _driver2 = _step3.value;
            if (_driver2.location !== null) {
              checkLocation = true;
            }
            var _marker3 = _driver2.location !== null ? _driver2.location : defaultCenter;
            var _newPoint3 = new window.google.maps.LatLng(_marker3.lat, _marker3.lng);
            bounds.extend(_newPoint3);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        if (!checkLocation) {
          setMapCenter(defaultCenter);
          setMapZoom(defaultZoom);
          return;
        }
      }
    }
    var newBounds = {
      ne: {
        lat: bounds.getNorthEast().lat(),
        lng: bounds.getNorthEast().lng()
      },
      sw: {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng()
      }
    };
    var mapSize = {
      width: mapRef.current.clientWidth,
      height: mapRef.current.clientHeight
    };
    var _fitBounds = (0, _googleMapReact.fitBounds)(newBounds, mapSize),
      center = _fitBounds.center,
      zoom = _fitBounds.zoom;
    setMapZoom(zoom);
    setMapCenter(center);
  };

  // Fit bounds on mount, and when the markers change
  (0, _react.useEffect)(function () {
    if (driversList.loading || driversList.drivers.length === 0 || mapLoaded) return;
    if (interActionMapOrder !== null) {
      var _iterator4 = _createForOfIteratorHelper(driversList.drivers),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _interActionMapOrder$4;
          var driver = _step4.value;
          if (driver.id === (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$4 = interActionMapOrder.driver) === null || _interActionMapOrder$4 === void 0 ? void 0 : _interActionMapOrder$4.id)) {
            setInterActionOrderDriverLocation(driver.location);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    } else {
      mapFit();
    }
  }, [driversList, driverAvailable, interActionMapOrder, mapLoaded]);
  (0, _react.useEffect)(function () {
    var _interActionMapOrder$5;
    if (mapLoaded || interActionMapOrder === null) return;
    if (driverAvailable === 'online' || driverAvailable === 'offline') return;
    setInterActionOrderDriverLocation(interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$5 = interActionMapOrder.driver) === null || _interActionMapOrder$5 === void 0 ? void 0 : _interActionMapOrder$5.location);
    mapFit();
  }, [interActionMapOrder, mapLoaded]);
  (0, _react.useEffect)(function () {
    if (mapLoaded || interActionOrderDriverLocation === null) return;
    mapFit();
  }, [interActionOrderDriverLocation, mapLoaded]);
  var handleMapChange = function handleMapChange(data) {
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
    ref: mapRef,
    className: "drivers-location"
  }, /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
    bootstrapURLKeys: {
      key: googleMapsApiKey
    },
    onGoogleApiLoaded: function onGoogleApiLoaded() {
      return setMapLoaded(false);
    },
    defaultCenter: defaultCenter,
    center: mapCenter,
    defaultZoom: defaultZoom,
    zoom: mapZoom,
    options: {
      fullscreenControl: false
    },
    className: "map",
    onChange: function onChange(data) {
      return handleMapChange(data);
    },
    yesIWantToUseGoogleMapApiInternals: true
  }, interActionMapOrder === null && driverAvailable === 'all' && driversList.drivers.length !== 0 && driversList.drivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      timeStatus: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.time_status,
      lat: driver.location !== null ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null ? driver.location.lng : defaultCenter.lng
    });
  }), (driverAvailable === 'online' || interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null) && onlineDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      timeStatus: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.time_status,
      lat: driver.location !== null ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null ? driver.location.lng : defaultCenter.lng
    });
  }), driverAvailable === 'offline' && offlineDrivers.length > 0 && offlineDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      timeStatus: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.time_status,
      lat: driver.location !== null ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null ? driver.location.lng : defaultCenter.lng
    });
  }), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.business,
    lat: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$6 = interActionMapOrder.business) === null || _interActionMapOrder$6 === void 0 || (_interActionMapOrder$6 = _interActionMapOrder$6.location) === null || _interActionMapOrder$6 === void 0 ? void 0 : _interActionMapOrder$6.lat,
    lng: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$7 = interActionMapOrder.business) === null || _interActionMapOrder$7 === void 0 || (_interActionMapOrder$7 = _interActionMapOrder$7.location) === null || _interActionMapOrder$7 === void 0 ? void 0 : _interActionMapOrder$7.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$8 = interActionMapOrder.business) === null || _interActionMapOrder$8 === void 0 ? void 0 : _interActionMapOrder$8.logo
  }), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.customer,
    lat: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$9 = interActionMapOrder.customer) !== null && _interActionMapOrder$9 !== void 0 && (_interActionMapOrder$9 = _interActionMapOrder$9.location) !== null && _interActionMapOrder$9 !== void 0 && _interActionMapOrder$9.lat ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$10 = interActionMapOrder.customer) === null || _interActionMapOrder$10 === void 0 || (_interActionMapOrder$10 = _interActionMapOrder$10.location) === null || _interActionMapOrder$10 === void 0 ? void 0 : _interActionMapOrder$10.lat : defaultCenter.lat,
    lng: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$11 = interActionMapOrder.customer) !== null && _interActionMapOrder$11 !== void 0 && (_interActionMapOrder$11 = _interActionMapOrder$11.location) !== null && _interActionMapOrder$11 !== void 0 && _interActionMapOrder$11.lng ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$12 = interActionMapOrder.customer) === null || _interActionMapOrder$12 === void 0 || (_interActionMapOrder$12 = _interActionMapOrder$12.location) === null || _interActionMapOrder$12 === void 0 ? void 0 : _interActionMapOrder$12.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$13 = interActionMapOrder.customer) === null || _interActionMapOrder$13 === void 0 ? void 0 : _interActionMapOrder$13.photo
  }), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    driver: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver,
    timeStatus: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.time_status,
    lat: interActionOrderDriverLocation ? interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.lat : defaultCenter.lat,
    lng: interActionOrderDriverLocation ? interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$14 = interActionMapOrder.driver) === null || _interActionMapOrder$14 === void 0 ? void 0 : _interActionMapOrder$14.photo
  })), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null && /*#__PURE__*/_react.default.createElement(_styles.WrapperOnlineDrivers, null, /*#__PURE__*/_react.default.createElement("p", null, t('ACTIVE_DRIVERS', 'Drivers online')), /*#__PURE__*/_react.default.createElement(_styles.OnlineDrivers, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    innerScroll: true
  }, onlineDrivers.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, onlineDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_styles.WrapDriverInfo, {
      key: driver.id
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, null, driver !== null && driver !== void 0 && driver.photo ? /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
      bgimage: driver === null || driver === void 0 ? void 0 : driver.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("p", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))));
  }))))));
};