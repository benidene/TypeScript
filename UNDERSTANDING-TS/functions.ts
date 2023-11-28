function add(n1: number, n2: number) { // 함수의 결과값은 타입을 명시적으로 설정할 이유가 있지 않은 이상 타입스크립트가 알아서 추론하게 두는것이 낫다.
  return n1 + n2
} // 함수 매개변수

function printResult(num: number) { // 이 함수의 반환타입은 void 타입
  console.log('Result: ' + num); // void 타입이란: 아무것도 반환하지 않는 타입 반환 값이 없는 경우에 사용하게 됨 void 타입은 자바스크립트엔 없는 개념
} // 함수 반환값

function addAndHandle(n1: number, n2: number, cb: (num: number) => void ) { // 결과값을 void로 함은 여기서 반환된 결과를 무시하겠다고 의도적으로 알려주는 것
  const result = n1 + n2 
  cb(result)
} // addAndHandle 안에서 콜백함수의 반환 타입으로는 아무것도 하지 않겠다고 선언한 것 그래서 addAndHandle()에서 그 무엇을 반환하여도 콜백 타입만 잘 명시하고 콜백으로 아무것도 안하면 문제가 없는 것

printResult(add(5, 12))
// console.log(printResult(add(5, 12))); printResult는 void 타입이라 이 코드를 실행하면 undefined가 나온다.
// 하지만 undefined는 자바스크립트 내에선 존재하지 않는 속성이나 객체에 접근할 때 나타나는 값으로 표현됨
// undefined : 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태입니다.
// null : 변수는 존재하나, null 로 (값이) 할당된 상태. 즉 null은 자료형이 정해진(defined) 상태입니다.

// let combineValues: Function // 변수 타입을 함수로 지정할 수 있다.
let combineValues: (a: number, b: number) => number // 함수로 지정한 타입에 화살표 함수 방식을 써서 매개변수와 반환값까지 타입을 정해 줄수 있다. (매개변수 a와 b는 형식만 같고 이름은 달라도 상관없다!)

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => { // 콜백함수를 정의해놓으면 좋은점: 함수안에서 콜백을 전달하면 타입스크립트는 결과가 숫자라는 걸 추론한다.
  console.log(result);
})
