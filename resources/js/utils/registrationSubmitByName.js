function createUser() {
    var name = document.getElementById("login").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var x = document.getElementsByName('registration');
    x[0].submit(); //form submission

    var userObejct = {name: name, email: email, password: password};

    addUser(userObejct);
}

function createTrip() {
    var title = document.getElementById("title").value;
    var date = document.getElementById("date").value;
    var cost = document.getElementById("cost").value;
    var description = document.getElementById("description").value;
    var x = document.getElementsByName('createRoute');
    x[0].submit(); //form submission

    var routeObejct = {title: title, date: date, cost: cost, description: description};

    addRoute(routeObejct);
}

function addComment() {
    var text = document.getElementById("text").value;
    var x = document.getElementsByName('comment');
    x[0].submit(); //form submission

    var commentObject = {author: "malinovsky", text: text};

    addComment(commentObject);
}