function submit_by_name() {
    var name = document.getElementById("login").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var x = document.getElementsByName('registration');
    x[0].submit(); //form submission

    var userObejct = {name : name, email : email, password:password};

    addUser(userObejct);
}