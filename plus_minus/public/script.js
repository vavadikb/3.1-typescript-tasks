var types;
(function (types) {
    types["plus"] = "+";
    types["minus"] = "-";
})(types || (types = {}));
function clickFunc(type) {
    var body = JSON.stringify({
        sign: type
    });
    fetch('http://localhost:3000/plus-minus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
    console.log("".concat(type, " was prassed"));
}
