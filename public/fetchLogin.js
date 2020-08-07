$(document).ready(function () {

    console.log("document ready");

    $.get("/users", function (res) {
        console.log(res);


    })
})