let userInput: unknown // 사용자가 무엇을 입력할지 모르는 상황일땐 unknown 타입을 사용한다. any타입과 유사하지만 다르다.
// any 타입은 타입체크 자체를 하지않는다. unknown이 좀 더 제한적이다. 
// unknown 타입으로 선언된 변수는 any를 제외한 다른 타입으로 선언된 변수에 할당될 수 없다는 것이다. ( userInput = userName -> 불가능 )
// 도움 되는 링크: https://jbee.io/typescript/TS-9-unknown/
let userName: string

userInput = 5
userInput = 'Max'
if(typeof userInput === 'string') {
  userName = userInput;
}

// if(typeof userInput === 'string') {
//   userName = userInput;
// } // userName = userInput 이건 오류가 안나고 userInput = userName 이건 오류가 발생했다 이유는 저 코드를 타입으로 변환하자면
//  userName = userInput은 string = unknown으로 unknown은 string이다 라고 배정해준 것이고 
//  userInput = userName은 string은 사실 unknown이지롱 이라고 말도 안되는 것을 배정하려고 했기 때문에 오류가 발생한 것이다.

function generateError(message: string, code: number): never { // never 타입은 함수안에서 코드진행이 멈추거나 스크립트를 멈추게 되는 상황(프로그램이 작동을 멈추게 되는 상황, 무한루프 등)에 사용한다.
  throw { message: message, errorCode: code}; // never 타입도 void와 마찬가지로 아무것도 반환하지 않는 함수 타입이다
}

generateError('An error occurred!', 500)