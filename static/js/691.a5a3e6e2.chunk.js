/*! For license information please see 691.a5a3e6e2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies_v2=self.webpackChunkgoit_react_hw_05_movies_v2||[]).push([[691],{368:function(t,r,e){e(791);var n=e(689),o=e(87),i=e(424),a=e(184);r.Z=function(t){var r=t.movies,e=(0,n.TH)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.aV,{children:r.map((function(t){return(0,a.jsx)(i.H2,{children:(0,a.jsxs)(o.rU,{to:"/movies/".concat(t.id),state:{from:e},children:[(0,a.jsx)(i.n7,{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:t.title}),(0,a.jsx)("div",{children:(0,a.jsx)(i.rS,{children:t.title})})]})},t.id)}))})})}},424:function(t,r,e){e.d(r,{Dx:function(){return l},H2:function(){return f},aV:function(){return s},n7:function(){return p},rS:function(){return v}});var n,o,i,a,c,u=e(168),h=e(867),l=h.ZP.h2(n||(n=(0,u.Z)(["\n  margin-left: 15px;\n  font-size: 24px;\n  font-weight: 700;\n"]))),s=h.ZP.ul(o||(o=(0,u.Z)(["\npadding-left: 10px;\n  list-style: none;\n  display: flex;\n  /* flex-direction: column; */\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 16px;\n\n  & a:hover {\n    color: #ff6d00;\n  }\n"]))),f=h.ZP.li(i||(i=(0,u.Z)(["\nwidth: 200px;\ntext-align: center;\n:hover {\n  font-weight: 600;\n  }\n"]))),p=h.ZP.img(a||(a=(0,u.Z)(["\n  width: 100%;\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n  transform: scale(1.02);\n  cursor: zoom-in;\n  }\n\n"]))),v=h.ZP.h2(c||(c=(0,u.Z)(["\ndisplay: inline;\noverflow-wrap: break-word;\nfont-size: 18px;\nfont-weight: 400;\n"])))},691:function(t,r,e){e.r(r),e.d(r,{default:function(){return w}});var n,o,i,a=e(861),c=e(439),u=e(368),h=e(791),l=e(87),s=e(273),f=e(168),p=e(867),v=p.ZP.div(n||(n=(0,f.Z)(["\n  margin-left: 10px;\n  margin-top: 10px;\n"]))),y=p.ZP.button(o||(o=(0,f.Z)(["\nmargin-left: 15px;\n  height: 36px;\n  width: 100px;\n  color: #032541;\n  border-radius: 4px;\n  transition: all 250ms linear;\n  border: 1px solid #032541;\n  cursor: pointer;\n  transition: linear 300ms;\n  &:hover {\n    color: white;\n    background-color: #032541;\n  }\n  &:active {\n      scale: 0.85;\n    }\n"]))),d=p.ZP.input(i||(i=(0,f.Z)(["\nheight: 32px;\nwidth: 210;\npadding-left: 10px;\nborder-radius: 4px;\nborder: 1px solid #032541;\n"]))),g=e(184);function m(){m=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:O(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var f="suspendedStart",p="executing",v="completed",y={};function d(){}function g(){}function w(){}var x={};h(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==e&&n.call(L,a)&&(x=L);var E=w.prototype=d.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function O(r,e,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var h=s(r,e,n);if("normal"===h.type){if(o=n.done?v:"suspendedYield",h.arg===y)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(o=v,n.method="throw",n.arg=h.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=s(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=h(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),h(E,u,"Generator"),h(E,a,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var w=function(){var t=(0,h.useState)([]),r=(0,c.Z)(t,2),e=r[0],n=r[1],o=(0,h.useState)([]),i=(0,c.Z)(o,2),f=i[0],p=i[1],w=(0,l.lr)(),x=(0,c.Z)(w,2),b=x[0],L=x[1],E=b.get("query");(0,h.useEffect)((function(){E&&(n(E),j(E))}),[E]);var j=function(){var t=(0,a.Z)(m().mark((function t(r){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.v)("/search/movie?query=".concat(r));case 3:e=t.sent,p(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}();return(0,g.jsxs)(v,{children:[(0,g.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!e)return L({}),void p([]);L({query:e})},children:[(0,g.jsx)(d,{type:"text",placeholder:"Search",value:e,onChange:function(t){n(t.target.value)}}),(0,g.jsx)(y,{type:"submit",children:"Search"})]}),(0,g.jsx)(u.Z,{movies:f})]})}},273:function(t,r,e){e.d(r,{v:function(){return u}});var n=e(861),o=e(243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",h=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:O(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var p="suspendedStart",v="executing",y="completed",d={};function g(){}function m(){}function w(){}var x={};l(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==e&&n.call(L,c)&&(x=L);var E=w.prototype=g.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function O(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var h=f(r,e,n);if("normal"===h.type){if(o=n.done?y:"suspendedYield",h.arg===d)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(o=y,n.method="throw",n.arg=h.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,h,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,h,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),l(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),l(E,h,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}var a="https://api.themoviedb.org/3/",c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTVkNjg2YjAyMGY1MDllYWY3YTExYzdlNjMwMjEyNiIsInN1YiI6IjY0Yzc2MzJkMzBmNzljMDBlNGYwMjU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ViOzV2y4zHN98oW6-jI9bRMPkyehNN86ete9-XHpn2U"}};function u(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a).concat(r),c).then((function(t){if(200!==t.status)throw new Error(t.statusText);return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=691.a5a3e6e2.chunk.js.map