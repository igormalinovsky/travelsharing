var db = null;
var DBNAME = "besTrip";
var DBVER = 1;

function openDB() {
    var request = indexedDB.open(DBNAME, DBVER);

    request.onupgradeneeded = function (e) {
        console.log("Upgrading...");

        var thisDB = e.target.result;
        var store = null;
        if (!thisDB.objectStoreNames.contains("users")) {
            store = thisDB.createObjectStore("users", {
                keyPath: "email"
            });


            store.createIndex('name', 'name', {
                unique: false
            });
        }

        if (!thisDB.objectStoreNames.contains("routers")) {
            store = thisDB.createObjectStore("routers", {
                keyPath: "title"
            });


            store.createIndex('author', 'author', {
                unique: false
            });
        }

        if (!thisDB.objectStoreNames.contains("blogs")) {
            store = thisDB.createObjectStore("blogs", {
                keyPath: "title"
            });


            store.createIndex('author', 'author', {
                unique: false
            });
        }

        if (!thisDB.objectStoreNames.contains("comments")) {
            store = thisDB.createObjectStore("comments", {
                keyPath: "author"
            });


            store.createIndex('text', 'text', {
                unique: false
            });
        }
    };

    request.onsuccess = function (e) {
        console.log("openDB success!");

        db = e.target.result;
    };

    request.onerror = function (e) {
        console.log("openDB error");

    };
}