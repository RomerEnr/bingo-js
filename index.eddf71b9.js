var Rr=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ba=Rr((Z,K)=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var Nr=typeof global=="object"&&global&&global.Object===Object&&global;const nr=Nr;var Vr=typeof self=="object"&&self&&self.Object===Object&&self,Wr=nr||Vr||Function("return this")();const tr=Wr;var Ur=tr.Symbol;const ue=Ur;var ar=Object.prototype,qr=ar.hasOwnProperty,zr=ar.toString,re=ue?ue.toStringTag:void 0;function Hr(e){var r=qr.call(e,re),n=e[re];try{e[re]=void 0;var t=!0}catch{}var a=zr.call(e);return t&&(r?e[re]=n:delete e[re]),a}var _r=Object.prototype,Zr=_r.toString;function Kr(e){return Zr.call(e)}var Gr="[object Null]",Yr="[object Undefined]",Ve=ue?ue.toStringTag:void 0;function fe(e){return e==null?e===void 0?Yr:Gr:Ve&&Ve in Object(e)?Hr(e):Kr(e)}function le(e){return e!=null&&typeof e=="object"}var Qr="[object Symbol]";function Jr(e){return typeof e=="symbol"||le(e)&&fe(e)==Qr}function Xr(e,r){for(var n=-1,t=e==null?0:e.length,a=Array(t);++n<t;)a[n]=r(e[n],n,e);return a}var en=Array.isArray;const ir=en;var rn=/\s/;function nn(e){for(var r=e.length;r--&&rn.test(e.charAt(r)););return r}var tn=/^\s+/;function an(e){return e&&e.slice(0,nn(e)+1).replace(tn,"")}function se(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var We=0/0,on=/^[-+]0x[0-9a-f]+$/i,un=/^0b[01]+$/i,sn=/^0o[0-7]+$/i,cn=parseInt;function fn(e){if(typeof e=="number")return e;if(Jr(e))return We;if(se(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=se(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=an(e);var n=un.test(e);return n||sn.test(e)?cn(e.slice(2),n?2:8):on.test(e)?We:+e}var Ue=1/0,ln=17976931348623157e292;function pe(e){if(!e)return e===0?e:0;if(e=fn(e),e===Ue||e===-Ue){var r=e<0?-1:1;return r*ln}return e===e?e:0}var dn="[object AsyncFunction]",gn="[object Function]",vn="[object GeneratorFunction]",hn="[object Proxy]";function mn(e){if(!se(e))return!1;var r=fe(e);return r==gn||r==vn||r==dn||r==hn}function yn(e,r){var n=-1,t=e.length;for(r||(r=Array(t));++n<t;)r[n]=e[n];return r}var pn=9007199254740991,bn=/^(?:0|[1-9]\d*)$/;function or(e,r){var n=typeof e;return r=r==null?pn:r,!!r&&(n=="number"||n!="symbol"&&bn.test(e))&&e>-1&&e%1==0&&e<r}function Tn(e,r){return e===r||e!==e&&r!==r}var Mn=9007199254740991;function ur(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Mn}function sr(e){return e!=null&&ur(e.length)&&!mn(e)}function wn(e,r,n){if(!se(n))return!1;var t=typeof r;return(t=="number"?sr(n)&&or(r,n.length):t=="string"&&r in n)?Tn(n[r],e):!1}var xn=Object.prototype;function In(e){var r=e&&e.constructor,n=typeof r=="function"&&r.prototype||xn;return e===n}function Cn(e,r){for(var n=-1,t=Array(e);++n<e;)t[n]=r(n);return t}var Pn="[object Arguments]";function qe(e){return le(e)&&fe(e)==Pn}var cr=Object.prototype,Sn=cr.hasOwnProperty,An=cr.propertyIsEnumerable,On=qe(function(){return arguments}())?qe:function(e){return le(e)&&Sn.call(e,"callee")&&!An.call(e,"callee")};const jn=On;function En(){return!1}var fr=typeof Z=="object"&&Z&&!Z.nodeType&&Z,ze=fr&&typeof K=="object"&&K&&!K.nodeType&&K,Fn=ze&&ze.exports===fr,He=Fn?tr.Buffer:void 0,Ln=He?He.isBuffer:void 0,kn=Ln||En;const Bn=kn;var Dn="[object Arguments]",$n="[object Array]",Rn="[object Boolean]",Nn="[object Date]",Vn="[object Error]",Wn="[object Function]",Un="[object Map]",qn="[object Number]",zn="[object Object]",Hn="[object RegExp]",_n="[object Set]",Zn="[object String]",Kn="[object WeakMap]",Gn="[object ArrayBuffer]",Yn="[object DataView]",Qn="[object Float32Array]",Jn="[object Float64Array]",Xn="[object Int8Array]",et="[object Int16Array]",rt="[object Int32Array]",nt="[object Uint8Array]",tt="[object Uint8ClampedArray]",at="[object Uint16Array]",it="[object Uint32Array]",A={};A[Qn]=A[Jn]=A[Xn]=A[et]=A[rt]=A[nt]=A[tt]=A[at]=A[it]=!0;A[Dn]=A[$n]=A[Gn]=A[Rn]=A[Yn]=A[Nn]=A[Vn]=A[Wn]=A[Un]=A[qn]=A[zn]=A[Hn]=A[_n]=A[Zn]=A[Kn]=!1;function ot(e){return le(e)&&ur(e.length)&&!!A[fe(e)]}function ut(e){return function(r){return e(r)}}var lr=typeof Z=="object"&&Z&&!Z.nodeType&&Z,ne=lr&&typeof K=="object"&&K&&!K.nodeType&&K,st=ne&&ne.exports===lr,be=st&&nr.process,ct=function(){try{var e=ne&&ne.require&&ne.require("util").types;return e||be&&be.binding&&be.binding("util")}catch{}}();const _e=ct;var Ze=_e&&_e.isTypedArray,ft=Ze?ut(Ze):ot;const lt=ft;var dt=Object.prototype,gt=dt.hasOwnProperty;function vt(e,r){var n=ir(e),t=!n&&jn(e),a=!n&&!t&&Bn(e),o=!n&&!t&&!a&&lt(e),s=n||t||a||o,f=s?Cn(e.length,String):[],i=f.length;for(var v in e)(r||gt.call(e,v))&&!(s&&(v=="length"||a&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||or(v,i)))&&f.push(v);return f}function ht(e,r){return function(n){return e(r(n))}}var mt=ht(Object.keys,Object);const yt=mt;var pt=Object.prototype,bt=pt.hasOwnProperty;function Tt(e){if(!In(e))return yt(e);var r=[];for(var n in Object(e))bt.call(e,n)&&n!="constructor"&&r.push(n);return r}function Mt(e){return sr(e)?vt(e):Tt(e)}function wt(e,r){return Xr(r,function(n){return e[n]})}function xt(e){return e==null?[]:wt(e,Mt(e))}var It=Math.floor,Ct=Math.random;function Pt(e,r){return e+It(Ct()*(r-e+1))}var St=Math.ceil,At=Math.max;function Ot(e,r,n,t){for(var a=-1,o=At(St((r-e)/(n||1)),0),s=Array(o);o--;)s[t?o:++a]=e,e+=n;return s}function jt(e){return function(r,n,t){return t&&typeof t!="number"&&wn(r,n,t)&&(n=t=void 0),r=pe(r),n===void 0?(n=r,r=0):n=pe(n),t=t===void 0?r<n?1:-1:pe(t),Ot(r,n,t,e)}}var Et=jt();const xe=Et;function dr(e,r){var n=-1,t=e.length,a=t-1;for(r=r===void 0?t:r;++n<r;){var o=Pt(n,a),s=e[o];e[o]=e[n],e[n]=s}return e.length=r,e}function Ft(e){return dr(yn(e))}function Lt(e){return dr(xt(e))}function Ie(e){var r=ir(e)?Ft:Lt;return r(e)}const kt=(e,r)=>{for(let n=0;n<r.length;n++){const t=document.createElement("div");t.classList.add("number",`number${r[n]}`),t.textContent=`${r[n]}`,e.appendChild(t)}return e},Bt=(e,r)=>{for(let n=0;n<r.length;n++){const t=document.createElement("div");t.classList.add("number",`number${r[n]}`),t.textContent=`${r[n]}`,e.appendChild(t)}return e};var gr={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ce={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Dt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ce={CSS:{},springs:{}};function q(e,r,n){return Math.min(Math.max(e,r),n)}function te(e,r){return e.indexOf(r)>-1}function Te(e,r){return e.apply(null,r)}var d={arr:function(e){return Array.isArray(e)},obj:function(e){return te(Object.prototype.toString.call(e),"Object")},pth:function(e){return d.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||d.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return d.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return d.hex(e)||d.rgb(e)||d.hsl(e)},key:function(e){return!gr.hasOwnProperty(e)&&!Ce.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function vr(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(n){return parseFloat(n)}):[]}function hr(e,r){var n=vr(e),t=q(d.und(n[0])?1:n[0],.1,100),a=q(d.und(n[1])?100:n[1],.1,100),o=q(d.und(n[2])?10:n[2],.1,100),s=q(d.und(n[3])?0:n[3],.1,100),f=Math.sqrt(a/t),i=o/(2*Math.sqrt(a*t)),v=i<1?f*Math.sqrt(1-i*i):0,l=1,g=i<1?(i*f+-s)/v:-s+f;function p(T){var h=r?r*T/1e3:T;return i<1?h=Math.exp(-h*i*f)*(l*Math.cos(v*h)+g*Math.sin(v*h)):h=(l+g*h)*Math.exp(-h*f),T===0||T===1?T:1-h}function b(){var T=ce.springs[e];if(T)return T;for(var h=1/6,S=0,j=0;;)if(S+=h,p(S)===1){if(j++,j>=16)break}else j=0;var y=S*h*1e3;return ce.springs[e]=y,y}return r?p:b}function $t(e){return e===void 0&&(e=10),function(r){return Math.ceil(q(r,1e-6,1)*e)*(1/e)}}var Rt=function(){var e=11,r=1/(e-1);function n(l,g){return 1-3*g+3*l}function t(l,g){return 3*g-6*l}function a(l){return 3*l}function o(l,g,p){return((n(g,p)*l+t(g,p))*l+a(g))*l}function s(l,g,p){return 3*n(g,p)*l*l+2*t(g,p)*l+a(g)}function f(l,g,p,b,T){var h,S,j=0;do S=g+(p-g)/2,h=o(S,b,T)-l,h>0?p=S:g=S;while(Math.abs(h)>1e-7&&++j<10);return S}function i(l,g,p,b){for(var T=0;T<4;++T){var h=s(g,p,b);if(h===0)return g;var S=o(g,p,b)-l;g-=S/h}return g}function v(l,g,p,b){if(!(0<=l&&l<=1&&0<=p&&p<=1))return;var T=new Float32Array(e);if(l!==g||p!==b)for(var h=0;h<e;++h)T[h]=o(h*r,l,p);function S(j){for(var y=0,m=1,D=e-1;m!==D&&T[m]<=j;++m)y+=r;--m;var W=(j-T[m])/(T[m+1]-T[m]),O=y+W*r,H=s(O,l,p);return H>=.001?i(j,O,l,p):H===0?O:f(j,y,y+r,l,p)}return function(j){return l===g&&p===b||j===0||j===1?j:o(S(j),g,b)}}return v}(),mr=function(){var e={linear:function(){return function(t){return t}}},r={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var a,o=4;t<((a=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((a*3-2)/22-t,2)}},Elastic:function(t,a){t===void 0&&(t=1),a===void 0&&(a=.5);var o=q(t,1,10),s=q(a,.1,2);return function(f){return f===0||f===1?f:-o*Math.pow(2,10*(f-1))*Math.sin((f-1-s/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/s)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(t,a){r[t]=function(){return function(o){return Math.pow(o,a+2)}}}),Object.keys(r).forEach(function(t){var a=r[t];e["easeIn"+t]=a,e["easeOut"+t]=function(o,s){return function(f){return 1-a(o,s)(1-f)}},e["easeInOut"+t]=function(o,s){return function(f){return f<.5?a(o,s)(f*2)/2:1-a(o,s)(f*-2+2)/2}},e["easeOutIn"+t]=function(o,s){return function(f){return f<.5?(1-a(o,s)(1-f*2))/2:(a(o,s)(f*2-1)+1)/2}}}),e}();function Pe(e,r){if(d.fnc(e))return e;var n=e.split("(")[0],t=mr[n],a=vr(e);switch(n){case"spring":return hr(e,r);case"cubicBezier":return Te(Rt,a);case"steps":return Te($t,a);default:return Te(t,a)}}function yr(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function de(e,r){for(var n=e.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var s=e[o];r.call(t,s,o,e)&&a.push(s)}return a}function ge(e){return e.reduce(function(r,n){return r.concat(d.arr(n)?ge(n):n)},[])}function Ke(e){return d.arr(e)?e:(d.str(e)&&(e=yr(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Se(e,r){return e.some(function(n){return n===r})}function Ae(e){var r={};for(var n in e)r[n]=e[n];return r}function Me(e,r){var n=Ae(e);for(var t in e)n[t]=r.hasOwnProperty(t)?r[t]:e[t];return n}function ve(e,r){var n=Ae(e);for(var t in r)n[t]=d.und(e[t])?r[t]:e[t];return n}function Nt(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function Vt(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(r,function(f,i,v,l){return i+i+v+v+l+l}),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),a=parseInt(t[1],16),o=parseInt(t[2],16),s=parseInt(t[3],16);return"rgba("+a+","+o+","+s+",1)"}function Wt(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(r[1],10)/360,t=parseInt(r[2],10)/100,a=parseInt(r[3],10)/100,o=r[4]||1;function s(p,b,T){return T<0&&(T+=1),T>1&&(T-=1),T<1/6?p+(b-p)*6*T:T<1/2?b:T<2/3?p+(b-p)*(2/3-T)*6:p}var f,i,v;if(t==0)f=i=v=a;else{var l=a<.5?a*(1+t):a+t-a*t,g=2*a-l;f=s(g,l,n+1/3),i=s(g,l,n),v=s(g,l,n-1/3)}return"rgba("+f*255+","+i*255+","+v*255+","+o+")"}function Ut(e){if(d.rgb(e))return Nt(e);if(d.hex(e))return Vt(e);if(d.hsl(e))return Wt(e)}function G(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function qt(e){if(te(e,"translate")||e==="perspective")return"px";if(te(e,"rotate")||te(e,"skew"))return"deg"}function we(e,r){return d.fnc(e)?e(r.target,r.id,r.total):e}function z(e,r){return e.getAttribute(r)}function Oe(e,r,n){var t=G(r);if(Se([n,"deg","rad","turn"],t))return r;var a=ce.CSS[r+n];if(!d.und(a))return a;var o=100,s=document.createElement(e.tagName),f=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;f.appendChild(s),s.style.position="absolute",s.style.width=o+n;var i=o/s.offsetWidth;f.removeChild(s);var v=i*parseFloat(r);return ce.CSS[r+n]=v,v}function pr(e,r,n){if(r in e.style){var t=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[r]||getComputedStyle(e).getPropertyValue(t)||"0";return n?Oe(e,a,n):a}}function je(e,r){if(d.dom(e)&&!d.inp(e)&&(!d.nil(z(e,r))||d.svg(e)&&e[r]))return"attribute";if(d.dom(e)&&Se(Dt,r))return"transform";if(d.dom(e)&&r!=="transform"&&pr(e,r))return"css";if(e[r]!=null)return"object"}function br(e){if(!!d.dom(e)){for(var r=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,t=new Map,a;a=n.exec(r);)t.set(a[1],a[2]);return t}}function zt(e,r,n,t){var a=te(r,"scale")?1:0+qt(r),o=br(e).get(r)||a;return n&&(n.transforms.list.set(r,o),n.transforms.last=r),t?Oe(e,o,t):o}function Ee(e,r,n,t){switch(je(e,r)){case"transform":return zt(e,r,t,n);case"css":return pr(e,r,n);case"attribute":return z(e,r);default:return e[r]||0}}function Fe(e,r){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var t=G(e)||0,a=parseFloat(r),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function Tr(e,r){if(d.col(e))return Ut(e);if(/\s/g.test(e))return e;var n=G(e),t=n?e.substr(0,e.length-n.length):e;return r?t+r:t}function Le(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function Ht(e){return Math.PI*2*z(e,"r")}function _t(e){return z(e,"width")*2+z(e,"height")*2}function Zt(e){return Le({x:z(e,"x1"),y:z(e,"y1")},{x:z(e,"x2"),y:z(e,"y2")})}function Mr(e){for(var r=e.points,n=0,t,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(n+=Le(t,o)),t=o}return n}function Kt(e){var r=e.points;return Mr(e)+Le(r.getItem(r.numberOfItems-1),r.getItem(0))}function wr(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Ht(e);case"rect":return _t(e);case"line":return Zt(e);case"polyline":return Mr(e);case"polygon":return Kt(e)}}function Gt(e){var r=wr(e);return e.setAttribute("stroke-dasharray",r),r}function Yt(e){for(var r=e.parentNode;d.svg(r)&&d.svg(r.parentNode);)r=r.parentNode;return r}function xr(e,r){var n=r||{},t=n.el||Yt(e),a=t.getBoundingClientRect(),o=z(t,"viewBox"),s=a.width,f=a.height,i=n.viewBox||(o?o.split(" "):[0,0,s,f]);return{el:t,viewBox:i,x:i[0]/1,y:i[1]/1,w:s,h:f,vW:i[2],vH:i[3]}}function Qt(e,r){var n=d.str(e)?yr(e)[0]:e,t=r||100;return function(a){return{property:a,el:n,svg:xr(n),totalLength:wr(n)*(t/100)}}}function Jt(e,r,n){function t(l){l===void 0&&(l=0);var g=r+l>=1?r+l:0;return e.el.getPointAtLength(g)}var a=xr(e.el,e.svg),o=t(),s=t(-1),f=t(1),i=n?1:a.w/a.vW,v=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*i;case"y":return(o.y-a.y)*v;case"angle":return Math.atan2(f.y-s.y,f.x-s.x)*180/Math.PI}}function Ge(e,r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=Tr(d.pth(e)?e.totalLength:e,r)+"";return{original:t,numbers:t.match(n)?t.match(n).map(Number):[0],strings:d.str(e)||r?t.split(n):[]}}function ke(e){var r=e?ge(d.arr(e)?e.map(Ke):Ke(e)):[];return de(r,function(n,t,a){return a.indexOf(n)===t})}function Ir(e){var r=ke(e);return r.map(function(n,t){return{target:n,id:t,total:r.length,transforms:{list:br(n)}}})}function Xt(e,r){var n=Ae(r);if(/^spring/.test(n.easing)&&(n.duration=hr(n.easing)),d.arr(e)){var t=e.length,a=t===2&&!d.obj(e[0]);a?e={value:e}:d.fnc(r.duration)||(n.duration=r.duration/t)}var o=d.arr(e)?e:[e];return o.map(function(s,f){var i=d.obj(s)&&!d.pth(s)?s:{value:s};return d.und(i.delay)&&(i.delay=f?0:r.delay),d.und(i.endDelay)&&(i.endDelay=f===o.length-1?r.endDelay:0),i}).map(function(s){return ve(s,n)})}function ea(e){for(var r=de(ge(e.map(function(o){return Object.keys(o)})),function(o){return d.key(o)}).reduce(function(o,s){return o.indexOf(s)<0&&o.push(s),o},[]),n={},t=function(o){var s=r[o];n[s]=e.map(function(f){var i={};for(var v in f)d.key(v)?v==s&&(i.value=f[v]):i[v]=f[v];return i})},a=0;a<r.length;a++)t(a);return n}function ra(e,r){var n=[],t=r.keyframes;t&&(r=ve(ea(t),r));for(var a in r)d.key(a)&&n.push({name:a,tweens:Xt(r[a],e)});return n}function na(e,r){var n={};for(var t in e){var a=we(e[t],r);d.arr(a)&&(a=a.map(function(o){return we(o,r)}),a.length===1&&(a=a[0])),n[t]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function ta(e,r){var n;return e.tweens.map(function(t){var a=na(t,r),o=a.value,s=d.arr(o)?o[1]:o,f=G(s),i=Ee(r.target,e.name,f,r),v=n?n.to.original:i,l=d.arr(o)?o[0]:v,g=G(l)||G(i),p=f||g;return d.und(s)&&(s=v),a.from=Ge(l,p),a.to=Ge(Fe(s,l),p),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=Pe(a.easing,a.duration),a.isPath=d.pth(o),a.isPathTargetInsideSVG=a.isPath&&d.svg(r.target),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),n=a,a})}var Cr={css:function(e,r,n){return e.style[r]=n},attribute:function(e,r,n){return e.setAttribute(r,n)},object:function(e,r,n){return e[r]=n},transform:function(e,r,n,t,a){if(t.list.set(r,n),r===t.last||a){var o="";t.list.forEach(function(s,f){o+=f+"("+s+") "}),e.style.transform=o}}};function Pr(e,r){var n=Ir(e);n.forEach(function(t){for(var a in r){var o=we(r[a],t),s=t.target,f=G(o),i=Ee(s,a,f,t),v=f||G(i),l=Fe(Tr(o,v),i),g=je(s,a);Cr[g](s,a,l,t.transforms,!0)}})}function aa(e,r){var n=je(e.target,r.name);if(n){var t=ta(r,e),a=t[t.length-1];return{type:n,property:r.name,animatable:e,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}function ia(e,r){return de(ge(e.map(function(n){return r.map(function(t){return aa(n,t)})})),function(n){return!d.und(n)})}function Sr(e,r){var n=e.length,t=function(o){return o.timelineOffset?o.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map(function(o){return t(o)+o.duration})):r.duration,a.delay=n?Math.min.apply(Math,e.map(function(o){return t(o)+o.delay})):r.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map(function(o){return t(o)+o.duration-o.endDelay})):r.endDelay,a}var Ye=0;function oa(e){var r=Me(gr,e),n=Me(Ce,e),t=ra(n,e),a=Ir(e.targets),o=ia(a,t),s=Sr(o,n),f=Ye;return Ye++,ve(r,{id:f,children:[],animatables:a,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var V=[],Ar=function(){var e;function r(){!e&&(!Qe()||!k.suspendWhenDocumentHidden)&&V.length>0&&(e=requestAnimationFrame(n))}function n(a){for(var o=V.length,s=0;s<o;){var f=V[s];f.paused?(V.splice(s,1),o--):(f.tick(a),s++)}e=s>0?requestAnimationFrame(n):void 0}function t(){!k.suspendWhenDocumentHidden||(Qe()?e=cancelAnimationFrame(e):(V.forEach(function(a){return a._onDocumentVisibility()}),Ar()))}return typeof document<"u"&&document.addEventListener("visibilitychange",t),r}();function Qe(){return!!document&&document.hidden}function k(e){e===void 0&&(e={});var r=0,n=0,t=0,a,o=0,s=null;function f(y){var m=window.Promise&&new Promise(function(D){return s=D});return y.finished=m,m}var i=oa(e);f(i);function v(){var y=i.direction;y!=="alternate"&&(i.direction=y!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,a.forEach(function(m){return m.reversed=i.reversed})}function l(y){return i.reversed?i.duration-y:y}function g(){r=0,n=l(i.currentTime)*(1/k.speed)}function p(y,m){m&&m.seek(y-m.timelineOffset)}function b(y){if(i.reversePlayback)for(var D=o;D--;)p(y,a[D]);else for(var m=0;m<o;m++)p(y,a[m])}function T(y){for(var m=0,D=i.animations,W=D.length;m<W;){var O=D[m],H=O.animatable,J=O.tweens,Y=J.length-1,E=J[Y];Y&&(E=de(J,function(N){return y<N.end})[0]||E);for(var _=q(y-E.start-E.delay,0,E.duration)/E.duration,Q=isNaN(_)?1:E.easing(_),$=E.to.strings,c=E.round,u=[],I=E.to.numbers.length,M=void 0,C=0;C<I;C++){var w=void 0,x=E.to.numbers[C],P=E.from.numbers[C]||0;E.isPath?w=Jt(E.value,Q*x,E.isPathTargetInsideSVG):w=P+Q*(x-P),c&&(E.isColor&&C>2||(w=Math.round(w*c)/c)),u.push(w)}var F=$.length;if(!F)M=u[0];else{M=$[0];for(var R=0;R<F;R++){$[R];var L=$[R+1],U=u[R];isNaN(U)||(L?M+=U+L:M+=U+" ")}}Cr[O.type](H.target,O.property,M,H.transforms),O.currentValue=M,m++}}function h(y){i[y]&&!i.passThrough&&i[y](i)}function S(){i.remaining&&i.remaining!==!0&&i.remaining--}function j(y){var m=i.duration,D=i.delay,W=m-i.endDelay,O=l(y);i.progress=q(O/m*100,0,100),i.reversePlayback=O<i.currentTime,a&&b(O),!i.began&&i.currentTime>0&&(i.began=!0,h("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,h("loopBegin")),O<=D&&i.currentTime!==0&&T(0),(O>=W&&i.currentTime!==m||!m)&&T(m),O>D&&O<W?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,h("changeBegin")),h("change"),T(O)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,h("changeComplete")),i.currentTime=q(O,0,m),i.began&&h("update"),y>=m&&(n=0,S(),i.remaining?(r=t,h("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&v()):(i.paused=!0,i.completed||(i.completed=!0,h("loopComplete"),h("complete"),!i.passThrough&&"Promise"in window&&(s(),f(i)))))}return i.reset=function(){var y=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=y==="reverse",i.remaining=i.loop,a=i.children,o=a.length;for(var m=o;m--;)i.children[m].reset();(i.reversed&&i.loop!==!0||y==="alternate"&&i.loop===1)&&i.remaining++,T(i.reversed?i.duration:0)},i._onDocumentVisibility=g,i.set=function(y,m){return Pr(y,m),i},i.tick=function(y){t=y,r||(r=t),j((t+(n-r))*k.speed)},i.seek=function(y){j(l(y))},i.pause=function(){i.paused=!0,g()},i.play=function(){!i.paused||(i.completed&&i.reset(),i.paused=!1,V.push(i),g(),Ar())},i.reverse=function(){v(),i.completed=!i.reversed,g()},i.restart=function(){i.reset(),i.play()},i.remove=function(y){var m=ke(y);Or(m,i)},i.reset(),i.autoplay&&i.play(),i}function Je(e,r){for(var n=r.length;n--;)Se(e,r[n].animatable.target)&&r.splice(n,1)}function Or(e,r){var n=r.animations,t=r.children;Je(e,n);for(var a=t.length;a--;){var o=t[a],s=o.animations;Je(e,s),!s.length&&!o.children.length&&t.splice(a,1)}!n.length&&!t.length&&r.pause()}function ua(e){for(var r=ke(e),n=V.length;n--;){var t=V[n];Or(r,t)}}function sa(e,r){r===void 0&&(r={});var n=r.direction||"normal",t=r.easing?Pe(r.easing):null,a=r.grid,o=r.axis,s=r.from||0,f=s==="first",i=s==="center",v=s==="last",l=d.arr(e),g=parseFloat(l?e[0]:e),p=l?parseFloat(e[1]):0,b=G(l?e[1]:e)||0,T=r.start||0+(l?g:0),h=[],S=0;return function(j,y,m){if(f&&(s=0),i&&(s=(m-1)/2),v&&(s=m-1),!h.length){for(var D=0;D<m;D++){if(!a)h.push(Math.abs(s-D));else{var W=i?(a[0]-1)/2:s%a[0],O=i?(a[1]-1)/2:Math.floor(s/a[0]),H=D%a[0],J=Math.floor(D/a[0]),Y=W-H,E=O-J,_=Math.sqrt(Y*Y+E*E);o==="x"&&(_=-Y),o==="y"&&(_=-E),h.push(_)}S=Math.max.apply(Math,h)}t&&(h=h.map(function($){return t($/S)*S})),n==="reverse"&&(h=h.map(function($){return o?$<0?$*-1:-$:Math.abs(S-$)}))}var Q=l?(p-g)/S:g;return T+Q*(Math.round(h[y]*100)/100)+b}}function ca(e){e===void 0&&(e={});var r=k(e);return r.duration=0,r.add=function(n,t){var a=V.indexOf(r),o=r.children;a>-1&&V.splice(a,1);function s(p){p.passThrough=!0}for(var f=0;f<o.length;f++)s(o[f]);var i=ve(n,Me(Ce,e));i.targets=i.targets||e.targets;var v=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=d.und(t)?v:Fe(t,v),s(r),r.seek(i.timelineOffset);var l=k(i);s(l),o.push(l);var g=Sr(o,e);return r.delay=g.delay,r.endDelay=g.endDelay,r.duration=g.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}k.version="3.2.1";k.speed=1;k.suspendWhenDocumentHidden=!0;k.running=V;k.remove=ua;k.get=Ee;k.set=Pr;k.convertPx=Oe;k.path=Qt;k.setDashoffset=Gt;k.stagger=sa;k.timeline=ca;k.easing=Pe;k.penner=mr;k.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};const fa=()=>{const e=document.querySelector(".ml9 .letters");e.innerHTML=e.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),k.timeline({loop:!1}).add({targets:".ml9 .letter",scale:[0,1],duration:1500,elasticity:600,delay:(r,n)=>45*(n+1)}).add({targets:".ml9",duration:1e3,easing:"easeOutExpo",delay:1e3})},oe=document.querySelector(".bingo p"),la=document.querySelector(".player-cardboard .cardboard"),da=document.querySelector(".cpu-cardboard .cardboard"),jr=document.querySelector(".btnNumber");var Be={};(function e(r,n,t,a){var o=!!(r.Worker&&r.Blob&&r.Promise&&r.OffscreenCanvas&&r.OffscreenCanvasRenderingContext2D&&r.HTMLCanvasElement&&r.HTMLCanvasElement.prototype.transferControlToOffscreen&&r.URL&&r.URL.createObjectURL);function s(){}function f(c){var u=n.exports.Promise,I=u!==void 0?u:r.Promise;return typeof I=="function"?new I(c):(c(s,s),null)}var i=function(){var c=Math.floor(16.666666666666668),u,I,M={},C=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(u=function(w){var x=Math.random();return M[x]=requestAnimationFrame(function P(F){C===F||C+c-1<F?(C=F,delete M[x],w()):M[x]=requestAnimationFrame(P)}),x},I=function(w){M[w]&&cancelAnimationFrame(M[w])}):(u=function(w){return setTimeout(w,c)},I=function(w){return clearTimeout(w)}),{frame:u,cancel:I}}(),v=function(){var c,u,I={};function M(C){function w(x,P){C.postMessage({options:x||{},callback:P})}C.init=function(P){var F=P.transferControlToOffscreen();C.postMessage({canvas:F},[F])},C.fire=function(P,F,R){if(u)return w(P,null),u;var L=Math.random().toString(36).slice(2);return u=f(function(U){function N(B){B.data.callback===L&&(delete I[L],C.removeEventListener("message",N),u=null,R(),U())}C.addEventListener("message",N),w(P,L),I[L]=N.bind(null,{data:{callback:L}})}),u},C.reset=function(){C.postMessage({reset:!0});for(var P in I)I[P](),delete I[P]}}return function(){if(c)return c;if(!t&&o){var C=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{c=new Worker(URL.createObjectURL(new Blob([C])))}catch(w){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",w),null}M(c)}return c}}(),l={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(c,u){return u?u(c):c}function p(c){return c!=null}function b(c,u,I){return g(c&&p(c[u])?c[u]:l[u],I)}function T(c){return c<0?0:Math.floor(c)}function h(c,u){return Math.floor(Math.random()*(u-c))+c}function S(c){return parseInt(c,16)}function j(c){return c.map(y)}function y(c){var u=String(c).replace(/[^0-9a-f]/gi,"");return u.length<6&&(u=u[0]+u[0]+u[1]+u[1]+u[2]+u[2]),{r:S(u.substring(0,2)),g:S(u.substring(2,4)),b:S(u.substring(4,6))}}function m(c){var u=b(c,"origin",Object);return u.x=b(u,"x",Number),u.y=b(u,"y",Number),u}function D(c){c.width=document.documentElement.clientWidth,c.height=document.documentElement.clientHeight}function W(c){var u=c.getBoundingClientRect();c.width=u.width,c.height=u.height}function O(c){var u=document.createElement("canvas");return u.style.position="fixed",u.style.top="0px",u.style.left="0px",u.style.pointerEvents="none",u.style.zIndex=c,u}function H(c,u,I,M,C,w,x,P,F){c.save(),c.translate(u,I),c.rotate(w),c.scale(M,C),c.arc(0,0,1,x,P,F),c.restore()}function J(c){var u=c.angle*(Math.PI/180),I=c.spread*(Math.PI/180);return{x:c.x,y:c.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:c.startVelocity*.5+Math.random()*c.startVelocity,angle2D:-u+(.5*I-Math.random()*I),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:c.gravity*3,ovalScalar:.6,scalar:c.scalar}}function Y(c,u){u.x+=Math.cos(u.angle2D)*u.velocity+u.drift,u.y+=Math.sin(u.angle2D)*u.velocity+u.gravity,u.wobble+=u.wobbleSpeed,u.velocity*=u.decay,u.tiltAngle+=.1,u.tiltSin=Math.sin(u.tiltAngle),u.tiltCos=Math.cos(u.tiltAngle),u.random=Math.random()+2,u.wobbleX=u.x+10*u.scalar*Math.cos(u.wobble),u.wobbleY=u.y+10*u.scalar*Math.sin(u.wobble);var I=u.tick++/u.totalTicks,M=u.x+u.random*u.tiltCos,C=u.y+u.random*u.tiltSin,w=u.wobbleX+u.random*u.tiltCos,x=u.wobbleY+u.random*u.tiltSin;return c.fillStyle="rgba("+u.color.r+", "+u.color.g+", "+u.color.b+", "+(1-I)+")",c.beginPath(),u.shape==="circle"?c.ellipse?c.ellipse(u.x,u.y,Math.abs(w-M)*u.ovalScalar,Math.abs(x-C)*u.ovalScalar,Math.PI/10*u.wobble,0,2*Math.PI):H(c,u.x,u.y,Math.abs(w-M)*u.ovalScalar,Math.abs(x-C)*u.ovalScalar,Math.PI/10*u.wobble,0,2*Math.PI):(c.moveTo(Math.floor(u.x),Math.floor(u.y)),c.lineTo(Math.floor(u.wobbleX),Math.floor(C)),c.lineTo(Math.floor(w),Math.floor(x)),c.lineTo(Math.floor(M),Math.floor(u.wobbleY))),c.closePath(),c.fill(),u.tick<u.totalTicks}function E(c,u,I,M,C){var w=u.slice(),x=c.getContext("2d"),P,F,R=f(function(L){function U(){P=F=null,x.clearRect(0,0,M.width,M.height),C(),L()}function N(){t&&!(M.width===a.width&&M.height===a.height)&&(M.width=c.width=a.width,M.height=c.height=a.height),!M.width&&!M.height&&(I(c),M.width=c.width,M.height=c.height),x.clearRect(0,0,M.width,M.height),w=w.filter(function(B){return Y(x,B)}),w.length?P=i.frame(N):U()}P=i.frame(N),F=U});return{addFettis:function(L){return w=w.concat(L),R},canvas:c,promise:R,reset:function(){P&&i.cancel(P),F&&F()}}}function _(c,u){var I=!c,M=!!b(u||{},"resize"),C=b(u,"disableForReducedMotion",Boolean),w=o&&!!b(u||{},"useWorker"),x=w?v():null,P=I?D:W,F=c&&x?!!c.__confetti_initialized:!1,R=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,L;function U(B,he,me){for(var ee=b(B,"particleCount",T),ae=b(B,"angle",Number),ie=b(B,"spread",Number),X=b(B,"startVelocity",Number),Er=b(B,"decay",Number),Fr=b(B,"gravity",Number),Lr=b(B,"drift",Number),De=b(B,"colors",j),kr=b(B,"ticks",Number),$e=b(B,"shapes"),Br=b(B,"scalar"),Re=m(B),Ne=ee,ye=[],Dr=c.width*Re.x,$r=c.height*Re.y;Ne--;)ye.push(J({x:Dr,y:$r,angle:ae,spread:ie,startVelocity:X,color:De[Ne%De.length],shape:$e[h(0,$e.length)],ticks:kr,decay:Er,gravity:Fr,drift:Lr,scalar:Br}));return L?L.addFettis(ye):(L=E(c,ye,P,he,me),L.promise)}function N(B){var he=C||b(B,"disableForReducedMotion",Boolean),me=b(B,"zIndex",Number);if(he&&R)return f(function(X){X()});I&&L?c=L.canvas:I&&!c&&(c=O(me),document.body.appendChild(c)),M&&!F&&P(c);var ee={width:c.width,height:c.height};x&&!F&&x.init(c),F=!0,x&&(c.__confetti_initialized=!0);function ae(){if(x){var X={getBoundingClientRect:function(){if(!I)return c.getBoundingClientRect()}};P(X),x.postMessage({resize:{width:X.width,height:X.height}});return}ee.width=ee.height=null}function ie(){L=null,M&&r.removeEventListener("resize",ae),I&&c&&(document.body.removeChild(c),c=null,F=!1)}return M&&r.addEventListener("resize",ae,!1),x?x.fire(B,ee,ie):U(B,ee,ie)}return N.reset=function(){x&&x.reset(),L&&L.reset()},N}var Q;function $(){return Q||(Q=_(null,{useWorker:!0,resize:!0})),Q}n.exports=function(){return $().apply(this,arguments)},n.exports.reset=function(){$().reset()},n.exports.create=_})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Be,!1);const ga=Be.exports;Be.exports.create;const va=(e,r,n)=>{const t=e.every(o=>o==="X"),a=r.every(o=>o==="X");t&&a?(oe.textContent="\xA1Draw! \u{1F6AB}",n.disabled=!0):t?(oe.textContent="\xA1Player Wins! \u{1F389}",ga({particleCount:100,spread:160}),n.disabled=!0):a&&(oe.textContent="\xA1CPU Wins! \u{1F614}",n.disabled=!0)},ha=()=>{let e=xe(1,91);return e=Ie(e),e},ma=ha(),Xe=(e,r)=>{const n=e.indexOf(r);e[n]="X"},ya=(e,r)=>{const n=ma.pop(),t=document.querySelector(".history"),a=document.querySelectorAll(`.number${n}`),o=e.includes(n),s=r.includes(n);(o||s)&&(a.forEach(i=>i.classList.add("strikethrough")),o&&Xe(e,n),s&&Xe(r,n)),oe.textContent=n;const f=document.createElement("div");f.classList.add("history-number"),f.textContent=n,t.append(f),va(e,r,jr)},er=Ie(xe(1,91)).slice(0,15),rr=Ie(xe(1,91)).slice(0,15),pa=()=>{fa(),Bt(la,er),kt(da,rr),jr.addEventListener("click",()=>ya(er,rr))};pa()});export default ba();