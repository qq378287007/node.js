fs.readFile(pathname, function (err, data) {
    if (err) {
        // Deal with error.
    } else {
        // Deal with data.
    }
});

try {
    var data = fs.readFileSync(pathname);
    // Deal with data.
} catch (err) {
    // Deal with error.
}