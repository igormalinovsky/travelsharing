function addBlog(o) {
    var tx = db.transaction(["blogs"], "readwrite");
    var store = tx.objectStore("blogs");

    var request = store.add(o);

    request.onsuccess = function (e) {
    };

    request.onerror = function (e) {
    };
}

function findBlogByKey(key) {
    var tx = db.transaction(["blogs"], "readonly");
    var store = tx.objectStore("blogs");
    var request = store.get(key);

    request.onsuccess = function (e) {
    };
}

function findAllBlogs() {
    var tx = db.transaction(["blogs"], "readonly");
    var objectStore = tx.objectStore("blogs");
    var cursor = objectStore.openCursor();

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            res.
            continue ();
        }
    };
}

function findBlogsByRange(from, to) {
    var tx = db.transaction(["blogs"], "readonly");
    var objectStore = tx.objectStore("blogs");
    var range = IDBKeyRange.bound(from, to, false, true);
    var cursor = objectStore.index('title').openCursor(range);

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            res.continue();
        }
    };
}