    var db = openDatabase('demoTravel3', '1.0', 'Test 2DB', 5 * 1024 * 1024);
    function initDB() {

        db.transaction(function (tx) {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS users (id integer primary key autoincrement, login, email, password, rating integer)');
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS routes (id integer primary key autoincrement, title, photo, beginPoint, endPoint, startDate, endDate, price)');
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS blogs (id integer primary key autoincrement, title, photo, description, summary)');
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS users (id integer primary key autoincrement, login, email, password)');
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS comments (id integer primary key autoincrement, author, parent, parentId, text)');
        });
    }

    function createUser(login, email, password) {
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO users (login, email, password, rating) VALUES ("' + login + '", "' + email + '", "' + password + '", ' + 0 + ')');
        });
    }

    function selectUserById(userId) {
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM users WHERE id=' + userId, [], function (tx, results) {
                var userJson = [];
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    id = results.rows.item(i).id;
                    login = results.rows.item(i).login;
                    email = results.rows.item(i).email;
                    rating = results.rows.item(i).rating;

                    userJson.push({id: id, login: login, email: email, rating: rating})
                }
                console.log(userJson);
                return userJson;
            }, null);
        });
    }

    function userUpdateRating(userId, changeValue) {
        db.transaction(function (tx) {
            tx.executeSql('UPDATE users SET rating=? users WHERE id=' + userId, [selectUserById(userId)[0].rating+changeValue], function (tx, results) {
                var userJson = [];
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    id = results.rows.item(i).id;
                    login = results.rows.item(i).login;
                    email = results.rows.item(i).email;
                    rating = results.rows.item(i).rating;

                    userJson.push({id: id, login: login, email: email, rating: rating})
                }

                console.log(userJson);
            }, null);
        });
    }

    function createRoute(name, beginPoint, endPoint, startDate, endDate, price, photoPath) {
        var id = localStorage.length + 1;

        var path = {
            id: id,
            type: "route",
            name: name,
            beginPoint: beginPoint,
            endPoint: endPoint,
            startDate: startDate,
            endDate: endDate,
            price: price,
            photoPath: photoPath
        };

        localStorage.setItem(id, JSON.stringify(path));
    }

    function createBlog(author, title, summary) {
        var id = localStorage.length + 1;

        var path = {
            id: id,
            type: "blog",
            author: author,
            title: title,
            summary: summary,
            createdDate: Date.now()
        };

        localStorage.setItem(title, JSON.stringify(path));
    }
