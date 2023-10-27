function sync(fn) {
    return fn();
}

try {
    sync(null);
    // Do something.
} catch (err) {
    console.log('Error: %s', err.message);
}
