// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// =
enum Role { ADMIN, READ_ONLY, AUTHOR };

// const person: {
//     name: string; 문자열
//     age: number; 숫자
//     hobbies: string[]; 문자 배열
//     role: [number, string]; 튜플
// } = {
//     name: 'hyundong',
//     age: 25,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// } = 밑의 코드와 같은 의미 = 타입스크립트가 알아서 타입추론하게 냅두자!
const person = {
     name: 'hyundong',
     age: 25,
     hobbies: ['Sports', 'Cooking'],
     role: Role.ADMIN
};


// person.role.push('admin') // 타입스크립트가 잡지 못하는 error case
// person.role[1] = 0; // 타입스크립트가 잡는 error case
// person.role = [0, 'admin', 'user'] // 타입스크립트가 잡는 error case

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log('My hobby is '+ hobby.toUpperCase())
    // console.log('My hobby is '+ hobby.map()) // ERROR !!!
}

if(person.role === Role.AUTHOR) {
    console.log('is author');
}

// 중첩된 개체 및 타입
// 물론 객체 타입은 중첩 객체에 대해서도 생성할 수 있습니다.

// 다음과 같은 자바스크립트 객체가 있다고 가정해 봅시다:

// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// 이러한 객체의 타입은 아래와 같습니다.
// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// 따라서 객체 타입 안에 객체 타입이 있다고 말할 수 있습니다.