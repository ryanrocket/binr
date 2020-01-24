// Main.live.js
// DOM-Active JavaScripting
// Custom For BINR (By Ryan Wans)
/*
  _______     __      _   _     __          __     _   _  _____ 
 |  __ \ \   / //\   | \ | |    \ \        / /\   | \ | |/ ____|
 | |__) \ \_/ //  \  |  \| |     \ \  /\  / /  \  |  \| | (___  
 |  _  / \   // /\ \ | . ` |      \ \/  \/ / /\ \ | . ` |\___ \ 
 | | \ \  | |/ ____ \| |\  |       \  /\  / ____ \| |\  |____) |
 |_|  \_\ |_/_/    \_\_| \_|        \/  \/_/    \_\_| \_|_____/ 

*/

~(function([]) {
    var __globals = {};
    (function() {
        const queryString = window.location.search;
        const urlPathname = window.location.pathname;
        const curTitle = window.document.title;
        const dtNow = new Date();

        __globals.push(queryString, urlPathname, curTitle, dtNow);
    })();
})();