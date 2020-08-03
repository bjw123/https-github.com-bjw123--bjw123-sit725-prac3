console.log("ENV LOADED");

$(document).ready(function() {

    $("#btnWeather").click(function () {
        $.get("/weather", function (data) {
        alert("weather is  "+ data)

    })
    })
})
