function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result ' + num);
}
printResult(add(5, 12));
// 함수의 결과값은 타입을 명시적으로 설정할 이유가 있지 않은 이상 타입스크립트가 알아서 추론하게 두는것이 낫다.
