function addUser(o) {
    var tx = db.transaction(["users"], "readwrite");
    var store = tx.objectStore("users");

    var request = store.add(o);

    request.onsuccess = function (e) {
        console.log("user created");
    };

    request.onerror = function (e) {
    };
}

function findUserByKey(key) {
    var tx = db.transaction(["users"], "readonly");
    var store = tx.objectStore("users");
    var request = store.get(key);

    request.onsuccess = function (e) {
        console.log("user fined");
    };
}

function findAllUsers() {
    var tx = db.transaction(["users"], "readonly");
    var objectStore = tx.objectStore("users");
    var cursor = objectStore.openCursor();

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            console.log("key", res.key);
            console.log("value", res.value);
            res.
            continue ();
        }
    };
}

function updateByKey(key) {
    var tx = db.transaction(["users"], "readwrite");
    var store = tx.objectStore("users");

    store.get(key).onsuccess = function (e) {
        var data = e.target.result;
        if (!data) {
            return;
        }
        data.name = data.name.toUpperCase();
        var request = store.put(data);

        request.onsuccess = function (e) {
            console.log("user updated")
        };

        request.onerror = function (e) {
        };
    };
}