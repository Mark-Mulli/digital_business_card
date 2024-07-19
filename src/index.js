import React from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"));

function App() {

    return (
        <div className  = "container">
            <div className="card">
                    
            </div>
    </div>
    );
    
}

root.render(<App />);