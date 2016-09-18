var app = {
    init: function() {
        app.addListeners();
    },
    addListeners: function() {
        console.log("addListeners")
        if ($(".thumbs").length > 0) {
            $(".thumbs .thumb").on("click", app.goToPage);
        }

    },
    goToPage: function(e){
        var _url = $(e.currentTarget).data("url");
        console.info(_url)
        window.location.href = _url;
    }
}

$(document).ready(app.init);