// function Logger(constructor: Function) { // 기본 데코레이터
//   console.log('Logging...');
//   console.log(constructor);
// }

function Logger(logString: string) { // 데코레이터 팩토리
  return function(constructor: Function) { // 데코레이터 동작을 정의하는 데코레이터 함수
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) { // 데코레이터 팩토리
  return function( constructor: any) { // 데코레이터 동작을 정의하는 데코레이터 함수
    // return function( _: Function) { 
    // _를 사용하면 인자가 들어오는건 알지만 현재는 필요하지 않아요 하지만 인지는 하고있다는 것을 타입스크립트에게 알리는 기호(_)이다
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor()
    if(hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

// @Logger('LOGGER - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

    constructor() {
      console.log('Creating person object...');
      
    }
}

const pers = new Person()

console.log(pers);
