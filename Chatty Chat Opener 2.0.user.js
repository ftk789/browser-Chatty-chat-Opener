// ==UserScript==
// @name         Chatty Chat Opener 2.0
// @namespace    http://tampermonkey.net/
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.min.jssli
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @version      0.1
// @description  Opens chat in Chatty with a button
// @author       @ftk789
// @match        *://*.twitch.tv/*
// @match        *://*.twitch.tv/moderator/*
// @icon         https://img.utdstc.com/icon/a22/140/a2214007e685001a603b2645d4c05c260f94c7fb3d69175696d009ce3e9d27f5:200
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    function onAltQ() {
     const myUrl = new URL(window.location.href);
     parent.location='chatty:'+ myUrl.pathname;
    }
    function onKeydown(evt) {
        // Use https://keycode.info/ to get keys
        if (evt.ctrlKey && evt.keyCode == 73) {
            onAltQ();
        }
    }
    document.addEventListener('keydown', onKeydown, true);
})();



let styleSheet = `
.btn {
    background-color: #9147ff;
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
}
`;

let s = document.createElement('style');
s.type = "text/css";
s.innerHTML = styleSheet;
(document.head || document.documentElement).appendChild(s);

window.addEventListener('load', function() {
    'use strict';
    function addButton(ele) {
       let btn = document.createElement("button");
        btn.innerHTML = "Open in Chatty";
        btn.className = "btn";
        btn.onclick = () => {
            const myUrl = new URL(window.location.href);
            // alert("hi, my name is "+myUrl.pathname);
            // console.log(myUrl.pathname);
            parent.location='chatty:'+ myUrl.pathname;

        }
        ele.insertBefore(document.createElement('br'), ele.childNodes[8]);
        ele.insertBefore(btn, ele.childNodes[8]);
    }
    let preTags = document.getElementsByTagName("h4");
    let C = preTags[7];
   for (let preTag of preTags ) {
       addButton(preTag);
   }
GM_registerMenuCommand("Open in Chatty", () => {
 const myUrl = new URL(window.location.href);
     parent.location='chatty:'+ myUrl.pathname;
});
})();

