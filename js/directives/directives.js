app.filter('inStock', inStock);

function inStock() {
    return function (yesNo) {
        if (yesNo === true)
            return "Yes";
        else
            return "No";
    }
}
