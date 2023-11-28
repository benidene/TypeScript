function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number) { // 이 함수의 반환타입은 void 타입
  console.log('Result: ' + num); // void 타입이란: 아무 것도 반환하지 않는 타입 void 타입은 자바스크립트엔 없는 개념
}

printResult(add(5, 12))
// console.log(printResult(add(5, 12))); printResult는 void 타입이라 이 코드를 실행하면 undefined가 나온다. 
// 하지만 undefined는 자바스크립트 내에선 어떠한 값으로 표현됨
// undefined : 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태입니다.
// null : 변수는 존재하나, null 로 (값이) 할당된 상태. 즉 null은 자료형이 정해진(defined) 상태입니다.

// 함수의 결과값은 타입을 명시적으로 설정할 이유가 있지 않은 이상 타입스크립트가 알아서 추론하게 두는것이 낫다.