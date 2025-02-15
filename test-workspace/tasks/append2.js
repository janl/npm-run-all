"use strict";

var appendResult = require("../../test/lib/util").appendResult;

function append() {
    appendResult(process.argv[2]);
}

append();
setTimeout(function() {
    setTimeout(function() {
        setTimeout(append, 1000);
    }, 1000);
}, 1000);

// SIGINT/SIGTERM Handling.
process.on("SIGINT", function() {
    process.exit(0);
});
process.on("SIGTERM", function() {
    process.exit(0);
});
