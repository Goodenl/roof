!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(2),n(3),n(4),n(5),t.exports=n(6)},function(t,e){var n=document.querySelector(".complete-work__slider"),r=document.querySelector(".blog-main__slider");if(n)tns({container:".complete-work__slider",items:2,loop:!1,edgePadding:50,controlsContainer:".complete-work__controls",speed:400,nav:!1});if(r)tns({container:".blog-main__slider",items:2,loop:!1,controlsContainer:".blog-main__controls",speed:400,controls:!0,nav:!1})},function(t,e){var n=document.getElementById("nextPageBtn"),r=document.querySelector(".calculate-main");n&&n.addEventListener("click",(function(){r.classList.add("next-page")}))},function(t,e){function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=document.body,a=document.querySelectorAll("[data-modal]"),i=document.querySelectorAll(".modal__close"),l=document.querySelectorAll(".modal"),u=document.querySelector(".thanks__box"),c=document.querySelectorAll("#thanksBtn");if(l&&(a.forEach((function(t){t.addEventListener("click",(function(t){var e=t.currentTarget.getAttribute("data-modal"),n=document.getElementById(e),r=n.querySelector(".modal__content");r.addEventListener("click",(function(t){t.stopPropagation()})),o.classList.add("no-scroll"),n.classList.add("show"),setTimeout((function(){r.style.transform="none",r.style.opacity="1"}),1)}))})),i.forEach((function(t){t.addEventListener("click",(function(t){m(t.currentTarget.closest(".modal"))}))})),l.forEach((function(t){t.addEventListener("click",(function(t){m(t.currentTarget)}))})),c)){var s,f=n(c);try{for(f.s();!(s=f.n()).done;)thanksBtn=s.value,thanksBtn.addEventListener("click",(function(){u.classList.add("show"),u.previousElementSibling.style.display="none"}))}catch(t){f.e(t)}finally{f.f()}}if(c){var d,y=n(c);try{for(y.s();!(d=y.n()).done;)thanksBtn=d.value,thanksBtn.addEventListener("click",(function(){var t=l[0].querySelector(".modal__content");u.classList.add("show"),o.classList.add("no-scroll"),console.log(l[0]),l[0].classList.add("show"),setTimeout((function(){t.style.transform="none",t.style.opacity="1"}),1),u.previousElementSibling.style.display="none"}))}catch(t){y.e(t)}finally{y.f()}}function m(t){t.querySelector(".modal__content").removeAttribute("style"),setTimeout((function(){o.classList.remove("no-scroll"),t.classList.remove("show"),u.classList.remove("show"),u.previousElementSibling.removeAttribute("style")}),200)}},function(t,e){function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}document.addEventListener("DOMContentLoaded",(function(){var t,e=document.querySelectorAll("input[data-tel-input]"),r=function(t){return t.value.replace(/\D/g,"")},o=function(t){var e=t.target,n=r(e),o=t.clipboardData||window.clipboardData;if(o){var a=o.getData("Text");if(/\D/g.test(a))return void(e.value=n)}},a=function(t){var e=t.target,n=r(e),o=e.selectionStart,a="";if(!n)return e.value="";if(e.value.length==o){if(["7","8","9"].indexOf(n[0])>-1){"9"==n[0]&&(n="7"+n);var i="8"==n[0]?"8":"+7";a=e.value=i+" ",n.length>1&&(a+=" "+n.substring(1,4)),n.length>=5&&(a+="-"+n.substring(4,7)),n.length>=8&&(a+="-"+n.substring(7,9)),n.length>=10&&(a+="-"+n.substring(9,11))}else a="+"+n.substring(0,16);e.value=a}else t.data&&/\D/g.test(t.data)&&(e.value=n)},i=function(t){var e=t.target.value.replace(/\D/g,"");8==t.keyCode&&1==e.length&&(t.target.value="")},l=n(e);try{for(l.s();!(t=l.n()).done;){var u=t.value;u.addEventListener("keydown",i),u.addEventListener("input",a,!1),u.addEventListener("paste",o,!1)}}catch(t){l.e(t)}finally{l.f()}}))},function(t,e){function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=document.querySelectorAll(".blog-main__item"),a=document.querySelectorAll(".checkmark");if(a.dataset){var i,l=n(a);try{for(l.s();!(i=l.n()).done;){i.value.addEventListener("click",(function(t){var e,r=n(o);try{for(r.s();!(e=r.n()).done;){var a=e.value;a.classList.remove("hide"),console.log(a.dataset.type!=t.target.dataset.type),a.dataset.type!=t.target.dataset.type&&a.classList.add("hide")}}catch(t){r.e(t)}finally{r.f()}}))}}catch(t){l.e(t)}finally{l.f()}}},function(t,e){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r=document.body,o=document.querySelector(".menu__btn"),a=document.querySelectorAll(".sidebar-main__item a");o.addEventListener("click",(function(){r.classList.toggle("sidebar-show")}));var i,l=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){u=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}(a);try{for(l.s();!(i=l.n()).done;)sidebarLink=i.value,sidebarLink.addEventListener("click",(function(){r.classList.remove("sidebar-show")}))}catch(t){l.e(t)}finally{l.f()}window.addEventListener("wheel",(function(t){window.pageYOffset>=80?r.classList.add("scroll-menu"):r.classList.remove("scroll-menu")})),window.addEventListener("touchmove",(function(t){window.pageYOffset>=80?r.classList.add("scroll-menu"):r.classList.remove("scroll-menu")}))}]);