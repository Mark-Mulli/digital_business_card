import React from "react";

export default function CardBody() {
    return (
        <div className="cardBody">
            <div className="topBody">
                <h1 className="head1">Laura Smith</h1>
                <h5 className="head5">Frontend Developer</h5>
                <p className="p_graph">laurasmith.website</p>
            </div>

            <div className="buttons">
                <button type= "submit" className="btn">Email</button>
                <button type= "submit" className="btn">LinkedIn</button>
            </div>
        
            <div className="info-section">
                <div className="about">
                    <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>

                <div className="interest">
                    <h3>Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>  
            </div>
            
        </div>
        
    );
}