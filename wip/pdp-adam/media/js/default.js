(()=>{"use strict";var e,t={39:(e,t,n)=>{var o=n(407),i=n(732),a=(n(229),n(358)),r=(n(9),n(201)),l=n(648);const c=JSON.parse('{"ih":"main-wrapper"}');var s=n(755);(0,l.ScrollMagicPluginGsap)(r,a.p8),new r.Controller({loglevel:0}),new r.Controller({globalSceneOptions:{triggerHook:"onEnter"}}),new r.Controller({globalSceneOptions:{triggerHook:"onLeave"}});var d=new r.Controller({globalSceneOptions:{}}),u={mobileMaxResolution:function(){return 991},isRtl:function(){return s("body").hasClass("rtl")},isMobile:function(){return s(window).width()<=u.mobileMaxResolution()},forcePageReload:function(){s(window).width()<=u.mobileMaxResolution()&&window.location.reload(),s(window).width(),u.mobileMaxResolution()}},v={init:function(){var e=s(".video-scroll-play");e.length>0&&s.each(e,(function(e){var t=s(this);v.setupAnimationScrollMagic(t,e)}))},setupAnimationScrollMagic:function(e){var t,n,o,i="";function a(e){var t=e;if(t){var n=t.play();void 0!==n&&n.then((function(e){t.pause()}))}}function l(e){var t=!u.isMobile();i=t?"desktop":"mobile";var n=e,o=s(e),a={poster:o.data("poster-path"),video:o.data("video-path"),webm:o.data("video-webm-path"),posterT:o.data("t-poster-path"),videoT:o.data("t-video-path"),webmT:o.data("t-video-webm-path")};o.attr("poster",t?a.poster:a.posterT),o.find(".webm").attr("src",t?a.webm:a.webmT),o.find(".mp4").attr("src",t?a.video:a.videoT);var r=n.load();void 0!==r&&r.then((function(e){n.pause()})).catch((function(e){}))}t=!1,n=!1,o=function(){return u.isMobile(),1*e.innerHeight()+.7*s(window).innerHeight()+1e3},new r.Scene({triggerElement:e[0],triggerHook:1,duration:o,offset:"-1000"}).on("enter",(function(){!1===t&&(t=!0,e.find("video").each((function(e,t){l(t)})))})).on("leave",(function(){n=!1,e.find("video").each((function(e,t){a(t)}))})).on("progress",(function(t){var i=Math.floor(1e5/o()),r=Math.floor(100*s(window).innerHeight()/o()/10),l=Math.floor(100*t.progress);l>=i+2.5*r&&!1===n?(n=!0,e.find("video").each((function(e,t){!function(e){var t=e;if(t){var n=t.play();void 0!==n&&n.then((function(e){t.play()}))}}(t)}))):l<i+2.5*r&&!0===n&&(n=!1,e.find("video").each((function(e,t){a(t)})))})).addTo(d),s(window).on("resize",(function(){u.isMobile()||"mobile"!==i?u.isMobile()&&"desktop"===i&&e.find("video").each((function(e,t){l(t)})):e.find("video").each((function(e,t){l(t)}))}))}},f={init:function(){var e=s(".click-toggle-active");e.length>0&&s.each(e,(function(e){var t=s(this);f.setupToggleActive(t,e)}))},setupToggleActive:function(e){var t=e.find(".btn-toggle"),n=e.find(".target-toggle-active");t.on("click",(function(){n.toggleClass("active"),t.toggleClass("active")}))}},g={init:function(){var e=s(".accessories-owl-content");e.length>0&&s.each(e,(function(e,t){var n=!u.isMobile(),o=s(t);g.setupCaruosel(o,n)}))},setupCaruosel:function(e,t){var n=t,o=e.siblings(".carousel-slide").find(".topics-slider"),i=o.length>0,a=0;function r(){u.isMobile()?n||(n=!0,o.attr("max",a),o.val(1),e.trigger("to.owl.carousel",0)):n&&(n=!1,o.attr("max",a))}var l=!1;"rtl"===s("html").attr("dir")&&(l=!0),e.owlCarousel({rtl:l,loop:!0,nav:!0,dots:!1,lazyLoad:!0,lazyLoadEager:1,navText:["<div data-event-category='accessory' data-event-action='click-arrow' data-event-label='arrow-prev-accessory-carousel' data-event-gtm='event-tracking' style='width:100%;height:100%;'><div class='icon-nav icon-prev'></div></div>","<div data-event-category='accessory' data-event-action='click-arrow' data-event-label='arrow-next-accessory-carousel' data-event-gtm='event-tracking' style='width:100%;height:100%;'><div class='icon-nav icon-next'></div></div>"],responsive:{0:{items:1,autoWidth:!0},992:{items:2}},onInitialized:function(t){a=t.item.count,i&&(r(),o[0].oninput=function(){e.trigger("to.owl.carousel",this.value-1)});var n=e.find(".owl-item:not(.cloned) .js-slug-product");Array.from(n).forEach((function(n){var o=n.getAttribute("data-slug");if(o){var i=e.find(".owl-item.cloned .js-slug-product[data-slug=".concat(o,"]"));i.length>0&&new MutationObserver((function(){var e=n.innerHTML,o=n.querySelectorAll(".vive20-btn")[0];i.each((function(n,i){var a=i;a.innerHTML=e,a.querySelectorAll(".vive20-btn")[0].addEventListener("click",(function(){t.preventDefault(),o.click()}))}))})).observe(n,{childList:!0,subtree:!0,attributes:!0,characterData:!0})}}))},onTranslate:function(e){if(i){var t=e.item.index+1-e.relatedTarget._clones.length/2;t>e.item.count&&(t=1),0===t&&(t=e.item.count),o.val(t)}}}),i&&s(window).on("resize",(function(){i&&r()}))}};s((function(){(function(){var e=s(document.querySelector("body")).attr("data-site");if(["us","uk","sg","nz","my-en","mea-en","in","hk","eu","ca","au"].indexOf(e)>=0){var t=document.querySelectorAll(".".concat(c.ih))[0];new o(t,{selector:".text-fix-widow"}).apply()}})(),new i({elements_selector:".lazy-img",threshold:1500}),v.init(),f.init(),g.init()}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,i,a)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){for(var[n,i,a]=e[d],l=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(l=!1,a<r&&(r=a));if(l){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={913:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,a,[r,l,c]=n,s=0;if(r.some((t=>0!==e[t]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(c)var d=c(o)}for(t&&t(n);s<r.length;s++)a=r[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self.webpackChunkwp5=self.webpackChunkwp5||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[736],(()=>o(39)));i=o.O(i)})();