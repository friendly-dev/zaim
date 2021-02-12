$('.overflow a').click(function() {
    var opened = $(this).data("opened"),
        $p = $('.overflow p');
    if (opened) {
        $('.overflow p').animate({ height: "95px" }, 800);
        $(this).data("opened", "");
        return false;
    }
    $p.css("height", "100%");
    var hg = $p.height();
    $p.css("height", "95px");
    $('.overflow p').animate({
            height: hg + "px"
        },
        800);
    $(this).data("opened", "1");
    return false;
});