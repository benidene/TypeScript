const button = document.querySelector('button')!;


function add(n1:number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

if(button) {
  button.addEventListener('Click', clickHandler.bind(null, "You're welcome!"))
}


// bind()란?
// 새로운 바인딩 생성 -> this 값 설정 -> 매개변수 고정 -> 새로운 함수 반환
// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// const person = {
//   name: 'John'
// };
// const greetPerson = greet.bind(person, 'Hello'); 3. this 값 설정
// greet.bind(person, 'Hello')은 greet 함수의 새로운 바인딩을 생성하고,
// this 값을 person으로, 첫 번째 매개변수를 항상 'Hello'로 설정합니다.

// greetPerson('!'); // 출력: Hello, John! 4. 새로운 함수 반환
// 그리고 새로운 함수 greetPerson을 호출할 때 '!'라는 
// 매개변수가 추가로 전달되면서 최종적으로 출력이 이루어집니다.


