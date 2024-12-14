//window.location = "http://loc.playspent.org/flash/";
$(function() {
     /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
           // IE 12 => return version number
           return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }
    
    var IEversion = detectIE();
    //console.log(IEversion);
    
    //add reject overlay for IE 8 & 9
    if (IEversion != false) {
        if (IEversion <= 9) {
            var imagePath = 'images/reject/';
            var chrome = '<a href="https://support.google.com/chrome/answer/95346?hl=en" target="_blank"><img src="' + imagePath + 'browser_chrome.gif"><Br/>Google Chrome</a>';
            var ie = '<a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank"><img src="' + imagePath + 'browser_msie.gif" ><Br/>Internet Explorer</a>';
            var firefox = '<a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank"><img src="' + imagePath + 'browser_firefox.gif" ><br/>Firefox</a>';
            $('body').prepend('<div id="jr_wrap"><div id="jr_inner"><h1 id="jr_header">Did you know that your Internet Browser is out of date?</h1><p>Your browser is out of date, and may not be compatible with our website. A list of the most popular web browsers can be found below.</p><p>Just click on the icons to get to the download page</p><ul><li id="jr_chrome">'+ chrome +'</li><li id="jr_firefox">' + firefox + '</li><li id="jr_msie">' + ie + '</li></ul><p>By closing this window you acknowledge that your experience on this website maybe degraded.</p></div><div id="jr_close">Close This Window</div></div><div id="jr_overlay"></div>');
            //close overlay
            $('#jr_close').click(function() {
                $('#jr_wrap').remove();
                $('#jr_overlay').remove();
            });
        }
    }
    
    $("#donate-screen").find('.donate').click(function(e) {
        Tracking._event(Tracking.category, "Give $5", "Click")
    })
});