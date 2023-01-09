import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import AddCardForm from "./AddCardForm";
import AddCardNavig from "./AddCardNavig";
import { readDeck } from "../utils/api/index"
import { useParams } from "./AddCardForm";


function AddCard(){
  const [deck, setDeck] = useState ({});
  const { deckId } = useParams ();
  const [ error, setError ] = useState[undefined];
  
    return <ErrorMessage error={error} />
  }
  
  if(!deck.id){
    return <h2>Loading...><h2>;
  } else{
       return(
       <div>
          <AddCardNavig deck={deck}/>
          <AddCardForm deck={deck} error={error} setError={setError} />
            
        );
      }
  }  

export default AddCard;
  
  
  
  
