function addRoute(o) {
    var tx = db.transaction(["routers"], "readwrite");
    var store = tx.objectStore("routers");

    var request = store.add(o);

    request.onsuccess = function (e) {
    };

    request.onerror = function (e) {
    };
}

function findRouteByKey(key) {
    var tx = db.transaction(["routers"], "readonly");
    var store = tx.objectStore("routers");
    var request = store.get(key);

    request.onsuccess = function (e) {
    };
}

function findAllRoutes() {
    var tx = db.transaction(["routers"], "readonly");
    var objectStore = tx.objectStore("routers");
    var cursor = objectStore.openCursor();

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            res.
            continue ();
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
            res.continue();
        }
    };
}