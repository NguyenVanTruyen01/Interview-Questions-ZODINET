
function sumRange(start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
}

function calculate(start, end, doubleResult) {
    let result = sumRange(start, end);
    if (doubleResult) {
        result *= 2;
    }
    return result;
}
