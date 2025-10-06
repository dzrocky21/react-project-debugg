import { useState } from "react";
import NameInput from "../Forms/NameInput";


function NameContainer () {
    const [userName, setUserName] = useState("");

    return (
        <div className="card p-4 shadow-sm text-center">
            <h4 className="mb-3">Who's using this app?</h4>
            <NameInput onNameChange={setUserName} />
            <p className="mt-3 text-muted">
                {userName 
                    ? `Hello, ${userName}! Welcome Back.`
                    : `Waiting for a name..`
                }
            </p>
        </div>
    )
}

export default NameContainer

