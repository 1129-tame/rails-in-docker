import React from "react"

const name = "hello"; // 文字列リテラル

let nameChange = "hello";
nameChange = "hi";

let username: string = "Hello"; // 明示的な型指定
let dummyNum = 2; // int
let bool: boolean = true; // boolean
let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string; // なくても良い時
}

let objectname: NAME = { first: "yamada", last: null }; // NAME 型の object として定義 

const func1 = (x: number, y: number) => {
  return x + y;
}

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// Union Types
let value: boolean | number;
value = 10;
value = true;

let arrayUni: (number | string)[]; // 受け付けるデータ型を管理
arrayUni = [0, 1, 2, "hello"];

let company: "Facebook" | "Google" | "Amazon"; // 代入できるのはこの３つのうちどれか
company = "Amazon";

let memory: 256 | 512;
memory = 512;

type Props = {
  greeting: string
}

const HelloWorld: React.VFC<Props> = ({ greeting }) => {
  return <h1>
    Greeting_ts: {greeting}
    {/* {objectname.last} */}
  </h1>
}
// 親コンポートネントでインポートできる
export default HelloWorld
