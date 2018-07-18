import React from "react";


const Images = (props)=> {
   
  
   return (
        <img className={props.className} src={props.image} alt={props.alt} id={props.id} onClick={() => props.getId(props.id)}></img>
    );
}

export default Images;