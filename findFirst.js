// Pure javascript
function findFirst (obj, func) {
    var i;
    for (i = 0; i < obj.length; ++i) {
        if (func(obj[i], i))
            return obj[i];
    }
    return null;
}

// Usage:
var foo = findFirst(jsObject, function(item){ return item.Property == Value});

// AS JQuery plugin
$.extend({
    findFirst: function(a, b) {
        var i;
        for (i = 0; i < a.length; ++i) {
            if (b(a[i], i))
                return a[i];
        }
        return null;
    }
});
// Usage:
var foo = $.findFirst(jsObject, function(item){ return item.Property == Value});
