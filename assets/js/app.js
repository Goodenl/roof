!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5),e.exports=n(6)},function(e,t){var n=document.querySelector(".complete-work__slider"),r=document.querySelector(".blog-main__slider");if(n)tns({container:".complete-work__slider",items:2,loop:!1,edgePadding:50,controlsContainer:".complete-work__controls",speed:400,nav:!1});if(r)tns({container:".blog-main__slider",items:2,loop:!1,controlsContainer:".blog-main__controls",speed:400,controls:!0,nav:!1})},function(e,t){var n=document.getElementById("nextPageBtn"),r=document.querySelector(".calculate-main");n&&n.addEventListener("click",(function(){r.classList.add("next-page")}))},function(e,t){var n=document.body,r=document.querySelectorAll("[data-modal]"),o=document.querySelectorAll(".modal__close"),a=document.querySelectorAll(".modal"),i=document.querySelector(".thanks__box"),l=document.querySelector("#thanksBtn");function c(e){e.querySelector(".modal__content").removeAttribute("style"),setTimeout((function(){n.classList.remove("no-scroll"),e.classList.remove("show"),i.classList.remove("show"),i.previousElementSibling.removeAttribute("style")}),200)}a&&(r.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.getAttribute("data-modal"),r=document.getElementById(t),o=r.querySelector(".modal__content");o.addEventListener("click",(function(e){e.stopPropagation()})),n.classList.add("no-scroll"),r.classList.add("show"),setTimeout((function(){o.style.transform="none",o.style.opacity="1"}),1)}))})),o.forEach((function(e){e.addEventListener("click",(function(e){c(e.currentTarget.closest(".modal"))}))})),a.forEach((function(e){e.addEventListener("click",(function(e){c(e.currentTarget)}))})),l&&l.addEventListener("click",(function(){i.classList.add("show"),i.previousElementSibling.style.display="none"})))},function(e,t){function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("input[data-tel-input]");if(!e){var t,r=function(e){return e.value.replace(/\D/g,"")},o=function(e){var t=e.target,n=r(t),o=e.clipboardData||window.clipboardData;if(o){var a=o.getData("Text");if(/\D/g.test(a))return void(t.value=n)}},a=function(e){var t=e.target,n=r(t),o=t.selectionStart,a="";if(!n)return t.value="";if(t.value.length==o){if(["7","8","9"].indexOf(n[0])>-1){"9"==n[0]&&(n="7"+n);var i="8"==n[0]?"8":"+7";a=t.value=i+" ",n.length>1&&(a+=" "+n.substring(1,4)),n.length>=5&&(a+="-"+n.substring(4,7)),n.length>=8&&(a+="-"+n.substring(7,9)),n.length>=10&&(a+="-"+n.substring(9,11))}else a="+"+n.substring(0,16);t.value=a}else e.data&&/\D/g.test(e.data)&&(t.value=n)},i=function(e){var t=e.target.value.replace(/\D/g,"");8==e.keyCode&&1==t.length&&(e.target.value="")},l=n(e);try{for(l.s();!(t=l.n()).done;){var c=t.value;c.addEventListener("keydown",i),c.addEventListener("input",a,!1),c.addEventListener("paste",o,!1)}}catch(e){l.e(e)}finally{l.f()}}}))},function(e,t){function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=document.querySelectorAll(".blog-main__item"),a=document.querySelectorAll(".checkmark");if(a.dataset){var i,l=n(a);try{for(l.s();!(i=l.n()).done;){i.value.addEventListener("click",(function(e){var t,r=n(o);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.classList.remove("hide"),console.log(a.dataset.type!=e.target.dataset.type),a.dataset.type!=e.target.dataset.type&&a.classList.add("hide")}}catch(e){r.e(e)}finally{r.f()}}))}}catch(e){l.e(e)}finally{l.f()}}},function(e,t){var n=document.body;document.querySelector(".menu__btn").addEventListener("click",(function(){n.classList.toggle("sidebar-show")})),window.addEventListener("wheel",(function(e){window.pageYOffset>=80?n.classList.add("scroll-menu"):n.classList.remove("scroll-menu")})),window.addEventListener("touchmove",(function(e){window.pageYOffset>=80?n.classList.add("scroll-menu"):n.classList.remove("scroll-menu")}))}]);