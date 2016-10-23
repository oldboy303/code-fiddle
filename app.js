$(".panel").height($(window).height() - $("#header").height() - 25);
panelWidth();

$(".panel-toggle").hover(function() {

    $(this).addClass("highlight");

}, function() {

    $(this).removeClass("highlight");

});

$(".panel-toggle").click(function() {

    $(this).toggleClass("selected");

    $(this).removeClass("higlight");

    $("#" + $(this).attr("id") + "-panel").toggleClass("hidden");

    panelWidth();

})

$("textarea").on('change keyup paste', function() {

    output();

});

$("textarea").keydown(function(e) {
    if (e.keyCode === 9) {

        var start = this.selectionStart,
            end = this.selectionEnd,
            $this = $(this);

        $this.val($this.val().substring(0, start) +
            "\t" +
            $this.val().substring(end));

        this.selectionStart = this.selectionEnd = start + 1;

        return false;
    }
})

function panelWidth() {

    var activePanels = 4 - $(".hidden").length;

    $(".panel").width(($(window).width() / activePanels) - 9);

}

function output() {

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-panel").val() + "</style></head><body>" + $("#html-panel").val() + "</body></html>");

    document.getElementById("output-panel").contentWindow.eval($("#js-panel").val());

}
