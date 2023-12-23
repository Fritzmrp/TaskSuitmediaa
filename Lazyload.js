/*!
 * LazyLoad.js - v11.0 (November 2022)
 * Lightweight, flexible script to lazy load images and other elements
 * https://github.com/verlok/lazyload
 * (c) 2022 Andrea Verlicchi
 * MIT license
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else if (typeof exports === 'object') {
      module.exports = factory();
    } else {
      root.LazyLoad = factory();
    }
  }(this, function () {
    'use strict';
  
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    var runningOnBrowser = typeof window !== "undefined";
    var runningOnWorker = typeof importScripts === "function";
    var isBot = runningOnBrowser && !("onscroll" in window) || runningOnWorker;
    var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
    var supportsClassList = runningOnBrowser && "classList" in document.createElement("p");
    var hasNativeLazyLoadSupport = runningOnBrowser && "loading" in HTMLImageElement.prototype;
  
    // ... (Isi implementasi LazyLoad.js)
  
    return LazyLoad;
  }));
  