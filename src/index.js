import React from "react"
import { createRoot } from "react-dom/client"
import CardHeader from "./components/card_header";
import CardBody from "./components/card_body";
import CardFooter from "./components/card_footer";

const root = createRoot(document.querySelector("#root"));

function App() {

    return (
        <div className="row">
            <div className  = "container">
                <div className="card">
                    <CardHeader /> 
                    <CardBody />
                    <CardFooter />
                </div>
            </div>

            <div className  = "container">
                <div className="card">
                    <CardHeader /> 
                    <CardBody isWhiteBg  />
                    <CardFooter isWhite />
                </div>
            </div>
        </div>
     
    );
    
}

root.render(<App />);