import ThemeToggle from "../features/Theme/ThemeToggle"
import React from "react"
import brightSun from "../assets/brightSun.png";

function AppHeader() {
    return (
        <header className="bg-info text-dark p-4 text-center">
            <h1 className="fw-bolder text-primary">Your React Page</h1>
            <p className="text-secondary">Welcome to your react page, scrutinize the sporadic exception!</p>
            
                <div className="nav nav-tabs justify-content-between">

                    <img src={brightSun} alt="My Assets" className="rotate" width= {100} height= {100} />
                    
                    < ThemeToggle />
            
                    
                </div>
            
            
        </header>
        
    )
    
}


export default AppHeader