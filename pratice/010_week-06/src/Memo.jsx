import { useState } from "react";

export default function Memo() {
    let [num, setNum] = useState(0);
    let [counter, setCounter] = useState(0);

    function getSum(e) {
        num = 0;
        let input = e.target.value;
        for (let i = 1; i <= input; i++) {
            num += i;
        }
        setNum(num);
        console.log("getSum()   ");
    }

    function clickBtn() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <input onChange={(e) => getSum(e)} type="number" />
            <h4>Sum is {num}</h4>
            <button onClick={clickBtn}>Counter {counter}</button>
        </div>
    );
}
