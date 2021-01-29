(function ($) {
    console.log('landing');
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {
        let $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

    $('li a').on('click', function() {
        let scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 200;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;
    });

    $('#seemore').on('click', function() {
        let scrollAnchorBtn = $(this).attr('data-scroll'),
            scrollPointBtn = $('section[data-anchor="' + scrollAnchorBtn + '"]').offset().top - 200;
        $('body,html').animate({
            scrollTop: scrollPointBtn
        }, 500);

        return false;
    });

    $(this).scrollTop(0);
    $('li:first').addClass('active');
    $(window).scroll(function() {
        let windscroll = $(window).scrollTop();

        if (windscroll >= 0) {
            $('.row-wrapper section').each(function(i) {
                if ($(this).position().top <= windscroll + 200) {
                    $('li.active').removeClass('active');
                    $('#section_' + i).addClass('active');
                }
            });
        } else {
            $('li.active').removeClass('active');
            $('li:first').addClass('active');
        }

    }).scroll();

})(jQuery);
let win = $(window);
let allMods = $(".module");
allMods.each(function (i, el) {
    let elf = $(el);
    if (elf.visible(true)) {
        elf.addClass("already-visible");
    }
});
win.scroll(function (event) {
    allMods.each(function (i, el) {
        let elf = $(el);
        if (elf.visible(true)) {
            elf.addClass("come-in");
        }
    });
});