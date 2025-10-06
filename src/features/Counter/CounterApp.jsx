import { useState } from "react";

function CounterApp () {

    const[count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count -1);
    const reset = () => setCount(0);

    return (
        <div className="card border-info text-center p-4 shadow-sm">
            <div className="mb-3 fw-bold">React Counter</div>
            <h1 className="dispay-3">{count} React</h1>

            <div className="btn-group mt-3">
                <button className="btn btn-success" onClick={increment}>Add react +</button>
                <button className="btn btn-warning" onClick={reset}>Reset</button>
                <button className="btn btn-danger" onClick={decrement}>minus react -</button>
            </div>
        </div>
    )
}

export default CounterApp