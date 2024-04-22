import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

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
    console.log("Re-render Count");
    return (
        <div>
            <CountRenderer />
            <Buttons />
            <EvenCountRenderer />
        </div>
    );
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    // console.log("Re-render CountRenderer");

    return (
        <div>
            <h4>Count : {count}</h4>
        </div>
    );
}

function EvenCountRenderer() {
    const isEven = useRecoilValue(evenSelector);
    return <>{isEven ? <p>Count is even</p> : ""}</>;
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    console.log("Re-render Buttons");

    return (
        <div>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    setCount((count) => count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}
