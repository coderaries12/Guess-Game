
import { useRef, useState } from "react";
import cards from "../Store";

const getRandomNumber = () => Math.floor(Math.random() * cards.length) + 1;

export default function Game() {
  const randomNumber = useRef(getRandomNumber());
  const modalRef = useRef<HTMLDialogElement>(null)
  const [count, setCount] = useState(-1);
  const [warning, setWarning] = useState(false);
  const [round, setRound] = useState(0);
  const [answer, setAnswer] = useState("")
  
  const card = cards[randomNumber.current];


  function handleAddCount() {
    // If limit reached stop and show warning 
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

  function handleSubmit (e: Event) {
    e.preventDefault();
    if (round == 2) {
      modalRef.current?.showModal();
      return;
  }
  const regex = new RegExp(`${card.keyword}`, 'gi')
  if (regex.test(answer)) {
    modalRef.current?.showModal();
  }
  else {
    setAnswer('')
    alert(`Ooops! Try again. ${2-round} more to go`)
  }
  setRound(round + 1)
  }

  return (
    <>
    <dialog ref={modalRef}>
    {round === 2 ? <div>
      you lost
      </div>: <div>you won!</div>}
    </dialog>
    <div>
      <p>Round: {round + 1}</p>
      <div>
        {card.buzzwords.map((e, i) => {
          return (
            <span key={i} style={{ border: "solid red", marginRight: "2rem" }}>
              {e}
            </span>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
      <input className="input" placeholder="What am I?" name="answer" value={answer} onChange={(e)=>setAnswer(e.target.value)} required></input>
      <button>Submit</button>
      </form>


      <div>
        <button onClick={handleLowerCount}>left</button>
        <span>Count: {count + 1}</span>
        <button onClick={handleAddCount}>right</button>
      </div>

      <p>{card.clues[count] ?? "Pick a clue"}</p>
      {warning && <p>All clues used!</p>}
    </div>

    </>
  );
}
