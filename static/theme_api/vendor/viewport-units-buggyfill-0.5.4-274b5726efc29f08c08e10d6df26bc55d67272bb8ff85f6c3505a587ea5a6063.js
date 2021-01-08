/*!
 * viewport-units-buggyfill v0.5.4
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfill=t()}(this,function(){"use strict";function t(i,r){var o;return function(){var e=this,t=arguments,n=function(){i.apply(e,t)};clearTimeout(o),o=setTimeout(n,r)}}function n(){try{return window.self!==window.top}catch(e){return!0}}function e(e){if(!w){if(!0===e&&(e={force:!0}),(v=e||{}).isMobileSafari=A,v.isBadStockAndroid=S,T||!v.force&&!A&&!k&&!S&&!R&&(!v.hacks||!v.hacks.required(v)))return window.console&&T&&console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"),{init:function(){}};v.hacks&&v.hacks.initialize(v),w=!0,(b=document.createElement("style")).id="patched-viewport",document.head.appendChild(b),l(function(){var e=t(r,v.refreshDebounceWait||100);window.addEventListener("orientationchange",e,!0),window.addEventListener("pageshow",e,!0),(v.force||k||n())&&(window.addEventListener("resize",e,!0),v._listeningToResize=!0),v.hacks&&v.hacks.initializeEvents(v,r,e),r()})}}function i(){b.textContent=s(),b.parentNode.appendChild(b)}function r(){w&&(o(),setTimeout(function(){i()},1))}function o(){return E=[],y.call(document.styleSheets,function(e){"patched-viewport"!==e.ownerNode.id&&e.cssRules&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(e.media&&e.media.mediaText&&window.matchMedia&&!window.matchMedia(e.media.mediaText).matches||y.call(e.cssRules,a))}),E}function a(n){if(7===n.type){var e;try{e=n.cssText}catch(t){return}return g.lastIndex=0,void(g.test(e)&&(E.push([n,null,e]),v.hacks&&v.hacks.findDeclarations(E,n,null,e)))}if(n.style)y.call(n.style,function(e){var t=n.style.getPropertyValue(e);n.style.getPropertyPriority(e)&&(t+=" !important"),g.lastIndex=0,g.test(t)&&(E.push([n,e,t]),v.hacks&&v.hacks.findDeclarations(E,n,e,t))});else{if(!n.cssRules)return;y.call(n.cssRules,function(e){a(e)})}}function s(){x=d();var r=[],o=[],a,s;return E.forEach(function(e){var t=c.apply(null,e),n=t.selector.length?t.selector.join(" {\n")+" {\n":"",i=new Array(t.selector.length+1).join("\n}");if(!n||n!==a)return o.length&&(r.push(a+o.join("\n")+s),o.length=0),void(n?(a=n,s=i,o.push(t.content)):(r.push(t.content),s=a=null));n&&!a&&(a=n,s=i),o.push(t.content)}),o.length&&r.push(a+o.join("\n")+s),R&&r.push("* { content: normal !important; }"),r.join("\n\n")}function c(e,t,n){var i,r=[];i=n.replace(g,u),v.hacks&&(i=v.hacks.overwriteDeclaration(e,t,i)),t&&(r.push(e.selectorText),i=t+": "+i+";");for(var o=e.parentRule;o;)r.unshift("@media "+o.media.mediaText),o=o.parentRule;return{selector:r,content:i}}function u(e,t,n){var i=x[n],r;return parseFloat(t)/100*i+"px"}function d(){var e=window.innerHeight,t=window.innerWidth;return{vh:e,vw:t,vmax:Math.max(t,e),vmin:Math.min(t,e)}}function l(e){var t=0,n=function(){--t||e()};y.call(document.styleSheets,function(e){e.href&&f(e.href)!==f(location.href)&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(t++,h(e.ownerNode,n))}),t||e()}function f(e){return e.slice(0,e.indexOf("/",e.indexOf("://")+3))}function h(t,n){p(t.href,function(){var e=document.createElement("style");e.media=t.media,e.setAttribute("data-href",t.href),e.textContent=this.responseText,t.parentNode.replaceChild(e,t),n()},n)}function p(e,t,n){var i=new XMLHttpRequest;if("withCredentials"in i)i.open("GET",e,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");(i=new XDomainRequest).open("GET",e)}return i.onload=t,i.onerror=n,i.send(),i}var w=!1,v,m=window.navigator.userAgent,g=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,y=[].forEach,x,E,b,k=/MSIE [0-9]\./i.test(m),T=/MSIE [0-8]\./i.test(m),R=-1<m.indexOf("Opera Mini"),A=/(iPhone|iPod|iPad).+AppleWebKit/i.test(m)&&((M=m.match(/OS (\d)/))&&1<M.length&&parseInt(M[1])<8),M,S=-1<m.indexOf(" Android ")&&-1<m.indexOf("Version/")&&parseFloat((m.match("Android ([0-9.]+)")||[])[1])<=4.4,C,O,P;return k||(k=!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)),{version:"0.5.4",findProperties:o,getCss:s,init:e,refresh:r}});