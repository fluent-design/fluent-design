(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{3166:function(bt,rt,p){bt.exports={avatar:p(3843),basic:p(3844),"crop-image":p(3845),"customize-progress-bar":p(3846),defaultFileList:p(3847),directory:p(3848),"drag-sorting":p(3849),drag:p(3850),"file-type":p(3851),fileList:p(3852),"picture-card":p(3853),"picture-style":p(3854),"preview-file":p(3855),"transform-file":p(3856),"upload-custom-action-icon":p(3857),"upload-manually":p(3858),"upload-png-only":p(3859),"upload-with-aliyun-oss":p(3860)}},3862:function(bt,rt,p){"use strict";p.r(rt);var Xt=p(94),K=p.n(Xt),Ct=p(175),Et=p(99),Bt=p(463),f=p(0),v=p.n(f),Yt=p(9),d=p.n(Yt);/*! *****************************************************************************
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
***************************************************************************** */var at=function(o,n){return at=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])},at(o,n)};function Jt(o,n){at(o,n);function t(){this.constructor=o}o.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var E=function(){return E=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},E.apply(this,arguments)};function Ee(o,n){var t={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&n.indexOf(e)<0&&(t[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(o);a<e.length;a++)n.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(t[e[a]]=o[e[a]]);return t}function we(o,n,t,e){var a=arguments.length,r=a<3?n:e===null?e=Object.getOwnPropertyDescriptor(n,t):e,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,n,t,e);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(r=(a<3?i(r):a>3?i(n,t,r):i(n,t))||r);return a>3&&r&&Object.defineProperty(n,t,r),r}function Re(o,n){return function(t,e){n(t,e,o)}}function Se(o,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,n)}function xe(o,n,t,e){function a(r){return r instanceof t?r:new t(function(i){i(r)})}return new(t||(t=Promise))(function(r,i){function s(u){try{l(e.next(u))}catch(y){i(y)}}function c(u){try{l(e.throw(u))}catch(y){i(y)}}function l(u){u.done?r(u.value):a(u.value).then(s,c)}l((e=e.apply(o,n||[])).next())})}function Oe(o,n){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},e,a,r,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(l){return function(u){return c([l,u])}}function c(l){if(e)throw new TypeError("Generator is already executing.");for(;t;)try{if(e=1,a&&(r=l[0]&2?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;(a=0,r)&&(l=[l[0]&2,r.value]);switch(l[0]){case 0:case 1:r=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,a=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(!(r=t.trys,r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){t.label=l[1];break}if(l[0]===6&&t.label<r[1]){t.label=r[1],r=l;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(l);break}r[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(o,t)}catch(u){l=[6,u],a=0}finally{e=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var wt=Object.create?function(o,n,t,e){e===void 0&&(e=t),Object.defineProperty(o,e,{enumerable:!0,get:function(){return n[t]}})}:function(o,n,t,e){e===void 0&&(e=t),o[e]=n[t]};function Pe(o,n){for(var t in o)t!=="default"&&!Object.prototype.hasOwnProperty.call(n,t)&&wt(n,o,t)}function Rt(o){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&o[n],e=0;if(t)return t.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&e>=o.length&&(o=void 0),{value:o&&o[e++],done:!o}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function $t(o,n){var t=typeof Symbol=="function"&&o[Symbol.iterator];if(!t)return o;var e=t.call(o),a,r=[],i;try{for(;(n===void 0||n-- >0)&&!(a=e.next()).done;)r.push(a.value)}catch(s){i={error:s}}finally{try{a&&!a.done&&(t=e.return)&&t.call(e)}finally{if(i)throw i.error}}return r}function _e(){for(var o=[],n=0;n<arguments.length;n++)o=o.concat($t(arguments[n]));return o}function Te(){for(var o=0,n=0,t=arguments.length;n<t;n++)o+=arguments[n].length;for(var e=Array(o),a=0,n=0;n<t;n++)for(var r=arguments[n],i=0,s=r.length;i<s;i++,a++)e[a]=r[i];return e}function k(o){return this instanceof k?(this.v=o,this):new k(o)}function Ae(o,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t.apply(o,n||[]),a,r=[];return a={},i("next"),i("throw"),i("return"),a[Symbol.asyncIterator]=function(){return this},a;function i(h){e[h]&&(a[h]=function(b){return new Promise(function(P,R){r.push([h,b,P,R])>1||s(h,b)})})}function s(h,b){try{c(e[h](b))}catch(P){y(r[0][3],P)}}function c(h){h.value instanceof k?Promise.resolve(h.value.v).then(l,u):y(r[0][2],h)}function l(h){s("next",h)}function u(h){s("throw",h)}function y(h,b){(h(b),r.shift(),r.length)&&s(r[0][0],r[0][1])}}function Me(o){var n,t;return n={},e("next"),e("throw",function(a){throw a}),e("return"),n[Symbol.iterator]=function(){return this},n;function e(a,r){n[a]=o[a]?function(i){return(t=!t)?{value:k(o[a](i)),done:a==="return"}:r?r(i):i}:r}}function Le(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=o[Symbol.asyncIterator],t;return n?n.call(o):(o=typeof Rt=="function"?Rt(o):o[Symbol.iterator](),t={},e("next"),e("throw"),e("return"),t[Symbol.asyncIterator]=function(){return this},t);function e(r){t[r]=o[r]&&function(i){return new Promise(function(s,c){i=o[r](i),a(s,c,i.done,i.value)})}}function a(r,i,s,c){Promise.resolve(c).then(function(l){r({value:l,done:s})},i)}}function De(o,n){return Object.defineProperty?Object.defineProperty(o,"raw",{value:n}):o.raw=n,o}var Qt=Object.create?function(o,n){Object.defineProperty(o,"default",{enumerable:!0,value:n})}:function(o,n){o.default=n};function je(o){if(o&&o.__esModule)return o;var n={};if(o!=null)for(var t in o)t!=="default"&&Object.prototype.hasOwnProperty.call(o,t)&&wt(n,o,t);return Qt(n,o),n}function Ie(o){return o&&o.__esModule?o:{default:o}}function Ne(o,n){if(!n.has(o))throw new TypeError("attempted to get private field on non-instance");return n.get(o)}function ze(o,n,t){if(!n.has(o))throw new TypeError("attempted to set private field on non-instance");return n.set(o,t),t}function Kt(o,n,t,e,a,r){r===void 0&&(r=0);var i=_t(o,n,r),s=i.width,c=i.height,l=Math.min(s,t),u=Math.min(c,e);return l>u*a?{width:u*a,height:u}:{width:l,height:l/a}}function q(o,n,t,e,a){a===void 0&&(a=0);var r=_t(n.width,n.height,a),i=r.width,s=r.height;return{x:St(o.x,i,t.width,e),y:St(o.y,s,t.height,e)}}function St(o,n,t,e){var a=n*e/2-t/2;return Math.min(a,Math.max(o,-a))}function xt(o,n){return Math.sqrt(Math.pow(o.y-n.y,2)+Math.pow(o.x-n.x,2))}function Ot(o,n){return Math.atan2(n.y-o.y,n.x-o.x)*180/Math.PI}function kt(o,n,t,e,a,r,i){r===void 0&&(r=0),i===void 0&&(i=!0);var s=i&&r===0?qt:te,c={x:s(100,((n.width-t.width/a)/2-o.x/a)/n.width*100),y:s(100,((n.height-t.height/a)/2-o.y/a)/n.height*100),width:s(100,t.width/n.width*100/a),height:s(100,t.height/n.height*100/a)},l=Math.round(s(n.naturalWidth,c.width*n.naturalWidth/100)),u=Math.round(s(n.naturalHeight,c.height*n.naturalHeight/100)),y=n.naturalWidth>=n.naturalHeight*e,h=y?{width:Math.round(u*e),height:u}:{width:l,height:Math.round(l/e)},b=E(E({},h),{x:Math.round(s(n.naturalWidth-h.width,c.x*n.naturalWidth/100)),y:Math.round(s(n.naturalHeight-h.height,c.y*n.naturalHeight/100))});return{croppedAreaPercentages:c,croppedAreaPixels:b}}function qt(o,n){return Math.min(o,Math.max(0,n))}function te(o,n){return n}function ee(o,n,t){var e=n.width/n.naturalWidth;if(t){var a=t.height>t.width;return a?t.height/e/o.height:t.width/e/o.width}var r=o.width/o.height,i=n.naturalWidth>=n.naturalHeight*r;return i?n.naturalHeight/o.height:n.naturalWidth/o.width}function oe(o,n,t){var e=n.width/n.naturalWidth,a=ee(o,n,t),r=e*a,i={x:((n.naturalWidth-o.width)/2-o.x)*r,y:((n.naturalHeight-o.height)/2-o.y)*r};return{crop:i,zoom:a}}function Pt(o,n){return{x:(n.x+o.x)/2,y:(n.y+o.y)/2}}function tt(o,n,t,e,a){var r=Math.cos,i=Math.sin,s=a*Math.PI/180,c=(o-t)*r(s)-(n-e)*i(s)+t,l=(o-t)*i(s)+(n-e)*r(s)+e;return[c,l]}function _t(o,n,t){var e=o/2,a=n/2,r=[tt(0,0,e,a,t),tt(o,0,e,a,t),tt(o,n,e,a,t),tt(0,n,e,a,t)],i=Math.min.apply(Math,r.map(function(u){return u[0]})),s=Math.max.apply(Math,r.map(function(u){return u[0]})),c=Math.min.apply(Math,r.map(function(u){return u[1]})),l=Math.max.apply(Math,r.map(function(u){return u[1]}));return{width:s-i,height:l-c}}function et(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];return o.filter(function(t){return typeof t=="string"&&t.length>0}).join(" ").trim()}var ne=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,re=1,ae=3,ie=function(o){Jt(n,o);function n(){var t=o!==null&&o.apply(this,arguments)||this;return t.imageRef=null,t.videoRef=null,t.containerRef=null,t.styleRef=null,t.containerRect=null,t.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},t.dragStartPosition={x:0,y:0},t.dragStartCrop={x:0,y:0},t.lastPinchDistance=0,t.lastPinchRotation=0,t.rafDragTimeout=null,t.rafPinchTimeout=null,t.wheelTimer=null,t.state={cropSize:null,hasWheelJustStarted:!1},t.preventZoomSafari=function(e){return e.preventDefault()},t.cleanEvents=function(){document.removeEventListener("mousemove",t.onMouseMove),document.removeEventListener("mouseup",t.onDragStopped),document.removeEventListener("touchmove",t.onTouchMove),document.removeEventListener("touchend",t.onDragStopped)},t.clearScrollEvent=function(){t.containerRef&&t.containerRef.removeEventListener("wheel",t.onWheel),t.wheelTimer&&clearTimeout(t.wheelTimer)},t.onMediaLoad=function(){t.computeSizes(),t.emitCropData(),t.setInitialCrop(),t.props.onMediaLoaded&&t.props.onMediaLoaded(t.mediaSize)},t.setInitialCrop=function(){var e=t.props,a=e.initialCroppedAreaPixels,r=e.cropSize;if(!a)return;var i=oe(a,t.mediaSize,r),s=i.crop,c=i.zoom;t.props.onCropChange(s),t.props.onZoomChange&&t.props.onZoomChange(c)},t.computeSizes=function(){var e,a,r,i,s,c,l=t.imageRef||t.videoRef;if(l&&t.containerRef){t.containerRect=t.containerRef.getBoundingClientRect(),t.mediaSize={width:l.offsetWidth,height:l.offsetHeight,naturalWidth:((e=t.imageRef)===null||e===void 0?void 0:e.naturalWidth)||((a=t.videoRef)===null||a===void 0?void 0:a.videoWidth)||0,naturalHeight:((r=t.imageRef)===null||r===void 0?void 0:r.naturalHeight)||((i=t.videoRef)===null||i===void 0?void 0:i.videoHeight)||0};var u=t.props.cropSize?t.props.cropSize:Kt(l.offsetWidth,l.offsetHeight,t.containerRect.width,t.containerRect.height,t.props.aspect,t.props.rotation);(((s=t.state.cropSize)===null||s===void 0?void 0:s.height)!==u.height||((c=t.state.cropSize)===null||c===void 0?void 0:c.width)!==u.width)&&(t.props.onCropSizeChange&&t.props.onCropSizeChange(u)),t.setState({cropSize:u},t.recomputeCropPosition)}},t.onMouseDown=function(e){e.preventDefault(),document.addEventListener("mousemove",t.onMouseMove),document.addEventListener("mouseup",t.onDragStopped),t.onDragStart(n.getMousePoint(e))},t.onMouseMove=function(e){return t.onDrag(n.getMousePoint(e))},t.onTouchStart=function(e){e.preventDefault(),document.addEventListener("touchmove",t.onTouchMove,{passive:!1}),document.addEventListener("touchend",t.onDragStopped),e.touches.length===2?t.onPinchStart(e):e.touches.length===1&&t.onDragStart(n.getTouchPoint(e.touches[0]))},t.onTouchMove=function(e){e.preventDefault(),e.touches.length===2?t.onPinchMove(e):e.touches.length===1&&t.onDrag(n.getTouchPoint(e.touches[0]))},t.onDragStart=function(e){var a,r,i=e.x,s=e.y;t.dragStartPosition={x:i,y:s},t.dragStartCrop=E({},t.props.crop),(r=(a=t.props).onInteractionStart)===null||r===void 0||r.call(a)},t.onDrag=function(e){var a=e.x,r=e.y;t.rafDragTimeout&&window.cancelAnimationFrame(t.rafDragTimeout),t.rafDragTimeout=window.requestAnimationFrame(function(){if(!t.state.cropSize)return;if(a===void 0||r===void 0)return;var i=a-t.dragStartPosition.x,s=r-t.dragStartPosition.y,c={x:t.dragStartCrop.x+i,y:t.dragStartCrop.y+s},l=t.props.restrictPosition?q(c,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):c;t.props.onCropChange(l)})},t.onDragStopped=function(){var e,a;t.cleanEvents(),t.emitCropData(),(a=(e=t.props).onInteractionEnd)===null||a===void 0||a.call(e)},t.onWheel=function(e){e.preventDefault();var a=n.getMousePoint(e),r=t.props.zoom-e.deltaY*t.props.zoomSpeed/200;t.setNewZoom(r,a),t.state.hasWheelJustStarted||t.setState({hasWheelJustStarted:!0},function(){var i,s;return(s=(i=t.props).onInteractionStart)===null||s===void 0?void 0:s.call(i)}),t.wheelTimer&&clearTimeout(t.wheelTimer),t.wheelTimer=window.setTimeout(function(){return t.setState({hasWheelJustStarted:!1},function(){var i,s;return(s=(i=t.props).onInteractionEnd)===null||s===void 0?void 0:s.call(i)})},250)},t.getPointOnContainer=function(e){var a=e.x,r=e.y;if(!t.containerRect)throw new Error("The Cropper is not mounted");return{x:t.containerRect.width/2-(a-t.containerRect.left),y:t.containerRect.height/2-(r-t.containerRect.top)}},t.getPointOnMedia=function(e){var a=e.x,r=e.y,i=t.props,s=i.crop,c=i.zoom;return{x:(a+s.x)/c,y:(r+s.y)/c}},t.setNewZoom=function(e,a){if(!t.state.cropSize||!t.props.onZoomChange)return;var r=t.getPointOnContainer(a),i=t.getPointOnMedia(r),s=Math.min(t.props.maxZoom,Math.max(e,t.props.minZoom)),c={x:i.x*s-r.x,y:i.y*s-r.y},l=t.props.restrictPosition?q(c,t.mediaSize,t.state.cropSize,s,t.props.rotation):c;t.props.onCropChange(l),t.props.onZoomChange(s)},t.getCropData=function(){if(!t.state.cropSize)return null;var e=t.props.restrictPosition?q(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;return kt(e,t.mediaSize,t.state.cropSize,t.getAspect(),t.props.zoom,t.props.rotation,t.props.restrictPosition)},t.emitCropData=function(){var e=t.getCropData();if(!e)return;var a=e.croppedAreaPercentages,r=e.croppedAreaPixels;t.props.onCropComplete&&t.props.onCropComplete(a,r),t.props.onCropAreaChange&&t.props.onCropAreaChange(a,r)},t.emitCropAreaChange=function(){var e=t.getCropData();if(!e)return;var a=e.croppedAreaPercentages,r=e.croppedAreaPixels;t.props.onCropAreaChange&&t.props.onCropAreaChange(a,r)},t.recomputeCropPosition=function(){if(!t.state.cropSize)return;var e=t.props.restrictPosition?q(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;t.props.onCropChange(e),t.emitCropData()},t}return n.prototype.componentDidMount=function(){window.addEventListener("resize",this.computeSizes),this.containerRef&&(this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.preventZoomSafari),this.containerRef.addEventListener("gesturechange",this.preventZoomSafari)),this.props.disableAutomaticStylesInjection||(this.styleRef=document.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.styleRef.innerHTML=ne,document.head.appendChild(this.styleRef)),this.imageRef&&this.imageRef.complete&&this.onMediaLoad()},n.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.computeSizes),this.containerRef&&(this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.containerRef.removeEventListener("gesturechange",this.preventZoomSafari)),this.styleRef&&this.styleRef.remove(),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()},n.prototype.componentDidUpdate=function(t){var e,a,r,i,s,c,l,u;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():((e=t.cropSize)===null||e===void 0?void 0:e.height)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.height)||((r=t.cropSize)===null||r===void 0?void 0:r.width)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.width)?this.computeSizes():(((s=t.crop)===null||s===void 0?void 0:s.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((l=t.crop)===null||l===void 0?void 0:l.y)!==((u=this.props.crop)===null||u===void 0?void 0:u.y))&&this.emitCropAreaChange(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent())},n.prototype.getAspect=function(){var t=this.props,e=t.cropSize,a=t.aspect;return e?e.width/e.height:a},n.prototype.onPinchStart=function(t){var e=n.getTouchPoint(t.touches[0]),a=n.getTouchPoint(t.touches[1]);this.lastPinchDistance=xt(e,a),this.lastPinchRotation=Ot(e,a),this.onDragStart(Pt(e,a))},n.prototype.onPinchMove=function(t){var e=this,a=n.getTouchPoint(t.touches[0]),r=n.getTouchPoint(t.touches[1]),i=Pt(a,r);this.onDrag(i),this.rafPinchTimeout&&window.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=window.requestAnimationFrame(function(){var s=xt(a,r),c=e.props.zoom*(s/e.lastPinchDistance);e.setNewZoom(c,i),e.lastPinchDistance=s;var l=Ot(a,r),u=e.props.rotation+(l-e.lastPinchRotation);e.props.onRotationChange&&e.props.onRotationChange(u),e.lastPinchRotation=l})},n.prototype.render=function(){var t=this,e=this.props,a=e.image,r=e.video,i=e.mediaProps,s=e.transform,c=e.crop,l=c.x,u=c.y,y=e.rotation,h=e.zoom,b=e.cropShape,P=e.showGrid,R=e.style,M=R.containerStyle,G=R.cropAreaStyle,L=R.mediaStyle,T=e.classes,N=T.containerClassName,Z=T.cropAreaClassName,z=T.mediaClassName;return v.a.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(m){return t.containerRef=m},"data-testid":"container",style:M,className:et("reactEasyCrop_Container",N)},a?v.a.createElement("img",E({alt:"",className:et("reactEasyCrop_Image",z)},i,{src:a,ref:function(m){return t.imageRef=m},style:E(E({},L),{transform:s||"translate("+l+"px, "+u+"px) rotate("+y+"deg) scale("+h+")"}),onLoad:this.onMediaLoad})):r&&v.a.createElement("video",E({autoPlay:!0,loop:!0,muted:!0,className:et("reactEasyCrop_Video",z)},i,{src:r,ref:function(m){return t.videoRef=m},onLoadedMetadata:this.onMediaLoad,style:E(E({},L),{transform:s||"translate("+l+"px, "+u+"px) rotate("+y+"deg) scale("+h+")"}),controls:!1})),this.state.cropSize&&v.a.createElement("div",{style:E(E({},G),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:et("reactEasyCrop_CropArea",b==="round"&&"reactEasyCrop_CropAreaRound",P&&"reactEasyCrop_CropAreaGrid",Z)}))},n.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:ae,minZoom:re,cropShape:"rect",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},n.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},n.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},n}(v.a.Component),se=ie,le=p(35),ce=p(357),Tt=p(464);function ue(o){if(!o)return;if(typeof window=="undefined")return;var n=document.createElement("style");return n.setAttribute("media","screen"),n.innerHTML=o,document.head.appendChild(n),o}ue(`.antd-img-crop-modal .ant-modal-body {
  padding-bottom: 16px;
}
.antd-img-crop-modal .antd-img-crop-container {
  position: relative;
  width: 100%;
  height: 40vh;
  margin-bottom: 16px;
}
.antd-img-crop-modal .antd-img-crop-control {
  display: flex;
  align-items: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.antd-img-crop-modal .antd-img-crop-control button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  font-style: normal;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}
.antd-img-crop-modal .antd-img-crop-control button[disabled] {
  cursor: default;
}
.antd-img-crop-modal .antd-img-crop-control.zoom button {
  font-size: 18px;
}
.antd-img-crop-modal .antd-img-crop-control.rotate button {
  font-size: 16px;
}
.antd-img-crop-modal .antd-img-crop-control.rotate button:first-of-type {
  transform: rotate(-20deg);
}
.antd-img-crop-modal .antd-img-crop-control.rotate button:last-of-type {
  transform: rotate(20deg);
}
.antd-img-crop-modal .antd-img-crop-control .ant-slider {
  flex: 1;
  margin: 0 8px;
}
`);var F="antd-img-crop",At=function(){},Mt=F+"-media",V=.1,Lt=0,Dt=360,it=1,jt=Object(f.forwardRef)(function(o,n){var t=o.src,e=o.aspect,a=o.shape,r=o.grid,i=o.hasZoom,s=o.zoomVal,c=o.rotateVal,l=o.setZoomVal,u=o.setRotateVal,y=o.minZoom,h=o.maxZoom,b=o.onComplete,P=o.cropperProps,R=Object(f.useState)({x:0,y:0}),M=R[0],G=R[1],L=Object(f.useState)({width:0,height:0}),T=L[0],N=L[1],Z=Object(f.useCallback)(function(A,m){b(m)},[b]),z=Object(f.useCallback)(function(A){var m=A.width,D=A.height,X=D*e;m>X?N({width:X,height:D}):N({width:m,height:m/e})},[e]);return v.a.createElement(se,Object.assign({},P,{ref:n,image:t,crop:M,cropSize:T,onCropChange:G,aspect:e,cropShape:a,showGrid:r,zoomWithScroll:i,zoom:s,rotation:c,onZoomChange:l,onRotationChange:u,minZoom:y,maxZoom:h,onCropComplete:Z,onMediaLoaded:z,classes:{containerClassName:F+"-container",mediaClassName:Mt}}))});jt.propTypes={src:d.a.string,aspect:d.a.number,shape:d.a.string,grid:d.a.bool,hasZoom:d.a.bool,zoomVal:d.a.number,rotateVal:d.a.number,setZoomVal:d.a.func,setRotateVal:d.a.func,minZoom:d.a.number,maxZoom:d.a.number,onComplete:d.a.func,cropperProps:d.a.object};var st=Object(f.forwardRef)(function(o,n){var t=o.aspect,e=o.shape,a=o.grid,r=o.quality,i=o.zoom,s=o.rotate,c=o.minZoom,l=o.maxZoom,u=o.fillColor,y=o.modalTitle,h=o.modalWidth,b=o.modalOk,P=o.modalCancel,R=o.beforeCrop,M=o.children,G=o.cropperProps,L=i===!0,T=s===!0,N=Object(f.useState)(""),Z=N[0],z=N[1],A=Object(f.useState)(1),m=A[0],D=A[1],X=Object(f.useState)(0),S=X[0],B=X[1],lt=Object(f.useRef)(),It=Object(f.useRef)(),ot=Object(f.useRef)(At),ct=Object(f.useRef)(At),Nt=Object(f.useRef)(),pe=Object(f.useCallback)(function(){var w=Array.isArray(M)?M[0]:M,C=w.props,Y=C.beforeUpload,J=C.accept,O=Object(Bt.a)(C,["beforeUpload","accept"]);return lt.current=Y,Object(Et.a)({},w,{props:Object(Et.a)({},O,{accept:J||"image/*",beforeUpload:function(x,U){return new Promise(function($,W){if(R&&!R(x,U)){W();return}It.current=x,ot.current=$,ct.current=W;var H=new FileReader;H.addEventListener("load",function(){z(H.result)}),H.readAsDataURL(x)})}})})},[R,M]),de=Object(f.useCallback)(function(w){Nt.current=w},[]),ut=m-V<c,pt=m+V>l,dt=S===Lt,ht=S===Dt,he=Object(f.useCallback)(function(){ut||D(m-V)},[ut,m]),fe=Object(f.useCallback)(function(){pt||D(m+V)},[pt,m]),me=Object(f.useCallback)(function(){dt||B(S-it)},[dt,S]),ge=Object(f.useCallback)(function(){ht||B(S+it)},[ht,S]),ve=Object(f.useMemo)(function(){var w={width:h,okText:b,cancelText:P};return Object.keys(w).forEach(function(C){w[C]||delete w[C]}),w},[P,b,h]),ft=Object(f.useCallback)(function(){z(""),D(1),B(0)},[]),ye=Object(f.useCallback)(Object(Ct.a)(K.a.mark(function w(){var C,Y,J,O,_,x,U,$,W,H,Q,Ut,Zt,Wt,Ht,nt,mt,Ft,Vt;return K.a.wrap(function(gt){for(;;)switch(gt.prev=gt.next){case 0:ft(),C=document.querySelector("."+Mt),Y=C.naturalWidth,J=C.naturalHeight,O=document.createElement("canvas"),_=O.getContext("2d"),x=Math.sqrt(Math.pow(Y,2)+Math.pow(J,2)),O.width=x,O.height=x,T&&S>0&&S<360&&(U=x/2,_.translate(U,U),_.rotate(S*Math.PI/180),_.translate(-U,-U)),_.fillStyle=u,_.fillRect(0,0,O.width,O.height),$=(x-Y)/2,W=(x-J)/2,_.drawImage(C,$,W),H=_.getImageData(0,0,x,x),Q=Nt.current,Ut=Q.width,Zt=Q.height,Wt=Q.x,Ht=Q.y,O.width=Ut,O.height=Zt,_.putImageData(H,Math.round(-$-Wt),Math.round(-W-Ht)),nt=It.current,mt=nt.type,Ft=nt.name,Vt=nt.uid,O.toBlob(function(){var be=Object(Ct.a)(K.a.mark(function Gt(Ce){var j,I,vt,yt;return K.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(j=new File([Ce],Ft,{type:mt}),j.uid=Vt,!(typeof lt.current!="function")){g.next=4;break}return g.abrupt("return",ot.current(j));case 4:if(I=lt.current(j,[j]),!(typeof I!="boolean"&&!I)){g.next=8;break}return console.error("beforeUpload must return a boolean or Promise"),g.abrupt("return");case 8:if(!(I===!0)){g.next=10;break}return g.abrupt("return",ot.current(j));case 10:if(!(I===!1)){g.next=12;break}return g.abrupt("return",ct.current("not upload"));case 12:if(!(I&&typeof I.then=="function")){g.next=25;break}return g.prev=13,g.next=16,I;case 16:vt=g.sent,yt=Object.prototype.toString.call(vt),(yt==="[object File]"||yt==="[object Blob]")&&(j=vt),ot.current(j),g.next=25;break;case 22:g.prev=22,g.t0=g.catch(13),ct.current(g.t0);case 25:case"end":return g.stop()}},Gt,null,[[13,22]])}));return function(Gt){return be.apply(this,arguments)}}(),mt,r);case 21:case"end":return gt.stop()}},w)})),[T,ft,r,S]),zt=function(C){return v.a.createElement(v.a.Fragment,null,pe(),Z&&v.a.createElement(ce.default,Object.assign({visible:!0,wrapClassName:F+"-modal",title:C,onOk:ye,onCancel:ft,maskClosable:!1,destroyOnClose:!0},ve),v.a.createElement(jt,{ref:n,src:Z,aspect:t,shape:e,grid:a,hasZoom:L,zoomVal:m,rotateVal:S,setZoomVal:D,setRotateVal:B,minZoom:c,maxZoom:l,onComplete:de,cropperProps:G}),L&&v.a.createElement("div",{className:F+"-control zoom"},v.a.createElement("button",{onClick:he,disabled:ut},"\uFF0D"),v.a.createElement(Tt.a,{min:c,max:l,step:V,value:m,onChange:D}),v.a.createElement("button",{onClick:fe,disabled:pt},"\uFF0B")),T&&v.a.createElement("div",{className:F+"-control rotate"},v.a.createElement("button",{onClick:me,disabled:dt},"\u21BA"),v.a.createElement(Tt.a,{min:Lt,max:Dt,step:it,value:S,onChange:B}),v.a.createElement("button",{onClick:ge,disabled:ht},"\u21BB"))))};return y?zt(y):v.a.createElement(le.a,null,function(w,C){return zt(C==="zh-cn"?"\u7F16\u8F91\u56FE\u7247":"Edit image")})});st.propTypes={aspect:d.a.number,shape:d.a.oneOf(["rect","round"]),grid:d.a.bool,quality:d.a.number,zoom:d.a.bool,rotate:d.a.bool,minZoom:d.a.number,maxZoom:d.a.number,fillColor:d.a.string,modalTitle:d.a.string,modalWidth:d.a.oneOfType([d.a.number,d.a.string]),modalOk:d.a.string,modalCancel:d.a.string,beforeCrop:d.a.func,cropperProps:d.a.object,children:d.a.node},st.defaultProps={aspect:1,shape:"rect",grid:!1,quality:.4,zoom:!0,rotate:!1,minZoom:1,maxZoom:3,fillColor:"white"};var Ue=rt.default=st}}]);
