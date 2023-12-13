import { useRef, useState } from "react";
import cards from "../Store";

export default function Game() {
  const getRandom = () => Math.floor(Math.random() * cards.length) + 1;
  const randomNumber = useRef(getRandom());
  const [count, setCount] = useState(-1);
  const [warning, setWarning] = useState(false);
  const card = cards[randomNumber.current];

  function getRandomBuzz() {
    const randomIndex = Math.floor(Math.random() * cards.length) + 1;
    return cards[randomIndex];
  }

  function randomClues() {
    if (count > 1) return;
    setCount(count + 1);
    let clue1 = randomObject.clues[count];
    return { clue1 };
  }
  //   const randomObject = getRandomBuzz();
  //console.log("json object", randomObject)
  //   const buzzwords = ["buzz", "buzz", "buzz"];
  //   const clues = ["clue1", "clue2", "clue3"];

  function handleAddCount() {
    if (count > 1) {
      setWarning(true);
      return;
    }
    setCount(count + 1);
  }

  function handleLowerCount() {
    if (count < 1) return;
    setCount(count - 1);
  }

  return (
    <>
      <div>
        {card.buzzwords.map((e, i) => {
          return (
            <span key={i} style={{ border: "solid red", marginRight: "2rem" }}>
              {e}
            </span>
          );
        })}
      </div>
      <input className="input" placeholder="What am I?"></input>

      <div>
        <button onClick={handleLowerCount}>left</button>
        <span>Count: {count + 1}</span>
        <button onClick={handleAddCount}>right</button>
      </div>

      <p>{card.clues[count] ?? "pick a clue"}</p>
      {warning && <p>Warning! One more turn!</p>}

      {/* 
      <div>
        <div>Clues:{count}</div>
        <div>
          <button
            style={{ border: "solid red", marginRight: "2rem" }}
            onClick={randomClues}
          >
            Clue 1
          </button>
        </div>

        <button style={{ border: "solid red", marginRight: "2rem" }}>
          Clue 2
        </button>
        <button
          style={{ border: "solid red", marginRight: "2rem" }}
          onClick={randomClues}
        >
          Clue 3
        </button>
      </div> */}

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
