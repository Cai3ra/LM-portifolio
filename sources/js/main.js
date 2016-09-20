var app = {
    init: function() {
        app.addListeners();
    },
    addListeners: function() {
        $(".bt-about").on("click", app.toggleAbout);
        if ($(".thumbs").length > 0) {
            $(".thumbs .thumb").on("click", app.goToPage);
        }

    },
    goToPage: function(e){
        var _url = $(e.currentTarget).data("url");
        console.info(_url)
        window.location.href = _url;
    },
    toggleAbout: function(e) {
        if ($(".about").hasClass("opened")) {
            $(".about").removeClass("opened");
            $(".bt-about").text("SOBRE");
        } else {
            $(".about").addClass("opened");
            $(".bt-about").text("FECHAR");
        }
    }
}

$(document).ready(app.init);