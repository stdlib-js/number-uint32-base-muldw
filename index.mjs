// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-mul@v0.1.1-esm/index.mjs";var s=65535;function t(e,t,r,i,d){var m,a,o,u,l,p,f;return m=(p=(a=(e>>>=0)>>>16>>>0)*(l=((t>>>=0)&s)>>>0)+(f=(p=(u=(e&s)>>>0)*l>>>0)>>>16>>>0)>>>0)>>>16>>>0,f=(p=u*(o=t>>>16>>>0)+((p&s)>>>0)>>>0)>>>16>>>0,r[d]=a*o+m+f>>>0,r[d+i]=n(e,t)>>>0,r}function r(e,n){return t(e,n,[0,0],1,0)}e(r,"assign",t);export{t as assign,r as default};
//# sourceMappingURL=index.mjs.map
