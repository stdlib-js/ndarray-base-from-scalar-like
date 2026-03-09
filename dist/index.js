"use strict";var c=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=c(function(A,a){"use strict";var v=require("@stdlib/assert-is-number").isPrimitive,n=require("@stdlib/array-base-assert-is-accessor-array"),o=require("@stdlib/array-base-accessor-setter"),q=require("@stdlib/array-base-setter"),f=require("@stdlib/ndarray-base-dtype"),y=require("@stdlib/ndarray-base-order"),m=require("@stdlib/array-empty"),p=require("@stdlib/buffer-alloc-unsafe");function b(i,r){var t,s,e;return e=f(i),e==="binary"?t=p(1):t=m(1,e),/^complex/.test(e)&&v(r)&&(r=[r,0]),n(t)?s=o(e):s=q(e),s(t,0,r),new i.constructor(e,t,[],[0],0,y(i))}a.exports=b});var d=u();module.exports=d;
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
