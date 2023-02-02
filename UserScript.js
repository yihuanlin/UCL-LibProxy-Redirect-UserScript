// ==UserScript==
// @name         UCL Libproxy Redirect
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirect academic databases to libproxy.ucl.ac.uk, save your time for institutional access
// @author       yihuanlin
// @match        https://*.sciencedirect.com/*
// @match        https://*.elsevierelibrary.co.uk/*
// @match        https://*.elsevier.com/*
// @match        https://*.portlandpress.com/*
// @match        https://*.biomedcentral.com/*
// @match        https://*.wiley.com/*
// @match        https://*.cell.com/*
// @match        https://*.mcponline.org/*
// @match        https://*.jstor.org/*
// @match        https://*.ajsonline.org/*
// @match        https://*.microform.digital/*
// @match        https://*.microbiologyresearch.org/*
// @match        https://*.asm.org/*
// @match        https://*.webofscience.com/*
// @match        https://scholar.google.com/*
// @match        https://*.royalsociety.org/*
// @match        https://*.rsc.org/*
// @match        https://*.springer.com/*
// @match        https://*.springernature.com/*
// @match        https://*.statista.com/*
// @match        https://iopscience.iop.org/*
// @match        https://*.bmj.com/*
// @match        https://*.frontiersin.org/*
// @match        https://*.jneurosci.org/*
// @match        https://*.mhmedical.com/*
// @match        https://*.thejns.org/*
// @match        https://*.nature.com/*
// @match        https://*.science.org/*
// @match        https://*.nejm.org/*
// @match        https://*.annualreviews.org/*
// @match        https://*.aspetjournals.org/*
// @match        https://*.pubs.acs.org/*
// @match        https://*.jamanetwork.com/*
// @match        https://journals.aps.org/*
// @match        https://*.aacrjournals.org/*
// @match        https://*.physiology.org/*
// @match        https://*.jamanetwork.com/*
// @match        https://academic.oup.com/*
// @match        https://*.ahajournals.org/*
// @match        https://*.psychologicalscience.org/*
// @match        https://www.tandfonline.com/*
// @icon         https://cdn.ucl.ac.uk/indigo/images/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //var x = window.location.protocol + "//" + window.location.hostname.replace(/\./g,'-') + ".libproxy.ucl.ac.uk" + window.location.pathname;
    var x = "https://libproxy.ucl.ac.uk/login?url=" + window.location.href;
    window.location.replace(x);
})();
