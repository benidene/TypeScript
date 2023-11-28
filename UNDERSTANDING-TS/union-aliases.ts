type combinable = number | string; // Type Aliases란 타입을 지칭해 줄수있다. 보통 유니언타입과 합쳐서 사용한다.
type ConversionDescriptor = 'as-number' | 'as-text' // 리터럴 타입이자 유니언 타입( | )이자 타입 알리어스( type ConversionDescriptor )
    // 리터럴 타입('as-number')을 사용하면 문자열이나 숫자에 정확한 값을 지정할 수 있다.

function combine(
    input1: combinable, 
    input2: combinable, 
    resultConversion: ConversionDescriptor 
    ) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    } return result
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString()
    // }
 }

    const combinedAges = combine(30, 26, 'as-number');
    console.log(combinedAges);;

    const combinedStringAges = combine('30', '26', 'as-number');
    console.log(combinedStringAges);

    const combineNames = combine('Max', 'Anna', 'as-text');
    console.log(combineNames);;
 