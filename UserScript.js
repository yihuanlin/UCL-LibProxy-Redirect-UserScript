// ==UserScript==
// @name         UCL Libproxy Redirect
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirect publication database to libproxy.ucl.ac.uk, save your time for institution acess
// @author       yihuanlin
// @match        https://www.sciencedirect.com/*
// @icon         https://cdn.ucl.ac.uk/indigo/images/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = window.location.protocol + "//" + window.location.hostname.replace(/\./g,'-') + ".libproxy.ucl.ac.uk" + window.location.pathname;
    window.location.replace(x);
})();