!function(){function i(n,t,e){function a(r,l){if(!t[r]){if(!n[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(o)return o(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[r]={exports:{}};n[r][0].call(d.exports,function(i){return a(n[r][1][i]||i)},d,d.exports,i,n,t,e)}return t[r].exports}for(var o="function"==typeof require&&require,r=0;r<e.length;r++)a(e[r]);return a}return i}()({1:[function(i,n,t){"use strict";var e=function(i){return i&&i.__esModule?i:{default:i}}(i("./libs/typemate")),a=(new ScrollMagic.Controller({loglevel:0,addIndicators:!1}),new ScrollMagic.Controller({addIndicators:!1,globalSceneOptions:{triggerHook:"onEnter"}}),new ScrollMagic.Controller({addIndicators:!1,globalSceneOptions:{triggerHook:"onLeave"}}),new ScrollMagic.Controller({addIndicators:!1,globalSceneOptions:{}})),o={mobileMaxResolution:function(){return 767},isRtl:function(){return $("body").hasClass("rtl")},isMobile:function(){return $(window).width()<=o.mobileMaxResolution()},forcePageReload:function(){$(window).width()<=o.mobileMaxResolution()&&location.reload(),$(window).width(),o.mobileMaxResolution()},updateScrollDurationPosition:function(i,n){var t=o.getScrollDurationPosition(i),e=t[0],a=t[1];n.offset(e),n.duration(a)},getScrollDurationPosition:function(i){var n=0,t=0,e=5,a=5,o=i.outerHeight();return void 0!==i.data("top-trigger-percentage")&&(e=i.data("top-trigger-percentage")),n=parseInt(o*(e/100),10),void 0!==i.data("bottom-trigger-percentage")&&(a=i.data("bottom-trigger-percentage")),t=o-parseInt(o*(a/100),10)-n,[n,t]}},r={init:function(){var i=["us","uk","sg","nz","my-en","mea-en","in","hk","eu","ca","au"],n=$(document.querySelector("body")).attr("data-site");if(i.indexOf(n)>=0){var t=document.querySelectorAll(".tracker3-20-page")[0];new e.default(t,{selector:".text-fix-widow"}).apply()}}},l={init:function(){var i=$(".product-carousel-area"),n=!1;"rtl"===$("html").attr("dir")&&(n=!0),i.length>0&&(i.on("initialized.owl.carousel",function(i){l.calculateHeight(),l.fixOnlyTwoItems(),l.addArrowTracking()}),i.on("resized.owl.carousel",function(i){l.calculateHeight()}),i.owlCarousel({rtl:n,items:4,loop:!1,nav:!0,navText:["<div class='icon-nav icon-prev'></div>","<div class='icon-nav icon-next'></div>"],responsive:{1920:{items:4,stagePadding:77.5},1366:{items:4,stagePadding:0},992:{items:4,stagePadding:0},0:{items:2,stagePadding:0}}}))},calculateHeight:function(){var i=$(".fix-height"),n=-1;i.each(function(){$(this).attr("style","");var i=$(this).height();n=i>n?i:n}),n>0&&i.height(n)},fixOnlyTwoItems:function(){$(".owl-item").length<=2&&$(".owl-loaded").addClass("fixed-items")},addArrowTracking:function(){setTimeout(function(){var i=$(".owl-next");i.attr("data-event-category","event-pdp"),i.attr("data-event-action","click-arrow"),i.attr("data-event-label","arrow-next-2020halloween"),i.attr("data-gtm","event-tracking");var n=$(".owl-prev");n.attr("data-event-category","event-pdp"),n.attr("data-event-action","click-arrow"),n.attr("data-event-label","arrow-prev-2020halloween"),n.attr("data-gtm","event-tracking")},500)}},s={init:function(){var i=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(i,"px")),window.addEventListener("resize",function(){var i=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(i,"px"))})}},c={initVariable:[],initParalla:[],init:function(){var i=$(".section-tracker-robot");i.length>0&&$.each(i,function(i,n){var t=$(this);c.setupAnimation(t,i),$(window).resize(function(){c.setupAnimation(t,i)})})},animationParalla:function(i,n){function t(t,o){c.initParalla[n][t]=new ScrollMagic.Scene({triggerElement:i[0],offset:0,duration:e,triggerHook:r()}).setTween(o.ele,{y:o.y,ease:Linear.easeOut}).addTo(a)}var e=i.data("pin")?i.data("pin"):"200%",r=function(){return o.isMobile()?"0.4":"0.5"},l=function(){return{ele:i.find(".wording-area-paralla"),y:"-250%"}},s=function(){return{ele:i.find(".animate-block"),y:"-30%"}},d=function(){return{ele:i.find(".image-block"),y:"-30%"}};c.initParalla[n]=[],[l,s,d].map(function(i,n){t(n,i())})},animationPin:function(i,n){c.initVariable[n]=new ScrollMagic.Scene({triggerElement:i.find(".image-block")[0],offset:0,duration:0,triggerHook:function(){return o.isMobile()?"0.6":"0.2"}()}).on("enter",function(n){i.addClass("active")}).addTo(a)},setupAnimationSize:function(i,n){var t=window.innerWidth,e=window.innerHeight,a=e/t,o=i.find(".center-point"),r={dlg:{size:.5625},lg:{size:760/1366},lp:{size:570/992},tb:{size:300/360}},l=function(i,n){i.size>=a||!0===n?o.css({width:"".concat(t,"px"),height:"".concat(t*i.size,"px")}):o.css({width:"".concat(e/i.size,"px"),height:"".concat(e,"px")})};t>=1920?l(r.dlg):t>=1366?l(r.lg):t>=992?l(r.lp):l(r.tb,!0)},setupAnimation:function(i,n){c.setupAnimationSize(i,n),o.isMobile()?(i.hasClass("animation-scroll-fix-set")&&(void 0!==c.initVariable[n]&&c.initVariable[n].destroy(!0),c.initParalla[n].map(function(i,n){void 0!==i&&i.destroy(!0)}),i.removeClass("animation-scroll-fix-set")),i.hasClass("animation-scroll-fix-mobile-set")||(c.animationPin(i,n),i.addClass("animation-scroll-fix-mobile-set"))):(i.hasClass("animation-scroll-fix-mobile-set")&&(void 0!==c.initVariable[n]&&c.initVariable[n].destroy(!0),i.removeClass("animation-scroll-fix-mobile-set")),i.hasClass("animation-scroll-fix-set")||(c.animationParalla(i,n),c.animationPin(i,n),i.addClass("animation-scroll-fix-set")))}},d={initVariable:[],initParalla:[],init:function(){var i=$(".section-tracker-smaller");i.length>0&&$.each(i,function(i,n){var t=$(this);d.setupAnimation(t,i),$(window).resize(function(){d.setupAnimation(t,i)})})},animationParalla:function(i,n){function t(t,o){d.initParalla[n][t]=new ScrollMagic.Scene({triggerElement:i[0],offset:0,duration:e,triggerHook:r()}).setTween(o.ele,{y:o.y,ease:Linear.easeOut}).addTo(a)}var e=i.data("pin")?i.data("pin"):"200%",r=function(){return o.isMobile()?"0.4":"0.5"},l=function(){return{ele:i.find(".wording-area-paralla"),y:"-250%"}},s=function(){return{ele:i.find(".image-block"),y:"-30%"}},c=function(){return{ele:i.find(".animate-block"),y:"-30%"}};d.initParalla[n]=[],[l,s,c].map(function(i,n){t(n,i())})},animationPin:function(i,n){d.initVariable[n]=new ScrollMagic.Scene({triggerElement:i.find(".image-block")[0],offset:0,duration:0,triggerHook:function(){return o.isMobile()?"0.6":"0.2"}()}).on("enter",function(n){i.addClass("active")}).addTo(a)},setupAnimation:function(i,n){o.isMobile()?(i.hasClass("animation-scroll-fix-set")&&(void 0!==d.initVariable[n]&&d.initVariable[n].destroy(!0),d.initParalla[n].map(function(i,n){void 0!==i&&i.destroy(!0)}),i.removeClass("animation-scroll-fix-set")),i.hasClass("animation-scroll-fix-mobile-set")||(d.animationPin(i,n),i.addClass("animation-scroll-fix-mobile-set"))):(i.hasClass("animation-scroll-fix-mobile-set")&&(void 0!==d.initVariable[n]&&d.initVariable[n].destroy(!0),i.removeClass("animation-scroll-fix-mobile-set")),i.hasClass("animation-scroll-fix-set")||(d.animationParalla(i,n),d.animationPin(i,n),i.addClass("animation-scroll-fix-set")))}},u={initParalla:[],init:function(){var i=$(".section-tracker-lighter");i.length>0&&$.each(i,function(i,n){var t=$(this);u.setupAnimation(t,i),$(window).resize(function(){u.setupAnimation(t,i)})})},animationParalla:function(i,n){function t(t,o){u.initParalla[n][t]=new ScrollMagic.Scene({triggerElement:i[0],offset:0,duration:e,triggerHook:r()}).setTween(o.ele,{y:o.y,ease:Linear.easeOut}).addTo(a)}var e=i.data("pin")?i.data("pin"):"200%",r=function(){return o.isMobile()?"0.4":"0.2"},l=function(){return{ele:i.find(".wording-area-paralla"),y:"-250%"}},s=function(){return{ele:i.find(".lighter-top"),y:"-35%"}},c=function(){return{ele:i.find(".lighter-bottom"),y:"-40%"}},d=function(){return{ele:i.find(".image-block"),y:"-30%"}};u.initParalla[n]=[],[l,s,c,d].map(function(i,n){t(n,i())})},setupAnimation:function(i,n){o.isMobile()?i.hasClass("animation-scroll-fix-set")&&(d.initParalla[n].map(function(i,n){void 0!==i&&i.destroy(!0)}),i.removeClass("animation-scroll-fix-set")):i.hasClass("animation-scroll-fix-set")||(d.animationParalla(i,n),i.addClass("animation-scroll-fix-set"))}},f={initVariable:[],initParalla:[],init:function(){var i=$(".section-tracker-battery");i.length>0&&$.each(i,function(i,n){var t=$(this);f.setupAnimation(t,i),$(window).resize(function(){f.setupAnimation(t,i)})})},animationParalla:function(i,n){function t(t,o){f.initParalla[n][t]=new ScrollMagic.Scene({triggerElement:i[0],offset:0,duration:e,triggerHook:r()}).setTween(o.ele,{y:o.y,ease:Linear.easeOut}).addTo(a)}var e=i.data("pin")?i.data("pin"):"200%",r=function(){return o.isMobile()?"0.4":"0.2"},l=function(){return{ele:i.find(".wording-area-paralla"),y:"-250%"}},s=function(){return{ele:i.find(".image-block"),y:"-30%"}};f.initParalla[n]=[],[l,s].map(function(i,n){t(n,i())})},animationPin:function(i,n){f.initVariable[n]=new ScrollMagic.Scene({triggerElement:i.find(".image-block")[0],offset:0,duration:0,triggerHook:function(){return o.isMobile()?"0.6":"0.2"}()}).on("enter",function(n){i.addClass("active")}).addTo(a)},setupAnimation:function(i,n){o.isMobile()?(i.hasClass("animation-scroll-fix-set")&&(void 0!==f.initVariable[n]&&f.initVariable[n].destroy(!0),f.initParalla[n].map(function(i,n){void 0!==i&&i.destroy(!0)}),i.removeClass("animation-scroll-fix-set")),i.hasClass("animation-scroll-fix-mobile-set")||(f.animationPin(i,n),i.addClass("animation-scroll-fix-mobile-set"))):(i.hasClass("animation-scroll-fix-mobile-set")&&(void 0!==f.initVariable[n]&&f.initVariable[n].destroy(!0),i.removeClass("animation-scroll-fix-mobile-set")),i.hasClass("animation-scroll-fix-set")||(f.animationParalla(i,n),f.animationPin(i,n),i.addClass("animation-scroll-fix-set")))}},m={initVariable:[],init:function(){var i=$(".section-text-optimize");i.length>0&&$.each(i,function(i,n){var t=$(this);m.setupAnimation(t,i),$(window).resize(function(){m.setupAnimation(t,i)})})},animationPin:function(i,n){m.initVariable[n]=new ScrollMagic.Scene({triggerElement:i[0],offset:0,duration:0,triggerHook:function(){return o.isMobile()?"0.6":"0.2"}()}).on("enter",function(n){i.find(".item-time").addClass("active"),$.each(i.find(".time-optimize"),function(i,n){var t=$(this)[0],e=$(this).data("duration"),a=$(this).data("start"),o=$(this).data("to");m.runNumber(t,a,o,e)})}).addTo(a)},runNumber:function(i,n,t,e){new Odometer({el:i,value:n,duration:e,format:"d"}).update(t)},setupAnimation:function(i,n){o.isMobile()?(i.hasClass("animation-scroll-opt-set")&&(void 0!==m.initVariable[n]&&m.initVariable[n].destroy(!0),i.removeClass("animation-scroll-opt-set")),i.hasClass("animation-scroll-opt-mobile-set")||(m.animationPin(i,n),i.addClass("animation-scroll-opt-mobile-set"))):(i.hasClass("animation-scroll-opt-mobile-set")&&(void 0!==m.initVariable[n]&&m.initVariable[n].destroy(!0),i.removeClass("animation-scroll-opt-mobile-set")),i.hasClass("animation-scroll-opt-set")||(m.animationPin(i,n),i.addClass("animation-scroll-opt-set")))}},g={initVariable:[],init:function(){var i=$(".section-more-real .content-item");i.length>0&&$.each(i,function(i,n){var t=$(this);g.setupAnimation(t,i),$(window).resize(function(){g.setupAnimation(t,i)})})},animationPin:function(i,n){g.initVariable[n]=new ScrollMagic.Scene({triggerElement:i.find(".bg-block")[0],offset:0,duration:0,triggerHook:function(){return o.isMobile()?"0.5":"0.2"}()}).on("enter",function(n){i.addClass("active")}).addTo(a)},setupAnimation:function(i,n){o.isMobile()?(i.hasClass("animation-scroll-active-set")&&(void 0!==g.initVariable[n]&&g.initVariable[n].destroy(!0),i.removeClass("animation-scroll-active-set")),i.hasClass("animation-scroll-active-mobile-set")||(g.animationPin(i,n),i.addClass("animation-scroll-active-mobile-set"))):(i.hasClass("animation-scroll-active-mobile-set")&&(void 0!==g.initVariable[n]&&g.initVariable[n].destroy(!0),i.removeClass("animation-scroll-active-mobile-set")),i.hasClass("animation-scroll-active-set")||(g.animationPin(i,n),i.addClass("animation-scroll-active-set")))}},v={init:function(i){new YKU.Player("player",{styleid:"0",client_id:"2a8fda48fc709b73",vid:i,newPlayer:!1,autoplay:!0,show_related:!1,events:{onPlayEnd:function(){h.hideModal()},onPlayStart:function(){h.showModal(),h.setupCloseModalBtn()}}})}},p={init:function(i){function n(i){i.target.playVideo(),h.showModal(),h.setupCloseModalBtn()}function t(i){0===i.data&&h.hideModal()}var e;!function(){e=new YT.Player("player",{height:"390",width:"640",videoId:i,events:{onReady:n,onStateChange:t}})}()}},h={init:function(){var i=document.querySelectorAll(".section-trailer-video .box-video");i&&i.forEach(function(i){var n=i.querySelector(".play-modal-video-btn"),t=n.getAttribute("data-vtype"),e=n.getAttribute("data-vid");n.addEventListener("click",function(i){i.preventDefault(),"youtube"===t?p.init(e):(v.init(e),h.showModal(),h.setupCloseModalBtn())})})},setupCloseModalBtn:function(){document.querySelector(".modal-overlap-container .btn-close").addEventListener("click",function(i){i.preventDefault(),h.hideModal()})},showModal:function(){var i=document.querySelector(".modal-overlap-container"),n=document.getElementsByTagName("html")[0],t=document.body;i.classList.add("show"),n.classList.add("fixed"),t.classList.add("fixed")},hideModal:function(){var i=document.querySelector(".modal-overlap-container"),n=document.getElementsByTagName("html")[0],t=document.body;i.classList.remove("show"),n.classList.remove("fixed"),t.classList.remove("fixed"),document.querySelector(".modal-overlap-container .align-center").innerHTML="<div id='player'></div>"}},b={init:function(){if("undefined"!=typeof LazyLoad){new LazyLoad({elements_selector:".lazy-img",threshold:2e3})}}};window.onload=function(){s.init(),h.init(),r.init(),b.init(),l.init(),c.init(),d.init(),u.init(),f.init(),m.init(),g.init()}},{"./libs/typemate":2}],2:[function(i,n,t){"use strict";function e(i){return l(i)||r(i)||o(i)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(i,n){if(i){if("string"==typeof i)return s(i,n);var t=Object.prototype.toString.call(i).slice(8,-1);return"Object"===t&&i.constructor&&(t=i.constructor.name),"Map"===t||"Set"===t?Array.from(i):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(i,n):void 0}}function r(i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(i))return Array.from(i)}function l(i){if(Array.isArray(i))return s(i)}function s(i,n){(null==n||n>i.length)&&(n=i.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=i[t];return e}function c(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function d(i,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function u(i,n,t){return n&&d(i.prototype,n),t&&d(i,t),i}var f=function(){function i(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,i);var a=this;a.settings=Object.assign({minWords:4,selector:"p",ignoreClass:"js-typemate__ignore",ignoreExistingSpaceChars:!1},t),a.elems=e(void 0===n?document.querySelectorAll(a.settings.selector):n.querySelectorAll(a.settings.selector))}return u(i,[{key:"apply",value:function(){var i=this;i.elems.map(function(n){if(n.classList.contains(i.settings.ignoreClass))return!1;if(i.shouldElementBeIgnored(n))return!1;var t="",e=n.innerHTML.trim().replace(/&nbsp;/g," ").split(/ (?=[^>]*(?:<|$))/);e.length<i.settings.minWords||(e=i.preventOrphans(e),t=e.join(" "),t=t.replace(/&nbsp; /g,"&nbsp;"),n.innerHTML=t)})}},{key:"preventOrphans",value:function(i){if(window.innerWidth>991.98){var n=i[i.length-2];i[i.length-2]=n+"&nbsp;"}else{var t=i[i.length-2];i[i.length-2]=t+"&nbsp;"}return i}},{key:"reset",value:function(){var i=this;i.elems.map(function(n){if(i.shouldElementBeIgnored(n))return!1;n.innerHTML=n.innerHTML.replace(/&nbsp;/g," ")})}},{key:"shouldElementBeIgnored",value:function(i){var n=this;return!!(i.innerHTML.indexOf("&nbsp;")>-1&&n.settings.ignoreExistingSpaceChars)}}]),i}();n.exports=function(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new f(i,n)}},{}]},{},[1]);