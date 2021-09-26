import React, { useState } from "react";

interface Props {
    text: string;
}
interface UserData {
    id: number;
    name: string;
}

// ジェネリクスを用いて引数の型を interface で定義したものにする
const TestComponent: React.FC<Props> = (props) => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState<UserData>({id:1, name:"dummy"}); // obj に沿ったもののみ受け付ける
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {

    }
        // setInputData(e.target.event);

    return (
        <div>
            <h1>
                {props.text}
            </h1>
            <h1>{count}</h1>
            {/* <input type="text" vaule={inputData} onChange={handleInputChange} /> */}
            <h2>{inputData}</h2>
        </div>
    );
};

export default TestComponent;