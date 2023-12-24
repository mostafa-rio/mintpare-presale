(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var V1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function J3(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var X3={exports:{}},Tf={},ey={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=Symbol.for("react.element"),M6=Symbol.for("react.portal"),j6=Symbol.for("react.fragment"),L6=Symbol.for("react.strict_mode"),B6=Symbol.for("react.profiler"),U6=Symbol.for("react.provider"),F6=Symbol.for("react.context"),z6=Symbol.for("react.forward_ref"),W6=Symbol.for("react.suspense"),H6=Symbol.for("react.memo"),V6=Symbol.for("react.lazy"),Xg=Symbol.iterator;function q6(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ny=Object.assign,ry={};function Pa(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iy(){}iy.prototype=Pa.prototype;function q1(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}var Z1=q1.prototype=new iy;Z1.constructor=q1;ny(Z1,Pa.prototype);Z1.isPureReactComponent=!0;var e2=Array.isArray,oy=Object.prototype.hasOwnProperty,G1={current:null},sy={key:!0,ref:!0,__self:!0,__source:!0};function ay(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)oy.call(e,r)&&!sy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zc,type:t,key:o,ref:s,props:i,_owner:G1.current}}function Z6(t,e){return{$$typeof:zc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function K1(t){return typeof t=="object"&&t!==null&&t.$$typeof===zc}function G6(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var t2=/\/+/g;function L0(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G6(""+t.key):e.toString(36)}function qu(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case zc:case M6:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+L0(s,0):r,e2(i)?(n="",t!=null&&(n=t.replace(t2,"$&/")+"/"),qu(i,e,n,"",function(c){return c})):i!=null&&(K1(i)&&(i=Z6(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(t2,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",e2(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+L0(o,a);s+=qu(o,e,n,l,i)}else if(l=q6(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+L0(o,a++),s+=qu(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function mu(t,e,n){if(t==null)return t;var r=[],i=0;return qu(t,r,"","",function(o){return e.call(n,o,i++)}),r}function K6(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Zu={transition:null},Q6={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:G1};Re.Children={map:mu,forEach:function(t,e,n){mu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mu(t,function(){e++}),e},toArray:function(t){return mu(t,function(e){return e})||[]},only:function(t){if(!K1(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Re.Component=Pa;Re.Fragment=j6;Re.Profiler=B6;Re.PureComponent=q1;Re.StrictMode=L6;Re.Suspense=W6;Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q6;Re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ny({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=G1.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)oy.call(e,l)&&!sy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:zc,type:t.type,key:i,ref:o,props:r,_owner:s}};Re.createContext=function(t){return t={$$typeof:F6,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:U6,_context:t},t.Consumer=t};Re.createElement=ay;Re.createFactory=function(t){var e=ay.bind(null,t);return e.type=t,e};Re.createRef=function(){return{current:null}};Re.forwardRef=function(t){return{$$typeof:z6,render:t}};Re.isValidElement=K1;Re.lazy=function(t){return{$$typeof:V6,_payload:{_status:-1,_result:t},_init:K6}};Re.memo=function(t,e){return{$$typeof:H6,type:t,compare:e===void 0?null:e}};Re.startTransition=function(t){var e=Zu.transition;Zu.transition={};try{t()}finally{Zu.transition=e}};Re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Re.useCallback=function(t,e){return nn.current.useCallback(t,e)};Re.useContext=function(t){return nn.current.useContext(t)};Re.useDebugValue=function(){};Re.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Re.useEffect=function(t,e){return nn.current.useEffect(t,e)};Re.useId=function(){return nn.current.useId()};Re.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Re.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Re.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Re.useMemo=function(t,e){return nn.current.useMemo(t,e)};Re.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Re.useRef=function(t){return nn.current.useRef(t)};Re.useState=function(t){return nn.current.useState(t)};Re.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Re.useTransition=function(){return nn.current.useTransition()};Re.version="18.2.0";ey.exports=Re;var le=ey.exports;const Yn=Fc(le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y6=le,J6=Symbol.for("react.element"),X6=Symbol.for("react.fragment"),e8=Object.prototype.hasOwnProperty,t8=Y6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n8={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)e8.call(e,r)&&!n8.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:J6,type:t,key:o,ref:s,props:i,_owner:t8.current}}Tf.Fragment=X6;Tf.jsx=ly;Tf.jsxs=ly;X3.exports=Tf;var q=X3.exports,Vh={},cy={exports:{}},kn={},uy={exports:{}},dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var L=N.length;N.push(z);e:for(;0<L;){var H=L-1>>>1,G=N[H];if(0<i(G,z))N[H]=z,N[L]=G,L=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],L=N.pop();if(L!==z){N[0]=L;e:for(var H=0,G=N.length,V=G>>>1;H<V;){var ne=2*(H+1)-1,fe=N[ne],me=ne+1,ve=N[me];if(0>i(fe,L))me<G&&0>i(ve,fe)?(N[H]=ve,N[me]=L,H=me):(N[H]=fe,N[ne]=L,H=ne);else if(me<G&&0>i(ve,L))N[H]=ve,N[me]=L,H=me;else break e}}return z}function i(N,z){var L=N.sortIndex-z.sortIndex;return L!==0?L:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,h=3,g=!1,y=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function x(N){if(C=!1,v(N),!y)if(n(l)!==null)y=!0,j(_);else{var z=n(c);z!==null&&U(x,z.startTime-N)}}function _(N,z){y=!1,C&&(C=!1,b($),$=-1),g=!0;var L=h;try{for(v(z),f=n(l);f!==null&&(!(f.expirationTime>z)||N&&!R());){var H=f.callback;if(typeof H=="function"){f.callback=null,h=f.priorityLevel;var G=H(f.expirationTime<=z);z=t.unstable_now(),typeof G=="function"?f.callback=G:f===n(l)&&r(l),v(z)}else r(l);f=n(l)}if(f!==null)var V=!0;else{var ne=n(c);ne!==null&&U(x,ne.startTime-z),V=!1}return V}finally{f=null,h=L,g=!1}}var S=!1,d=null,$=-1,O=5,I=-1;function R(){return!(t.unstable_now()-I<O)}function Y(){if(d!==null){var N=t.unstable_now();I=N;var z=!0;try{z=d(!0,N)}finally{z?te():(S=!1,d=null)}}else S=!1}var te;if(typeof m=="function")te=function(){m(Y)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,F=W.port2;W.port1.onmessage=Y,te=function(){F.postMessage(null)}}else te=function(){E(Y,0)};function j(N){d=N,S||(S=!0,te())}function U(N,z){$=E(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,j(_))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var L=h;h=z;try{return N()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return z()}finally{h=L}},t.unstable_scheduleCallback=function(N,z,L){var H=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,N={id:u++,callback:z,priorityLevel:N,startTime:L,expirationTime:G,sortIndex:-1},L>H?(N.sortIndex=L,e(c,N),n(l)===null&&N===n(c)&&(C?(b($),$=-1):C=!0,U(x,L-H))):(N.sortIndex=G,e(l,N),y||g||(y=!0,j(_))),N},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(N){var z=h;return function(){var L=h;h=z;try{return N.apply(this,arguments)}finally{h=L}}}})(dy);uy.exports=dy;var r8=uy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=le,Sn=r8;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hy=new Set,Pl={};function os(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Pl[t]=e,t=0;t<e.length;t++)hy.add(e[t])}var Yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qh=Object.prototype.hasOwnProperty,i8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,n2={},r2={};function o8(t){return qh.call(r2,t)?!0:qh.call(n2,t)?!1:i8.test(t)?r2[t]=!0:(n2[t]=!0,!1)}function s8(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a8(t,e,n,r){if(e===null||typeof e>"u"||s8(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Q1=/[\-:]([a-z])/g;function Y1(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Q1,Y1);Lt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Q1,Y1);Lt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Q1,Y1);Lt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function J1(t,e,n,r){var i=Lt.hasOwnProperty(e)?Lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a8(e,n,i,r)&&(n=null),r||i===null?o8(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var li=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gu=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),X1=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),py=Symbol.for("react.provider"),my=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Kh=Symbol.for("react.suspense_list"),tm=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),gy=Symbol.for("react.offscreen"),i2=Symbol.iterator;function Wa(t){return t===null||typeof t!="object"?null:(t=i2&&t[i2]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,B0;function il(t){if(B0===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);B0=e&&e[1]||""}return`
`+B0+t}var U0=!1;function F0(t,e){if(!t||U0)return"";U0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{U0=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?il(t):""}function l8(t){switch(t.tag){case 5:return il(t.type);case 16:return il("Lazy");case 13:return il("Suspense");case 19:return il("SuspenseList");case 0:case 2:case 15:return t=F0(t.type,!1),t;case 11:return t=F0(t.type.render,!1),t;case 1:return t=F0(t.type,!0),t;default:return""}}function Qh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case Zh:return"Profiler";case X1:return"StrictMode";case Gh:return"Suspense";case Kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case my:return(t.displayName||"Context")+".Consumer";case py:return(t._context.displayName||"Context")+".Provider";case em:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tm:return e=t.displayName||null,e!==null?e:Qh(t.type)||"Memo";case vi:e=t._payload,t=t._init;try{return Qh(t(e))}catch{}}return null}function c8(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qh(e);case 8:return e===X1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u8(t){var e=wy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wu(t){t._valueTracker||(t._valueTracker=u8(t))}function yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yh(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function o2(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vy(t,e){e=e.checked,e!=null&&J1(t,"checked",e,!1)}function Jh(t,e){vy(t,e);var n=qi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xh(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s2(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xh(t,e,n){(e!=="number"||pd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ol=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ep(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function a2(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(ol(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function by(t,e){var n=qi(e.value),r=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function l2(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yu,Cy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yu=yu||document.createElement("div"),yu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d8=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(t){d8.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fl[e]=fl[t]})});function _y(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fl.hasOwnProperty(t)&&fl[t]?(""+e).trim():e+"px"}function Ey(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_y(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var f8=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function np(t,e){if(e){if(f8[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function rp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=null;function nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var op=null,Ws=null,Hs=null;function c2(t){if(t=Vc(t)){if(typeof op!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=Nf(e),op(t.stateNode,t.type,e))}}function Sy(t){Ws?Hs?Hs.push(t):Hs=[t]:Ws=t}function $y(){if(Ws){var t=Ws,e=Hs;if(Hs=Ws=null,c2(t),e)for(t=0;t<e.length;t++)c2(e[t])}}function ky(t,e){return t(e)}function Py(){}var z0=!1;function Ty(t,e,n){if(z0)return t(e,n);z0=!0;try{return ky(t,e,n)}finally{z0=!1,(Ws!==null||Hs!==null)&&(Py(),$y())}}function Al(t,e){var n=t.stateNode;if(n===null)return null;var r=Nf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var sp=!1;if(Yr)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){sp=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{sp=!1}function h8(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var hl=!1,md=null,gd=!1,ap=null,p8={onError:function(t){hl=!0,md=t}};function m8(t,e,n,r,i,o,s,a,l){hl=!1,md=null,h8.apply(p8,arguments)}function g8(t,e,n,r,i,o,s,a,l){if(m8.apply(this,arguments),hl){if(hl){var c=md;hl=!1,md=null}else throw Error(Z(198));gd||(gd=!0,ap=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ay(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function u2(t){if(ss(t)!==t)throw Error(Z(188))}function w8(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u2(i),t;if(o===r)return u2(i),e;o=o.sibling}throw Error(Z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function Oy(t){return t=w8(t),t!==null?Iy(t):null}function Iy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iy(t);if(e!==null)return e;t=t.sibling}return null}var Dy=Sn.unstable_scheduleCallback,d2=Sn.unstable_cancelCallback,y8=Sn.unstable_shouldYield,v8=Sn.unstable_requestPaint,ht=Sn.unstable_now,b8=Sn.unstable_getCurrentPriorityLevel,rm=Sn.unstable_ImmediatePriority,Ny=Sn.unstable_UserBlockingPriority,wd=Sn.unstable_NormalPriority,x8=Sn.unstable_LowPriority,Ry=Sn.unstable_IdlePriority,Af=null,Cr=null;function C8(t){if(Cr&&typeof Cr.onCommitFiberRoot=="function")try{Cr.onCommitFiberRoot(Af,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:S8,_8=Math.log,E8=Math.LN2;function S8(t){return t>>>=0,t===0?32:31-(_8(t)/E8|0)|0}var vu=64,bu=4194304;function sl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=sl(a):(o&=s,o!==0&&(r=sl(o)))}else s=n&~i,s!==0?r=sl(s):o!==0&&(r=sl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function $8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k8(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Jn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=$8(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function lp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function My(){var t=vu;return vu<<=1,!(vu&4194240)&&(vu=64),t}function W0(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function P8(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function im(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var We=0;function jy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ly,om,By,Uy,Fy,cp=!1,xu=[],Ii=null,Di=null,Ni=null,Ol=new Map,Il=new Map,Ei=[],T8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f2(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":Ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(e.pointerId)}}function Va(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Vc(e),e!==null&&om(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function A8(t,e,n,r,i){switch(e){case"focusin":return Ii=Va(Ii,t,e,n,r,i),!0;case"dragenter":return Di=Va(Di,t,e,n,r,i),!0;case"mouseover":return Ni=Va(Ni,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ol.set(o,Va(Ol.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Il.set(o,Va(Il.get(o)||null,t,e,n,r,i)),!0}return!1}function zy(t){var e=So(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Ay(n),e!==null){t.blockedOn=e,Fy(t.priority,function(){By(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=up(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ip=r,n.target.dispatchEvent(r),ip=null}else return e=Vc(n),e!==null&&om(e),t.blockedOn=n,!1;e.shift()}return!0}function h2(t,e,n){Gu(t)&&n.delete(e)}function O8(){cp=!1,Ii!==null&&Gu(Ii)&&(Ii=null),Di!==null&&Gu(Di)&&(Di=null),Ni!==null&&Gu(Ni)&&(Ni=null),Ol.forEach(h2),Il.forEach(h2)}function qa(t,e){t.blockedOn===e&&(t.blockedOn=null,cp||(cp=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,O8)))}function Dl(t){function e(i){return qa(i,t)}if(0<xu.length){qa(xu[0],t);for(var n=1;n<xu.length;n++){var r=xu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ii!==null&&qa(Ii,t),Di!==null&&qa(Di,t),Ni!==null&&qa(Ni,t),Ol.forEach(e),Il.forEach(e),n=0;n<Ei.length;n++)r=Ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ei.length&&(n=Ei[0],n.blockedOn===null);)zy(n),n.blockedOn===null&&Ei.shift()}var Vs=li.ReactCurrentBatchConfig,vd=!0;function I8(t,e,n,r){var i=We,o=Vs.transition;Vs.transition=null;try{We=1,sm(t,e,n,r)}finally{We=i,Vs.transition=o}}function D8(t,e,n,r){var i=We,o=Vs.transition;Vs.transition=null;try{We=4,sm(t,e,n,r)}finally{We=i,Vs.transition=o}}function sm(t,e,n,r){if(vd){var i=up(t,e,n,r);if(i===null)X0(t,e,r,bd,n),f2(t,r);else if(A8(i,t,e,n,r))r.stopPropagation();else if(f2(t,r),e&4&&-1<T8.indexOf(t)){for(;i!==null;){var o=Vc(i);if(o!==null&&Ly(o),o=up(t,e,n,r),o===null&&X0(t,e,r,bd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else X0(t,e,r,null,n)}}var bd=null;function up(t,e,n,r){if(bd=null,t=nm(r),t=So(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ay(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bd=t,null}function Wy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b8()){case rm:return 1;case Ny:return 4;case wd:case x8:return 16;case Ry:return 536870912;default:return 16}default:return 16}}var Ti=null,am=null,Ku=null;function Hy(){if(Ku)return Ku;var t,e=am,n=e.length,r,i="value"in Ti?Ti.value:Ti.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ku=i.slice(t,1<r?1-r:void 0)}function Qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cu(){return!0}function p2(){return!1}function Pn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cu:p2,this.isPropagationStopped=p2,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),e}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lm=Pn(Ta),Hc=at({},Ta,{view:0,detail:0}),N8=Pn(Hc),H0,V0,Za,Of=at({},Hc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Za&&(Za&&t.type==="mousemove"?(H0=t.screenX-Za.screenX,V0=t.screenY-Za.screenY):V0=H0=0,Za=t),H0)},movementY:function(t){return"movementY"in t?t.movementY:V0}}),m2=Pn(Of),R8=at({},Of,{dataTransfer:0}),M8=Pn(R8),j8=at({},Hc,{relatedTarget:0}),q0=Pn(j8),L8=at({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),B8=Pn(L8),U8=at({},Ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F8=Pn(U8),z8=at({},Ta,{data:0}),g2=Pn(z8),W8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q8(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V8[t])?!!e[t]:!1}function cm(){return q8}var Z8=at({},Hc,{key:function(t){if(t.key){var e=W8[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H8[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(t){return t.type==="keypress"?Qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G8=Pn(Z8),K8=at({},Of,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w2=Pn(K8),Q8=at({},Hc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),Y8=Pn(Q8),J8=at({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),X8=Pn(J8),ex=at({},Of,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=Pn(ex),nx=[9,13,27,32],um=Yr&&"CompositionEvent"in window,pl=null;Yr&&"documentMode"in document&&(pl=document.documentMode);var rx=Yr&&"TextEvent"in window&&!pl,Vy=Yr&&(!um||pl&&8<pl&&11>=pl),y2=" ",v2=!1;function qy(t,e){switch(t){case"keyup":return nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function ix(t,e){switch(t){case"compositionend":return Zy(e);case"keypress":return e.which!==32?null:(v2=!0,y2);case"textInput":return t=e.data,t===y2&&v2?null:t;default:return null}}function ox(t,e){if(Os)return t==="compositionend"||!um&&qy(t,e)?(t=Hy(),Ku=am=Ti=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vy&&e.locale!=="ko"?null:e.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b2(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sx[t.type]:e==="textarea"}function Gy(t,e,n,r){Sy(r),e=xd(e,"onChange"),0<e.length&&(n=new lm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ml=null,Nl=null;function ax(t){ov(t,0)}function If(t){var e=Ns(t);if(yy(e))return t}function lx(t,e){if(t==="change")return e}var Ky=!1;if(Yr){var Z0;if(Yr){var G0="oninput"in document;if(!G0){var x2=document.createElement("div");x2.setAttribute("oninput","return;"),G0=typeof x2.oninput=="function"}Z0=G0}else Z0=!1;Ky=Z0&&(!document.documentMode||9<document.documentMode)}function C2(){ml&&(ml.detachEvent("onpropertychange",Qy),Nl=ml=null)}function Qy(t){if(t.propertyName==="value"&&If(Nl)){var e=[];Gy(e,Nl,t,nm(t)),Ty(ax,e)}}function cx(t,e,n){t==="focusin"?(C2(),ml=e,Nl=n,ml.attachEvent("onpropertychange",Qy)):t==="focusout"&&C2()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return If(Nl)}function dx(t,e){if(t==="click")return If(e)}function fx(t,e){if(t==="input"||t==="change")return If(e)}function hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:hx;function Rl(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qh.call(e,i)||!nr(t[i],e[i]))return!1}return!0}function _2(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function E2(t,e){var n=_2(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_2(n)}}function Yy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jy(){for(var t=window,e=pd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pd(t.document)}return e}function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function px(t){var e=Jy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yy(n.ownerDocument.documentElement,n)){if(r!==null&&dm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=E2(n,o);var s=E2(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mx=Yr&&"documentMode"in document&&11>=document.documentMode,Is=null,dp=null,gl=null,fp=!1;function S2(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||Is==null||Is!==pd(r)||(r=Is,"selectionStart"in r&&dm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gl&&Rl(gl,r)||(gl=r,r=xd(dp,"onSelect"),0<r.length&&(e=new lm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function _u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:_u("Animation","AnimationEnd"),animationiteration:_u("Animation","AnimationIteration"),animationstart:_u("Animation","AnimationStart"),transitionend:_u("Transition","TransitionEnd")},K0={},Xy={};Yr&&(Xy=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Df(t){if(K0[t])return K0[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xy)return K0[t]=e[n];return t}var ev=Df("animationend"),tv=Df("animationiteration"),nv=Df("animationstart"),rv=Df("transitionend"),iv=new Map,$2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oo(t,e){iv.set(t,e),os(e,[t])}for(var Q0=0;Q0<$2.length;Q0++){var Y0=$2[Q0],gx=Y0.toLowerCase(),wx=Y0[0].toUpperCase()+Y0.slice(1);oo(gx,"on"+wx)}oo(ev,"onAnimationEnd");oo(tv,"onAnimationIteration");oo(nv,"onAnimationStart");oo("dblclick","onDoubleClick");oo("focusin","onFocus");oo("focusout","onBlur");oo(rv,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function k2(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,g8(r,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;k2(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;k2(i,a,c),o=l}}}if(gd)throw t=ap,gd=!1,ap=null,t}function Xe(t,e){var n=e[wp];n===void 0&&(n=e[wp]=new Set);var r=t+"__bubble";n.has(r)||(sv(e,t,2,!1),n.add(r))}function J0(t,e,n){var r=0;e&&(r|=4),sv(n,t,r,e)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function Ml(t){if(!t[Eu]){t[Eu]=!0,hy.forEach(function(n){n!=="selectionchange"&&(yx.has(n)||J0(n,!1,t),J0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eu]||(e[Eu]=!0,J0("selectionchange",!1,e))}}function sv(t,e,n,r){switch(Wy(e)){case 1:var i=I8;break;case 4:i=D8;break;default:i=sm}n=i.bind(null,e,n,t),i=void 0,!sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function X0(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=So(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ty(function(){var c=o,u=nm(n),f=[];e:{var h=iv.get(t);if(h!==void 0){var g=lm,y=t;switch(t){case"keypress":if(Qu(n)===0)break e;case"keydown":case"keyup":g=G8;break;case"focusin":y="focus",g=q0;break;case"focusout":y="blur",g=q0;break;case"beforeblur":case"afterblur":g=q0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=m2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=M8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Y8;break;case ev:case tv:case nv:g=B8;break;case rv:g=X8;break;case"scroll":g=N8;break;case"wheel":g=tx;break;case"copy":case"cut":case"paste":g=F8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=w2}var C=(e&4)!==0,E=!C&&t==="scroll",b=C?h!==null?h+"Capture":null:h;C=[];for(var m=c,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,b!==null&&(x=Al(m,b),x!=null&&C.push(jl(m,x,v)))),E)break;m=m.return}0<C.length&&(h=new g(h,y,null,n,u),f.push({event:h,listeners:C}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ip&&(y=n.relatedTarget||n.fromElement)&&(So(y)||y[Jr]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?So(y):null,y!==null&&(E=ss(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(C=m2,x="onMouseLeave",b="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(C=w2,x="onPointerLeave",b="onPointerEnter",m="pointer"),E=g==null?h:Ns(g),v=y==null?h:Ns(y),h=new C(x,m+"leave",g,n,u),h.target=E,h.relatedTarget=v,x=null,So(u)===c&&(C=new C(b,m+"enter",y,n,u),C.target=v,C.relatedTarget=E,x=C),E=x,g&&y)t:{for(C=g,b=y,m=0,v=C;v;v=ws(v))m++;for(v=0,x=b;x;x=ws(x))v++;for(;0<m-v;)C=ws(C),m--;for(;0<v-m;)b=ws(b),v--;for(;m--;){if(C===b||b!==null&&C===b.alternate)break t;C=ws(C),b=ws(b)}C=null}else C=null;g!==null&&P2(f,h,g,C,!1),y!==null&&E!==null&&P2(f,E,y,C,!0)}}e:{if(h=c?Ns(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var _=lx;else if(b2(h))if(Ky)_=fx;else{_=ux;var S=cx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=dx);if(_&&(_=_(t,c))){Gy(f,_,n,u);break e}S&&S(t,h,c),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Xh(h,"number",h.value)}switch(S=c?Ns(c):window,t){case"focusin":(b2(S)||S.contentEditable==="true")&&(Is=S,dp=c,gl=null);break;case"focusout":gl=dp=Is=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,S2(f,n,u);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":S2(f,n,u)}var d;if(um)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Os?qy(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Vy&&n.locale!=="ko"&&(Os||$!=="onCompositionStart"?$==="onCompositionEnd"&&Os&&(d=Hy()):(Ti=u,am="value"in Ti?Ti.value:Ti.textContent,Os=!0)),S=xd(c,$),0<S.length&&($=new g2($,t,null,n,u),f.push({event:$,listeners:S}),d?$.data=d:(d=Zy(n),d!==null&&($.data=d)))),(d=rx?ix(t,n):ox(t,n))&&(c=xd(c,"onBeforeInput"),0<c.length&&(u=new g2("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=d))}ov(f,e)})}function jl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Al(t,n),o!=null&&r.unshift(jl(t,o,i)),o=Al(t,e),o!=null&&r.push(jl(t,o,i))),t=t.return}return r}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function P2(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Al(n,o),l!=null&&s.unshift(jl(n,l,a))):i||(l=Al(n,o),l!=null&&s.push(jl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var vx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function T2(t){return(typeof t=="string"?t:""+t).replace(vx,`
`).replace(bx,"")}function Su(t,e,n){if(e=T2(e),T2(t)!==e&&n)throw Error(Z(425))}function Cd(){}var hp=null,pp=null;function mp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gp=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,A2=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof A2<"u"?function(t){return A2.resolve(null).then(t).catch(_x)}:gp;function _x(t){setTimeout(function(){throw t})}function eh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Dl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dl(e)}function Ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function O2(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Aa=Math.random().toString(36).slice(2),vr="__reactFiber$"+Aa,Ll="__reactProps$"+Aa,Jr="__reactContainer$"+Aa,wp="__reactEvents$"+Aa,Ex="__reactListeners$"+Aa,Sx="__reactHandles$"+Aa;function So(t){var e=t[vr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jr]||n[vr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=O2(t);t!==null;){if(n=t[vr])return n;t=O2(t)}return e}t=n,n=t.parentNode}return null}function Vc(t){return t=t[vr]||t[Jr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function Nf(t){return t[Ll]||null}var yp=[],Rs=-1;function so(t){return{current:t}}function et(t){0>Rs||(t.current=yp[Rs],yp[Rs]=null,Rs--)}function Ye(t,e){Rs++,yp[Rs]=t.current,t.current=e}var Zi={},qt=so(Zi),fn=so(!1),Mo=Zi;function ea(t,e){var n=t.type.contextTypes;if(!n)return Zi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function hn(t){return t=t.childContextTypes,t!=null}function _d(){et(fn),et(qt)}function I2(t,e,n){if(qt.current!==Zi)throw Error(Z(168));Ye(qt,e),Ye(fn,n)}function av(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(Z(108,c8(t)||"Unknown",i));return at({},n,r)}function Ed(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Mo=qt.current,Ye(qt,t),Ye(fn,fn.current),!0}function D2(t,e,n){var r=t.stateNode;if(!r)throw Error(Z(169));n?(t=av(t,e,Mo),r.__reactInternalMemoizedMergedChildContext=t,et(fn),et(qt),Ye(qt,t)):et(fn),Ye(fn,n)}var Vr=null,Rf=!1,th=!1;function lv(t){Vr===null?Vr=[t]:Vr.push(t)}function $x(t){Rf=!0,lv(t)}function ao(){if(!th&&Vr!==null){th=!0;var t=0,e=We;try{var n=Vr;for(We=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vr=null,Rf=!1}catch(i){throw Vr!==null&&(Vr=Vr.slice(t+1)),Dy(rm,ao),i}finally{We=e,th=!1}}return null}var Ms=[],js=0,Sd=null,$d=0,Dn=[],Nn=0,jo=null,qr=1,Zr="";function _o(t,e){Ms[js++]=$d,Ms[js++]=Sd,Sd=t,$d=e}function cv(t,e,n){Dn[Nn++]=qr,Dn[Nn++]=Zr,Dn[Nn++]=jo,jo=t;var r=qr;t=Zr;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var o=32-Jn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,qr=1<<32-Jn(e)+i|n<<i|r,Zr=o+t}else qr=1<<o|n<<i|r,Zr=t}function fm(t){t.return!==null&&(_o(t,1),cv(t,1,0))}function hm(t){for(;t===Sd;)Sd=Ms[--js],Ms[js]=null,$d=Ms[--js],Ms[js]=null;for(;t===jo;)jo=Dn[--Nn],Dn[Nn]=null,Zr=Dn[--Nn],Dn[Nn]=null,qr=Dn[--Nn],Dn[Nn]=null}var En=null,_n=null,nt=!1,Gn=null;function uv(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function N2(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,_n=Ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jo!==null?{id:qr,overflow:Zr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,_n=null,!0):!1;default:return!1}}function vp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bp(t){if(nt){var e=_n;if(e){var n=e;if(!N2(t,e)){if(vp(t))throw Error(Z(418));e=Ri(n.nextSibling);var r=En;e&&N2(t,e)?uv(r,n):(t.flags=t.flags&-4097|2,nt=!1,En=t)}}else{if(vp(t))throw Error(Z(418));t.flags=t.flags&-4097|2,nt=!1,En=t}}}function R2(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function $u(t){if(t!==En)return!1;if(!nt)return R2(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mp(t.type,t.memoizedProps)),e&&(e=_n)){if(vp(t))throw dv(),Error(Z(418));for(;e;)uv(t,e),e=Ri(e.nextSibling)}if(R2(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=En?Ri(t.stateNode.nextSibling):null;return!0}function dv(){for(var t=_n;t;)t=Ri(t.nextSibling)}function ta(){_n=En=null,nt=!1}function pm(t){Gn===null?Gn=[t]:Gn.push(t)}var kx=li.ReactCurrentBatchConfig;function Vn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var kd=so(null),Pd=null,Ls=null,mm=null;function gm(){mm=Ls=Pd=null}function wm(t){var e=kd.current;et(kd),t._currentValue=e}function xp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){Pd=t,mm=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(mm!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Pd===null)throw Error(Z(308));Ls=t,Pd.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var $o=null;function ym(t){$o===null?$o=[t]:$o.push(t)}function fv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ym(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xr(t,r)}function Xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Be&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xr(t,n)}return i=r.interleaved,i===null?(e.next=e,ym(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xr(t,n)}function Yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,im(t,n)}}function M2(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Td(t,e,n,r){var i=t.updateQueue;bi=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,C=a;switch(h=e,g=n,C.tag){case 1:if(y=C.payload,typeof y=="function"){f=y.call(g,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,h=typeof y=="function"?y.call(g,f,h):y,h==null)break e;f=at({},f,h);break e;case 2:bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=f):u=u.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Bo|=s,t.lanes=s,t.memoizedState=f}}function j2(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Z(191,i));i.call(r)}}}var pv=new fy.Component().refs;function Cp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mf={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=Li(t),o=Gr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Mi(t,o,i),e!==null&&(Xn(e,t,i,r),Yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=Li(t),o=Gr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Mi(t,o,i),e!==null&&(Xn(e,t,i,r),Yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),r=Li(t),i=Gr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mi(t,i,r),e!==null&&(Xn(e,t,r,n),Yu(e,t,r))}};function L2(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Rl(n,r)||!Rl(i,o):!0}function mv(t,e,n){var r=!1,i=Zi,o=e.contextType;return typeof o=="object"&&o!==null?o=Ln(o):(i=hn(e)?Mo:qt.current,r=e.contextTypes,o=(r=r!=null)?ea(t,i):Zi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function B2(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mf.enqueueReplaceState(e,e.state,null)}function _p(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=pv,vm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ln(o):(o=hn(e)?Mo:qt.current,i.context=ea(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Cp(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mf.enqueueReplaceState(i,i.state,null),Td(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===pv&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function ku(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U2(t){var e=t._init;return e(t._payload)}function gv(t){function e(b,m){if(t){var v=b.deletions;v===null?(b.deletions=[m],b.flags|=16):v.push(m)}}function n(b,m){if(!t)return null;for(;m!==null;)e(b,m),m=m.sibling;return null}function r(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=Bi(b,m),b.index=0,b.sibling=null,b}function o(b,m,v){return b.index=v,t?(v=b.alternate,v!==null?(v=v.index,v<m?(b.flags|=2,m):v):(b.flags|=2,m)):(b.flags|=1048576,m)}function s(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,m,v,x){return m===null||m.tag!==6?(m=lh(v,b.mode,x),m.return=b,m):(m=i(m,v),m.return=b,m)}function l(b,m,v,x){var _=v.type;return _===As?u(b,m,v.props.children,x,v.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===vi&&U2(_)===m.type)?(x=i(m,v.props),x.ref=Ga(b,m,v),x.return=b,x):(x=rd(v.type,v.key,v.props,null,b.mode,x),x.ref=Ga(b,m,v),x.return=b,x)}function c(b,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ch(v,b.mode,x),m.return=b,m):(m=i(m,v.children||[]),m.return=b,m)}function u(b,m,v,x,_){return m===null||m.tag!==7?(m=Do(v,b.mode,x,_),m.return=b,m):(m=i(m,v),m.return=b,m)}function f(b,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=lh(""+m,b.mode,v),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gu:return v=rd(m.type,m.key,m.props,null,b.mode,v),v.ref=Ga(b,null,m),v.return=b,v;case Ts:return m=ch(m,b.mode,v),m.return=b,m;case vi:var x=m._init;return f(b,x(m._payload),v)}if(ol(m)||Wa(m))return m=Do(m,b.mode,v,null),m.return=b,m;ku(b,m)}return null}function h(b,m,v,x){var _=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(b,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gu:return v.key===_?l(b,m,v,x):null;case Ts:return v.key===_?c(b,m,v,x):null;case vi:return _=v._init,h(b,m,_(v._payload),x)}if(ol(v)||Wa(v))return _!==null?null:u(b,m,v,x,null);ku(b,v)}return null}function g(b,m,v,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(v)||null,a(m,b,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gu:return b=b.get(x.key===null?v:x.key)||null,l(m,b,x,_);case Ts:return b=b.get(x.key===null?v:x.key)||null,c(m,b,x,_);case vi:var S=x._init;return g(b,m,v,S(x._payload),_)}if(ol(x)||Wa(x))return b=b.get(v)||null,u(m,b,x,_,null);ku(m,x)}return null}function y(b,m,v,x){for(var _=null,S=null,d=m,$=m=0,O=null;d!==null&&$<v.length;$++){d.index>$?(O=d,d=null):O=d.sibling;var I=h(b,d,v[$],x);if(I===null){d===null&&(d=O);break}t&&d&&I.alternate===null&&e(b,d),m=o(I,m,$),S===null?_=I:S.sibling=I,S=I,d=O}if($===v.length)return n(b,d),nt&&_o(b,$),_;if(d===null){for(;$<v.length;$++)d=f(b,v[$],x),d!==null&&(m=o(d,m,$),S===null?_=d:S.sibling=d,S=d);return nt&&_o(b,$),_}for(d=r(b,d);$<v.length;$++)O=g(d,b,$,v[$],x),O!==null&&(t&&O.alternate!==null&&d.delete(O.key===null?$:O.key),m=o(O,m,$),S===null?_=O:S.sibling=O,S=O);return t&&d.forEach(function(R){return e(b,R)}),nt&&_o(b,$),_}function C(b,m,v,x){var _=Wa(v);if(typeof _!="function")throw Error(Z(150));if(v=_.call(v),v==null)throw Error(Z(151));for(var S=_=null,d=m,$=m=0,O=null,I=v.next();d!==null&&!I.done;$++,I=v.next()){d.index>$?(O=d,d=null):O=d.sibling;var R=h(b,d,I.value,x);if(R===null){d===null&&(d=O);break}t&&d&&R.alternate===null&&e(b,d),m=o(R,m,$),S===null?_=R:S.sibling=R,S=R,d=O}if(I.done)return n(b,d),nt&&_o(b,$),_;if(d===null){for(;!I.done;$++,I=v.next())I=f(b,I.value,x),I!==null&&(m=o(I,m,$),S===null?_=I:S.sibling=I,S=I);return nt&&_o(b,$),_}for(d=r(b,d);!I.done;$++,I=v.next())I=g(d,b,$,I.value,x),I!==null&&(t&&I.alternate!==null&&d.delete(I.key===null?$:I.key),m=o(I,m,$),S===null?_=I:S.sibling=I,S=I);return t&&d.forEach(function(Y){return e(b,Y)}),nt&&_o(b,$),_}function E(b,m,v,x){if(typeof v=="object"&&v!==null&&v.type===As&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case gu:e:{for(var _=v.key,S=m;S!==null;){if(S.key===_){if(_=v.type,_===As){if(S.tag===7){n(b,S.sibling),m=i(S,v.props.children),m.return=b,b=m;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===vi&&U2(_)===S.type){n(b,S.sibling),m=i(S,v.props),m.ref=Ga(b,S,v),m.return=b,b=m;break e}n(b,S);break}else e(b,S);S=S.sibling}v.type===As?(m=Do(v.props.children,b.mode,x,v.key),m.return=b,b=m):(x=rd(v.type,v.key,v.props,null,b.mode,x),x.ref=Ga(b,m,v),x.return=b,b=x)}return s(b);case Ts:e:{for(S=v.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(b,m.sibling),m=i(m,v.children||[]),m.return=b,b=m;break e}else{n(b,m);break}else e(b,m);m=m.sibling}m=ch(v,b.mode,x),m.return=b,b=m}return s(b);case vi:return S=v._init,E(b,m,S(v._payload),x)}if(ol(v))return y(b,m,v,x);if(Wa(v))return C(b,m,v,x);ku(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(b,m.sibling),m=i(m,v),m.return=b,b=m):(n(b,m),m=lh(v,b.mode,x),m.return=b,b=m),s(b)):n(b,m)}return E}var na=gv(!0),wv=gv(!1),qc={},_r=so(qc),Bl=so(qc),Ul=so(qc);function ko(t){if(t===qc)throw Error(Z(174));return t}function bm(t,e){switch(Ye(Ul,e),Ye(Bl,t),Ye(_r,qc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tp(e,t)}et(_r),Ye(_r,e)}function ra(){et(_r),et(Bl),et(Ul)}function yv(t){ko(Ul.current);var e=ko(_r.current),n=tp(e,t.type);e!==n&&(Ye(Bl,t),Ye(_r,n))}function xm(t){Bl.current===t&&(et(_r),et(Bl))}var it=so(0);function Ad(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nh=[];function Cm(){for(var t=0;t<nh.length;t++)nh[t]._workInProgressVersionPrimary=null;nh.length=0}var Ju=li.ReactCurrentDispatcher,rh=li.ReactCurrentBatchConfig,Lo=0,st=null,Et=null,Dt=null,Od=!1,wl=!1,Fl=0,Px=0;function Ut(){throw Error(Z(321))}function _m(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function Em(t,e,n,r,i,o){if(Lo=o,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ju.current=t===null||t.memoizedState===null?Ix:Dx,t=n(r,i),wl){o=0;do{if(wl=!1,Fl=0,25<=o)throw Error(Z(301));o+=1,Dt=Et=null,e.updateQueue=null,Ju.current=Nx,t=n(r,i)}while(wl)}if(Ju.current=Id,e=Et!==null&&Et.next!==null,Lo=0,Dt=Et=st=null,Od=!1,e)throw Error(Z(300));return t}function Sm(){var t=Fl!==0;return Fl=0,t}function yr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?st.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Bn(){if(Et===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Dt===null?st.memoizedState:Dt.next;if(e!==null)Dt=e,Et=t;else{if(t===null)throw Error(Z(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Dt===null?st.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function zl(t,e){return typeof e=="function"?e(t):e}function ih(t){var e=Bn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=Et,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Lo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,st.lanes|=u,Bo|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,nr(r,e.memoizedState)||(ln=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,st.lanes|=o,Bo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oh(t){var e=Bn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);nr(o,e.memoizedState)||(ln=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function vv(){}function bv(t,e){var n=st,r=Bn(),i=e(),o=!nr(r.memoizedState,i);if(o&&(r.memoizedState=i,ln=!0),r=r.queue,$m(_v.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Wl(9,Cv.bind(null,n,r,i,e),void 0,null),Nt===null)throw Error(Z(349));Lo&30||xv(n,e,i)}return i}function xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,r){e.value=n,e.getSnapshot=r,Ev(e)&&Sv(t)}function _v(t,e,n){return n(function(){Ev(e)&&Sv(t)})}function Ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function Sv(t){var e=Xr(t,1);e!==null&&Xn(e,t,1,-1)}function F2(t){var e=yr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zl,lastRenderedState:t},e.queue=t,t=t.dispatch=Ox.bind(null,st,t),[e.memoizedState,t]}function Wl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $v(){return Bn().memoizedState}function Xu(t,e,n,r){var i=yr();st.flags|=t,i.memoizedState=Wl(1|e,n,void 0,r===void 0?null:r)}function jf(t,e,n,r){var i=Bn();r=r===void 0?null:r;var o=void 0;if(Et!==null){var s=Et.memoizedState;if(o=s.destroy,r!==null&&_m(r,s.deps)){i.memoizedState=Wl(e,n,o,r);return}}st.flags|=t,i.memoizedState=Wl(1|e,n,o,r)}function z2(t,e){return Xu(8390656,8,t,e)}function $m(t,e){return jf(2048,8,t,e)}function kv(t,e){return jf(4,2,t,e)}function Pv(t,e){return jf(4,4,t,e)}function Tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Av(t,e,n){return n=n!=null?n.concat([t]):null,jf(4,4,Tv.bind(null,e,t),n)}function km(){}function Ov(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_m(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Iv(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_m(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dv(t,e,n){return Lo&21?(nr(n,e)||(n=My(),st.lanes|=n,Bo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function Tx(t,e){var n=We;We=n!==0&&4>n?n:4,t(!0);var r=rh.transition;rh.transition={};try{t(!1),e()}finally{We=n,rh.transition=r}}function Nv(){return Bn().memoizedState}function Ax(t,e,n){var r=Li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rv(t))Mv(e,n);else if(n=fv(t,e,n,r),n!==null){var i=Jt();Xn(n,t,r,i),jv(n,e,r)}}function Ox(t,e,n){var r=Li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rv(t))Mv(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,nr(a,s)){var l=e.interleaved;l===null?(i.next=i,ym(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=fv(t,e,i,r),n!==null&&(i=Jt(),Xn(n,t,r,i),jv(n,e,r))}}function Rv(t){var e=t.alternate;return t===st||e!==null&&e===st}function Mv(t,e){wl=Od=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,im(t,n)}}var Id={readContext:Ln,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Ix={readContext:Ln,useCallback:function(t,e){return yr().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:z2,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4194308,4,Tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xu(4,2,t,e)},useMemo:function(t,e){var n=yr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ax.bind(null,st,t),[r.memoizedState,t]},useRef:function(t){var e=yr();return t={current:t},e.memoizedState=t},useState:F2,useDebugValue:km,useDeferredValue:function(t){return yr().memoizedState=t},useTransition:function(){var t=F2(!1),e=t[0];return t=Tx.bind(null,t[1]),yr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=st,i=yr();if(nt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Nt===null)throw Error(Z(349));Lo&30||xv(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,z2(_v.bind(null,r,o,t),[t]),r.flags|=2048,Wl(9,Cv.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=yr(),e=Nt.identifierPrefix;if(nt){var n=Zr,r=qr;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Px++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dx={readContext:Ln,useCallback:Ov,useContext:Ln,useEffect:$m,useImperativeHandle:Av,useInsertionEffect:kv,useLayoutEffect:Pv,useMemo:Iv,useReducer:ih,useRef:$v,useState:function(){return ih(zl)},useDebugValue:km,useDeferredValue:function(t){var e=Bn();return Dv(e,Et.memoizedState,t)},useTransition:function(){var t=ih(zl)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:bv,useId:Nv,unstable_isNewReconciler:!1},Nx={readContext:Ln,useCallback:Ov,useContext:Ln,useEffect:$m,useImperativeHandle:Av,useInsertionEffect:kv,useLayoutEffect:Pv,useMemo:Iv,useReducer:oh,useRef:$v,useState:function(){return oh(zl)},useDebugValue:km,useDeferredValue:function(t){var e=Bn();return Et===null?e.memoizedState=t:Dv(e,Et.memoizedState,t)},useTransition:function(){var t=oh(zl)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:bv,useId:Nv,unstable_isNewReconciler:!1};function ia(t,e){try{var n="",r=e;do n+=l8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rx=typeof WeakMap=="function"?WeakMap:Map;function Lv(t,e,n){n=Gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nd||(Nd=!0,Np=r),Ep(t,e)},n}function Bv(t,e,n){n=Gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ep(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ep(t,e),typeof r!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function W2(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Kx.bind(null,t,e,n),e.then(t,t))}function H2(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function V2(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gr(-1,1),e.tag=2,Mi(n,e,1))),n.lanes|=1),t)}var Mx=li.ReactCurrentOwner,ln=!1;function Qt(t,e,n,r){e.child=t===null?wv(e,null,n,r):na(e,t.child,n,r)}function q2(t,e,n,r,i){n=n.render;var o=e.ref;return qs(e,i),r=Em(t,e,n,r,o,i),n=Sm(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ei(t,e,i)):(nt&&n&&fm(e),e.flags|=1,Qt(t,e,r,i),e.child)}function Z2(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Rm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Uv(t,e,o,r,i)):(t=rd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Rl,n(s,r)&&t.ref===e.ref)return ei(t,e,i)}return e.flags|=1,t=Bi(o,r),t.ref=e.ref,t.return=e,e.child=t}function Uv(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Rl(o,r)&&t.ref===e.ref)if(ln=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,ei(t,e,i)}return Sp(t,e,n,r,i)}function Fv(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Us,Cn),Cn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ye(Us,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ye(Us,Cn),Cn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ye(Us,Cn),Cn|=r;return Qt(t,e,i,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sp(t,e,n,r,i){var o=hn(n)?Mo:qt.current;return o=ea(e,o),qs(e,i),n=Em(t,e,n,r,o,i),r=Sm(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ei(t,e,i)):(nt&&r&&fm(e),e.flags|=1,Qt(t,e,n,i),e.child)}function G2(t,e,n,r,i){if(hn(n)){var o=!0;Ed(e)}else o=!1;if(qs(e,i),e.stateNode===null)ed(t,e),mv(e,n,r),_p(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=hn(n)?Mo:qt.current,c=ea(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&B2(e,s,r,c),bi=!1;var h=e.memoizedState;s.state=h,Td(e,r,s,i),l=e.memoizedState,a!==r||h!==l||fn.current||bi?(typeof u=="function"&&(Cp(e,n,u,r),l=e.memoizedState),(a=bi||L2(e,n,a,r,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,hv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),s.props=c,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=hn(n)?Mo:qt.current,l=ea(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&B2(e,s,r,l),bi=!1,h=e.memoizedState,s.state=h,Td(e,r,s,i);var y=e.memoizedState;a!==f||h!==y||fn.current||bi?(typeof g=="function"&&(Cp(e,n,g,r),y=e.memoizedState),(c=bi||L2(e,n,c,r,h,y,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return $p(t,e,n,r,o,i)}function $p(t,e,n,r,i,o){zv(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&D2(e,n,!1),ei(t,e,o);r=e.stateNode,Mx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=na(e,t.child,null,o),e.child=na(e,null,a,o)):Qt(t,e,a,o),e.memoizedState=r.state,i&&D2(e,n,!0),e.child}function Wv(t){var e=t.stateNode;e.pendingContext?I2(t,e.pendingContext,e.pendingContext!==e.context):e.context&&I2(t,e.context,!1),bm(t,e.containerInfo)}function K2(t,e,n,r,i){return ta(),pm(i),e.flags|=256,Qt(t,e,n,r),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Pp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var r=e.pendingProps,i=it.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ye(it,i&1),t===null)return bp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Uf(s,r,0,null),t=Do(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Pp(n),e.memoizedState=kp,t):Pm(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jx(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Bi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Bi(a,o):(o=Do(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Pp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=kp,r}return o=t.child,t=o.sibling,r=Bi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pm(t,e){return e=Uf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pu(t,e,n,r){return r!==null&&pm(r),na(e,t.child,null,n),t=Pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=sh(Error(Z(422))),Pu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Uf({mode:"visible",children:r.children},i,0,null),o=Do(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&na(e,t.child,null,s),e.child.memoizedState=Pp(s),e.memoizedState=kp,o);if(!(e.mode&1))return Pu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(Z(419)),r=sh(o,r,void 0),Pu(t,e,s,r)}if(a=(s&t.childLanes)!==0,ln||a){if(r=Nt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xr(t,i),Xn(r,t,i,-1))}return Nm(),r=sh(Error(Z(421))),Pu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Qx.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,_n=Ri(i.nextSibling),En=e,nt=!0,Gn=null,t!==null&&(Dn[Nn++]=qr,Dn[Nn++]=Zr,Dn[Nn++]=jo,qr=t.id,Zr=t.overflow,jo=e),e=Pm(e,r.children),e.flags|=4096,e)}function Q2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xp(t.return,e,n)}function ah(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vv(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Qt(t,e,r.children,n),r=it.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q2(t,n,e);else if(t.tag===19)Q2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ye(it,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ad(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ah(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ad(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ah(e,!0,n,null,o);break;case"together":ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ed(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lx(t,e,n){switch(e.tag){case 3:Wv(e),ta();break;case 5:yv(e);break;case 1:hn(e.type)&&Ed(e);break;case 4:bm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ye(kd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ye(it,it.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(Ye(it,it.current&1),t=ei(t,e,n),t!==null?t.sibling:null);Ye(it,it.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ye(it,it.current),r)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return ei(t,e,n)}var qv,Tp,Zv,Gv;qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tp=function(){};Zv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ko(_r.current);var o=null;switch(n){case"input":i=Yh(t,i),r=Yh(t,r),o=[];break;case"select":i=at({},i,{value:void 0}),r=at({},r,{value:void 0}),o=[];break;case"textarea":i=ep(t,i),r=ep(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cd)}np(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Xe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Gv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ka(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Bx(t,e,n){var r=e.pendingProps;switch(hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return hn(e.type)&&_d(),Ft(e),null;case 3:return r=e.stateNode,ra(),et(fn),et(qt),Cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($u(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(jp(Gn),Gn=null))),Tp(t,e),Ft(e),null;case 5:xm(e);var i=ko(Ul.current);if(n=e.type,t!==null&&e.stateNode!=null)Zv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Z(166));return Ft(e),null}if(t=ko(_r.current),$u(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[vr]=e,r[Ll]=o,t=(e.mode&1)!==0,n){case"dialog":Xe("cancel",r),Xe("close",r);break;case"iframe":case"object":case"embed":Xe("load",r);break;case"video":case"audio":for(i=0;i<al.length;i++)Xe(al[i],r);break;case"source":Xe("error",r);break;case"img":case"image":case"link":Xe("error",r),Xe("load",r);break;case"details":Xe("toggle",r);break;case"input":o2(r,o),Xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Xe("invalid",r);break;case"textarea":a2(r,o),Xe("invalid",r)}np(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Su(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Su(r.textContent,a,t),i=["children",""+a]):Pl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Xe("scroll",r)}switch(n){case"input":wu(r),s2(r,o,!0);break;case"textarea":wu(r),l2(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Cd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[vr]=e,t[Ll]=r,qv(t,e,!1,!1),e.stateNode=t;e:{switch(s=rp(n,r),n){case"dialog":Xe("cancel",t),Xe("close",t),i=r;break;case"iframe":case"object":case"embed":Xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<al.length;i++)Xe(al[i],t);i=r;break;case"source":Xe("error",t),i=r;break;case"img":case"image":case"link":Xe("error",t),Xe("load",t),i=r;break;case"details":Xe("toggle",t),i=r;break;case"input":o2(t,r),i=Yh(t,r),Xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=at({},r,{value:void 0}),Xe("invalid",t);break;case"textarea":a2(t,r),i=ep(t,r),Xe("invalid",t);break;default:i=r}np(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ey(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cy(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tl(t,l):typeof l=="number"&&Tl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Xe("scroll",t):l!=null&&J1(t,o,l,s))}switch(n){case"input":wu(t),s2(t,r,!1);break;case"textarea":wu(t),l2(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?zs(t,!!r.multiple,o,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Z(166));if(n=ko(Ul.current),ko(_r.current),$u(e)){if(r=e.stateNode,n=e.memoizedProps,r[vr]=e,(o=r.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Su(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Su(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vr]=e,e.stateNode=r}return Ft(e),null;case 13:if(et(it),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&_n!==null&&e.mode&1&&!(e.flags&128))dv(),ta(),e.flags|=98560,o=!1;else if(o=$u(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(Z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Z(317));o[vr]=e}else ta(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),o=!1}else Gn!==null&&(jp(Gn),Gn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||it.current&1?St===0&&(St=3):Nm())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ra(),Tp(t,e),t===null&&Ml(e.stateNode.containerInfo),Ft(e),null;case 10:return wm(e.type._context),Ft(e),null;case 17:return hn(e.type)&&_d(),Ft(e),null;case 19:if(et(it),o=e.memoizedState,o===null)return Ft(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ka(o,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ad(t),s!==null){for(e.flags|=128,Ka(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ye(it,it.current&1|2),e.child}t=t.sibling}o.tail!==null&&ht()>oa&&(e.flags|=128,r=!0,Ka(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ad(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ka(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!nt)return Ft(e),null}else 2*ht()-o.renderingStartTime>oa&&n!==1073741824&&(e.flags|=128,r=!0,Ka(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ht(),e.sibling=null,n=it.current,Ye(it,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function Ux(t,e){switch(hm(e),e.tag){case 1:return hn(e.type)&&_d(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ra(),et(fn),et(qt),Cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(et(it),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(it),null;case 4:return ra(),null;case 10:return wm(e.type._context),null;case 22:case 23:return Dm(),null;case 24:return null;default:return null}}var Tu=!1,Ht=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(t,e,r)}else n.current=null}function Ap(t,e,n){try{n()}catch(r){ct(t,e,r)}}var Y2=!1;function zx(t,e){if(hp=vd,t=Jy(),dm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===i&&(a=s),h===o&&++u===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pp={focusedElem:t,selectionRange:n},vd=!1,ae=e;ae!==null;)if(e=ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ae=t;else for(;ae!==null;){e=ae;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,E=y.memoizedState,b=e.stateNode,m=b.getSnapshotBeforeUpdate(e.elementType===e.type?C:Vn(e.type,C),E);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(x){ct(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ae=t;break}ae=e.return}return y=Y2,Y2=!1,y}function yl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ap(e,n,o)}i=i.next}while(i!==r)}}function Lf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Op(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kv(t){var e=t.alternate;e!==null&&(t.alternate=null,Kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vr],delete e[Ll],delete e[wp],delete e[Ex],delete e[Sx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qv(t){return t.tag===5||t.tag===3||t.tag===4}function J2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cd));else if(r!==4&&(t=t.child,t!==null))for(Ip(t,e,n),t=t.sibling;t!==null;)Ip(t,e,n),t=t.sibling}function Dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dp(t,e,n),t=t.sibling;t!==null;)Dp(t,e,n),t=t.sibling}var Rt=null,Zn=!1;function mi(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(Cr&&typeof Cr.onCommitFiberUnmount=="function")try{Cr.onCommitFiberUnmount(Af,n)}catch{}switch(n.tag){case 5:Ht||Bs(n,e);case 6:var r=Rt,i=Zn;Rt=null,mi(t,e,n),Rt=r,Zn=i,Rt!==null&&(Zn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Zn?(t=Rt,n=n.stateNode,t.nodeType===8?eh(t.parentNode,n):t.nodeType===1&&eh(t,n),Dl(t)):eh(Rt,n.stateNode));break;case 4:r=Rt,i=Zn,Rt=n.stateNode.containerInfo,Zn=!0,mi(t,e,n),Rt=r,Zn=i;break;case 0:case 11:case 14:case 15:if(!Ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ap(n,e,s),i=i.next}while(i!==r)}mi(t,e,n);break;case 1:if(!Ht&&(Bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ct(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(Ht=(r=Ht)||n.memoizedState!==null,mi(t,e,n),Ht=r):mi(t,e,n);break;default:mi(t,e,n)}}function X2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fx),e.forEach(function(r){var i=Yx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,Zn=!1;break e;case 3:Rt=a.stateNode.containerInfo,Zn=!0;break e;case 4:Rt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Rt===null)throw Error(Z(160));Yv(o,s,i),Rt=null,Zn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ct(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jv(e,t),e=e.sibling}function Jv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),pr(t),r&4){try{yl(3,t,t.return),Lf(3,t)}catch(C){ct(t,t.return,C)}try{yl(5,t,t.return)}catch(C){ct(t,t.return,C)}}break;case 1:Wn(e,t),pr(t),r&512&&n!==null&&Bs(n,n.return);break;case 5:if(Wn(e,t),pr(t),r&512&&n!==null&&Bs(n,n.return),t.flags&32){var i=t.stateNode;try{Tl(i,"")}catch(C){ct(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vy(i,o),rp(a,s);var c=rp(a,o);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?Ey(i,f):u==="dangerouslySetInnerHTML"?Cy(i,f):u==="children"?Tl(i,f):J1(i,u,f,c)}switch(a){case"input":Jh(i,o);break;case"textarea":by(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?zs(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?zs(i,!!o.multiple,o.defaultValue,!0):zs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ll]=o}catch(C){ct(t,t.return,C)}}break;case 6:if(Wn(e,t),pr(t),r&4){if(t.stateNode===null)throw Error(Z(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){ct(t,t.return,C)}}break;case 3:if(Wn(e,t),pr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dl(e.containerInfo)}catch(C){ct(t,t.return,C)}break;case 4:Wn(e,t),pr(t);break;case 13:Wn(e,t),pr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Om=ht())),r&4&&X2(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||u,Wn(e,t),Ht=c):Wn(e,t),pr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ae=t,u=t.child;u!==null;){for(f=ae=u;ae!==null;){switch(h=ae,g=h.child,h.tag){case 0:case 11:case 14:case 15:yl(4,h,h.return);break;case 1:Bs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(C){ct(r,n,C)}}break;case 5:Bs(h,h.return);break;case 22:if(h.memoizedState!==null){tw(f);continue}}g!==null?(g.return=h,ae=g):tw(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_y("display",s))}catch(C){ct(t,t.return,C)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){ct(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wn(e,t),pr(t),r&4&&X2(t);break;case 21:break;default:Wn(e,t),pr(t)}}function pr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qv(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tl(i,""),r.flags&=-33);var o=J2(t);Dp(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=J2(t);Ip(t,a,s);break;default:throw Error(Z(161))}}catch(l){ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wx(t,e,n){ae=t,Xv(t)}function Xv(t,e,n){for(var r=(t.mode&1)!==0;ae!==null;){var i=ae,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Tu;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Tu;var c=Ht;if(Tu=s,(Ht=l)&&!c)for(ae=i;ae!==null;)s=ae,l=s.child,s.tag===22&&s.memoizedState!==null?nw(i):l!==null?(l.return=s,ae=l):nw(i);for(;o!==null;)ae=o,Xv(o),o=o.sibling;ae=i,Tu=a,Ht=c}ew(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ae=o):ew(t)}}function ew(t){for(;ae!==null;){var e=ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Lf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&j2(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}j2(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Dl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Ht||e.flags&512&&Op(e)}catch(h){ct(e,e.return,h)}}if(e===t){ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,ae=n;break}ae=e.return}}function tw(t){for(;ae!==null;){var e=ae;if(e===t){ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ae=n;break}ae=e.return}}function nw(t){for(;ae!==null;){var e=ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lf(4,e)}catch(l){ct(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ct(e,i,l)}}var o=e.return;try{Op(e)}catch(l){ct(e,o,l)}break;case 5:var s=e.return;try{Op(e)}catch(l){ct(e,s,l)}}}catch(l){ct(e,e.return,l)}if(e===t){ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ae=a;break}ae=e.return}}var Hx=Math.ceil,Dd=li.ReactCurrentDispatcher,Tm=li.ReactCurrentOwner,Mn=li.ReactCurrentBatchConfig,Be=0,Nt=null,bt=null,jt=0,Cn=0,Us=so(0),St=0,Hl=null,Bo=0,Bf=0,Am=0,vl=null,an=null,Om=0,oa=1/0,Wr=null,Nd=!1,Np=null,ji=null,Au=!1,Ai=null,Rd=0,bl=0,Rp=null,td=-1,nd=0;function Jt(){return Be&6?ht():td!==-1?td:td=ht()}function Li(t){return t.mode&1?Be&2&&jt!==0?jt&-jt:kx.transition!==null?(nd===0&&(nd=My()),nd):(t=We,t!==0||(t=window.event,t=t===void 0?16:Wy(t.type)),t):1}function Xn(t,e,n,r){if(50<bl)throw bl=0,Rp=null,Error(Z(185));Wc(t,n,r),(!(Be&2)||t!==Nt)&&(t===Nt&&(!(Be&2)&&(Bf|=n),St===4&&Si(t,jt)),pn(t,r),n===1&&Be===0&&!(e.mode&1)&&(oa=ht()+500,Rf&&ao()))}function pn(t,e){var n=t.callbackNode;k8(t,e);var r=yd(t,t===Nt?jt:0);if(r===0)n!==null&&d2(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&d2(n),e===1)t.tag===0?$x(rw.bind(null,t)):lv(rw.bind(null,t)),Cx(function(){!(Be&6)&&ao()}),n=null;else{switch(jy(r)){case 1:n=rm;break;case 4:n=Ny;break;case 16:n=wd;break;case 536870912:n=Ry;break;default:n=wd}n=a5(n,e5.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e5(t,e){if(td=-1,nd=0,Be&6)throw Error(Z(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=yd(t,t===Nt?jt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Md(t,r);else{e=r;var i=Be;Be|=2;var o=n5();(Nt!==t||jt!==e)&&(Wr=null,oa=ht()+500,Io(t,e));do try{Zx();break}catch(a){t5(t,a)}while(!0);gm(),Dd.current=o,Be=i,bt!==null?e=0:(Nt=null,jt=0,e=St)}if(e!==0){if(e===2&&(i=lp(t),i!==0&&(r=i,e=Mp(t,i))),e===1)throw n=Hl,Io(t,0),Si(t,r),pn(t,ht()),n;if(e===6)Si(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vx(i)&&(e=Md(t,r),e===2&&(o=lp(t),o!==0&&(r=o,e=Mp(t,o))),e===1))throw n=Hl,Io(t,0),Si(t,r),pn(t,ht()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(Z(345));case 2:Eo(t,an,Wr);break;case 3:if(Si(t,r),(r&130023424)===r&&(e=Om+500-ht(),10<e)){if(yd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gp(Eo.bind(null,t,an,Wr),e);break}Eo(t,an,Wr);break;case 4:if(Si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Jn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=ht()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hx(r/1960))-r,10<r){t.timeoutHandle=gp(Eo.bind(null,t,an,Wr),r);break}Eo(t,an,Wr);break;case 5:Eo(t,an,Wr);break;default:throw Error(Z(329))}}}return pn(t,ht()),t.callbackNode===n?e5.bind(null,t):null}function Mp(t,e){var n=vl;return t.current.memoizedState.isDehydrated&&(Io(t,e).flags|=256),t=Md(t,e),t!==2&&(e=an,an=n,e!==null&&jp(e)),t}function jp(t){an===null?an=t:an.push.apply(an,t)}function Vx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Si(t,e){for(e&=~Am,e&=~Bf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function rw(t){if(Be&6)throw Error(Z(327));Zs();var e=yd(t,0);if(!(e&1))return pn(t,ht()),null;var n=Md(t,e);if(t.tag!==0&&n===2){var r=lp(t);r!==0&&(e=r,n=Mp(t,r))}if(n===1)throw n=Hl,Io(t,0),Si(t,e),pn(t,ht()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Eo(t,an,Wr),pn(t,ht()),null}function Im(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(oa=ht()+500,Rf&&ao())}}function Uo(t){Ai!==null&&Ai.tag===0&&!(Be&6)&&Zs();var e=Be;Be|=1;var n=Mn.transition,r=We;try{if(Mn.transition=null,We=1,t)return t()}finally{We=r,Mn.transition=n,Be=e,!(Be&6)&&ao()}}function Dm(){Cn=Us.current,et(Us)}function Io(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xx(n)),bt!==null)for(n=bt.return;n!==null;){var r=n;switch(hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_d();break;case 3:ra(),et(fn),et(qt),Cm();break;case 5:xm(r);break;case 4:ra();break;case 13:et(it);break;case 19:et(it);break;case 10:wm(r.type._context);break;case 22:case 23:Dm()}n=n.return}if(Nt=t,bt=t=Bi(t.current,null),jt=Cn=e,St=0,Hl=null,Am=Bf=Bo=0,an=vl=null,$o!==null){for(e=0;e<$o.length;e++)if(n=$o[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}$o=null}return t}function t5(t,e){do{var n=bt;try{if(gm(),Ju.current=Id,Od){for(var r=st.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Od=!1}if(Lo=0,Dt=Et=st=null,wl=!1,Fl=0,Tm.current=null,n===null||n.return===null){St=1,Hl=e,bt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=H2(s);if(g!==null){g.flags&=-257,V2(g,s,a,o,e),g.mode&1&&W2(o,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var C=new Set;C.add(l),e.updateQueue=C}else y.add(l);break e}else{if(!(e&1)){W2(o,c,e),Nm();break e}l=Error(Z(426))}}else if(nt&&a.mode&1){var E=H2(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),V2(E,s,a,o,e),pm(ia(l,a));break e}}o=l=ia(l,a),St!==4&&(St=2),vl===null?vl=[o]:vl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var b=Lv(o,l,e);M2(o,b);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ji===null||!ji.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Bv(o,a,e);M2(o,x);break e}}o=o.return}while(o!==null)}i5(n)}catch(_){e=_,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function n5(){var t=Dd.current;return Dd.current=Id,t===null?Id:t}function Nm(){(St===0||St===3||St===2)&&(St=4),Nt===null||!(Bo&268435455)&&!(Bf&268435455)||Si(Nt,jt)}function Md(t,e){var n=Be;Be|=2;var r=n5();(Nt!==t||jt!==e)&&(Wr=null,Io(t,e));do try{qx();break}catch(i){t5(t,i)}while(!0);if(gm(),Be=n,Dd.current=r,bt!==null)throw Error(Z(261));return Nt=null,jt=0,St}function qx(){for(;bt!==null;)r5(bt)}function Zx(){for(;bt!==null&&!y8();)r5(bt)}function r5(t){var e=s5(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?i5(t):bt=e,Tm.current=null}function i5(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ux(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,bt=null;return}}else if(n=Bx(n,e,Cn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);St===0&&(St=5)}function Eo(t,e,n){var r=We,i=Mn.transition;try{Mn.transition=null,We=1,Gx(t,e,n,r)}finally{Mn.transition=i,We=r}return null}function Gx(t,e,n,r){do Zs();while(Ai!==null);if(Be&6)throw Error(Z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(P8(t,o),t===Nt&&(bt=Nt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Au||(Au=!0,a5(wd,function(){return Zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mn.transition,Mn.transition=null;var s=We;We=1;var a=Be;Be|=4,Tm.current=null,zx(t,n),Jv(n,t),px(pp),vd=!!hp,pp=hp=null,t.current=n,Wx(n),v8(),Be=a,We=s,Mn.transition=o}else t.current=n;if(Au&&(Au=!1,Ai=t,Rd=i),o=t.pendingLanes,o===0&&(ji=null),C8(n.stateNode),pn(t,ht()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nd)throw Nd=!1,t=Np,Np=null,t;return Rd&1&&t.tag!==0&&Zs(),o=t.pendingLanes,o&1?t===Rp?bl++:(bl=0,Rp=t):bl=0,ao(),null}function Zs(){if(Ai!==null){var t=jy(Rd),e=Mn.transition,n=We;try{if(Mn.transition=null,We=16>t?16:t,Ai===null)var r=!1;else{if(t=Ai,Ai=null,Rd=0,Be&6)throw Error(Z(331));var i=Be;for(Be|=4,ae=t.current;ae!==null;){var o=ae,s=o.child;if(ae.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ae=c;ae!==null;){var u=ae;switch(u.tag){case 0:case 11:case 15:yl(8,u,o)}var f=u.child;if(f!==null)f.return=u,ae=f;else for(;ae!==null;){u=ae;var h=u.sibling,g=u.return;if(Kv(u),u===c){ae=null;break}if(h!==null){h.return=g,ae=h;break}ae=g}}}var y=o.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var E=C.sibling;C.sibling=null,C=E}while(C!==null)}}ae=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ae=s;else e:for(;ae!==null;){if(o=ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yl(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,ae=b;break e}ae=o.return}}var m=t.current;for(ae=m;ae!==null;){s=ae;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ae=v;else e:for(s=m;ae!==null;){if(a=ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lf(9,a)}}catch(_){ct(a,a.return,_)}if(a===s){ae=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ae=x;break e}ae=a.return}}if(Be=i,ao(),Cr&&typeof Cr.onPostCommitFiberRoot=="function")try{Cr.onPostCommitFiberRoot(Af,t)}catch{}r=!0}return r}finally{We=n,Mn.transition=e}}return!1}function iw(t,e,n){e=ia(n,e),e=Lv(t,e,1),t=Mi(t,e,1),e=Jt(),t!==null&&(Wc(t,1,e),pn(t,e))}function ct(t,e,n){if(t.tag===3)iw(t,t,n);else for(;e!==null;){if(e.tag===3){iw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ji===null||!ji.has(r))){t=ia(n,t),t=Bv(e,t,1),e=Mi(e,t,1),t=Jt(),e!==null&&(Wc(e,1,t),pn(e,t));break}}e=e.return}}function Kx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(jt&n)===n&&(St===4||St===3&&(jt&130023424)===jt&&500>ht()-Om?Io(t,0):Am|=n),pn(t,e)}function o5(t,e){e===0&&(t.mode&1?(e=bu,bu<<=1,!(bu&130023424)&&(bu=4194304)):e=1);var n=Jt();t=Xr(t,e),t!==null&&(Wc(t,e,n),pn(t,n))}function Qx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o5(t,n)}function Yx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(e),o5(t,n)}var s5;s5=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Lx(t,e,n);ln=!!(t.flags&131072)}else ln=!1,nt&&e.flags&1048576&&cv(e,$d,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ed(t,e),t=e.pendingProps;var i=ea(e,qt.current);qs(e,n),i=Em(null,e,r,t,i,n);var o=Sm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(r)?(o=!0,Ed(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vm(e),i.updater=Mf,e.stateNode=i,i._reactInternals=e,_p(e,r,t,n),e=$p(null,e,r,!0,o,n)):(e.tag=0,nt&&o&&fm(e),Qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ed(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Xx(r),t=Vn(r,t),i){case 0:e=Sp(null,e,r,t,n);break e;case 1:e=G2(null,e,r,t,n);break e;case 11:e=q2(null,e,r,t,n);break e;case 14:e=Z2(null,e,r,Vn(r.type,t),n);break e}throw Error(Z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Sp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),G2(t,e,r,i,n);case 3:e:{if(Wv(e),t===null)throw Error(Z(387));r=e.pendingProps,o=e.memoizedState,i=o.element,hv(t,e),Td(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ia(Error(Z(423)),e),e=K2(t,e,r,n,i);break e}else if(r!==i){i=ia(Error(Z(424)),e),e=K2(t,e,r,n,i);break e}else for(_n=Ri(e.stateNode.containerInfo.firstChild),En=e,nt=!0,Gn=null,n=wv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ta(),r===i){e=ei(t,e,n);break e}Qt(t,e,r,n)}e=e.child}return e;case 5:return yv(e),t===null&&bp(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,mp(r,i)?s=null:o!==null&&mp(r,o)&&(e.flags|=32),zv(t,e),Qt(t,e,s,n),e.child;case 6:return t===null&&bp(e),null;case 13:return Hv(t,e,n);case 4:return bm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=na(e,null,r,n):Qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),q2(t,e,r,i,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ye(kd,r._currentValue),r._currentValue=s,o!==null)if(nr(o.value,s)){if(o.children===i.children&&!fn.current){e=ei(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Gr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xp(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),xp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=Ln(i),r=r(i),e.flags|=1,Qt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),Z2(t,e,r,i,n);case 15:return Uv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),ed(t,e),e.tag=1,hn(r)?(t=!0,Ed(e)):t=!1,qs(e,n),mv(e,r,i),_p(e,r,i,n),$p(null,e,r,!0,t,n);case 19:return Vv(t,e,n);case 22:return Fv(t,e,n)}throw Error(Z(156,e.tag))};function a5(t,e){return Dy(t,e)}function Jx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,r){return new Jx(t,e,n,r)}function Rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xx(t){if(typeof t=="function")return Rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===em)return 11;if(t===tm)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rd(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Rm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case As:return Do(n.children,i,o,e);case X1:s=8,i|=8;break;case Zh:return t=Rn(12,n,e,i|2),t.elementType=Zh,t.lanes=o,t;case Gh:return t=Rn(13,n,e,i),t.elementType=Gh,t.lanes=o,t;case Kh:return t=Rn(19,n,e,i),t.elementType=Kh,t.lanes=o,t;case gy:return Uf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case py:s=10;break e;case my:s=9;break e;case em:s=11;break e;case tm:s=14;break e;case vi:s=16,r=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=Rn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Do(t,e,n,r){return t=Rn(7,t,r,e),t.lanes=n,t}function Uf(t,e,n,r){return t=Rn(22,t,r,e),t.elementType=gy,t.lanes=n,t.stateNode={isHidden:!1},t}function lh(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function ch(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=W0(0),this.expirationTimes=W0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=W0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,r,i,o,s,a,l){return t=new eC(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Rn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vm(o),t}function tC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l5(t){if(!t)return Zi;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(hn(n))return av(t,n,e)}return e}function c5(t,e,n,r,i,o,s,a,l){return t=Mm(n,r,!0,t,i,o,s,a,l),t.context=l5(null),n=t.current,r=Jt(),i=Li(n),o=Gr(r,i),o.callback=e??null,Mi(n,o,i),t.current.lanes=i,Wc(t,i,r),pn(t,r),t}function Ff(t,e,n,r){var i=e.current,o=Jt(),s=Li(i);return n=l5(n),e.context===null?e.context=n:e.pendingContext=n,e=Gr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mi(i,e,s),t!==null&&(Xn(t,i,s,o),Yu(t,i,s)),s}function jd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ow(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jm(t,e){ow(t,e),(t=t.alternate)&&ow(t,e)}function nC(){return null}var u5=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lm(t){this._internalRoot=t}zf.prototype.render=Lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Ff(t,e,null,null)};zf.prototype.unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Uo(function(){Ff(null,t,null,null)}),e[Jr]=null}};function zf(t){this._internalRoot=t}zf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ei.length&&e!==0&&e<Ei[n].priority;n++);Ei.splice(n,0,t),n===0&&zy(t)}};function Bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sw(){}function rC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=jd(s);o.call(c)}}var s=c5(e,r,t,0,null,!1,!1,"",sw);return t._reactRootContainer=s,t[Jr]=s.current,Ml(t.nodeType===8?t.parentNode:t),Uo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=jd(l);a.call(c)}}var l=Mm(t,0,!1,null,null,!1,!1,"",sw);return t._reactRootContainer=l,t[Jr]=l.current,Ml(t.nodeType===8?t.parentNode:t),Uo(function(){Ff(e,l,n,r)}),l}function Hf(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=jd(s);a.call(l)}}Ff(e,s,t,i)}else s=rC(n,e,t,i,r);return jd(s)}Ly=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sl(e.pendingLanes);n!==0&&(im(e,n|1),pn(e,ht()),!(Be&6)&&(oa=ht()+500,ao()))}break;case 13:Uo(function(){var r=Xr(t,1);if(r!==null){var i=Jt();Xn(r,t,1,i)}}),jm(t,1)}};om=function(t){if(t.tag===13){var e=Xr(t,134217728);if(e!==null){var n=Jt();Xn(e,t,134217728,n)}jm(t,134217728)}};By=function(t){if(t.tag===13){var e=Li(t),n=Xr(t,e);if(n!==null){var r=Jt();Xn(n,t,e,r)}jm(t,e)}};Uy=function(){return We};Fy=function(t,e){var n=We;try{return We=t,e()}finally{We=n}};op=function(t,e,n){switch(e){case"input":if(Jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nf(r);if(!i)throw Error(Z(90));yy(r),Jh(r,i)}}}break;case"textarea":by(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};ky=Im;Py=Uo;var iC={usingClientEntryPoint:!1,Events:[Vc,Ns,Nf,Sy,$y,Im]},Qa={findFiberByHostInstance:So,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oC={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Oy(t),t===null?null:t.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||nC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{Af=Ou.inject(oC),Cr=Ou}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iC;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bm(e))throw Error(Z(200));return tC(t,e,null,n)};kn.createRoot=function(t,e){if(!Bm(t))throw Error(Z(299));var n=!1,r="",i=u5;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,r,i),t[Jr]=e.current,Ml(t.nodeType===8?t.parentNode:t),new Lm(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=Oy(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Uo(t)};kn.hydrate=function(t,e,n){if(!Wf(e))throw Error(Z(200));return Hf(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Bm(t))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=u5;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=c5(e,null,t,1,n??null,i,!1,o,s),t[Jr]=e.current,Ml(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zf(e)};kn.render=function(t,e,n){if(!Wf(e))throw Error(Z(200));return Hf(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Wf(t))throw Error(Z(40));return t._reactRootContainer?(Uo(function(){Hf(null,null,t,!1,function(){t._reactRootContainer=null,t[Jr]=null})}),!0):!1};kn.unstable_batchedUpdates=Im;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wf(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return Hf(t,e,n,!1,r)};kn.version="18.2.0-next-9e3b772b8-20220608";function d5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d5)}catch(t){console.error(t)}}d5(),cy.exports=kn;var sC=cy.exports,aw=sC;Vh.createRoot=aw.createRoot,Vh.hydrateRoot=aw.hydrateRoot;function aC({}){return q.jsx("div",{className:"main-container",children:q.jsxs("div",{className:"max-w-4xl mx-auto border-purple-500 flex flex-col md:flex-row gap-3 border-2 border-opacity-35 rounded-2xl w-full p-5",children:[q.jsxs("div",{className:"mr-auto my-auto",children:[q.jsx("h4",{className:"text-purple-200 text-2xl mb-2",children:"New to Community?"}),q.jsx("p",{className:"text-purple-200 text-opacity-80",children:"Learn more about MintPare product and the idea behind it"})]}),q.jsx("div",{className:"ml-auto  my-auto",children:q.jsx("a",{href:"https://mintpare.xyz/about",target:"_blank",className:"btn btn-primary",children:"Learn More"})})]})})}var f5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lw=Yn.createContext&&Yn.createContext(f5),Ui=function(){return Ui=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ui.apply(this,arguments)},lC=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function h5(t){return t&&t.map(function(e,n){return Yn.createElement(e.tag,Ui({key:n},e.attr),h5(e.child))})}function cr(t){return function(e){return Yn.createElement(cC,Ui({attr:Ui({},t.attr)},e),h5(t.child))}}function cC(t){var e=function(n){var r=t.attr,i=t.size,o=t.title,s=lC(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Yn.createElement("svg",Ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ui(Ui({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Yn.createElement("title",null,o),t.children)};return lw!==void 0?Yn.createElement(lw.Consumer,null,function(n){return e(n)}):e(f5)}function uC(t){return cr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"}}]})(t)}function dC(t){return cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"}}]})(t)}function fC(t){return cr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"}}]})(t)}function hC(t){return cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"}}]})(t)}function pC(){return q.jsx("div",{className:"main-container",children:q.jsxs("section",{className:"lg:flex justify-center gap-10 relative",children:[q.jsx("div",{className:"effect absolute h-80 right-0 left-0 opacity-20"}),q.jsxs("div",{className:"max-w-3xl my-auto mx-auto  text-center lg:text-left",children:[q.jsx("h1",{className:"text-2xl lg:text-5xl text-gray-200 text-opacity-85",children:"All about MPPT and MPT tokens"}),q.jsxs("p",{className:"my-5 lg:text-lg text-opacity text-gray-100 text-opacity-65",children:[q.jsxs("p",{children:["MintPare Community is embarking on an exciting expansion across popular networks to foster community growth. Backed by the dynamic",q.jsxs("a",{className:"font-bold ml-1",href:"https://twitter.com/NFTocean_markett",target:"_blank",children:["NFTOCEAN community"," "]}),"and it's esteemed partners like",q.jsx("a",{href:"https://twitter.com/ucfinance1?lang=en",className:"font-bold ml-1",target:"_blank",children:"UCFinance"}),", we're launching a presale for our token (MPPT). We invite fans to join us on this venture, where early supporters not only contribute to the project's success but also enjoy exclusive benefits."]}),q.jsx("p",{children:"Participating in our presale comes with perks. Early supporters will receive up to $1000 worth of MPT tokens in an airdrop, providing an immediate and valuable return on their investment. Additionally, these backers will receive MPT tokens after the listing on the market, solidifying their commitment and involvement in the MintPare project."}),q.jsx("p",{children:"It's worth noting that the MintPare product and its token (MPT) will make their public debut after the launch of the NFTOCEAN NUT token. This positioning within a strategic timeline enhances MintPare's market impact."})]})]}),q.jsxs("div",{className:"flex flex-col  w-full mx-auto max-w-2xl gap-3 ",children:[q.jsx(uh,{icon:q.jsx(dC,{}),title:"Total Supply",description:"1,000,000,000 Tokens"}),q.jsx(uh,{icon:q.jsx(fC,{}),title:"Networks",description:"Both MPPT and MPT tokens will be launched on Polygon and Ethereum"}),q.jsx(uh,{icon:q.jsx(uC,{}),title:"Estimated Launch Date",description:"MPT Tokens will be available by the end of Summer 2025"})]})]})})}const uh=({title:t,description:e,icon:n})=>q.jsxs("div",{className:"p-5 w-full  rounded bg-indigo-600 bg-opacity-5 flex gap-2 md:gap-4",children:[q.jsx("div",{className:"h-14 w-14 flex justify-center my-auto rounded-full bg-slate-200 bg-opacity-15",children:q.jsx("div",{className:"m-auto text-2xl",children:n})}),q.jsxs("div",{className:"max-w-56 lg:max-w-3xl",children:[q.jsx("p",{className:"md:text-xl",children:t}),q.jsx("p",{className:"mt-2 text-gray-400 text-xs md:text-sm",children:e})]})]}),mC="modulepreload",gC=function(t){return"/"+t},cw={},Fo=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");i=Promise.all(n.map(s=>{if(s=gC(s),s in cw)return;cw[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const h=o[f];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":mC,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};function dh({title:t,icon:e}){return q.jsx("div",{className:`p-2 pr-3 w-72 rounded-full bg-indigo-800 bg-opacity-50 lg:bg-opacity-30 
      transition-all hover:shadow-lg hover:scale-105`,children:q.jsxs("div",{className:"flex gap-3",children:[q.jsx("div",{className:"h-10 w-10 flex justify-center my-auto rounded-full bg-slate-200 bg-opacity-15",children:q.jsx("div",{className:"m-auto text-2xl text-indigo-300",children:e})}),q.jsx("div",{className:"my-auto text-md text-indigo-200",children:t})]})})}function wC(t){return cr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"}}]})(t)}function yC(t){return cr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"}}]})(t)}function Vf(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(c){try{l(r.next(c))}catch(u){o(u)}}function a(c){try{l(r.throw(c))}catch(u){o(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof n?u:new n(function(f){f(u)})).then(s,a)}l((r=r.apply(t,e||[])).next())})}function Fi(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!((i=i.length>0&&i[i.length-1])||u[0]!==6&&u[0]!==2)){s=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){s.label=u[1];break}if(u[0]===6&&s.label<i[1]){s.label=i[1],i=u;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(u);break}i[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(f){u=[6,f],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([l,c])}}}function Lp(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Kn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function br(t,e,n){if(n||arguments.length===2)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}function uw(t,e,n,r,i){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];return Vf(this,void 0,void 0,function(){var a,l,c,u,f,h;return Fi(this,function(g){switch(g.label){case 0:g.trys.push([0,12,13,14]),a=Lp(o),l=a.next(),g.label=1;case 1:if(l.done)return[3,11];switch(c=l.value,typeof c){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,vC(t,e,c,n,r,i)];case 3:return g.sent(),[3,10];case 4:return[4,p5(c)];case 5:return g.sent(),[3,10];case 6:return[4,c.apply(void 0,br([t,e,n,r,i],Kn(o),!1))];case 7:return g.sent(),[3,10];case 8:return[4,c];case 9:g.sent(),g.label=10;case 10:return l=a.next(),[3,1];case 11:return[3,14];case 12:return u=g.sent(),f={error:u},[3,14];case 13:try{l&&!l.done&&(h=a.return)&&h.call(a)}finally{if(f)throw f.error}return[7];case 14:return[2]}})})}function vC(t,e,n,r,i,o){return Vf(this,void 0,void 0,function(){var s,a;return Fi(this,function(l){switch(l.label){case 0:return s=t.textContent||"",a=function(c,u){var f=Kn(u).slice(0);return br(br([],Kn(c),!1),[NaN],!1).findIndex(function(h,g){return f[g]!==h})}(s,n),[4,bC(t,br(br([],Kn(CC(s,e,a)),!1),Kn(xC(n,e,a)),!1),r,i,o)];case 1:return l.sent(),[2]}})})}function p5(t){return Vf(this,void 0,void 0,function(){return Fi(this,function(e){switch(e.label){case 0:return[4,new Promise(function(n){return setTimeout(n,t)})];case 1:return e.sent(),[2]}})})}function bC(t,e,n,r,i){return Vf(this,void 0,void 0,function(){var o,s,a,l,c,u,f,h,g,y,C,E,b;return Fi(this,function(m){switch(m.label){case 0:if(o=e,i){for(s=0,a=1;a<e.length;a++)if(l=Kn([e[a-1],e[a]],2),c=l[0],(u=l[1]).length>c.length||u===""){s=a;break}o=e.slice(s,e.length)}m.label=1;case 1:m.trys.push([1,6,7,8]),f=Lp(function(v){var x,_,S,d,$,O,I;return Fi(this,function(R){switch(R.label){case 0:x=function(Y){return Fi(this,function(te){switch(te.label){case 0:return[4,{op:function(W){return requestAnimationFrame(function(){return W.textContent=Y})},opCode:function(W){var F=W.textContent||"";return Y===""||F.length>Y.length?"DELETE":"WRITING"}}];case 1:return te.sent(),[2]}})},R.label=1;case 1:R.trys.push([1,6,7,8]),_=Lp(v),S=_.next(),R.label=2;case 2:return S.done?[3,5]:(d=S.value,[5,x(d)]);case 3:R.sent(),R.label=4;case 4:return S=_.next(),[3,2];case 5:return[3,8];case 6:return $=R.sent(),O={error:$},[3,8];case 7:try{S&&!S.done&&(I=_.return)&&I.call(_)}finally{if(O)throw O.error}return[7];case 8:return[2]}})}(o)),h=f.next(),m.label=2;case 2:return h.done?[3,5]:(g=h.value,y=g.opCode(t)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),g.op(t),[4,p5(y)]);case 3:m.sent(),m.label=4;case 4:return h=f.next(),[3,2];case 5:return[3,8];case 6:return C=m.sent(),E={error:C},[3,8];case 7:try{h&&!h.done&&(b=f.return)&&b.call(f)}finally{if(E)throw E.error}return[7];case 8:return[2]}})})}function xC(t,e,n){var r,i;return n===void 0&&(n=0),Fi(this,function(o){switch(o.label){case 0:r=e(t),i=r.length,o.label=1;case 1:return n<i?[4,r.slice(0,++n).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}function CC(t,e,n){var r,i;return n===void 0&&(n=0),Fi(this,function(o){switch(o.label){case 0:r=e(t),i=r.length,o.label=1;case 1:return i>n?[4,r.slice(0,--i).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}var _C="index-module_type__E-SaG";(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var EC=le.memo(le.forwardRef(function(t,e){var n=t.sequence,r=t.repeat,i=t.className,o=t.speed,s=o===void 0?40:o,a=t.deletionSpeed,l=t.omitDeletionAnimation,c=l!==void 0&&l,u=t.preRenderFirstString,f=u!==void 0&&u,h=t.wrapper,g=h===void 0?"span":h,y=t.splitter,C=y===void 0?function(L){return br([],Kn(L),!1)}:y,E=t.cursor,b=E===void 0||E,m=t.style,v=function(L,H){var G={};for(var V in L)Object.prototype.hasOwnProperty.call(L,V)&&H.indexOf(V)<0&&(G[V]=L[V]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function"){var ne=0;for(V=Object.getOwnPropertySymbols(L);ne<V.length;ne++)H.indexOf(V[ne])<0&&Object.prototype.propertyIsEnumerable.call(L,V[ne])&&(G[V[ne]]=L[V[ne]])}return G}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),x=v["aria-label"],_=v["aria-hidden"],S=v.role;a||(a=s);var d=new Array(2).fill(40);[s,a].forEach(function(L,H){switch(typeof L){case"number":d[H]=Math.abs(L-100);break;case"object":var G=L.type,V=L.value;if(typeof V!="number")break;G==="keyStrokeDelayInMs"&&(d[H]=V)}});var $,O,I,R,Y,te,W=d[0],F=d[1],j=function(L,H){H===void 0&&(H=null);var G=le.useRef(H);return le.useEffect(function(){L&&(typeof L=="function"?L(G.current):L.current=G.current)},[L]),G}(e),U=_C;$=i?"".concat(b?U+" ":"").concat(i):b?U:"",O=le.useRef(function(){var L,H=n;r===1/0?L=uw:typeof r=="number"&&(H=Array(1+r).fill(n).flat());var G=L?br(br([],Kn(H),!1),[L],!1):br([],Kn(H),!1);return uw.apply(void 0,br([j.current,C,W,F,c],Kn(G),!1)),function(){j.current}}),I=le.useRef(),R=le.useRef(!1),Y=le.useRef(!1),te=Kn(le.useState(0),2)[1],R.current&&(Y.current=!0),le.useEffect(function(){return R.current||(I.current=O.current(),R.current=!0),te(function(L){return L+1}),function(){Y.current&&I.current&&I.current()}},[]);var N=g,z=f?n.find(function(L){return typeof L=="string"})||"":null;return Yn.createElement(N,{"aria-hidden":_,"aria-label":x,role:S,style:m,className:$,children:x?Yn.createElement("span",{"aria-hidden":"true",ref:j,children:z}):z,ref:x?void 0:j})}),function(t,e){return!0});function SC(t){return cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M260.28 21.656c-15.214 146.58-91.146 112.617-109.75 212.906-42.198-38.566-53.434-86.512 10.814-148.937-142.44 81.374-91.17 186.01 13.312 271.813 26.894 32.327 66.16 57.977 85.625 132.78 19.467-74.803 58.734-100.452 85.626-132.78C450.39 271.634 501.66 166.998 359.22 85.625c64.258 62.435 53.03 110.4 10.81 148.97C351.44 134.268 275.5 168.25 260.28 21.654zm0 73.03c5.482 52.788 24.244 66.03 40.595 81.658 21.9 13.69 36.53 38.02 36.53 65.656 0 30.134-17.377 56.306-42.624 69.063-12.9 13.74-26.514 30.443-34.5 61.125-7.884-30.305-21.24-46.98-34-60.625-25.777-12.565-43.593-39.032-43.593-69.563 0-28.21 15.224-52.98 37.875-66.5 16.14-15.277 34.338-28.97 39.72-80.813zm-.25 88.658c-32.51 0-58.655 26.147-58.655 58.656 0 32.512 26.144 58.656 58.656 58.656 32.513 0 58.69-26.144 58.69-58.656 0-32.51-26.177-58.656-58.69-58.656z"}}]})(t)}function $C(t){return cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M342.5 17.9c-3.1 11.63-2.2 21.56-23.8 25.11 20.3-2.7 22.3 9.58 24.8 21.49-2.8 1.94-5.5 4.11-8.1 6.49-21.9 20.84-33 41.11-49 61.61-6.3 1.2 5.3-53.52 31.1-79.87C225.1 40.92 207.6 268.4 236.4 275c-51.7 18.4-72.6-98.3-59.4-157.3-37.1 3.9-62 39.8-67.9 60 2.8 27.1 6.1 55.1 38.7 80.9-32.1 3.6-42-27.8-55.31-54C13.9 309.5 198.4 311.4 228.5 299.1c-93 70.5-149.62 52.3-196.77 39-40.48 85.1 61.46 56 107.57 35.7-18.4 30.7-72.25 37.6-88.92 41 61.62 51.3 174.42-67 200.02-106.5 2.5 65.7-74.3 134.4-122.8 171.7 43.6 2.2 83.2-17.9 102.4-55.5 0 10.1-4.1 22.6-9.6 35.8 15-2.1 39.6-6.2 48.8-24.2 25-54.1 37.8-93.1 15.3-138.2 29.9 33.5 63.6 65.3 58.4 114.5 26.9-15.6 48.8-33.6 24.7-60.1 14.1 1.4 23.6 7.7 32.8 13.7 13.9-2.8 34.4-19.9 33.7-33-31.6-29.8-83.4-43.7-133.8-55.9 72.1-19.8 136.9-10.1 175.6 5.6 5-11.7 9.4-29.6 5.9-41.9-16.4-9.7-62.7-7.8-83.3-5.6 17.7-15.7 56.8-21.1 81.3-21.2-2-67.7-162.6 27.8-182.2 42.8 32.7-59.1 123.2-112.7 178.7-121.1-13.2-31.1-37.2-34-64.3-22.4 2.4-9.5 6.7-17.49 23.4-15.29-21.6-3.51-20.7-13.44-23.8-25.07-2.4 13.55-4.1 17.11-19.4 26.67 14.3-2.17 16.4 6.69 17.4 14.69-53.5 24.4-117.8 102.8-135.1 132.5-22.1-24 51-121.5 107.7-187.46-3.1-9.48-21.8-6.31-38.2 4.81 1.1-8.63.7-22.16 17.9-19.54-15.3-9.6-17-13.16-19.4-26.71zm-166.3.3c5.4 10.73 12.7 17.53-1 34.56 13.8-16.07 23.7-7.13 33.9.22-4.6-7.19-16.3-17.67-.7-27.86-17.8 3.09-21.4 1.57-32.2-6.92zM47.71 26.61c-3.08 11.63-2.13 21.56-23.76 25.05 21.02-2.74 22.39 10.55 25.06 22.81 1.43-8.43-.28-23.97 18.14-21.16-15.27-9.59-16.98-13.15-19.44-26.7zm419.39 5.5c1.6 10.83 1.3 13.93-7.8 25.07 13.1-6.8 15.9 5.39 19.1 11.38-1.2-9.97-3.4-20.36 13.1-23.64-17.2 2.87-19.1-4.85-24.4-12.81zM125.3 84.28c-.6 18.02-12 17.32-22.7 17.92 7 2.4 20.3 3 15.3 18.2 10.2-11.6 13.3-12.5 25.2-12.6-9.4-4.3-17.8-4.9-17.8-23.52zM71.21 153.9c-8.61 8.5-12.85 17.5-33.24 9.6 19.47 8.3 13.98 20.4 10.08 32.4 5.46-6.6 11.9-20.9 26.35-9.1-8.38-16-8.02-19.9-3.19-32.9zM453.9 282.7c-2.4 8.9-1.7 16.5-18.2 19.2 16-2.1 17.1 8.1 19.2 17.5 1.1-6.5-.2-18.4 13.8-16.3-11.7-7.3-13-10-14.8-20.4zM69.25 293.8c-12.82 12.7-16.72 13.5-30.41 12.7 10.55 5.7 20.39 7.1 18.72 29 2.3-21.1 15.46-19.4 28.05-19.1-7.83-3.3-23.4-5.3-16.36-22.6zm394.55 50.7c3.1 11.6 8.9 19.7-8 33.6 16.8-12.9 24.6-2.2 33.2 7.1-3.1-8-12.4-20.6 4.9-27.4-18-.5-21.3-2.8-30.1-13.3zm-139.2 72.1c-2.7 12.3-4.1 25.5-25.1 22.8 21.6 3.5 20.7 13.4 23.8 25 2.4-13.5 4.1-17.1 19.4-26.6-18.4 2.8-16.7-12.8-18.1-21.2zM83.9 438.2c-2.83 16-4.84 20.2-22.86 31.5 21.68-3.3 19.67 15.1 21.33 25 3.19-14.5 4.84-30.1 29.63-26.9-25.5-4.2-24.43-15.9-28.1-29.6zm366.2 11.4c-7.3 9.6-10.2 19.1-31.5 14.2 20.4 5.4 16.8 18.1 14.6 30.6 4.5-7.3 8.8-22.4 24.8-12.8-10.6-14.6-10.8-18.6-7.9-32z"}}]})(t)}function kC(t){return cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256.175 32A224 224 0 0 0 156.11 55.68h199.71A224 224 0 0 0 256.174 32zM104.247 91.68a224 224 0 0 0-30.668 34.84l355.482-12.694a224 224 0 0 0-21.065-22.146h-303.75zM54.093 160a224 224 0 0 0-6.987 16.303l420.797 7.41a224 224 0 0 0-9.59-23.713H54.093zm-13.037 34.2a224 224 0 0 0-6.168 28.894l441.386-8.024a224 224 0 0 0-2.976-13.257L41.056 194.2zm437.693 38.827L32.92 241.13a224 224 0 0 0-.745 14.87 224 224 0 0 0 1.43 23h251.5c-3.19 1.413-6.214 3.02-9.024 4.816-5.576 3.568-10.425 8.035-14.005 13.184H36.09a224 224 0 0 0 7.93 30H257.46c3.102 9.023 10.002 16.672 18.62 22.184 3.162 2.023 6.593 3.802 10.235 5.336l-225.2 11.058a224 224 0 0 0 11.017 17.67l359.785 11.244a224 224 0 0 0 29.268-48.56l-99.652 4.894c.93-.53 1.844-1.074 2.733-1.642 8.615-5.512 15.516-13.16 18.618-22.184h85.53a224 224 0 0 0 7.82-30h-97.964c-3.58-5.15-8.428-9.616-14.005-13.184-2.812-1.797-5.834-3.403-9.027-4.816H478.96a224 224 0 0 0 .865-15.945l-75.808-10.918s48.452-4.13 75.54-6.344a224 224 0 0 0-.808-12.766zM320.174 290c13.77 0 26.1 3.674 34.394 8.98 8.292 5.303 12.105 11.52 12.105 17.52s-3.813 12.217-12.106 17.52c-8.294 5.306-20.625 8.98-34.395 8.98-13.77 0-26.102-3.674-34.395-8.98-8.293-5.303-12.105-11.52-12.105-17.52s3.812-12.217 12.105-17.52c8.293-5.306 20.624-8.98 34.395-8.98zM96.493 413a224 224 0 0 0 18.897 17h281.693a224 224 0 0 0 18.59-17H96.493zm82.537 53a224 224 0 0 0 77.145 14 224 224 0 0 0 77.488-14H179.03z"}}]})(t)}function PC(t){return cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255.6 62.21c-25.1 0-50.7 5.02-75.3 15.48C81.74 119.5 35.86 233.1 77.69 331.7c4.76 11.1 10.45 21.7 16.93 31.5-12.6.3-23.45-.5-31.98-2.4-13.22-2.9-19.93-7.8-22.27-13.3-2.33-5.6-1.25-13.8 5.87-25.4 1.65-2.6 3.62-5.4 5.86-8.4-2.1-7.4-3.76-14.7-5.05-22.2-6.62 7.1-12.1 14.2-16.37 21.1-8.74 14.1-12.66 28.9-7.11 42 5.54 13.1 18.9 20.5 35.17 24 13.66 3 30.13 3.6 48.96 2.2 53.2 63.4 143.6 87.6 223.9 53.4 80.3-34.1 125.6-115.7 117.1-198.1 14.1-12.6 25.2-24.9 32.5-36.8 8.9-14.2 12.7-29 7.2-42-5.6-13.1-18.9-20.5-35.2-24.1-7.9-1.7-16.9-2.7-26.5-2.8 4.5 6.1 8.6 12.4 12.4 19.1 3.7.4 7.1.9 10.1 1.6 13.3 2.8 20 7.8 22.3 13.3 2.4 5.5 1.3 13.8-5.9 25.3-4.5 7.4-11.4 15.8-20.4 24.7 1.5 7.3 2.7 14.5 3.4 21.7-2.6 2.3-5.5 4.7-8.2 7.1-4.7 3.8-9.5 7.7-14.7 11.5 11.2 32-4.4 67.8-35.9 81.2-26.3 11.2-56 3.6-74-16.8-9.1 4.3-18.3 8.4-27.8 12.5-62.5 26.4-122.4 43-169.2 48.1-3.8.4-7.5.7-11 1.1-4.7-5.6-8.95-11.4-13.12-17.6 6.82-.2 14.22-.7 22.02-1.6 44.4-4.9 103-20.9 164.2-46.9 8.4-3.5 16.7-7.3 24.8-11-.4-.7-.7-1.4-1-2.1-14-32.9 1.5-71.2 34.4-85.1 28.3-12.1 60.7-2.1 78 21.8 4-3.1 7.9-6.1 11.5-9.1 6.1-5 11.6-10 16.6-14.8-2.6-11.5-6.2-22.9-11-34.1-31.4-73.9-103.1-118.22-178.6-118.09zM364.3 229.6c-5.9 0-12.1 1.2-18.1 3.7-23.7 10.1-34.8 37.3-24.6 61.2 10 23.8 37.3 34.7 61.1 24.6 23.7-10 34.8-37.3 24.6-61.1-7.5-17.9-24.7-28.5-43-28.4z"}}]})(t)}function TC(t){return cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M125.764 18c-4.02 8.272-12.89 14.838-21.764 14.838 12 0 24 12 24 24 0-12 12-24 24-24-8.874 0-17.743-6.566-21.764-14.838zM416 32c0 8-8 16-16 16 8 0 16 8 16 16 0-8 8-16 16-16-8 0-16-8-16-16zm-72 40c0 12-12 24-24 24 12 0 24 12 24 24 0-12 12-24 24-24-12 0-24-12-24-24zM18 106.068v316.23c94.01-4 200.183-5.655 302.393-33.824 42.877-10.915 76.61-23.748 100.337-38.332 23.73-14.583 38.647-31.723 38.647-51.642-.09-8.624-3.61-17.682-8.012-24.502-3.336-4.935-7.64-9.66-12.78-14.174 1.484-3.638 2.307-7.627 2.307-11.824 0-17.228-13.772-31-31-31-17.227 0-31 13.772-31 31 0 17.227 13.773 31 31 31 6.414 0 12.346-1.91 17.27-5.196 7.304 6.808 13.886 15.314 14.215 24.696 0 10.556-8.86 23.27-30.072 36.306-21.212 13.037-53.58 25.59-95.354 36.225C224 393.99 112.045 402.37 29.4 404.14c24.183-4.757 46.276-15.274 64.803-30.066 26.898-1.776 50.93-3.913 76.447-7.078-2.67-6.236-3.957-11.75-3.527-17.71-18.175 2.115-36.955 4.04-52.676 5.3C137.233 328.146 151 293.706 151 256c0-77.41-58.01-141.054-133-149.932zm133.584 75.24c3.01 6.086 5.663 12.38 7.934 18.854 58.29 5.684 111.76 14.434 156.433 25.807 16.794 4.274 32.037 8.863 45.677 13.665 1.057-6.08 3.232-11.79 6.324-16.893-14.32-5.045-30.173-9.79-47.557-14.217-48.34-12.306-106.08-21.52-168.81-27.218zm12.926 35.917c1.43 6.073 2.528 12.27 3.28 18.576 26.678 3.332 51.106 7.403 72.524 12.104 30.658 6.73 55.29 14.78 71.508 23.196 8.11 4.207 14.065 8.524 17.606 12.322 3.54 3.798 4.572 6.636 4.572 9.078 0 2.442-1.03 5.28-4.572 9.078-3.54 3.798-9.497 8.115-17.606 12.322-16.217 8.416-40.85 16.467-71.508 23.196-3.503.773-6.587 1.408-9.93 2.086 2.285 6.26 3.146 11.893 2.216 17.916 3.81-.756 7.903-1.615 11.574-2.42 31.594-6.934 57.34-15.15 75.937-24.8 9.3-4.826 16.86-9.993 22.484-16.025 5.623-6.03 9.406-13.37 9.406-21.353 0-7.982-3.783-15.322-9.406-21.354-5.624-6.03-13.184-11.198-22.483-16.023-18.596-9.65-44.342-17.867-75.936-24.8-23.563-5.172-50.365-9.59-79.664-13.098zM200 337c-8.39 0-15 6.61-15 15s6.61 15 15 15 15-6.61 15-15-6.61-15-15-15zm56 95c0 8-8 16-16 16 8 0 16 8 16 16 0-8 8-16 16-16-8 0-16-8-16-16z"}}]})(t)}let wi;function AC(t){t&&(wi=t)}function m5(){if(!wi)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function t(n){await(wi==null?void 0:wi.open(n))}async function e(){await(wi==null?void 0:wi.close())}return{open:t,close:e}}function qf(t,e={}){const{fees:n=t.fees,formatters:r=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:n,formatters:r,serializers:i}}const OC="1.20.3",IC=t=>t,Zf=t=>t,DC=()=>`viem@${OC}`;class X extends Error{constructor(e,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:DC()});const r=n.cause instanceof X?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof X&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return g5(this,e)}}function g5(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?g5(t.cause,e):e?null:t}class NC extends X{constructor({max:e,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class RC extends X{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class MC extends X{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function Er(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function kt(t){return Er(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function No(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let i=0;i<n.length-1&&n[e==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class w5 extends X{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class y5 extends X{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Oa(t,{dir:e,size:n=32}={}){return typeof t=="string"?zi(t,{dir:e,size:n}):jC(t,{dir:e,size:n})}function zi(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new y5({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function jC(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new y5({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=e==="right";r[o?i:n-i-1]=t[o?i:t.length-i-1]}return r}const LC=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ci(t,e={}){return typeof t=="number"||typeof t=="bigint"?Se(t,e):typeof t=="string"?Um(t,e):typeof t=="boolean"?v5(t,e):Vl(t,e)}function v5(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(lo(n,{size:e.size}),Oa(n,{size:e.size})):n}function Vl(t,e={}){let n="";for(let i=0;i<t.length;i++)n+=LC[t[i]];const r=`0x${n}`;return typeof e.size=="number"?(lo(r,{size:e.size}),Oa(r,{dir:"right",size:e.size})):r}function Se(t,e={}){const{signed:n,size:r}=e,i=BigInt(t);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof t=="bigint"?"n":"";throw new NC({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?Oa(a,{size:r}):a}const BC=new TextEncoder;function Um(t,e={}){const n=BC.encode(t);return Vl(n,e)}const UC=new TextEncoder;function Gi(t,e={}){return typeof t=="number"||typeof t=="bigint"?zC(t,e):typeof t=="boolean"?FC(t,e):Er(t)?Fm(t,e):Kr(t,e)}function FC(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(lo(n,{size:e.size}),Oa(n,{size:e.size})):n}const jr={zero:48,nine:57,A:65,F:70,a:97,f:102};function dw(t){if(t>=jr.zero&&t<=jr.nine)return t-jr.zero;if(t>=jr.A&&t<=jr.F)return t-(jr.A-10);if(t>=jr.a&&t<=jr.f)return t-(jr.a-10)}function Fm(t,e={}){let n=t;e.size&&(lo(n,{size:e.size}),n=Oa(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=dw(r.charCodeAt(a++)),c=dw(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new X(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+c}return o}function zC(t,e){const n=Se(t,e);return Fm(n)}function Kr(t,e={}){const n=UC.encode(t);return typeof e.size=="number"?(lo(n,{size:e.size}),Oa(n,{dir:"right",size:e.size})):n}function lo(t,{size:e}){if(kt(t)>e)throw new MC({givenSize:kt(t),maxSize:e})}function Gf(t,e={}){const{signed:n}=e;e.size&&lo(t,{size:e.size});const r=BigInt(t);if(!n)return r;const i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function WC(t,e={}){let n=t;if(e.size&&(lo(n,{size:e.size}),n=No(n)),No(n)==="0x00")return!1;if(No(n)==="0x01")return!0;throw new RC(n)}function Vt(t,e={}){return Number(Gf(t,e))}function b5(t,e={}){let n=Fm(t);return e.size&&(lo(n,{size:e.size}),n=No(n,{dir:"right"})),new TextDecoder().decode(n)}const x5={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function C5(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Vt(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Vt(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?x5[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function _5(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:C5(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function rr(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const HC={"0x0":"reverted","0x1":"success"};function VC(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>rr(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Vt(t.transactionIndex):null,status:t.status?HC[t.status]:null,type:t.type?x5[t.type]||t.type:null}}const qC=qf({id:97,name:"Binance Smart Chain Testnet",network:"bsc-testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]},public:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://testnet.bscscan.com"},default:{name:"BscScan",url:"https://testnet.bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0}),ZC={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Kf(t){return{...t,gas:typeof t.gas<"u"?Se(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?Se(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?Se(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?Se(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?Se(t.nonce):void 0,type:typeof t.type<"u"?ZC[t.type]:void 0,value:typeof t.value<"u"?Se(t.value):void 0}}class ql extends X{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class Bp extends X{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class GC extends X{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class KC extends X{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class E5 extends X{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const S5={gwei:9,wei:18},QC={ether:-9,wei:9},YC={ether:-18,gwei:-9};function Ld(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[i,o]=[n.slice(0,n.length-e),n.slice(n.length-e)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function mn(t,e="wei"){return Ld(t,QC[e])}class Fs extends X{constructor({cause:e,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Fs,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Fs,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Bd extends X{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${mn(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Bd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Up extends X{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${mn(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Up,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Fp extends X{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Fp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class zp extends X{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(zp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Wp extends X{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Wp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Hp extends X{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Hp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class Vp extends X{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(Vp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class qp extends X{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(qp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Zp extends X{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Zp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Ud extends X{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${mn(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${mn(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Ud,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class Qf extends X{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const JC=/^0x[a-fA-F0-9]{40}$/;function Ki(t){return JC.test(t)}function ti(t){return typeof t[0]=="string"?zm(t):XC(t)}function XC(t){let e=0;for(const i of t)e+=i.length;const n=new Uint8Array(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return n}function zm(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}function e7(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const fw=/^tuple(?<array>(\[(\d*)\])*)$/;function Gp(t){let e=t.type;if(fw.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let i=0;i<n;i++){const o=t.components[i];e+=Gp(o),i<n-1&&(e+=", ")}const r=e7(fw,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,Gp({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function Ya(t){let e="";const n=t.length;for(let r=0;r<n;r++){const i=t[r];e+=Gp(i),r!==n-1&&(e+=", ")}return e}function t7(t){return t.type==="function"?`function ${t.name}(${Ya(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${Ya(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${Ya(t.inputs)})`:t.type==="error"?`error ${t.name}(${Ya(t.inputs)})`:t.type==="constructor"?`constructor(${Ya(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function we(t,e,n){return r=>{var i;return((i=t[e.name||n])==null?void 0:i.call(t,r))??e(t,r)}}function ni(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new m7(t.type);return`${t.name}(${Yf(t.inputs,{includeName:e})})`}function Yf(t,{includeName:e=!1}={}){return t?t.map(n=>n7(n,{includeName:e})).join(e?", ":","):""}function n7(t,{includeName:e}){return t.type.startsWith("tuple")?`(${Yf(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class r7 extends X{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class hw extends X{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class Wm extends X{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Yf(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class Jf extends X{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class i7 extends X{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class o7 extends X{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${kt(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class s7 extends X{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class $5 extends X{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class a7 extends X{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class l7 extends X{constructor(e,{docsPath:n}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class pw extends X{constructor(e,{docsPath:n}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class Fd extends X{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class c7 extends X{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class u7 extends X{constructor(e,n){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${ni(e.abiItem)}\`, and`,`\`${n.type}\` in \`${ni(n.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class d7 extends X{constructor({expectedSize:e,givenSize:n}){super(`Expected bytes${e}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class zo extends X{constructor({abiItem:e,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Yf(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=n,this.params=r,this.size=i}}class Ia extends X{constructor({abiItem:e,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${ni(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class f7 extends X{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class h7 extends X{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class p7 extends X{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class m7 extends X{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class g7 extends X{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function w7(t){let e=!0,n="",r=0,i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}i+=a,n+=a}}if(!o)throw new X("Unable to normalize signature.");return i}const k5=t=>{const e=typeof t=="string"?t:t7(t);return w7(e)},y7=t=>k5(t);function mw(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function P5(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function gw(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function v7(t,e){P5(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Iu=BigInt(2**32-1),ww=BigInt(32);function b7(t,e=!1){return e?{h:Number(t&Iu),l:Number(t>>ww&Iu)}:{h:Number(t>>ww&Iu)|0,l:Number(t&Iu)|0}}function x7(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=b7(t[i],e);[n[i],r[i]]=[o,s]}return[n,r]}const C7=(t,e,n)=>t<<n|e>>>32-n,_7=(t,e,n)=>e<<n|t>>>32-n,E7=(t,e,n)=>e<<n-32|t>>>64-n,S7=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $7=t=>t instanceof Uint8Array,k7=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),P7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!P7)throw new Error("Non little-endian hardware is not supported");function T7(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function T5(t){if(typeof t=="string"&&(t=T7(t)),!$7(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class A7{clone(){return this._cloneInto()}}function O7(t){const e=r=>t().update(T5(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[A5,O5,I5]=[[],[],[]],I7=BigInt(0),Ja=BigInt(1),D7=BigInt(2),N7=BigInt(7),R7=BigInt(256),M7=BigInt(113);for(let t=0,e=Ja,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],A5.push(2*(5*r+n)),O5.push((t+1)*(t+2)/2%64);let i=I7;for(let o=0;o<7;o++)e=(e<<Ja^(e>>N7)*M7)%R7,e&D7&&(i^=Ja<<(Ja<<BigInt(o))-Ja);I5.push(i)}const[j7,L7]=x7(I5,!0),yw=(t,e,n)=>n>32?E7(t,e,n):C7(t,e,n),vw=(t,e,n)=>n>32?S7(t,e,n):_7(t,e,n);function B7(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],f=yw(c,u,1)^n[a],h=vw(c,u,1)^n[a+1];for(let g=0;g<50;g+=10)t[s+g]^=f,t[s+g+1]^=h}let i=t[2],o=t[3];for(let s=0;s<24;s++){const a=O5[s],l=yw(i,o,a),c=vw(i,o,a),u=A5[s];i=t[u],o=t[u+1],t[u]=l,t[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=j7[r],t[1]^=L7[r]}n.fill(0)}class Hm extends A7{constructor(e,n,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,mw(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=k7(this.state)}keccak(){B7(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){gw(this);const{blockLen:n,state:r}=this;e=T5(e);const i=e.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=e[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:i}=this;e[r]^=n,n&128&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){gw(this,!1),P5(e),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=e.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);e.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return mw(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(v7(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new Hm(n,r,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}}const U7=(t,e,n)=>O7(()=>new Hm(e,t,n)),F7=U7(1,136,256/8);function Yt(t,e){const n=e||"hex",r=F7(Er(t,{strict:!1})?Gi(t):t);return n==="bytes"?r:ci(r)}const z7=t=>Yt(Gi(t)),Vm=t=>z7(y7(t));function xt(t,e,n,{strict:r}={}){return Er(t,{strict:!1})?H7(t,e,n,{strict:r}):W7(t,e,n,{strict:r})}function D5(t,e){if(typeof e=="number"&&e>0&&e>kt(t)-1)throw new w5({offset:e,position:"start",size:kt(t)})}function N5(t,e,n){if(typeof e=="number"&&typeof n=="number"&&kt(t)!==n-e)throw new w5({offset:n,position:"end",size:kt(t)})}function W7(t,e,n,{strict:r}={}){D5(t,e);const i=t.slice(e,n);return r&&N5(i,e,n),i}function H7(t,e,n,{strict:r}={}){D5(t,e);const i=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&N5(i,e,n),i}function Zc(t,e){if(t.length!==e.length)throw new s7({expectedLength:t.length,givenLength:e.length});const n=V7({params:t,values:e}),r=Zm(n);return r.length===0?"0x":r}function V7({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(qm({param:t[r],value:e[r]}));return n}function qm({param:t,value:e}){const n=Xf(t.type);if(n){const[r,i]=n;return Z7(e,{length:r,param:{...t,type:i}})}if(t.type==="tuple")return J7(e,{param:t});if(t.type==="address")return q7(e);if(t.type==="bool")return K7(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return Q7(e,{signed:r})}if(t.type.startsWith("bytes"))return G7(e,{param:t});if(t.type==="string")return Y7(e);throw new f7(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Zm(t){let e=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?e+=32:e+=kt(a)}const n=[],r=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(n.push(Se(e+i,{size:32})),r.push(a),i+=kt(a)):n.push(a)}return ti([...n,...r])}function q7(t){if(!Ki(t))throw new ql({address:t});return{dynamic:!1,encoded:zi(t.toLowerCase())}}function Z7(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new p7(t);if(!r&&t.length!==e)throw new i7({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let i=!1;const o=[];for(let s=0;s<t.length;s++){const a=qm({param:n,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=Zm(o);if(r){const a=Se(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?ti([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:ti(o.map(({encoded:s})=>s))}}function G7(t,{param:e}){const[,n]=e.type.split("bytes"),r=kt(t);if(!n){let i=t;return r%32!==0&&(i=zi(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:ti([zi(Se(r,{size:32})),i])}}if(r!==parseInt(n))throw new o7({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:zi(t,{dir:"right"})}}function K7(t){return{dynamic:!1,encoded:zi(v5(t))}}function Q7(t,{signed:e}){return{dynamic:!1,encoded:Se(t,{size:32,signed:e})}}function Y7(t){const e=Um(t),n=Math.ceil(kt(e)/32),r=[];for(let i=0;i<n;i++)r.push(zi(xt(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:ti([zi(Se(kt(e),{size:32})),...r])}}function J7(t,{param:e}){let n=!1;const r=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=Array.isArray(t)?i:o.name,a=qm({param:o,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?Zm(r):ti(r.map(({encoded:i})=>i))}}function Xf(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const X7=t=>Yt(Gi(t)),Gm=t=>xt(X7(k5(t)),0,4);function Gc({abi:t,args:e=[],name:n}){const r=Er(n,{strict:!1}),i=t.filter(s=>r?s.type==="function"?Gm(s)===n:s.type==="event"?Vm(s)===n:!1:"name"in s&&s.name===n);if(i.length===0)return;if(i.length===1)return i[0];let o;for(const s of i){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((l,c)=>{const u="inputs"in s&&s.inputs[c];return u?Kp(l,u):!1})){if(o&&"inputs"in o&&o.inputs){const l=R5(s.inputs,o.inputs,e);if(l)throw new u7({abiItem:s,type:l[0]},{abiItem:o,type:l[1]})}o=s}}return o||i[0]}function Kp(t,e){const n=typeof t,r=e.type;switch(r){case"address":return Ki(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>Kp(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(i=>Kp(i,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function R5(t,e,n){for(const r in t){const i=t[r],o=e[r];if(i.type==="tuple"&&o.type==="tuple"&&"components"in i&&"components"in o)return R5(i.components,o.components,n[r]);const s=[i.type,o.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")||s.includes("address")&&s.includes("bytes")?Ki(n[r]):!1)return s}}function Kc({abi:t,eventName:e,args:n}){var a;let r=t[0];if(e&&(r=Gc({abi:t,args:n,name:e}),!r))throw new pw(e,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new pw(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=ni(r),o=Vm(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(u=>n[u.name]))??[]:[];c.length>0&&(s=(l==null?void 0:l.map((u,f)=>Array.isArray(c[f])?c[f].map((h,g)=>bw({param:u,value:c[f][g]})):c[f]?bw({param:u,value:c[f]}):null))??[])}return[o,...s]}function bw({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return Yt(Gi(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new g7(t.type);return Zc([t],[e])}function e0(t,{method:e}){var r,i;const n={};return t.transport.type==="fallback"&&((i=(r=t.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&e===o&&(n[s]=l.request)})),o=>n[o]||t.request}async function M5(t,{address:e,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=e0(t,{method:"eth_newFilter"}),c=i?Kc({abi:n,args:r,eventName:i}):void 0,u=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Se(o):o,toBlock:typeof a=="bigint"?Se(a):a,topics:c}]});return{abi:n,args:r,eventName:i,id:u,request:l(u),strict:s,type:"event"}}function Fn(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function co({abi:t,args:e,functionName:n}){let r=t[0];if(n&&(r=Gc({abi:t,args:e,name:n}),!r))throw new Fd(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new Fd(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=ni(r),o=Gm(i),s="inputs"in r&&r.inputs?Zc(r.inputs,e??[]):void 0;return zm([o,s??"0x"])}const j5={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},e_={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},t_={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function Km(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=Yt(Kr(n),"bytes"),i=(e?n.substring(`${e}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function jn(t,e){if(!Ki(t))throw new ql({address:t});return Km(t,e)}function t0(t,e){if(e==="0x"&&t.length>0)throw new Jf;if(kt(e)&&kt(e)<32)throw new Wm({data:e,params:t,size:kt(e)});return n_({data:e,params:t})}function n_({data:t,params:e}){const n=[];let r=0;for(let i=0;i<e.length;i++){if(r>=kt(t))throw new Wm({data:t,params:e,size:kt(t)});const o=e[i],{consumed:s,value:a}=Gs({data:t,param:o,position:r});n.push(a),r+=s}return n}function Gs({data:t,param:e,position:n}){const r=Xf(e.type);if(r){const[o,s]=r;return i_(t,{length:o,param:{...e,type:s},position:n})}if(e.type==="tuple")return c_(t,{param:e,position:n});if(e.type==="string")return l_(t,{position:n});if(e.type.startsWith("bytes"))return s_(t,{param:e,position:n});const i=xt(t,n,n+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return a_(i,{param:e});if(e.type==="address")return r_(i);if(e.type==="bool")return o_(i);throw new h7(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function r_(t){return{consumed:32,value:Km(xt(t,-20))}}function i_(t,{param:e,length:n,position:r}){if(!n){const s=Vt(xt(t,r,r+32,{strict:!0})),a=Vt(xt(t,s,s+32,{strict:!0}));let l=0;const c=[];for(let u=0;u<a;++u){const f=Gs({data:xt(t,s+32),param:e,position:l});l+=f.consumed,c.push(f.value)}return{value:c,consumed:32}}if(zd(e)){const s=Xf(e.type),a=!(s!=null&&s[0]);let l=0;const c=[];for(let u=0;u<n;++u){const f=Vt(xt(t,r,r+32,{strict:!0})),h=Gs({data:xt(t,f),param:e,position:a?l:u*32});l+=h.consumed,c.push(h.value)}return{value:c,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=Gs({data:t,param:e,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function o_(t){return{consumed:32,value:WC(t)}}function s_(t,{param:e,position:n}){const[r,i]=e.type.split("bytes");if(!i){const s=Vt(xt(t,n,n+32,{strict:!0})),a=Vt(xt(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:xt(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:xt(t,n,n+parseInt(i),{strict:!0})}}function a_(t,{param:e}){const n=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Gf(t,{signed:n}):Vt(t,{signed:n})}}function l_(t,{position:e}){const n=Vt(xt(t,e,e+32,{strict:!0})),r=Vt(xt(t,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:b5(No(xt(t,n+32,n+32+r,{strict:!0})))}}function c_(t,{param:e,position:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(zd(e)){const s=Vt(xt(t,n,n+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const l=e.components[a],c=Gs({data:xt(t,s),param:l,position:o});o+=c.consumed,i[r?a:l==null?void 0:l.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],l=Gs({data:t,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function zd(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(zd);const n=Xf(t.type);return!!(n&&zd({...t,type:n[1]}))}function u_({abi:t,data:e}){const n=xt(e,0,4);if(n==="0x")throw new Jf;const i=[...t||[],e_,t_].find(o=>o.type==="error"&&n===Gm(ni(o)));if(!i)throw new $5(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?t0(i.inputs,xt(e,4)):void 0,errorName:i.name}}const Xt=(t,e,n)=>JSON.stringify(t,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(r,o):o},n);function L5({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?Xt(e[o]):e[o]}`).join(", ")})`}function n0(t,e="wei"){return Ld(t,S5[e])}function Qc(t){const e=Object.entries(t).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=e.reduce((r,[i])=>Math.max(r,i.length),0);return e.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class d_ extends X{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class f_ extends X{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Qc(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class h_ extends X{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:f,value:h}){var y;const g=Qc({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:f,value:typeof h<"u"&&`${n0(h)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${mn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${mn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${mn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class B5 extends X{constructor({blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class U5 extends X{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class p_ extends X{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class F5 extends X{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:f,value:h}){var C;const g=n?Fn(n):void 0,y=Qc({from:g==null?void 0:g.address,to:f,value:typeof h<"u"&&`${n0(h)} ${((C=i==null?void 0:i.nativeCurrency)==null?void 0:C.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${mn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${mn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${mn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class Qm extends X{constructor(e,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=Gc({abi:n,args:r,name:s}),c=l?L5({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?ni(l,{includeName:!0}):void 0,f=Qc({address:i&&IC(i),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}}class Qp extends X{constructor({abi:e,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=u_({abi:e,data:n});const{abiItem:u,errorName:f,args:h}=s;if(f==="Error")l=h[0];else if(f==="Panic"){const[g]=h;l=j5[g]}else{const g=u?ni(u,{includeName:!0}):void 0,y=u&&h?L5({abiItem:u,args:h,includeFunctionName:!1,includeName:!1}):void 0;a=[g?`Error: ${g}`:"",y&&y!=="()"?`       ${[...Array((f==null?void 0:f.length)??0).keys()].map(()=>" ").join("")}${y}`:""]}}catch(u){o=u}else i&&(l=i);let c;o instanceof $5&&(c=o.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class m_ extends X{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Ym extends X{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class xl extends X{constructor({body:e,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${Zf(o)}`,e&&`Request body: ${Xt(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class g_ extends X{constructor({body:e,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Zf(r)}`,`Request body: ${Xt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class Jm extends X{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Zf(r)}`,`Request body: ${Xt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class Yp extends X{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Zf(n)}`,`Request body: ${Xt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const w_=-1;class wn extends X{constructor(e,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof Jm?e.code:n??w_}}class Da extends wn{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class Zl extends wn{constructor(e){super(e,{code:Zl.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Zl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Gl extends wn{constructor(e){super(e,{code:Gl.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Gl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Kl extends wn{constructor(e){super(e,{code:Kl.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Kl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Ql extends wn{constructor(e){super(e,{code:Ql.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Ql,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class sa extends wn{constructor(e){super(e,{code:sa.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(sa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Wo extends wn{constructor(e){super(e,{code:Wo.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Wo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Yl extends wn{constructor(e){super(e,{code:Yl.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Yl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class aa extends wn{constructor(e){super(e,{code:aa.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(aa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Jl extends wn{constructor(e){super(e,{code:Jl.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Jl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Xl extends wn{constructor(e){super(e,{code:Xl.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Xl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class ec extends wn{constructor(e){super(e,{code:ec.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(ec,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class tc extends wn{constructor(e){super(e,{code:tc.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(tc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class cn extends Da{constructor(e){super(e,{code:cn.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(cn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class nc extends Da{constructor(e){super(e,{code:nc.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(nc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class rc extends Da{constructor(e){super(e,{code:rc.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(rc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class ic extends Da{constructor(e){super(e,{code:ic.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(ic,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class oc extends Da{constructor(e){super(e,{code:oc.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(oc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class ir extends Da{constructor(e){super(e,{code:ir.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(ir,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class y_ extends wn{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const v_=3;function sc(t,{abi:e,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=t instanceof Ym?t:t instanceof X?t.walk(h=>"data"in h)||t.walk():{},f=t instanceof Jf?new m_({functionName:o}):[v_,sa.code].includes(a)&&(l||c||u)?new Qp({abi:e,data:typeof l=="object"?l.data:l,functionName:o,message:u??c}):t;return new Qm(f,{abi:e,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class Na extends X{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class b_ extends X{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:f,value:h}){var y;const g=Qc({from:n==null?void 0:n.address,to:f,value:typeof h<"u"&&`${n0(h)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${mn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${mn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${mn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function Xm(t,e){const n=(t.details||"").toLowerCase(),r=t.walk(i=>i.code===Fs.code);return r instanceof X?new Fs({cause:t,message:r.details}):Fs.nodeMessage.test(n)?new Fs({cause:t,message:t.details}):Bd.nodeMessage.test(n)?new Bd({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Up.nodeMessage.test(n)?new Up({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Fp.nodeMessage.test(n)?new Fp({cause:t,nonce:e==null?void 0:e.nonce}):zp.nodeMessage.test(n)?new zp({cause:t,nonce:e==null?void 0:e.nonce}):Wp.nodeMessage.test(n)?new Wp({cause:t,nonce:e==null?void 0:e.nonce}):Hp.nodeMessage.test(n)?new Hp({cause:t}):Vp.nodeMessage.test(n)?new Vp({cause:t,gas:e==null?void 0:e.gas}):qp.nodeMessage.test(n)?new qp({cause:t,gas:e==null?void 0:e.gas}):Zp.nodeMessage.test(n)?new Zp({cause:t}):Ud.nodeMessage.test(n)?new Ud({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new Qf({cause:t})}function x_(t,{docsPath:e,...n}){const r=(()=>{const i=Xm(t,n);return i instanceof Qf?t:i})();return new b_(r,{docsPath:e,...n})}function eg(t,{format:e}){if(!e)return{};const n={};function r(o){const s=Object.keys(o);for(const a of s)a in t&&(n[a]=t[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&r(o[a])}const i=e(t||{});return r(i),n}function Yc(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=t,s=e?Fn(e):void 0;if(s&&!Ki(s.address))throw new ql({address:s.address});if(o&&!Ki(o))throw new ql({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new d_;if(r&&r>2n**256n-1n)throw new Bd({maxFeePerGas:r});if(i&&r&&i>r)throw new Ud({maxFeePerGas:r,maxPriorityFeePerGas:i})}class C_ extends X{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class tg extends X{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class __ extends X{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${mn(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class z5 extends X{constructor({blockHash:e,blockNumber:n}){let r="Block";e&&(r=`Block at hash "${e}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function Qi(t,{blockHash:e,blockNumber:n,blockTag:r,includeTransactions:i}={}){var u,f,h;const o=r??"latest",s=i??!1,a=n!==void 0?Se(n):void 0;let l=null;if(e?l=await t.request({method:"eth_getBlockByHash",params:[e,s]}):l=await t.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new z5({blockHash:e,blockNumber:n});return(((h=(f=(u=t.chain)==null?void 0:u.formatters)==null?void 0:f.block)==null?void 0:h.format)||_5)(l)}async function ng(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function E_(t,e){return W5(t,e)}async function W5(t,e){var o,s,a;const{block:n,chain:r=t.chain,request:i}=e||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await we(t,Qi,"getBlock")({});return r.fees.defaultPriorityFee({block:l,client:t,request:i})}if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await t.request({method:"eth_maxPriorityFeePerGas"});return Gf(l)}catch{const[l,c]=await Promise.all([n?Promise.resolve(n):we(t,Qi,"getBlock")({}),we(t,ng,"getGasPrice")({})]);if(typeof l.baseFeePerGas!="bigint")throw new tg;const u=c-l.baseFeePerGas;return u<0n?0n:u}}async function S_(t,e){return Jp(t,e)}async function Jp(t,e){var h,g;const{block:n,chain:r=t.chain,request:i,type:o="eip1559"}=e||{},s=await(async()=>{var y,C;return typeof((y=r==null?void 0:r.fees)==null?void 0:y.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:t,request:i}):((C=r==null?void 0:r.fees)==null?void 0:C.baseFeeMultiplier)??1.2})();if(s<1)throw new C_;const l=10**(((h=s.toString().split(".")[1])==null?void 0:h.length)??0),c=y=>y*BigInt(Math.ceil(s*l))/BigInt(l),u=n||await we(t,Qi,"getBlock")({});if(typeof((g=r==null?void 0:r.fees)==null?void 0:g.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:t,multiply:c,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new tg;const y=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await W5(t,{block:u,chain:r,request:i}),C=c(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??C+y,maxPriorityFeePerGas:y}}return{gasPrice:(i==null?void 0:i.gasPrice)??c(await we(t,ng,"getGasPrice")({}))}}async function H5(t,{address:e,blockTag:n="latest",blockNumber:r}){const i=await t.request({method:"eth_getTransactionCount",params:[e,r?Se(r):n]});return Vt(i)}function $_(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new f_({transaction:t})}async function r0(t,e){const{account:n=t.account,chain:r,gas:i,nonce:o,type:s}=e;if(!n)throw new Na;const a=Fn(n),l=await we(t,Qi,"getBlock")({blockTag:"latest"}),c={...e,from:a.address};if(typeof o>"u"&&(c.nonce=await we(t,H5,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{c.type=$_(c)}catch{c.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(c.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:f}=await Jp(t,{block:l,chain:r,request:c});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<f)throw new __({maxPriorityFeePerGas:f});c.maxPriorityFeePerGas=f,c.maxFeePerGas=u}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new tg;const{gasPrice:u}=await Jp(t,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=u}return typeof i>"u"&&(c.gas=await we(t,rg,"estimateGas")({...c,account:{address:a.address,type:"json-rpc"}})),Yc(c),c}async function rg(t,e){var i,o,s;const n=e.account??t.account;if(!n)throw new Na({docsPath:"/docs/actions/public/estimateGas"});const r=Fn(n);try{const{accessList:a,blockNumber:l,blockTag:c,data:u,gas:f,gasPrice:h,maxFeePerGas:g,maxPriorityFeePerGas:y,nonce:C,to:E,value:b,...m}=r.type==="local"?await r0(t,e):e,x=(l?Se(l):void 0)||c;Yc(e);const _=(s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,d=(_||Kf)({...eg(m,{format:_}),from:r.address,accessList:a,data:u,gas:f,gasPrice:h,maxFeePerGas:g,maxPriorityFeePerGas:y,nonce:C,to:E,value:b}),$=await t.request({method:"eth_estimateGas",params:x?[d,x]:[d]});return BigInt($)}catch(a){throw x_(a,{...e,account:r,chain:t.chain})}}async function k_(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=co({abi:e,args:r,functionName:i});try{return await we(t,rg,"estimateGas")({data:s,to:n,...o})}catch(a){const l=o.account?Fn(o.account):void 0;throw sc(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const xw="/docs/contract/decodeEventLog";function Jc({abi:t,data:e,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new a7({docsPath:xw});const a=t.find(y=>y.type==="event"&&o===Vm(ni(y)));if(!(a&&"name"in a)||a.type!=="event")throw new l7(o,{docsPath:xw});const{name:l,inputs:c}=a,u=c==null?void 0:c.some(y=>!("name"in y&&y.name));let f=u?[]:{};const h=c.filter(y=>"indexed"in y&&y.indexed);for(let y=0;y<h.length;y++){const C=h[y],E=s[y];if(!E)throw new Ia({abiItem:a,param:C});f[C.name||y]=P_({param:C,value:E})}const g=c.filter(y=>!("indexed"in y&&y.indexed));if(g.length>0){if(e&&e!=="0x")try{const y=t0(g,e);if(y)if(u)f=[...f,...y];else for(let C=0;C<g.length;C++)f[g[C].name]=y[C]}catch(y){if(i)throw y instanceof Wm?new zo({abiItem:a,data:y.data,params:y.params,size:y.size}):y}else if(i)throw new zo({abiItem:a,data:"0x",params:g,size:0})}return{eventName:l,args:Object.values(f).length>0?f:void 0}}function P_({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(t0([t],e)||[])[0]}async function ig(t,{address:e,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const c=l??!1,u=s??(o?[o]:void 0);let f=[];u&&(f=[u.flatMap(g=>Kc({abi:[g],eventName:g.name,args:a}))],o&&(f=f[0]));let h;return n?h=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,blockHash:n}]}):h=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,fromBlock:typeof r=="bigint"?Se(r):r,toBlock:typeof i=="bigint"?Se(i):i}]}),h.map(g=>{var y;try{const{eventName:C,args:E}=u?Jc({abi:u,data:g.data,topics:g.topics,strict:c}):{eventName:void 0,args:void 0};return rr(g,{args:E,eventName:C})}catch(C){let E,b;if(C instanceof zo||C instanceof Ia){if(c)return;E=C.abiItem.name,b=(y=C.abiItem.inputs)==null?void 0:y.some(m=>!("name"in m&&m.name))}return rr(g,{args:b?[]:{},eventName:E})}}).filter(Boolean)}async function V5(t,{abi:e,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const c=o?Gc({abi:e,name:o}):void 0,u=c?void 0:e.filter(f=>f.type==="event");return we(t,ig,"getLogs")({address:n,args:r,blockHash:i,event:c,events:u,fromBlock:s,toBlock:a,strict:l})}const fh="/docs/contract/decodeFunctionResult";function Ra({abi:t,args:e,functionName:n,data:r}){let i=t[0];if(n&&(i=Gc({abi:t,args:e,name:n}),!i))throw new Fd(n,{docsPath:fh});if(i.type!=="function")throw new Fd(void 0,{docsPath:fh});if(!i.outputs)throw new c7(i.name,{docsPath:fh});const o=t0(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const Xp=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],q5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],Z5=[...q5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],T_=[...q5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Cw=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],_w=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],A_=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],O_="0x82ad56cb";function Ma({blockNumber:t,chain:e,contract:n}){var i;const r=(i=e==null?void 0:e.contracts)==null?void 0:i[n];if(!r)throw new Bp({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Bp({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function I_(t,{docsPath:e,...n}){const r=(()=>{const i=Xm(t,n);return i instanceof Qf?t:i})();return new F5(r,{docsPath:e,...n})}const hh=new Map;function og({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:i}){const o=async()=>{const u=l();s();const f=u.map(({args:h})=>h);f.length!==0&&t(f).then(h=>{var g;i&&Array.isArray(h)&&h.sort(i);for(let y=0;y<u.length;y++){const{pendingPromise:C}=u[y];(g=C.resolve)==null||g.call(C,[h[y],h])}}).catch(h=>{var g;for(let y=0;y<u.length;y++){const{pendingPromise:C}=u[y];(g=C.reject)==null||g.call(C,h)}})},s=()=>hh.delete(e),a=()=>l().map(({args:u})=>u),l=()=>hh.get(e)||[],c=u=>hh.set(e,[...l(),u]);return{flush:s,async schedule(u){const f={},h=new Promise((C,E)=>{f.resolve=C,f.reject=E});return(n==null?void 0:n([...a(),u]))&&o(),l().length>0?(c({args:u,pendingPromise:f}),h):(c({args:u,pendingPromise:f}),setTimeout(o,r),h)}}}async function i0(t,e){var b,m,v,x;const{account:n=t.account,batch:r=!!((b=t.batch)!=null&&b.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:h,to:g,value:y,...C}=e,E=n?Fn(n):void 0;try{Yc(e);const S=(i?Se(i):void 0)||o,d=(x=(v=(m=t.chain)==null?void 0:m.formatters)==null?void 0:v.transactionRequest)==null?void 0:x.format,O=(d||Kf)({...eg(C,{format:d}),from:E==null?void 0:E.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:h,to:g,value:y});if(r&&D_({request:O}))try{return await N_(t,{...O,blockNumber:i,blockTag:o})}catch(R){if(!(R instanceof E5)&&!(R instanceof Bp))throw R}const I=await t.request({method:"eth_call",params:S?[O,S]:[O]});return I==="0x"?{data:void 0}:{data:I}}catch(_){const S=R_(_),{offchainLookup:d,offchainLookupSignature:$}=await Fo(()=>import("./ccip-ry4E9GBO.js"),__vite__mapDeps([]));if((S==null?void 0:S.slice(0,10))===$&&g)return{data:await d(t,{data:S,to:g})};throw I_(_,{...e,account:E,chain:t.chain})}}function D_({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(O_)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function N_(t,e){var C;const{batchSize:n=1024,wait:r=0}=typeof((C=t.batch)==null?void 0:C.multicall)=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=e;let c=a;if(!c){if(!t.chain)throw new E5;c=Ma({blockNumber:i,chain:t.chain,contract:"multicall3"})}const f=(i?Se(i):void 0)||o,{schedule:h}=og({id:`${t.uid}.${f}`,wait:r,shouldSplitBatch(E){return E.reduce((m,{data:v})=>m+(v.length-2),0)>n*2},fn:async E=>{const b=E.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),m=co({abi:Xp,args:[b],functionName:"aggregate3"}),v=await t.request({method:"eth_call",params:[{data:m,to:c},f]});return Ra({abi:Xp,args:[b],functionName:"aggregate3",data:v||"0x"})}}),[{returnData:g,success:y}]=await h({data:s,to:l});if(!y)throw new Ym({data:g});return g==="0x"?{data:void 0}:{data:g}}function R_(t){if(!(t instanceof X))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function Yi(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=co({abi:e,args:r,functionName:i});try{const{data:a}=await we(t,i0,"call")({data:s,to:n,...o});return Ra({abi:e,args:r,functionName:i,data:a||"0x"})}catch(a){throw sc(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function M_(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?Fn(s.account):void 0,l=co({abi:e,args:r,functionName:o});try{const{data:c}=await we(t,i0,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:Ra({abi:e,args:r,functionName:o,data:c||"0x"}),request:{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(c){throw sc(c,{abi:e,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const ph=new Map,Ew=new Map;let j_=0;function ja(t,e,n){const r=++j_,i=()=>ph.get(t)||[],o=()=>{const u=i();ph.set(t,u.filter(f=>f.id!==r))},s=()=>{const u=Ew.get(t);i().length===1&&u&&u(),o()},a=i();if(ph.set(t,[...a,{id:r,fns:e}]),a&&a.length>0)return s;const l={};for(const u in e)l[u]=(...f)=>{var g,y;const h=i();if(h.length!==0)for(const C of h)(y=(g=C.fns)[u])==null||y.call(g,...f)};const c=n(l);return typeof c=="function"&&Ew.set(t,c),s}async function Wd(t){return new Promise(e=>setTimeout(e,t))}function Xc(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;e&&(a=await t({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await Wd(l);const c=async()=>{i&&(await t({unpoll:o}),await Wd(r),c())};c()})(),o}const L_=new Map,B_=new Map;function U_(t){const e=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=e(t,L_),r=e(t,B_);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function F_(t,{cacheKey:e,cacheTime:n=1/0}){const r=U_(e),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=t(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const z_=t=>`blockNumber.${t}`;async function eu(t,{cacheTime:e=t.cacheTime,maxAge:n}={}){const r=await F_(()=>t.request({method:"eth_blockNumber"}),{cacheKey:z_(t.uid),cacheTime:n??e});return BigInt(r)}async function o0(t,{filter:e}){const n="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in e&&e.abi?Jc({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return rr(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof zo||s instanceof Ia){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return rr(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function s0(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function W_(t,{abi:e,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){return(typeof l<"u"?l:t.transport.type!=="webSocket")?(()=>{const y=Xt(["watchContractEvent",n,r,i,t.uid,o,c]),C=u??!1;return ja(y,{onLogs:a,onError:s},E=>{let b,m,v=!1;const x=Xc(async()=>{var _;if(!v){try{m=await we(t,M5,"createContractEventFilter")({abi:e,address:n,args:r,eventName:o,strict:C})}catch{}v=!0;return}try{let S;if(m)S=await we(t,o0,"getFilterChanges")({filter:m});else{const d=await we(t,eu,"getBlockNumber")({});b&&b!==d?S=await we(t,V5,"getContractEvents")({abi:e,address:n,args:r,eventName:o,fromBlock:b+1n,toBlock:d,strict:C}):S=[],b=d}if(S.length===0)return;if(i)E.onLogs(S);else for(const d of S)E.onLogs([d])}catch(S){m&&S instanceof Wo&&(v=!1),(_=E.onError)==null||_.call(E,S)}},{emitOnBegin:!0,interval:c});return async()=>{m&&await we(t,s0,"uninstallFilter")({filter:m}),x()}})})():(()=>{let y=!0,C=()=>y=!1;return(async()=>{try{const E=o?Kc({abi:e,eventName:o,args:r}):[],{unsubscribe:b}=await t.transport.subscribe({params:["logs",{address:n,topics:E}],onData(m){var x;if(!y)return;const v=m.result;try{const{eventName:_,args:S}=Jc({abi:e,data:v.data,topics:v.topics,strict:u}),d=rr(v,{args:S,eventName:_});a([d])}catch(_){let S,d;if(_ instanceof zo||_ instanceof Ia){if(u)return;S=_.abiItem.name,d=(x=_.abiItem.inputs)==null?void 0:x.some(O=>!("name"in O&&O.name))}const $=rr(v,{args:d?[]:{},eventName:S});a([$])}},onError(m){s==null||s(m)}});C=b,y||C()}catch(E){s==null||s(E)}})(),C})()}function G5({chain:t,currentChainId:e}){if(!t)throw new KC;if(e!==t.id)throw new GC({chain:t,currentChainId:e})}function H_(t,{docsPath:e,...n}){const r=(()=>{const i=Xm(t,n);return i instanceof Qf?t:i})();return new h_(r,{docsPath:e,...n})}async function ac(t){const e=await t.request({method:"eth_chainId"});return Vt(e)}async function sg(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function ag(t,e){var C,E,b,m;const{account:n=t.account,chain:r=t.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:f,value:h,...g}=e;if(!n)throw new Na({docsPath:"/docs/actions/wallet/sendTransaction"});const y=Fn(n);try{Yc(e);let v;if(r!==null&&(v=await we(t,ac,"getChainId")({}),G5({currentChainId:v,chain:r})),y.type==="local"){const d=await we(t,r0,"prepareTransactionRequest")({account:y,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:f,value:h,...g});v||(v=await we(t,ac,"getChainId")({}));const $=(C=r==null?void 0:r.serializers)==null?void 0:C.transaction,O=await y.signTransaction({...d,chainId:v},{serializer:$});return await we(t,sg,"sendRawTransaction")({serializedTransaction:O})}const x=(m=(b=(E=t.chain)==null?void 0:E.formatters)==null?void 0:b.transactionRequest)==null?void 0:m.format,S=(x||Kf)({...eg(g,{format:x}),accessList:i,data:o,from:y.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:f,value:h});return await t.request({method:"eth_sendTransaction",params:[S]})}catch(v){throw H_(v,{...e,account:y,chain:e.chain||void 0})}}async function V_(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=co({abi:e,args:r,functionName:o});return await we(t,ag,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function q_(t,{chain:e}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:Se(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const e1=256;let Du=e1,Nu;function Z_(t=11){if(!Nu||Du+t>e1*2){Nu="",Du=0;for(let e=0;e<e1;e++)Nu+=(256+Math.random()*256|0).toString(16).substring(1)}return Nu.substring(Du,Du+++t)}function K5(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=t,a=t.chain,l=t.account?Fn(t.account):void 0,{config:c,request:u,value:f}=t.transport({chain:a,pollingInterval:o}),h={...c,...f},g={account:l,batch:e,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:u,transport:h,type:s,uid:Z_()};function y(C){return E=>{const b=E(C);for(const v in g)delete b[v];const m={...C,...b};return Object.assign(m,{extend:y(m)})}}return Object.assign(g,{extend:y(g)})}function t1(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof e=="function"?e({count:a,error:c}):e;u&&await Wd(u),s({count:a+1})};try{const c=await t();i(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});o(c)}};s()})}const Q5=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof xl&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function G_(t,{retryDelay:e=150,retryCount:n=3}={}){return async r=>t1(async()=>{try{return await t(r)}catch(i){const o=i;switch(o.code){case Zl.code:throw new Zl(o);case Gl.code:throw new Gl(o);case Kl.code:throw new Kl(o);case Ql.code:throw new Ql(o);case sa.code:throw new sa(o);case Wo.code:throw new Wo(o);case Yl.code:throw new Yl(o);case aa.code:throw new aa(o);case Jl.code:throw new Jl(o);case Xl.code:throw new Xl(o);case ec.code:throw new ec(o);case tc.code:throw new tc(o);case cn.code:throw new cn(o);case nc.code:throw new nc(o);case rc.code:throw new rc(o);case ic.code:throw new ic(o);case oc.code:throw new oc(o);case ir.code:throw new ir(o);case 5e3:throw new cn(o);default:throw i instanceof X?i:new y_(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof xl){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*e},retryCount:n,shouldRetry:({error:i})=>!Q5(i)})}function a0({key:t,name:e,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:G_(n,{retryCount:r,retryDelay:i}),value:a}}function l0(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=e;return({retryCount:o})=>a0({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??o,retryDelay:i,type:"custom"})}function Sw(t,e={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=e;return({chain:a,pollingInterval:l=4e3,timeout:c})=>{let u=t,f=()=>{};const h=a0({key:n,name:r,async request({method:g,params:y}){const C=async(E=0)=>{const b=u[E]({chain:a,retryCount:0,timeout:c});try{const m=await b.request({method:g,params:y});return f({method:g,params:y,response:m,transport:b,status:"success"}),m}catch(m){if(f({error:m,method:g,params:y,transport:b,status:"error"}),Q5(m)||E===u.length-1)throw m;return C(E+1)}};return C()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:g=>f=g,transports:u.map(g=>g({chain:a,retryCount:0}))});if(i){const g=typeof i=="object"?i:{};K_({chain:a,interval:g.interval??l,onTransports:y=>u=y,sampleCount:g.sampleCount,timeout:g.timeout,transports:u,weights:g.weights})}return h}}function K_({chain:t,interval:e=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,c=[],u=async()=>{const f=await Promise.all(o.map(async y=>{const C=y({chain:t,retryCount:0,timeout:i}),E=Date.now();let b,m;try{await C.request({method:"net_listening"}),m=1}catch{m=0}finally{b=Date.now()}return{latency:b-E,success:m}}));c.push(f),c.length>r&&c.shift();const h=Math.max(...c.map(y=>Math.max(...y.map(({latency:C})=>C)))),g=o.map((y,C)=>{const E=c.map(_=>_[C].latency),m=1-E.reduce((_,S)=>_+S,0)/E.length/h,v=c.map(_=>_[C].success),x=v.reduce((_,S)=>_+S,0)/v.length;return x===0?[0,C]:[l*m+a*x,C]}).sort((y,C)=>C[0]-y[0]);n(g.map(([,y])=>o[y])),await Wd(e),u()};u()}class Y5 extends X{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function Q_(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const $w=Q_();function J5(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(e)},n)),i(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(e),o(a)}finally{clearTimeout(s)}})()})}let n1=0;async function Y_(t,{body:e,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await J5(async({signal:u})=>await fetch(t,{...n,body:Array.isArray(e)?Xt(e.map(h=>({jsonrpc:"2.0",id:h.id??n1++,...h}))):Xt({jsonrpc:"2.0",id:e.id??n1++,...e}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new Yp({body:e,url:t}),timeout:r,signal:!0});let c;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?c=await l.json():c=await l.text(),!l.ok)throw new xl({body:e,details:Xt(c.error)||l.statusText,headers:l.headers,status:l.status,url:t});return c}catch(l){throw l instanceof xl||l instanceof Yp?l:new xl({body:e,details:l.message,url:t})}}const mh=new Map;async function gh(t){let e=mh.get(t);if(e)return e;const{schedule:n}=og({id:t,fn:async()=>{const o=new $w(t),s=new Map,a=new Map,l=({data:u})=>{const f=JSON.parse(u),h=f.method==="eth_subscription",g=h?f.params.subscription:f.id,y=h?a:s,C=y.get(g);C&&C({data:u}),h||y.delete(g)},c=()=>{mh.delete(t),o.removeEventListener("close",c),o.removeEventListener("message",l)};return o.addEventListener("close",c),o.addEventListener("message",l),o.readyState===$w.CONNECTING&&await new Promise((u,f)=>{o&&(o.onopen=u,o.onerror=f)}),e=Object.assign(o,{requests:s,subscriptions:a}),mh.set(t,e),[e]}}),[r,[i]]=await n();return i}function J_(t,{body:e,onResponse:n}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new g_({body:e,url:t.url,details:"Socket is closed."});const r=n1++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,i),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(r,i),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:r})),t}async function X_(t,{body:e,timeout:n=1e4}){return J5(()=>new Promise(r=>Ks.webSocket(t,{body:e,onResponse:r})),{errorInstance:new Yp({body:e,url:t.url}),timeout:n})}const Ks={http:Y_,webSocket:J_,webSocketAsync:X_};function eE(t,e={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:f=0}=typeof n=="object"?n:{},h=e.retryCount??l,g=c??e.timeout??1e4,y=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!y)throw new Y5;return a0({key:i,name:o,async request({method:C,params:E}){const b={method:C,params:E},{schedule:m}=og({id:`${t}`,wait:f,shouldSplitBatch(S){return S.length>u},fn:S=>Ks.http(y,{body:S,fetchOptions:r,timeout:g}),sort:(S,d)=>S.id-d.id}),v=async S=>n?m(S):[await Ks.http(y,{body:S,fetchOptions:r,timeout:g})],[{error:x,result:_}]=await v(b);if(x)throw new Jm({body:b,error:x,url:y});return _},retryCount:h,retryDelay:s,timeout:g,type:"http"},{fetchOptions:r,url:t})}}function lg(t,e){var r,i,o;if(!(t instanceof X))return!1;const n=t.walk(s=>s instanceof Qp);return n instanceof Qp?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===j5[50]):!1}function X5(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Er(e)?e:null}function id(t){let e=new Uint8Array(32).fill(0);if(!t)return Vl(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const i=X5(n[r]),o=i?Gi(i):Yt(Kr(n[r]),"bytes");e=Yt(ti([e,o]),"bytes")}return Vl(e)}function tE(t){return`[${t.slice(2)}]`}function nE(t){const e=new Uint8Array(32).fill(0);return t?X5(t)||Yt(Kr(t)):Vl(e)}function c0(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(Kr(e).byteLength+2);let r=0;const i=e.split(".");for(let o=0;o<i.length;o++){let s=Kr(i[o]);s.byteLength>255&&(s=Kr(tE(nE(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function rE(t,{blockNumber:e,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Ma({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=co({abi:_w,functionName:"addr",...r!=null?{args:[id(i),BigInt(r)]}:{args:[id(i)]}}),l=await we(t,Yi,"readContract")({address:s,abi:Z5,functionName:"resolve",args:[ci(c0(i)),a],blockNumber:e,blockTag:n});if(l[0]==="0x")return null;const c=Ra({abi:_w,args:r!=null?[id(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return c==="0x"||No(c)==="0x00"?null:c}catch(a){if(lg(a,"resolve"))return null;throw a}}class iE extends X{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Xa extends X{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class cg extends X{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class oE extends X{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const sE=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,aE=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,lE=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,cE=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function uE(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function kw(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function eb({uri:t,gatewayUrls:e}){const n=lE.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=kw(e==null?void 0:e.ipfs,"https://ipfs.io"),i=kw(e==null?void 0:e.arweave,"https://arweave.net"),o=t.match(sE),{protocol:s,subpath:a,target:l,subtarget:c=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",f=s==="ipfs:/"||a==="ipfs/"||aE.test(t);if(t.startsWith("http")&&!u&&!f){let g=t;return e!=null&&e.arweave&&(g=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:g,isOnChain:!1,isEncoded:!1}}if((u||f)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=t.replace(cE,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new cg({uri:t})}function tb(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new iE({data:t});return t.image||t.image_url||t.image_data}async function dE({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(i=>i.json());return await ug({gatewayUrls:t,uri:tb(n)})}catch{throw new cg({uri:e})}}async function ug({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=eb({uri:e,gatewayUrls:t});if(r||await uE(n))return n;throw new cg({uri:e})}function fE(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=e.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new Xa({reason:"Only EIP-155 supported"});if(!s)throw new Xa({reason:"Chain ID not found"});if(!l)throw new Xa({reason:"Contract address not found"});if(!i)throw new Xa({reason:"Token ID not found"});if(!a)throw new Xa({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function hE(t,{nft:e}){if(e.namespace==="erc721")return Yi(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return Yi(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new oE({namespace:e.namespace})}async function pE(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?mE(t,{gatewayUrls:e,record:n}):ug({uri:n,gatewayUrls:e})}async function mE(t,{gatewayUrls:e,record:n}){const r=fE(n),i=await hE(t,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=eb({uri:i,gatewayUrls:e});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const c=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(c);return ug({uri:tb(u),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),dE({gatewayUrls:e,uri:o.replace(/(?:0x)?{id}/,l)})}async function nb(t,{blockNumber:e,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Ma({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await we(t,Yi,"readContract")({address:s,abi:Z5,functionName:"resolve",args:[ci(c0(r)),co({abi:Cw,functionName:"text",args:[id(r),i]})],blockNumber:e,blockTag:n});if(a[0]==="0x")return null;const l=Ra({abi:Cw,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(lg(a,"resolve"))return null;throw a}}async function gE(t,{blockNumber:e,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await we(t,nb,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await pE(t,{record:s,gatewayUrls:r})}catch{return null}}async function wE(t,{address:e,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Ma({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const[a,l]=await we(t,Yi,"readContract")({address:o,abi:T_,functionName:"reverse",args:[ci(c0(s))],blockNumber:n,blockTag:r});return e.toLowerCase()!==l.toLowerCase()?null:a}catch(a){if(lg(a,"reverse"))return null;throw a}}async function yE(t,{blockNumber:e,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Ma({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await we(t,Yi,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[ci(c0(r))],blockNumber:e,blockTag:n});return s}async function vE(t){const e=e0(t,{method:"eth_newBlockFilter"}),n=await t.request({method:"eth_newBlockFilter"});return{id:n,request:e(n),type:"block"}}async function rb(t,{address:e,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),c=e0(t,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(h=>Kc({abi:[h],eventName:h.name,args:n}))],r&&(u=u[0]));const f=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Se(o):o,toBlock:typeof a=="bigint"?Se(a):a,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:f,request:c(f),strict:s,toBlock:a,type:"event"}}async function ib(t){const e=e0(t,{method:"eth_newPendingTransactionFilter"}),n=await t.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:e(n),type:"transaction"}}async function bE(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n?Se(n):void 0,o=await t.request({method:"eth_getBalance",params:[e,i||r]});return BigInt(o)}async function xE(t,{blockHash:e,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?Se(n):void 0;let o;return e?o=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):o=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),Vt(o)}async function CE(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?Se(n):void 0,o=await t.request({method:"eth_getCode",params:[e,i||r]});if(o!=="0x")return o}function _E(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(n=>n.map(r=>BigInt(r)))}}async function EE(t,{blockCount:e,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?Se(n):void 0,s=await t.request({method:"eth_feeHistory",params:[Se(e),o||r,i]});return _E(s)}async function SE(t,{filter:e}){const n=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in e&&e.abi?Jc({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return rr(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof zo||s instanceof Ia){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return rr(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const $E=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,kE=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function PE({domain:t,message:e,primaryType:n,types:r}){const i=typeof t>"u"?{}:t,o={EIP712Domain:ub({domain:i}),...r};cb({domain:i,message:e,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(TE({domain:i,types:o})),n!=="EIP712Domain"&&s.push(ob({data:e,primaryType:n,types:o})),Yt(ti(s))}function TE({domain:t,types:e}){return ob({data:t,primaryType:"EIP712Domain",types:e})}function ob({data:t,primaryType:e,types:n}){const r=sb({data:t,primaryType:e,types:n});return Yt(r)}function sb({data:t,primaryType:e,types:n}){const r=[{type:"bytes32"}],i=[AE({primaryType:e,types:n})];for(const o of n[e]){const[s,a]=lb({types:n,name:o.name,type:o.type,value:t[o.name]});r.push(s),i.push(a)}return Zc(r,i)}function AE({primaryType:t,types:e}){const n=ci(OE({primaryType:t,types:e}));return Yt(n)}function OE({primaryType:t,types:e}){let n="";const r=ab({primaryType:t,types:e});r.delete(t);const i=[t,...Array.from(r).sort()];for(const o of i)n+=`${o}(${e[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function ab({primaryType:t,types:e},n=new Set){const r=t.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||e[i]===void 0)return n;n.add(i);for(const o of e[i])ab({primaryType:o.type,types:e},n);return n}function lb({types:t,name:e,type:n,value:r}){if(t[n]!==void 0)return[{type:"bytes32"},Yt(sb({data:r,primaryType:n,types:t}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Yt(r)];if(n==="string")return[{type:"bytes32"},Yt(ci(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>lb({name:e,type:i,types:t,value:s}));return[{type:"bytes32"},Yt(Zc(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function cb({domain:t,message:e,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:c,type:u}=l,f=u,h=a[c],g=f.match(kE);if(g&&(typeof h=="number"||typeof h=="bigint")){const[E,b,m]=g;Se(h,{signed:b==="int",size:parseInt(m)/8})}if(f==="address"&&typeof h=="string"&&!Ki(h))throw new ql({address:h});const y=f.match($E);if(y){const[E,b]=y;if(b&&kt(h)!==parseInt(b))throw new d7({expectedSize:parseInt(b),givenSize:kt(h)})}const C=i[f];C&&o(C,h)}};if(i.EIP712Domain&&t&&o(i.EIP712Domain,t),n!=="EIP712Domain"){const s=i[n];o(s,e)}}function ub({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const wh="/docs/contract/encodeDeployData";function db({abi:t,args:e,bytecode:n}){if(!e||e.length===0)return n;const r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new r7({docsPath:wh});if(!("inputs"in r))throw new hw({docsPath:wh});if(!r.inputs||r.inputs.length===0)throw new hw({docsPath:wh});const i=Zc(r.inputs,e);return zm([n,i])}const IE=`Ethereum Signed Message:
`;function DE(t,e){const n=typeof t=="string"?Kr(t):t.raw instanceof Uint8Array?t.raw:Gi(t.raw),r=Kr(`${IE}${n.length}`);return Yt(ti([r,n]),e)}function NE(t,e){let[n,r="0"]=t.split(".");const i=n.startsWith("-");if(i&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),e===0)Math.round(+`.${r}`)===1&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>e){const[o,s,a]=[r.slice(0,e-1),r.slice(e-1,e),r.slice(e)],l=Math.round(+`${s}.${a}`);l>9?r=`${BigInt(o)+BigInt(1)}0`.padStart(o.length+1,"0"):r=`${o}${l}`,r.length>e&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,e)}else r=r.padEnd(e,"0");return BigInt(`${i?"-":""}${n}${r}`)}function RE(t,e="wei"){return NE(t,S5[e])}function ME(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function jE(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?Vt(t.nonce):void 0,storageProof:t.storageProof?ME(t.storageProof):void 0}}async function LE(t,{address:e,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?Se(n):void 0,a=await t.request({method:"eth_getProof",params:[e,i,s||o]});return jE(a)}async function BE(t,{address:e,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?Se(n):void 0;return await t.request({method:"eth_getStorageAt",params:[e,i,o||r]})}async function dg(t,{blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){var u,f,h;const s=r||"latest",a=n!==void 0?Se(n):void 0;let l=null;if(i?l=await t.request({method:"eth_getTransactionByHash",params:[i]}):e?l=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,Se(o)]}):(a||s)&&(l=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,Se(o)]})),!l)throw new B5({blockHash:e,blockNumber:n,blockTag:s,hash:i,index:o});return(((h=(f=(u=t.chain)==null?void 0:u.formatters)==null?void 0:f.transaction)==null?void 0:h.format)||C5)(l)}async function UE(t,{hash:e,transactionReceipt:n}){const[r,i]=await Promise.all([we(t,eu,"getBlockNumber")({}),e?we(t,dg,"getBlockNumber")({hash:e}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function r1(t,{hash:e}){var i,o,s;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new U5({hash:e});return(((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||VC)(n)}async function FE(t,e){var C;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=e,l=r??(typeof((C=t.batch)==null?void 0:C.multicall)=="object"&&t.batch.multicall.batchSize||1024);let c=a;if(!c){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");c=Ma({blockNumber:i,chain:t.chain,contract:"multicall3"})}const u=[[]];let f=0,h=0;for(let E=0;E<s.length;E++){const{abi:b,address:m,args:v,functionName:x}=s[E];try{const _=co({abi:b,args:v,functionName:x});h+=(_.length-2)/2,l>0&&h>l&&u[f].length>0&&(f++,h=(_.length-2)/2,u[f]=[]),u[f]=[...u[f],{allowFailure:!0,callData:_,target:m}]}catch(_){const S=sc(_,{abi:b,address:m,args:v,docsPath:"/docs/contract/multicall",functionName:x});if(!n)throw S;u[f]=[...u[f],{allowFailure:!0,callData:"0x",target:m}]}}const g=await Promise.allSettled(u.map(E=>we(t,Yi,"readContract")({abi:Xp,address:c,args:[E],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),y=[];for(let E=0;E<g.length;E++){const b=g[E];if(b.status==="rejected"){if(!n)throw b.reason;for(let v=0;v<u[E].length;v++)y.push({status:"failure",error:b.reason,result:void 0});continue}const m=b.value;for(let v=0;v<m.length;v++){const{returnData:x,success:_}=m[v],{callData:S}=u[E][v],{abi:d,address:$,functionName:O,args:I}=s[y.length];try{if(S==="0x")throw new Jf;if(!_)throw new Ym({data:x});const R=Ra({abi:d,args:I,data:x,functionName:O});y.push(n?{result:R,status:"success"}:R)}catch(R){const Y=sc(R,{abi:d,address:$,args:I,docsPath:"/docs/contract/multicall",functionName:O});if(!n)throw Y;y.push({error:Y,result:void 0,status:"failure"})}}}if(y.length!==s.length)throw new X("multicall results mismatch");return y}const zE="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function WE(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function HE(t,e){const n=Er(t)?Gi(t):t,r=Er(e)?Gi(e):e;return WE(n,r)}async function fb(t,{address:e,hash:n,signature:r,...i}){const o=Er(r)?r:ci(r);try{const{data:s}=await we(t,i0,"call")({data:db({abi:A_,args:[e,n,o],bytecode:zE}),...i});return HE(s??"0x0","0x1")}catch(s){if(s instanceof F5)return!1;throw s}}async function VE(t,{address:e,message:n,signature:r,...i}){const o=DE(n);return fb(t,{address:e,hash:o,signature:r,...i})}async function qE(t,{address:e,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=PE({message:r,primaryType:i,types:o,domain:s});return fb(t,{address:e,hash:l,signature:n,...a})}function hb(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=t.pollingInterval}){const a=typeof o<"u"?o:t.transport.type!=="webSocket";let l;return a?(()=>{const f=Xt(["watchBlockNumber",t.uid,e,n,s]);return ja(f,{onBlockNumber:r,onError:i},h=>Xc(async()=>{var g;try{const y=await we(t,eu,"getBlockNumber")({cacheTime:0});if(l){if(y===l)return;if(y-l>1&&n)for(let C=l+1n;C<y;C++)h.onBlockNumber(C,l),l=C}(!l||y>l)&&(h.onBlockNumber(y,l),l=y)}catch(y){(g=h.onError)==null||g.call(h,y)}},{emitOnBegin:e,interval:s}))})():(()=>{let f=!0,h=()=>f=!1;return(async()=>{try{const{unsubscribe:g}=await t.transport.subscribe({params:["newHeads"],onData(y){var E;if(!f)return;const C=Gf((E=y.result)==null?void 0:E.number);r(C,l),l=C},onError(y){i==null||i(y)}});h=g,f||h()}catch(g){i==null||i(g)}})(),h})()}async function ZE(t,{confirmations:e=1,hash:n,onReplaced:r,pollingInterval:i=t.pollingInterval,timeout:o}){const s=Xt(["waitForTransactionReceipt",t.uid,n]);let a,l,c,u=!1;return new Promise((f,h)=>{o&&setTimeout(()=>h(new p_({hash:n})),o);const g=ja(s,{onReplaced:r,resolve:f,reject:h},y=>{const C=we(t,hb,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(E){if(u)return;let b=E;const m=v=>{C(),v(),g()};try{if(c){if(e>1&&(!c.blockNumber||b-c.blockNumber+1n<e))return;m(()=>y.resolve(c));return}if(a||(u=!0,await t1(async()=>{a=await we(t,dg,"getTransaction")({hash:n}),a.blockNumber&&(b=a.blockNumber)},{delay:({count:v})=>~~(1<<v)*200,retryCount:6}),u=!1),c=await we(t,r1,"getTransactionReceipt")({hash:n}),e>1&&(!c.blockNumber||b-c.blockNumber+1n<e))return;m(()=>y.resolve(c))}catch(v){if(a&&(v instanceof B5||v instanceof U5))try{l=a,u=!0;const x=await t1(()=>we(t,Qi,"getBlock")({blockNumber:b,includeTransactions:!0}),{delay:({count:d})=>~~(1<<d)*200,retryCount:6,shouldRetry:({error:d})=>d instanceof z5});u=!1;const _=x.transactions.find(({from:d,nonce:$})=>d===l.from&&$===l.nonce);if(!_||(c=await we(t,r1,"getTransactionReceipt")({hash:_.hash}),e>1&&(!c.blockNumber||b-c.blockNumber+1n<e)))return;let S="replaced";_.to===l.to&&_.value===l.value?S="repriced":_.from===_.to&&_.value===0n&&(S="cancelled"),m(()=>{var d;(d=y.onReplaced)==null||d.call(y,{reason:S,replacedTransaction:l,transaction:_,transactionReceipt:c}),y.resolve(c)})}catch(x){m(()=>y.reject(x))}else m(()=>y.reject(v))}}})})})}function GE(t,{blockTag:e="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=t.pollingInterval}){const c=typeof a<"u"?a:t.transport.type!=="webSocket",u=s??!1;let f;return c?(()=>{const y=Xt(["watchBlocks",t.uid,n,r,u,l]);return ja(y,{onBlock:i,onError:o},C=>Xc(async()=>{var E;try{const b=await we(t,Qi,"getBlock")({blockTag:e,includeTransactions:u});if(b.number&&(f!=null&&f.number)){if(b.number===f.number)return;if(b.number-f.number>1&&n)for(let m=(f==null?void 0:f.number)+1n;m<b.number;m++){const v=await we(t,Qi,"getBlock")({blockNumber:m,includeTransactions:u});C.onBlock(v,f),f=v}}(!(f!=null&&f.number)||e==="pending"&&!(b!=null&&b.number)||b.number&&b.number>f.number)&&(C.onBlock(b,f),f=b)}catch(b){(E=C.onError)==null||E.call(C,b)}},{emitOnBegin:r,interval:l}))})():(()=>{let y=!0,C=()=>y=!1;return(async()=>{try{const{unsubscribe:E}=await t.transport.subscribe({params:["newHeads"],onData(b){var x,_,S;if(!y)return;const v=(((S=(_=(x=t.chain)==null?void 0:x.formatters)==null?void 0:_.block)==null?void 0:S.format)||_5)(b.result);i(v,f),f=v},onError(b){o==null||o(b)}});C=E,y||C()}catch(E){o==null||o(E)}})(),C})()}function KE(t,{address:e,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){const f=typeof l<"u"?l:t.transport.type!=="webSocket",h=u??!1;return f?(()=>{const C=Xt(["watchEvent",e,n,r,t.uid,i,c]);return ja(C,{onLogs:a,onError:s},E=>{let b,m,v=!1;const x=Xc(async()=>{var _;if(!v){try{m=await we(t,rb,"createEventFilter")({address:e,args:n,event:i,events:o,strict:h})}catch{}v=!0;return}try{let S;if(m)S=await we(t,o0,"getFilterChanges")({filter:m});else{const d=await we(t,eu,"getBlockNumber")({});b&&b!==d?S=await we(t,ig,"getLogs")({address:e,args:n,event:i,events:o,fromBlock:b+1n,toBlock:d}):S=[],b=d}if(S.length===0)return;if(r)E.onLogs(S);else for(const d of S)E.onLogs([d])}catch(S){m&&S instanceof Wo&&(v=!1),(_=E.onError)==null||_.call(E,S)}},{emitOnBegin:!0,interval:c});return async()=>{m&&await we(t,s0,"uninstallFilter")({filter:m}),x()}})})():(()=>{let C=!0,E=()=>C=!1;return(async()=>{try{const b=o??(i?[i]:void 0);let m=[];b&&(m=[b.flatMap(x=>Kc({abi:[x],eventName:x.name,args:n}))],i&&(m=m[0]));const{unsubscribe:v}=await t.transport.subscribe({params:["logs",{address:e,topics:m}],onData(x){var S;if(!C)return;const _=x.result;try{const{eventName:d,args:$}=Jc({abi:b,data:_.data,topics:_.topics,strict:h}),O=rr(_,{args:$,eventName:d});a([O])}catch(d){let $,O;if(d instanceof zo||d instanceof Ia){if(u)return;$=d.abiItem.name,O=(S=d.abiItem.inputs)==null?void 0:S.some(R=>!("name"in R&&R.name))}const I=rr(_,{args:O?[]:{},eventName:$});a([I])}},onError(x){s==null||s(x)}});E=v,C||E()}catch(b){s==null||s(b)}})(),E})()}function QE(t,{batch:e=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=t.pollingInterval}){return(typeof i<"u"?i:t.transport.type!=="webSocket")?(()=>{const c=Xt(["watchPendingTransactions",t.uid,e,o]);return ja(c,{onTransactions:r,onError:n},u=>{let f;const h=Xc(async()=>{var g;try{if(!f)try{f=await we(t,ib,"createPendingTransactionFilter")({});return}catch(C){throw h(),C}const y=await we(t,o0,"getFilterChanges")({filter:f});if(y.length===0)return;if(e)u.onTransactions(y);else for(const C of y)u.onTransactions([C])}catch(y){(g=u.onError)==null||g.call(u,y)}},{emitOnBegin:!0,interval:o});return async()=>{f&&await we(t,s0,"uninstallFilter")({filter:f}),h()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{const{unsubscribe:f}=await t.transport.subscribe({params:["newPendingTransactions"],onData(h){if(!c)return;const g=h.result;r([g])},onError(h){n==null||n(h)}});u=f,c||u()}catch(f){n==null||n(f)}})(),u})()}function YE(t){return{call:e=>i0(t,e),createBlockFilter:()=>vE(t),createContractEventFilter:e=>M5(t,e),createEventFilter:e=>rb(t,e),createPendingTransactionFilter:()=>ib(t),estimateContractGas:e=>k_(t,e),estimateGas:e=>rg(t,e),getBalance:e=>bE(t,e),getBlock:e=>Qi(t,e),getBlockNumber:e=>eu(t,e),getBlockTransactionCount:e=>xE(t,e),getBytecode:e=>CE(t,e),getChainId:()=>ac(t),getContractEvents:e=>V5(t,e),getEnsAddress:e=>rE(t,e),getEnsAvatar:e=>gE(t,e),getEnsName:e=>wE(t,e),getEnsResolver:e=>yE(t,e),getEnsText:e=>nb(t,e),getFeeHistory:e=>EE(t,e),estimateFeesPerGas:e=>S_(t,e),getFilterChanges:e=>o0(t,e),getFilterLogs:e=>SE(t,e),getGasPrice:()=>ng(t),getLogs:e=>ig(t,e),getProof:e=>LE(t,e),estimateMaxPriorityFeePerGas:e=>E_(t,e),getStorageAt:e=>BE(t,e),getTransaction:e=>dg(t,e),getTransactionConfirmations:e=>UE(t,e),getTransactionCount:e=>H5(t,e),getTransactionReceipt:e=>r1(t,e),multicall:e=>FE(t,e),prepareTransactionRequest:e=>r0(t,e),readContract:e=>Yi(t,e),sendRawTransaction:e=>sg(t,e),simulateContract:e=>M_(t,e),verifyMessage:e=>VE(t,e),verifyTypedData:e=>qE(t,e),uninstallFilter:e=>s0(t,e),waitForTransactionReceipt:e=>ZE(t,e),watchBlocks:e=>GE(t,e),watchBlockNumber:e=>hb(t,e),watchContractEvent:e=>W_(t,e),watchEvent:e=>KE(t,e),watchPendingTransactions:e=>QE(t,e)}}function Pw(t){const{key:e="public",name:n="Public Client"}=t;return K5({...t,key:e,name:n,type:"publicClient"}).extend(YE)}function JE(t,{abi:e,args:n,bytecode:r,...i}){const o=db({abi:e,args:n,bytecode:r});return ag(t,{...i,data:o})}async function XE(t){var n;return((n=t.account)==null?void 0:n.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>Km(r))}async function e9(t){return await t.request({method:"wallet_getPermissions"})}async function t9(t){return(await t.request({method:"eth_requestAccounts"})).map(n=>jn(n))}async function n9(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function r9(t,{account:e=t.account,message:n}){if(!e)throw new Na({docsPath:"/docs/actions/wallet/signMessage"});const r=Fn(e);if(r.type==="local")return r.signMessage({message:n});const i=typeof n=="string"?Um(n):n.raw instanceof Uint8Array?ci(n.raw):n.raw;return t.request({method:"personal_sign",params:[i,r.address]})}async function i9(t,e){var c,u,f,h;const{account:n=t.account,chain:r=t.chain,...i}=e;if(!n)throw new Na({docsPath:"/docs/actions/wallet/signTransaction"});const o=Fn(n);Yc({account:o,...e});const s=await we(t,ac,"getChainId")({});r!==null&&G5({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((c=t.chain)==null?void 0:c.formatters),l=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||Kf;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(h=(f=t.chain)==null?void 0:f.serializers)==null?void 0:h.transaction}):await t.request({method:"eth_signTransaction",params:[{...l(i),chainId:Se(s),from:o.address}]})}async function o9(t,{account:e=t.account,domain:n,message:r,primaryType:i,types:o}){if(!e)throw new Na({docsPath:"/docs/actions/wallet/signTypedData"});const s=Fn(e),a={EIP712Domain:ub({domain:n}),...o};if(cb({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=Xt({domain:n??{},primaryType:i,types:a,message:r},(c,u)=>Er(u)?u.toLowerCase():u);return t.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function s9(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:Se(e)}]})}async function a9(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function l9(t){return{addChain:e=>q_(t,e),deployContract:e=>JE(t,e),getAddresses:()=>XE(t),getChainId:()=>ac(t),getPermissions:()=>e9(t),prepareTransactionRequest:e=>r0(t,e),requestAddresses:()=>t9(t),requestPermissions:e=>n9(t,e),sendRawTransaction:e=>sg(t,e),sendTransaction:e=>ag(t,e),signMessage:e=>r9(t,e),signTransaction:e=>i9(t,e),signTypedData:e=>o9(t,e),switchChain:e=>s9(t,e),watchAsset:e=>a9(t,e),writeContract:e=>V_(t,e)}}function u0(t){const{key:e="wallet",name:n="Wallet Client",transport:r}=t;return K5({...t,key:e,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(l9)}function c9(t,e={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=e;return({chain:o,retryCount:s,timeout:a})=>{var f;const l=e.retryCount??s,c=a??e.timeout??1e4,u=t||((f=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:f[0]);if(!u)throw new Y5;return a0({key:n,name:r,async request({method:h,params:g}){const y={method:h,params:g},C=await gh(u),{error:E,result:b}=await Ks.webSocketAsync(C,{body:y,timeout:c});if(E)throw new Jm({body:y,error:E,url:u});return b},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket(){return gh(u)},async subscribe({params:h,onData:g,onError:y}){const C=await gh(u),{result:E}=await new Promise((b,m)=>Ks.webSocket(C,{body:{method:"eth_subscribe",params:h},onResponse(v){if(v.error){m(v.error),y==null||y(v.error);return}if(typeof v.id=="number"){b(v);return}v.method==="eth_subscription"&&g(v.params)}}));return{subscriptionId:E,async unsubscribe(){return new Promise(b=>Ks.webSocket(C,{body:{method:"eth_unsubscribe",params:[E]},onResponse:b}))}}}})}}const u9=qf({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),fg=qf({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),pb=qf({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}});var mb=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},xi=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function Hd(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var gb={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,f,h){if(typeof u!="function")throw new TypeError("The listener must be a function");var g=new i(u,f||l,h),y=n?n+c:c;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],g]:l._events[y].push(g):(l._events[y]=g,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,f;if(this._eventsCount===0)return c;for(f in u=this._events)e.call(u,f)&&c.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var h=0,g=f.length,y=new Array(g);h<g;h++)y[h]=f[h].fn;return y},a.prototype.listenerCount=function(c){var u=n?n+c:c,f=this._events[u];return f?f.fn?1:f.length:0},a.prototype.emit=function(c,u,f,h,g,y){var C=n?n+c:c;if(!this._events[C])return!1;var E=this._events[C],b=arguments.length,m,v;if(E.fn){switch(E.once&&this.removeListener(c,E.fn,void 0,!0),b){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,u),!0;case 3:return E.fn.call(E.context,u,f),!0;case 4:return E.fn.call(E.context,u,f,h),!0;case 5:return E.fn.call(E.context,u,f,h,g),!0;case 6:return E.fn.call(E.context,u,f,h,g,y),!0}for(v=1,m=new Array(b-1);v<b;v++)m[v-1]=arguments[v];E.fn.apply(E.context,m)}else{var x=E.length,_;for(v=0;v<x;v++)switch(E[v].once&&this.removeListener(c,E[v].fn,void 0,!0),b){case 1:E[v].fn.call(E[v].context);break;case 2:E[v].fn.call(E[v].context,u);break;case 3:E[v].fn.call(E[v].context,u,f);break;case 4:E[v].fn.call(E[v].context,u,f,h);break;default:if(!m)for(_=1,m=new Array(b-1);_<b;_++)m[_-1]=arguments[_];E[v].fn.apply(E[v].context,m)}}return!0},a.prototype.on=function(c,u,f){return o(this,c,u,f,!1)},a.prototype.once=function(c,u,f){return o(this,c,u,f,!0)},a.prototype.removeListener=function(c,u,f,h){var g=n?n+c:c;if(!this._events[g])return this;if(!u)return s(this,g),this;var y=this._events[g];if(y.fn)y.fn===u&&(!h||y.once)&&(!f||y.context===f)&&s(this,g);else{for(var C=0,E=[],b=y.length;C<b;C++)(y[C].fn!==u||h&&!y[C].once||f&&y[C].context!==f)&&E.push(y[C]);E.length?this._events[g]=E.length===1?E[0]:E:s(this,g)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(gb);var d9=gb.exports;const f9=Fc(d9);var hg=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},qe=(t,e,n)=>(hg(t,e,"read from private field"),n?n.call(t):e.get(t)),sn=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},lc=(t,e,n,r)=>(hg(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),It=(t,e,n)=>(hg(t,e,"access private method"),n),d0=class extends f9{constructor({chains:t=[fg,u9],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...n}=t.blockExplorers??{};if(e)return[e.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function h9(t){var n;if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOktoWallet)return"Okto Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOneKey)return"OneKey Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=t.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return e(t)??"Injected"}var od,pg=class extends d0{constructor({chains:t,options:e}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...e};super({chains:t,options:n}),this.id="injected",sn(this,od,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:jn(i[0])})},this.onChainChanged=i=>{const o=Hd(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=h9(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:t}={}){var e;try{const n=await this.getProvider();if(!n)throw new xi;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=jn(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new cn(n):n.code===-32002?new aa(n):n}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new xi;const e=await t.request({method:"eth_accounts"});return jn(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new xi;return t.request({method:"eth_chainId"}).then(Hd)}async getProvider(){const t=this.options.getProvider();return t&&lc(this,od,t),qe(this,od)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return u0({account:n,chain:r,transport:l0(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new xi;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r,i,o;const e=await this.getProvider();if(!e)throw new xi;const n=Se(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===t);if(!a)throw new mb({chainId:t,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new cn(new Error("User rejected switch after adding network."));return a}catch(l){throw new cn(l)}throw this.isUserRejectedRequestError(s)?new cn(s):new ir(s)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new xi;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}isUserRejectedRequestError(t){return t.code===4001}};od=new WeakMap;var mg=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},yh=(t,e,n)=>(mg(t,e,"read from private field"),n?n.call(t):e.get(t)),vh=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Ru=(t,e,n,r)=>(mg(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),p9=(t,e,n)=>(mg(t,e,"access private method"),n),m9={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const g9=t=>(e,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let f=s(r.getState());c=h=>{const g=s(h);if(!u(f,g)){const y=f;a(f=g,y)}},l!=null&&l.fireImmediately&&a(f,f)}return i(c)},t(e,n,r)},w9=g9;function y9(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const cc=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return cc(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return cc(r)(n)}}}},v9=(t,e)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:E=>E,version:0,merge:(E,b)=>({...b,...E}),...e},s=!1;const a=new Set,l=new Set;let c;try{c=o.getStorage()}catch{}if(!c)return t((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...E)},r,i);const u=cc(o.serialize),f=()=>{const E=o.partialize({...r()});let b;const m=u({state:E,version:o.version}).then(v=>c.setItem(o.name,v)).catch(v=>{b=v});if(b)throw b;return m},h=i.setState;i.setState=(E,b)=>{h(E,b),f()};const g=t((...E)=>{n(...E),f()},r,i);let y;const C=()=>{var E;if(!c)return;s=!1,a.forEach(m=>m(r()));const b=((E=o.onRehydrateStorage)==null?void 0:E.call(o,r()))||void 0;return cc(c.getItem.bind(c))(o.name).then(m=>{if(m)return o.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return o.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var v;return y=o.merge(m,(v=r())!=null?v:g),n(y,!0),f()}).then(()=>{b==null||b(y,void 0),s=!0,l.forEach(m=>m(y))}).catch(m=>{b==null||b(void 0,m)})};return i.persist={setOptions:E=>{o={...o,...E},E.getStorage&&(c=E.getStorage())},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>C(),hasHydrated:()=>s,onHydrate:E=>(a.add(E),()=>{a.delete(E)}),onFinishHydration:E=>(l.add(E),()=>{l.delete(E)})},C(),y||g},b9=(t,e)=>(n,r,i)=>{let o={storage:y9(()=>localStorage),partialize:C=>C,version:0,merge:(C,E)=>({...E,...C}),...e},s=!1;const a=new Set,l=new Set;let c=o.storage;if(!c)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...C)},r,i);const u=()=>{const C=o.partialize({...r()});return c.setItem(o.name,{state:C,version:o.version})},f=i.setState;i.setState=(C,E)=>{f(C,E),u()};const h=t((...C)=>{n(...C),u()},r,i);let g;const y=()=>{var C,E;if(!c)return;s=!1,a.forEach(m=>{var v;return m((v=r())!=null?v:h)});const b=((E=o.onRehydrateStorage)==null?void 0:E.call(o,(C=r())!=null?C:h))||void 0;return cc(c.getItem.bind(c))(o.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return o.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var v;return g=o.merge(m,(v=r())!=null?v:h),n(g,!0),u()}).then(()=>{b==null||b(g,void 0),g=r(),s=!0,l.forEach(m=>m(g))}).catch(m=>{b==null||b(void 0,m)})};return i.persist={setOptions:C=>{o={...o,...C},C.storage&&(c=C.storage)},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},o.skipHydration||y(),g||h},x9=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((m9?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),v9(t,e)):b9(t,e),C9=x9;var _9={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Tw=t=>{let e;const n=new Set,r=(l,c)=>{const u=typeof l=="function"?l(e):l;if(!Object.is(u,e)){const f=e;e=c??(typeof u!="object"||u===null)?u:Object.assign({},e,u),n.forEach(h=>h(e,f))}},i=()=>e,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(_9?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,i,a),a},E9=t=>t?Tw(t):Tw;function wb(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,i]of t)if(!Object.is(i,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(e,n[r])||!Object.is(t[n[r]],e[n[r]]))return!1;return!0}function S9(t,e,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const f of t){let h=!1;for(const g of e){const y=g(f);y&&(h=!0,l.some(({id:C})=>C===f.id)||(l=[...l,y.chain]),c[f.id]=[...c[f.id]||[],...y.rpcUrls.http],y.rpcUrls.webSocket&&(u[f.id]=[...u[f.id]||[],...y.rpcUrls.webSocket]))}if(!h)throw new Error([`Could not find valid provider configuration for chain "${f.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:f})=>{const h=l.find(C=>C.id===f)??t[0],g=c[h.id];if(!g||!g[0])throw new Error(`No providers configured for chain "${h.id}"`);const y=Pw({batch:n,chain:h,transport:Sw(g.map(C=>eE(C,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})},webSocketPublicClient:({chainId:f})=>{const h=l.find(C=>C.id===f)??t[0],g=u[h.id];if(!g||!g[0])return;const y=Pw({batch:n,chain:h,transport:Sw(g.map(C=>c9(C,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})}}}var $9=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},k9=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},P9=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},T9=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function i1(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(Array.isArray(t)&&Array.isArray(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!i1(t[r],e[r]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t);if(n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(o&&!i1(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}var o1=(t,{find:e,replace:n})=>t&&e(t)?n(t):typeof t!="object"?t:Array.isArray(t)?t.map(r=>o1(r,{find:e,replace:n})):t instanceof Object?Object.entries(t).reduce((r,[i,o])=>({...r,[i]:o1(o,{find:e,replace:n})}),{}):t;function A9(t){const e=JSON.parse(t);return o1(e,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function Aw(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(YC[t])}function Ow(t,e){return t.slice(0,e).join(".")||"."}function Iw(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function O9(t,e){const n=typeof t=="function",r=typeof e=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const c=Iw(i,this);c===0?i[i.length]=this:(i.splice(c),o.splice(c)),o[o.length]=a;const u=Iw(i,l);if(u!==0)return r?e.call(this,a,l,Ow(o,u)):`[ref=${Ow(o,u)}]`}else i[0]=l,o[0]=a;return n?t.call(this,a,l):l}}function I9(t,e,n,r){return JSON.stringify(t,O9((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(e==null?void 0:e(i,s))||s},r),n??void 0)}var yb={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function vb({deserialize:t=A9,key:e="wagmi",serialize:n=I9,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${e}.${i}`);try{return s?t(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${e}.${i}`);else try{r.setItem(`${e}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${e}.${i}`)}}var Dw="store",Es,ll,s1,bb,D9=class{constructor({autoConnect:t=!1,connectors:e=[new pg],publicClient:n,storage:r=vb({storage:typeof window<"u"?window.localStorage:yb}),logger:i={warn:console.warn},webSocketPublicClient:o}){var c,u;vh(this,s1),this.publicClients=new Map,this.webSocketPublicClients=new Map,vh(this,Es,void 0),vh(this,ll,void 0),this.args={autoConnect:t,connectors:e,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(t)try{const f=r.getItem(Dw),h=(c=f==null?void 0:f.state)==null?void 0:c.data;s=h!=null&&h.account?"reconnecting":"connecting",a=(u=h==null?void 0:h.chain)==null?void 0:u.id}catch{}const l=typeof e=="function"?e():e;l.forEach(f=>f.setStorage(r)),this.store=E9(w9(C9(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:Dw,storage:r,partialize:f=>{var h,g;return{...t&&{data:{account:(h=f==null?void 0:f.data)==null?void 0:h.account,chain:(g=f==null?void 0:f.data)==null?void 0:g.chain}},chains:f==null?void 0:f.chains}},version:2}))),this.storage=r,Ru(this,ll,r==null?void 0:r.getItem("wallet")),p9(this,s1,bb).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),Ru(this,Es,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(yh(this,Es))return;Ru(this,Es,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const t=yh(this,ll)?[...this.connectors].sort(n=>n.id===yh(this,ll)?-1:1):this.connectors;let e=!1;for(const n of t){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),e=!0;break}return e||this.setState(n=>({...n,data:void 0,status:"disconnected"})),Ru(this,Es,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,this.publicClients.set(t??-1,e),e}setPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};Es=new WeakMap;ll=new WeakMap;s1=new WeakSet;bb=function(){const t=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},e=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var c,u,f,h,g,y;(c=l==null?void 0:l.off)==null||c.call(l,"change",t),(u=l==null?void 0:l.off)==null||u.call(l,"disconnect",e),(f=l==null?void 0:l.off)==null||f.call(l,"error",n),a&&((h=a.on)==null||h.call(a,"change",t),(g=a.on)==null||g.call(a,"disconnect",e),(y=a.on)==null||y.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var a1;function N9(t){const e=new D9(t);return a1=e,e}function ur(){if(!a1)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return a1}async function Nw({chainId:t,connector:e}){const n=ur(),r=n.connector;if(r&&e.id===r.id)throw new k9;try{n.setState(o=>({...o,status:"connecting"}));const i=await e.connect({chainId:t});return n.setLastUsedConnector(e.id),n.setState(o=>({...o,connector:e,chains:e==null?void 0:e.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:e}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function R9(){const t=ur();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var M9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],j9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function Sr({chainId:t}={}){const e=ur();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function xb({chainId:t}={}){var r,i;return await((i=(r=ur().connector)==null?void 0:r.getWalletClient)==null?void 0:i.call(r,{chainId:t}))||null}function L9(t,e){const n=ur(),r=async()=>e(Sr(t));return n.subscribe(({publicClient:o})=>o,r)}async function B9({chainId:t,contracts:e,blockNumber:n,blockTag:r,...i}){const o=Sr({chainId:t});if(!o.chains)throw new P9;if(t&&o.chain.id!==t)throw new $9({chainId:t});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:e})}async function U9({address:t,account:e,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return Sr({chainId:n}).readContract({abi:r,address:t,account:e,functionName:o,args:i,blockNumber:s,blockTag:a})}async function F9({contracts:t,blockNumber:e,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=Sr(),s=t.reduce((u,f,h)=>{const g=f.chainId??o.chain.id;return{...u,[g]:[...u[g]||[],{contract:f,index:h}]}},{}),a=()=>Object.entries(s).map(([u,f])=>B9({allowFailure:i,chainId:parseInt(u),contracts:f.map(({contract:h})=>h),blockNumber:e,blockTag:n})),l=(await Promise.all(a())).flat(),c=Object.values(s).flatMap(u=>u.map(({index:f})=>f));return l.reduce((u,f,h)=>(u&&(u[c[h]]=f),u),[])}catch(o){if(o instanceof Qm)throw o;const s=()=>t.map(a=>U9({...a,blockNumber:e,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function z9({address:t,chainId:e,formatUnits:n,token:r}){const i=ur(),o=Sr({chainId:e});if(r){const c=async({abi:u})=>{const f={abi:u,address:r,chainId:e},[h,g,y]=await F9({allowFailure:!1,contracts:[{...f,functionName:"balanceOf",args:[t]},{...f,functionName:"decimals"},{...f,functionName:"symbol"}]});return{decimals:g,formatted:Ld(h??"0",Aw(n??g)),symbol:y,value:h}};try{return await c({abi:M9})}catch(u){if(u instanceof Qm){const{symbol:f,...h}=await c({abi:j9});return{symbol:b5(No(f,{dir:"right"})),...h}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:t}),l=s.find(c=>c.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:Ld(a??"0",Aw(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function Vd(){const{data:t,connector:e,status:n}=ur();switch(n){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function l1(){var i,o,s,a;const t=ur(),e=(o=(i=t.data)==null?void 0:i.chain)==null?void 0:o.id,n=t.chains??[],r=[...((s=t.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...r,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:n}}async function W9(t){const e=await xb();if(!e)throw new xi;return await e.signMessage({message:t.message})}async function Cb({chainId:t}){const{connector:e}=ur();if(!e)throw new xi;if(!e.switchChain)throw new T9({connector:e});return e.switchChain(t)}function _b(t,{selector:e=n=>n}={}){const n=ur(),r=()=>t(Vd());return n.subscribe(({data:o,connector:s,status:a})=>e({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:wb})}function H9(t,{selector:e=n=>n}={}){const n=ur(),r=()=>t(l1());return n.subscribe(({data:o,chains:s})=>{var a;return e({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:wb})}async function V9({name:t,chainId:e}){const{normalize:n}=await Fo(()=>import("./index-mLIH2Yh-.js"),__vite__mapDeps([]));return await Sr({chainId:e}).getEnsAvatar({name:n(t)})}async function q9({address:t,chainId:e}){return Sr({chainId:e}).getEnsName({address:jn(t)})}const Z9=Symbol(),Rw=Object.getPrototypeOf,c1=new WeakMap,G9=t=>t&&(c1.has(t)?c1.get(t):Rw(t)===Object.prototype||Rw(t)===Array.prototype),K9=t=>G9(t)&&t[Z9]||null,Mw=(t,e=!0)=>{c1.set(t,e)};var qd={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const bh=t=>typeof t=="object"&&t!==null,Ci=new WeakMap,cl=new WeakSet,Q9=(t=Object.is,e=(c,u)=>new Proxy(c,u),n=c=>bh(c)&&!cl.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},i=new WeakMap,o=(c,u,f=r)=>{const h=i.get(c);if((h==null?void 0:h[0])===u)return h[1];const g=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return Mw(g,!0),i.set(c,[u,g]),Reflect.ownKeys(c).forEach(y=>{if(Object.getOwnPropertyDescriptor(g,y))return;const C=Reflect.get(c,y),E={value:C,enumerable:!0,configurable:!0};if(cl.has(C))Mw(C,!1);else if(C instanceof Promise)delete E.value,E.get=()=>f(C);else if(Ci.has(C)){const[b,m]=Ci.get(C);E.value=o(b,m(),f)}Object.defineProperty(g,y,E)}),Object.preventExtensions(g)},s=new WeakMap,a=[1,1],l=c=>{if(!bh(c))throw new Error("object required");const u=s.get(c);if(u)return u;let f=a[0];const h=new Set,g=(O,I=++a[0])=>{f!==I&&(f=I,h.forEach(R=>R(O,I)))};let y=a[1];const C=(O=++a[1])=>(y!==O&&!h.size&&(y=O,b.forEach(([I])=>{const R=I[1](O);R>f&&(f=R)})),f),E=O=>(I,R)=>{const Y=[...I];Y[1]=[O,...Y[1]],g(Y,R)},b=new Map,m=(O,I)=>{if((qd?"production":void 0)!=="production"&&b.has(O))throw new Error("prop listener already exists");if(h.size){const R=I[3](E(O));b.set(O,[I,R])}else b.set(O,[I])},v=O=>{var I;const R=b.get(O);R&&(b.delete(O),(I=R[1])==null||I.call(R))},x=O=>(h.add(O),h.size===1&&b.forEach(([R,Y],te)=>{if((qd?"production":void 0)!=="production"&&Y)throw new Error("remove already exists");const W=R[3](E(te));b.set(te,[R,W])}),()=>{h.delete(O),h.size===0&&b.forEach(([R,Y],te)=>{Y&&(Y(),b.set(te,[R]))})}),_=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),d=e(_,{deleteProperty(O,I){const R=Reflect.get(O,I);v(I);const Y=Reflect.deleteProperty(O,I);return Y&&g(["delete",[I],R]),Y},set(O,I,R,Y){const te=Reflect.has(O,I),W=Reflect.get(O,I,Y);if(te&&(t(W,R)||s.has(R)&&t(W,s.get(R))))return!0;v(I),bh(R)&&(R=K9(R)||R);let F=R;if(R instanceof Promise)R.then(j=>{R.status="fulfilled",R.value=j,g(["resolve",[I],j])}).catch(j=>{R.status="rejected",R.reason=j,g(["reject",[I],j])});else{!Ci.has(R)&&n(R)&&(F=l(R));const j=!cl.has(F)&&Ci.get(F);j&&m(I,j)}return Reflect.set(O,I,F,Y),g(["set",[I],R,W]),!0}});s.set(c,d);const $=[_,C,o,x];return Ci.set(d,$),Reflect.ownKeys(c).forEach(O=>{const I=Object.getOwnPropertyDescriptor(c,O);"value"in I&&(d[O]=c[O],delete I.value,delete I.writable),Object.defineProperty(_,O,I)}),d})=>[l,Ci,cl,t,e,n,r,i,o,s,a],[Y9]=Q9();function on(t={}){return Y9(t)}function ui(t,e,n){const r=Ci.get(t);(qd?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let i;const o=[],s=r[3];let a=!1;const c=s(u=>{if(o.push(u),n){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,c()}}function cM(t,e){const n=Ci.get(t);(qd?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[r,i,o]=n;return o(r,i(),e)}function uc(t){return cl.add(t),t}function dr(t,e,n,r){let i=t[e];return ui(t,()=>{const o=t[e];Object.is(i,o)||n(i=o)},r)}var Eb={exports:{}},Sb={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=le;function J9(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var X9=typeof Object.is=="function"?Object.is:J9,eS=la.useState,tS=la.useEffect,nS=la.useLayoutEffect,rS=la.useDebugValue;function iS(t,e){var n=e(),r=eS({inst:{value:n,getSnapshot:e}}),i=r[0].inst,o=r[1];return nS(function(){i.value=n,i.getSnapshot=e,xh(i)&&o({inst:i})},[t,n,e]),tS(function(){return xh(i)&&o({inst:i}),t(function(){xh(i)&&o({inst:i})})},[t]),rS(n),n}function xh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!X9(t,n)}catch{return!0}}function oS(t,e){return e()}var sS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?oS:iS;Sb.useSyncExternalStore=la.useSyncExternalStore!==void 0?la.useSyncExternalStore:sS;Eb.exports=Sb;var $b=Eb.exports;const Po={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE_DASHBOARD:"https://secure.web3modal.com/dashboard",SECURE_SITE_FAVICON:"https://secure.web3modal.com/images/favicon.png",RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},pe={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return pe.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return pe.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Po.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Po.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Po.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function i(){t(...r)}n&&clearTimeout(n),n=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(pe.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!pe.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,pe.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const i=Number(t);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e}`:`0.000 ${e}`},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return Po.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return pe.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return pe.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return pe.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,n;return typeof t=="string"?t:typeof((n=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:n.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"}},yt=on({isConnected:!1}),Ue={state:yt,subscribe(t){return ui(yt,()=>t(yt))},subscribeKey(t,e){return dr(yt,t,e)},setIsConnected(t){yt.isConnected=t},setCaipAddress(t){yt.caipAddress=t,yt.address=t?pe.getPlainAddress(t):void 0},setBalance(t,e){yt.balance=t,yt.balanceSymbol=e},setProfileName(t){yt.profileName=t},setProfileImage(t){yt.profileImage=t},setAddressExplorerUrl(t){yt.addressExplorerUrl=t},resetAccount(){yt.isConnected=!1,yt.caipAddress=void 0,yt.address=void 0,yt.balance=void 0,yt.balanceSymbol=void 0,yt.profileName=void 0,yt.profileImage=void 0,yt.addressExplorerUrl=void 0}};class gg{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const Ch="WALLETCONNECT_DEEPLINK_CHOICE",jw="@w3m/recent",Lw="@w3m/connected_wallet_image_url",Bw="@w3m/connected_connector",un={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(Ch,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(Ch);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Ch)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=un.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(jw,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(jw);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(Lw,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Lw)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(Bw,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(Bw)}catch{console.info("Unable to get Connected Connector")}}},gi=on({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Qs={state:gi,subscribeNetworkImages(t){return ui(gi.networkImages,()=>t(gi.networkImages))},subscribeKey(t,e){return dr(gi,t,e)},setWalletImage(t,e){gi.walletImages[t]=e},setNetworkImage(t,e){gi.networkImages[t]=e},setConnectorImage(t,e){gi.connectorImages[t]=e},setTokenImage(t,e){gi.tokenImages[t]=e}},ys=on({connectors:[]}),gt={state:ys,subscribeKey(t,e){return dr(ys,t,e)},setConnectors(t){ys.connectors=t.map(e=>uc(e))},addConnector(t){ys.connectors.push(uc(t))},getEmailConnector(){return ys.connectors.find(t=>t.type==="EMAIL")},getConnectors(){return ys.connectors}},el=on({open:!1,selectedNetworkId:void 0}),ca={state:el,subscribe(t){return ui(el,()=>t(el))},set(t){Object.assign(el,{...el,...t})}},zt=on({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),dt={state:zt,subscribeKey(t,e){return dr(zt,t,e)},_getClient(){if(!zt._client)throw new Error("NetworkController client not set");return zt._client},setClient(t){zt._client=uc(t)},setCaipNetwork(t){zt.caipNetwork=t,ca.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){zt.caipNetwork=t,ca.set({selectedNetworkId:t==null?void 0:t.id}),zt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){zt.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();zt.supportsAllNetworks=t.supportsAllNetworks,zt.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),zt.caipNetwork=t},resetNetwork(){zt.isDefaultCaipNetwork||(zt.caipNetwork=void 0),zt.approvedCaipNetworkIds=void 0,zt.supportsAllNetworks=!0}},bn=on({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),ze={state:bn,subscribeKey(t,e){return dr(bn,t,e)},setProjectId(t){bn.projectId=t},setIncludeWalletIds(t){bn.includeWalletIds=t},setExcludeWalletIds(t){bn.excludeWalletIds=t},setFeaturedWalletIds(t){bn.featuredWalletIds=t},setTokens(t){bn.tokens=t},setTermsConditionsUrl(t){bn.termsConditionsUrl=t},setPrivacyPolicyUrl(t){bn.privacyPolicyUrl=t},setCustomWallets(t){bn.customWallets=t},setEnableAnalytics(t){bn.enableAnalytics=t},setSdkVersion(t){bn.sdkVersion=t},setMetadata(t){bn.metadata=t}},aS=pe.getApiUrl(),mr=new gg({baseUrl:aS}),lS="40",Uw="4",Kt=on({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),De={state:Kt,subscribeKey(t,e){return dr(Kt,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=ze.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${mr.baseUrl}/getWalletImage/${t}`,n=await mr.getBlob({path:e,headers:De._getApiHeaders()});Qs.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${mr.baseUrl}/public/getAssetImage/${t}`,n=await mr.getBlob({path:e,headers:De._getApiHeaders()});Qs.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${mr.baseUrl}/public/getAssetImage/${t}`,n=await mr.getBlob({path:e,headers:De._getApiHeaders()});Qs.setConnectorImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=dt.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>De._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=gt.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>De._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=ze.state;if(t!=null&&t.length){const{data:e}=await mr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):Uw,include:t==null?void 0:t.join(",")}});e.sort((r,i)=>t.indexOf(r.id)-t.indexOf(i.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>De._fetchWalletImage(r))),Kt.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=ze.state,r=[...e??[],...n??[]].filter(Boolean),{data:i,count:o}=await mr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:"1",entries:Uw,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=un.getRecentWallets(),a=i.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>De._fetchWalletImage(c))),Kt.recommended=i,Kt.count=o??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=ze.state,i=[...Kt.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await mr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:String(t),entries:lS,include:e==null?void 0:e.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>De._fetchWalletImage(l)),pe.wait(300)]),Kt.wallets=[...Kt.wallets,...o],Kt.count=s>Kt.count?s:Kt.count,Kt.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=ze.state;Kt.search=[];const{data:r}=await mr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>De._fetchWalletImage(o)),pe.wait(300)]),Kt.search=r},prefetch(){Kt.prefetchPromise=Promise.race([Promise.allSettled([De.fetchFeaturedWallets(),De.fetchRecommendedWallets(),De.fetchNetworkImages(),De.fetchConnectorImages()]),pe.wait(3e3)])}},cS=pe.getAnalyticsUrl(),uS=new gg({baseUrl:cS}),dS=["MODAL_CREATED"],vs=on({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Le={state:vs,subscribe(t){return ui(vs,()=>t(vs))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=ze.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(dS.includes(t.data.event)||typeof window>"u")return;await uS.post({path:"/e",headers:Le._getApiHeaders(),body:{eventId:pe.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){vs.timestamp=Date.now(),vs.data=t,ze.state.enableAnalytics&&Le._sendAnalyticsEvent(vs)}},At=on({view:"Connect",history:["Connect"]}),ue={state:At,subscribeKey(t,e){return dr(At,t,e)},push(t,e){t!==At.view&&(At.view=t,At.history.push(t),At.data=e)},reset(t){At.view=t,At.history=[t]},replace(t,e){At.history.length>1&&At.history.at(-1)!==t&&(At.view=t,At.history[At.history.length-1]=t,At.data=e)},goBack(){if(At.history.length>1){At.history.pop();const[t]=At.history.slice(-1);t&&(At.view=t)}}},vo=on({loading:!1,open:!1}),Ke={state:vo,subscribe(t){return ui(vo,()=>t(vo))},subscribeKey(t,e){return dr(vo,t,e)},async open(t){await De.state.prefetchPromise,t!=null&&t.view?ue.reset(t.view):Ue.state.isConnected?ue.reset("Account"):ue.reset("Connect"),vo.open=!0,ca.set({open:!0}),Le.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){vo.open=!1,ca.set({open:!1}),Le.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(t){vo.loading=t}},fS=pe.getBlockchainApiUrl(),Fw=new gg({baseUrl:fS}),kb={fetchIdentity({caipChainId:t,address:e}){return Fw.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:ze.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n}){const r=n?{cursor:n}:{};return Fw.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r})}},Lr=on({message:"",variant:"success",open:!1}),$t={state:Lr,subscribeKey(t,e){return dr(Lr,t,e)},showSuccess(t){Lr.message=t,Lr.variant="success",Lr.open=!0},showError(t){const e=pe.parseError(t);Lr.message=e,Lr.variant="error",Lr.open=!0},hide(){Lr.open=!1}},vt=on({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Hn={state:vt,subscribe(t){return ui(vt,()=>t(vt))},async fetchTransactions(t){const{projectId:e}=ze.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");vt.loading=!0;try{const n=await kb.fetchTransactions({account:t,projectId:e,cursor:vt.next}),r=this.filterSpamTransactions(n.data),i=[...vt.transactions,...r];vt.loading=!1,vt.transactions=i,vt.transactionsByYear=this.groupTransactionsByYear(vt.transactionsByYear,r),vt.empty=i.length===0,vt.next=n.next?n.next:void 0}catch{Le.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:vt.next}}),$t.showError("Failed to fetch transactions"),vt.loading=!1,vt.empty=!0}},groupTransactionsByYear(t={},e=[]){const n=t;return e.forEach(r=>{var o;const i=new Date(r.metadata.minedAt).getFullYear();n[i]||(n[i]=[]),(o=n[i])==null||o.push(r)}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){vt.transactions=[],vt.transactionsByYear={},vt.loading=!1,vt.empty=!1,vt.next=void 0}},Ot=on({wcError:!1,buffering:!1}),Me={state:Ot,subscribeKey(t,e){return dr(Ot,t,e)},_getClient(){if(!Ot._client)throw new Error("ConnectionController client not set");return Ot._client},setClient(t){Ot._client=uc(t)},connectWalletConnect(){Ot.wcPromise=this._getClient().connectWalletConnect(t=>{Ot.wcUri=t,Ot.wcPairingExpiry=pe.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t)),un.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){Ot.wcUri=void 0,Ot.wcPairingExpiry=void 0,Ot.wcPromise=void 0,Ot.wcLinking=void 0,Ot.recentWallet=void 0,Hn.resetTransactions(),un.deleteWalletConnectDeepLink()},setWcLinking(t){Ot.wcLinking=t},setWcError(t){Ot.wcError=t,Ot.buffering=!1},setRecentWallet(t){Ot.recentWallet=t},setBuffering(t){Ot.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},xn=on({status:"uninitialized",isSiweEnabled:!1}),pt={state:xn,subscribeKey(t,e){return dr(xn,t,e)},subscribe(t){return ui(xn,()=>t(xn))},_getClient(){if(!xn._client)throw new Error("SIWEController client not set");return xn._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const n=this._getClient().createMessage(t);return this.setMessage(n),n},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var n;const e=this._getClient();(n=e.onSignIn)==null||n.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},setSIWEClient(t){xn._client=uc(t),xn.status="ready",xn.isSiweEnabled=t.options.enabled},setNonce(t){xn.nonce=t},setStatus(t){xn.status=t},setMessage(t){xn.message=t},setSession(t){xn.session=t}},bs=on({themeMode:"dark",themeVariables:{}}),On={state:bs,subscribe(t){return ui(bs,()=>t(bs))},setThemeMode(t){bs.themeMode=t},setThemeVariables(t){bs.themeVariables={...bs.themeVariables,...t}}},ut={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return Qs.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return Qs.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return Qs.state.connectorImages[t.imageId]}},Pb={goBackOrCloseModal(){ue.state.history.length>1?ue.goBack():Ke.close()},navigateAfterNetworkSwitch(){const{history:t}=ue.state,e=t.findIndex(r=>r==="Networks"),n=t[e-1];n?ue.replace(n):Ke.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sd=globalThis,wg=sd.ShadowRoot&&(sd.ShadyCSS===void 0||sd.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yg=Symbol(),zw=new WeakMap;let Tb=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==yg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(wg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=zw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&zw.set(n,e))}return e}toString(){return this.cssText}};const wr=t=>new Tb(typeof t=="string"?t:t+"",void 0,yg),re=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new Tb(n,t,yg)},hS=(t,e)=>{if(wg)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=sd.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Ww=wg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return wr(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pS,defineProperty:mS,getOwnPropertyDescriptor:gS,getOwnPropertyNames:wS,getOwnPropertySymbols:yS,getPrototypeOf:vS}=Object,Wi=globalThis,Hw=Wi.trustedTypes,bS=Hw?Hw.emptyScript:"",_h=Wi.reactiveElementPolyfillSupport,Cl=(t,e)=>t,Zd={toAttribute(t,e){switch(e){case Boolean:t=t?bS:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},vg=(t,e)=>!pS(t,e),Vw={attribute:!0,type:String,converter:Zd,reflect:!1,hasChanged:vg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Wi.litPropertyMetadata??(Wi.litPropertyMetadata=new WeakMap);let Ss=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Vw){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&mS(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=gS(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Vw}static _$Ei(){if(this.hasOwnProperty(Cl("elementProperties")))return;const e=vS(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cl("properties"))){const n=this.properties,r=[...wS(n),...yS(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Ww(i))}else e!==void 0&&n.push(Ww(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$E_)==null||n.delete(e)}_$ES(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hS(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Zd).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Zd;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??vg)(i?o:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}};Ss.elementStyles=[],Ss.shadowRootOptions={mode:"open"},Ss[Cl("elementProperties")]=new Map,Ss[Cl("finalized")]=new Map,_h==null||_h({ReactiveElement:Ss}),(Wi.reactiveElementVersions??(Wi.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _l=globalThis,Gd=_l.trustedTypes,qw=Gd?Gd.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ab="$lit$",$i=`lit$${(Math.random()+"").slice(9)}$`,Ob="?"+$i,xS=`<${Ob}>`,Ho=document,dc=()=>Ho.createComment(""),fc=t=>t===null||typeof t!="object"&&typeof t!="function",Ib=Array.isArray,CS=t=>Ib(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Eh=`[ 	
\f\r]`,tl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zw=/-->/g,Gw=/>/g,bo=RegExp(`>|${Eh}(?:([^\\s"'>=/]+)(${Eh}*=${Eh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kw=/'/g,Qw=/"/g,Db=/^(?:script|style|textarea|title)$/i,Nb=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),T=Nb(1),ie=Nb(2),Vo=Symbol.for("lit-noChange"),mt=Symbol.for("lit-nothing"),Yw=new WeakMap,To=Ho.createTreeWalker(Ho,129);function Rb(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return qw!==void 0?qw.createHTML(e):e}const _S=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=tl;for(let a=0;a<n;a++){const l=t[a];let c,u,f=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===tl?u[1]==="!--"?s=Zw:u[1]!==void 0?s=Gw:u[2]!==void 0?(Db.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=bo):u[3]!==void 0&&(s=bo):s===bo?u[0]===">"?(s=i??tl,f=-1):u[1]===void 0?f=-2:(f=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?bo:u[3]==='"'?Qw:Kw):s===Qw||s===Kw?s=bo:s===Zw||s===Gw?s=tl:(s=bo,i=void 0);const g=s===bo&&t[a+1].startsWith("/>")?" ":"";o+=s===tl?l+xS:f>=0?(r.push(c),l.slice(0,f)+Ab+l.slice(f)+$i+g):l+$i+(f===-2?a:g)}return[Rb(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let u1=class Mb{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,u]=_S(e,n);if(this.el=Mb.createElement(c,r),To.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=To.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Ab)){const h=u[s++],g=i.getAttribute(f).split($i),y=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:y[2],strings:g,ctor:y[1]==="."?SS:y[1]==="?"?$S:y[1]==="@"?kS:f0}),i.removeAttribute(f)}else f.startsWith($i)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(Db.test(i.tagName)){const f=i.textContent.split($i),h=f.length-1;if(h>0){i.textContent=Gd?Gd.emptyScript:"";for(let g=0;g<h;g++)i.append(f[g],dc()),To.nextNode(),l.push({type:2,index:++o});i.append(f[h],dc())}}}else if(i.nodeType===8)if(i.data===Ob)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf($i,f+1))!==-1;)l.push({type:7,index:o}),f+=$i.length-1}o++}}static createElement(e,n){const r=Ho.createElement("template");return r.innerHTML=e,r}};function ua(t,e,n=t,r){var s,a;if(e===Vo)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=fc(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=ua(t,i._$AS(t,e.values),i,r)),e}let ES=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Ho).importNode(n,!0);To.currentNode=i;let o=To.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new bg(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new PS(o,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=To.nextNode(),s++)}return To.currentNode=Ho,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},bg=class jb{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=mt,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ua(this,e,n),fc(e)?e===mt||e==null||e===""?(this._$AH!==mt&&this._$AR(),this._$AH=mt):e!==this._$AH&&e!==Vo&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):CS(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==mt&&fc(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ho.createTextNode(e)),this._$AH=e}g(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=u1.createElement(Rb(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new ES(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(e){let n=Yw.get(e.strings);return n===void 0&&Yw.set(e.strings,n=new u1(e)),n}T(e){Ib(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new jb(this.k(dc()),this.k(dc()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}};class f0{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=mt,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=mt}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=ua(this,e,n,0),s=!fc(e)||e!==this._$AH&&e!==Vo,s&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=ua(this,a[r+l],n,l),c===Vo&&(c=this._$AH[l]),s||(s=!fc(c)||c!==this._$AH[l]),c===mt?e=mt:e!==mt&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.O(e)}O(e){e===mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class SS extends f0{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===mt?void 0:e}}class $S extends f0{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==mt)}}let kS=class extends f0{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=ua(this,e,n,0)??mt)===Vo)return;const r=this._$AH,i=e===mt&&r!==mt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==mt&&(r===mt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}};class PS{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ua(this,e)}}const Sh=_l.litHtmlPolyfillSupport;Sh==null||Sh(u1,bg),(_l.litHtmlVersions??(_l.litHtmlVersions=[])).push("3.1.0");const TS=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new bg(e.insertBefore(dc(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let J=class extends Ss{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=TS(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Vo}};var Q3;J._$litElement$=!0,J.finalized=!0,(Q3=globalThis.litElementHydrateSupport)==null||Q3.call(globalThis,{LitElement:J});const $h=globalThis.litElementPolyfillSupport;$h==null||$h({LitElement:J});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let El,Hi,Vi;function Lb(t,e){El=document.createElement("style"),Hi=document.createElement("style"),Vi=document.createElement("style"),El.textContent=Ys(t).core.cssText,Hi.textContent=Ys(t).dark.cssText,Vi.textContent=Ys(t).light.cssText,document.head.appendChild(El),document.head.appendChild(Hi),document.head.appendChild(Vi),xg(e)}function xg(t){Hi&&Vi&&(t==="light"?(Hi.removeAttribute("media"),Vi.media="enabled"):(Vi.removeAttribute("media"),Hi.media="enabled"))}function Bb(t){El&&Hi&&Vi&&(El.textContent=Ys(t).core.cssText,Hi.textContent=Ys(t).dark.cssText,Vi.textContent=Ys(t).light.cssText)}function Ys(t){return{core:re`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${wr(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${wr((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${wr((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${wr((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${wr((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:re`
      :root {
        --w3m-color-mix: ${wr((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${wr((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:re`
      :root {
        --w3m-color-mix: ${wr((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${wr((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const Ce=re`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Ct=re`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Cg=re`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function AS(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function OS(t,e){return customElements.get(t)||customElements.define(t,e),e}function Q(t){return function(n){return typeof n=="function"?OS(t,n):AS(t,n)}}const IS=re`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var DS=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Kd=class extends J{render(){return T`<slot></slot>`}};Kd.styles=[Ce,IS];Kd=DS([Q("wui-card")],Kd);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const NS={attribute:!0,type:String,converter:Zd,reflect:!1,hasChanged:vg},RS=(t=NS,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function D(t){return(e,n)=>typeof n=="object"?RS(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(t){return D({...t,state:!0,attribute:!1})}const MS=re`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,jS=ie`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,LS=ie`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,BS=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,US=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,FS=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,zS=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,WS=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,HS=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,VS=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,qS=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ZS=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,GS=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,KS=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,QS=ie`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,YS=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,JS=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,XS=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,e$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,t$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,n$=ie` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,r$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,i$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,o$=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,s$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,a$=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,l$=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,c$=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,u$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,d$=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,f$=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,h$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,p$=ie`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,m$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,g$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,w$=ie`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,y$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,v$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,b$=ie` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,x$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,C$=ie`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,_$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,E$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,S$=ie`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,$$=ie`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,k$=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,P$=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,T$=ie`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,A$=ie`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,O$=ie`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,I$=ie`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,D$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,N$=ie`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,R$=ie`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var h0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const M$={allWallets:jS,appStore:LS,chromeStore:QS,apple:BS,arrowBottom:US,arrowLeft:FS,arrowRight:zS,arrowTop:WS,browser:HS,checkmark:VS,chevronBottom:qS,chevronLeft:ZS,chevronRight:GS,chevronTop:KS,clock:YS,close:JS,compass:e$,coinPlaceholder:XS,copy:t$,cursor:n$,desktop:r$,disconnect:i$,discord:o$,etherscan:s$,extension:a$,externalLink:l$,facebook:c$,filters:u$,github:d$,google:f$,helpCircle:h$,infoCircle:p$,mail:m$,mobile:g$,networkPlaceholder:w$,nftPlaceholder:y$,off:v$,playStore:b$,qrCode:x$,refresh:C$,search:_$,swapHorizontal:E$,swapHorizontalBold:S$,swapVertical:$$,telegram:k$,twitch:P$,twitter:T$,twitterIcon:A$,verify:O$,wallet:D$,walletConnect:N$,walletPlaceholder:I$,warningCircle:R$};let qo=class extends J{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,T`${M$[this.name]}`}};qo.styles=[Ce,Cg,MS];h0([D()],qo.prototype,"size",void 0);h0([D()],qo.prototype,"name",void 0);h0([D()],qo.prototype,"color",void 0);qo=h0([Q("wui-icon")],qo);const j$=re`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var _g=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let da=class extends J{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return T`<img src=${this.src} alt=${this.alt} />`}};da.styles=[Ce,Cg,j$];_g([D()],da.prototype,"src",void 0);_g([D()],da.prototype,"alt",void 0);da=_g([Q("wui-image")],da);const L$=re`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var B$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Qd=class extends J{render(){return T`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Qd.styles=[Ce,L$];Qd=B$([Q("wui-loading-hexagon")],Qd);const U$=re`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Eg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let fa=class extends J{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,T`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};fa.styles=[Ce,U$];Eg([D()],fa.prototype,"color",void 0);Eg([D()],fa.prototype,"size",void 0);fa=Eg([Q("wui-loading-spinner")],fa);const F$=re`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ub=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let hc=class extends J{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,i=116+r,o=245+r,s=360+r*1.75;return T`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};hc.styles=[Ce,F$];Ub([D({type:Number})],hc.prototype,"radius",void 0);hc=Ub([Q("wui-loading-thumbnail")],hc);const z$=re`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var p0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Zo=class extends J{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,T`<slot></slot>`}};Zo.styles=[z$];p0([D()],Zo.prototype,"width",void 0);p0([D()],Zo.prototype,"height",void 0);p0([D()],Zo.prototype,"borderRadius",void 0);Zo=p0([Q("wui-shimmer")],Zo);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fb={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zb=t=>(...e)=>({_$litDirective$:t,values:e});let Wb=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W$=zb(class extends Wb{constructor(t){var e;if(super(t),t.type!==Fb.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.it)o in e||(n.remove(o),this.it.delete(o));for(const o in e){const s=!!e[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return Vo}}),H$=re`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var m0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Go=class extends J{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,T`<slot class=${W$(e)}></slot>`}};Go.styles=[Ce,H$];m0([D()],Go.prototype,"variant",void 0);m0([D()],Go.prototype,"color",void 0);m0([D()],Go.prototype,"align",void 0);Go=m0([Q("wui-text")],Go);const V$=ie`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,q$=ie`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Z$=ie`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,G$=ie`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,K$=ie`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Q$=ie`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Y$=ie`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,J$=ie`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,X$=ie`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,ek=ie`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,tk=ie`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,nk=ie`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,rk=ie`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ik=re`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var Hb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const ok={browser:V$,dao:q$,defi:Z$,defiAlt:G$,eth:K$,layers:Q$,lock:Y$,login:J$,network:X$,nft:ek,noun:tk,profile:nk,system:rk};let pc=class extends J{constructor(){super(...arguments),this.name="browser"}render(){return T`${ok[this.name]}`}};pc.styles=[Ce,ik];Hb([D()],pc.prototype,"name",void 0);pc=Hb([Q("wui-visual")],pc);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=t=>t??mt,Ve={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,i=e&255;return[n,r,i]},tintColor(t,e){const[n,r,i]=t,o=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},sk=re`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Tn=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Zt=class extends J{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ve.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ve.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ve.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ve.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ve.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ve.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ve.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ve.getSpacingStyles(this.margin,3)};
    `,T`<slot></slot>`}};Zt.styles=[Ce,sk];Tn([D()],Zt.prototype,"flexDirection",void 0);Tn([D()],Zt.prototype,"flexWrap",void 0);Tn([D()],Zt.prototype,"flexBasis",void 0);Tn([D()],Zt.prototype,"flexGrow",void 0);Tn([D()],Zt.prototype,"flexShrink",void 0);Tn([D()],Zt.prototype,"alignItems",void 0);Tn([D()],Zt.prototype,"justifyContent",void 0);Tn([D()],Zt.prototype,"columnGap",void 0);Tn([D()],Zt.prototype,"rowGap",void 0);Tn([D()],Zt.prototype,"gap",void 0);Tn([D()],Zt.prototype,"padding",void 0);Tn([D()],Zt.prototype,"margin",void 0);Zt=Tn([Q("wui-flex")],Zt);const ak=re`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var g0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ko=class extends J{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return T`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",T`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Ve.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Ko.styles=[Ce,ak];g0([D()],Ko.prototype,"imageSrc",void 0);g0([D()],Ko.prototype,"alt",void 0);g0([D()],Ko.prototype,"address",void 0);Ko=g0([Q("wui-avatar")],Ko);const lk=re`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var di=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Un=class extends J{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=this.size==="xl",i=n?"12%":"16%",o=n?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",l=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${l||s?"100%":i};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,T` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Un.styles=[Ce,Ct,lk];di([D()],Un.prototype,"size",void 0);di([D()],Un.prototype,"backgroundColor",void 0);di([D()],Un.prototype,"iconColor",void 0);di([D()],Un.prototype,"iconSize",void 0);di([D()],Un.prototype,"background",void 0);di([D({type:Boolean})],Un.prototype,"border",void 0);di([D()],Un.prototype,"borderColor",void 0);di([D()],Un.prototype,"icon",void 0);Un=di([Q("wui-icon-box")],Un);const ck=re`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var as=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let $r=class extends J{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return T`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${Oe(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ve.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?T`<wui-image src=${this.networkSrc}></wui-image>`:T`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return T`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};$r.styles=[Ce,Ct,ck];as([D()],$r.prototype,"networkSrc",void 0);as([D()],$r.prototype,"avatarSrc",void 0);as([D()],$r.prototype,"balance",void 0);as([D({type:Boolean})],$r.prototype,"disabled",void 0);as([D({type:Boolean})],$r.prototype,"isProfileName",void 0);as([D()],$r.prototype,"address",void 0);$r=as([Q("wui-account-button")],$r);const uk=re`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var ls=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let kr=class extends J{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),T`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
      ${this.templateInstalledBadge()}
    `}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?T`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:T`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}templateInstalledBadge(){return this.installed?T`
        <wui-icon-box
          size=${this.badgeSize}
          iconSize=${this.badgeSize}
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      `:null}};kr.styles=[Ce,uk];ls([D()],kr.prototype,"size",void 0);ls([D()],kr.prototype,"name",void 0);ls([D()],kr.prototype,"imageSrc",void 0);ls([D()],kr.prototype,"walletIcon",void 0);ls([D({type:Boolean})],kr.prototype,"installed",void 0);ls([D()],kr.prototype,"badgeSize",void 0);kr=ls([Q("wui-wallet-image")],kr);const dk=re`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Vb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const kh=4;let mc=class extends J{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<kh;return T`${this.walletImages.slice(0,kh).map(({src:n,walletName:r})=>T`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${Oe(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(kh-this.walletImages.length)].map(()=>T` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};mc.styles=[Ce,dk];Vb([D({type:Array})],mc.prototype,"walletImages",void 0);mc=Vb([Q("wui-all-wallets-image")],mc);const fk=re`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var uo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let or=class extends J{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return T`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?T`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:T``}};or.styles=[Ce,Ct,fk];uo([D()],or.prototype,"size",void 0);uo([D({type:Boolean})],or.prototype,"disabled",void 0);uo([D({type:Boolean})],or.prototype,"fullWidth",void 0);uo([D({type:Boolean})],or.prototype,"loading",void 0);uo([D()],or.prototype,"variant",void 0);uo([D({type:Boolean})],or.prototype,"hasIconLeft",void 0);uo([D({type:Boolean})],or.prototype,"hasIconRight",void 0);or=uo([Q("wui-button")],or);const qb=ie`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,hk=re`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Zb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gc=class extends J{constructor(){super(...arguments),this.type="wallet"}render(){return T`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?T` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${qb}`:T`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};gc.styles=[Ce,Ct,hk];Zb([D()],gc.prototype,"type",void 0);gc=Zb([Q("wui-card-select-loader")],gc);const pk=ie`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,mk=re`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var tu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ji=class extends J{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,T`${this.templateVisual()} ${e?pk:qb}`}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:T`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Ji.styles=[Ce,mk];tu([D()],Ji.prototype,"size",void 0);tu([D()],Ji.prototype,"name",void 0);tu([D()],Ji.prototype,"imageSrc",void 0);tu([D({type:Boolean})],Ji.prototype,"selected",void 0);Ji=tu([Q("wui-network-image")],Ji);const gk=re`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var cs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Pr=class extends J{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return T`
      <button data-selected=${Oe(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?T`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Oe(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:T`
      <wui-wallet-image
        size="md"
        imageSrc=${Oe(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Pr.styles=[Ce,Ct,gk];cs([D()],Pr.prototype,"name",void 0);cs([D()],Pr.prototype,"type",void 0);cs([D()],Pr.prototype,"imageSrc",void 0);cs([D({type:Boolean})],Pr.prototype,"disabled",void 0);cs([D({type:Boolean})],Pr.prototype,"selected",void 0);cs([D({type:Boolean})],Pr.prototype,"installed",void 0);Pr=cs([Q("wui-card-select")],Pr);const wk=re`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var La=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ri=class extends J{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e=this.variant==="transparent"?"small-600":"paragraph-600";return T`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${Ve.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?T`<wui-image src=${this.imageSrc}></wui-image>`:null}};ri.styles=[Ce,Ct,wk];La([D()],ri.prototype,"variant",void 0);La([D()],ri.prototype,"imageSrc",void 0);La([D({type:Boolean})],ri.prototype,"disabled",void 0);La([D()],ri.prototype,"icon",void 0);La([D()],ri.prototype,"href",void 0);ri=La([Q("wui-chip")],ri);const yk=re`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Sg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ha=class extends J{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return T`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?T`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ha.styles=[Ce,Ct,yk];Sg([D()],ha.prototype,"size",void 0);Sg([D({type:Boolean})],ha.prototype,"loading",void 0);ha=Sg([Q("wui-connect-button")],ha);const vk=re`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var w0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Qo=class extends J{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return T`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Qo.styles=[Ce,Ct,vk];w0([D({type:Boolean})],Qo.prototype,"disabled",void 0);w0([D()],Qo.prototype,"label",void 0);w0([D()],Qo.prototype,"buttonLabel",void 0);Qo=w0([Q("wui-cta-button")],Qo);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bk=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,e,!1),Sl(i,e);return!0},Yd=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},Gb=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),_k(e)}};function xk(t){this._$AN!==void 0?(Yd(this),this._$AM=t,Gb(this)):this._$AM=t}function Ck(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)Sl(r[o],!1),Yd(r[o]);else r!=null&&(Sl(r,!1),Yd(r));else Sl(this,t)}const _k=t=>{t.type==Fb.CHILD&&(t._$AP??(t._$AP=Ck),t._$AQ??(t._$AQ=xk))};let Ek=class extends Wb{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),Gb(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Sl(this,e),Yd(this))}setValue(e){if(bk(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $g=()=>new Sk;let Sk=class{};const Ph=new WeakMap,kg=zb(class extends Ek{render(t){return mt}update(t,[e]){var r;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.ct=(r=t.options)==null?void 0:r.host,this.ot(this.lt=t.element)),mt}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let n=Ph.get(e);n===void 0&&(n=new WeakMap,Ph.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return typeof this.G=="function"?(t=Ph.get(this.ct??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),$k=re`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var us=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Tr=class extends J{constructor(){super(...arguments),this.inputElementRef=$g(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return T` ${this.templateIcon()}
      <input
        ${kg(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Oe(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?T`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Tr.styles=[Ce,Ct,$k];us([D()],Tr.prototype,"size",void 0);us([D()],Tr.prototype,"icon",void 0);us([D({type:Boolean})],Tr.prototype,"disabled",void 0);us([D()],Tr.prototype,"placeholder",void 0);us([D()],Tr.prototype,"type",void 0);us([D()],Tr.prototype,"keyHint",void 0);Tr=us([Q("wui-input-text")],Tr);const kk=re`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Pg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let pa=class extends J{constructor(){super(...arguments),this.disabled=!1}render(){return T`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?T`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};pa.styles=[Ce,kk];Pg([D()],pa.prototype,"errorMessage",void 0);Pg([D({type:Boolean})],pa.prototype,"disabled",void 0);pa=Pg([Q("wui-email-input")],pa);const Pk=re`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var nu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xi=class extends J{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Xi.styles=[Ce,Ct,Cg,Pk];nu([D()],Xi.prototype,"size",void 0);nu([D({type:Boolean})],Xi.prototype,"disabled",void 0);nu([D()],Xi.prototype,"icon",void 0);nu([D()],Xi.prototype,"iconColor",void 0);Xi=nu([Q("wui-icon-link")],Xi);const Tk=re`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Kb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wc=class extends J{constructor(){super(...arguments),this.icon="copy"}render(){return T`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};wc.styles=[Ce,Ct,Tk];Kb([D()],wc.prototype,"icon",void 0);wc=Kb([Q("wui-input-element")],wc);const Ak=re`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var Qb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yc=class extends J{constructor(){super(...arguments),this.disabled=!1}render(){return T`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};yc.styles=[Ce,Ct,Ak];Qb([D({type:Boolean})],yc.prototype,"disabled",void 0);yc=Qb([Q("wui-input-numeric")],yc);const Ok=re`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Tg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ma=class extends J{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ma.styles=[Ce,Ct,Ok];Tg([D({type:Boolean})],ma.prototype,"disabled",void 0);Tg([D()],ma.prototype,"color",void 0);ma=Tg([Q("wui-link")],ma);const Ik=re`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Rr=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let $n=class extends J{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return T`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Oe(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return T`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return T`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return T`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?T`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:T``}chevronTemplate(){return this.chevron?T`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};$n.styles=[Ce,Ct,Ik];Rr([D()],$n.prototype,"icon",void 0);Rr([D()],$n.prototype,"iconSize",void 0);Rr([D()],$n.prototype,"variant",void 0);Rr([D()],$n.prototype,"iconVariant",void 0);Rr([D({type:Boolean})],$n.prototype,"disabled",void 0);Rr([D()],$n.prototype,"imageSrc",void 0);Rr([D()],$n.prototype,"alt",void 0);Rr([D({type:Boolean})],$n.prototype,"chevron",void 0);Rr([D({type:Boolean})],$n.prototype,"loading",void 0);$n=Rr([Q("wui-list-item")],$n);var d1;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(d1||(d1={}));const Dk=re`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var ds=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ar=class extends J{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",i=n!=null&&n.url?n.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,T`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?T`<div class="swap-images-container">
        ${e!=null&&e.url?T`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?T`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?T`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?T`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:T`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?T`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Ar.styles=[Dk];ds([D()],Ar.prototype,"type",void 0);ds([D()],Ar.prototype,"status",void 0);ds([D()],Ar.prototype,"direction",void 0);ds([D({type:Boolean})],Ar.prototype,"onlyDirectionIcon",void 0);ds([D({type:Array})],Ar.prototype,"images",void 0);ds([D({type:Object})],Ar.prototype,"secondImage",void 0);Ar=ds([Q("wui-transaction-visual")],Ar);const Nk=re`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var fo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let sr=class extends J{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return T`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Oe(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Oe(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${d1[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?T`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?T`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};sr.styles=[Ce,Nk];fo([D()],sr.prototype,"type",void 0);fo([D({type:Array})],sr.prototype,"descriptions",void 0);fo([D()],sr.prototype,"date",void 0);fo([D({type:Boolean})],sr.prototype,"onlyDirectionIcon",void 0);fo([D()],sr.prototype,"status",void 0);fo([D()],sr.prototype,"direction",void 0);fo([D({type:Array})],sr.prototype,"images",void 0);sr=fo([Q("wui-transaction-list-item")],sr);const Rk=re`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Mk=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Jd=class extends J{render(){return T`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Jd.styles=[Ce,Rk];Jd=Mk([Q("wui-transaction-list-item-loader")],Jd);const jk=re`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Yb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let vc=class extends J{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,T`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};vc.styles=[Ce,jk];Yb([D()],vc.prototype,"variant",void 0);vc=Yb([Q("wui-tag")],vc);const Lk=re`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var fr=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gn=class extends J{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?T` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?T` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?T`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?T`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?T`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?T`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};gn.styles=[Ce,Ct,Lk];fr([D({type:Array})],gn.prototype,"walletImages",void 0);fr([D()],gn.prototype,"imageSrc",void 0);fr([D()],gn.prototype,"name",void 0);fr([D()],gn.prototype,"tagLabel",void 0);fr([D()],gn.prototype,"tagVariant",void 0);fr([D()],gn.prototype,"icon",void 0);fr([D()],gn.prototype,"walletIcon",void 0);fr([D({type:Boolean})],gn.prototype,"installed",void 0);fr([D({type:Boolean})],gn.prototype,"disabled",void 0);fr([D({type:Boolean})],gn.prototype,"showAllWallets",void 0);gn=fr([Q("wui-list-wallet")],gn);const Bk=re`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Jb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let bc=class extends J{constructor(){super(...arguments),this.logo="google"}render(){return T`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};bc.styles=[Ce,Bk];Jb([D()],bc.prototype,"logo",void 0);bc=Jb([Q("wui-logo")],bc);const Uk=re`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ag=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ga=class extends J{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ga.styles=[Ce,Ct,Uk];Ag([D()],ga.prototype,"logo",void 0);Ag([D({type:Boolean})],ga.prototype,"disabled",void 0);ga=Ag([Q("wui-logo-select")],ga);const Fk=re`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Og=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wa=class extends J{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return T`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?T`<wui-image src=${this.imageSrc}></wui-image>`:T`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};wa.styles=[Ce,Ct,Fk];Og([D()],wa.prototype,"imageSrc",void 0);Og([D({type:Boolean})],wa.prototype,"disabled",void 0);wa=Og([Q("wui-network-button")],wa);const zk=re`
  :host {
    position: relative;
    display: block;
  }
`;var Xb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xc=class extends J{constructor(){super(...arguments),this.length=6,this.numerics=[],this.valueArr=Array.from({length:this.length}).map(()=>""),this.handleKeyDown=(e,n)=>{const r=e.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();const s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):(i.value="",this.valueArr[n]="");break;case"Backspace":i.value===""?this.focusInputField("prev",n):(i.value="",this.valueArr[n]="");break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(e==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return T`
      <wui-flex gap="xxs">
        ${Array.from({length:this.length}).map((e,n)=>T`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,n){const r=e.target,i=this.getInputElement(r);if(i){const o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,n):Ve.isNumber(o)&&e.data?(i.value=e.data,this.valueArr[n]=e.data,this.focusInputField("next",n)):(i.value="",this.valueArr[n]="")}this.dispatchInputChangeEvent()}handlePaste(e,n,r){const i=n[0];if(i&&Ve.isNumber(i)){e.value=i,this.valueArr[r]=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else e.value="",this.valueArr[r]=""}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.valueArr.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};xc.styles=[Ce,zk];Xb([D({type:Number})],xc.prototype,"length",void 0);xc=Xb([Q("wui-otp")],xc);var ru={},Wk=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},e4={},An={};let Ig;const Hk=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];An.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};An.getSymbolTotalCodewords=function(e){return Hk[e]};An.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};An.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Ig=e};An.isKanjiModeEnabled=function(){return typeof Ig<"u"};An.toSJIS=function(e){return Ig(e)};var y0={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(y0);function t4(){this.buffer=[],this.length=0}t4.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Vk=t4;function iu(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}iu.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};iu.prototype.get=function(t,e){return this.data[t*this.size+e]};iu.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};iu.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var qk=iu,n4={};(function(t){const e=An.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],o=t.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(n4);var r4={};const Zk=An.getSymbolSize,Jw=7;r4.getPositions=function(e){const n=Zk(e);return[[0,0],[n-Jw,0],[0,n-Jw]]};var i4={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,c=null,u=null;for(let f=0;f<o;f++){a=l=0,c=u=null;for(let h=0;h<o;h++){let g=i.get(f,h);g===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=g,a=1),g=i.get(h,f),g===u?l++:(l>=5&&(s+=e.N1+(l-5)),u=g,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function n(r,i,o){switch(r){case t.Patterns.PATTERN000:return(i+o)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(i+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return i*o%2+i*o%3===0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},t.getBestMask=function(i,o){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),t.applyMask(c,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),u<l&&(l=u,a=c)}return a}})(i4);var v0={};const Oi=y0,Mu=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ju=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];v0.getBlocksCount=function(e,n){switch(n){case Oi.L:return Mu[(e-1)*4+0];case Oi.M:return Mu[(e-1)*4+1];case Oi.Q:return Mu[(e-1)*4+2];case Oi.H:return Mu[(e-1)*4+3];default:return}};v0.getTotalCodewordsCount=function(e,n){switch(n){case Oi.L:return ju[(e-1)*4+0];case Oi.M:return ju[(e-1)*4+1];case Oi.Q:return ju[(e-1)*4+2];case Oi.H:return ju[(e-1)*4+3];default:return}};var o4={},b0={};const $l=new Uint8Array(512),Xd=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)$l[n]=e,Xd[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)$l[n]=$l[n-255]})();b0.log=function(e){if(e<1)throw new Error("log("+e+")");return Xd[e]};b0.exp=function(e){return $l[e]};b0.mul=function(e,n){return e===0||n===0?0:$l[Xd[e]+Xd[n]]};(function(t){const e=b0;t.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=e.mul(r[s],i[a]);return o},t.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=e.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=t.mul(i,new Uint8Array([1,e.exp(o)]));return i}})(o4);const s4=o4;function Dg(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Dg.prototype.initialize=function(e){this.degree=e,this.genPoly=s4.generateECPolynomial(this.degree)};Dg.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=s4.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var Gk=Dg,a4={},ho={},Ng={};Ng.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Mr={};const l4="[0-9]+",Kk="[A-Z $%*+\\-./:]+";let Cc="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Cc=Cc.replace(/u/g,"\\u");const Qk="(?:(?![A-Z0-9 $%*+\\-./:]|"+Cc+`)(?:.|[\r
]))+`;Mr.KANJI=new RegExp(Cc,"g");Mr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Mr.BYTE=new RegExp(Qk,"g");Mr.NUMERIC=new RegExp(l4,"g");Mr.ALPHANUMERIC=new RegExp(Kk,"g");const Yk=new RegExp("^"+Cc+"$"),Jk=new RegExp("^"+l4+"$"),Xk=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Mr.testKanji=function(e){return Yk.test(e)};Mr.testNumeric=function(e){return Jk.test(e)};Mr.testAlphanumeric=function(e){return Xk.test(e)};(function(t){const e=Ng,n=Mr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return n.testNumeric(o)?t.NUMERIC:n.testAlphanumeric(o)?t.ALPHANUMERIC:n.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch{return s}}})(ho);(function(t){const e=An,n=v0,r=y0,i=ho,o=Ng,s=7973,a=e.getBCHDigit(s);function l(h,g,y){for(let C=1;C<=40;C++)if(g<=t.getCapacity(C,y,h))return C}function c(h,g){return i.getCharCountIndicator(h,g)+4}function u(h,g){let y=0;return h.forEach(function(C){const E=c(C.mode,g);y+=E+C.getBitsLength()}),y}function f(h,g){for(let y=1;y<=40;y++)if(u(h,y)<=t.getCapacity(y,g,i.MIXED))return y}t.from=function(g,y){return o.isValid(g)?parseInt(g,10):y},t.getCapacity=function(g,y,C){if(!o.isValid(g))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=i.BYTE);const E=e.getSymbolTotalCodewords(g),b=n.getTotalCodewordsCount(g,y),m=(E-b)*8;if(C===i.MIXED)return m;const v=m-c(C,g);switch(C){case i.NUMERIC:return Math.floor(v/10*3);case i.ALPHANUMERIC:return Math.floor(v/11*2);case i.KANJI:return Math.floor(v/13);case i.BYTE:default:return Math.floor(v/8)}},t.getBestVersionForData=function(g,y){let C;const E=r.from(y,r.M);if(Array.isArray(g)){if(g.length>1)return f(g,E);if(g.length===0)return 1;C=g[0]}else C=g;return l(C.mode,C.getLength(),E)},t.getEncodedBits=function(g){if(!o.isValid(g)||g<7)throw new Error("Invalid QR Code version");let y=g<<12;for(;e.getBCHDigit(y)-a>=0;)y^=s<<e.getBCHDigit(y)-a;return g<<12|y}})(a4);var c4={};const f1=An,u4=1335,eP=21522,Xw=f1.getBCHDigit(u4);c4.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;f1.getBCHDigit(i)-Xw>=0;)i^=u4<<f1.getBCHDigit(i)-Xw;return(r<<10|i)^eP};var d4={};const tP=ho;function ya(t){this.mode=tP.NUMERIC,this.data=t.toString()}ya.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};ya.prototype.getLength=function(){return this.data.length};ya.prototype.getBitsLength=function(){return ya.getBitsLength(this.data.length)};ya.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,o*3+1))};var nP=ya;const rP=ho,Th=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function va(t){this.mode=rP.ALPHANUMERIC,this.data=t}va.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};va.prototype.getLength=function(){return this.data.length};va.prototype.getBitsLength=function(){return va.getBitsLength(this.data.length)};va.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Th.indexOf(this.data[n])*45;r+=Th.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Th.indexOf(this.data[n]),6)};var iP=va,oP=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const sP=oP,aP=ho;function ba(t){this.mode=aP.BYTE,typeof t=="string"&&(t=sP(t)),this.data=new Uint8Array(t)}ba.getBitsLength=function(e){return e*8};ba.prototype.getLength=function(){return this.data.length};ba.prototype.getBitsLength=function(){return ba.getBitsLength(this.data.length)};ba.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var lP=ba;const cP=ho,uP=An;function xa(t){this.mode=cP.KANJI,this.data=t}xa.getBitsLength=function(e){return e*13};xa.prototype.getLength=function(){return this.data.length};xa.prototype.getBitsLength=function(){return xa.getBitsLength(this.data.length)};xa.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=uP.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var dP=xa,f4={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,u,f,h,g,y,C,E;!a.empty();){l=a.pop(),c=l.value,f=l.cost,h=n[c]||{};for(u in h)h.hasOwnProperty(u)&&(g=h[u],y=f+g,C=s[u],E=typeof s[u]>"u",(E||C>y)&&(s[u]=y,a.push(u,y),o[u]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var b=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(f4);var fP=f4.exports;(function(t){const e=ho,n=nP,r=iP,i=lP,o=dP,s=Mr,a=An,l=fP;function c(b){return unescape(encodeURIComponent(b)).length}function u(b,m,v){const x=[];let _;for(;(_=b.exec(v))!==null;)x.push({data:_[0],index:_.index,mode:m,length:_[0].length});return x}function f(b){const m=u(s.NUMERIC,e.NUMERIC,b),v=u(s.ALPHANUMERIC,e.ALPHANUMERIC,b);let x,_;return a.isKanjiModeEnabled()?(x=u(s.BYTE,e.BYTE,b),_=u(s.KANJI,e.KANJI,b)):(x=u(s.BYTE_KANJI,e.BYTE,b),_=[]),m.concat(v,x,_).sort(function(d,$){return d.index-$.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function h(b,m){switch(m){case e.NUMERIC:return n.getBitsLength(b);case e.ALPHANUMERIC:return r.getBitsLength(b);case e.KANJI:return o.getBitsLength(b);case e.BYTE:return i.getBitsLength(b)}}function g(b){return b.reduce(function(m,v){const x=m.length-1>=0?m[m.length-1]:null;return x&&x.mode===v.mode?(m[m.length-1].data+=v.data,m):(m.push(v),m)},[])}function y(b){const m=[];for(let v=0;v<b.length;v++){const x=b[v];switch(x.mode){case e.NUMERIC:m.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:m.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:m.push([x,{data:x.data,mode:e.BYTE,length:c(x.data)}]);break;case e.BYTE:m.push([{data:x.data,mode:e.BYTE,length:c(x.data)}])}}return m}function C(b,m){const v={},x={start:{}};let _=["start"];for(let S=0;S<b.length;S++){const d=b[S],$=[];for(let O=0;O<d.length;O++){const I=d[O],R=""+S+O;$.push(R),v[R]={node:I,lastCount:0},x[R]={};for(let Y=0;Y<_.length;Y++){const te=_[Y];v[te]&&v[te].node.mode===I.mode?(x[te][R]=h(v[te].lastCount+I.length,I.mode)-h(v[te].lastCount,I.mode),v[te].lastCount+=I.length):(v[te]&&(v[te].lastCount=I.length),x[te][R]=h(I.length,I.mode)+4+e.getCharCountIndicator(I.mode,m))}}_=$}for(let S=0;S<_.length;S++)x[_[S]].end=0;return{map:x,table:v}}function E(b,m){let v;const x=e.getBestModeForData(b);if(v=e.from(m,x),v!==e.BYTE&&v.bit<x.bit)throw new Error('"'+b+'" cannot be encoded with mode '+e.toString(v)+`.
 Suggested mode is: `+e.toString(x));switch(v===e.KANJI&&!a.isKanjiModeEnabled()&&(v=e.BYTE),v){case e.NUMERIC:return new n(b);case e.ALPHANUMERIC:return new r(b);case e.KANJI:return new o(b);case e.BYTE:return new i(b)}}t.fromArray=function(m){return m.reduce(function(v,x){return typeof x=="string"?v.push(E(x,null)):x.data&&v.push(E(x.data,x.mode)),v},[])},t.fromString=function(m,v){const x=f(m,a.isKanjiModeEnabled()),_=y(x),S=C(_,v),d=l.find_path(S.map,"start","end"),$=[];for(let O=1;O<d.length-1;O++)$.push(S.table[d[O]].node);return t.fromArray(g($))},t.rawSplit=function(m){return t.fromArray(f(m,a.isKanjiModeEnabled()))}})(d4);const x0=An,Ah=y0,hP=Vk,pP=qk,mP=n4,gP=r4,h1=i4,p1=v0,wP=Gk,ef=a4,yP=c4,vP=ho,Oh=d4;function bP(t,e){const n=t.size,r=gP.getPositions(e);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(o+a,s+l,!0,!0):t.set(o+a,s+l,!1,!0))}}function xP(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function CP(t,e){const n=mP.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function _P(t,e){const n=t.size,r=ef.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function Ih(t,e,n){const r=t.size,i=yP.getEncodedBits(e,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function EP(t,e){const n=t.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let c=!1;s<e.length&&(c=(e[s]>>>o&1)===1),t.set(i,a-l,c),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function SP(t,e,n){const r=new hP;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),vP.getCharCountIndicator(l.mode,t)),l.write(r)});const i=x0.getSymbolTotalCodewords(t),o=p1.getTotalCodewordsCount(t,e),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return $P(r,t,e)}function $P(t,e,n){const r=x0.getSymbolTotalCodewords(e),i=p1.getTotalCodewordsCount(e,n),o=r-i,s=p1.getBlocksCount(e,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),f=u+1,h=c-u,g=new wP(h);let y=0;const C=new Array(s),E=new Array(s);let b=0;const m=new Uint8Array(t.buffer);for(let d=0;d<s;d++){const $=d<l?u:f;C[d]=m.slice(y,y+$),E[d]=g.encode(C[d]),y+=$,b=Math.max(b,$)}const v=new Uint8Array(r);let x=0,_,S;for(_=0;_<b;_++)for(S=0;S<s;S++)_<C[S].length&&(v[x++]=C[S][_]);for(_=0;_<h;_++)for(S=0;S<s;S++)v[x++]=E[S][_];return v}function kP(t,e,n,r){let i;if(Array.isArray(t))i=Oh.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const u=Oh.rawSplit(t);c=ef.getBestVersionForData(u,n)}i=Oh.fromString(t,c||40)}else throw new Error("Invalid data");const o=ef.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=SP(e,n,i),a=x0.getSymbolSize(e),l=new pP(a);return bP(l,e),xP(l),CP(l,e),Ih(l,n,0),e>=7&&_P(l,e),EP(l,s),isNaN(r)&&(r=h1.getBestMask(l,Ih.bind(null,l,n))),h1.applyMask(r,l),Ih(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}e4.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Ah.M,i,o;return typeof n<"u"&&(r=Ah.from(n.errorCorrectionLevel,Ah.M),i=ef.from(n.version),o=h1.from(n.maskPattern),n.toSJISFunc&&x0.setToSJISFunction(n.toSJISFunc)),kP(e,i,r,o)};var h4={},Rg={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const o=t.getScale(r,i);return Math.floor((r+i.margin*2)*o)},t.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=t.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,f=[o.color.light,o.color.dark];for(let h=0;h<c;h++)for(let g=0;g<c;g++){let y=(h*c+g)*4,C=o.color.light;if(h>=u&&g>=u&&h<c-u&&g<c-u){const E=Math.floor((h-u)/l),b=Math.floor((g-u)/l);C=f[a[E*s+b]?1:0]}r[y++]=C.r,r[y++]=C.g,r[y++]=C.b,r[y]=C.a}}})(Rg);(function(t){const e=Rg;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=e.getOptions(l);const u=e.getImageWidth(o.modules.size,l),f=c.getContext("2d"),h=f.createImageData(u,u);return e.qrToImageData(h.data,o,l),n(f,c,u),f.putImageData(h,0,0),c},t.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=t.render(o,s,l),u=l.type||"image/png",f=l.rendererOpts||{};return c.toDataURL(u,f.quality)}})(h4);var p4={};const PP=Rg;function e3(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Dh(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function TP(t,e,n){let r="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!o&&(o=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=o?Dh("M",l+n,.5+c+n):Dh("m",i,0),i=0,o=!1),l+1<e&&t[a+1]||(r+=Dh("h",s),s=0)):i++}return r}p4.render=function(e,n,r){const i=PP.getOptions(n),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+e3(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+e3(i.color.dark,"stroke")+' d="'+TP(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,h),h};const AP=Wk,m1=e4,m4=h4,OP=p4;function Mg(t,e,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!AP())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,c){try{const u=m1.create(n,r);l(t(u,e,r))}catch(u){c(u)}})}try{const l=m1.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}ru.create=m1.create;ru.toCanvas=Mg.bind(null,m4.render);ru.toDataURL=Mg.bind(null,m4.renderToDataURL);ru.toString=Mg.bind(null,function(t,e,n){return OP.render(t,n)});const IP=.1,t3=2.5,Br=7;function Nh(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+IP}function DP(t,e){const n=Array.prototype.slice.call(ru.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const NP={generate(t,e,n){const r="#141414",i="transparent",s=[],a=DP(t,"Q"),l=e/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:C,y:E})=>{const b=(a.length-Br)*l*C,m=(a.length-Br)*l*E,v=.45;for(let x=0;x<c.length;x+=1){const _=l*(Br-x*2);s.push(ie`
            <rect
              fill=${x===2?r:i}
              width=${x===0?_-5:_}
              rx= ${x===0?(_-5)*v:_*v}
              ry= ${x===0?(_-5)*v:_*v}
              stroke=${r}
              stroke-width=${x===0?5:0}
              height=${x===0?_-5:_}
              x= ${x===0?m+l*x+5/2:m+l*x}
              y= ${x===0?b+l*x+5/2:b+l*x}
            />
          `)}});const u=Math.floor((n+25)/l),f=a.length/2-u/2,h=a.length/2+u/2-1,g=[];a.forEach((C,E)=>{C.forEach((b,m)=>{if(a[E][m]&&!(E<Br&&m<Br||E>a.length-(Br+1)&&m<Br||E<Br&&m>a.length-(Br+1))&&!(E>f&&E<h&&m>f&&m<h)){const v=E*l+l/2,x=m*l+l/2;g.push([v,x])}})});const y={};return g.forEach(([C,E])=>{var b;y[C]?(b=y[C])==null||b.push(E):y[C]=[E]}),Object.entries(y).map(([C,E])=>{const b=E.filter(m=>E.every(v=>!Nh(m,v,l)));return[Number(C),b]}).forEach(([C,E])=>{E.forEach(b=>{s.push(ie`<circle cx=${C} cy=${b} fill=${r} r=${l/t3} />`)})}),Object.entries(y).filter(([C,E])=>E.length>1).map(([C,E])=>{const b=E.filter(m=>E.some(v=>Nh(m,v,l)));return[Number(C),b]}).map(([C,E])=>{E.sort((m,v)=>m<v?-1:1);const b=[];for(const m of E){const v=b.find(x=>x.some(_=>Nh(m,_,l)));v?v.push(m):b.push([m])}return[C,b.map(m=>[m[0],m[m.length-1]])]}).forEach(([C,E])=>{E.forEach(([b,m])=>{s.push(ie`
              <line
                x1=${C}
                x2=${C}
                y1=${b}
                y2=${m}
                stroke=${r}
                stroke-width=${l/(t3/2)}
                stroke-linecap="round"
              />
            `)})}),s}},RP=re`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Ba=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ii=class extends J{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,T`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return ie`
      <svg height=${e} width=${e}>
        ${NP.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:T`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ii.styles=[Ce,RP];Ba([D()],ii.prototype,"uri",void 0);Ba([D({type:Number})],ii.prototype,"size",void 0);Ba([D()],ii.prototype,"theme",void 0);Ba([D()],ii.prototype,"imageSrc",void 0);Ba([D()],ii.prototype,"alt",void 0);ii=Ba([Q("wui-qr-code")],ii);const MP=re`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var jP=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let tf=class extends J{constructor(){super(...arguments),this.inputComponentRef=$g()}render(){return T`
      <wui-input-text
        ${kg(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};tf.styles=[Ce,MP];tf=jP([Q("wui-search-bar")],tf);const LP=re`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var ou=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let eo=class extends J{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return T`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};eo.styles=[Ce,LP];ou([D()],eo.prototype,"backgroundColor",void 0);ou([D()],eo.prototype,"iconColor",void 0);ou([D()],eo.prototype,"icon",void 0);ou([D()],eo.prototype,"message",void 0);eo=ou([Q("wui-snackbar")],eo);const BP=re`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var po=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ar=class extends J{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return T`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],i=this.buttons[e],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};ar.styles=[Ce,Ct,BP];po([D({type:Array})],ar.prototype,"tabs",void 0);po([D()],ar.prototype,"onTabChange",void 0);po([D({type:Array})],ar.prototype,"buttons",void 0);po([D({type:Boolean})],ar.prototype,"disabled",void 0);po([ce()],ar.prototype,"activeTab",void 0);po([ce()],ar.prototype,"localTabWidth",void 0);po([ce()],ar.prototype,"isDense",void 0);ar=po([Q("wui-tabs")],ar);const UP=re`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var jg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ca=class extends J{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return T`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ca.styles=[Ce,Ct,UP];jg([D()],Ca.prototype,"placement",void 0);jg([D()],Ca.prototype,"message",void 0);Ca=jg([Q("wui-tooltip")],Ca);const FP=re`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var C0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Yo=class extends J{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,T`${this.templateVisual()}`}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:T`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Yo.styles=[Ce,FP];C0([D()],Yo.prototype,"imageSrc",void 0);C0([D()],Yo.prototype,"alt",void 0);C0([D({type:Boolean})],Yo.prototype,"borderRadiusFull",void 0);Yo=C0([Q("wui-visual-thumbnail")],Yo);const zP=re`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var _0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Jo=class extends J{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return T`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Jo.styles=[Ce,Ct,zP];_0([D()],Jo.prototype,"label",void 0);_0([D()],Jo.prototype,"description",void 0);_0([D()],Jo.prototype,"icon",void 0);Jo=_0([Q("wui-notice-card")],Jo);const WP=re`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var zn=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let en=class extends J{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ve.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ve.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ve.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ve.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ve.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ve.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ve.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ve.getSpacingStyles(this.margin,3)};
    `,T`<slot></slot>`}};en.styles=[Ce,WP];zn([D()],en.prototype,"gridTemplateRows",void 0);zn([D()],en.prototype,"gridTemplateColumns",void 0);zn([D()],en.prototype,"justifyItems",void 0);zn([D()],en.prototype,"alignItems",void 0);zn([D()],en.prototype,"justifyContent",void 0);zn([D()],en.prototype,"alignContent",void 0);zn([D()],en.prototype,"columnGap",void 0);zn([D()],en.prototype,"rowGap",void 0);zn([D()],en.prototype,"gap",void 0);zn([D()],en.prototype,"padding",void 0);zn([D()],en.prototype,"margin",void 0);en=zn([Q("wui-grid")],en);const HP=re`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var g4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _c=class extends J{constructor(){super(...arguments),this.text=""}render(){return T`${this.template()}`}template(){return this.text?T`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};_c.styles=[Ce,HP];g4([D()],_c.prototype,"text",void 0);_c=g4([Q("wui-separator")],_c);var w4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(V1,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",f="month",h="quarter",g="year",y="date",C="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(W){var F=["th","st","nd","rd"],j=W%100;return"["+W+(F[(j-20)%10]||F[j]||F[0])+"]"}},v=function(W,F,j){var U=String(W);return!U||U.length>=F?W:""+Array(F+1-U.length).join(j)+W},x={s:v,z:function(W){var F=-W.utcOffset(),j=Math.abs(F),U=Math.floor(j/60),N=j%60;return(F<=0?"+":"-")+v(U,2,"0")+":"+v(N,2,"0")},m:function W(F,j){if(F.date()<j.date())return-W(j,F);var U=12*(j.year()-F.year())+(j.month()-F.month()),N=F.clone().add(U,f),z=j-N<0,L=F.clone().add(U+(z?-1:1),f);return+(-(U+(j-N)/(z?N-L:L-N))||0)},a:function(W){return W<0?Math.ceil(W)||0:Math.floor(W)},p:function(W){return{M:f,y:g,w:u,d:c,D:y,h:l,m:a,s,ms:o,Q:h}[W]||String(W||"").toLowerCase().replace(/s$/,"")},u:function(W){return W===void 0}},_="en",S={};S[_]=m;var d="$isDayjsObject",$=function(W){return W instanceof Y||!(!W||!W[d])},O=function W(F,j,U){var N;if(!F)return _;if(typeof F=="string"){var z=F.toLowerCase();S[z]&&(N=z),j&&(S[z]=j,N=z);var L=F.split("-");if(!N&&L.length>1)return W(L[0])}else{var H=F.name;S[H]=F,N=H}return!U&&N&&(_=N),N||!U&&_},I=function(W,F){if($(W))return W.clone();var j=typeof F=="object"?F:{};return j.date=W,j.args=arguments,new Y(j)},R=x;R.l=O,R.i=$,R.w=function(W,F){return I(W,{locale:F.$L,utc:F.$u,x:F.$x,$offset:F.$offset})};var Y=function(){function W(j){this.$L=O(j.locale,null,!0),this.parse(j),this.$x=this.$x||j.x||{},this[d]=!0}var F=W.prototype;return F.parse=function(j){this.$d=function(U){var N=U.date,z=U.utc;if(N===null)return new Date(NaN);if(R.u(N))return new Date;if(N instanceof Date)return new Date(N);if(typeof N=="string"&&!/Z$/i.test(N)){var L=N.match(E);if(L){var H=L[2]-1||0,G=(L[7]||"0").substring(0,3);return z?new Date(Date.UTC(L[1],H,L[3]||1,L[4]||0,L[5]||0,L[6]||0,G)):new Date(L[1],H,L[3]||1,L[4]||0,L[5]||0,L[6]||0,G)}}return new Date(N)}(j),this.init()},F.init=function(){var j=this.$d;this.$y=j.getFullYear(),this.$M=j.getMonth(),this.$D=j.getDate(),this.$W=j.getDay(),this.$H=j.getHours(),this.$m=j.getMinutes(),this.$s=j.getSeconds(),this.$ms=j.getMilliseconds()},F.$utils=function(){return R},F.isValid=function(){return this.$d.toString()!==C},F.isSame=function(j,U){var N=I(j);return this.startOf(U)<=N&&N<=this.endOf(U)},F.isAfter=function(j,U){return I(j)<this.startOf(U)},F.isBefore=function(j,U){return this.endOf(U)<I(j)},F.$g=function(j,U,N){return R.u(j)?this[U]:this.set(N,j)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(j,U){var N=this,z=!!R.u(U)||U,L=R.p(j),H=function(Pe,be){var Ie=R.w(N.$u?Date.UTC(N.$y,be,Pe):new Date(N.$y,be,Pe),N);return z?Ie:Ie.endOf(c)},G=function(Pe,be){return R.w(N.toDate()[Pe].apply(N.toDate("s"),(z?[0,0,0,0]:[23,59,59,999]).slice(be)),N)},V=this.$W,ne=this.$M,fe=this.$D,me="set"+(this.$u?"UTC":"");switch(L){case g:return z?H(1,0):H(31,11);case f:return z?H(1,ne):H(0,ne+1);case u:var ve=this.$locale().weekStart||0,Ee=(V<ve?V+7:V)-ve;return H(z?fe-Ee:fe+(6-Ee),ne);case c:case y:return G(me+"Hours",0);case l:return G(me+"Minutes",1);case a:return G(me+"Seconds",2);case s:return G(me+"Milliseconds",3);default:return this.clone()}},F.endOf=function(j){return this.startOf(j,!1)},F.$set=function(j,U){var N,z=R.p(j),L="set"+(this.$u?"UTC":""),H=(N={},N[c]=L+"Date",N[y]=L+"Date",N[f]=L+"Month",N[g]=L+"FullYear",N[l]=L+"Hours",N[a]=L+"Minutes",N[s]=L+"Seconds",N[o]=L+"Milliseconds",N)[z],G=z===c?this.$D+(U-this.$W):U;if(z===f||z===g){var V=this.clone().set(y,1);V.$d[H](G),V.init(),this.$d=V.set(y,Math.min(this.$D,V.daysInMonth())).$d}else H&&this.$d[H](G);return this.init(),this},F.set=function(j,U){return this.clone().$set(j,U)},F.get=function(j){return this[R.p(j)]()},F.add=function(j,U){var N,z=this;j=Number(j);var L=R.p(U),H=function(ne){var fe=I(z);return R.w(fe.date(fe.date()+Math.round(ne*j)),z)};if(L===f)return this.set(f,this.$M+j);if(L===g)return this.set(g,this.$y+j);if(L===c)return H(1);if(L===u)return H(7);var G=(N={},N[a]=r,N[l]=i,N[s]=n,N)[L]||1,V=this.$d.getTime()+j*G;return R.w(V,this)},F.subtract=function(j,U){return this.add(-1*j,U)},F.format=function(j){var U=this,N=this.$locale();if(!this.isValid())return N.invalidDate||C;var z=j||"YYYY-MM-DDTHH:mm:ssZ",L=R.z(this),H=this.$H,G=this.$m,V=this.$M,ne=N.weekdays,fe=N.months,me=N.meridiem,ve=function(be,Ie,je,Ne){return be&&(be[Ie]||be(U,z))||je[Ie].slice(0,Ne)},Ee=function(be){return R.s(H%12||12,be,"0")},Pe=me||function(be,Ie,je){var Ne=be<12?"AM":"PM";return je?Ne.toLowerCase():Ne};return z.replace(b,function(be,Ie){return Ie||function(je){switch(je){case"YY":return String(U.$y).slice(-2);case"YYYY":return R.s(U.$y,4,"0");case"M":return V+1;case"MM":return R.s(V+1,2,"0");case"MMM":return ve(N.monthsShort,V,fe,3);case"MMMM":return ve(fe,V);case"D":return U.$D;case"DD":return R.s(U.$D,2,"0");case"d":return String(U.$W);case"dd":return ve(N.weekdaysMin,U.$W,ne,2);case"ddd":return ve(N.weekdaysShort,U.$W,ne,3);case"dddd":return ne[U.$W];case"H":return String(H);case"HH":return R.s(H,2,"0");case"h":return Ee(1);case"hh":return Ee(2);case"a":return Pe(H,G,!0);case"A":return Pe(H,G,!1);case"m":return String(G);case"mm":return R.s(G,2,"0");case"s":return String(U.$s);case"ss":return R.s(U.$s,2,"0");case"SSS":return R.s(U.$ms,3,"0");case"Z":return L}return null}(be)||L.replace(":","")})},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(j,U,N){var z,L=this,H=R.p(U),G=I(j),V=(G.utcOffset()-this.utcOffset())*r,ne=this-G,fe=function(){return R.m(L,G)};switch(H){case g:z=fe()/12;break;case f:z=fe();break;case h:z=fe()/3;break;case u:z=(ne-V)/6048e5;break;case c:z=(ne-V)/864e5;break;case l:z=ne/i;break;case a:z=ne/r;break;case s:z=ne/n;break;default:z=ne}return N?z:R.a(z)},F.daysInMonth=function(){return this.endOf(f).$D},F.$locale=function(){return S[this.$L]},F.locale=function(j,U){if(!j)return this.$L;var N=this.clone(),z=O(j,U,!0);return z&&(N.$L=z),N},F.clone=function(){return R.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},W}(),te=Y.prototype;return I.prototype=te,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",f],["$y",g],["$D",y]].forEach(function(W){te[W[1]]=function(F){return this.$g(F,W[0],W[1])}}),I.extend=function(W,F){return W.$i||(W(F,Y,I),W.$i=!0),I},I.locale=O,I.isDayjs=$,I.unix=function(W){return I(1e3*W)},I.en=S[_],I.Ls=S,I.p={},I})})(w4);var VP=w4.exports;const Ec=Fc(VP);var y4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(V1,function(){return function(n,r,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(y4);var qP=y4.exports;const ZP=Fc(qP);var v4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(V1,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,f,h){return o.fromToBase(c,u,f,h)}i.en.relativeTime=s,o.fromToBase=function(c,u,f,h,g){for(var y,C,E,b=f.$locale().relativeTime||s,m=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],v=m.length,x=0;x<v;x+=1){var _=m[x];_.d&&(y=h?i(c).diff(f,_.d,!0):f.diff(c,_.d,!0));var S=(n.rounding||Math.round)(Math.abs(y));if(E=y>0,S<=_.r||!_.r){S<=1&&x>0&&(_=m[x-1]);var d=b[_.l];g&&(S=g(""+S)),C=typeof d=="string"?d.replace("%d",S):d(S,u,_.l,E);break}}if(u)return C;var $=E?b.future:b.past;return typeof $=="function"?$(C):$.replace("%s",C)},o.to=function(c,u){return a(c,u,this,!0)},o.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?i.utc():i()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(v4);var GP=v4.exports;const KP=Fc(GP);Ec.extend(KP);Ec.extend(ZP);Ec.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const b4={getYear(t=new Date().toISOString()){return Ec(t).year()},getRelativeDateFromNow(t){return Ec(t).fromNow(!0)}},QP=3,YP=["receive","deposit","borrow","claim"],JP=["withdraw","repay","burn"],Ao={getTransactionGroupTitle(t){const e=b4.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),i=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:i?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Ao.getTransactionTransferTokenType(t),url:Ao.getTransactionImageURL(t)}},getTransactionImageURL(t){var i,o,s,a,l;let e=null;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(o=(i=t==null?void 0:t.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:t&&r&&(e=(l=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),e},getTransactionTransferTokenType(t){return t!=null&&t.fungible_info?"FUNGIBLE":t!=null&&t.nft_info?"NFT":null},getTransactionDescriptions(t){var f,h,g;const e=(f=t.metadata)==null?void 0:f.operationType,n=t.transfers,r=((h=t.transfers)==null?void 0:h.length)>0,i=((g=t.transfers)==null?void 0:g.length)>1,o=r&&(n==null?void 0:n.every(y=>!!y.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&o?(l=Ve.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=Ve.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[t.metadata.status];if(i)return n.map(y=>this.getTransferDescription(y));let u="";return YP.includes(e)?u="+":JP.includes(e)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(QP):null}},XP=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:Ao,UiHelperUtil:Ve,get WuiAccountButton(){return $r},get WuiAllWalletsImage(){return mc},get WuiAvatar(){return Ko},get WuiButton(){return or},get WuiCard(){return Kd},get WuiCardSelect(){return Pr},get WuiCardSelectLoader(){return gc},get WuiChip(){return ri},get WuiConnectButton(){return ha},get WuiCtaButton(){return Qo},get WuiEmailInput(){return pa},get WuiFlex(){return Zt},get WuiGrid(){return en},get WuiIcon(){return qo},get WuiIconBox(){return Un},get WuiIconLink(){return Xi},get WuiImage(){return da},get WuiInputElement(){return wc},get WuiInputNumeric(){return yc},get WuiInputText(){return Tr},get WuiLink(){return ma},get WuiListItem(){return $n},get WuiListWallet(){return gn},get WuiLoadingHexagon(){return Qd},get WuiLoadingSpinner(){return fa},get WuiLoadingThumbnail(){return hc},get WuiLogo(){return bc},get WuiLogoSelect(){return ga},get WuiNetworkButton(){return wa},get WuiNetworkImage(){return Ji},get WuiNoticeCard(){return Jo},get WuiOtp(){return xc},get WuiQrCode(){return ii},get WuiSearchBar(){return tf},get WuiSeparator(){return _c},get WuiShimmer(){return Zo},get WuiSnackbar(){return eo},get WuiTabs(){return ar},get WuiTag(){return vc},get WuiText(){return Go},get WuiTooltip(){return Ca},get WuiTransactionListItem(){return sr},get WuiTransactionListItemLoader(){return Jd},get WuiTransactionVisual(){return Ar},get WuiVisual(){return pc},get WuiVisualThumbnail(){return Yo},get WuiWalletImage(){return kr},customElement:Q,initializeTheming:Lb,setColorTheme:xg,setThemeVariables:Bb},Symbol.toStringTag,{value:"Module"}));var fi=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Or=class extends J{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.address=Ue.state.address,this.balanceVal=Ue.state.balance,this.balanceSymbol=Ue.state.balanceSymbol,this.profileName=Ue.state.profileName,this.profileImage=Ue.state.profileImage,this.network=dt.state.caipNetwork,this.unsubscribe.push(Ue.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),dt.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=ut.getNetworkImage(this.network),n=this.balance==="show";return T`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Oe(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Oe(e)}
        avatarSrc=${Oe(this.profileImage)}
        balance=${n?pe.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){Ke.open()}};fi([D({type:Boolean})],Or.prototype,"disabled",void 0);fi([D()],Or.prototype,"balance",void 0);fi([ce()],Or.prototype,"address",void 0);fi([ce()],Or.prototype,"balanceVal",void 0);fi([ce()],Or.prototype,"balanceSymbol",void 0);fi([ce()],Or.prototype,"profileName",void 0);fi([ce()],Or.prototype,"profileImage",void 0);fi([ce()],Or.prototype,"network",void 0);Or=fi([Q("w3m-account-button")],Or);var fs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let to=class extends J{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Ue.state.isConnected,this.unsubscribe.push(Ue.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?T`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Oe(this.balance)}
          >
          </w3m-account-button>
        `:T`
          <w3m-connect-button
            size=${Oe(this.size)}
            label=${Oe(this.label)}
            loadingLabel=${Oe(this.loadingLabel)}
          ></w3m-connect-button>
        `}};fs([D({type:Boolean})],to.prototype,"disabled",void 0);fs([D()],to.prototype,"balance",void 0);fs([D()],to.prototype,"size",void 0);fs([D()],to.prototype,"label",void 0);fs([D()],to.prototype,"loadingLabel",void 0);fs([ce()],to.prototype,"isAccount",void 0);to=fs([Q("w3m-button")],to);var Ua=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xo=class extends J{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ke.state.open,this.loading=Ke.state.loading,this.unsubscribe.push(Ke.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return T`
      <wui-connect-button
        size=${Oe(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ke.close():Ke.open()}};Ua([D()],Xo.prototype,"size",void 0);Ua([D()],Xo.prototype,"label",void 0);Ua([D()],Xo.prototype,"loadingLabel",void 0);Ua([ce()],Xo.prototype,"open",void 0);Ua([ce()],Xo.prototype,"loading",void 0);Xo=Ua([Q("w3m-connect-button")],Xo);const eT=re`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var E0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const n3="scroll-lock";let es=class extends J{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ke.state.open,this.caipAddress=Ue.state.address,this.isSiweEnabled=pt.state.isSiweEnabled,this.initializeTheming(),De.prefetch(),this.unsubscribe.push(Ke.subscribeKey("open",e=>e?this.onOpen():this.onClose()),pt.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),Ue.subscribe(e=>this.onNewAccountState(e))),Le.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?T`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&pt.state.status!=="success"&&await Me.disconnect(),Ke.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=On.state,r=Ve.getColorTheme(n);Lb(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,$t.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=n3,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${n3}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:n,caipAddress:r}=e;if(this.isSiweEnabled){n&&!this.caipAddress&&(this.caipAddress=r),n&&r&&this.caipAddress!==r&&(await pt.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const i=await pt.getSession();i&&!n?await pt.signOut():n&&!i&&this.onSiweNavigation()}catch{n&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?ue.push("ConnectingSiwe"):Ke.open({view:"ConnectingSiwe"})}};es.styles=eT;E0([ce()],es.prototype,"open",void 0);E0([ce()],es.prototype,"caipAddress",void 0);E0([ce()],es.prototype,"isSiweEnabled",void 0);es=E0([Q("w3m-modal")],es);const tT=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return es}},Symbol.toStringTag,{value:"Module"}));var su=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _a=class extends J{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=dt.state.caipNetwork,this.connected=Ue.state.isConnected,this.loading=Ke.state.loading,this.unsubscribe.push(dt.subscribeKey("caipNetwork",e=>this.network=e),Ue.subscribeKey("isConnected",e=>this.connected=e),Ke.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return T`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${Oe(ut.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){Ke.open({view:"Networks"})}};su([D({type:Boolean})],_a.prototype,"disabled",void 0);su([ce()],_a.prototype,"network",void 0);su([ce()],_a.prototype,"connected",void 0);su([ce()],_a.prototype,"loading",void 0);_a=su([Q("w3m-network-button")],_a);const nT=re`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var x4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nf=class extends J{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ue.state.view,this.unsubscribe.push(ue.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return T`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return T`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return T`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return T`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return T`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return T`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return T`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return T`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return T`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return T`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return T`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return T`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return T`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return T`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return T`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return T`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return T`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeWallet":return T`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;default:return T`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=ue.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};nf.styles=nT;x4([ce()],nf.prototype,"view",void 0);nf=x4([Q("w3m-router")],nf);const rT=re`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var mo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ir=class extends J{constructor(){super(),this.usubscribe=[],this.connectors=gt.state.connectors,this.address=Ue.state.address,this.profileImage=Ue.state.profileImage,this.profileName=Ue.state.profileName,this.balance=Ue.state.balance,this.balanceSymbol=Ue.state.balanceSymbol,this.network=dt.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Ue.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Ke.close()}),dt.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=ut.getNetworkImage(this.network);return T`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Oe(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ve.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ve.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${pe.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Oe(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=un.getConnectedConnector();return!this.connectors.find(r=>r.type==="EMAIL")||e!=="EMAIL"?null:T`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=Ue.state;return e?T`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=dt.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(pe.copyToClopboard(this.address),$t.showSuccess("Address copied"))}catch{$t.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&ue.push("Networks")}onTransactions(){Le.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),ue.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Me.disconnect(),Le.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ke.close()}catch{Le.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),$t.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=Ue.state;e&&pe.openHref(e,"_blank")}onGoToUpgradeView(){ue.push("UpgradeWallet")}};Ir.styles=rT;mo([ce()],Ir.prototype,"address",void 0);mo([ce()],Ir.prototype,"profileImage",void 0);mo([ce()],Ir.prototype,"profileName",void 0);mo([ce()],Ir.prototype,"balance",void 0);mo([ce()],Ir.prototype,"balanceSymbol",void 0);mo([ce()],Ir.prototype,"network",void 0);mo([ce()],Ir.prototype,"disconecting",void 0);Ir=mo([Q("w3m-account-view")],Ir);var C4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let g1=class extends J{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=pe.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return T`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?T`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:T`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return pe.isMobile()?T`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ue.push("ConnectingWalletConnect")}};C4([ce()],g1.prototype,"search",void 0);g1=C4([Q("w3m-all-wallets-view")],g1);const iT=re`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var _4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let rf=class extends J{constructor(){super(),this.unsubscribe=[],this.connectors=gt.state.connectors,this.unsubscribe.push(gt.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(pe.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?T`
      <wui-list-wallet
        imageSrc=${Oe(ut.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=ze.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>T`
        <wui-list-wallet
          imageSrc=${Oe(ut.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(i=>i.type==="WALLET_CONNECT"))return null;const{featured:n}=De.state;return n.length?this.filterOutDuplicateWallets(n).map(i=>T`
        <wui-list-wallet
          imageSrc=${Oe(ut.getWalletImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onConnectWallet(i)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return un.getRecentWallets().map(n=>T`
        <wui-list-wallet
          imageSrc=${Oe(ut.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:T`
        <wui-list-wallet
          imageSrc=${Oe(ut.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Me.checkInstalled()?null:T`
        <wui-list-wallet
          imageSrc=${Oe(ut.getConnectorImage(n))}
          installed=${!!e}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(e.type)?null:T`
        <wui-list-wallet
          imageSrc=${Oe(ut.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(a=>a.type==="WALLET_CONNECT"))return null;const n=De.state.count,r=De.state.featured.length,i=n+r,o=i<10?i:Math.floor(i/10)*10,s=o<i?`${o}+`:`${o}`;return T`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(f=>f.type==="WALLET_CONNECT"))return null;const{recommended:n}=De.state,{customWallets:r,featuredWalletIds:i}=ze.state,{connectors:o}=gt.state,s=un.getRecentWallets(),a=o.filter(f=>f.type==="ANNOUNCED");if(i||r||!n.length)return null;const l=a.length+s.length,c=Math.max(0,2-l);return this.filterOutDuplicateWallets(n).slice(0,c).map(f=>T`
        <wui-list-wallet
          imageSrc=${Oe(ut.getWalletImage(f))}
          name=${(f==null?void 0:f.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(f)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?pe.isMobile()?ue.push("AllWallets"):ue.push("ConnectingWalletConnect"):ue.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:n}=gt.state,i=un.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return e.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Le.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),ue.push("AllWallets")}onConnectWallet(e){ue.push("ConnectingWalletConnect",{wallet:e})}};rf.styles=iT;_4([ce()],rf.prototype,"connectors",void 0);rf=_4([Q("w3m-connect-view")],rf);const oT=re`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var hs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};class yn extends J{constructor(){var e,n,r,i;super(),this.wallet=(e=ue.state.data)==null?void 0:e.wallet,this.connector=(n=ue.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ut.getWalletImage(this.wallet)??ut.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=Me.state.wcUri,this.error=Me.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Me.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Me.subscribeKey("wcError",o=>this.error=o),Me.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),T`
      <wui-flex
        data-error=${Oe(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Oe(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?T`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,n;this.buffering||(Me.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=On.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return T`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(pe.copyToClopboard(this.uri),$t.showSuccess("Link copied"))}catch{$t.showError("Failed to copy")}}}yn.styles=oT;hs([ce()],yn.prototype,"uri",void 0);hs([ce()],yn.prototype,"error",void 0);hs([ce()],yn.prototype,"ready",void 0);hs([ce()],yn.prototype,"showRetry",void 0);hs([ce()],yn.prototype,"buffering",void 0);hs([D({type:Boolean})],yn.prototype,"isMobile",void 0);hs([D()],yn.prototype,"onRetry",void 0);var sT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const aT={INJECTED:"browser",ANNOUNCED:"browser"};let r3=class extends yn{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:aT[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&un.setConnectedWalletImageUrl(this.connector.imageUrl),await Me.connectExternal(this.connector),pt.state.isSiweEnabled?ue.push("ConnectingSiwe"):Ke.close(),Le.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){Le.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};r3=sT([Q("w3m-connecting-external-view")],r3);var E4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let w1=class extends J{constructor(){var e;super(...arguments),this.dappName=(e=ze.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return T`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,Le.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{pt.setStatus("loading");const e=await pt.signIn();return pt.setStatus("success"),Le.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return $t.showError("Signature declined"),pt.setStatus("error"),Le.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=Ue.state;e?(await Me.disconnect(),Ke.close()):ue.push("Connect"),Le.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};E4([ce()],w1.prototype,"isSigning",void 0);w1=E4([Q("w3m-connecting-siwe-view")],w1);var Lg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let of=class extends J{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=ue.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Po.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),T`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):T`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=Me.state;if(e||pe.isPairingExpired(n)){if(Me.connectWalletConnect(),this.wallet){const r=ut.getWalletImage(this.wallet);r&&un.setConnectedWalletImageUrl(r)}else{const i=gt.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=ut.getConnectorImage(i);o&&un.setConnectedWalletImageUrl(o)}await Me.state.wcPromise,this.finalizeConnection(),pt.state.isSiweEnabled?ue.push("ConnectingSiwe"):Ke.close()}}catch(n){Le.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Me.setWcError(!0),pe.isAllowedRetry(this.lastRetry)&&($t.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=Me.state;e&&un.setWalletConnectDeepLink(e),n&&un.setWeb3ModalRecent(n),Le.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:y})=>y).filter(Boolean),a=o?[o]:s??[],l=a.length,c=e,u=r,f=Me.checkInstalled(a),h=l&&f,g=n&&!pe.isMobile();h&&this.platforms.push("browser"),c&&this.platforms.push(pe.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!h&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return T`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return T`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return T`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return T`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return T`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return T`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?T`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Lg([ce()],of.prototype,"platform",void 0);Lg([ce()],of.prototype,"platforms",void 0);of=Lg([Q("w3m-connecting-wc-view")],of);var lT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let i3=class extends J{constructor(){var e;super(...arguments),this.wallet=(e=ue.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return T`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?T`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?T`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?T`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?T`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&pe.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&pe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&pe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&pe.openHref(this.wallet.homepage,"_blank")}};i3=lT([Q("w3m-downloads-view")],i3);var cT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const uT="https://walletconnect.com/explorer";let o3=class extends J{render(){return T`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{pe.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=De.state,{customWallets:r}=ze.state;return[...n,...r??[],...e].slice(0,4).map(o=>T`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Oe(ut.getWalletImage(o))}
          @click=${()=>{pe.openHref(o.homepage??uT,"_blank")}}
        ></wui-list-wallet>
      `)}};o3=cT([Q("w3m-get-wallet-view")],o3);const dT=re`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Bg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Sc=class extends J{constructor(){var e;super(),this.network=(e=ue.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return T`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Oe(ut.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:T`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await dt.switchActiveNetwork(this.network),pt.state.isSiweEnabled||Pb.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Sc.styles=dT;Bg([ce()],Sc.prototype,"showRetry",void 0);Bg([ce()],Sc.prototype,"error",void 0);Sc=Bg([Q("w3m-network-switch-view")],Sc);var S4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let y1=class extends J{constructor(){super(),this.unsubscribe=[],this.caipNetwork=dt.state.caipNetwork,this.unsubscribe.push(dt.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Le.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),ue.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=dt.state,i=e,o=n,s={};return o&&i&&(i.forEach((a,l)=>{s[a]=l}),o.sort((a,l)=>{const c=s[a.id],u=s[l.id];return c!==void 0&&u!==void 0?c-u:c!==void 0?-1:u!==void 0?1:0})),o==null?void 0:o.map(a=>{var l;return T`
        <wui-card-select
          .selected=${((l=this.caipNetwork)==null?void 0:l.id)===a.id}
          imageSrc=${Oe(ut.getNetworkImage(a))}
          type="network"
          name=${a.name??a.id}
          @click=${()=>this.onSwitchNetwork(a)}
          .disabled=${!r&&!(i!=null&&i.includes(a.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=Ue.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=dt.state,{data:s}=ue.state;n&&(o==null?void 0:o.id)!==e.id?r!=null&&r.includes(e.id)?(await dt.switchActiveNetwork(e),Pb.navigateAfterNetworkSwitch()):i&&ue.push("SwitchNetwork",{...s,network:e}):n||(dt.setCaipNetwork(e),ue.push("Connect"))}};S4([ce()],y1.prototype,"caipNetwork",void 0);y1=S4([Q("w3m-networks-view")],y1);const fT=re`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var ps=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Lu="last-transaction",hT=7;let oi=class extends J{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=Ue.state.address,this.transactions=Hn.state.transactions,this.transactionsByYear=Hn.state.transactionsByYear,this.loading=Hn.state.loading,this.empty=Hn.state.empty,this.next=Hn.state.next,this.unsubscribe.push(Ue.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Hn.resetTransactions(),Hn.fetchTransactions(e.address))}),Hn.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&Hn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const i=r===e.length-1,o=parseInt(n,10),s=Ao.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?T`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,n){const{date:r,descriptions:i,direction:o,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(e),f=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?T`
        <wui-transaction-list-item
          date=${r}
          .direction=${o}
          id=${n&&this.next?Lu:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:f?c.map((g,y)=>{const C=Ao.getTransferDescription(g),E=n&&y===c.length-1;return T` <wui-transaction-list-item
          date=${r}
          direction=${g.direction}
          id=${E&&this.next?Lu:""}
          status=${l}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[y]]}
          .descriptions=${[C]}
        ></wui-transaction-list-item>`}):T`
      <wui-transaction-list-item
        date=${r}
        .direction=${o}
        id=${n&&this.next?Lu:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,i)=>{const o=n&&i===e.length-1;return T`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return T`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(hT).fill(T` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=ze.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(Hn.fetchTransactions(this.address),Le.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,i;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${Lu}`);e&&((i=this.paginationObserver)==null||i.observe(e))}getTransactionListItemProps(e){var l,c,u,f,h;const n=b4.getRelativeDateFromNow((l=e==null?void 0:e.metadata)==null?void 0:l.minedAt),r=Ao.getTransactionDescriptions(e),i=e==null?void 0:e.transfers,o=(c=e==null?void 0:e.transfers)==null?void 0:c[0],s=!!o&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(g=>!!g.nft_info)),a=Ao.getTransactionImages(i);return{date:n,direction:o==null?void 0:o.direction,descriptions:r,isAllNFT:s,images:a,status:(f=e.metadata)==null?void 0:f.status,transfers:i,type:(h=e.metadata)==null?void 0:h.operationType}}};oi.styles=fT;ps([ce()],oi.prototype,"address",void 0);ps([ce()],oi.prototype,"transactions",void 0);ps([ce()],oi.prototype,"transactionsByYear",void 0);ps([ce()],oi.prototype,"loading",void 0);ps([ce()],oi.prototype,"empty",void 0);ps([ce()],oi.prototype,"next",void 0);oi=ps([Q("w3m-transactions-view")],oi);var pT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const mT=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let s3=class extends J{render(){return T`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${mT}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{pe.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};s3=pT([Q("w3m-what-is-a-network-view")],s3);var gT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const wT=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let a3=class extends J{render(){return T`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${wT}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Le.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),ue.push("GetWallet")}};a3=gT([Q("w3m-what-is-a-wallet-view")],a3);const yT=re`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var $4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const vT=6;let sf=class extends J{constructor(){var e;super(...arguments),this.email=(e=ue.state.data)==null?void 0:e.email,this.emailConnector=gt.getEmailConnector(),this.loading=!1}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");return T`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading?T`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:T`<wui-otp
              dissabled
              length="6"
              @inputChange=${this.onOtpInputChange.bind(this)}
            ></wui-otp>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)}>Resend code</wui-link>
        </wui-flex>
      </wui-flex>
    `}async onOtpInputChange(e){try{if(!this.loading){const n=e.detail;this.emailConnector&&n.length===vT&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:n}),await Me.connectExternal(this.emailConnector),Ke.close(),Le.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}}catch(n){$t.showError(n),this.loading=!1}}async onResendCode(){try{if(!this.loading){const e=gt.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),$t.showSuccess("New Email sent")}}catch(e){$t.showError(e)}finally{this.loading=!1}}};sf.styles=yT;$4([ce()],sf.prototype,"loading",void 0);sf=$4([Q("w3m-email-verify-otp-view")],sf);const bT=re`
  wui-icon-box {
    height: 64px;
    width: 64px;
  }

  #w3m-resend-section {
    height: 56px;
  }
`;var k4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let af=class extends J{constructor(){var e;super(),this.email=(e=ue.state.data)==null?void 0:e.email,this.emailConnector=gt.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email provided");return T`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","3xl","xxl","3xl"]}
      >
        <wui-flex justifyContent="center" .padding=${["0","0","xxl","0"]}>
          <wui-icon-box
            size="xl"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon="verify"
            background="opaque"
          ></wui-icon-box>
        </wui-flex>
        <wui-text variant="large-600" color="fg-100">Register this device to continue</wui-text>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          .padding=${["s","0","0","0"]}
        >
          <wui-text variant="paragraph-400" color="fg-200">Check the instructions sent to</wui-text>
          <wui-text variant="paragraph-600" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-flex alignItems="center" id="w3m-resend-section">
          ${this.loading?T`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:T` <wui-link @click=${this.onResendCode.bind(this)}>Resend email</wui-link>`}
        </wui-flex>

        <wui-flex alignItems="center">
          <wui-text variant="paragraph-400" color="fg-200" align="center">
            This is a quick one-time approval that will keep your account secure
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),ue.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){const e=gt.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),$t.showSuccess("New Email sent")}}catch(e){$t.showError(e)}finally{this.loading=!1}}};af.styles=bT;k4([ce()],af.prototype,"loading",void 0);af=k4([Q("w3m-email-verify-device-view")],af);const xT=re`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var P4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let lf=class extends J{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ke.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const r=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const o=(r==null?void 0:r.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${o.width-24}px`,this.iframe.style.height=`${o.height-10}px`,this.iframe.style.left=`${o.left+24/2}px`,this.iframe.style.top=`${o.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),T`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};lf.styles=xT;P4([ce()],lf.prototype,"ready",void 0);lf=P4([Q("w3m-approve-transaction-view")],lf);var CT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let l3=class extends J{render(){return T`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Po.SECURE_SITE_DASHBOARD}
          imageSrc=${Po.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};l3=CT([Q("w3m-upgrade-wallet-view")],l3);const _T=re`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function T4(t){const{connectors:e}=gt.state,n=e.filter(o=>o.type==="ANNOUNCED").reduce((o,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(o[s.info.rdns]=!0),o},{});return t.map(o=>({...o,installed:!!o.rdns&&!!n[o.rdns??""]})).sort((o,s)=>Number(s.installed)-Number(o.installed))}var au=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const c3="local-paginator";let ts=class extends J{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!De.state.wallets.length,this.wallets=De.state.wallets,this.recommended=De.state.recommended,this.featured=De.state.featured,this.unsubscribe.push(De.subscribeKey("wallets",e=>this.wallets=e),De.subscribeKey("recommended",e=>this.recommended=e),De.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return T`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await De.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>T`
        <wui-card-select-loader type="wallet" id=${Oe(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return T4(e).map(r=>T`
        <wui-card-select
          imageSrc=${Oe(ut.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:i}=De.state,o=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=e.length?r.length%o:0,i===0&&r.length>0?null:i===0||[...r,...e,...n].length<i?this.shimmerTemplate(l,c3):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${c3}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=De.state;s.length<o&&De.fetchWallets({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=gt.state,r=n.find(({explorerId:i})=>i===e.id);r?ue.push("ConnectingExternal",{connector:r}):ue.push("ConnectingWalletConnect",{wallet:e})}};ts.styles=_T;au([ce()],ts.prototype,"initial",void 0);au([ce()],ts.prototype,"wallets",void 0);au([ce()],ts.prototype,"recommended",void 0);au([ce()],ts.prototype,"featured",void 0);ts=au([Q("w3m-all-wallets-list")],ts);const ET=re`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Ug=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let $c=class extends J{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?T`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await De.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=De.state,n=T4(e);return e.length?T`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${n.map(r=>T`
            <wui-card-select
              imageSrc=${Oe(ut.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:T`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=gt.state,r=n.find(({explorerId:i})=>i===e.id);r?ue.push("ConnectingExternal",{connector:r}):ue.push("ConnectingWalletConnect",{wallet:e})}};$c.styles=ET;Ug([ce()],$c.prototype,"loading",void 0);Ug([D()],$c.prototype,"query",void 0);$c=Ug([Q("w3m-all-wallets-search")],$c);var S0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let kc=class extends J{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Me.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return T`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};S0([D({type:Array})],kc.prototype,"platforms",void 0);S0([D()],kc.prototype,"onSelectPlatfrom",void 0);S0([ce()],kc.prototype,"buffering",void 0);kc=S0([Q("w3m-connecting-header")],kc);var ST=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let u3=class extends yn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=gt.state,n=e.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(i=>i.type==="INJECTED");n?await Me.connectExternal(n):r&&await Me.connectExternal(r),Ke.close(),Le.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){Le.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};u3=ST([Q("w3m-connecting-wc-browser")],u3);var $T=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let d3=class extends yn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=pe.formatNativeUrl(n,this.uri);Me.setWcLinking({name:r,href:o}),Me.setRecentWallet(this.wallet),pe.openHref(i,"_self")}catch{this.error=!0}}};d3=$T([Q("w3m-connecting-wc-desktop")],d3);var kT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let f3=class extends yn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=pe.formatNativeUrl(n,this.uri);Me.setWcLinking({name:r,href:o}),Me.setRecentWallet(this.wallet),pe.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const e=pe.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Me.setBuffering(!0),setTimeout(()=>{Me.setBuffering(!1)},5e3))}};f3=kT([Q("w3m-connecting-wc-mobile")],f3);const PT=re`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var TT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let v1=class extends yn{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),T`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Me.setWcLinking(void 0),Me.setRecentWallet(this.wallet),T` <wui-qr-code
      size=${e}
      theme=${On.state.themeMode}
      uri=${this.uri}
      imageSrc=${Oe(ut.getWalletImage(this.wallet))}
      alt=${Oe(n)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return T`<wui-link .disabled=${e} @click=${this.onCopyUri} color="fg-200">
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};v1.styles=PT;v1=TT([Q("w3m-connecting-wc-qrcode")],v1);const AT=re`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var OT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let b1=class extends J{constructor(){var e;super(...arguments),this.dappImageUrl=(e=ze.state.metadata)==null?void 0:e.icons,this.walletImageUrl=un.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return T`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};b1.styles=AT;b1=OT([Q("w3m-connecting-siwe")],b1);var IT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let h3=class extends J{constructor(){var e;if(super(),this.wallet=(e=ue.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return T`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Oe(ut.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};h3=IT([Q("w3m-connecting-wc-unsupported")],h3);var DT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let p3=class extends yn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=pe.formatUniversalUrl(n,this.uri);Me.setWcLinking({name:r,href:o}),Me.setRecentWallet(this.wallet),pe.openHref(i,"_blank")}catch{this.error=!0}}};p3=DT([Q("w3m-connecting-wc-web")],p3);const NT=re`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var $0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};function m3(){var i,o,s,a,l,c;const t=(o=(i=ue.state.data)==null?void 0:i.connector)==null?void 0:o.name,e=(a=(s=ue.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(c=(l=ue.state.data)==null?void 0:l.network)==null?void 0:c.name,r=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeWallet:"Upgrade your Wallet"}}let Ea=class extends J{constructor(){super(),this.unsubscribe=[],this.heading=m3()[ue.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ue.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Me.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Le.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),ue.push("WhatIsAWallet")}async onClose(){pt.state.isSiweEnabled&&pt.state.status!=="success"&&await Me.disconnect(),Ke.close()}titleTemplate(){return T`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=ue.state,n=e==="Connect",r=e==="ApproveTransaction";return this.showBack&&!r?T`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:T`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return!this.heading||ue.state.view==="EmailVerifyDevice"?null:T`<wui-separator></wui-separator>`}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=m3()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=ue.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){ue.state.view==="ConnectingSiwe"?ue.push("Connect"):ue.goBack()}};Ea.styles=[NT];$0([ce()],Ea.prototype,"heading",void 0);$0([ce()],Ea.prototype,"buffering",void 0);$0([ce()],Ea.prototype,"showBack",void 0);Ea=$0([Q("w3m-header")],Ea);var A4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let x1=class extends J{constructor(){super(...arguments),this.data=[]}render(){return T`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>T`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>T`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};A4([D({type:Array})],x1.prototype,"data",void 0);x1=A4([Q("w3m-help-widget")],x1);const RT=re`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var MT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let C1=class extends J{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=ze.state;return!e&&!n?null:T`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=ze.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=ze.state;return e?T`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=ze.state;return e?T`<a href=${e}>Privacy Policy</a>`:null}};C1.styles=[RT];C1=MT([Q("w3m-legal-footer")],C1);const jT=re`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var O4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let cf=class extends J{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=pe.isMobile(),a=pe.isIos(),l=pe.isAndroid(),c=[n,r,o,i].filter(Boolean).length>1,u=Ve.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?T`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>ue.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?T`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?T`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?T`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&pe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&pe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&pe.openHref(this.wallet.homepage,"_blank")}};cf.styles=[jT];O4([D({type:Object})],cf.prototype,"wallet",void 0);cf=O4([Q("w3m-mobile-download-links")],cf);const LT=re`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var I4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const BT={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let uf=class extends J{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=$t.state.open,this.unsubscribe.push($t.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=$t.state,r=BT[n];return T`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>$t.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};uf.styles=LT;I4([ce()],uf.prototype,"open",void 0);uf=I4([Q("w3m-snackbar")],uf);const UT=re`
  :host {
    padding: var(--wui-spacing-3xs) 0;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: var(--wui-spacing-m);
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var k0=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Sa=class extends J{constructor(){super(),this.unsubscribe=[],this.formRef=$g(),this.connectors=gt.state.connectors,this.email="",this.loading=!1,this.unsubscribe.push(gt.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=this.connectors.length>1,n=this.connectors.find(i=>i.type==="EMAIL"),r=!this.loading&&this.email.length>3;return n?T`
      <form ${kg(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
        >
        </wui-email-input>

        ${r&&e?T`
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `:null}
        ${this.loading&&e?T`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}

        <input type="submit" hidden />
      </form>

      ${e?T`<wui-separator text="or"></wui-separator>`:T`<wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!r}
            .loading=${this.loading}
          >
            Continue
          </wui-button>`}
    `:null}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=gt.getEmailConnector();if(!n)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await n.provider.connectEmail({email:this.email});r==="VERIFY_OTP"?ue.push("EmailVerifyOtp",{email:this.email}):r==="VERIFY_DEVICE"&&ue.push("EmailVerifyDevice",{email:this.email})}catch(n){$t.showError(n)}finally{this.loading=!1}}};Sa.styles=UT;k0([ce()],Sa.prototype,"connectors",void 0);k0([ce()],Sa.prototype,"email",void 0);k0([ce()],Sa.prototype,"loading",void 0);Sa=k0([Q("w3m-email-login-widget")],Sa);let g3=!1;class FT{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{Ue.setIsConnected(n)},this.setCaipAddress=n=>{Ue.setCaipAddress(n)},this.setBalance=(n,r)=>{Ue.setBalance(n,r)},this.setProfileName=n=>{Ue.setProfileName(n)},this.setProfileImage=n=>{Ue.setProfileImage(n)},this.resetAccount=()=>{Ue.resetAccount()},this.setCaipNetwork=n=>{dt.setCaipNetwork(n)},this.getCaipNetwork=()=>dt.state.caipNetwork,this.setRequestedCaipNetworks=n=>{dt.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>dt.getApprovedCaipNetworksData(),this.resetNetwork=()=>{dt.resetNetwork()},this.setConnectors=n=>{gt.setConnectors(n)},this.addConnector=n=>{gt.addConnector(n)},this.getConnectors=()=>gt.getConnectors(),this.resetWcConnection=()=>{Me.resetWcConnection()},this.fetchIdentity=n=>kb.fetchIdentity(n),this.setAddressExplorerUrl=n=>{Ue.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{pt.setNonce(n)},this.setSIWESession=n=>{pt.setSession(n)},this.setSIWEStatus=n=>{pt.setStatus(n)},this.setSIWEMessage=n=>{pt.setMessage(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ke.open(e)}async close(){await this.initOrContinue(),Ke.close()}setLoading(e){Ke.setLoading(e)}getThemeMode(){return On.state.themeMode}getThemeVariables(){return On.state.themeVariables}setThemeMode(e){On.setThemeMode(e),xg(On.state.themeMode)}setThemeVariables(e){On.setThemeVariables(e),Bb(On.state.themeVariables)}subscribeTheme(e){return On.subscribe(e)}getState(){return{...ca.state}}subscribeState(e){return ca.subscribe(e)}getEvent(){return{...Le.state}}subscribeEvents(e){return Le.subscribe(e)}subscribeSIWEState(e){return pt.subscribe(e)}initControllers(e){if(dt.setClient(e.networkControllerClient),dt.setDefaultCaipNetwork(e.defaultChain),ze.setProjectId(e.projectId),ze.setIncludeWalletIds(e.includeWalletIds),ze.setExcludeWalletIds(e.excludeWalletIds),ze.setFeaturedWalletIds(e.featuredWalletIds),ze.setTokens(e.tokens),ze.setTermsConditionsUrl(e.termsConditionsUrl),ze.setPrivacyPolicyUrl(e.privacyPolicyUrl),ze.setCustomWallets(e.customWallets),ze.setEnableAnalytics(e.enableAnalytics),ze.setSdkVersion(e._sdkVersion),Me.setClient(e.connectionControllerClient),e.siweControllerClient){const n=e.siweControllerClient;pt.setSIWEClient(n)}e.metadata&&ze.setMetadata(e.metadata),e.themeMode&&On.setThemeMode(e.themeMode),e.themeVariables&&On.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!g3&&pe.isClient()&&(g3=!0,this.initPromise=new Promise(async e=>{await Promise.all([Fo(()=>Promise.resolve().then(()=>XP),void 0),Fo(()=>Promise.resolve().then(()=>tT),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const xe={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.1"},Hr={ConnectorExplorerIds:{[xe.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[xe.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[xe.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[xe.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[xe.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[xe.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[xe.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[xe.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[xe.INJECTED_CONNECTOR_ID]:"Browser Wallet",[xe.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[xe.COINBASE_CONNECTOR_ID]:"Coinbase",[xe.LEDGER_CONNECTOR_ID]:"Ledger",[xe.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[xe.INJECTED_CONNECTOR_ID]:"INJECTED",[xe.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[xe.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[xe.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},xs={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${xe.EIP155}:${n}`]=r}),e}};function zT(t){if(t)return{id:`${xe.EIP155}:${t.id}`,name:t.name,imageId:Hr.EIP155NetworkImageIds[t.id]}}const WT="wagmi.wallet";class HT extends FT{constructor(e){const{wagmiConfig:n,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...l}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={switchCaipNetwork:async f=>{const h=xs.caipNetworkIdToNumber(f==null?void 0:f.id);h&&await Cb({chainId:h})},async getApprovedCaipNetworksData(){var h,g,y,C;const f=localStorage.getItem(WT);if(f!=null&&f.includes(xe.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:Hr.WalletConnectRpcChainIds.map(E=>`${xe.EIP155}:${E}`)};if(f!=null&&f.includes(xe.WALLET_CONNECT_CONNECTOR_ID)){const E=n.connectors.find(_=>_.id===xe.WALLET_CONNECT_CONNECTOR_ID);if(!E)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const m=(g=(h=(await E.getProvider()).signer)==null?void 0:h.session)==null?void 0:g.namespaces,v=(y=m==null?void 0:m[xe.EIP155])==null?void 0:y.methods,x=(C=m==null?void 0:m[xe.EIP155])==null?void 0:C.chains;return{supportsAllNetworks:v==null?void 0:v.includes(xe.ADD_CHAIN_METHOD),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async f=>{var y;const h=n.connectors.find(C=>C.id===xe.WALLET_CONNECT_CONNECTOR_ID);if(!h)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");h.on("message",C=>{C.type==="display_uri"&&(f(C.data),h.removeAllListeners())});const g=xs.caipNetworkIdToNumber((y=this.getCaipNetwork())==null?void 0:y.id);await Nw({connector:h,chainId:g})},connectExternal:async({id:f,provider:h,info:g})=>{var E,b;const y=n.connectors.find(m=>m.id===f);if(!y)throw new Error("connectionControllerClient:connectExternal - connector is undefined");h&&g&&y.id===xe.EIP6963_CONNECTOR_ID&&((E=y.setEip6963Wallet)==null||E.call(y,{provider:h,info:g}));const C=xs.caipNetworkIdToNumber((b=this.getCaipNetwork())==null?void 0:b.id);await Nw({connector:y,chainId:C})},checkInstalled:f=>{const h=this.getConnectors().filter(y=>y.type==="ANNOUNCED"),g=this.getConnectors().find(y=>y.type==="INJECTED");return f?h.length&&f.some(C=>h.some(E=>{var b;return((b=E.info)==null?void 0:b.rdns)===C}))?!0:g&&window!=null&&window.ethereum?f.some(y=>{var C;return!!((C=window.ethereum)!=null&&C[String(y)])}):!1:!!window.ethereum},disconnect:async()=>{var f;await R9(),(f=r==null?void 0:r.options)!=null&&f.signOutOnDisconnect&&await r.signOut()},signMessage:async f=>W9({message:f})};super({networkControllerClient:c,connectionControllerClient:u,siweControllerClient:r,defaultChain:zT(o),tokens:xs.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${xe.VERSION}`,...l}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(n),this.syncEmailConnector(n),this.listenEIP6963Connector(n),this.listenEmailConnector(n),_b(()=>this.syncAccount()),H9(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:xs.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:xs.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var i,o;return{id:`${xe.EIP155}:${r.id}`,name:r.name,imageId:Hr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:n}=Vd(),{chain:r}=l1();if(this.resetAccount(),n&&e&&r){const i=`${xe.EIP155}:${r.id}:${e}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:e,isConnected:n}=Vd(),{chain:r}=l1();if(r){const l=String(r.id),c=`${xe.EIP155}:${l}`;if(this.setCaipNetwork({id:c,name:r.name,imageId:Hr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&e){const u=`${xe.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(u),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const f=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(f)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,n){if(n.id!==fg.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${xe.EIP155}:${n.id}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{const r=await q9({address:e,chainId:n.id});if(r){this.setProfileName(r);const i=await V9({name:r,chainId:n.id});i&&this.setProfileImage(i)}}}async syncBalance(e,n){var i,o,s;const r=await z9({address:e,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const n=[];e.connectors.forEach(({id:r,name:i})=>{var o,s;[xe.EIP6963_CONNECTOR_ID,xe.EMAIL_CONNECTOR_ID].includes(r)||n.push({id:r,explorerId:Hr.ConnectorExplorerIds[r],imageId:Hr.ConnectorImageIds[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:Hr.ConnectorNamesMap[r]??i,type:Hr.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}async syncEmailConnector(e){const n=e.connectors.find(({id:r})=>r==="w3mEmail");if(n){const r=await n.getProvider();this.addConnector({id:xe.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r})}}eip6963EventHandler(e,n){var r,i;if(n.detail){const{info:o,provider:s}=n.detail;this.getConnectors().find(c=>c.name===o.name)||(this.addConnector({id:xe.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:i[xe.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),e.isAuthorized({info:o,provider:s}))}}listenEIP6963Connector(e){const n=e.connectors.find(r=>r.id===xe.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(xe.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(xe.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const n=e.connectors.find(r=>r.id===xe.EMAIL_CONNECTOR_ID);if(typeof window<"u"&&n){super.setLoading(!0);const r=await n.getProvider(),i=r.getLoginEmailUsed();super.setLoading(i),r.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),r.onRpcResponse(()=>{super.close()}),r.onIsConnected(()=>{super.setLoading(!1)})}}}var Bu=function(t,e,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(t,n):i?i.value=n:e.set(t,n),n},Uu=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},ad,yi;const Fu="connectedRdns";class VT extends pg{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",ad.set(this,void 0),yi.set(this,void 0),this.onAccountsChanged=n=>{var r;n.length===0?((r=this.storage)==null||r.removeItem(Fu),this.emit("disconnect")):n[0]&&this.emit("change",{account:jn(n[0])})},Bu(this,ad,this.options.getProvider(),"f")}async connect(e){var r;const n=await super.connect(e);return Uu(this,yi,"f")&&((r=this.storage)==null||r.setItem(Fu,Uu(this,yi,"f").info.rdns)),n}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(Fu),Bu(this,yi,void 0,"f")}async isAuthorized(e){var r;const n=(r=this.storage)==null?void 0:r.getItem(Fu);if(n){if(!e||n!==e.info.rdns)return!0;Bu(this,yi,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=Uu(this,yi,"f"))==null?void 0:e.provider)??Uu(this,ad,"f"))}setEip6963Wallet(e){Bu(this,yi,e,"f")}}ad=new WeakMap,yi=new WeakMap;var D4={},P0={};P0.byteLength=GT;P0.toByteArray=QT;P0.fromByteArray=XT;var xr=[],In=[],qT=typeof Uint8Array<"u"?Uint8Array:Array,Rh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Cs=0,ZT=Rh.length;Cs<ZT;++Cs)xr[Cs]=Rh[Cs],In[Rh.charCodeAt(Cs)]=Cs;In[45]=62;In[95]=63;function N4(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function GT(t){var e=N4(t),n=e[0],r=e[1];return(n+r)*3/4-r}function KT(t,e,n){return(e+n)*3/4-n}function QT(t){var e,n=N4(t),r=n[0],i=n[1],o=new qT(KT(t,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)e=In[t.charCodeAt(l)]<<18|In[t.charCodeAt(l+1)]<<12|In[t.charCodeAt(l+2)]<<6|In[t.charCodeAt(l+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=In[t.charCodeAt(l)]<<2|In[t.charCodeAt(l+1)]>>4,o[s++]=e&255),i===1&&(e=In[t.charCodeAt(l)]<<10|In[t.charCodeAt(l+1)]<<4|In[t.charCodeAt(l+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function YT(t){return xr[t>>18&63]+xr[t>>12&63]+xr[t>>6&63]+xr[t&63]}function JT(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(YT(r));return i.join("")}function XT(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(JT(t,s,s+o>a?a:s+o));return r===1?(e=t[n-1],i.push(xr[e>>2]+xr[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],i.push(xr[e>>10]+xr[e>>4&63]+xr[e<<2&63]+"=")),i.join("")}var Fg={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Fg.read=function(t,e,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,f=n?i-1:0,h=n?-1:1,g=t[e+f];for(f+=h,o=g&(1<<-u)-1,g>>=-u,u+=a;u>0;o=o*256+t[e+f],f+=h,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=s*256+t[e+f],f+=h,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(g?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-c}return(g?-1:1)*s*Math.pow(2,o-r)};Fg.write=function(t,e,n,r,i,o){var s,a,l,c=o*8-i-1,u=(1<<c)-1,f=u>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:o-1,y=r?1:-1,C=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+f>=1?e+=h/l:e+=h*Math.pow(2,1-f),e*l>=2&&(s++,l/=2),s+f>=u?(a=0,s=u):s+f>=1?(a=(e*l-1)*Math.pow(2,i),s=s+f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[n+g]=a&255,g+=y,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+g]=s&255,g+=y,s/=256,c-=8);t[n+g-y]|=C*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=P0,n=Fg,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=m,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const k=new Uint8Array(1),p={foo:function(){return 42}};return Object.setPrototypeOf(p,Uint8Array.prototype),Object.setPrototypeOf(k,p),k.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(k){if(k>i)throw new RangeError('The value "'+k+'" is invalid for option "size"');const p=new Uint8Array(k);return Object.setPrototypeOf(p,a.prototype),p}function a(k,p,w){if(typeof k=="number"){if(typeof p=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f(k)}return l(k,p,w)}a.poolSize=8192;function l(k,p,w){if(typeof k=="string")return h(k,p);if(ArrayBuffer.isView(k))return y(k);if(k==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof k);if(Ze(k,ArrayBuffer)||k&&Ze(k.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ze(k,SharedArrayBuffer)||k&&Ze(k.buffer,SharedArrayBuffer)))return C(k,p,w);if(typeof k=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const P=k.valueOf&&k.valueOf();if(P!=null&&P!==k)return a.from(P,p,w);const A=E(k);if(A)return A;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof k[Symbol.toPrimitive]=="function")return a.from(k[Symbol.toPrimitive]("string"),p,w);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof k)}a.from=function(k,p,w){return l(k,p,w)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(k){if(typeof k!="number")throw new TypeError('"size" argument must be of type number');if(k<0)throw new RangeError('The value "'+k+'" is invalid for option "size"')}function u(k,p,w){return c(k),k<=0?s(k):p!==void 0?typeof w=="string"?s(k).fill(p,w):s(k).fill(p):s(k)}a.alloc=function(k,p,w){return u(k,p,w)};function f(k){return c(k),s(k<0?0:b(k)|0)}a.allocUnsafe=function(k){return f(k)},a.allocUnsafeSlow=function(k){return f(k)};function h(k,p){if((typeof p!="string"||p==="")&&(p="utf8"),!a.isEncoding(p))throw new TypeError("Unknown encoding: "+p);const w=v(k,p)|0;let P=s(w);const A=P.write(k,p);return A!==w&&(P=P.slice(0,A)),P}function g(k){const p=k.length<0?0:b(k.length)|0,w=s(p);for(let P=0;P<p;P+=1)w[P]=k[P]&255;return w}function y(k){if(Ze(k,Uint8Array)){const p=new Uint8Array(k);return C(p.buffer,p.byteOffset,p.byteLength)}return g(k)}function C(k,p,w){if(p<0||k.byteLength<p)throw new RangeError('"offset" is outside of buffer bounds');if(k.byteLength<p+(w||0))throw new RangeError('"length" is outside of buffer bounds');let P;return p===void 0&&w===void 0?P=new Uint8Array(k):w===void 0?P=new Uint8Array(k,p):P=new Uint8Array(k,p,w),Object.setPrototypeOf(P,a.prototype),P}function E(k){if(a.isBuffer(k)){const p=b(k.length)|0,w=s(p);return w.length===0||k.copy(w,0,0,p),w}if(k.length!==void 0)return typeof k.length!="number"||wt(k.length)?s(0):g(k);if(k.type==="Buffer"&&Array.isArray(k.data))return g(k.data)}function b(k){if(k>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return k|0}function m(k){return+k!=k&&(k=0),a.alloc(+k)}a.isBuffer=function(p){return p!=null&&p._isBuffer===!0&&p!==a.prototype},a.compare=function(p,w){if(Ze(p,Uint8Array)&&(p=a.from(p,p.offset,p.byteLength)),Ze(w,Uint8Array)&&(w=a.from(w,w.offset,w.byteLength)),!a.isBuffer(p)||!a.isBuffer(w))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(p===w)return 0;let P=p.length,A=w.length;for(let M=0,B=Math.min(P,A);M<B;++M)if(p[M]!==w[M]){P=p[M],A=w[M];break}return P<A?-1:A<P?1:0},a.isEncoding=function(p){switch(String(p).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(p,w){if(!Array.isArray(p))throw new TypeError('"list" argument must be an Array of Buffers');if(p.length===0)return a.alloc(0);let P;if(w===void 0)for(w=0,P=0;P<p.length;++P)w+=p[P].length;const A=a.allocUnsafe(w);let M=0;for(P=0;P<p.length;++P){let B=p[P];if(Ze(B,Uint8Array))M+B.length>A.length?(a.isBuffer(B)||(B=a.from(B)),B.copy(A,M)):Uint8Array.prototype.set.call(A,B,M);else if(a.isBuffer(B))B.copy(A,M);else throw new TypeError('"list" argument must be an Array of Buffers');M+=B.length}return A};function v(k,p){if(a.isBuffer(k))return k.length;if(ArrayBuffer.isView(k)||Ze(k,ArrayBuffer))return k.byteLength;if(typeof k!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof k);const w=k.length,P=arguments.length>2&&arguments[2]===!0;if(!P&&w===0)return 0;let A=!1;for(;;)switch(p){case"ascii":case"latin1":case"binary":return w;case"utf8":case"utf-8":return pi(k).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return w*2;case"hex":return w>>>1;case"base64":return _t(k).length;default:if(A)return P?-1:pi(k).length;p=(""+p).toLowerCase(),A=!0}}a.byteLength=v;function x(k,p,w){let P=!1;if((p===void 0||p<0)&&(p=0),p>this.length||((w===void 0||w>this.length)&&(w=this.length),w<=0)||(w>>>=0,p>>>=0,w<=p))return"";for(k||(k="utf8");;)switch(k){case"hex":return z(this,p,w);case"utf8":case"utf-8":return W(this,p,w);case"ascii":return U(this,p,w);case"latin1":case"binary":return N(this,p,w);case"base64":return te(this,p,w);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,p,w);default:if(P)throw new TypeError("Unknown encoding: "+k);k=(k+"").toLowerCase(),P=!0}}a.prototype._isBuffer=!0;function _(k,p,w){const P=k[p];k[p]=k[w],k[w]=P}a.prototype.swap16=function(){const p=this.length;if(p%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let w=0;w<p;w+=2)_(this,w,w+1);return this},a.prototype.swap32=function(){const p=this.length;if(p%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let w=0;w<p;w+=4)_(this,w,w+3),_(this,w+1,w+2);return this},a.prototype.swap64=function(){const p=this.length;if(p%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let w=0;w<p;w+=8)_(this,w,w+7),_(this,w+1,w+6),_(this,w+2,w+5),_(this,w+3,w+4);return this},a.prototype.toString=function(){const p=this.length;return p===0?"":arguments.length===0?W(this,0,p):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(p){if(!a.isBuffer(p))throw new TypeError("Argument must be a Buffer");return this===p?!0:a.compare(this,p)===0},a.prototype.inspect=function(){let p="";const w=t.INSPECT_MAX_BYTES;return p=this.toString("hex",0,w).replace(/(.{2})/g,"$1 ").trim(),this.length>w&&(p+=" ... "),"<Buffer "+p+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(p,w,P,A,M){if(Ze(p,Uint8Array)&&(p=a.from(p,p.offset,p.byteLength)),!a.isBuffer(p))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof p);if(w===void 0&&(w=0),P===void 0&&(P=p?p.length:0),A===void 0&&(A=0),M===void 0&&(M=this.length),w<0||P>p.length||A<0||M>this.length)throw new RangeError("out of range index");if(A>=M&&w>=P)return 0;if(A>=M)return-1;if(w>=P)return 1;if(w>>>=0,P>>>=0,A>>>=0,M>>>=0,this===p)return 0;let B=M-A,de=P-w;const Ae=Math.min(B,de),tt=this.slice(A,M),lt=p.slice(w,P);for(let Ge=0;Ge<Ae;++Ge)if(tt[Ge]!==lt[Ge]){B=tt[Ge],de=lt[Ge];break}return B<de?-1:de<B?1:0};function S(k,p,w,P,A){if(k.length===0)return-1;if(typeof w=="string"?(P=w,w=0):w>2147483647?w=2147483647:w<-2147483648&&(w=-2147483648),w=+w,wt(w)&&(w=A?0:k.length-1),w<0&&(w=k.length+w),w>=k.length){if(A)return-1;w=k.length-1}else if(w<0)if(A)w=0;else return-1;if(typeof p=="string"&&(p=a.from(p,P)),a.isBuffer(p))return p.length===0?-1:d(k,p,w,P,A);if(typeof p=="number")return p=p&255,typeof Uint8Array.prototype.indexOf=="function"?A?Uint8Array.prototype.indexOf.call(k,p,w):Uint8Array.prototype.lastIndexOf.call(k,p,w):d(k,[p],w,P,A);throw new TypeError("val must be string, number or Buffer")}function d(k,p,w,P,A){let M=1,B=k.length,de=p.length;if(P!==void 0&&(P=String(P).toLowerCase(),P==="ucs2"||P==="ucs-2"||P==="utf16le"||P==="utf-16le")){if(k.length<2||p.length<2)return-1;M=2,B/=2,de/=2,w/=2}function Ae(lt,Ge){return M===1?lt[Ge]:lt.readUInt16BE(Ge*M)}let tt;if(A){let lt=-1;for(tt=w;tt<B;tt++)if(Ae(k,tt)===Ae(p,lt===-1?0:tt-lt)){if(lt===-1&&(lt=tt),tt-lt+1===de)return lt*M}else lt!==-1&&(tt-=tt-lt),lt=-1}else for(w+de>B&&(w=B-de),tt=w;tt>=0;tt--){let lt=!0;for(let Ge=0;Ge<de;Ge++)if(Ae(k,tt+Ge)!==Ae(p,Ge)){lt=!1;break}if(lt)return tt}return-1}a.prototype.includes=function(p,w,P){return this.indexOf(p,w,P)!==-1},a.prototype.indexOf=function(p,w,P){return S(this,p,w,P,!0)},a.prototype.lastIndexOf=function(p,w,P){return S(this,p,w,P,!1)};function $(k,p,w,P){w=Number(w)||0;const A=k.length-w;P?(P=Number(P),P>A&&(P=A)):P=A;const M=p.length;P>M/2&&(P=M/2);let B;for(B=0;B<P;++B){const de=parseInt(p.substr(B*2,2),16);if(wt(de))return B;k[w+B]=de}return B}function O(k,p,w,P){return ft(pi(p,k.length-w),k,w,P)}function I(k,p,w,P){return ft(za(p),k,w,P)}function R(k,p,w,P){return ft(_t(p),k,w,P)}function Y(k,p,w,P){return ft(pu(p,k.length-w),k,w,P)}a.prototype.write=function(p,w,P,A){if(w===void 0)A="utf8",P=this.length,w=0;else if(P===void 0&&typeof w=="string")A=w,P=this.length,w=0;else if(isFinite(w))w=w>>>0,isFinite(P)?(P=P>>>0,A===void 0&&(A="utf8")):(A=P,P=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const M=this.length-w;if((P===void 0||P>M)&&(P=M),p.length>0&&(P<0||w<0)||w>this.length)throw new RangeError("Attempt to write outside buffer bounds");A||(A="utf8");let B=!1;for(;;)switch(A){case"hex":return $(this,p,w,P);case"utf8":case"utf-8":return O(this,p,w,P);case"ascii":case"latin1":case"binary":return I(this,p,w,P);case"base64":return R(this,p,w,P);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,p,w,P);default:if(B)throw new TypeError("Unknown encoding: "+A);A=(""+A).toLowerCase(),B=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function te(k,p,w){return p===0&&w===k.length?e.fromByteArray(k):e.fromByteArray(k.slice(p,w))}function W(k,p,w){w=Math.min(k.length,w);const P=[];let A=p;for(;A<w;){const M=k[A];let B=null,de=M>239?4:M>223?3:M>191?2:1;if(A+de<=w){let Ae,tt,lt,Ge;switch(de){case 1:M<128&&(B=M);break;case 2:Ae=k[A+1],(Ae&192)===128&&(Ge=(M&31)<<6|Ae&63,Ge>127&&(B=Ge));break;case 3:Ae=k[A+1],tt=k[A+2],(Ae&192)===128&&(tt&192)===128&&(Ge=(M&15)<<12|(Ae&63)<<6|tt&63,Ge>2047&&(Ge<55296||Ge>57343)&&(B=Ge));break;case 4:Ae=k[A+1],tt=k[A+2],lt=k[A+3],(Ae&192)===128&&(tt&192)===128&&(lt&192)===128&&(Ge=(M&15)<<18|(Ae&63)<<12|(tt&63)<<6|lt&63,Ge>65535&&Ge<1114112&&(B=Ge))}}B===null?(B=65533,de=1):B>65535&&(B-=65536,P.push(B>>>10&1023|55296),B=56320|B&1023),P.push(B),A+=de}return j(P)}const F=4096;function j(k){const p=k.length;if(p<=F)return String.fromCharCode.apply(String,k);let w="",P=0;for(;P<p;)w+=String.fromCharCode.apply(String,k.slice(P,P+=F));return w}function U(k,p,w){let P="";w=Math.min(k.length,w);for(let A=p;A<w;++A)P+=String.fromCharCode(k[A]&127);return P}function N(k,p,w){let P="";w=Math.min(k.length,w);for(let A=p;A<w;++A)P+=String.fromCharCode(k[A]);return P}function z(k,p,w){const P=k.length;(!p||p<0)&&(p=0),(!w||w<0||w>P)&&(w=P);let A="";for(let M=p;M<w;++M)A+=Pt[k[M]];return A}function L(k,p,w){const P=k.slice(p,w);let A="";for(let M=0;M<P.length-1;M+=2)A+=String.fromCharCode(P[M]+P[M+1]*256);return A}a.prototype.slice=function(p,w){const P=this.length;p=~~p,w=w===void 0?P:~~w,p<0?(p+=P,p<0&&(p=0)):p>P&&(p=P),w<0?(w+=P,w<0&&(w=0)):w>P&&(w=P),w<p&&(w=p);const A=this.subarray(p,w);return Object.setPrototypeOf(A,a.prototype),A};function H(k,p,w){if(k%1!==0||k<0)throw new RangeError("offset is not uint");if(k+p>w)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(p,w,P){p=p>>>0,w=w>>>0,P||H(p,w,this.length);let A=this[p],M=1,B=0;for(;++B<w&&(M*=256);)A+=this[p+B]*M;return A},a.prototype.readUintBE=a.prototype.readUIntBE=function(p,w,P){p=p>>>0,w=w>>>0,P||H(p,w,this.length);let A=this[p+--w],M=1;for(;w>0&&(M*=256);)A+=this[p+--w]*M;return A},a.prototype.readUint8=a.prototype.readUInt8=function(p,w){return p=p>>>0,w||H(p,1,this.length),this[p]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(p,w){return p=p>>>0,w||H(p,2,this.length),this[p]|this[p+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(p,w){return p=p>>>0,w||H(p,2,this.length),this[p]<<8|this[p+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(p,w){return p=p>>>0,w||H(p,4,this.length),(this[p]|this[p+1]<<8|this[p+2]<<16)+this[p+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(p,w){return p=p>>>0,w||H(p,4,this.length),this[p]*16777216+(this[p+1]<<16|this[p+2]<<8|this[p+3])},a.prototype.readBigUInt64LE=Je(function(p){p=p>>>0,Ne(p,"offset");const w=this[p],P=this[p+7];(w===void 0||P===void 0)&&vn(p,this.length-8);const A=w+this[++p]*2**8+this[++p]*2**16+this[++p]*2**24,M=this[++p]+this[++p]*2**8+this[++p]*2**16+P*2**24;return BigInt(A)+(BigInt(M)<<BigInt(32))}),a.prototype.readBigUInt64BE=Je(function(p){p=p>>>0,Ne(p,"offset");const w=this[p],P=this[p+7];(w===void 0||P===void 0)&&vn(p,this.length-8);const A=w*2**24+this[++p]*2**16+this[++p]*2**8+this[++p],M=this[++p]*2**24+this[++p]*2**16+this[++p]*2**8+P;return(BigInt(A)<<BigInt(32))+BigInt(M)}),a.prototype.readIntLE=function(p,w,P){p=p>>>0,w=w>>>0,P||H(p,w,this.length);let A=this[p],M=1,B=0;for(;++B<w&&(M*=256);)A+=this[p+B]*M;return M*=128,A>=M&&(A-=Math.pow(2,8*w)),A},a.prototype.readIntBE=function(p,w,P){p=p>>>0,w=w>>>0,P||H(p,w,this.length);let A=w,M=1,B=this[p+--A];for(;A>0&&(M*=256);)B+=this[p+--A]*M;return M*=128,B>=M&&(B-=Math.pow(2,8*w)),B},a.prototype.readInt8=function(p,w){return p=p>>>0,w||H(p,1,this.length),this[p]&128?(255-this[p]+1)*-1:this[p]},a.prototype.readInt16LE=function(p,w){p=p>>>0,w||H(p,2,this.length);const P=this[p]|this[p+1]<<8;return P&32768?P|4294901760:P},a.prototype.readInt16BE=function(p,w){p=p>>>0,w||H(p,2,this.length);const P=this[p+1]|this[p]<<8;return P&32768?P|4294901760:P},a.prototype.readInt32LE=function(p,w){return p=p>>>0,w||H(p,4,this.length),this[p]|this[p+1]<<8|this[p+2]<<16|this[p+3]<<24},a.prototype.readInt32BE=function(p,w){return p=p>>>0,w||H(p,4,this.length),this[p]<<24|this[p+1]<<16|this[p+2]<<8|this[p+3]},a.prototype.readBigInt64LE=Je(function(p){p=p>>>0,Ne(p,"offset");const w=this[p],P=this[p+7];(w===void 0||P===void 0)&&vn(p,this.length-8);const A=this[p+4]+this[p+5]*2**8+this[p+6]*2**16+(P<<24);return(BigInt(A)<<BigInt(32))+BigInt(w+this[++p]*2**8+this[++p]*2**16+this[++p]*2**24)}),a.prototype.readBigInt64BE=Je(function(p){p=p>>>0,Ne(p,"offset");const w=this[p],P=this[p+7];(w===void 0||P===void 0)&&vn(p,this.length-8);const A=(w<<24)+this[++p]*2**16+this[++p]*2**8+this[++p];return(BigInt(A)<<BigInt(32))+BigInt(this[++p]*2**24+this[++p]*2**16+this[++p]*2**8+P)}),a.prototype.readFloatLE=function(p,w){return p=p>>>0,w||H(p,4,this.length),n.read(this,p,!0,23,4)},a.prototype.readFloatBE=function(p,w){return p=p>>>0,w||H(p,4,this.length),n.read(this,p,!1,23,4)},a.prototype.readDoubleLE=function(p,w){return p=p>>>0,w||H(p,8,this.length),n.read(this,p,!0,52,8)},a.prototype.readDoubleBE=function(p,w){return p=p>>>0,w||H(p,8,this.length),n.read(this,p,!1,52,8)};function G(k,p,w,P,A,M){if(!a.isBuffer(k))throw new TypeError('"buffer" argument must be a Buffer instance');if(p>A||p<M)throw new RangeError('"value" argument is out of bounds');if(w+P>k.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(p,w,P,A){if(p=+p,w=w>>>0,P=P>>>0,!A){const de=Math.pow(2,8*P)-1;G(this,p,w,P,de,0)}let M=1,B=0;for(this[w]=p&255;++B<P&&(M*=256);)this[w+B]=p/M&255;return w+P},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(p,w,P,A){if(p=+p,w=w>>>0,P=P>>>0,!A){const de=Math.pow(2,8*P)-1;G(this,p,w,P,de,0)}let M=P-1,B=1;for(this[w+M]=p&255;--M>=0&&(B*=256);)this[w+M]=p/B&255;return w+P},a.prototype.writeUint8=a.prototype.writeUInt8=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,1,255,0),this[w]=p&255,w+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,2,65535,0),this[w]=p&255,this[w+1]=p>>>8,w+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,2,65535,0),this[w]=p>>>8,this[w+1]=p&255,w+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,4,4294967295,0),this[w+3]=p>>>24,this[w+2]=p>>>16,this[w+1]=p>>>8,this[w]=p&255,w+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,4,4294967295,0),this[w]=p>>>24,this[w+1]=p>>>16,this[w+2]=p>>>8,this[w+3]=p&255,w+4};function V(k,p,w,P,A){je(p,P,A,k,w,7);let M=Number(p&BigInt(4294967295));k[w++]=M,M=M>>8,k[w++]=M,M=M>>8,k[w++]=M,M=M>>8,k[w++]=M;let B=Number(p>>BigInt(32)&BigInt(4294967295));return k[w++]=B,B=B>>8,k[w++]=B,B=B>>8,k[w++]=B,B=B>>8,k[w++]=B,w}function ne(k,p,w,P,A){je(p,P,A,k,w,7);let M=Number(p&BigInt(4294967295));k[w+7]=M,M=M>>8,k[w+6]=M,M=M>>8,k[w+5]=M,M=M>>8,k[w+4]=M;let B=Number(p>>BigInt(32)&BigInt(4294967295));return k[w+3]=B,B=B>>8,k[w+2]=B,B=B>>8,k[w+1]=B,B=B>>8,k[w]=B,w+8}a.prototype.writeBigUInt64LE=Je(function(p,w=0){return V(this,p,w,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Je(function(p,w=0){return ne(this,p,w,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(p,w,P,A){if(p=+p,w=w>>>0,!A){const Ae=Math.pow(2,8*P-1);G(this,p,w,P,Ae-1,-Ae)}let M=0,B=1,de=0;for(this[w]=p&255;++M<P&&(B*=256);)p<0&&de===0&&this[w+M-1]!==0&&(de=1),this[w+M]=(p/B>>0)-de&255;return w+P},a.prototype.writeIntBE=function(p,w,P,A){if(p=+p,w=w>>>0,!A){const Ae=Math.pow(2,8*P-1);G(this,p,w,P,Ae-1,-Ae)}let M=P-1,B=1,de=0;for(this[w+M]=p&255;--M>=0&&(B*=256);)p<0&&de===0&&this[w+M+1]!==0&&(de=1),this[w+M]=(p/B>>0)-de&255;return w+P},a.prototype.writeInt8=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,1,127,-128),p<0&&(p=255+p+1),this[w]=p&255,w+1},a.prototype.writeInt16LE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,2,32767,-32768),this[w]=p&255,this[w+1]=p>>>8,w+2},a.prototype.writeInt16BE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,2,32767,-32768),this[w]=p>>>8,this[w+1]=p&255,w+2},a.prototype.writeInt32LE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,4,2147483647,-2147483648),this[w]=p&255,this[w+1]=p>>>8,this[w+2]=p>>>16,this[w+3]=p>>>24,w+4},a.prototype.writeInt32BE=function(p,w,P){return p=+p,w=w>>>0,P||G(this,p,w,4,2147483647,-2147483648),p<0&&(p=4294967295+p+1),this[w]=p>>>24,this[w+1]=p>>>16,this[w+2]=p>>>8,this[w+3]=p&255,w+4},a.prototype.writeBigInt64LE=Je(function(p,w=0){return V(this,p,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Je(function(p,w=0){return ne(this,p,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function fe(k,p,w,P,A,M){if(w+P>k.length)throw new RangeError("Index out of range");if(w<0)throw new RangeError("Index out of range")}function me(k,p,w,P,A){return p=+p,w=w>>>0,A||fe(k,p,w,4),n.write(k,p,w,P,23,4),w+4}a.prototype.writeFloatLE=function(p,w,P){return me(this,p,w,!0,P)},a.prototype.writeFloatBE=function(p,w,P){return me(this,p,w,!1,P)};function ve(k,p,w,P,A){return p=+p,w=w>>>0,A||fe(k,p,w,8),n.write(k,p,w,P,52,8),w+8}a.prototype.writeDoubleLE=function(p,w,P){return ve(this,p,w,!0,P)},a.prototype.writeDoubleBE=function(p,w,P){return ve(this,p,w,!1,P)},a.prototype.copy=function(p,w,P,A){if(!a.isBuffer(p))throw new TypeError("argument should be a Buffer");if(P||(P=0),!A&&A!==0&&(A=this.length),w>=p.length&&(w=p.length),w||(w=0),A>0&&A<P&&(A=P),A===P||p.length===0||this.length===0)return 0;if(w<0)throw new RangeError("targetStart out of bounds");if(P<0||P>=this.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("sourceEnd out of bounds");A>this.length&&(A=this.length),p.length-w<A-P&&(A=p.length-w+P);const M=A-P;return this===p&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(w,P,A):Uint8Array.prototype.set.call(p,this.subarray(P,A),w),M},a.prototype.fill=function(p,w,P,A){if(typeof p=="string"){if(typeof w=="string"?(A=w,w=0,P=this.length):typeof P=="string"&&(A=P,P=this.length),A!==void 0&&typeof A!="string")throw new TypeError("encoding must be a string");if(typeof A=="string"&&!a.isEncoding(A))throw new TypeError("Unknown encoding: "+A);if(p.length===1){const B=p.charCodeAt(0);(A==="utf8"&&B<128||A==="latin1")&&(p=B)}}else typeof p=="number"?p=p&255:typeof p=="boolean"&&(p=Number(p));if(w<0||this.length<w||this.length<P)throw new RangeError("Out of range index");if(P<=w)return this;w=w>>>0,P=P===void 0?this.length:P>>>0,p||(p=0);let M;if(typeof p=="number")for(M=w;M<P;++M)this[M]=p;else{const B=a.isBuffer(p)?p:a.from(p,A),de=B.length;if(de===0)throw new TypeError('The value "'+p+'" is invalid for argument "value"');for(M=0;M<P-w;++M)this[M+w]=B[M%de]}return this};const Ee={};function Pe(k,p,w){Ee[k]=class extends w{constructor(){super(),Object.defineProperty(this,"message",{value:p.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${k}]`,this.stack,delete this.name}get code(){return k}set code(A){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:A,writable:!0})}toString(){return`${this.name} [${k}]: ${this.message}`}}}Pe("ERR_BUFFER_OUT_OF_BOUNDS",function(k){return k?`${k} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Pe("ERR_INVALID_ARG_TYPE",function(k,p){return`The "${k}" argument must be of type number. Received type ${typeof p}`},TypeError),Pe("ERR_OUT_OF_RANGE",function(k,p,w){let P=`The value of "${k}" is out of range.`,A=w;return Number.isInteger(w)&&Math.abs(w)>2**32?A=be(String(w)):typeof w=="bigint"&&(A=String(w),(w>BigInt(2)**BigInt(32)||w<-(BigInt(2)**BigInt(32)))&&(A=be(A)),A+="n"),P+=` It must be ${p}. Received ${A}`,P},RangeError);function be(k){let p="",w=k.length;const P=k[0]==="-"?1:0;for(;w>=P+4;w-=3)p=`_${k.slice(w-3,w)}${p}`;return`${k.slice(0,w)}${p}`}function Ie(k,p,w){Ne(p,"offset"),(k[p]===void 0||k[p+w]===void 0)&&vn(p,k.length-(w+1))}function je(k,p,w,P,A,M){if(k>w||k<p){const B=typeof p=="bigint"?"n":"";let de;throw M>3?p===0||p===BigInt(0)?de=`>= 0${B} and < 2${B} ** ${(M+1)*8}${B}`:de=`>= -(2${B} ** ${(M+1)*8-1}${B}) and < 2 ** ${(M+1)*8-1}${B}`:de=`>= ${p}${B} and <= ${w}${B}`,new Ee.ERR_OUT_OF_RANGE("value",de,k)}Ie(P,A,M)}function Ne(k,p){if(typeof k!="number")throw new Ee.ERR_INVALID_ARG_TYPE(p,"number",k)}function vn(k,p,w){throw Math.floor(k)!==k?(Ne(k,w),new Ee.ERR_OUT_OF_RANGE(w||"offset","an integer",k)):p<0?new Ee.ERR_BUFFER_OUT_OF_BOUNDS:new Ee.ERR_OUT_OF_RANGE(w||"offset",`>= ${w?1:0} and <= ${p}`,k)}const hi=/[^+/0-9A-Za-z-_]/g;function yo(k){if(k=k.split("=")[0],k=k.trim().replace(hi,""),k.length<2)return"";for(;k.length%4!==0;)k=k+"=";return k}function pi(k,p){p=p||1/0;let w;const P=k.length;let A=null;const M=[];for(let B=0;B<P;++B){if(w=k.charCodeAt(B),w>55295&&w<57344){if(!A){if(w>56319){(p-=3)>-1&&M.push(239,191,189);continue}else if(B+1===P){(p-=3)>-1&&M.push(239,191,189);continue}A=w;continue}if(w<56320){(p-=3)>-1&&M.push(239,191,189),A=w;continue}w=(A-55296<<10|w-56320)+65536}else A&&(p-=3)>-1&&M.push(239,191,189);if(A=null,w<128){if((p-=1)<0)break;M.push(w)}else if(w<2048){if((p-=2)<0)break;M.push(w>>6|192,w&63|128)}else if(w<65536){if((p-=3)<0)break;M.push(w>>12|224,w>>6&63|128,w&63|128)}else if(w<1114112){if((p-=4)<0)break;M.push(w>>18|240,w>>12&63|128,w>>6&63|128,w&63|128)}else throw new Error("Invalid code point")}return M}function za(k){const p=[];for(let w=0;w<k.length;++w)p.push(k.charCodeAt(w)&255);return p}function pu(k,p){let w,P,A;const M=[];for(let B=0;B<k.length&&!((p-=2)<0);++B)w=k.charCodeAt(B),P=w>>8,A=w%256,M.push(A),M.push(P);return M}function _t(k){return e.toByteArray(yo(k))}function ft(k,p,w,P){let A;for(A=0;A<P&&!(A+w>=p.length||A>=k.length);++A)p[A+w]=k[A];return A}function Ze(k,p){return k instanceof p||k!=null&&k.constructor!=null&&k.constructor.name!=null&&k.constructor.name===p.name}function wt(k){return k!==k}const Pt=function(){const k="0123456789abcdef",p=new Array(256);for(let w=0;w<16;++w){const P=w*16;for(let A=0;A<16;++A)p[P+A]=k[w]+k[A]}return p}();function Je(k){return typeof BigInt>"u"?Tt:k}function Tt(){throw new Error("BigInt not supported")}})(D4);var Y3;typeof window<"u"&&(window.Buffer||(window.Buffer=D4.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Y3=window.process)!=null&&Y3.env||(window.process={env:{}}));function eA({storage:t,key:e="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(t){const s=a=>{try{t.setItem(e,r(a));return}catch(l){return l}};return{persistClient:tA(a=>{let l=a,c=s(l),u=0;for(;c&&l;)u++,l=o==null?void 0:o({persistedClient:l,error:c,errorCount:u}),l&&(c=s(l))},n),restoreClient:()=>{const a=t.getItem(e);if(a)return i(a)},removeClient:()=>{t.removeItem(e)}}}return{persistClient:w3,restoreClient:()=>{},removeClient:w3}}function tA(t,e=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{t(...r),n=null},e))}}function w3(){}class lu{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const zg=typeof window>"u"||"Deno"in window;function qn(){}function nA(t,e){return typeof t=="function"?t(e):t}function rA(t){return typeof t=="number"&&t>=0&&t!==1/0}function iA(t,e){return Math.max(t+(e||0)-Date.now(),0)}function zu(t,e,n){return cu(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function R4(t,e,n){return cu(t)?typeof e=="function"?{...n,mutationKey:t,mutationFn:e}:{...e,mutationKey:t}:typeof t=="function"?{...e,mutationFn:t}:{...t}}function _i(t,e,n){return cu(t)?[{...e,queryKey:t},n]:[t||{},e]}function y3(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=t;if(cu(s)){if(r){if(e.queryHash!==Wg(s,e.options))return!1}else if(!df(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof i<"u"&&i!==e.state.fetchStatus||o&&!o(e))}function v3(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:o}=t;if(cu(o)){if(!e.options.mutationKey)return!1;if(n){if(Oo(e.options.mutationKey)!==Oo(o))return!1}else if(!df(e.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Wg(t,e){return((e==null?void 0:e.queryKeyHashFn)||Oo)(t)}function Oo(t){return JSON.stringify(t,(e,n)=>_1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function df(t,e){return M4(t,e)}function M4(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!M4(t[n],e[n])):!1}function j4(t,e){if(t===e)return t;const n=b3(t)&&b3(e);if(n||_1(t)&&_1(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const c=n?l:i[l];s[c]=j4(t[c],e[c]),s[c]===t[c]&&a++}return r===o&&a===r?t:s}return e}function oA(t,e){if(t&&!e||e&&!t)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function b3(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function _1(t){if(!x3(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!x3(n)||!n.hasOwnProperty("isPrototypeOf"))}function x3(t){return Object.prototype.toString.call(t)==="[object Object]"}function cu(t){return Array.isArray(t)}function L4(t){return new Promise(e=>{setTimeout(e,t)})}function C3(t){L4(0).then(t)}function sA(){if(typeof AbortController=="function")return new AbortController}function aA(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?j4(t,e):e}class lA extends lu{constructor(){super(),this.setup=e=>{if(!zg&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const E1=new lA,_3=["online","offline"];class cA extends lu{constructor(){super(),this.setup=e=>{if(!zg&&window.addEventListener){const n=()=>e();return _3.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{_3.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const ff=new cA;function uA(t){return Math.min(1e3*2**t,3e4)}function Hg(t){return(t??"online")==="online"?ff.isOnline():!0}class B4{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function Mh(t){return t instanceof B4}function U4(t){let e=!1,n=0,r=!1,i,o,s;const a=new Promise((E,b)=>{o=E,s=b}),l=E=>{r||(g(new B4(E)),t.abort==null||t.abort())},c=()=>{e=!0},u=()=>{e=!1},f=()=>!E1.isFocused()||t.networkMode!=="always"&&!ff.isOnline(),h=E=>{r||(r=!0,t.onSuccess==null||t.onSuccess(E),i==null||i(),o(E))},g=E=>{r||(r=!0,t.onError==null||t.onError(E),i==null||i(),s(E))},y=()=>new Promise(E=>{i=b=>{const m=r||!f();return m&&E(b),m},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),C=()=>{if(r)return;let E;try{E=t.fn()}catch(b){E=Promise.reject(b)}Promise.resolve(E).then(h).catch(b=>{var m,v;if(r)return;const x=(m=t.retry)!=null?m:3,_=(v=t.retryDelay)!=null?v:uA,S=typeof _=="function"?_(n,b):_,d=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,b);if(e||!d){g(b);return}n++,t.onFail==null||t.onFail(n,b),L4(S).then(()=>{if(f())return y()}).then(()=>{e?g(b):C()})})};return Hg(t.networkMode)?C():y().then(C),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:c,continueRetry:u}}const Vg=console;function dA(){let t=[],e=0,n=u=>{u()},r=u=>{u()};const i=u=>{let f;e++;try{f=u()}finally{e--,e||a()}return f},o=u=>{e?t.push(u):C3(()=>{n(u)})},s=u=>(...f)=>{o(()=>{u(...f)})},a=()=>{const u=t;t=[],u.length&&C3(()=>{r(()=>{u.forEach(f=>{n(f)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u}}}const Mt=dA();class F4{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),rA(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(zg?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class fA extends F4{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||Vg,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||hA(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=aA(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(qn).catch(qn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!iA(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const g=this.observers.find(y=>y.options.queryFn);g&&this.setOptions(g.options)}const s=sA(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(u),(r=this.options.behavior)==null||r.onFetch(u),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=u.fetchOptions)==null?void 0:i.meta)){var f;this.dispatch({type:"fetch",meta:(f=u.fetchOptions)==null?void 0:f.meta})}const h=g=>{if(Mh(g)&&g.silent||this.dispatch({type:"error",error:g}),!Mh(g)){var y,C,E,b;(y=(C=this.cache.config).onError)==null||y.call(C,g,this),(E=(b=this.cache.config).onSettled)==null||E.call(b,this.state.data,g,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=U4({fn:u.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:g=>{var y,C,E,b;if(typeof g>"u"){h(new Error(this.queryHash+" data is undefined"));return}this.setData(g),(y=(C=this.cache.config).onSuccess)==null||y.call(C,g,this),(E=(b=this.cache.config).onSettled)==null||E.call(b,g,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:(g,y)=>{this.dispatch({type:"failed",failureCount:g,error:y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,o;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:Hg(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=e.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Mh(s)&&s.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Mt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function hA(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class pA extends lu{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:Wg(o,n);let a=this.get(s);return a||(a=new fA({cache:this,logger:e.getLogger(),queryKey:o,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(o)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Mt.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=_i(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>y3(r,i))}findAll(e,n){const[r]=_i(e,n);return Object.keys(r).length>0?this.queries.filter(i=>y3(r,i)):this.queries}notify(e){Mt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){Mt.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Mt.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class mA extends F4{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||Vg,this.observers=[],this.state=e.state||z4(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var d;return this.retryer=U4({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:($,O)=>{this.dispatch({type:"failed",failureCount:$,error:O})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(d=this.options.retry)!=null?d:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,c,u;if(!n){var f,h,g,y;this.dispatch({type:"loading",variables:this.options.variables}),await((f=(h=this.mutationCache.config).onMutate)==null?void 0:f.call(h,this.state.variables,this));const $=await((g=(y=this.options).onMutate)==null?void 0:g.call(y,this.state.variables));$!==this.state.context&&this.dispatch({type:"loading",context:$,variables:this.state.variables})}const d=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,d,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,d,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,d,null,this.state.variables,this.state.context,this)),await((c=(u=this.options).onSettled)==null?void 0:c.call(u,d,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:d}),d}catch(d){try{var C,E,b,m,v,x,_,S;throw await((C=(E=this.mutationCache.config).onError)==null?void 0:C.call(E,d,this.state.variables,this.state.context,this)),await((b=(m=this.options).onError)==null?void 0:b.call(m,d,this.state.variables,this.state.context)),await((v=(x=this.mutationCache.config).onSettled)==null?void 0:v.call(x,void 0,d,this.state.variables,this.state.context,this)),await((_=(S=this.options).onSettled)==null?void 0:_.call(S,void 0,d,this.state.variables,this.state.context)),d}finally{this.dispatch({type:"error",error:d})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Hg(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),Mt.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function z4(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class gA extends lu{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new mA({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){Mt.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>v3(e,n))}findAll(e){return this.mutations.filter(n=>v3(e,n))}notify(e){Mt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Mt.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(qn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function wA(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,o,s;const a=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,l=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,c=l==null?void 0:l.pageParam,u=(l==null?void 0:l.direction)==="forward",f=(l==null?void 0:l.direction)==="backward",h=((o=t.state.data)==null?void 0:o.pages)||[],g=((s=t.state.data)==null?void 0:s.pageParams)||[];let y=g,C=!1;const E=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>{var d;if((d=t.signal)!=null&&d.aborted)C=!0;else{var $;($=t.signal)==null||$.addEventListener("abort",()=>{C=!0})}return t.signal}})},b=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),m=(S,d,$,O)=>(y=O?[d,...y]:[...y,d],O?[$,...S]:[...S,$]),v=(S,d,$,O)=>{if(C)return Promise.reject("Cancelled");if(typeof $>"u"&&!d&&S.length)return Promise.resolve(S);const I={queryKey:t.queryKey,pageParam:$,meta:t.options.meta};E(I);const R=b(I);return Promise.resolve(R).then(te=>m(S,$,te,O))};let x;if(!h.length)x=v([]);else if(u){const S=typeof c<"u",d=S?c:E3(t.options,h);x=v(h,S,d)}else if(f){const S=typeof c<"u",d=S?c:yA(t.options,h);x=v(h,S,d,!0)}else{y=[];const S=typeof t.options.getNextPageParam>"u";x=(a&&h[0]?a(h[0],0,h):!0)?v([],S,g[0]):Promise.resolve(m([],g[0],h[0]));for(let $=1;$<h.length;$++)x=x.then(O=>{if(a&&h[$]?a(h[$],$,h):!0){const R=S?g[$]:E3(t.options,O);return v(O,S,R)}return Promise.resolve(m(O,g[$],h[$]))})}return x.then(S=>({pages:S,pageParams:y}))}}}}function E3(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function yA(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class vA{constructor(e={}){this.queryCache=e.queryCache||new pA,this.mutationCache=e.mutationCache||new gA,this.logger=e.logger||Vg,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=E1.subscribe(()=>{E1.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=ff.subscribe(()=>{ff.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=_i(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=zu(e,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),o=i==null?void 0:i.state.data,s=nA(n,o);if(typeof s>"u")return;const a=zu(e),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(e,n,r){return Mt.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=_i(e,n),i=this.queryCache;Mt.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(e,n,r){const[i,o]=_i(e,n,r),s=this.queryCache,a={type:"active",...i};return Mt.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(e,n,r){const[i,o={}]=_i(e,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=Mt.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(qn).catch(qn)}invalidateQueries(e,n,r){const[i,o]=_i(e,n,r);return Mt.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(c=>{c.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(e,n,r){const[i,o]=_i(e,n,r),s=Mt.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...o,cancelRefetch:(c=o==null?void 0:o.cancelRefetch)!=null?c:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(qn);return o!=null&&o.throwOnError||(a=a.catch(qn)),a}fetchQuery(e,n,r){const i=zu(e,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(qn).catch(qn)}fetchInfiniteQuery(e,n,r){const i=zu(e,n,r);return i.behavior=wA(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(qn).catch(qn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>Oo(e)===Oo(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>df(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>Oo(e)===Oo(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>df(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Wg(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}let bA=class extends lu{constructor(e,n){super(),this.client=e,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const r=this.options;this.options=this.client.defaultMutationOptions(e),oA(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const n={listeners:!0};e.type==="success"?n.onSuccess=!0:e.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:z4(),n={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(e){Mt.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var s,a,l,c;(s=(a=this.mutateOptions).onError)==null||s.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(l=(c=this.mutateOptions).onSettled)==null||l.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)})})}};function xA(t){return{mutationKey:t.options.mutationKey,state:t.state}}function CA(t){return{state:t.state,queryKey:t.queryKey,queryHash:t.queryHash}}function _A(t){return t.state.isPaused}function EA(t){return t.state.status==="success"}function SA(t,e={}){const n=[],r=[];if(e.dehydrateMutations!==!1){const i=e.shouldDehydrateMutation||_A;t.getMutationCache().getAll().forEach(o=>{i(o)&&n.push(xA(o))})}if(e.dehydrateQueries!==!1){const i=e.shouldDehydrateQuery||EA;t.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(CA(o))})}return{mutations:n,queries:r}}function $A(t,e,n){if(typeof e!="object"||e===null)return;const r=t.getMutationCache(),i=t.getQueryCache(),o=e.mutations||[],s=e.queries||[];o.forEach(a=>{var l;r.build(t,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(({queryKey:a,state:l,queryHash:c})=>{var u;const f=i.get(c);if(f){if(f.state.dataUpdatedAt<l.dataUpdatedAt){const{fetchStatus:h,...g}=l;f.setState(g)}return}i.build(t,{...n==null||(u=n.defaultOptions)==null?void 0:u.queries,queryKey:a,queryHash:c},{...l,fetchStatus:"idle"})})}const kA=$b.useSyncExternalStore,S3=le.createContext(void 0),W4=le.createContext(!1);function H4(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=S3),window.ReactQueryClientContext):S3)}const PA=({context:t}={})=>{const e=le.useContext(H4(t,le.useContext(W4)));if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},TA=({client:t,children:e,context:n,contextSharing:r=!1})=>{le.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=H4(n,r);return le.createElement(W4.Provider,{value:!n&&r},le.createElement(i.Provider,{value:t},e))};function AA(t,e){return typeof t=="function"?t(...e):!!t}function OA(t,e,n){const r=R4(t,e,n),i=PA({context:r.context}),[o]=le.useState(()=>new bA(i,r));le.useEffect(()=>{o.setOptions(r)},[o,r]);const s=kA(le.useCallback(l=>o.subscribe(Mt.batchCalls(l)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),a=le.useCallback((l,c)=>{o.mutate(l,c).catch(IA)},[o]);if(s.error&&AA(o.options.useErrorBoundary,[s.error]))throw s.error;return{...s,mutate:a,mutateAsync:s.mutate}}function IA(){}const DA=["added","removed","updated"];function $3(t){return DA.includes(t)}async function NA({queryClient:t,persister:e,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await e.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?e.removeClient():$A(t,o.clientState,i)}else e.removeClient()}catch{e.removeClient()}}async function k3({queryClient:t,persister:e,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:SA(t,r)};await e.persistClient(i)}function RA(t){const e=t.queryClient.getQueryCache().subscribe(r=>{$3(r.type)&&k3(t)}),n=t.queryClient.getMutationCache().subscribe(r=>{$3(r.type)&&k3(t)});return()=>{e(),n()}}function MA(t){let e=!1,n;const r=()=>{e=!0,n==null||n()},i=NA(t).then(()=>{e||(n=RA(t))});return[r,i]}var V4={exports:{}},q4={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=le,jA=$b;function LA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var BA=typeof Object.is=="function"?Object.is:LA,UA=jA.useSyncExternalStore,FA=T0.useRef,zA=T0.useEffect,WA=T0.useMemo,HA=T0.useDebugValue;q4.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=FA(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=WA(function(){function l(g){if(!c){if(c=!0,u=g,g=r(g),i!==void 0&&s.hasValue){var y=s.value;if(i(y,g))return f=y}return f=g}if(y=f,BA(u,g))return y;var C=r(g);return i!==void 0&&i(y,C)?y:(u=g,f=C)}var c=!1,u,f,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=UA(t,o[0],o[1]);return zA(function(){s.hasValue=!0,s.value=a},[a]),HA(a),a};V4.exports=q4;var Z4=V4.exports;function VA({queryClient:t=new vA({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:e=vb({storage:typeof window<"u"&&window.localStorage?window.localStorage:yb}),persister:n=typeof window<"u"?eA({key:"cache",storage:e,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=N9({...r,storage:e});return n&&MA({queryClient:t,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:t})}var G4=le.createContext(void 0),K4=le.createContext(void 0);function qA({children:t,config:e}){return le.createElement(G4.Provider,{children:le.createElement(TA,{children:t,client:e.queryClient,context:K4}),value:e})}function Q4(){const t=le.useContext(G4);if(!t)throw new Error(["`useConfig` must be used within `WagmiConfig`.\n","Read more: https://wagmi.sh/react/WagmiConfig"].join(`
`));return t}function ZA(t,e,n){const r=R4(t,e,n);return OA({context:K4,...r})}function GA({chainId:t}={}){return Z4.useSyncExternalStoreWithSelector(e=>L9({chainId:t},e),()=>Sr({chainId:t}),()=>Sr({chainId:t}),e=>e,(e,n)=>e.uid===n.uid)}function KA({chainId:t}={}){return GA({chainId:t}).chain.id}function QA(){const[,t]=le.useReducer(e=>e+1,0);return t}var jh=t=>typeof t=="object"&&!Array.isArray(t);function YA(t,e,n=e,r=i1){const i=le.useRef([]),o=Z4.useSyncExternalStoreWithSelector(t,e,n,s=>s,(s,a)=>{if(jh(s)&&jh(a)&&i.current.length){for(const l of i.current)if(!r(s[l],a[l]))return!1;return!0}return r(s,a)});if(jh(o)){const s={...o};return Object.defineProperties(s,Object.entries(s).reduce((a,[l,c])=>({...a,[l]:{configurable:!1,enumerable:!0,get:()=>(i.current.includes(l)||i.current.push(l),c)}}),{})),s}return o}function Y4({onConnect:t,onDisconnect:e}={}){const n=Q4(),r=le.useCallback(a=>_b(a),[n]),i=YA(r,Vd),o=le.useRef(),s=o.current;return le.useEffect(()=>{(s==null?void 0:s.status)!=="connected"&&i.status==="connected"&&(t==null||t({address:i.address,connector:i.connector,isReconnected:(s==null?void 0:s.status)==="reconnecting"||(s==null?void 0:s.status)===void 0})),(s==null?void 0:s.status)==="connected"&&i.status==="disconnected"&&(e==null||e()),o.current=i},[t,e,s,i]),i}var JA=t=>[{entity:"switchNetwork",...t}],XA=t=>{const{chainId:e}=t;if(!e)throw new Error("chainId is required");return Cb({chainId:e})};function eO({chainId:t,throwForSwitchChainNotSupported:e,onError:n,onMutate:r,onSettled:i,onSuccess:o}={}){var $;const s=Q4(),a=QA(),{data:l,error:c,isError:u,isIdle:f,isLoading:h,isSuccess:g,mutate:y,mutateAsync:C,reset:E,status:b,variables:m}=ZA(JA({chainId:t}),XA,{onError:n,onMutate:r,onSettled:i,onSuccess:o}),v=le.useCallback(O=>y({chainId:O??t}),[t,y]),x=le.useCallback(O=>C({chainId:O??t}),[t,C]);le.useEffect(()=>s.subscribe(({chains:I,connector:R})=>({chains:I,connector:R}),a),[s,a]);let _,S;const d=!!(($=s.connector)!=null&&$.switchChain);return(e||d)&&(_=v,S=x),{chains:s.chains??[],data:l,error:c,isError:u,isIdle:f,isLoading:h,isSuccess:g,pendingChainId:m==null?void 0:m.chainId,reset:E,status:b,switchNetwork:_,switchNetworkAsync:S,variables:m}}var ul,$s,tO=class extends d0{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,sn(this,ul,void 0),sn(this,$s,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:jn(n[0])})},this.onChainChanged=n=>{const r=Hd(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),r=jn(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new cn(e):e}}async disconnect(){if(!qe(this,$s))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return jn(e[0])}async getChainId(){const t=await this.getProvider();return Hd(t.chainId)}async getProvider(){var t;if(!qe(this,$s)){let e=(await Fo(()=>import("./index-r8ekgzIg.js").then(s=>s.i),__vite__mapDeps([0,1]))).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),lc(this,ul,new e(this.options));const n=(t=qe(this,ul).walletExtension)==null?void 0:t.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);lc(this,$s,qe(this,ul).makeWeb3Provider(o,i))}return qe(this,$s)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return u0({account:n,chain:r,transport:l0(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r;const e=await this.getProvider(),n=Se(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===t);if(!o)throw new mb({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new cn(s)}throw new ir(i)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}};ul=new WeakMap;$s=new WeakMap;var nO={},A0={},ke={},J4={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,l){var c=a>>>16&65535,u=a&65535,f=l>>>16&65535,h=l&65535;return u*h+(c*h+u*f<<16>>>0)|0}t.mul=Math.imul||e;function n(a,l){return a+l|0}t.add=n;function r(a,l){return a-l|0}t.sub=r;function i(a,l){return a<<l|a>>>32-l}t.rotl=i;function o(a,l){return a<<32-l|a>>>l}t.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(J4);Object.defineProperty(ke,"__esModule",{value:!0});var X4=J4;function rO(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}ke.readInt16BE=rO;function iO(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}ke.readUint16BE=iO;function oO(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}ke.readInt16LE=oO;function sO(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}ke.readUint16LE=sO;function e6(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>8,e[n+1]=t>>>0,e}ke.writeUint16BE=e6;ke.writeInt16BE=e6;function t6(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e}ke.writeUint16LE=t6;ke.writeInt16LE=t6;function S1(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}ke.readInt32BE=S1;function $1(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}ke.readUint32BE=$1;function k1(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}ke.readInt32LE=k1;function P1(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}ke.readUint32LE=P1;function hf(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>24,e[n+1]=t>>>16,e[n+2]=t>>>8,e[n+3]=t>>>0,e}ke.writeUint32BE=hf;ke.writeInt32BE=hf;function pf(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24,e}ke.writeUint32LE=pf;ke.writeInt32LE=pf;function aO(t,e){e===void 0&&(e=0);var n=S1(t,e),r=S1(t,e+4);return n*4294967296+r-(r>>31)*4294967296}ke.readInt64BE=aO;function lO(t,e){e===void 0&&(e=0);var n=$1(t,e),r=$1(t,e+4);return n*4294967296+r}ke.readUint64BE=lO;function cO(t,e){e===void 0&&(e=0);var n=k1(t,e),r=k1(t,e+4);return r*4294967296+n-(n>>31)*4294967296}ke.readInt64LE=cO;function uO(t,e){e===void 0&&(e=0);var n=P1(t,e),r=P1(t,e+4);return r*4294967296+n}ke.readUint64LE=uO;function n6(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),hf(t/4294967296>>>0,e,n),hf(t>>>0,e,n+4),e}ke.writeUint64BE=n6;ke.writeInt64BE=n6;function r6(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),pf(t>>>0,e,n),pf(t/4294967296>>>0,e,n+4),e}ke.writeUint64LE=r6;ke.writeInt64LE=r6;function dO(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=t/8+n-1;o>=n;o--)r+=e[o]*i,i*=256;return r}ke.readUintBE=dO;function fO(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+t/8;o++)r+=e[o]*i,i*=256;return r}ke.readUintLE=fO;function hO(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!X4.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var i=1,o=t/8+r-1;o>=r;o--)n[o]=e/i&255,i*=256;return n}ke.writeUintBE=hO;function pO(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!X4.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+t/8;o++)n[o]=e/i&255,i*=256;return n}ke.writeUintLE=pO;function mO(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e)}ke.readFloat32BE=mO;function gO(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e,!0)}ke.readFloat32LE=gO;function wO(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e)}ke.readFloat64BE=wO;function yO(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e,!0)}ke.readFloat64LE=yO;function vO(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t),e}ke.writeFloat32BE=vO;function bO(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t,!0),e}ke.writeFloat32LE=bO;function xO(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t),e}ke.writeFloat64BE=xO;function CO(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t,!0),e}ke.writeFloat64LE=CO;var hr={};Object.defineProperty(hr,"__esModule",{value:!0});function _O(t){for(var e=0;e<t.length;e++)t[e]=0;return t}hr.wipe=_O;Object.defineProperty(A0,"__esModule",{value:!0});var Wt=ke,T1=hr,EO=20;function SO(t,e,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],c=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],f=n[19]<<24|n[18]<<16|n[17]<<8|n[16],h=n[23]<<24|n[22]<<16|n[21]<<8|n[20],g=n[27]<<24|n[26]<<16|n[25]<<8|n[24],y=n[31]<<24|n[30]<<16|n[29]<<8|n[28],C=e[3]<<24|e[2]<<16|e[1]<<8|e[0],E=e[7]<<24|e[6]<<16|e[5]<<8|e[4],b=e[11]<<24|e[10]<<16|e[9]<<8|e[8],m=e[15]<<24|e[14]<<16|e[13]<<8|e[12],v=r,x=i,_=o,S=s,d=a,$=l,O=c,I=u,R=f,Y=h,te=g,W=y,F=C,j=E,U=b,N=m,z=0;z<EO;z+=2)v=v+d|0,F^=v,F=F>>>16|F<<16,R=R+F|0,d^=R,d=d>>>20|d<<12,x=x+$|0,j^=x,j=j>>>16|j<<16,Y=Y+j|0,$^=Y,$=$>>>20|$<<12,_=_+O|0,U^=_,U=U>>>16|U<<16,te=te+U|0,O^=te,O=O>>>20|O<<12,S=S+I|0,N^=S,N=N>>>16|N<<16,W=W+N|0,I^=W,I=I>>>20|I<<12,_=_+O|0,U^=_,U=U>>>24|U<<8,te=te+U|0,O^=te,O=O>>>25|O<<7,S=S+I|0,N^=S,N=N>>>24|N<<8,W=W+N|0,I^=W,I=I>>>25|I<<7,x=x+$|0,j^=x,j=j>>>24|j<<8,Y=Y+j|0,$^=Y,$=$>>>25|$<<7,v=v+d|0,F^=v,F=F>>>24|F<<8,R=R+F|0,d^=R,d=d>>>25|d<<7,v=v+$|0,N^=v,N=N>>>16|N<<16,te=te+N|0,$^=te,$=$>>>20|$<<12,x=x+O|0,F^=x,F=F>>>16|F<<16,W=W+F|0,O^=W,O=O>>>20|O<<12,_=_+I|0,j^=_,j=j>>>16|j<<16,R=R+j|0,I^=R,I=I>>>20|I<<12,S=S+d|0,U^=S,U=U>>>16|U<<16,Y=Y+U|0,d^=Y,d=d>>>20|d<<12,_=_+I|0,j^=_,j=j>>>24|j<<8,R=R+j|0,I^=R,I=I>>>25|I<<7,S=S+d|0,U^=S,U=U>>>24|U<<8,Y=Y+U|0,d^=Y,d=d>>>25|d<<7,x=x+O|0,F^=x,F=F>>>24|F<<8,W=W+F|0,O^=W,O=O>>>25|O<<7,v=v+$|0,N^=v,N=N>>>24|N<<8,te=te+N|0,$^=te,$=$>>>25|$<<7;Wt.writeUint32LE(v+r|0,t,0),Wt.writeUint32LE(x+i|0,t,4),Wt.writeUint32LE(_+o|0,t,8),Wt.writeUint32LE(S+s|0,t,12),Wt.writeUint32LE(d+a|0,t,16),Wt.writeUint32LE($+l|0,t,20),Wt.writeUint32LE(O+c|0,t,24),Wt.writeUint32LE(I+u|0,t,28),Wt.writeUint32LE(R+f|0,t,32),Wt.writeUint32LE(Y+h|0,t,36),Wt.writeUint32LE(te+g|0,t,40),Wt.writeUint32LE(W+y|0,t,44),Wt.writeUint32LE(F+C|0,t,48),Wt.writeUint32LE(j+E|0,t,52),Wt.writeUint32LE(U+b|0,t,56),Wt.writeUint32LE(N+m|0,t,60)}function i6(t,e,n,r,i){if(i===void 0&&(i=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-e.length,o.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=e,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){SO(a,o,t);for(var c=l;c<l+64&&c<n.length;c++)r[c]=n[c]^a[c-l];kO(o,0,s)}return T1.wipe(a),i===0&&T1.wipe(o),r}A0.streamXOR=i6;function $O(t,e,n,r){return r===void 0&&(r=0),T1.wipe(n),i6(t,e,n,n,r)}A0.stream=$O;function kO(t,e,n){for(var r=1;n--;)r=r+(t[e]&255)|0,t[e]=r&255,r>>>=8,e++;if(r>0)throw new Error("ChaCha: counter overflow")}var o6={},go={};Object.defineProperty(go,"__esModule",{value:!0});function PO(t,e,n){return~(t-1)&e|t-1&n}go.select=PO;function TO(t,e){return(t|0)-(e|0)-1>>>31&1}go.lessOrEqual=TO;function s6(t,e){if(t.length!==e.length)return 0;for(var n=0,r=0;r<t.length;r++)n|=t[r]^e[r];return 1&n-1>>>8}go.compare=s6;function AO(t,e){return t.length===0||e.length===0?!1:s6(t,e)!==0}go.equal=AO;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=go,n=hr;t.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var c=a[2]|a[3]<<8;this._r[1]=(l>>>13|c<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(c>>>10|u<<6)&7939;var f=a[6]|a[7]<<8;this._r[3]=(u>>>7|f<<9)&8191;var h=a[8]|a[9]<<8;this._r[4]=(f>>>4|h<<12)&255,this._r[5]=h>>>1&8190;var g=a[10]|a[11]<<8;this._r[6]=(h>>>14|g<<2)&8191;var y=a[12]|a[13]<<8;this._r[7]=(g>>>11|y<<5)&8065;var C=a[14]|a[15]<<8;this._r[8]=(y>>>8|C<<8)&8191,this._r[9]=C>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,c){for(var u=this._fin?0:2048,f=this._h[0],h=this._h[1],g=this._h[2],y=this._h[3],C=this._h[4],E=this._h[5],b=this._h[6],m=this._h[7],v=this._h[8],x=this._h[9],_=this._r[0],S=this._r[1],d=this._r[2],$=this._r[3],O=this._r[4],I=this._r[5],R=this._r[6],Y=this._r[7],te=this._r[8],W=this._r[9];c>=16;){var F=a[l+0]|a[l+1]<<8;f+=F&8191;var j=a[l+2]|a[l+3]<<8;h+=(F>>>13|j<<3)&8191;var U=a[l+4]|a[l+5]<<8;g+=(j>>>10|U<<6)&8191;var N=a[l+6]|a[l+7]<<8;y+=(U>>>7|N<<9)&8191;var z=a[l+8]|a[l+9]<<8;C+=(N>>>4|z<<12)&8191,E+=z>>>1&8191;var L=a[l+10]|a[l+11]<<8;b+=(z>>>14|L<<2)&8191;var H=a[l+12]|a[l+13]<<8;m+=(L>>>11|H<<5)&8191;var G=a[l+14]|a[l+15]<<8;v+=(H>>>8|G<<8)&8191,x+=G>>>5|u;var V=0,ne=V;ne+=f*_,ne+=h*(5*W),ne+=g*(5*te),ne+=y*(5*Y),ne+=C*(5*R),V=ne>>>13,ne&=8191,ne+=E*(5*I),ne+=b*(5*O),ne+=m*(5*$),ne+=v*(5*d),ne+=x*(5*S),V+=ne>>>13,ne&=8191;var fe=V;fe+=f*S,fe+=h*_,fe+=g*(5*W),fe+=y*(5*te),fe+=C*(5*Y),V=fe>>>13,fe&=8191,fe+=E*(5*R),fe+=b*(5*I),fe+=m*(5*O),fe+=v*(5*$),fe+=x*(5*d),V+=fe>>>13,fe&=8191;var me=V;me+=f*d,me+=h*S,me+=g*_,me+=y*(5*W),me+=C*(5*te),V=me>>>13,me&=8191,me+=E*(5*Y),me+=b*(5*R),me+=m*(5*I),me+=v*(5*O),me+=x*(5*$),V+=me>>>13,me&=8191;var ve=V;ve+=f*$,ve+=h*d,ve+=g*S,ve+=y*_,ve+=C*(5*W),V=ve>>>13,ve&=8191,ve+=E*(5*te),ve+=b*(5*Y),ve+=m*(5*R),ve+=v*(5*I),ve+=x*(5*O),V+=ve>>>13,ve&=8191;var Ee=V;Ee+=f*O,Ee+=h*$,Ee+=g*d,Ee+=y*S,Ee+=C*_,V=Ee>>>13,Ee&=8191,Ee+=E*(5*W),Ee+=b*(5*te),Ee+=m*(5*Y),Ee+=v*(5*R),Ee+=x*(5*I),V+=Ee>>>13,Ee&=8191;var Pe=V;Pe+=f*I,Pe+=h*O,Pe+=g*$,Pe+=y*d,Pe+=C*S,V=Pe>>>13,Pe&=8191,Pe+=E*_,Pe+=b*(5*W),Pe+=m*(5*te),Pe+=v*(5*Y),Pe+=x*(5*R),V+=Pe>>>13,Pe&=8191;var be=V;be+=f*R,be+=h*I,be+=g*O,be+=y*$,be+=C*d,V=be>>>13,be&=8191,be+=E*S,be+=b*_,be+=m*(5*W),be+=v*(5*te),be+=x*(5*Y),V+=be>>>13,be&=8191;var Ie=V;Ie+=f*Y,Ie+=h*R,Ie+=g*I,Ie+=y*O,Ie+=C*$,V=Ie>>>13,Ie&=8191,Ie+=E*d,Ie+=b*S,Ie+=m*_,Ie+=v*(5*W),Ie+=x*(5*te),V+=Ie>>>13,Ie&=8191;var je=V;je+=f*te,je+=h*Y,je+=g*R,je+=y*I,je+=C*O,V=je>>>13,je&=8191,je+=E*$,je+=b*d,je+=m*S,je+=v*_,je+=x*(5*W),V+=je>>>13,je&=8191;var Ne=V;Ne+=f*W,Ne+=h*te,Ne+=g*Y,Ne+=y*R,Ne+=C*I,V=Ne>>>13,Ne&=8191,Ne+=E*O,Ne+=b*$,Ne+=m*d,Ne+=v*S,Ne+=x*_,V+=Ne>>>13,Ne&=8191,V=(V<<2)+V|0,V=V+ne|0,ne=V&8191,V=V>>>13,fe+=V,f=ne,h=fe,g=me,y=ve,C=Ee,E=Pe,b=be,m=Ie,v=je,x=Ne,l+=16,c-=16}this._h[0]=f,this._h[1]=h,this._h[2]=g,this._h[3]=y,this._h[4]=C,this._h[5]=E,this._h[6]=b,this._h[7]=m,this._h[8]=v,this._h[9]=x},s.prototype.finish=function(a,l){l===void 0&&(l=0);var c=new Uint16Array(10),u,f,h,g;if(this._leftover){for(g=this._leftover,this._buffer[g++]=1;g<16;g++)this._buffer[g]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,g=2;g<10;g++)this._h[g]+=u,u=this._h[g]>>>13,this._h[g]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,c[0]=this._h[0]+5,u=c[0]>>>13,c[0]&=8191,g=1;g<10;g++)c[g]=this._h[g]+u,u=c[g]>>>13,c[g]&=8191;for(c[9]-=8192,f=(u^1)-1,g=0;g<10;g++)c[g]&=f;for(f=~f,g=0;g<10;g++)this._h[g]=this._h[g]&f|c[g];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,h=this._h[0]+this._pad[0],this._h[0]=h&65535,g=1;g<8;g++)h=(this._h[g]+this._pad[g]|0)+(h>>>16)|0,this._h[g]=h&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,c=a.length,u;if(this._leftover){u=16-this._leftover,u>c&&(u=c);for(var f=0;f<u;f++)this._buffer[this._leftover+f]=a[l+f];if(c-=u,l+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(c>=16&&(u=c-c%16,this._blocks(a,l,u),l+=u,c-=u),c){for(var f=0;f<c;f++)this._buffer[this._leftover+f]=a[l+f];this._leftover+=c}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var c=l.digest();return l.clean(),c}t.oneTimeAuth=i;function o(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=o})(o6);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=A0,n=o6,r=hr,i=ke,o=go;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(c){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,c.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(c)}return l.prototype.seal=function(c,u,f,h){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var g=new Uint8Array(16);g.set(c,g.length-c.length);var y=new Uint8Array(32);e.stream(this._key,g,y,4);var C=u.length+this.tagLength,E;if(h){if(h.length!==C)throw new Error("ChaCha20Poly1305: incorrect destination length");E=h}else E=new Uint8Array(C);return e.streamXOR(this._key,g,u,E,4),this._authenticate(E.subarray(E.length-this.tagLength,E.length),y,E.subarray(0,E.length-this.tagLength),f),r.wipe(g),E},l.prototype.open=function(c,u,f,h){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var g=new Uint8Array(16);g.set(c,g.length-c.length);var y=new Uint8Array(32);e.stream(this._key,g,y,4);var C=new Uint8Array(this.tagLength);if(this._authenticate(C,y,u.subarray(0,u.length-this.tagLength),f),!o.equal(C,u.subarray(u.length-this.tagLength,u.length)))return null;var E=u.length-this.tagLength,b;if(h){if(h.length!==E)throw new Error("ChaCha20Poly1305: incorrect destination length");b=h}else b=new Uint8Array(E);return e.streamXOR(this._key,g,u.subarray(0,u.length-this.tagLength),b,4),r.wipe(g),b},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(c,u,f,h){var g=new n.Poly1305(u);h&&(g.update(h),h.length%16>0&&g.update(s.subarray(h.length%16))),g.update(f),f.length%16>0&&g.update(s.subarray(f.length%16));var y=new Uint8Array(8);h&&i.writeUint64LE(h.length,y),g.update(y),i.writeUint64LE(f.length,y),g.update(y);for(var C=g.digest(),E=0;E<C.length;E++)c[E]=C[E];g.clean(),r.wipe(C),r.wipe(y)},l}();t.ChaCha20Poly1305=a})(nO);var a6={},uu={},qg={};Object.defineProperty(qg,"__esModule",{value:!0});function OO(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}qg.isSerializableHash=OO;Object.defineProperty(uu,"__esModule",{value:!0});var gr=qg,IO=go,DO=hr,l6=function(){function t(e,n){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),gr.isSerializableHash(this._inner)&&gr.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),DO.wipe(r)}return t.prototype.reset=function(){if(!gr.isSerializableHash(this._inner)||!gr.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){gr.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),gr.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!gr.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!gr.isSerializableHash(this._inner)||!gr.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!gr.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();uu.HMAC=l6;function NO(t,e,n){var r=new l6(t,e);r.update(n);var i=r.digest();return r.clean(),i}uu.hmac=NO;uu.equal=IO.equal;Object.defineProperty(a6,"__esModule",{value:!0});var P3=uu,T3=hr,RO=function(){function t(e,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=P3.hmac(this._hash,r,n);this._hmac=new P3.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var n=new Uint8Array(e),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},t.prototype.clean=function(){this._hmac.clean(),T3.wipe(this._buffer),T3.wipe(this._counter),this._bufpos=0},t}(),Jj=a6.HKDF=RO,c6={},O0={},I0={};Object.defineProperty(I0,"__esModule",{value:!0});I0.BrowserRandomSource=void 0;const A3=65536;class MO{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(e);for(let r=0;r<n.length;r+=A3)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,A3)));return n}}I0.BrowserRandomSource=MO;function jO(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var D0={};const LO={},BO=Object.freeze(Object.defineProperty({__proto__:null,default:LO},Symbol.toStringTag,{value:"Module"})),UO=J3(BO);Object.defineProperty(D0,"__esModule",{value:!0});D0.NodeRandomSource=void 0;const FO=hr;class zO{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof jO<"u"){const e=UO;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(e);if(n.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,FO.wipe)(n),r}}D0.NodeRandomSource=zO;Object.defineProperty(O0,"__esModule",{value:!0});O0.SystemRandomSource=void 0;const WO=I0,HO=D0;class VO{constructor(){if(this.isAvailable=!1,this.name="",this._source=new WO.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new HO.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}O0.SystemRandomSource=VO;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=O0,n=ke,r=hr;t.defaultRandomSource=new e.SystemRandomSource;function i(c,u=t.defaultRandomSource){return u.randomBytes(c)}t.randomBytes=i;function o(c=t.defaultRandomSource){const u=i(4,c),f=(0,n.readUint32LE)(u);return(0,r.wipe)(u),f}t.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(c,u=s,f=t.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let h="";const g=u.length,y=256-256%g;for(;c>0;){const C=i(Math.ceil(c*256/y),f);for(let E=0;E<C.length&&c>0;E++){const b=C[E];b<y&&(h+=u.charAt(b%g),c--)}(0,r.wipe)(C)}return h}t.randomString=a;function l(c,u=s,f=t.defaultRandomSource){const h=Math.ceil(c/(Math.log(u.length)/Math.LN2));return a(h,u,f)}t.randomStringForEntropy=l})(c6);var qO={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ke,n=hr;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,c){if(c===void 0&&(c=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=c,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&c>0;)this._buffer[this._bufferLength++]=l[u++],c--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(c>=this.blockSize&&(u=o(this._temp,this._state,l,u,c),c%=this.blockSize);c>0;)this._buffer[this._bufferLength++]=l[u++],c--;return this},a.prototype.finish=function(l){if(!this._finished){var c=this._bytesHashed,u=this._bufferLength,f=c/536870912|0,h=c<<3,g=c%64<56?64:128;this._buffer[u]=128;for(var y=u+1;y<g-8;y++)this._buffer[y]=0;e.writeUint32BE(f,this._buffer,g-8),e.writeUint32BE(h,this._buffer,g-4),o(this._temp,this._state,this._buffer,0,g),this._finished=!0}for(var y=0;y<this.digestLength/4;y++)e.writeUint32BE(this._state[y],l,y*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();t.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,c,u,f){for(;f>=64;){for(var h=l[0],g=l[1],y=l[2],C=l[3],E=l[4],b=l[5],m=l[6],v=l[7],x=0;x<16;x++){var _=u+x*4;a[x]=e.readUint32BE(c,_)}for(var x=16;x<64;x++){var S=a[x-2],d=(S>>>17|S<<15)^(S>>>19|S<<13)^S>>>10;S=a[x-15];var $=(S>>>7|S<<25)^(S>>>18|S<<14)^S>>>3;a[x]=(d+a[x-7]|0)+($+a[x-16]|0)}for(var x=0;x<64;x++){var d=(((E>>>6|E<<26)^(E>>>11|E<<21)^(E>>>25|E<<7))+(E&b^~E&m)|0)+(v+(i[x]+a[x]|0)|0)|0,$=((h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10))+(h&g^h&y^g&y)|0;v=m,m=b,b=E,E=C+d|0,C=y,y=g,g=h,h=d+$|0}l[0]+=h,l[1]+=g,l[2]+=y,l[3]+=C,l[4]+=E,l[5]+=b,l[6]+=m,l[7]+=v,u+=64,f-=64}return u}function s(a){var l=new r;l.update(a);var c=l.digest();return l.clean(),c}t.hash=s})(qO);var ZO={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=c6,n=hr;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function r(x){const _=new Float64Array(16);if(x)for(let S=0;S<x.length;S++)_[S]=x[S];return _}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(x){let _=1;for(let S=0;S<16;S++){let d=x[S]+_+65535;_=Math.floor(d/65536),x[S]=d-_*65536}x[0]+=_-1+37*(_-1)}function a(x,_,S){const d=~(S-1);for(let $=0;$<16;$++){const O=d&(x[$]^_[$]);x[$]^=O,_[$]^=O}}function l(x,_){const S=r(),d=r();for(let $=0;$<16;$++)d[$]=_[$];s(d),s(d),s(d);for(let $=0;$<2;$++){S[0]=d[0]-65517;for(let I=1;I<15;I++)S[I]=d[I]-65535-(S[I-1]>>16&1),S[I-1]&=65535;S[15]=d[15]-32767-(S[14]>>16&1);const O=S[15]>>16&1;S[14]&=65535,a(d,S,1-O)}for(let $=0;$<16;$++)x[2*$]=d[$]&255,x[2*$+1]=d[$]>>8}function c(x,_){for(let S=0;S<16;S++)x[S]=_[2*S]+(_[2*S+1]<<8);x[15]&=32767}function u(x,_,S){for(let d=0;d<16;d++)x[d]=_[d]+S[d]}function f(x,_,S){for(let d=0;d<16;d++)x[d]=_[d]-S[d]}function h(x,_,S){let d,$,O=0,I=0,R=0,Y=0,te=0,W=0,F=0,j=0,U=0,N=0,z=0,L=0,H=0,G=0,V=0,ne=0,fe=0,me=0,ve=0,Ee=0,Pe=0,be=0,Ie=0,je=0,Ne=0,vn=0,hi=0,yo=0,pi=0,za=0,pu=0,_t=S[0],ft=S[1],Ze=S[2],wt=S[3],Pt=S[4],Je=S[5],Tt=S[6],k=S[7],p=S[8],w=S[9],P=S[10],A=S[11],M=S[12],B=S[13],de=S[14],Ae=S[15];d=_[0],O+=d*_t,I+=d*ft,R+=d*Ze,Y+=d*wt,te+=d*Pt,W+=d*Je,F+=d*Tt,j+=d*k,U+=d*p,N+=d*w,z+=d*P,L+=d*A,H+=d*M,G+=d*B,V+=d*de,ne+=d*Ae,d=_[1],I+=d*_t,R+=d*ft,Y+=d*Ze,te+=d*wt,W+=d*Pt,F+=d*Je,j+=d*Tt,U+=d*k,N+=d*p,z+=d*w,L+=d*P,H+=d*A,G+=d*M,V+=d*B,ne+=d*de,fe+=d*Ae,d=_[2],R+=d*_t,Y+=d*ft,te+=d*Ze,W+=d*wt,F+=d*Pt,j+=d*Je,U+=d*Tt,N+=d*k,z+=d*p,L+=d*w,H+=d*P,G+=d*A,V+=d*M,ne+=d*B,fe+=d*de,me+=d*Ae,d=_[3],Y+=d*_t,te+=d*ft,W+=d*Ze,F+=d*wt,j+=d*Pt,U+=d*Je,N+=d*Tt,z+=d*k,L+=d*p,H+=d*w,G+=d*P,V+=d*A,ne+=d*M,fe+=d*B,me+=d*de,ve+=d*Ae,d=_[4],te+=d*_t,W+=d*ft,F+=d*Ze,j+=d*wt,U+=d*Pt,N+=d*Je,z+=d*Tt,L+=d*k,H+=d*p,G+=d*w,V+=d*P,ne+=d*A,fe+=d*M,me+=d*B,ve+=d*de,Ee+=d*Ae,d=_[5],W+=d*_t,F+=d*ft,j+=d*Ze,U+=d*wt,N+=d*Pt,z+=d*Je,L+=d*Tt,H+=d*k,G+=d*p,V+=d*w,ne+=d*P,fe+=d*A,me+=d*M,ve+=d*B,Ee+=d*de,Pe+=d*Ae,d=_[6],F+=d*_t,j+=d*ft,U+=d*Ze,N+=d*wt,z+=d*Pt,L+=d*Je,H+=d*Tt,G+=d*k,V+=d*p,ne+=d*w,fe+=d*P,me+=d*A,ve+=d*M,Ee+=d*B,Pe+=d*de,be+=d*Ae,d=_[7],j+=d*_t,U+=d*ft,N+=d*Ze,z+=d*wt,L+=d*Pt,H+=d*Je,G+=d*Tt,V+=d*k,ne+=d*p,fe+=d*w,me+=d*P,ve+=d*A,Ee+=d*M,Pe+=d*B,be+=d*de,Ie+=d*Ae,d=_[8],U+=d*_t,N+=d*ft,z+=d*Ze,L+=d*wt,H+=d*Pt,G+=d*Je,V+=d*Tt,ne+=d*k,fe+=d*p,me+=d*w,ve+=d*P,Ee+=d*A,Pe+=d*M,be+=d*B,Ie+=d*de,je+=d*Ae,d=_[9],N+=d*_t,z+=d*ft,L+=d*Ze,H+=d*wt,G+=d*Pt,V+=d*Je,ne+=d*Tt,fe+=d*k,me+=d*p,ve+=d*w,Ee+=d*P,Pe+=d*A,be+=d*M,Ie+=d*B,je+=d*de,Ne+=d*Ae,d=_[10],z+=d*_t,L+=d*ft,H+=d*Ze,G+=d*wt,V+=d*Pt,ne+=d*Je,fe+=d*Tt,me+=d*k,ve+=d*p,Ee+=d*w,Pe+=d*P,be+=d*A,Ie+=d*M,je+=d*B,Ne+=d*de,vn+=d*Ae,d=_[11],L+=d*_t,H+=d*ft,G+=d*Ze,V+=d*wt,ne+=d*Pt,fe+=d*Je,me+=d*Tt,ve+=d*k,Ee+=d*p,Pe+=d*w,be+=d*P,Ie+=d*A,je+=d*M,Ne+=d*B,vn+=d*de,hi+=d*Ae,d=_[12],H+=d*_t,G+=d*ft,V+=d*Ze,ne+=d*wt,fe+=d*Pt,me+=d*Je,ve+=d*Tt,Ee+=d*k,Pe+=d*p,be+=d*w,Ie+=d*P,je+=d*A,Ne+=d*M,vn+=d*B,hi+=d*de,yo+=d*Ae,d=_[13],G+=d*_t,V+=d*ft,ne+=d*Ze,fe+=d*wt,me+=d*Pt,ve+=d*Je,Ee+=d*Tt,Pe+=d*k,be+=d*p,Ie+=d*w,je+=d*P,Ne+=d*A,vn+=d*M,hi+=d*B,yo+=d*de,pi+=d*Ae,d=_[14],V+=d*_t,ne+=d*ft,fe+=d*Ze,me+=d*wt,ve+=d*Pt,Ee+=d*Je,Pe+=d*Tt,be+=d*k,Ie+=d*p,je+=d*w,Ne+=d*P,vn+=d*A,hi+=d*M,yo+=d*B,pi+=d*de,za+=d*Ae,d=_[15],ne+=d*_t,fe+=d*ft,me+=d*Ze,ve+=d*wt,Ee+=d*Pt,Pe+=d*Je,be+=d*Tt,Ie+=d*k,je+=d*p,Ne+=d*w,vn+=d*P,hi+=d*A,yo+=d*M,pi+=d*B,za+=d*de,pu+=d*Ae,O+=38*fe,I+=38*me,R+=38*ve,Y+=38*Ee,te+=38*Pe,W+=38*be,F+=38*Ie,j+=38*je,U+=38*Ne,N+=38*vn,z+=38*hi,L+=38*yo,H+=38*pi,G+=38*za,V+=38*pu,$=1,d=O+$+65535,$=Math.floor(d/65536),O=d-$*65536,d=I+$+65535,$=Math.floor(d/65536),I=d-$*65536,d=R+$+65535,$=Math.floor(d/65536),R=d-$*65536,d=Y+$+65535,$=Math.floor(d/65536),Y=d-$*65536,d=te+$+65535,$=Math.floor(d/65536),te=d-$*65536,d=W+$+65535,$=Math.floor(d/65536),W=d-$*65536,d=F+$+65535,$=Math.floor(d/65536),F=d-$*65536,d=j+$+65535,$=Math.floor(d/65536),j=d-$*65536,d=U+$+65535,$=Math.floor(d/65536),U=d-$*65536,d=N+$+65535,$=Math.floor(d/65536),N=d-$*65536,d=z+$+65535,$=Math.floor(d/65536),z=d-$*65536,d=L+$+65535,$=Math.floor(d/65536),L=d-$*65536,d=H+$+65535,$=Math.floor(d/65536),H=d-$*65536,d=G+$+65535,$=Math.floor(d/65536),G=d-$*65536,d=V+$+65535,$=Math.floor(d/65536),V=d-$*65536,d=ne+$+65535,$=Math.floor(d/65536),ne=d-$*65536,O+=$-1+37*($-1),$=1,d=O+$+65535,$=Math.floor(d/65536),O=d-$*65536,d=I+$+65535,$=Math.floor(d/65536),I=d-$*65536,d=R+$+65535,$=Math.floor(d/65536),R=d-$*65536,d=Y+$+65535,$=Math.floor(d/65536),Y=d-$*65536,d=te+$+65535,$=Math.floor(d/65536),te=d-$*65536,d=W+$+65535,$=Math.floor(d/65536),W=d-$*65536,d=F+$+65535,$=Math.floor(d/65536),F=d-$*65536,d=j+$+65535,$=Math.floor(d/65536),j=d-$*65536,d=U+$+65535,$=Math.floor(d/65536),U=d-$*65536,d=N+$+65535,$=Math.floor(d/65536),N=d-$*65536,d=z+$+65535,$=Math.floor(d/65536),z=d-$*65536,d=L+$+65535,$=Math.floor(d/65536),L=d-$*65536,d=H+$+65535,$=Math.floor(d/65536),H=d-$*65536,d=G+$+65535,$=Math.floor(d/65536),G=d-$*65536,d=V+$+65535,$=Math.floor(d/65536),V=d-$*65536,d=ne+$+65535,$=Math.floor(d/65536),ne=d-$*65536,O+=$-1+37*($-1),x[0]=O,x[1]=I,x[2]=R,x[3]=Y,x[4]=te,x[5]=W,x[6]=F,x[7]=j,x[8]=U,x[9]=N,x[10]=z,x[11]=L,x[12]=H,x[13]=G,x[14]=V,x[15]=ne}function g(x,_){h(x,_,_)}function y(x,_){const S=r();for(let d=0;d<16;d++)S[d]=_[d];for(let d=253;d>=0;d--)g(S,S),d!==2&&d!==4&&h(S,S,_);for(let d=0;d<16;d++)x[d]=S[d]}function C(x,_){const S=new Uint8Array(32),d=new Float64Array(80),$=r(),O=r(),I=r(),R=r(),Y=r(),te=r();for(let U=0;U<31;U++)S[U]=x[U];S[31]=x[31]&127|64,S[0]&=248,c(d,_);for(let U=0;U<16;U++)O[U]=d[U];$[0]=R[0]=1;for(let U=254;U>=0;--U){const N=S[U>>>3]>>>(U&7)&1;a($,O,N),a(I,R,N),u(Y,$,I),f($,$,I),u(I,O,R),f(O,O,R),g(R,Y),g(te,$),h($,I,$),h(I,O,Y),u(Y,$,I),f($,$,I),g(O,$),f(I,R,te),h($,I,o),u($,$,R),h(I,I,$),h($,R,te),h(R,O,d),g(O,Y),a($,O,N),a(I,R,N)}for(let U=0;U<16;U++)d[U+16]=$[U],d[U+32]=I[U],d[U+48]=O[U],d[U+64]=R[U];const W=d.subarray(32),F=d.subarray(16);y(W,W),h(F,F,W);const j=new Uint8Array(32);return l(j,F),j}t.scalarMult=C;function E(x){return C(x,i)}t.scalarMultBase=E;function b(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const _=new Uint8Array(x);return{publicKey:E(_),secretKey:_}}t.generateKeyPairFromSeed=b;function m(x){const _=(0,e.randomBytes)(32,x),S=b(_);return(0,n.wipe)(_),S}t.generateKeyPair=m;function v(x,_,S=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(_.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const d=C(x,_);if(S){let $=0;for(let O=0;O<d.length;O++)$|=d[O];if($===0)throw new Error("X25519: invalid shared key")}return d}t.sharedKey=v})(ZO);function GO(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function f(y){if(y instanceof Uint8Array||(ArrayBuffer.isView(y)?y=new Uint8Array(y.buffer,y.byteOffset,y.byteLength):Array.isArray(y)&&(y=Uint8Array.from(y))),!(y instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(y.length===0)return"";for(var C=0,E=0,b=0,m=y.length;b!==m&&y[b]===0;)b++,C++;for(var v=(m-b)*u+1>>>0,x=new Uint8Array(v);b!==m;){for(var _=y[b],S=0,d=v-1;(_!==0||S<E)&&d!==-1;d--,S++)_+=256*x[d]>>>0,x[d]=_%a>>>0,_=_/a>>>0;if(_!==0)throw new Error("Non-zero carry");E=S,b++}for(var $=v-E;$!==v&&x[$]===0;)$++;for(var O=l.repeat(C);$<v;++$)O+=t.charAt(x[$]);return O}function h(y){if(typeof y!="string")throw new TypeError("Expected String");if(y.length===0)return new Uint8Array;var C=0;if(y[C]!==" "){for(var E=0,b=0;y[C]===l;)E++,C++;for(var m=(y.length-C)*c+1>>>0,v=new Uint8Array(m);y[C];){var x=n[y.charCodeAt(C)];if(x===255)return;for(var _=0,S=m-1;(x!==0||_<b)&&S!==-1;S--,_++)x+=a*v[S]>>>0,v[S]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");b=_,C++}if(y[C]!==" "){for(var d=m-b;d!==m&&v[d]===0;)d++;for(var $=new Uint8Array(E+(m-d)),O=E;d!==m;)$[O++]=v[d++];return $}}}function g(y){var C=h(y);if(C)return C;throw new Error(`Non-${e} character`)}return{encode:f,decodeUnsafe:h,decode:g}}var KO=GO,QO=KO;const YO=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},JO=t=>new TextEncoder().encode(t),XO=t=>new TextDecoder().decode(t);class eI{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class tI{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return u6(this,e)}}class nI{constructor(e){this.decoders=e}or(e){return u6(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const u6=(t,e)=>new nI({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class rI{constructor(e,n,r,i){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new eI(e,n,r),this.decoder=new tI(e,n,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const N0=({name:t,prefix:e,encode:n,decode:r})=>new rI(t,e,n,r),du=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:i}=QO(n,e);return N0({prefix:t,name:e,encode:r,decode:o=>YO(i(o))})},iI=(t,e,n,r)=>{const i={};for(let u=0;u<e.length;++u)i[e[u]]=u;let o=t.length;for(;t[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,c=0;for(let u=0;u<o;++u){const f=i[t[u]];if(f===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|f,a+=n,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},oI=(t,e,n)=>{const r=e[e.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<t.length;++l)for(a=a<<8|t[l],s+=8;s>n;)s-=n,o+=e[i&a>>s];if(s&&(o+=e[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},Bt=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>N0({prefix:e,name:t,encode(i){return oI(i,r,n)},decode(i){return iI(i,r,n,t)}}),sI=N0({prefix:"\0",name:"identity",encode:t=>XO(t),decode:t=>JO(t)}),Xj=Object.freeze(Object.defineProperty({__proto__:null,identity:sI},Symbol.toStringTag,{value:"Module"})),aI=Bt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),eL=Object.freeze(Object.defineProperty({__proto__:null,base2:aI},Symbol.toStringTag,{value:"Module"})),lI=Bt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),tL=Object.freeze(Object.defineProperty({__proto__:null,base8:lI},Symbol.toStringTag,{value:"Module"})),cI=du({prefix:"9",name:"base10",alphabet:"0123456789"}),nL=Object.freeze(Object.defineProperty({__proto__:null,base10:cI},Symbol.toStringTag,{value:"Module"})),uI=Bt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),dI=Bt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),rL=Object.freeze(Object.defineProperty({__proto__:null,base16:uI,base16upper:dI},Symbol.toStringTag,{value:"Module"})),fI=Bt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),hI=Bt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),pI=Bt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),mI=Bt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),gI=Bt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),wI=Bt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),yI=Bt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),vI=Bt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),bI=Bt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),iL=Object.freeze(Object.defineProperty({__proto__:null,base32:fI,base32hex:gI,base32hexpad:yI,base32hexpadupper:vI,base32hexupper:wI,base32pad:pI,base32padupper:mI,base32upper:hI,base32z:bI},Symbol.toStringTag,{value:"Module"})),xI=du({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),CI=du({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),oL=Object.freeze(Object.defineProperty({__proto__:null,base36:xI,base36upper:CI},Symbol.toStringTag,{value:"Module"})),_I=du({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),EI=du({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),sL=Object.freeze(Object.defineProperty({__proto__:null,base58btc:_I,base58flickr:EI},Symbol.toStringTag,{value:"Module"})),SI=Bt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),$I=Bt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),kI=Bt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),PI=Bt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),aL=Object.freeze(Object.defineProperty({__proto__:null,base64:SI,base64pad:$I,base64url:kI,base64urlpad:PI},Symbol.toStringTag,{value:"Module"})),d6=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),TI=d6.reduce((t,e,n)=>(t[n]=e,t),[]),AI=d6.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function OI(t){return t.reduce((e,n)=>(e+=TI[n],e),"")}function II(t){const e=[];for(const n of t){const r=AI[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const DI=N0({prefix:"🚀",name:"base256emoji",encode:OI,decode:II}),lL=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:DI},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;var NI={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var A1=function(t,e){return A1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},A1(t,e)};function RI(t,e){A1(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var O1=function(){return O1=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O1.apply(this,arguments)};function MI(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jI(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function LI(t,e){return function(n,r){e(n,r,t)}}function BI(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function UI(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?o(u.value):i(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function FI(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function zI(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function WI(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function I1(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function f6(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function HI(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(f6(arguments[e]));return t}function VI(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function Pc(t){return this instanceof Pc?(this.v=t,this):new Pc(t)}function qI(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(h){r[h]&&(i[h]=function(g){return new Promise(function(y,C){o.push([h,g,y,C])>1||a(h,g)})})}function a(h,g){try{l(r[h](g))}catch(y){f(o[0][3],y)}}function l(h){h.value instanceof Pc?Promise.resolve(h.value.v).then(c,u):f(o[0][2],h)}function c(h){a("next",h)}function u(h){a("throw",h)}function f(h,g){h(g),o.shift(),o.length&&a(o[0][0],o[0][1])}}function ZI(t){var e,n;return e={},r("next"),r("throw",function(i){throw i}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(i,o){e[i]=t[i]?function(s){return(n=!n)?{value:Pc(t[i](s)),done:i==="return"}:o?o(s):s}:o}}function GI(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof I1=="function"?I1(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}function KI(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function QI(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function YI(t){return t&&t.__esModule?t:{default:t}}function JI(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function XI(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const eD=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return O1},__asyncDelegator:ZI,__asyncGenerator:qI,__asyncValues:GI,__await:Pc,__awaiter:UI,__classPrivateFieldGet:JI,__classPrivateFieldSet:XI,__createBinding:zI,__decorate:jI,__exportStar:WI,__extends:RI,__generator:FI,__importDefault:YI,__importStar:QI,__makeTemplateObject:KI,__metadata:BI,__param:LI,__read:f6,__rest:MI,__spread:HI,__spreadArrays:VI,__values:I1},Symbol.toStringTag,{value:"Module"})),R0=J3(eD);var Lh={},nl={},O3;function tD(){if(O3)return nl;O3=1,Object.defineProperty(nl,"__esModule",{value:!0}),nl.delay=void 0;function t(e){return new Promise(n=>{setTimeout(()=>{n(!0)},e)})}return nl.delay=t,nl}var xo={},Bh={},Co={},I3;function nD(){return I3||(I3=1,Object.defineProperty(Co,"__esModule",{value:!0}),Co.ONE_THOUSAND=Co.ONE_HUNDRED=void 0,Co.ONE_HUNDRED=100,Co.ONE_THOUSAND=1e3),Co}var Uh={},D3;function rD(){return D3||(D3=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(Uh)),Uh}var N3;function h6(){return N3||(N3=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=R0;e.__exportStar(nD(),t),e.__exportStar(rD(),t)}(Bh)),Bh}var R3;function iD(){if(R3)return xo;R3=1,Object.defineProperty(xo,"__esModule",{value:!0}),xo.fromMiliseconds=xo.toMiliseconds=void 0;const t=h6();function e(r){return r*t.ONE_THOUSAND}xo.toMiliseconds=e;function n(r){return Math.floor(r/t.ONE_THOUSAND)}return xo.fromMiliseconds=n,xo}var M3;function oD(){return M3||(M3=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=R0;e.__exportStar(tD(),t),e.__exportStar(iD(),t)}(Lh)),Lh}var _s={},j3;function sD(){if(j3)return _s;j3=1,Object.defineProperty(_s,"__esModule",{value:!0}),_s.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return _s.Watch=t,_s.default=t,_s}var Fh={},rl={},L3;function aD(){if(L3)return rl;L3=1,Object.defineProperty(rl,"__esModule",{value:!0}),rl.IWatch=void 0;class t{}return rl.IWatch=t,rl}var B3;function lD(){return B3||(B3=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),R0.__exportStar(aD(),t)}(Fh)),Fh}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=R0;e.__exportStar(oD(),t),e.__exportStar(sD(),t),e.__exportStar(lD(),t),e.__exportStar(h6(),t)})(NI);var Qe={};Object.defineProperty(Qe,"__esModule",{value:!0});Qe.getLocalStorage=Qe.getLocalStorageOrThrow=Qe.getCrypto=Qe.getCryptoOrThrow=wD=Qe.getLocation=Qe.getLocationOrThrow=pD=Qe.getNavigator=Qe.getNavigatorOrThrow=dD=Qe.getDocument=Qe.getDocumentOrThrow=Qe.getFromWindowOrThrow=Qe.getFromWindow=void 0;function ms(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Qe.getFromWindow=ms;function Fa(t){const e=ms(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Qe.getFromWindowOrThrow=Fa;function cD(){return Fa("document")}Qe.getDocumentOrThrow=cD;function uD(){return ms("document")}var dD=Qe.getDocument=uD;function fD(){return Fa("navigator")}Qe.getNavigatorOrThrow=fD;function hD(){return ms("navigator")}var pD=Qe.getNavigator=hD;function mD(){return Fa("location")}Qe.getLocationOrThrow=mD;function gD(){return ms("location")}var wD=Qe.getLocation=gD;function yD(){return Fa("crypto")}Qe.getCryptoOrThrow=yD;function vD(){return ms("crypto")}Qe.getCrypto=vD;function bD(){return Fa("localStorage")}Qe.getLocalStorageOrThrow=bD;function xD(){return ms("localStorage")}Qe.getLocalStorage=xD;var Zg={};Object.defineProperty(Zg,"__esModule",{value:!0});var CD=Zg.getWindowMetadata=void 0;const U3=Qe;function _D(){let t,e;try{t=U3.getDocumentOrThrow(),e=U3.getLocationOrThrow()}catch{return null}function n(){const f=t.getElementsByTagName("link"),h=[];for(let g=0;g<f.length;g++){const y=f[g],C=y.getAttribute("rel");if(C&&C.toLowerCase().indexOf("icon")>-1){const E=y.getAttribute("href");if(E)if(E.toLowerCase().indexOf("https:")===-1&&E.toLowerCase().indexOf("http:")===-1&&E.indexOf("//")!==0){let b=e.protocol+"//"+e.host;if(E.indexOf("/")===0)b+=E;else{const m=e.pathname.split("/");m.pop();const v=m.join("/");b+=v+"/"+E}h.push(b)}else if(E.indexOf("//")===0){const b=e.protocol+E;h.push(b)}else h.push(E)}}return h}function r(...f){const h=t.getElementsByTagName("meta");for(let g=0;g<h.length;g++){const y=h[g],C=["itemprop","property","name"].map(E=>y.getAttribute(E)).filter(E=>E?f.includes(E):!1);if(C.length&&C){const E=y.getAttribute("content");if(E)return E}}return""}function i(){let f=r("name","og:site_name","og:title","twitter:title");return f||(f=t.title),f}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=e.origin,c=n();return{description:a,url:l,icons:c,name:s}}CD=Zg.getWindowMetadata=_D;var ED={},SD=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),p6="%[a-f0-9]{2}",F3=new RegExp("("+p6+")|([^%]+?)","gi"),z3=new RegExp("("+p6+")+","gi");function D1(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],D1(n),D1(r))}function $D(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(F3)||[],n=1;n<e.length;n++)t=D1(e,n).join(""),e=t.match(F3)||[];return t}}function kD(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=z3.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var r=$D(n[0]);r!==n[0]&&(e[n[0]]=r)}n=z3.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}var PD=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return kD(t)}},TD=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},AD=function(t,e){for(var n={},r=Object.keys(t),i=Array.isArray(e),o=0;o<r.length;o++){var s=r[o],a=t[s];(i?e.indexOf(s)!==-1:e(s,a,t))&&(n[s]=a)}return n};(function(t){const e=SD,n=PD,r=TD,i=AD,o=m=>m==null,s=Symbol("encodeFragmentIdentifier");function a(m){switch(m.arrayFormat){case"index":return v=>(x,_)=>{const S=x.length;return _===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),"[",S,"]"].join("")]:[...x,[u(v,m),"[",u(S,m),"]=",u(_,m)].join("")]};case"bracket":return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),"[]"].join("")]:[...x,[u(v,m),"[]=",u(_,m)].join("")];case"colon-list-separator":return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),":list="].join("")]:[...x,[u(v,m),":list=",u(_,m)].join("")];case"comma":case"separator":case"bracket-separator":{const v=m.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(_,S)=>S===void 0||m.skipNull&&S===null||m.skipEmptyString&&S===""?_:(S=S===null?"":S,_.length===0?[[u(x,m),v,u(S,m)].join("")]:[[_,u(S,m)].join(m.arrayFormatSeparator)])}default:return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,u(v,m)]:[...x,[u(v,m),"=",u(_,m)].join("")]}}function l(m){let v;switch(m.arrayFormat){case"index":return(x,_,S)=>{if(v=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!v){S[x]=_;return}S[x]===void 0&&(S[x]={}),S[x][v[1]]=_};case"bracket":return(x,_,S)=>{if(v=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!v){S[x]=_;return}if(S[x]===void 0){S[x]=[_];return}S[x]=[].concat(S[x],_)};case"colon-list-separator":return(x,_,S)=>{if(v=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!v){S[x]=_;return}if(S[x]===void 0){S[x]=[_];return}S[x]=[].concat(S[x],_)};case"comma":case"separator":return(x,_,S)=>{const d=typeof _=="string"&&_.includes(m.arrayFormatSeparator),$=typeof _=="string"&&!d&&f(_,m).includes(m.arrayFormatSeparator);_=$?f(_,m):_;const O=d||$?_.split(m.arrayFormatSeparator).map(I=>f(I,m)):_===null?_:f(_,m);S[x]=O};case"bracket-separator":return(x,_,S)=>{const d=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!d){S[x]=_&&f(_,m);return}const $=_===null?[]:_.split(m.arrayFormatSeparator).map(O=>f(O,m));if(S[x]===void 0){S[x]=$;return}S[x]=[].concat(S[x],$)};default:return(x,_,S)=>{if(S[x]===void 0){S[x]=_;return}S[x]=[].concat(S[x],_)}}}function c(m){if(typeof m!="string"||m.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(m,v){return v.encode?v.strict?e(m):encodeURIComponent(m):m}function f(m,v){return v.decode?n(m):m}function h(m){return Array.isArray(m)?m.sort():typeof m=="object"?h(Object.keys(m)).sort((v,x)=>Number(v)-Number(x)).map(v=>m[v]):m}function g(m){const v=m.indexOf("#");return v!==-1&&(m=m.slice(0,v)),m}function y(m){let v="";const x=m.indexOf("#");return x!==-1&&(v=m.slice(x)),v}function C(m){m=g(m);const v=m.indexOf("?");return v===-1?"":m.slice(v+1)}function E(m,v){return v.parseNumbers&&!Number.isNaN(Number(m))&&typeof m=="string"&&m.trim()!==""?m=Number(m):v.parseBooleans&&m!==null&&(m.toLowerCase()==="true"||m.toLowerCase()==="false")&&(m=m.toLowerCase()==="true"),m}function b(m,v){v=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},v),c(v.arrayFormatSeparator);const x=l(v),_=Object.create(null);if(typeof m!="string"||(m=m.trim().replace(/^[?#&]/,""),!m))return _;for(const S of m.split("&")){if(S==="")continue;let[d,$]=r(v.decode?S.replace(/\+/g," "):S,"=");$=$===void 0?null:["comma","separator","bracket-separator"].includes(v.arrayFormat)?$:f($,v),x(f(d,v),$,_)}for(const S of Object.keys(_)){const d=_[S];if(typeof d=="object"&&d!==null)for(const $ of Object.keys(d))d[$]=E(d[$],v);else _[S]=E(d,v)}return v.sort===!1?_:(v.sort===!0?Object.keys(_).sort():Object.keys(_).sort(v.sort)).reduce((S,d)=>{const $=_[d];return $&&typeof $=="object"&&!Array.isArray($)?S[d]=h($):S[d]=$,S},Object.create(null))}t.extract=C,t.parse=b,t.stringify=(m,v)=>{if(!m)return"";v=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},v),c(v.arrayFormatSeparator);const x=$=>v.skipNull&&o(m[$])||v.skipEmptyString&&m[$]==="",_=a(v),S={};for(const $ of Object.keys(m))x($)||(S[$]=m[$]);const d=Object.keys(S);return v.sort!==!1&&d.sort(v.sort),d.map($=>{const O=m[$];return O===void 0?"":O===null?u($,v):Array.isArray(O)?O.length===0&&v.arrayFormat==="bracket-separator"?u($,v)+"[]":O.reduce(_($),[]).join("&"):u($,v)+"="+u(O,v)}).filter($=>$.length>0).join("&")},t.parseUrl=(m,v)=>{v=Object.assign({decode:!0},v);const[x,_]=r(m,"#");return Object.assign({url:x.split("?")[0]||"",query:b(C(m),v)},v&&v.parseFragmentIdentifier&&_?{fragmentIdentifier:f(_,v)}:{})},t.stringifyUrl=(m,v)=>{v=Object.assign({encode:!0,strict:!0,[s]:!0},v);const x=g(m.url).split("?")[0]||"",_=t.extract(m.url),S=t.parse(_,{sort:!1}),d=Object.assign(S,m.query);let $=t.stringify(d,v);$&&($=`?${$}`);let O=y(m.url);return m.fragmentIdentifier&&(O=`#${v[s]?u(m.fragmentIdentifier,v):m.fragmentIdentifier}`),`${x}${$}${O}`},t.pick=(m,v,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);const{url:_,query:S,fragmentIdentifier:d}=t.parseUrl(m,x);return t.stringifyUrl({url:_,query:i(S,v),fragmentIdentifier:d},x)},t.exclude=(m,v,x)=>{const _=Array.isArray(v)?S=>!v.includes(S):(S,d)=>!v(S,d);return t.pick(m,_,x)}})(ED);function zh(t=[],e=[]){return[...new Set([...t,...e])]}var OD=Object.defineProperty,ID=Object.defineProperties,DD=Object.getOwnPropertyDescriptors,W3=Object.getOwnPropertySymbols,ND=Object.prototype.hasOwnProperty,RD=Object.prototype.propertyIsEnumerable,H3=(t,e,n)=>e in t?OD(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,MD=(t,e)=>{for(var n in e||(e={}))ND.call(e,n)&&H3(t,n,e[n]);if(W3)for(var n of W3(e))RD.call(e,n)&&H3(t,n,e[n]);return t},jD=(t,e)=>ID(t,DD(e));function m6(t){return t.includes(":")}function LD(t){return m6(t)?t.split(":")[0]:t}function g6(t){var e,n,r;const i={};if(!BD(t))return i;for(const[o,s]of Object.entries(t)){const a=m6(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=LD(o);i[u]=jD(MD({},i[u]),{chains:zh(a,(e=i[u])==null?void 0:e.chains),methods:zh(l,(n=i[u])==null?void 0:n.methods),events:zh(c,(r=i[u])==null?void 0:r.events)})}return i}function BD(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}var w6="eip155",UD="store",y6="requestedChains",N1="wallet_addEthereumChain",ot,kl,ld,R1,Gg,v6,cd,M1,j1,b6,mf,Kg,ks,dl,gf,Qg,wf,Yg,yf,Jg,FD=class extends d0{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),sn(this,ld),sn(this,Gg),sn(this,cd),sn(this,j1),sn(this,mf),sn(this,ks),sn(this,gf),sn(this,wf),sn(this,yf),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,sn(this,ot,void 0),sn(this,kl,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:jn(e[0])})},this.onChainChanged=e=>{const n=Number(e),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{It(this,ks,dl).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},It(this,ld,R1).call(this)}async connect({chainId:t,pairingTopic:e}={}){var n,r,i,o,s;try{let a=t;if(!a){const y=(n=this.storage)==null?void 0:n.getItem(UD),C=(o=(i=(r=y==null?void 0:y.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;C&&!this.isChainUnsupported(C)?a=C:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();It(this,j1,b6).call(this);const c=It(this,cd,M1).call(this);if(l.session&&c&&await l.disconnect(),!l.session||c){const y=this.chains.filter(C=>C.id!==a).map(C=>C.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:e,optionalChains:[a,...y]}),It(this,ks,dl).call(this,this.chains.map(({id:C})=>C))}const u=await l.enable(),f=jn(u[0]),h=await this.getChainId(),g=this.isChainUnsupported(h);return{account:f,chain:{id:h,unsupported:g}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new cn(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{It(this,mf,Kg).call(this),It(this,ks,dl).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return jn(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return qe(this,ot)||await It(this,ld,R1).call(this),t&&await this.switchChain(t),qe(this,ot)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return u0({account:n,chain:r,transport:l0(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=It(this,cd,M1).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var n,r;const e=this.chains.find(i=>i.id===t);if(!e)throw new ir(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=It(this,wf,Yg).call(this),s=It(this,yf,Jg).call(this);if(!o.includes(t)&&s.includes(N1)){await i.request({method:N1,params:[{chainId:Se(e.id),blockExplorerUrls:[(r=(n=e.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const l=It(this,gf,Qg).call(this);l.push(t),It(this,ks,dl).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:Se(t)}]}),e}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new cn(i):new ir(i)}}};ot=new WeakMap;kl=new WeakMap;ld=new WeakSet;R1=async function(){return!qe(this,kl)&&typeof window<"u"&&lc(this,kl,It(this,Gg,v6).call(this)),qe(this,kl)};Gg=new WeakSet;v6=async function(){const{EthereumProvider:t}=await Fo(()=>import("./index.es-by7iZVxR.js"),__vite__mapDeps([2,1])),e=this.chains.map(({id:n})=>n);if(e.length){const{projectId:n,showQrModal:r=!0,qrModalOptions:i,metadata:o,relayUrl:s}=this.options;lc(this,ot,await t.init({showQrModal:r,qrModalOptions:i,projectId:n,optionalChains:e,rpcMap:Object.fromEntries(this.chains.map(a=>[a.id,a.rpcUrls.default.http[0]])),metadata:o,relayUrl:s}))}};cd=new WeakSet;M1=function(){if(It(this,yf,Jg).call(this).includes(N1)||!this.options.isNewChainsStale)return!1;const e=It(this,gf,Qg).call(this),n=this.chains.map(({id:i})=>i),r=It(this,wf,Yg).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>e.includes(i))};j1=new WeakSet;b6=function(){qe(this,ot)&&(It(this,mf,Kg).call(this),qe(this,ot).on("accountsChanged",this.onAccountsChanged),qe(this,ot).on("chainChanged",this.onChainChanged),qe(this,ot).on("disconnect",this.onDisconnect),qe(this,ot).on("session_delete",this.onDisconnect),qe(this,ot).on("display_uri",this.onDisplayUri),qe(this,ot).on("connect",this.onConnect))};mf=new WeakSet;Kg=function(){qe(this,ot)&&(qe(this,ot).removeListener("accountsChanged",this.onAccountsChanged),qe(this,ot).removeListener("chainChanged",this.onChainChanged),qe(this,ot).removeListener("disconnect",this.onDisconnect),qe(this,ot).removeListener("session_delete",this.onDisconnect),qe(this,ot).removeListener("display_uri",this.onDisplayUri),qe(this,ot).removeListener("connect",this.onConnect))};ks=new WeakSet;dl=function(t){var e;(e=this.storage)==null||e.setItem(y6,t)};gf=new WeakSet;Qg=function(){var t;return((t=this.storage)==null?void 0:t.getItem(y6))??[]};wf=new WeakSet;Yg=function(){var r,i,o;if(!qe(this,ot))return[];const t=(r=qe(this,ot).session)==null?void 0:r.namespaces;return t?((o=(i=g6(t)[w6])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};yf=new WeakSet;Jg=function(){var r,i;if(!qe(this,ot))return[];const t=(r=qe(this,ot).session)==null?void 0:r.namespaces;return t?((i=g6(t)[w6])==null?void 0:i.methods)??[]:[]};function zD(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const ye={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE"};var Fe;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function n(i){throw new Error}t.assertNever=n,t.arrayToEnum=i=>{const o={};for(const s of i)o[s]=s;return o},t.getValidEnumValues=i=>{const o=t.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),s={};for(const a of o)s[a]=i[a];return t.objectValues(s)},t.objectValues=i=>t.objectKeys(i).map(function(o){return i[o]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const o=[];for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&o.push(s);return o},t.find=(i,o)=>{for(const s of i)if(o(s))return s},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,o=" | "){return i.map(s=>typeof s=="string"?`'${s}'`:s).join(o)}t.joinValues=r,t.jsonStringifyReplacer=(i,o)=>typeof o=="bigint"?o.toString():o})(Fe||(Fe={}));var L1;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(L1||(L1={}));const oe=Fe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ki=t=>{switch(typeof t){case"undefined":return oe.undefined;case"string":return oe.string;case"number":return isNaN(t)?oe.nan:oe.number;case"boolean":return oe.boolean;case"function":return oe.function;case"bigint":return oe.bigint;case"symbol":return oe.symbol;case"object":return Array.isArray(t)?oe.array:t===null?oe.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?oe.promise:typeof Map<"u"&&t instanceof Map?oe.map:typeof Set<"u"&&t instanceof Set?oe.set:typeof Date<"u"&&t instanceof Date?oe.date:oe.object;default:return oe.unknown}},K=Fe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),WD=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class er extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(o){return o.message},r={_errors:[]},i=o=>{for(const s of o.issues)if(s.code==="invalid_union")s.unionErrors.map(i);else if(s.code==="invalid_return_type")i(s.returnTypeError);else if(s.code==="invalid_arguments")i(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){const c=s.path[l];l===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(s))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Fe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}er.create=t=>new er(t);const Tc=(t,e)=>{let n;switch(t.code){case K.invalid_type:t.received===oe.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case K.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Fe.jsonStringifyReplacer)}`;break;case K.unrecognized_keys:n=`Unrecognized key(s) in object: ${Fe.joinValues(t.keys,", ")}`;break;case K.invalid_union:n="Invalid input";break;case K.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Fe.joinValues(t.options)}`;break;case K.invalid_enum_value:n=`Invalid enum value. Expected ${Fe.joinValues(t.options)}, received '${t.received}'`;break;case K.invalid_arguments:n="Invalid function arguments";break;case K.invalid_return_type:n="Invalid function return type";break;case K.invalid_date:n="Invalid date";break;case K.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Fe.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case K.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case K.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case K.custom:n="Invalid input";break;case K.invalid_intersection_types:n="Intersection results could not be merged";break;case K.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case K.not_finite:n="Number must be finite";break;default:n=e.defaultError,Fe.assertNever(t)}return{message:n}};let x6=Tc;function HD(t){x6=t}function vf(){return x6}const bf=t=>{const{data:e,path:n,errorMaps:r,issueData:i}=t,o=[...n,...i.path||[]],s={...i,path:o};let a="";const l=r.filter(c=>!!c).slice().reverse();for(const c of l)a=c(s,{data:e,defaultError:a}).message;return{...i,path:o,message:i.message||a}},VD=[];function se(t,e){const n=bf({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,vf(),Tc].filter(r=>!!r)});t.common.issues.push(n)}class Gt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const i of n){if(i.status==="aborted")return _e;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return Gt.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const i of n){const{key:o,value:s}=i;if(o.status==="aborted"||s.status==="aborted")return _e;o.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),o.value!=="__proto__"&&(typeof s.value<"u"||i.alwaysSet)&&(r[o.value]=s.value)}return{status:e.value,value:r}}}const _e=Object.freeze({status:"aborted"}),C6=t=>({status:"dirty",value:t}),tn=t=>({status:"valid",value:t}),B1=t=>t.status==="aborted",U1=t=>t.status==="dirty",Ac=t=>t.status==="valid",xf=t=>typeof Promise<"u"&&t instanceof Promise;var he;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(he||(he={}));class Dr{constructor(e,n,r,i){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const V3=(t,e)=>{if(Ac(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new er(t.common.issues);return this._error=n,this._error}}};function $e(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:i}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:i}}class Te{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return ki(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:ki(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Gt,ctx:{common:e.parent.common,data:e.data,parsedType:ki(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(xf(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ki(e)},o=this._parseSync({data:e,path:i.path,parent:i});return V3(i,o)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ki(e)},i=this._parse({data:e,path:r.path,parent:r}),o=await(xf(i)?i:Promise.resolve(i));return V3(r,o)}refine(e,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,o)=>{const s=e(i),a=()=>o.addIssue({code:K.custom,...r(i)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,i)=>e(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(e){return new lr({schema:this,typeName:ge.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Qr.create(this,this._def)}nullable(){return is.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return tr.create(this,this._def)}promise(){return ka.create(this,this._def)}or(e){return Nc.create([this,e],this._def)}and(e){return Rc.create(this,e,this._def)}transform(e){return new lr({...$e(this._def),schema:this,typeName:ge.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Uc({...$e(this._def),innerType:this,defaultValue:n,typeName:ge.ZodDefault})}brand(){return new E6({typeName:ge.ZodBranded,type:this,...$e(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Sf({...$e(this._def),innerType:this,catchValue:n,typeName:ge.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return fu.create(this,e)}readonly(){return kf.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const qD=/^c[^\s-]{8,}$/i,ZD=/^[a-z][a-z0-9]*$/,GD=/^[0-9A-HJKMNP-TV-Z]{26}$/,KD=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,QD=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,YD="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Wh;const JD=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,XD=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,eN=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function tN(t,e){return!!((e==="v4"||!e)&&JD.test(t)||(e==="v6"||!e)&&XD.test(t))}class Qn extends Te{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==oe.string){const o=this._getOrReturnCtx(e);return se(o,{code:K.invalid_type,expected:oe.string,received:o.parsedType}),_e}const r=new Gt;let i;for(const o of this._def.checks)if(o.kind==="min")e.data.length<o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:K.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="max")e.data.length>o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:K.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="length"){const s=e.data.length>o.value,a=e.data.length<o.value;(s||a)&&(i=this._getOrReturnCtx(e,i),s?se(i,{code:K.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):a&&se(i,{code:K.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if(o.kind==="email")QD.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"email",code:K.invalid_string,message:o.message}),r.dirty());else if(o.kind==="emoji")Wh||(Wh=new RegExp(YD,"u")),Wh.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"emoji",code:K.invalid_string,message:o.message}),r.dirty());else if(o.kind==="uuid")KD.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"uuid",code:K.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid")qD.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"cuid",code:K.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid2")ZD.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"cuid2",code:K.invalid_string,message:o.message}),r.dirty());else if(o.kind==="ulid")GD.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"ulid",code:K.invalid_string,message:o.message}),r.dirty());else if(o.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),se(i,{validation:"url",code:K.invalid_string,message:o.message}),r.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"regex",code:K.invalid_string,message:o.message}),r.dirty())):o.kind==="trim"?e.data=e.data.trim():o.kind==="includes"?e.data.includes(o.value,o.position)||(i=this._getOrReturnCtx(e,i),se(i,{code:K.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty()):o.kind==="toLowerCase"?e.data=e.data.toLowerCase():o.kind==="toUpperCase"?e.data=e.data.toUpperCase():o.kind==="startsWith"?e.data.startsWith(o.value)||(i=this._getOrReturnCtx(e,i),se(i,{code:K.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty()):o.kind==="endsWith"?e.data.endsWith(o.value)||(i=this._getOrReturnCtx(e,i),se(i,{code:K.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty()):o.kind==="datetime"?eN(o).test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{code:K.invalid_string,validation:"datetime",message:o.message}),r.dirty()):o.kind==="ip"?tN(e.data,o.version)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"ip",code:K.invalid_string,message:o.message}),r.dirty()):Fe.assertNever(o);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(i=>e.test(i),{validation:n,code:K.invalid_string,...he.errToObj(r)})}_addCheck(e){return new Qn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...he.errToObj(e)})}url(e){return this._addCheck({kind:"url",...he.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...he.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...he.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...he.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...he.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...he.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...he.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...he.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...he.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...he.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...he.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...he.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...he.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...he.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...he.errToObj(n)})}nonempty(e){return this.min(1,he.errToObj(e))}trim(){return new Qn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Qn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Qn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Qn.create=t=>{var e;return new Qn({checks:[],typeName:ge.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...$e(t)})};function nN(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=n>r?n:r,o=parseInt(t.toFixed(i).replace(".","")),s=parseInt(e.toFixed(i).replace(".",""));return o%s/Math.pow(10,i)}class no extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==oe.number){const o=this._getOrReturnCtx(e);return se(o,{code:K.invalid_type,expected:oe.number,received:o.parsedType}),_e}let r;const i=new Gt;for(const o of this._def.checks)o.kind==="int"?Fe.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),se(r,{code:K.invalid_type,expected:"integer",received:"float",message:o.message}),i.dirty()):o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:K.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:K.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="multipleOf"?nN(e.data,o.value)!==0&&(r=this._getOrReturnCtx(e,r),se(r,{code:K.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):o.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),se(r,{code:K.not_finite,message:o.message}),i.dirty()):Fe.assertNever(o);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,he.toString(n))}gt(e,n){return this.setLimit("min",e,!1,he.toString(n))}lte(e,n){return this.setLimit("max",e,!0,he.toString(n))}lt(e,n){return this.setLimit("max",e,!1,he.toString(n))}setLimit(e,n,r,i){return new no({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:he.toString(i)}]})}_addCheck(e){return new no({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:he.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:he.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:he.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:he.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:he.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:he.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:he.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:he.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:he.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Fe.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}no.create=t=>new no({checks:[],typeName:ge.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...$e(t)});class ro extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==oe.bigint){const o=this._getOrReturnCtx(e);return se(o,{code:K.invalid_type,expected:oe.bigint,received:o.parsedType}),_e}let r;const i=new Gt;for(const o of this._def.checks)o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:K.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:K.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="multipleOf"?e.data%o.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),se(r,{code:K.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):Fe.assertNever(o);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,he.toString(n))}gt(e,n){return this.setLimit("min",e,!1,he.toString(n))}lte(e,n){return this.setLimit("max",e,!0,he.toString(n))}lt(e,n){return this.setLimit("max",e,!1,he.toString(n))}setLimit(e,n,r,i){return new ro({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:he.toString(i)}]})}_addCheck(e){return new ro({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:he.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:he.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:he.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:he.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:he.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}ro.create=t=>{var e;return new ro({checks:[],typeName:ge.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...$e(t)})};class Oc extends Te{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==oe.boolean){const r=this._getOrReturnCtx(e);return se(r,{code:K.invalid_type,expected:oe.boolean,received:r.parsedType}),_e}return tn(e.data)}}Oc.create=t=>new Oc({typeName:ge.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...$e(t)});class ns extends Te{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==oe.date){const o=this._getOrReturnCtx(e);return se(o,{code:K.invalid_type,expected:oe.date,received:o.parsedType}),_e}if(isNaN(e.data.getTime())){const o=this._getOrReturnCtx(e);return se(o,{code:K.invalid_date}),_e}const r=new Gt;let i;for(const o of this._def.checks)o.kind==="min"?e.data.getTime()<o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:K.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),r.dirty()):o.kind==="max"?e.data.getTime()>o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:K.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),r.dirty()):Fe.assertNever(o);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ns({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:he.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:he.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}ns.create=t=>new ns({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:ge.ZodDate,...$e(t)});class Cf extends Te{_parse(e){if(this._getType(e)!==oe.symbol){const r=this._getOrReturnCtx(e);return se(r,{code:K.invalid_type,expected:oe.symbol,received:r.parsedType}),_e}return tn(e.data)}}Cf.create=t=>new Cf({typeName:ge.ZodSymbol,...$e(t)});class Ic extends Te{_parse(e){if(this._getType(e)!==oe.undefined){const r=this._getOrReturnCtx(e);return se(r,{code:K.invalid_type,expected:oe.undefined,received:r.parsedType}),_e}return tn(e.data)}}Ic.create=t=>new Ic({typeName:ge.ZodUndefined,...$e(t)});class Dc extends Te{_parse(e){if(this._getType(e)!==oe.null){const r=this._getOrReturnCtx(e);return se(r,{code:K.invalid_type,expected:oe.null,received:r.parsedType}),_e}return tn(e.data)}}Dc.create=t=>new Dc({typeName:ge.ZodNull,...$e(t)});class $a extends Te{constructor(){super(...arguments),this._any=!0}_parse(e){return tn(e.data)}}$a.create=t=>new $a({typeName:ge.ZodAny,...$e(t)});class Ro extends Te{constructor(){super(...arguments),this._unknown=!0}_parse(e){return tn(e.data)}}Ro.create=t=>new Ro({typeName:ge.ZodUnknown,...$e(t)});class si extends Te{_parse(e){const n=this._getOrReturnCtx(e);return se(n,{code:K.invalid_type,expected:oe.never,received:n.parsedType}),_e}}si.create=t=>new si({typeName:ge.ZodNever,...$e(t)});class _f extends Te{_parse(e){if(this._getType(e)!==oe.undefined){const r=this._getOrReturnCtx(e);return se(r,{code:K.invalid_type,expected:oe.void,received:r.parsedType}),_e}return tn(e.data)}}_f.create=t=>new _f({typeName:ge.ZodVoid,...$e(t)});class tr extends Te{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),i=this._def;if(n.parsedType!==oe.array)return se(n,{code:K.invalid_type,expected:oe.array,received:n.parsedType}),_e;if(i.exactLength!==null){const s=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(s||a)&&(se(n,{code:s?K.too_big:K.too_small,minimum:a?i.exactLength.value:void 0,maximum:s?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(se(n,{code:K.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(se(n,{code:K.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>i.type._parseAsync(new Dr(n,s,n.path,a)))).then(s=>Gt.mergeArray(r,s));const o=[...n.data].map((s,a)=>i.type._parseSync(new Dr(n,s,n.path,a)));return Gt.mergeArray(r,o)}get element(){return this._def.type}min(e,n){return new tr({...this._def,minLength:{value:e,message:he.toString(n)}})}max(e,n){return new tr({...this._def,maxLength:{value:e,message:he.toString(n)}})}length(e,n){return new tr({...this._def,exactLength:{value:e,message:he.toString(n)}})}nonempty(e){return this.min(1,e)}}tr.create=(t,e)=>new tr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ge.ZodArray,...$e(e)});function Ps(t){if(t instanceof rt){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=Qr.create(Ps(r))}return new rt({...t._def,shape:()=>e})}else return t instanceof tr?new tr({...t._def,type:Ps(t.element)}):t instanceof Qr?Qr.create(Ps(t.unwrap())):t instanceof is?is.create(Ps(t.unwrap())):t instanceof Nr?Nr.create(t.items.map(e=>Ps(e))):t}class rt extends Te{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Fe.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==oe.object){const c=this._getOrReturnCtx(e);return se(c,{code:K.invalid_type,expected:oe.object,received:c.parsedType}),_e}const{status:r,ctx:i}=this._processInputParams(e),{shape:o,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof si&&this._def.unknownKeys==="strip"))for(const c in i.data)s.includes(c)||a.push(c);const l=[];for(const c of s){const u=o[c],f=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Dr(i,f,i.path,c)),alwaysSet:c in i.data})}if(this._def.catchall instanceof si){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(c==="strict")a.length>0&&(se(i,{code:K.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const f=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Dr(i,f,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const f=await u.key;c.push({key:f,value:await u.value,alwaysSet:u.alwaysSet})}return c}).then(c=>Gt.mergeObjectSync(r,c)):Gt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return he.errToObj,new rt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var i,o,s,a;const l=(s=(o=(i=this._def).errorMap)===null||o===void 0?void 0:o.call(i,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=he.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new rt({...this._def,unknownKeys:"strip"})}passthrough(){return new rt({...this._def,unknownKeys:"passthrough"})}extend(e){return new rt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new rt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ge.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new rt({...this._def,catchall:e})}pick(e){const n={};return Fe.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new rt({...this._def,shape:()=>n})}omit(e){const n={};return Fe.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new rt({...this._def,shape:()=>n})}deepPartial(){return Ps(this)}partial(e){const n={};return Fe.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?n[r]=i:n[r]=i.optional()}),new rt({...this._def,shape:()=>n})}required(e){const n={};return Fe.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let o=this.shape[r];for(;o instanceof Qr;)o=o._def.innerType;n[r]=o}}),new rt({...this._def,shape:()=>n})}keyof(){return _6(Fe.objectKeys(this.shape))}}rt.create=(t,e)=>new rt({shape:()=>t,unknownKeys:"strip",catchall:si.create(),typeName:ge.ZodObject,...$e(e)});rt.strictCreate=(t,e)=>new rt({shape:()=>t,unknownKeys:"strict",catchall:si.create(),typeName:ge.ZodObject,...$e(e)});rt.lazycreate=(t,e)=>new rt({shape:t,unknownKeys:"strip",catchall:si.create(),typeName:ge.ZodObject,...$e(e)});class Nc extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function i(o){for(const a of o)if(a.result.status==="valid")return a.result;for(const a of o)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=o.map(a=>new er(a.ctx.common.issues));return se(n,{code:K.invalid_union,unionErrors:s}),_e}if(n.common.async)return Promise.all(r.map(async o=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await o._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(i);{let o;const s=[];for(const l of r){const c={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!o&&(o={result:u,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(o)return n.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(l=>new er(l));return se(n,{code:K.invalid_union,unionErrors:a}),_e}}get options(){return this._def.options}}Nc.create=(t,e)=>new Nc({options:t,typeName:ge.ZodUnion,...$e(e)});const ud=t=>t instanceof jc?ud(t.schema):t instanceof lr?ud(t.innerType()):t instanceof Lc?[t.value]:t instanceof io?t.options:t instanceof Bc?Object.keys(t.enum):t instanceof Uc?ud(t._def.innerType):t instanceof Ic?[void 0]:t instanceof Dc?[null]:null;class M0 extends Te{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==oe.object)return se(n,{code:K.invalid_type,expected:oe.object,received:n.parsedType}),_e;const r=this.discriminator,i=n.data[r],o=this.optionsMap.get(i);return o?n.common.async?o._parseAsync({data:n.data,path:n.path,parent:n}):o._parseSync({data:n.data,path:n.path,parent:n}):(se(n,{code:K.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),_e)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const i=new Map;for(const o of n){const s=ud(o.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(i.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);i.set(a,o)}}return new M0({typeName:ge.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:i,...$e(r)})}}function F1(t,e){const n=ki(t),r=ki(e);if(t===e)return{valid:!0,data:t};if(n===oe.object&&r===oe.object){const i=Fe.objectKeys(e),o=Fe.objectKeys(t).filter(a=>i.indexOf(a)!==-1),s={...t,...e};for(const a of o){const l=F1(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===oe.array&&r===oe.array){if(t.length!==e.length)return{valid:!1};const i=[];for(let o=0;o<t.length;o++){const s=t[o],a=e[o],l=F1(s,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===oe.date&&r===oe.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Rc extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=(o,s)=>{if(B1(o)||B1(s))return _e;const a=F1(o.value,s.value);return a.valid?((U1(o)||U1(s))&&n.dirty(),{status:n.value,value:a.data}):(se(r,{code:K.invalid_intersection_types}),_e)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([o,s])=>i(o,s)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Rc.create=(t,e,n)=>new Rc({left:t,right:e,typeName:ge.ZodIntersection,...$e(n)});class Nr extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==oe.array)return se(r,{code:K.invalid_type,expected:oe.array,received:r.parsedType}),_e;if(r.data.length<this._def.items.length)return se(r,{code:K.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),_e;!this._def.rest&&r.data.length>this._def.items.length&&(se(r,{code:K.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const o=[...r.data].map((s,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Dr(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(o).then(s=>Gt.mergeArray(n,s)):Gt.mergeArray(n,o)}get items(){return this._def.items}rest(e){return new Nr({...this._def,rest:e})}}Nr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Nr({items:t,typeName:ge.ZodTuple,rest:null,...$e(e)})};class Mc extends Te{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==oe.object)return se(r,{code:K.invalid_type,expected:oe.object,received:r.parsedType}),_e;const i=[],o=this._def.keyType,s=this._def.valueType;for(const a in r.data)i.push({key:o._parse(new Dr(r,a,r.path,a)),value:s._parse(new Dr(r,r.data[a],r.path,a))});return r.common.async?Gt.mergeObjectAsync(n,i):Gt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof Te?new Mc({keyType:e,valueType:n,typeName:ge.ZodRecord,...$e(r)}):new Mc({keyType:Qn.create(),valueType:e,typeName:ge.ZodRecord,...$e(n)})}}class Ef extends Te{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==oe.map)return se(r,{code:K.invalid_type,expected:oe.map,received:r.parsedType}),_e;const i=this._def.keyType,o=this._def.valueType,s=[...r.data.entries()].map(([a,l],c)=>({key:i._parse(new Dr(r,a,r.path,[c,"key"])),value:o._parse(new Dr(r,l,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of s){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return _e;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of s){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return _e;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}}}}Ef.create=(t,e,n)=>new Ef({valueType:e,keyType:t,typeName:ge.ZodMap,...$e(n)});class rs extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==oe.set)return se(r,{code:K.invalid_type,expected:oe.set,received:r.parsedType}),_e;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(se(r,{code:K.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(se(r,{code:K.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const o=this._def.valueType;function s(l){const c=new Set;for(const u of l){if(u.status==="aborted")return _e;u.status==="dirty"&&n.dirty(),c.add(u.value)}return{status:n.value,value:c}}const a=[...r.data.values()].map((l,c)=>o._parse(new Dr(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new rs({...this._def,minSize:{value:e,message:he.toString(n)}})}max(e,n){return new rs({...this._def,maxSize:{value:e,message:he.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}rs.create=(t,e)=>new rs({valueType:t,minSize:null,maxSize:null,typeName:ge.ZodSet,...$e(e)});class Js extends Te{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==oe.function)return se(n,{code:K.invalid_type,expected:oe.function,received:n.parsedType}),_e;function r(a,l){return bf({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,vf(),Tc].filter(c=>!!c),issueData:{code:K.invalid_arguments,argumentsError:l}})}function i(a,l){return bf({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,vf(),Tc].filter(c=>!!c),issueData:{code:K.invalid_return_type,returnTypeError:l}})}const o={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof ka){const a=this;return tn(async function(...l){const c=new er([]),u=await a._def.args.parseAsync(l,o).catch(g=>{throw c.addIssue(r(l,g)),c}),f=await Reflect.apply(s,this,u);return await a._def.returns._def.type.parseAsync(f,o).catch(g=>{throw c.addIssue(i(f,g)),c})})}else{const a=this;return tn(function(...l){const c=a._def.args.safeParse(l,o);if(!c.success)throw new er([r(l,c.error)]);const u=Reflect.apply(s,this,c.data),f=a._def.returns.safeParse(u,o);if(!f.success)throw new er([i(u,f.error)]);return f.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Js({...this._def,args:Nr.create(e).rest(Ro.create())})}returns(e){return new Js({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Js({args:e||Nr.create([]).rest(Ro.create()),returns:n||Ro.create(),typeName:ge.ZodFunction,...$e(r)})}}class jc extends Te{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}jc.create=(t,e)=>new jc({getter:t,typeName:ge.ZodLazy,...$e(e)});class Lc extends Te{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return se(n,{received:n.data,code:K.invalid_literal,expected:this._def.value}),_e}return{status:"valid",value:e.data}}get value(){return this._def.value}}Lc.create=(t,e)=>new Lc({value:t,typeName:ge.ZodLiteral,...$e(e)});function _6(t,e){return new io({values:t,typeName:ge.ZodEnum,...$e(e)})}class io extends Te{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return se(n,{expected:Fe.joinValues(r),received:n.parsedType,code:K.invalid_type}),_e}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return se(n,{received:n.data,code:K.invalid_enum_value,options:r}),_e}return tn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return io.create(e)}exclude(e){return io.create(this.options.filter(n=>!e.includes(n)))}}io.create=_6;class Bc extends Te{_parse(e){const n=Fe.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==oe.string&&r.parsedType!==oe.number){const i=Fe.objectValues(n);return se(r,{expected:Fe.joinValues(i),received:r.parsedType,code:K.invalid_type}),_e}if(n.indexOf(e.data)===-1){const i=Fe.objectValues(n);return se(r,{received:r.data,code:K.invalid_enum_value,options:i}),_e}return tn(e.data)}get enum(){return this._def.values}}Bc.create=(t,e)=>new Bc({values:t,typeName:ge.ZodNativeEnum,...$e(e)});class ka extends Te{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==oe.promise&&n.common.async===!1)return se(n,{code:K.invalid_type,expected:oe.promise,received:n.parsedType}),_e;const r=n.parsedType===oe.promise?n.data:Promise.resolve(n.data);return tn(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ka.create=(t,e)=>new ka({type:t,typeName:ge.ZodPromise,...$e(e)});class lr extends Te{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ge.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=this._def.effect||null,o={addIssue:s=>{se(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),i.type==="preprocess"){const s=i.transform(r.data,o);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(i.type==="refinement"){const s=a=>{const l=i.refinement(a,o);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?_e:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?_e:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Ac(s))return s;const a=i.transform(s.value,o);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Ac(s)?Promise.resolve(i.transform(s.value,o)).then(a=>({status:n.value,value:a})):s);Fe.assertNever(i)}}lr.create=(t,e,n)=>new lr({schema:t,typeName:ge.ZodEffects,effect:e,...$e(n)});lr.createWithPreprocess=(t,e,n)=>new lr({schema:e,effect:{type:"preprocess",transform:t},typeName:ge.ZodEffects,...$e(n)});class Qr extends Te{_parse(e){return this._getType(e)===oe.undefined?tn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Qr.create=(t,e)=>new Qr({innerType:t,typeName:ge.ZodOptional,...$e(e)});class is extends Te{_parse(e){return this._getType(e)===oe.null?tn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}is.create=(t,e)=>new is({innerType:t,typeName:ge.ZodNullable,...$e(e)});class Uc extends Te{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===oe.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Uc.create=(t,e)=>new Uc({innerType:t,typeName:ge.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...$e(e)});class Sf extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return xf(i)?i.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new er(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new er(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Sf.create=(t,e)=>new Sf({innerType:t,typeName:ge.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...$e(e)});class $f extends Te{_parse(e){if(this._getType(e)!==oe.nan){const r=this._getOrReturnCtx(e);return se(r,{code:K.invalid_type,expected:oe.nan,received:r.parsedType}),_e}return{status:"valid",value:e.data}}}$f.create=t=>new $f({typeName:ge.ZodNaN,...$e(t)});const rN=Symbol("zod_brand");class E6 extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class fu extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?_e:o.status==="dirty"?(n.dirty(),C6(o.value)):this._def.out._parseAsync({data:o.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?_e:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,n){return new fu({in:e,out:n,typeName:ge.ZodPipeline})}}class kf extends Te{_parse(e){const n=this._def.innerType._parse(e);return Ac(n)&&(n.value=Object.freeze(n.value)),n}}kf.create=(t,e)=>new kf({innerType:t,typeName:ge.ZodReadonly,...$e(e)});const S6=(t,e={},n)=>t?$a.create().superRefine((r,i)=>{var o,s;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(s=(o=a.fatal)!==null&&o!==void 0?o:n)!==null&&s!==void 0?s:!0,c=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...c,fatal:l})}}):$a.create(),iN={object:rt.lazycreate};var ge;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(ge||(ge={}));const oN=(t,e={message:`Input not instance of ${t.name}`})=>S6(n=>n instanceof t,e),$6=Qn.create,k6=no.create,sN=$f.create,aN=ro.create,P6=Oc.create,lN=ns.create,cN=Cf.create,uN=Ic.create,dN=Dc.create,fN=$a.create,hN=Ro.create,pN=si.create,mN=_f.create,gN=tr.create,wN=rt.create,yN=rt.strictCreate,vN=Nc.create,bN=M0.create,xN=Rc.create,CN=Nr.create,_N=Mc.create,EN=Ef.create,SN=rs.create,$N=Js.create,kN=jc.create,PN=Lc.create,TN=io.create,AN=Bc.create,ON=ka.create,q3=lr.create,IN=Qr.create,DN=is.create,NN=lr.createWithPreprocess,RN=fu.create,MN=()=>$6().optional(),jN=()=>k6().optional(),LN=()=>P6().optional(),BN={string:t=>Qn.create({...t,coerce:!0}),number:t=>no.create({...t,coerce:!0}),boolean:t=>Oc.create({...t,coerce:!0}),bigint:t=>ro.create({...t,coerce:!0}),date:t=>ns.create({...t,coerce:!0})},UN=_e;var ee=Object.freeze({__proto__:null,defaultErrorMap:Tc,setErrorMap:HD,getErrorMap:vf,makeIssue:bf,EMPTY_PATH:VD,addIssueToContext:se,ParseStatus:Gt,INVALID:_e,DIRTY:C6,OK:tn,isAborted:B1,isDirty:U1,isValid:Ac,isAsync:xf,get util(){return Fe},get objectUtil(){return L1},ZodParsedType:oe,getParsedType:ki,ZodType:Te,ZodString:Qn,ZodNumber:no,ZodBigInt:ro,ZodBoolean:Oc,ZodDate:ns,ZodSymbol:Cf,ZodUndefined:Ic,ZodNull:Dc,ZodAny:$a,ZodUnknown:Ro,ZodNever:si,ZodVoid:_f,ZodArray:tr,ZodObject:rt,ZodUnion:Nc,ZodDiscriminatedUnion:M0,ZodIntersection:Rc,ZodTuple:Nr,ZodRecord:Mc,ZodMap:Ef,ZodSet:rs,ZodFunction:Js,ZodLazy:jc,ZodLiteral:Lc,ZodEnum:io,ZodNativeEnum:Bc,ZodPromise:ka,ZodEffects:lr,ZodTransformer:lr,ZodOptional:Qr,ZodNullable:is,ZodDefault:Uc,ZodCatch:Sf,ZodNaN:$f,BRAND:rN,ZodBranded:E6,ZodPipeline:fu,ZodReadonly:kf,custom:S6,Schema:Te,ZodSchema:Te,late:iN,get ZodFirstPartyTypeKind(){return ge},coerce:BN,any:fN,array:gN,bigint:aN,boolean:P6,date:lN,discriminatedUnion:bN,effect:q3,enum:TN,function:$N,instanceof:oN,intersection:xN,lazy:kN,literal:PN,map:EN,nan:sN,nativeEnum:AN,never:pN,null:dN,nullable:DN,number:k6,object:wN,oboolean:LN,onumber:jN,optional:IN,ostring:MN,pipeline:RN,preprocess:NN,promise:ON,record:_N,set:SN,strictObject:yN,string:$6,symbol:cN,transformer:q3,tuple:CN,undefined:uN,union:vN,unknown:hN,void:mN,NEVER:UN,ZodIssueCode:K,quotelessJson:WD,ZodError:er});const Ur=ee.object({message:ee.string()});function He(t){return ee.literal(ye[t])}const FN=ee.object({chainId:ee.number()}),zN=ee.object({email:ee.string().email()}),WN=ee.object({otp:ee.string()}),HN=ee.object({chainId:ee.optional(ee.number())}),VN=ee.object({action:ee.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),qN=ee.object({address:ee.string(),chainId:ee.number()}),ZN=ee.object({isConnected:ee.boolean()}),GN=ee.object({chainId:ee.number()}),KN=ee.string(),QN=ee.object({method:ee.literal("personal_sign"),params:ee.array(ee.any())}),YN=ee.object({method:ee.literal("eth_sendTransaction"),params:ee.array(ee.any())}),JN=ee.object({method:ee.literal("eth_accounts")}),XN=ee.object({method:ee.literal("eth_getBalance"),params:ee.array(ee.any())}),eR=ee.object({method:ee.literal("eth_estimateGas"),params:ee.array(ee.any())}),tR=ee.object({method:ee.literal("eth_gasPrice")}),nR=ee.object({method:ee.literal("eth_signTypedData_v4"),params:ee.array(ee.any())}),Z3=ee.object({token:ee.string()}),Wu={appEvent:ee.object({type:He("APP_SWITCH_NETWORK"),payload:FN}).or(ee.object({type:He("APP_CONNECT_EMAIL"),payload:zN})).or(ee.object({type:He("APP_CONNECT_DEVICE")})).or(ee.object({type:He("APP_CONNECT_OTP"),payload:WN})).or(ee.object({type:He("APP_GET_USER"),payload:ee.optional(HN)})).or(ee.object({type:He("APP_SIGN_OUT")})).or(ee.object({type:He("APP_IS_CONNECTED"),payload:ee.optional(Z3)})).or(ee.object({type:He("APP_GET_CHAIN_ID")})).or(ee.object({type:He("APP_RPC_REQUEST"),payload:QN.or(YN).or(JN).or(XN).or(eR).or(tR).or(nR)})),frameEvent:ee.object({type:He("FRAME_SWITCH_NETWORK_ERROR"),payload:Ur}).or(ee.object({type:He("FRAME_SWITCH_NETWORK_SUCCESS")})).or(ee.object({type:He("FRAME_CONNECT_EMAIL_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_CONNECT_EMAIL_SUCCESS"),payload:VN})).or(ee.object({type:He("FRAME_CONNECT_OTP_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_CONNECT_OTP_SUCCESS")})).or(ee.object({type:He("FRAME_CONNECT_DEVICE_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_CONNECT_DEVICE_SUCCESS")})).or(ee.object({type:He("FRAME_GET_USER_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_GET_USER_SUCCESS"),payload:qN})).or(ee.object({type:He("FRAME_SIGN_OUT_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_SIGN_OUT_SUCCESS")})).or(ee.object({type:He("FRAME_IS_CONNECTED_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_IS_CONNECTED_SUCCESS"),payload:ZN})).or(ee.object({type:He("FRAME_GET_CHAIN_ID_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_GET_CHAIN_ID_SUCCESS"),payload:GN})).or(ee.object({type:He("FRAME_RPC_REQUEST_ERROR"),payload:Ur})).or(ee.object({type:He("FRAME_RPC_REQUEST_SUCCESS"),payload:KN})).or(ee.object({type:He("FRAME_SESSION_UPDATE"),payload:Z3}))},rR=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],T6={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return rR.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},getTimeDifferenceMs(t){return Date.now()-t}};class iR{constructor(e,n=!1){if(this.iframe=null,this.rpcUrl=T6.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{window.addEventListener("message",({data:i})=>{var s;if(!((s=i.type)!=null&&s.includes(ye.FRAME_EVENT_KEY)))return;const o=Wu.frameEvent.parse(i);r(o)})},onAppEvent:r=>{window.addEventListener("message",({data:i})=>{var s;if(!((s=i.type)!=null&&s.includes(ye.APP_EVENT_KEY)))return;const o=Wu.appEvent.parse(i);r(o)})},postAppEvent:r=>{var i;if(!((i=this.iframe)!=null&&i.contentWindow))throw new Error("W3mFrame: iframe is not set");Wu.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")},postFrameEvent:r=>{if(!parent)throw new Error("W3mFrame: parent is not set");Wu.frameEvent.parse(r),parent.postMessage(r,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((r,i)=>{this.frameLoadPromiseResolver={resolve:r,reject:i}}),n){this.frameLoadPromise=new Promise((i,o)=>{this.frameLoadPromiseResolver={resolve:i,reject:o}});const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${ye.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var i;(i=this.frameLoadPromiseResolver)==null||i.resolve(void 0)},this.iframe.onerror=()=>{var i;(i=this.frameLoadPromiseResolver)==null||i.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...e)}}const Fr={set(t,e){localStorage.setItem(`${ye.STORAGE_KEY}${t}`,e)},get(t){return localStorage.getItem(`${ye.STORAGE_KEY}${t}`)},delete(t){localStorage.removeItem(`${ye.STORAGE_KEY}${t}`)}};class oR{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.w3mFrame=new iR(e,!0),this.w3mFrame.events.onFrameEvent(n=>{switch(console.log("💻 received",n),n.type){case ye.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(n);case ye.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(n);case ye.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case ye.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(n);case ye.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case ye.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(n);case ye.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(n);case ye.FRAME_GET_USER_ERROR:return this.onConnectError(n);case ye.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(n);case ye.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(n);case ye.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(n);case ye.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(n);case ye.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case ye.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(n);case ye.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess();case ye.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(n);case ye.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(n);case ye.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(n);case ye.FRAME_SESSION_UPDATE:return this.onSessionUpdate(n);default:return null}})}getLoginEmailUsed(){return!!Fr.get(ye.EMAIL_LOGIN_USED_KEY)}async connectEmail(e){await this.w3mFrame.frameLoadPromise;const n=Fr.get(ye.LAST_EMAIL_LOGIN_TIME);if(n){const r=T6.getTimeDifferenceMs(Number(n));if(r<3e4){const i=Math.ceil((3e4-r)/1e3);throw new Error(`Please try again after ${i} seconds`)}}return this.w3mFrame.events.postAppEvent({type:ye.APP_CONNECT_EMAIL,payload:e}),new Promise((r,i)=>{this.connectEmailResolver={resolve:r,reject:i}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ye.APP_CONNECT_DEVICE}),new Promise((e,n)=>{this.connectDeviceResolver={resolve:e,reject:n}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ye.APP_CONNECT_OTP,payload:e}),new Promise((n,r)=>{this.connectOtpResolver={resolve:n,reject:r}})}async isConnected(){await this.w3mFrame.frameLoadPromise;const e=this.getSessionToken();return this.w3mFrame.events.postAppEvent({type:ye.APP_IS_CONNECTED,payload:e?{token:e}:void 0}),new Promise((n,r)=>{this.isConnectedResolver={resolve:n,reject:r}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ye.APP_GET_CHAIN_ID}),new Promise((e,n)=>{this.getChainIdResolver={resolve:e,reject:n}})}async connect(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ye.APP_GET_USER,payload:e}),new Promise((n,r)=>{this.connectResolver={resolve:n,reject:r}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ye.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((n,r)=>{this.switchChainResolver={resolve:n,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.deleteSessionToken(),this.w3mFrame.events.postAppEvent({type:ye.APP_SIGN_OUT}),new Promise((e,n)=>{this.disconnectResolver={resolve:e,reject:n}})}async request(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ye.APP_RPC_REQUEST,payload:e}),new Promise((n,r)=>{this.rpcRequestResolver={resolve:n,reject:r}})}onRpcRequest(e){this.w3mFrame.events.onAppEvent(n=>{n.type.includes(ye.RPC_METHOD_KEY)&&e(n)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(n=>{n.type.includes(ye.RPC_METHOD_KEY)&&e(n)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===ye.FRAME_IS_CONNECTED_SUCCESS&&e()})}onConnectEmailSuccess(e){var n;(n=this.connectEmailResolver)==null||n.resolve(e.payload),Fr.set(ye.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}onConnectEmailError(e){var n;(n=this.connectEmailResolver)==null||n.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var n;(n=this.connectDeviceResolver)==null||n.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0),Fr.set(ye.EMAIL_LOGIN_USED_KEY,"true"),Fr.delete(ye.LAST_EMAIL_LOGIN_TIME)}onConnectOtpError(e){var n;(n=this.connectOtpResolver)==null||n.reject(e.payload.message)}onConnectSuccess(e){var n;(n=this.connectResolver)==null||n.resolve(e.payload)}onConnectError(e){var n;(n=this.connectResolver)==null||n.reject(e.payload.message)}onIsConnectedSuccess(e){var n;(n=this.isConnectedResolver)==null||n.resolve(e.payload)}onIsConnectedError(e){var n;(n=this.isConnectedResolver)==null||n.reject(e.payload.message)}onGetChainIdSuccess(e){var n;(n=this.getChainIdResolver)==null||n.resolve(e.payload)}onGetChainIdError(e){var n;(n=this.getChainIdResolver)==null||n.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),Fr.delete(ye.EMAIL_LOGIN_USED_KEY)}onSignOutError(e){var n;(n=this.disconnectResolver)==null||n.reject(e.payload.message)}onSwitchChainSuccess(){var e;(e=this.switchChainResolver)==null||e.resolve(void 0)}onSwitchChainError(e){var n;(n=this.switchChainResolver)==null||n.reject(e.payload.message)}onRpcRequestSuccess(e){var n;(n=this.rpcRequestResolver)==null||n.resolve(e.payload)}onRpcRequestError(e){var n;(n=this.rpcRequestResolver)==null||n.reject(e.payload.message)}onSessionUpdate(e){const{payload:n}=e;n&&this.setSessionToken(n.token)}setSessionToken(e){Fr.set(ye.SESSION_TOKEN_KEY,e)}getSessionToken(){return Fr.get(ye.SESSION_TOKEN_KEY)}deleteSessionToken(){Fr.delete(ye.SESSION_TOKEN_KEY)}}class sR extends d0{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},typeof window<"u"&&(this.provider=new oR(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){const{address:n,chainId:r}=await this.provider.connect({chainId:e.chainId});return{account:n,chain:{id:r,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{const n=this.chains.find(i=>i.id===e);if(!n)throw new ir(new Error("chain not found on connector."));await this.provider.switchNetwork(e);const r=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:r}}),n}catch(n){throw n instanceof Error?new ir(n):n}}async disconnect(){await this.provider.disconnect()}async getAccount(){const{address:e}=await this.provider.connect();return e}async getChainId(){const{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){const{address:e,chainId:n}=await this.provider.connect();return Promise.resolve(u0({account:e,chain:{id:n},transport:l0(this.provider)}))}async isAuthorized(){const{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}const aR=pe.getBlockchainApiUrl();function lR({projectId:t}){return function(n){if(!Hr.WalletConnectRpcChainIds.includes(n.id))return null;const r=`${aR}/v1/?chainId=${xe.EIP155}:${n.id}&projectId=${t}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}function cR({projectId:t,chains:e,metadata:n,enableInjected:r,enableCoinbase:i,enableEIP6963:o,enableEmail:s,enableWalletConnect:a}){const{publicClient:l}=S9(e,[lR({projectId:t}),zD()]),c=[];return a!==!1&&c.push(new FD({chains:e,options:{projectId:t,showQrModal:!1,metadata:n}})),r!==!1&&c.push(new pg({chains:e,options:{shimDisconnect:!0}})),o!==!1&&c.push(new VT({chains:e})),i!==!1&&c.push(new tO({chains:e,options:{appName:(n==null?void 0:n.name)??"Unknown"}})),s===!0&&c.push(new sR({chains:e,options:{projectId:t}})),VA({autoConnect:!0,connectors:c,publicClient:l})}let Hu;function uR(t){return Hu||(Hu=new HT({...t,_sdkVersion:`react-wagmi-${xe.VERSION}`}),AC(Hu)),Hu}const dR="/assets/logoWithText-8UU8kIKW.svg";function fR({}){const{open:t}=m5(),{isConnected:e,address:n}=Y4();return q.jsxs("header",{className:"py-3 flex justify-between align-middle",children:[q.jsx("h1",{className:"text-teal-500 my-auto",children:q.jsx("img",{className:"w-32",src:dR,title:"MintPare"})}),q.jsx("button",{className:"btn-primary",onClick:()=>t(),children:e?"Connected | "+n.substring(n.length-5):"Connect"})]})}const hR=Yn.lazy(()=>Fo(()=>import("./react-spline-CHJEpl0_.js"),__vite__mapDeps([])));function pR({}){return q.jsx("div",{className:"banner",children:q.jsxs("div",{className:"main-container h-screen flex flex-col",children:[q.jsx(fR,{}),q.jsx("div",{className:" spline-wrapper",children:q.jsx(le.Suspense,{fallback:q.jsx("div",{children:"lading..."}),children:q.jsx(hR,{className:"spline",scene:"https://prod.spline.design/MyoySUjk716jMwjv/scene.splinecode"})})}),q.jsxs("div",{className:"max-w-3xl text-left mt-36 mr-auto",children:[q.jsx("div",{className:"effect absolute h-80 right-0 left-0 opacity-20"}),q.jsx("div",{className:"text-8xl -rotate-12 fixed -left-3 top-14 opacity-0 lg:opacity-45 -z-10",children:q.jsx(TC,{})}),q.jsx("h2",{className:"text-4xl min-h-24 font-bold md:text-6xl text-left",children:q.jsx(EC,{sequence:["",10,"MintPare's Rocket-Fueled Adventure Begins 🚀",5e3],wrapper:"span",deletionSpeed:90,speed:2,repeat:1e3})}),q.jsx("p",{className:"mt-3  md:mt-8 text-gray-400 max-w-xl mr-auto md:text-xl",children:"MintPare's presale tokens (MPPT) are ERC-20 compliant, unlocking a world of possibilities to empower and strengthen the MintPare community."}),q.jsx("div",{className:"mt-10",children:q.jsx("button",{className:"btn-primary",children:"Learn More"})})]}),q.jsxs("div",{className:"mt-20 mr-auto  md:mt-automb-20 flex flex-col lg:flex-row gap-3 flex-wrap justify-start",children:[q.jsx(dh,{icon:q.jsx(hC,{}),title:"Supported By Community"}),q.jsx(dh,{icon:q.jsx(wC,{}),title:"Direct Listing Plans"}),q.jsx(dh,{icon:q.jsx(yC,{}),title:"Popular Networks"})]})]})})}const mR=[{inputs:[{internalType:"uint256",name:"rate",type:"uint256"},{internalType:"address payable",name:"wallet",type:"address"},{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"initialHardCap",type:"uint256"},{internalType:"uint256",name:"tokenDecimals",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[],name:"ICOEnded",type:"event"},{anonymous:!1,inputs:[],name:"ICOStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"purchaser",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensPurchased",type:"event"},{inputs:[],name:"_rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_weiRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"buyTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"checkContribution",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"hardCap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"hcap",type:"uint256"}],name:"setHardCap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"packages",type:"uint256[]"}],name:"setPackages",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenDecimals",type:"uint256"}],name:"setTokenDecimals",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"addrs",type:"address[]"}],name:"setWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC20",name:"tokenAddress",type:"address"}],name:"takeTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"weiRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];let gR={data:""},wR=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||gR,yR=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vR=/\/\*[^]*?\*\/|  +/g,G3=/\n+/g,Pi=(t,e)=>{let n="",r="",i="";for(let o in t){let s=t[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?Pi(s,o):o+"{"+Pi(s,o[1]=="k"?"":e)+"}":typeof s=="object"?r+=Pi(s,e?e.replace(/([^,])+/g,a=>o.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Pi.p?Pi.p(o,s):o+":"+s+";")}return n+(e&&i?e+"{"+i+"}":i)+r},zr={},A6=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+A6(t[n]);return e}return t},bR=(t,e,n,r,i)=>{let o=A6(t),s=zr[o]||(zr[o]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(o));if(!zr[s]){let l=o!==t?t:(c=>{let u,f,h=[{}];for(;u=yR.exec(c.replace(vR,""));)u[4]?h.shift():u[3]?(f=u[3].replace(G3," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][u[1]]=u[2].replace(G3," ").trim();return h[0]})(t);zr[s]=Pi(i?{["@keyframes "+s]:l}:l,n?"":"."+s)}let a=n&&zr.g?zr.g:null;return n&&(zr.g=zr[s]),((l,c,u,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(zr[s],e,r,a),s},xR=(t,e,n)=>t.reduce((r,i,o)=>{let s=e[o];if(s&&s.call){let a=s(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":Pi(a,""):a===!1?"":a}return r+i+(s??"")},"");function j0(t){let e=this||{},n=t.call?t(e.p):t;return bR(n.unshift?n.raw?xR(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,wR(e.target),e.g,e.o,e.k)}let O6,z1,W1;j0.bind({g:1});let ai=j0.bind({k:1});function CR(t,e,n,r){Pi.p=e,O6=t,z1=n,W1=r}function wo(t,e){let n=this||{};return function(){let r=arguments;function i(o,s){let a=Object.assign({},o),l=a.className||i.className;n.p=Object.assign({theme:z1&&z1()},a),n.o=/ *go\d+/.test(l),a.className=j0.apply(n,r)+(l?" "+l:""),e&&(a.ref=s);let c=t;return t[0]&&(c=a.as||t,delete a.as),W1&&c[0]&&W1(a),O6(c,a)}return e?e(i):i}}var _R=t=>typeof t=="function",Pf=(t,e)=>_R(t)?t(e):t,ER=(()=>{let t=0;return()=>(++t).toString()})(),I6=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),SR=20,dd=new Map,$R=1e3,K3=t=>{if(dd.has(t))return;let e=setTimeout(()=>{dd.delete(t),gs({type:4,toastId:t})},$R);dd.set(t,e)},kR=t=>{let e=dd.get(t);e&&clearTimeout(e)},H1=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,SR)};case 1:return e.toast.id&&kR(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:n}=e;return t.toasts.find(o=>o.id===n.id)?H1(t,{type:1,toast:n}):H1(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?K3(r):t.toasts.forEach(o=>{K3(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},fd=[],hd={toasts:[],pausedAt:void 0},gs=t=>{hd=H1(hd,t),fd.forEach(e=>{e(hd)})},PR={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},TR=(t={})=>{let[e,n]=le.useState(hd);le.useEffect(()=>(fd.push(n),()=>{let i=fd.indexOf(n);i>-1&&fd.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var o,s;return{...t,...t[i.type],...i,duration:i.duration||((o=t[i.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||PR[i.type],style:{...t.style,...(s=t[i.type])==null?void 0:s.style,...i.style}}});return{...e,toasts:r}},AR=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||ER()}),hu=t=>(e,n)=>{let r=AR(e,t,n);return gs({type:2,toast:r}),r.id},dn=(t,e)=>hu("blank")(t,e);dn.error=hu("error");dn.success=hu("success");dn.loading=hu("loading");dn.custom=hu("custom");dn.dismiss=t=>{gs({type:3,toastId:t})};dn.remove=t=>gs({type:4,toastId:t});dn.promise=(t,e,n)=>{let r=dn.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(dn.success(Pf(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{dn.error(Pf(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var OR=(t,e)=>{gs({type:1,toast:{id:t,height:e}})},IR=()=>{gs({type:5,time:Date.now()})},DR=t=>{let{toasts:e,pausedAt:n}=TR(t);le.useEffect(()=>{if(n)return;let o=Date.now(),s=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(l<0){a.visible&&dn.dismiss(a.id);return}return setTimeout(()=>dn.dismiss(a.id),l)});return()=>{s.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=le.useCallback(()=>{n&&gs({type:6,time:Date.now()})},[n]),i=le.useCallback((o,s)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:c}=s||{},u=e.filter(g=>(g.position||c)===(o.position||c)&&g.height),f=u.findIndex(g=>g.id===o.id),h=u.filter((g,y)=>y<f&&g.visible).length;return u.filter(g=>g.visible).slice(...a?[h+1]:[0,h]).reduce((g,y)=>g+(y.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:OR,startPause:IR,endPause:r,calculateOffset:i}}},NR=ai`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,RR=ai`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,MR=ai`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,jR=wo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${NR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${RR} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${MR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,LR=ai`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,BR=wo("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${LR} 1s linear infinite;
`,UR=ai`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,FR=ai`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,zR=wo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${UR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${FR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,WR=wo("div")`
  position: absolute;
`,HR=wo("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,VR=ai`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qR=wo("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${VR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ZR=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?le.createElement(qR,null,e):e:n==="blank"?null:le.createElement(HR,null,le.createElement(BR,{...r}),n!=="loading"&&le.createElement(WR,null,n==="error"?le.createElement(jR,{...r}):le.createElement(zR,{...r})))},GR=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,KR=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,QR="0%{opacity:0;} 100%{opacity:1;}",YR="0%{opacity:1;} 100%{opacity:0;}",JR=wo("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,XR=wo("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eM=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=I6()?[QR,YR]:[GR(n),KR(n)];return{animation:e?`${ai(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ai(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tM=le.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?eM(t.position||e||"top-center",t.visible):{opacity:0},o=le.createElement(ZR,{toast:t}),s=le.createElement(XR,{...t.ariaProps},Pf(t.message,t));return le.createElement(JR,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:o,message:s}):le.createElement(le.Fragment,null,o,s))});CR(le.createElement);var nM=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let o=le.useCallback(s=>{if(s){let a=()=>{let l=s.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return le.createElement("div",{ref:o,className:e,style:n},i)},rM=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I6()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},iM=j0`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Vu=16,oM=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:a,handlers:l}=DR(n);return le.createElement("div",{style:{position:"fixed",zIndex:9999,top:Vu,left:Vu,right:Vu,bottom:Vu,pointerEvents:"none",...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(c=>{let u=c.position||e,f=l.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),h=rM(u,f);return le.createElement(nM,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?iM:"",style:h},c.type==="custom"?Pf(c.message,c):i?i(c):le.createElement(tM,{toast:c,position:u}))}))};function Hh({icon:t,packageName:e,tokensAmount:n,price:r,priceSymbol:i,availableOn:o}){const{isConnected:s,address:a}=Y4(),l=KA(),{switchNetwork:c,isLoading:u}=eO(),{open:f}=m5(),h=Sr(),g=async()=>{if(u)return;if(l!==137)return c==null?void 0:c(137);if(!s)return f();const y=await h.getBalance({address:a});if(+n0(y)<=r)return dn("You don't have enough fund!",{icon:q.jsx(SC,{})});const E=await xb(),{request:b}=await h.simulateContract({account:a,address:"0x1374343203a728689d03BfB7843002774126f83a",abi:mR,chain:pb,functionName:"buyTokens",value:RE(r.toString(),"wei")});E?await E.writeContract(b):dn("Failed to run transaction. Please reconnect your wallet.")};return q.jsxs("div",{className:"sale-card relative  transition-shadow hover:shadow-md hover:shadow-purple-800",children:[q.jsxs("div",{className:"mb-5",children:[q.jsx("div",{className:"p-5 mx-auto w-fit my-auto rounded-full  bg-gradient-to-br bg-indigo-300 bg-opacity-25",children:q.jsx("div",{className:"m-auto text-5xl  text-indigo-200 ",children:t})}),q.jsx("h4",{className:"text-center mb-2 mt-4 text-purple-300",children:e})]}),q.jsxs("h3",{className:"text-center text-2xl mt-auto text-gray-300",children:[n," MPPT"]}),q.jsx("p",{className:"mt-3  text-center text-gray-200 text-opacity-80 font-bold",children:o}),q.jsx("div",{className:"mt-auto",children:q.jsxs("button",{onClick:g,className:"bg-purple-600 bg-opacity-40 p-3 rounded-full w-full transition-colors hover:bg-opacity-80",children:[r," ",i]})})]})}function sM({}){return q.jsxs("div",{className:"main-container relative",children:[q.jsxs("div",{className:"mb-10 max-w-xl m-auto",children:[q.jsx("h3",{className:"text-center text-3xl",children:"Presale Token (MPPT) Packages "}),q.jsx("p",{className:"text-center max-w-lg mx-auto mt-4 text-indigo-300",children:"MintPare Presale Token holders will be the first users to receive MintPare tokens once its listed"}),q.jsx("div",{className:"effect absolute h-80 right-0 left-0 opacity-20"})]}),q.jsxs("div",{className:"gap-3 flex flex-wrap justify-center p-3",children:[q.jsx(Hh,{icon:q.jsx(PC,{}),packageName:"Earth Package",availableOn:"Available on Polygon",tokensAmount:15e3,price:50,priceSymbol:"MATIC"},1),q.jsx(Hh,{icon:q.jsx(kC,{}),packageName:"Jupiter Package",availableOn:"Available on Polygon",tokensAmount:3e4,price:100,priceSymbol:"MATIC"},2),q.jsx(Hh,{icon:q.jsx($C,{}),packageName:"Galaxy Package",availableOn:"Available on Polygon",tokensAmount:6e4,price:200,priceSymbol:"MATIC"},3)]})]})}function aM(){return q.jsxs("div",{className:"min-h-screen",children:[q.jsx(pR,{}),q.jsx("div",{className:"my-40",children:q.jsx(sM,{})}),q.jsx(aC,{}),q.jsx("div",{className:"mt-20 lg:mt-60",children:q.jsx(pC,{})})]})}const D6="d652bf3e1fe182bf1daf02070f363752",lM={name:"MintPare",description:"MintPare presale"},N6=[pb,fg,qC],R6=cR({chains:N6,projectId:D6,metadata:lM});uR({wagmiConfig:R6,projectId:D6,chains:N6});Vh.createRoot(document.getElementById("root")).render(q.jsx(Yn.StrictMode,{children:q.jsxs(qA,{config:R6,children:[q.jsx(oM,{toastOptions:{style:{backgroundColor:"rgb(67 56 202)",color:"white"}}}),q.jsx(aM,{})]})}));export{UO as $,rL as A,X as B,iL as C,oL as D,sL as E,aL as F,lL as G,xl as H,ql as I,CD as J,qO as K,pD as L,NI as M,ZO as N,c6 as O,Jj as P,nO as Q,dD as R,ED as S,wD as T,J3 as U,R0 as V,ke as W,hr as X,Yn as Y,V1 as Z,Fo as _,gE as a,D4 as a0,RI as a1,wE as b,yE as c,nb as d,Fc as e,cM as f,rE as g,Zf as h,Xt as i,Ki as j,u_ as k,nE as l,Zc as m,id as n,ti as o,on as p,i0 as q,le as r,ui as s,Er as t,ie as u,ru as v,Xj as w,eL as x,tL as y,nL as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-r8ekgzIg.js","assets/events-uSXzothe.js","assets/index.es-by7iZVxR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}