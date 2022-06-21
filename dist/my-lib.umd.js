(function(o,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(o=typeof globalThis!="undefined"?globalThis:o||self,n(o.MyLib={},o.React))})(this,function(o,n){"use strict";function _(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var a=_(n),f={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=a.default,m=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,b=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,p){var r,s={},d=null,c=null;p!==void 0&&(d=""+p),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)x.call(t,r)&&!h.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:m,type:e,key:d,ref:c,props:s,_owner:b.current}}i.Fragment=v,i.jsx=l,i.jsxs=l,f.exports=i;const j=f.exports.jsx,u=f.exports.jsxs,O=e=>u("div",{children:[j("div",{children:"GooButton"}),u("div",{children:["props.name: ",e.name]}),u("div",{children:["props.number: ",e.number]}),u("div",{children:["props.boolean: ",e.boolean?"true":"false"]})]});o.GooButton=O,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=my-lib.umd.js.map
