import { useState } from "react";

function GreetingApp () {
    const [name, setName] = useState("");

    return (
        <div className="card p-4 border-primary text-center shadow-sm">
            <h4 className="mb-3">Type your Name</h4>
            <input  
                type="text" 
                className="form-control mb-3"
                placeholder="Enter your name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h5 className="text-muted">
                {name ? `Hello, ${name}!` : "Waiting to greet you.."}
            </h5>
        </div>
    )
}

export default GreetingApp