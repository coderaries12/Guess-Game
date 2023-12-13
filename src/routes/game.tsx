import { useState } from "react";
import cards from "../Store";


export default function Game() { 
  const[count,setCount]=useState(0)

  function getRandomBuzz() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }
  
    
    function randomClues(){
    setCount(1)
    let clue1=randomObject.clues[count]
    return {clue1}
  }
  const randomObject = getRandomBuzz();
 //console.log("json object", randomObject)  
  const buzzwords = ["buzz", "buzz", "buzz"];
  const clues = ["clue", "clue", "clue"];
  return (
    <>
      <div>
        {randomObject.buzzwords.map((e) => {
          return <span style={{border:"solid red",marginRight:"2rem"}}>{e}</span>;
        })}
      </div>
      <input className="input" placeholder="What am I?"></input>
       <div>
        <div>Clues:{count}</div>
        <div>
          <button style={{border:"solid red",marginRight:"2rem"}} onClick={randomClues}>Clue 1</button> 
        </div>
        
        <button style={{border:"solid red",marginRight:"2rem"}}>Clue 2</button>
        <button style={{border:"solid red",marginRight:"2rem"}} onClick={randomClues}>Clue 3</button>
      </div>  
      {/* <button onclick={() => setCount(++count)}>Use Clue</button>
      <p id="clueCounter">Clue Counter: {count}</p>
      
      {console.log("json object",randomObject.clues)}
      {console.log("count",count)}
      <div>{randomObject.clues[count]}</div> */}
      {/* <div>
        {randomObject.clues.map((e) => {
          return <p>{e}</p>;
        })}
      </div> */}
    </>
  );
}
