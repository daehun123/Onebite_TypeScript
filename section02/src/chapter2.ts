// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winter"];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]; //push pop 가능

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["강대훈", 1],
  ["차영건", 2],
  ["이채주", 3],
  ["문세진", 4],
  //[5,"정순재"]
];
