(function(n,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],r):(n=typeof globalThis!="undefined"?globalThis:n||self,r(n.MyLib={},n.React))})(this,function(n,r){"use strict";function p(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var _=p(r),k=(()=>`.goo-button{background-color:#00f;padding:20px;border-radius:4px;display:flex;flex-direction:column;gap:20px}.goo-button__1{background-color:green;padding:20px}.goo-button__2{background-color:#ff0;padding:20px}.goo-button__3{background-color:silver;padding:20px}.goo-button__4{background-color:red;padding:20px}
`)(),s={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=_.default,g=Symbol.for("react.element"),x=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,y=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,c){var t,i={},l=null,f=null;c!==void 0&&(l=""+c),o.key!==void 0&&(l=""+o.key),o.ref!==void 0&&(f=o.ref);for(t in o)m.call(o,t)&&!v.hasOwnProperty(t)&&(i[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps,o)i[t]===void 0&&(i[t]=o[t]);return{$$typeof:g,type:e,key:l,ref:f,props:i,_owner:y.current}}u.Fragment=x,u.jsx=a,u.jsxs=a,s.exports=u;const h=s.exports.jsx,d=s.exports.jsxs,j=e=>d("div",{className:"goo-button",children:[h("div",{className:"goo-button__1",children:"GooButton"}),d("div",{className:"goo-button__2",children:["props.name: ",e.name]}),d("div",{className:"goo-button__3",children:["props.number: ",e.number]}),d("div",{className:"goo-button__4",children:["props.boolean: ",e.boolean?"true":"false"]})]});n.GooButton=j,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=my-lib.umd.js.map
