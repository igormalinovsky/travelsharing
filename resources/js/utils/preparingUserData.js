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