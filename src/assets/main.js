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

export function main() {
        var __globals = [];
        (function() {
            const queryString = window.location.search;
            const urlPathname = window.location.pathname;
            const curTitle = window.document.title;
            const dtNow = new Date();

            __globals.push(queryString, urlPathname, curTitle, dtNow);
            document.title="Brazil Is Not Real";
        })();
        var comment = document.createComment(''+ 
        '\n_______     __      _   _     __          __     _   _  _____ \n'+
        '|  __ \\ \\   / //\\   | \\ | |    \\ \\        / /\\   | \\ | |/ ____|\n'+
        '| |__) \\ \\_/ //  \\  |  \\| |     \\ \\  /\\  / /  \\  |  \\| | (___  \n'+
        '|  _  / \\   // /\\ \\ | . ` |      \\ \\/  \\/ / /\\ \\ | . ` |\\___ \\ \n'+
        '| | \\ \\  | |/ ____ \\| |\\  |       \\  /\\  / ____ \\| |\\  |____) |\n'+
        '|_|  \\_\\ |_/_/    \\_\\_| \\_|        \\/  \\/_/    \\_\\_| \\_|_____/ \n');

        document.getElementsByTagName('html')[0].appendChild(comment);
        return;
}

~(function() {
    var __globals = [];
    (function() {
        const queryString = window.location.search;
        const urlPathname = window.location.pathname;
        const curTitle = window.document.title;
        const dtNow = new Date();

        __globals.push(queryString, urlPathname, curTitle, dtNow);
        console['log']("[RWAPI] RyanWans API v4.5 Alpha Production (GIPE Analytics, PreRender, VueEx");
        
        let motd = "BETA RELEASE"
        $(document).ready(function(){
          $('#motd').text(motd);
        });

        let aa = urlPathname.split("/");
        window.document.title = "Brazil Is Not Real [Beta]";
    })();
})();