function addRoute(o) {
    var tx = db.transaction(["routers"], "readwrite");
    var store = tx.objectStore("routers");

    var request = store.add(o);

    request.onsuccess = function (e) {
        console.log("route added")
    };

    request.onerror = function (e) {
    };
}

function findRouteByKey(key) {
    var tx = db.transaction(["routers"], "readonly");
    var store = tx.objectStore("routers");
    var request = store.get(key);

    request.onsuccess = function (e) {
        tripInfo = e.target.result;
        console.log("route fined")
    };
}

function findAllRouters() {
    var tx = db.transaction(["routers"], "readonly");
    var objectStore = tx.objectStore("routers");
    var cursor = objectStore.openCursor();

    cursor.onsuccess = function (e) {
        var res = e.target.result;

        if (res) {
            res.
            continue ();
            // tripInfo.push(res.value);
            console.log(tripInfo);
            tripInfo.push(res.value);
        }
    };
}

function findRoutesByRange(from, to) {
    var tx = db.transaction(["routers"], "readonly");
    var objectStore = tx.objectStore("routers");
    var range = IDBKeyRange.bound(from, to, false, true);
    var cursor = objectStore.index('title').openCursor(range);

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            console.log("route range")
            res.
            continue();
        }
    };
}