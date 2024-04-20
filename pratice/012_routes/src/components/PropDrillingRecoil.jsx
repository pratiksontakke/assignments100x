import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";

export default function PropDrillingRecoil() {
    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    );
}

function Count() {
    console.log("Re-render recoil");
    return (
        <div>
            <CountRenderer />
            <Buttons />
        </div>
    );
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    return (
        <div>
            <h4>Count : {count}</h4>
        </div>
    );
}

function Buttons() {
    const [count, setCount] = useRecoilState(countAtom);
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}
