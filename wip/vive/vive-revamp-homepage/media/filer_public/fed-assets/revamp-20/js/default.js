!function(){function e(t,n,o){function i(r,d){if(!n[r]){if(!t[r]){var s="function"==typeof require&&require;if(!d&&s)return s(r,!0);if(a)return a(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[r]={exports:{}};t[r][0].call(c.exports,function(e){return i(t[r][1][e]||e)},c,c.exports,e,t,n,o)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}return e}()({1:[function(e,t,n){"use strict";var o=(e("postcss-rtl/lib/affected-props"),function(e){return e&&e.__esModule?e:{default:e}}(e("./libs/typemate"))),i=new ScrollMagic.Controller({loglevel:0,addIndicators:!1}),a=new ScrollMagic.Controller({addIndicators:!1,globalSceneOptions:{triggerHook:"onEnter"}}),r=new ScrollMagic.Controller({addIndicators:!1,globalSceneOptions:{triggerHook:"onLeave"}}),d=(new ScrollMagic.Controller({addIndicators:!1,globalSceneOptions:{}}),function(){var e={mobileMaxReserlution:function(){return 992},isRtl:function(){return!!$("body").hasClass("rtl")},isMobile:function(){return $(window).width()<=e.mobileMaxReserlution()},forcePageReload:function(){$(window).width()<=e.mobileMaxReserlution()&&location.reload(),$(window).width(),e.mobileMaxReserlution()},updateScrollDurationPosition:function(t,n){var o=e.getScrollDurationPosition(t),i=o[0],a=o[1];n.offset(i),n.duration(a)},getScrollDurationPosition:function(e){var t=0,n=0,o=5,i=5,a=e.outerHeight();return void 0!==e.data("top-trigger-percentage")&&(o=e.data("top-trigger-percentage")),t=parseInt(a*(o/100),10),void 0!==e.data("bottom-trigger-percentage")&&(i=e.data("bottom-trigger-percentage")),n=a-parseInt(a*(i/100),10)-t,[t,n]}};return e}()),s=function(){return{init:function(){var e=["us","uk","sg","nz","my-en","mea-en","in","hk","eu","ca","au"],t=$(document.querySelector("body")).attr("data-site"),n=".txt-fix-widows";if($(".revamp-20-homepage").length>0&&(n=".txt-fix-widows"),e.indexOf(t)>=0){var i=document.querySelectorAll(".revamp-20-homepage")[0];new o.default(i,{selector:n}).apply()}}}}(),l=function(){var e={init:function(){var t=$(".revamp-20-homepage .wording-area");t.length>0&&$.each(t,function(t,n){var o=$(this);e.setupAnimation(o)})},setupAnimation:function(e){var t=new TimelineMax;t.fromTo(e[0],1,{opacity:0},{opacity:1,delay:.4});"number"==typeof e.data("trigger-hook")&&e.data("trigger-hook"),"number"==typeof e.data("trigger-hook-m")&&e.data("trigger-hook-m"),new ScrollMagic.Scene({triggerElement:e[0],offset:0,reverse:!1}).setTween(t).addTo(a);$(window).resize(function(){})}};return e}(),c=function(){var e={setupVideoSource:function(t){var n=t,o=n[0];$.each(n.find("video"),function(t,a){var r=$(this),d=r[0],s=r.data("force-preload"),l={ld:{videoPoster:r.data("poster-path"),videoPath:r.data("video-path")},d:{videoPoster:r.data("d-poster-path"),videoPath:r.data("d-video-path")},l:{videoPoster:r.data("l-poster-path"),videoPath:r.data("l-video-path")},t:{videoPoster:r.data("t-poster-path"),videoPath:r.data("t-video-path")}};if(void 0!==s&&"yes"===s)e.changeView(r,l),d.pause(),d.load(),r.addClass("loaded");else{new ScrollMagic.Scene({triggerElement:o,offset:-500}).addTo(i).on("enter",function(t){"enter"!==t.type||r.hasClass("loaded")||(e.changeView(r,l),d.pause(),d.load(),r.addClass("loaded"))})}d.addEventListener("loadeddata",function(){e.setupScrollAndPlay(n,o,r,d)},!1)})},changeView:function(e,t){var n=function(e,t){var n=$(window).innerWidth(),o=n>1919?"ld":n>1365?"d":n>991?"l":"t",i=t[o];if(!e.hasClass("video-changeView-".concat(o))){e.removeClass("video-changeView-ld video-changeView-d video-changeView-l video-changeView-t"),e.addClass("video-changeView-".concat(o)),e.attr("poster",i.videoPoster||t.d.videoPoster);var a=i.videoPath||t.d.videoPoster,r=a.indexOf(".mp4"),d=a.slice(0,r)+".webm";r>0&&e.find(".mp4").length>0||e.find(".webm").length>0?(e.find(".webm")[0].src=d,e.find(".mp4")[0].src=a):e.find("source")[0].src=a}};n(e,t),$(window).resize(function(){n(e,t)})},getPosition:function(e,t){var n,o,i=0,a=0,r=e.outerHeight();return d.isMobile()?(n=-15,o=-15,void 0!==t.data("md-top-trigger-playing")&&(n=t.data("md-top-trigger-playing")),i=parseInt(r*(n/100),10),void 0!==t.data("md-bottom-trigger-playing")&&(o=t.data("md-bottom-trigger-playing")),a=r-parseInt(r*(o/100),10)-i):(n=5,o=5,void 0!==t.data("top-trigger-playing")&&(n=t.data("top-trigger-playing")),i=parseInt(r*(n/100),10),void 0!==t.data("bottom-trigger-playing")&&(o=t.data("bottom-trigger-playing")),a=r-parseInt(r*(o/100),10)-i),[i,a]},updatePosition:function(t,n,o){var i=e.getPosition(t,n),a=i[0],r=i[1];o.offset(a),o.duration(r)},setupReplayBtn:function(e,t,n){var o=e.find(".replay-block");void 0!==o&&(o.addClass("show"),o.on("click",function(e){e.preventDefault(),n.play(),t.addClass("playing"),o.removeClass("show")}))},setupScrollAndPlay:function(t,n,o,i){var r,d=o.data("loop"),s=o.data("play-once"),l=e.getPosition(t,o),c=l[0],u=l[1];o.outerHeight(),t.outerHeight();!function(){void 0!==s&&"yes"===s||void 0!==d&&"no"===d||(i.pause(),o.removeClass("playing"))}(),r=new ScrollMagic.Scene({triggerElement:n,offset:c,duration:u}).addTo(a).on("enter leave",function(e){switch(e.type){case"enter":if(o.hasClass("loaded")&&!o.hasClass("playing")){var t=i.play();void 0!==t&&t.catch(function(e){}).then(function(){o.addClass("playing")})}}}),i.addEventListener("ended",function(){void 0!==s&&"yes"===s?(o.addClass("playing"),e.setupReplayBtn(t,o,i)):void 0!==d&&"no"===d?(o.removeClass("playing"),e.setupReplayBtn(t,o,i)):o.hasClass("playing")&&(o.attr("loop","loop"),i.play())},!1),$(window).resize(function(n){e.updatePosition(t,o,r)})}};return e}(),u=function(){return{init:function(){$(".section-modal-video, .section-homepage-top-banner").length>0&&$.each($(".section-modal-video, .section-homepage-top-banner"),function(e,t){var n=$(this),o=n.find(".video-bg");c.setupVideoSource(o)})}}}(),p={init:function(e){new YKU.Player("player",{styleid:"0",client_id:"2a8fda48fc709b73",vid:e,newPlayer:!1,autoplay:!0,show_related:!1,events:{onPlayEnd:function(){g.hideModal()},onPlayStart:function(){g.showModal(),g.setupCloseModalBtn()}}})}},f={init:function(e){function t(e){e.target.playVideo(),g.showModal(),g.setupCloseModalBtn()}function n(e){0===e.data&&g.hideModal()}var o;!function(){o=new YT.Player("player",{height:"390",width:"640",videoId:e,events:{onReady:t,onStateChange:n}})}()}},g={init:function(){var e=document.querySelectorAll(".section-modal-video .box-video");e.length>0&&Array.prototype.slice.call(e).forEach(function(e){var t=e.querySelector(".play-modal-video-btn"),n=t.getAttribute("data-vtype"),o=t.getAttribute("data-vid");t.addEventListener("click",function(e){e.preventDefault(),"youtube"===n?f.init(o):(p.init(o),g.showModal(),g.setupCloseModalBtn())})})},setupCloseModalBtn:function(){document.querySelector(".modal-overlap-container .btn-close").addEventListener("click",function(e){e.preventDefault(),g.hideModal()})},showModal:function(){var e=document.querySelector(".modal-overlap-container"),t=document.getElementsByTagName("html")[0],n=document.body;e.classList.add("show"),t.classList.add("fixed"),n.classList.add("fixed")},hideModal:function(){var e=document.querySelector(".modal-overlap-container"),t=document.getElementsByTagName("html")[0],n=document.body;e.classList.remove("show"),t.classList.remove("fixed"),n.classList.remove("fixed"),document.querySelector(".modal-overlap-container .align-center").innerHTML="<div id='player'></div>"}},m={init:function(){if("undefined"!=typeof LazyLoad){new LazyLoad({elements_selector:".lazy-img",threshold:2e3})}}},v=(function(){var e={initVariable:[],init:function(){var t=$(".revamp-20-homepage .section-korea-top-banner-20");t.length>0&&$.each(t,function(t,n){var o=$(this);e.setupAnimation(o)})},setupAnimation:function(t){var n=new TimelineMax,o=t.find("#elite");TweenMax.fromTo(o,.1,{top:"44vh"},{top:"30vh"});n.add([TweenMax.fromTo(t.find("#elite"),.1,{top:"44vh"},{top:"30vh",ease:Linear.easeNone}),TweenMax.fromTo(t.find("#adapter"),.1,{top:"5vh"},{top:"30vh",ease:Linear.easeNone,delay:0}),TweenMax.fromTo(t.find("#cosmos"),.3,{top:"40vh"},{top:"26vh",ease:Linear.easeNone,delay:1}),TweenMax.fromTo(t.find("#adapter_front"),.2,{top:"80vh"},{top:"100vh",ease:Linear.easeNone,delay:2}),TweenMax.fromTo(t.find("#ball_blur_s"),.5,{top:"80vh"},{top:"40vh",ease:Linear.easeNone,delay:2}),TweenMax.fromTo(t.find("#ball"),.1,{top:"40vh"},{top:"18vh",ease:Linear.easeNone,delay:0}),TweenMax.fromTo(t.find("#cube"),.1,{top:"24vh"},{top:"86vh",ease:Linear.easeNone,delay:0}),TweenMax.fromTo(t.find("#full_01"),.1,{top:"130vh"},{top:"90vh",ease:Linear.easeNone,delay:1}),TweenMax.fromTo(t.find("#full_02"),.1,{top:"142vh"},{top:"110vh",ease:Linear.easeNone,delay:2})]),e.initVariable[0]=new ScrollMagic.Scene({triggerElement:t[0],duration:"30%"}).setTween(n).addIndicators({name:"korea",indent:50}).addTo(r)}}}(),function(){var e={init:function(){var t=$(".moment-block");t.length>0&&e.countdownFunc(t)},countdownFunc:function(e){var t=e.attr("data-time")?e.attr("data-time"):"2020-11-13",n=moment.utc(t,"YYYY-MM-DD H:mm"),o=n.format("X"),i=function(e){return e-moment.utc().format("X")-28800},a=setInterval(function(){e.addClass("active"),i(o)<1&&(e.remove(),clearInterval(a));var t=moment.duration(1e3*i(o),"milliseconds"),n=e.find(".moment-days"),r=e.find(".moment-hours"),d=e.find(".moment-minutes"),s=e.find(".moment-seconds");n.text(t.days()<10?"0".concat(t.days()):t.days()),r.text(t.hours()<10?"0".concat(t.hours()):t.hours()),d.text(t.minutes()<10?"0".concat(t.minutes()):t.minutes()),s.text(t.seconds()<10?"0".concat(t.seconds()):t.seconds())},1e3)}};return e}()),h=function(){var e={init:function(){var t=$(".section-sale-1111-20");t.length>0&&e.setupAnimation(t)},setupAnimation:function(e){e.find(".slot-block").each(function(e,t){$(t).find(".slot-ele").jSlots({number:1,spinner:"#playBtn",winnerNumber:e+1,time:3500+1e3*e,loops:3,delay:200*e,easing:"swing",onStart:function(){$(t).find(".slot-item-first").removeClass("start"),setTimeout(function(){$(t).find(".slot-item-first").addClass("start")},300)},onEnd:function(){$(t).find(".slot-ele").css({top:"".concat(18.69792*-e,"vw")})}})}),setTimeout(function(){e.find("#playBtn")[0].click()},1500)}};return e}();window.onload=function(){h.init(),l.init(),u.init(),m.init(),g.init(),s.init()},$(function(){v.init()})},{"./libs/typemate":2,"postcss-rtl/lib/affected-props":3}],2:[function(e,t,n){"use strict";function o(e){return d(e)||r(e)||a(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}var p=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(this,e);var i=this;i.settings=Object.assign({minWords:4,selector:"p",ignoreClass:"js-typemate__ignore",ignoreExistingSpaceChars:!1},n),i.elems=o(void 0===t?document.querySelectorAll(i.settings.selector):t.querySelectorAll(i.settings.selector))}return u(e,[{key:"apply",value:function(){var e=this;e.elems.map(function(t){if(t.classList.contains(e.settings.ignoreClass))return!1;if(e.shouldElementBeIgnored(t))return!1;var n="",o=t.innerHTML.trim().replace(/&nbsp;/g," ").split(/ (?=[^>]*(?:<|$))/);o.length<e.settings.minWords||(o=e.preventOrphans(o),n=o.join(" "),n=n.replace(/&nbsp; /g,"&nbsp;"),t.innerHTML=n)})}},{key:"preventOrphans",value:function(e){if(window.innerWidth>991.98){var t=e[e.length-2];e[e.length-2]=t+"&nbsp;"}else{var n=e[e.length-2];e[e.length-2]=n+"&nbsp;"}return e}},{key:"reset",value:function(){var e=this;e.elems.map(function(t){if(e.shouldElementBeIgnored(t))return!1;t.innerHTML=t.innerHTML.replace(/&nbsp;/g," ")})}},{key:"shouldElementBeIgnored",value:function(e){var t=this;return!!(e.innerHTML.indexOf("&nbsp;")>-1&&t.settings.ignoreExistingSpaceChars)}}]),e}();t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new p(e,t)}},{}],3:[function(e,t,n){"use strict";t.exports=["background","background-attachment","background-color","background-clip","-webkit-background-clip","background-image","background-position","background-position-x","background-position-y","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-style","border-bottom-width","border-color","border-style","border-width","border-top","border-top-color","border-top-style","border-top-width","border-radius","box-shadow","clear","cursor","float","margin","margin-top","margin-bottom","padding","padding-top","padding-bottom","transform-origin","transform","-webkit-transition","transition-delay","transition-duration","transition-property","transition-timing-function","text-align","text-align-last","text-shadow"]},{}]},{},[1]);