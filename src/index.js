import React from "react"
import { createRoot } from "react-dom/client"
import CardHeader from "./components/card_header";
import CardBody from "./components/card_body";

const root = createRoot(document.querySelector("#root"));

function App() {

    return (
        <div className  = "container">
            <div className="card">
                   <CardHeader /> 
                   <CardBody />
            </div>
    </div>
    );
    
}

root.render(<App />);