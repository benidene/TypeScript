// 인터페이스는 객체의 구조를 정의한다
// 하지만 class 처럼 청사진을 그리는 것은 아니다
// 객체가 어떤 구조로 가져야 할지 정의하면 된다
// 구조는 정의할 수 있지만 값을 할당할 순 없다
// class와 마찬가지로 세미콜론을 통해 속성을 분리합니다

// type AddFn = (a: number, b: number ) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

// 인터페이스를 사용해 클래스에 포함되어야 하는 구조를 강제할 수 있다
// 클래스에 인터페이스의 구조를 더 추가해 넣을순 있지만 뺄순 없다
// 인터페이스에 private이나 public은 사용 불가 readonly는 가능
// readonly 사용하면 해당 프로퍼티는 한번만 설정 할수있게 제한된다
// 객체가 초기화된 후에는 프로퍼티를 수정할 수 없다
interface Named {
  readonly name?: string;
  outputName?: string;
  // 프로퍼티 이름 뒤에 ?를 더해서 선택적 프로퍼티로 선언할 수 있다
}
// 인터페이스는 상속에 상속 가능
interface Greetable extends Named {
  greet(phrase: string): void // 메소드
}



class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    // n이 있는 경우에만 name이 설정되게 함 n이 없을 경우도 있으니 인터페이스 name에도 ?를 추가함
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable

user1 = new Person()
// user1.name = 'Mana' // readonly라 재할당 불가능 

user1.greet('Hi there - I am')
console.log(user1);

