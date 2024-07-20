import React from "react";

export default function CardFooter({ isWhite }) {
    return(
        <div className={`footer ${isWhite ? 'white' : ''}`}>
            <div className="footerIcon">
                <i class="ri-twitter-fill"></i>
            </div>

            <div className="footerIcon">
                <i class="ri-facebook-fill"></i>
            </div>

            <div className="footerIcon">
                <i class="ri-instagram-line"></i>
            </div>

            <div className="footerIcon">
                <i class="ri-github-fill"></i>
            </div>           
        </div>
    );
}