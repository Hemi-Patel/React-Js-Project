import { useEffect, useState } from "react";
import "./Counter.css"

function Counter() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        let c = JSON.parse(localStorage.getItem("cnt"));
        if (c !== null) {
            setCount(c);
        } else {
            setCount(0);
            localStorage.setItem("cnt", JSON.stringify(0));
        }


    }, [setCount])
    let increment = () => {
        var newCount = count + 1;
        setCount(newCount);
        localStorage.setItem("cnt", JSON.stringify(newCount));
    }
    let decrement = () => {

        if (count > 0) {
            var newCount = count - 1;
        } else {
            newCount = 0;
            alert("can not decrement");
        }
        setCount(newCount);
        localStorage.setItem("cnt", JSON.stringify(newCount));
    }
    return (
        <>
            <div className="main">
                <div className="mystyle">
                    <h1 style={{ textAlign: "center", fontSize: "48px" }}>Counter App <br></br>Build With React JS</h1>
                    <h2 style={{ fontSize: "72px" }}>{count}</h2>
                    <div style={{ display: "flex" }}>
                        <button className="btnStyle" onClick={() => decrement()}>-</button>
                        <button className="btnStyle" onClick={() => setCount(0)}>Reset</button>
                        <button className="btnStyle" onClick={() => increment()}>+</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Counter;