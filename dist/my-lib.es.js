import require$$0 from "react";
var styles = /* @__PURE__ */ (() => ".goo-button{background-color:#00f;padding:20px;border-radius:4px;display:flex;flex-direction:column;gap:20px}.goo-button__1{background-color:green;padding:20px}.goo-button__2{background-color:#ff0;padding:20px}.goo-button__3{background-color:silver;padding:20px}.goo-button__4{background-color:red;padding:20px}\n")();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const GooButton = (props) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "goo-button",
    children: [/* @__PURE__ */ jsx("div", {
      className: "goo-button__1",
      children: "GooButton"
    }), /* @__PURE__ */ jsxs("div", {
      className: "goo-button__2",
      children: ["props.name: ", props.name]
    }), /* @__PURE__ */ jsxs("div", {
      className: "goo-button__3",
      children: ["props.number: ", props.number]
    }), /* @__PURE__ */ jsxs("div", {
      className: "goo-button__4",
      children: ["props.boolean: ", props.boolean ? "true" : "false"]
    })]
  });
};
export { GooButton };
//# sourceMappingURL=my-lib.es.js.map
