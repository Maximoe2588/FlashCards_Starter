import React from "react";
import { useHistory } from "react-router-dom";


function CreateDeckNavig(){
const history = useHistory();

  return (
        <div className="container">
         <nav>
           <ol>
             <li onClick={() => history.push("/")}className={"breadcrumb primary"}><a href="/">Home</a></li>
             <li className={"breadcrumb secondary"}>Create Deck</li>
           </ol>
         </nav>
       </div>
 );
  
  
}

export default CreateDeckNavig;