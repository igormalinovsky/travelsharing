function prepareSingleUserData(userEmail) {

    setTimeout(function () {
        findUserByKey(userEmail);
    }, 50);
    setTimeout(function () {
        document.getElementsByClassName("user-name")[0].innerHTML = singleUserData.name;
        document.getElementsByClassName("emailInfo")[0].innerHTML = singleUserData.email
    }, 100);

    setTimeout(function () {
        findAllRouters();
    }, 250);
    setTimeout(function () {
        Object.keys(tripInfo).forEach(function (item) {
            var parentNode = document.getElementById("user-stuff");
            var childNode = document.createElement("section");
            childNode.setAttribute("class", "day");
            childNode.innerHTML = "<arcticle class=\"date\">" + tripInfo[item].date + "</arcticle>\n" +
                "                  <arcticle class=\"event\">" + tripInfo[item].title + "</arcticle>\n" +
                "                  <a href=\"event.html\" class=\"participate\">Приєднатись</a>\n" +
                "                  <a href=\"#\" class=\"participate\">Цікаво</a>";
            parentNode.appendChild(childNode)
        })
    }, 1000);
}

function prepareMainPage() {
    setTimeout(function () {
        findAllRouters();
    }, 100);
    setTimeout(function () {
        Object.keys(tripInfo).forEach(function (item) {
            var parentNode = document.getElementById("type-of-events");
            var childNode = document.createElement("a");
            childNode.setAttribute("class", "event-item");
            childNode.setAttribute("href", "pages\/event.html");
            childNode.innerHTML = "<img src=\"resources/img/istanbul.jpg\">\n" +
                "                    <h2>" + tripInfo[item].title + "</h2>\n" +
                "                    <small>Докладніше→</small>";
            parentNode.appendChild(childNode)
        })
    }, 200);
}

function prepareEventInfo(eventName) {
    setTimeout(function () {
        findRouteByKey(eventName);
    }, 100);
    setTimeout(function () {

        var parentNode = document.getElementById("event-info");
        var childNode = document.createElement("div");
        childNode.style.width = "100%";
        childNode.innerHTML = "<a href=\"user.html\" class=\"event-autor\"><h2>malinovsky</h2></a>\n" +
            "                <h2 class=\"event-date\">" + tripInfo.title + "</h2>\n" +
            "                <h2 class=\"event-date\">" + tripInfo.date + "</h2>\n" +
            "                <h2 class=\"event-autor\">" + tripInfo.cost + "</h2>\n" +
            "                <p class=\"event-discription\">" + tripInfo.description + "</p>\n";
        parentNode.appendChild(childNode)

    }, 200);
}