/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};
let person = {} as Person; // 타입 단언
person.name = "강대훈";
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입

let num3 = 10 as unknown as string; // 다중 단언 <- 좋은 방법은 아님

/**
 * const 단언
 */

let num4 = 10 as const; // 리터럴 타입으로 치환

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // readonly으로 치환

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "강대훈",
};

const len: number = post.author!.length;
