import React from "react";


const Instructions = (props)=> {
   
  
   return (
    
    
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title center"><h3><strong>Score: {props.score} | Top Score: {props.maxScore}</strong></h3></span>
          <h5 className="center">Click on an image, if you click on that image again you lose your points! </h5>
        </div>
      </div>
    

    );
}

export default Instructions;