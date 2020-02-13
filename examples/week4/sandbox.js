var x = 1; // global scope

function var_val(y) {
    if (y == undefined) {
        return x;
    } else {
        return y;
    }
}