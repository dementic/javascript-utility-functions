function callFunctionByString(func, args) {
    var fn = window[func];
    if (typeof fn === 'function') {
        fn(values);
    }
}
