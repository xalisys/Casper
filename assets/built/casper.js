function loadJS(e,t,n){var i=document.createElement("script");i.src=e,i.onload=t,i.onreadystatechange=t,n.appendChild(i)}function getParameterByName(e,t){t=t||window.location.href,e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";var i={selector:['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"],players:["www.youtube.com","player.vimeo.com"]},r=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),o=document.head||document.getElementsByTagName("head")[0];function s(e){return new RegExp("^(https?:)?//(?:"+i.players.join("|")+").*$","i").test(e)}function n(e){if((s(e.src)||s(e.data))&&!e.getAttribute("data-fluidvids")){var t,n,i=document.createElement("div");e.parentNode.insertBefore(i,e),e.className+=(e.className?" ":"")+"fluidvids-item fluid-width-video-wrapper",e.setAttribute("data-fluidvids","loaded"),i.className+="fluidvids fluid-width-video-container",i.style.paddingTop=(t=e.height,n=e.width,parseInt(t,10)/parseInt(n,10)*100+"%"),i.appendChild(e)}}return i.render=function(){for(var e=document.querySelectorAll(i.selector.join()),t=e.length;t--;)n(e[t])},i.init=function(e){for(var t in e)i[t]=e[t];var n;i.render(),(n=document.createElement("div")).innerHTML="<p>x</p><style>"+r+"</style>",o.appendChild(n.childNodes[1])},i}),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),n=e.attributes.width.value/e.attributes.height.value;t.style.flex=n+" 1 0%"})})}((window,document)),function(t,n){var i=n.querySelector("link[rel=next]");if(i){var r=n.querySelector(".post-feed");if(r){var o=300,s=!1,l=!1,a=t.scrollY,c=t.innerHeight,d=n.documentElement.scrollHeight;t.addEventListener("scroll",m,{passive:!0}),t.addEventListener("resize",p),f()}}function u(){if(404===this.status)return t.removeEventListener("scroll",m),void t.removeEventListener("resize",p);this.response.querySelectorAll(".post-card").forEach(function(e){r.appendChild(n.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?i.href=e.href:(t.removeEventListener("scroll",m),t.removeEventListener("resize",p)),d=n.documentElement.scrollHeight,l=s=!1}function e(){if(!l)if(a+c<=d-o)s=!1;else{l=!0;var e=new t.XMLHttpRequest;e.responseType="document",e.addEventListener("load",u),e.open("GET",i.href),e.send(null)}}function f(){s||t.requestAnimationFrame(e),s=!0}function m(){a=t.scrollY,f()}function p(){c=t.innerHeight,d=n.documentElement.scrollHeight,f()}}(window,document),function(s,l){s.Casper||(s.Casper={}),s.Casper.stickyNavTitle=function(e){var t=l.querySelector(e.navSelector),n=l.querySelector(e.titleSelector),i=s.scrollY,r=!1;function o(){n.getBoundingClientRect().top+s.scrollY+(n.offsetHeight+35)<=i?t.classList.add(e.activeClass):t.classList.remove(e.activeClass),r=!1}s.addEventListener("scroll",function(){i=s.scrollY,function(){r||requestAnimationFrame(o);r=!0}()},{passive:!0}),o()}}(window,document);
//# sourceMappingURL=casper.js.map