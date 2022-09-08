//50% jquery 50%js

$(function () {

    let headers = $(".tab-menu .tab-header div")
    let contents = document.querySelectorAll(".tab-menu .tab-body div");

    $(headers).click(function () {
        let activeElem = $(".active");
        $(activeElem).removeClass("active")
        $(this).addClass("active")

        contents.forEach(content => {
            if ($(this).attr("data-id") == $(content).attr("data-id")) {
                $(content).removeClass("d-none")
            } else {
                $(content).addClass("d-none")
            }
        });


    })




})

