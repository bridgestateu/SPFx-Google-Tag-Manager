define("8b00fe9b-cce0-4a46-b74b-0263532d8f94_0.0.1",["@microsoft/decorators","@microsoft/sp-core-library","@microsoft/sp-application-base"],function(t,e,n){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=(n.n(r),n(2)),i=(n.n(o),n(3)),c=(n.n(i),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.onInit=function(){var t=this.properties.trackingID;if(t){var e=document.createElement("script");e.type="text/javascript",e.innerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','"+t+"');",document.head.appendChild(e)}else o.Log.info("GtagmanagerApplicationCustomizer","Tracking ID not provided");return Promise.resolve()},a([r.override],e.prototype,"onInit",null),e}(i.BaseApplicationCustomizer);e.default=s},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n}])});