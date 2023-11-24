function combine(// 리터럴 타입을 사용하면 문자열이나 숫자에 정확한 값을 지정할 수 있다.
input1, input2, resultConversion // 리터럴 타입이자 유니언 타입
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString()
    // }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
