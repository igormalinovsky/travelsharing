function prepareSingleUserData(userEmail) {

    setTimeout(function(){findUserByKey(userEmail);}, 50);
    setTimeout(function(){
        document.getElementsByClassName("user-name")[0].innerHTML = singleUserData.name;
        document.getElementsByClassName("emailInfo")[0].innerHTML = singleUserData.email
        }, 100);
}