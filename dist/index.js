"use strict";var w=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=w(function(A,x){
var h=require('@stdlib/number-uint32-base-mul/dist'),c=65535;function o(e,r,v,g,f){var q,m,i,s,t,n,a,u;return e>>>=0,r>>>=0,i=e>>>16>>>0,t=(e&c)>>>0,s=r>>>16>>>0,n=(r&c)>>>0,a=t*n>>>0,u=a>>>16>>>0,a=i*n+u>>>0,m=(a&c)>>>0,q=a>>>16>>>0,a=t*s+m>>>0,u=a>>>16>>>0,v[f]=i*s+q+u>>>0,v[f+g]=h(e,r)>>>0,v}x.exports=o
});var p=w(function(D,d){
var R=l();function W(e,r){return R(e,r,[0,0],1,0)}d.exports=W
});var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=p(),k=l();_(O,"assign",k);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
