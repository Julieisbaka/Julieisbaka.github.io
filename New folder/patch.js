$(function () {
    var socialMedia = false;
    window.setTimeout(function () {
        socialMedia = {
            FB: (typeof FB === "undefined") ? false : true,
            TW: (typeof __twttr === "undefined") ? false : true
        }
    }, 3000);

    $(document).ajaxComplete(function (event, request, settings) {
        //filter the social media actions based on the socialMedia object
        socialMedia && filterSocialMedia(socialMedia);
    });

    //filter the social media actions based on the socialMedia object
    function filterSocialMedia(socialMedia) {
        // entire social option container is linked to facebook, So have to disable click event on entire container first.
        $('.option.social').css({ 'pointer-events': 'none' });

        // Hover state for social icons since the answer option title doesn't change color anymore
        $('.share-facebook', '.share-twitter').css('transition', 'all .2s');
        $('.option.social').find('a').mouseover(function () {
            $(this).find('.share-twitter').css('transform', 'scale(1.1)');
        });
        $('.option.social').find('a').mouseout(function () {
            $(this).find('.share-twitter').css('transform', 'scale(1)');
        });
        $('.option.social').find('.share-facebook').mouseover(function () {
            $(this).css('transform', 'scale(1.1)');
        });
        $('.option.social').find('.share-facebook').mouseout(function () {
            $(this).css('transform', 'scale(1)');
        });

        if (!socialMedia.FB && !socialMedia.TW) {
            // Both disabled - hide entire social option container
            $('.option.social').hide();
            $('#share-results').hide();
        } else if (!socialMedia.FB) {
            // FB disabled - hide facebook, enable pointer events on Twitter button
            $('.share-facebook').hide();
            $('#facebook_share_icon').hide();
            $('.option.social').find('a').css({ 'pointer-events': 'auto' });
        } else if (!socialMedia.TW) {
            // TW disabled - hide twitter, enable pointer events on facebook button
            $('.share-twitter').hide();
            $('#twitter_share_icon').hide();
            $('.option.social').find('.share-facebook').css({ 'pointer-events': 'auto' });
        } else {
            // Neither disabled - enable pointer events on both twitter and facebook buttons
            $('.option.social').find('.share-facebook').css({ 'pointer-events': 'auto' });
            $('.option.social').find('a').css({ 'pointer-events': 'auto' });
        }

        return true;
    }
});
