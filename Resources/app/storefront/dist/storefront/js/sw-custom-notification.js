(window.webpackJsonp=window.webpackJsonp||[]).push([["sw-custom-notification"],{"67CN":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return y}));var o=n("FGIj"),r=n("2Jwc");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l,f,p,y=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),u(this,a(n).apply(this,arguments))}var o,i,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,e),o=n,(i=[{key:"init",value:function(){var e=this;if(!this.wasClosedOnce()){var n=this.el.innerHTML;n=(n=n.replace(new RegExp("form-privacy-opt-in-","g"),"form-privacy-opt-in-"+Math.random())).replace(new RegExp("form-pvivacy-opt-in-","g"),"form-pvivacy-opt-in-"+Math.random()),this._modal=new r.a(n,this.options.blurBackground),this._modal.open((function(){return window.PluginManager.initializePlugins()}));var o=this._modal.getModal();t(o).on("hidden.bs.modal",(function(){e.setClosedOnce()}))}}},{key:"wasClosedOnce",value:function(){return sessionStorage.getItem(this.sessionKey())}},{key:"setClosedOnce",value:function(){sessionStorage.setItem(this.sessionKey(),1)}},{key:"sessionKey",value:function(){return"sw-notification-modal-"+this.el.id}}])&&c(o.prototype,i),l&&c(o,l),n}(o.a);p={blurBackground:!0},(f="options")in(l=y)?Object.defineProperty(l,f,{value:p,enumerable:!0,configurable:!0,writable:!0}):l[f]=p}).call(this,n("UoTJ"))},DrGH:function(t,e,n){"use strict";n.r(e);var o=n("FGIj"),r=n("prSB"),i=n("gHbT");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f,p,y,b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,s(e).apply(this,arguments))}var n,o,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){this.initConsentModal()}},{key:"initConsentModal",value:function(){var t=this.options,e=t.class_no_scroll,n=t.selector_btn_consent;i.a.querySelector(document,"html").classList.add(e),this.buttonConsent=i.a.querySelector(this.el,n),this.buttonConsent.addEventListener("click",this.handleClick.bind(this))}},{key:"handleClick",value:function(t){t.preventDefault(),t.stopPropagation(),this.saveConsent(),this.reloadContent()}},{key:"saveConsent",value:function(){var t=this.options,e=t.cookie_key,n=t.cookie_lifetime_days,o=t.class_no_scroll;r.a.setItem(e,"1",n),i.a.querySelector(document,"html").classList.remove(o)}},{key:"reloadContent",value:function(){this.buttonConsent.disabled=!0,window.location.reload()}}])&&u(n.prototype,o),c&&u(n,c),e}(o.a);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}y={selector_btn_consent:".sw-custom-notification-consent-modal__consent-button",class_no_scroll:"no-scroll",cookie_key:"sw-consent-manager-accepted",cookie_lifetime_days:90},(p="options")in(f=b)?Object.defineProperty(f,p,{value:y,enumerable:!0,configurable:!0,writable:!0}):f[p]=y;var _=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,v(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){this._hideButton=i.a.querySelector(this.el,this.options.hideOnClickButtonSelector),this._registerEvents()}},{key:"_registerEvents",value:function(){var t=this;this._hideButton.addEventListener("click",(function(){t.el.style.display="none"}))}}])&&h(n.prototype,o),r&&h(n,r),e}(o.a);!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(_,"options",{hideOnClickButtonSelector:"[data-hide-on-click-button]"});var g=n("67CN"),O=window.PluginManager;O.register("ConsentManagerPlugin",b,"[data-consent-manager-plugin]"),O.register("HideOnClickPlugin",_,"[data-hide-on-click-container]"),O.register("NotificationModalPlugin",g.a,"[data-notification-modal]")}},[["DrGH","runtime","vendor-node","vendor-shared"]]]);