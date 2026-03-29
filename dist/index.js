"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=v(function(D,t){"use strict";var c=require("@stdlib/ndarray-base-assert-is-complex-floating-point-data-type"),q=require("@stdlib/assert-is-number").isPrimitive,o=require("@stdlib/array-base-assert-is-accessor-array"),n=require("@stdlib/array-base-accessor-setter"),y=require("@stdlib/array-base-setter"),f=require("@stdlib/ndarray-base-dtype-resolve-str"),p=require("@stdlib/ndarray-base-dtype"),m=require("@stdlib/ndarray-base-order"),l=require("@stdlib/array-empty"),b=require("@stdlib/buffer-alloc-unsafe");function d(i,r){var a,s,e;return e=f(p(i)),e==="binary"?a=b(1):a=l(1,e),c(e)&&q(r)&&(r=[r,0]),o(a)?s=n(e):s=y(e),s(a,0,r),new i.constructor(e,a,[],[0],0,m(i))}t.exports=d});var A=u();module.exports=A;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
