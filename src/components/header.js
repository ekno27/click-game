import React from "react";

const Header = (props) =>{
    return (
      <div>
            <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Click To Win!</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a>Click an image to begin!</a></li>
                <li><a>Score: {props.score} | Top Score: {props.maxScore}</a></li>
            </ul>
            </div>
            </nav>
                    
        </div>
    );
}

export default Header;