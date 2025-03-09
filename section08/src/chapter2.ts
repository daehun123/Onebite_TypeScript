/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  // Person 객체의 모든 타입을 가져와 유니온 타입을 만듦     name | age
  return person[key];
}

const person = {
  name: "강대훈",
  age: 25,
};

getPropertyKey(person, "name");
