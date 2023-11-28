function add(n1, n2) {
    return n1 + n2;
} // 함수 매개변수
function printResult(num) {
    console.log('Result: ' + num); // void 타입이란: 아무것도 반환하지 않는 타입 반환 값이 없는 경우에 사용하게 됨 void 타입은 자바스크립트엔 없는 개념
} // 함수 반환값
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// console.log(printResult(add(5, 12))); printResult는 void 타입이라 이 코드를 실행하면 undefined가 나온다.
// 하지만 undefined는 자바스크립트 내에선 존재하지 않는 속성이나 객체에 접근할 때 나타나는 값으로 표현됨
// undefined : 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태입니다.
// null : 변수는 존재하나, null 로 (값이) 할당된 상태. 즉 null은 자료형이 정해진(defined) 상태입니다.
// let combineValues: Function // 변수 타입을 함수로 지정할 수 있다.
var combineValues; // 함수로 지정한 타입에 화살표 함수 방식을 써서 매개변수와 반환값까지 타입을 정해 줄수 있다. (매개변수 a와 b는 형식만 같고 이름은 달라도 상관없다!)
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
