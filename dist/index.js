!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["@inlightmedia/react-zendesk-chat"]=e():t["@inlightmedia/react-zendesk-chat"]=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=14)}([function(t,e,r){t.exports=r(4)()},function(t,e,r){"use strict";t.exports=r(2)},function(t,e,r){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,s=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function b(t){for(var e=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=0;n<e;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(t,e,r,n,o,i,s,a){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,i,s,a],c=0;(t=Error(e.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function w(t,e,r){this.props=t,this.context=e,this.refs=O,this.updater=r||g}function j(){}function x(t,e,r){this.props=t,this.context=e,this.refs=O,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&b("85"),this.updater.enqueueSetState(this,t,e,"setState")},w.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},j.prototype=w.prototype;var _=x.prototype=new j;_.constructor=x,n(_,w.prototype),_.isPureReactComponent=!0;var C={current:null},S={current:null},P=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(t,e,r){var n=void 0,o={},s=null,a=null;if(null!=e)for(n in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(s=""+e.key),e)P.call(e,n)&&!k.hasOwnProperty(n)&&(o[n]=e[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(t&&t.defaultProps)for(n in u=t.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:t,key:s,ref:a,props:o,_owner:S.current}}function R(t){return"object"==typeof t&&null!==t&&t.$$typeof===i}var I=/\/+/g,$=[];function A(t,e,r,n){if($.length){var o=$.pop();return o.result=t,o.keyPrefix=e,o.func=r,o.context=n,o.count=0,o}return{result:t,keyPrefix:e,func:r,context:n,count:0}}function q(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>$.length&&$.push(t)}function T(t,e,r){return null==t?0:function t(e,r,n,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case s:u=!0}}if(u)return n(o,e,""===r?"."+U(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+U(a=e[c],c);u+=t(a,l,n,o)}else if(l=null===e||"object"!=typeof e?null:"function"==typeof(l=v&&e[v]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=t(a=a.value,l=r+U(a,c++),n,o);else"object"===a&&b("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}(t,"",e,r)}function U(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}(t.key):e.toString(36)}function z(t,e){t.func.call(t.context,e,t.count++)}function N(t,e,r){var n=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?D(t,n,r,function(t){return t}):null!=t&&(R(t)&&(t=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(I,"$&/")+"/")+r)),n.push(t))}function D(t,e,r,n,o){var i="";null!=r&&(i=(""+r).replace(I,"$&/")+"/"),T(t,N,e=A(e,i,n,o)),q(e)}function F(){var t=C.current;return null===t&&b("321"),t}var L={Children:{map:function(t,e,r){if(null==t)return t;var n=[];return D(t,n,null,e,r),n},forEach:function(t,e,r){if(null==t)return t;T(t,z,e=A(null,null,e,r)),q(e)},count:function(t){return T(t,function(){return null},null)},toArray:function(t){var e=[];return D(t,e,null,function(t){return t}),e},only:function(t){return R(t)||b("143"),t}},createRef:function(){return{current:null}},Component:w,PureComponent:x,createContext:function(t,e){return void 0===e&&(e=null),(t={$$typeof:f,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},forwardRef:function(t){return{$$typeof:p,render:t}},lazy:function(t){return{$$typeof:d,_ctor:t,_status:-1,_result:null}},memo:function(t,e){return{$$typeof:m,type:t,compare:void 0===e?null:e}},useCallback:function(t,e){return F().useCallback(t,e)},useContext:function(t,e){return F().useContext(t,e)},useEffect:function(t,e){return F().useEffect(t,e)},useImperativeHandle:function(t,e,r){return F().useImperativeHandle(t,e,r)},useDebugValue:function(){},useLayoutEffect:function(t,e){return F().useLayoutEffect(t,e)},useMemo:function(t,e){return F().useMemo(t,e)},useReducer:function(t,e,r){return F().useReducer(t,e,r)},useRef:function(t){return F().useRef(t)},useState:function(t){return F().useState(t)},Fragment:a,StrictMode:u,Suspense:y,createElement:E,cloneElement:function(t,e,r){null==t&&b("267",t);var o=void 0,s=n({},t.props),a=t.key,u=t.ref,c=t._owner;if(null!=e){void 0!==e.ref&&(u=e.ref,c=S.current),void 0!==e.key&&(a=""+e.key);var l=void 0;for(o in t.type&&t.type.defaultProps&&(l=t.type.defaultProps),e)P.call(e,o)&&!k.hasOwnProperty(o)&&(s[o]=void 0===e[o]&&void 0!==l?l[o]:e[o])}if(1===(o=arguments.length-2))s.children=r;else if(1<o){l=Array(o);for(var f=0;f<o;f++)l[f]=arguments[f+2];s.children=l}return{$$typeof:i,type:t.type,key:a,ref:u,props:s,_owner:c}},createFactory:function(t){var e=E.bind(null,t);return e.type=t,e},isValidElement:R,version:"16.8.6",unstable_ConcurrentMode:h,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentOwner:S,assign:n}},M={default:L},H=M&&L||M;t.exports=H.default||H},function(t,e,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function s(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,a,u=s(t),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))o.call(r,l)&&(u[l]=r[l]);if(n){a=n(r);for(var f=0;f<a.length;f++)i.call(r,a[f])&&(u[a[f]]=r[a[f]])}}return u}},function(t,e,r){"use strict";var n=r(5);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){"use strict";var n=r(7),o=r(10);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=g,e.resolve=function(t,e){return g(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?g(t,!1,!0).resolveObject(e):e},e.format=function(t){o.isString(t)&&(t=g(t));return t instanceof i?t.format():i.prototype.format.call(t)},e.Url=i;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(c),f=["%","/","?",";","#"].concat(l),h=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,y=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=r(11);function g(t,e,r){if(t&&o.isObject(t)&&t instanceof i)return t;var n=new i;return n.parse(t,e,r),n}i.prototype.parse=function(t,e,r){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t.indexOf("?"),a=-1!==i&&i<t.indexOf("#")?"?":"#",c=t.split(a);c[0]=c[0].replace(/\\/g,"/");var g=t=c.join(a);if(g=g.trim(),!r&&1===t.split("#").length){var O=u.exec(g);if(O)return this.path=g,this.href=g,this.pathname=O[1],O[2]?(this.search=O[2],this.query=e?b.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var w=s.exec(g);if(w){var j=(w=w[0]).toLowerCase();this.protocol=j,g=g.substr(w.length)}if(r||w||g.match(/^\/\/[^@\/]+@[^@\/]+/)){var x="//"===g.substr(0,2);!x||w&&d[w]||(g=g.substr(2),this.slashes=!0)}if(!d[w]&&(x||w&&!v[w])){for(var _,C,S=-1,P=0;P<h.length;P++){-1!==(k=g.indexOf(h[P]))&&(-1===S||k<S)&&(S=k)}-1!==(C=-1===S?g.lastIndexOf("@"):g.lastIndexOf("@",S))&&(_=g.slice(0,C),g=g.slice(C+1),this.auth=decodeURIComponent(_)),S=-1;for(P=0;P<f.length;P++){var k;-1!==(k=g.indexOf(f[P]))&&(-1===S||k<S)&&(S=k)}-1===S&&(S=g.length),this.host=g.slice(0,S),g=g.slice(S),this.parseHost(),this.hostname=this.hostname||"";var E="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!E)for(var R=this.hostname.split(/\./),I=(P=0,R.length);P<I;P++){var $=R[P];if($&&!$.match(p)){for(var A="",q=0,T=$.length;q<T;q++)$.charCodeAt(q)>127?A+="x":A+=$[q];if(!A.match(p)){var U=R.slice(0,P),z=R.slice(P+1),N=$.match(y);N&&(U.push(N[1]),z.unshift(N[2])),z.length&&(g="/"+z.join(".")+g),this.hostname=U.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),E||(this.hostname=n.toASCII(this.hostname));var D=this.port?":"+this.port:"",F=this.hostname||"";this.host=F+D,this.href+=this.host,E&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==g[0]&&(g="/"+g))}if(!m[j])for(P=0,I=l.length;P<I;P++){var L=l[P];if(-1!==g.indexOf(L)){var M=encodeURIComponent(L);M===L&&(M=escape(L)),g=g.split(L).join(M)}}var H=g.indexOf("#");-1!==H&&(this.hash=g.substr(H),g=g.slice(0,H));var V=g.indexOf("?");if(-1!==V?(this.search=g.substr(V),this.query=g.substr(V+1),e&&(this.query=b.parse(this.query)),g=g.slice(0,V)):e&&(this.search="",this.query={}),g&&(this.pathname=g),v[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){D=this.pathname||"";var B=this.search||"";this.path=D+B}return this.href=this.format(),this},i.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,s="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=b.stringify(this.query));var a=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||v[e])&&!1!==i?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),e+i+(r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(a=a.replace("#","%23"))+n},i.prototype.resolve=function(t){return this.resolveObject(g(t,!1,!0)).format()},i.prototype.resolveObject=function(t){if(o.isString(t)){var e=new i;e.parse(t,!1,!0),t=e}for(var r=new i,n=Object.keys(this),s=0;s<n.length;s++){var a=n[s];r[a]=this[a]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var u=Object.keys(t),c=0;c<u.length;c++){var l=u[c];"protocol"!==l&&(r[l]=t[l])}return v[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!v[t.protocol]){for(var f=Object.keys(t),h=0;h<f.length;h++){var p=f[h];r[p]=t[p]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||d[t.protocol])r.pathname=t.pathname;else{for(var y=(t.pathname||"").split("/");y.length&&!(t.host=y.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==y[0]&&y.unshift(""),y.length<2&&y.unshift(""),r.pathname=y.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var m=r.pathname||"",b=r.search||"";r.path=m+b}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var g=r.pathname&&"/"===r.pathname.charAt(0),O=t.host||t.pathname&&"/"===t.pathname.charAt(0),w=O||g||r.host&&t.pathname,j=w,x=r.pathname&&r.pathname.split("/")||[],_=(y=t.pathname&&t.pathname.split("/")||[],r.protocol&&!v[r.protocol]);if(_&&(r.hostname="",r.port=null,r.host&&(""===x[0]?x[0]=r.host:x.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===y[0]?y[0]=t.host:y.unshift(t.host)),t.host=null),w=w&&(""===y[0]||""===x[0])),O)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,x=y;else if(y.length)x||(x=[]),x.pop(),x=x.concat(y),r.search=t.search,r.query=t.query;else if(!o.isNullOrUndefined(t.search)){if(_)r.hostname=r.host=x.shift(),(E=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=E.shift(),r.host=r.hostname=E.shift());return r.search=t.search,r.query=t.query,o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!x.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var C=x.slice(-1)[0],S=(r.host||t.host||x.length>1)&&("."===C||".."===C)||""===C,P=0,k=x.length;k>=0;k--)"."===(C=x[k])?x.splice(k,1):".."===C?(x.splice(k,1),P++):P&&(x.splice(k,1),P--);if(!w&&!j)for(;P--;P)x.unshift("..");!w||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),S&&"/"!==x.join("/").substr(-1)&&x.push("");var E,R=""===x[0]||x[0]&&"/"===x[0].charAt(0);_&&(r.hostname=r.host=R?"":x.length?x.shift():"",(E=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=E.shift(),r.host=r.hostname=E.shift()));return(w=w||r.host&&x.length)&&!R&&x.unshift(""),x.length?r.pathname=x.join("/"):(r.pathname=null,r.path=null),o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},i.prototype.parseHost=function(){var t=this.host,e=a.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,r){(function(t,n){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(i){e&&e.nodeType,t&&t.nodeType;var s="object"==typeof n&&n;s.global!==s&&s.window!==s&&s.self;var a,u=2147483647,c=36,l=1,f=26,h=38,p=700,y=72,m=128,d="-",v=/^xn--/,b=/[^\x20-\x7E]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,O={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=c-l,j=Math.floor,x=String.fromCharCode;function _(t){throw new RangeError(O[t])}function C(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function S(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),n+C((t=t.replace(g,".")).split("."),e).join(".")}function P(t){for(var e,r,n=[],o=0,i=t.length;o<i;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<i?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}function k(t){return C(t,function(t){var e="";return t>65535&&(e+=x((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=x(t)}).join("")}function E(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function R(t,e,r){var n=0;for(t=r?j(t/p):t>>1,t+=j(t/e);t>w*f>>1;n+=c)t=j(t/w);return j(n+(w+1)*t/(t+h))}function I(t){var e,r,n,o,i,s,a,h,p,v,b,g=[],O=t.length,w=0,x=m,C=y;for((r=t.lastIndexOf(d))<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&_("not-basic"),g.push(t.charCodeAt(n));for(o=r>0?r+1:0;o<O;){for(i=w,s=1,a=c;o>=O&&_("invalid-input"),((h=(b=t.charCodeAt(o++))-48<10?b-22:b-65<26?b-65:b-97<26?b-97:c)>=c||h>j((u-w)/s))&&_("overflow"),w+=h*s,!(h<(p=a<=C?l:a>=C+f?f:a-C));a+=c)s>j(u/(v=c-p))&&_("overflow"),s*=v;C=R(w-i,e=g.length+1,0==i),j(w/e)>u-x&&_("overflow"),x+=j(w/e),w%=e,g.splice(w++,0,x)}return k(g)}function $(t){var e,r,n,o,i,s,a,h,p,v,b,g,O,w,C,S=[];for(g=(t=P(t)).length,e=m,r=0,i=y,s=0;s<g;++s)(b=t[s])<128&&S.push(x(b));for(n=o=S.length,o&&S.push(d);n<g;){for(a=u,s=0;s<g;++s)(b=t[s])>=e&&b<a&&(a=b);for(a-e>j((u-r)/(O=n+1))&&_("overflow"),r+=(a-e)*O,e=a,s=0;s<g;++s)if((b=t[s])<e&&++r>u&&_("overflow"),b==e){for(h=r,p=c;!(h<(v=p<=i?l:p>=i+f?f:p-i));p+=c)C=h-v,w=c-v,S.push(x(E(v+C%w,0))),h=j(C/w);S.push(x(E(h,0))),i=R(r,O,n==o),r=0,++n}++r,++e}return S.join("")}a={version:"1.4.1",ucs2:{decode:P,encode:k},decode:I,encode:$,toASCII:function(t){return S(t,function(t){return b.test(t)?"xn--"+$(t):t})},toUnicode:function(t){return S(t,function(t){return v.test(t)?I(t.slice(4).toLowerCase()):t})}},void 0===(o=function(){return a}.call(e,r,e,t))||(t.exports=o)}()}).call(this,r(8)(t),r(9))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,e,r){"use strict";e.decode=e.parse=r(12),e.encode=e.stringify=r(13)},function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,i){e=e||"&",r=r||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var u=1e3;i&&"number"==typeof i.maxKeys&&(u=i.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var l=0;l<c;++l){var f,h,p,y,m=t[l].replace(a,"%20"),d=m.indexOf(r);d>=0?(f=m.substr(0,d),h=m.substr(d+1)):(f=m,h=""),p=decodeURIComponent(f),y=decodeURIComponent(h),n(s,p)?o(s[p])?s[p].push(y):s[p]=[s[p],y]:s[p]=y}return s};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?i(s(t),function(s){var a=encodeURIComponent(n(s))+r;return o(t[s])?i(t[s],function(t){return a+encodeURIComponent(n(t))}).join(e):a+encodeURIComponent(n(t[s]))}).join(e):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var s=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(0),i=r.n(o);r(6);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?l(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=!("undefined"==typeof window||!window.document||!window.document.createElement),y=function(t){function e(t){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(l(r=u(this,c(e).call(this,t))),"setLanguageProps",function(){var t=r.props,e=t.language,n=t.title,o=t.preChatGreeting,i=t.badgeText;$zopim(function(){$zopim.livechat.setLanguage(e),$zopim.livechat.window.setTitle(n),$zopim.livechat.prechatForm.setGreetings(o),$zopim.livechat.badge.setText(i)})});var n=t.appID,o=t.onError;if(!n)throw console.error("Error: Have you forgotten to pass in hte appID prop?"),new Error("Error: Cannot initialize the ZenDesk Chat Component. Have you forgotten to pass in the appID prop?");if(!p)return console.error("Error: Could not initialize Zendesk react. The DOM is not ready."),u(r);window.$zopim||function(t,e,r){return new Promise(function(e,n){var i=window.$zopim=function(t){i._.push(t)},s=i.s=t.createElement("script"),a=t.getElementsByTagName("script")[0];i.set=function(t){i.set._.push(t)},i._=[],i.set._=[],s.async=!0,s.setAttribute("charset","utf-8"),s.src="https://v2.zopim.com/?"+r,i.t=+new Date,s.type="text/javascript",a.parentNode.insertBefore(s,a),s.onload=function(){e()},s.onerror=function(t){o(t),n(new Error("Zopim API load error."))}})}(document,0,n).then(function(){r.setLanguageProps()}).catch(function(t){console.log(t)});return r}var r,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,n["Component"]),r=e,(o=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){if(!p||!window.$zopim)return!1;delete window.$zopim}},{key:"render",value:function(){return!1}}])&&a(r.prototype,o),i&&a(r,i),e}();h(y,"propTypes",{appID:i.a.string.isRequired,language:i.a.string.isRequired,title:i.a.string.isRequired,preChatGreeting:i.a.string.isRequired,badgeText:i.a.string.isRequired});var m=y;e.default=m}])});