import { useState } from "react";


function ToggleBio () {
    const [showBio, setShowBio] = useState(false);
    const bio = "Hi, I'm Rocky, a React enthusiast who loves building smart UI and teaching the world to code."

    return (
        <div className="card p-4 border-success shadow-sm text-center">
            <h4 className="mb-3">About me</h4>
            <button 
                className="btn btn-info mb-3"
                onClick={() => setShowBio(!showBio)}
            >
                    {showBio ? "Hide Bio" : "Show Bio"}
            </button>
            {showBio ? (
                    <p className="text-muted">{bio}</p>
            ) : (   
                    <p className="text-muted">Click the button to learn more.</p>
                )}
        </div>
    )
}

export default ToggleBio