import React from "react";
import Data from "./date.json";

type USERS = typeof Data;

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

// Typeof 宣言済み変数を取得
// JSON の object を取得する際に、 typeof が全部やってくれて便利
let msg: string = "Hi";
let msg2: typeof msg;
msg = "string"

let animal = {cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" }; 


// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary" // key 名のみ入れることができる

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;

keySports = "baseball"

// enum 列挙型
// 自動で連番してくれる
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number,
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
}
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
}

// 型の互換性

const comp1 = "test"; // 文字列
let com2: string = comp1; // 代入できる string に 文字列は OK

let com3: string = "test";
// let comp4: "test" = com3; これはだめ

let funcComp1 = (x: number) => {}
let funcComp2 = (x: string) => {}

// funcComp1 = funcComp2 // これもだめ

// Generics ジェネリックス
interface GEN<T> { // この時点では型は定まっていない
  item: T;
}

const gen0: GEN<string> = {item: "Hello"}; // ここで型を指定
// const gen1: GEN = {item: "Hello"}; // error
const gen2: GEN<number> = {item: 12}; 

interface GEN1<T = string> { // この時点では型は定まっていない
  item: T;
}
const gen1: GEN1 = {item: "Hello"};

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = {item: "hello"};
const gen5: GEN2<number> = {item: 12}; // どっちもオーケー

function funcGen<T>(props: T) {
  return {item: props};
}
const gen6 = funcGen("test"); // 明示的にせずとも string 型が識別される
const gen7 = funcGen<string | null>(null); // string か null か

// extends
function funcGen1<T extends string | null>(props: T) {
  return {value: props};
}
const gen8 = funcGen1("hello");

interface Props2 {
  price: number;
}
function funcGen3<T extends Props2>(props: T) { // props2 に従う
  return {value: props.price};
}

const gen10 = funcGen3({price: 108});

// アロー関数 ver
const funcGen4 = <T extends Props2>(props: T) => {
  return { value: props.price };
}


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
