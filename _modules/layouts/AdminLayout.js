"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminLayout = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = require("../components/Header");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { SideMenu } from '../components/SideMenu'

var AdminLayout = exports.AdminLayout = function AdminLayout(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.Header, null), /*#__PURE__*/_react.default.createElement(_styles.AdminMainContainer, null, props.children));
};