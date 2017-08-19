function addComment(o) {
    var tx = db.transaction(["comments"], "readwrite");
    var store = tx.objectStore("comments");

    var request = store.add(o);

    request.onsuccess = function (e) {
        console.log("comment added")
    };

    request.onerror = function (e) {
    };
}

function findByKey(key) {
    var tx = db.transaction(["comments"], "readonly");
    var store = tx.objectStore("comments");
    var request = store.get(key);

    request.onsuccess = function (e) {
        console.log("comment fined")
    };
}

function findAll() {
    var tx = db.transaction(["comments"], "readonly");
    var objectStore = tx.objectStore("comments");
    var cursor = objectStore.openCursor();

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            console.log("comments fined");
            res.
            continue ();
        }
    };
}

function findByRange(from, to) {
    var tx = db.transaction(["comments"], "readonly");
    var objectStore = tx.objectStore("comments");
    var range = IDBKeyRange.bound(from, to, false, true);
    var cursor = objectStore.index('name').openCursor(range);

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            console.log("comments range fined");
            res.continue();
        }
    };
}

function removeByKey(key) {
    var tx = db.transaction(["comments"], "readwrite");
    var store = tx.objectStore("comments");

    var request = store.delete(key);

    request.onsuccess = function (e) {
    };

    request.onerror = function (e) {
    };
}

function updateByKey(key) {
    var tx = db.transaction(["comments"], "readwrite");
    var store = tx.objectStore("comments");

    store.get(key).onsuccess = function (e) {
        var data = e.target.result;
        if (!data) {
            return;
        }
        data.name = data.name.toUpperCase();
        var request = store.put(data);

        request.onsuccess = function (e) {
        };

        request.onerror = function (e) {
        };
    };
}