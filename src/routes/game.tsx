import { SyntheticEvent, useRef, useState } from "react";
import cards from "../Store";
import Toast from "../Components/Toast";

const getRandomNumber = () => Math.floor(Math.random() * cards.length) + 1;

export default function Game() {
  const randomNumber = useRef<number>(getRandomNumber());
  const modalRef = useRef<HTMLDialogElement>(null);
  const [count, setCount] = useState(-1);
  const [round, setRound] = useState(0);
  const [answer, setAnswer] = useState("");
  const [toast, setToast] = useState("");

  function createToast(message: string) {
    setToast(message);
    setTimeout(() => {
      setToast("");
    }, 3000);
  }

  const card = cards[randomNumber.current];

  function handleAddCount() {
    // If limit reached stop and show warning
    if (count > 1) return;
    setCount(count + 1);
  }

  function handleLowerCount() {
    if (count < 1) return;
    setCount(count - 1);
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (round == 2) {
      modalRef.current?.showModal();
      return;
    }
    const regex = new RegExp(`${card.keyword}`, "gi");
    if (regex.test(answer)) {
      modalRef.current?.showModal();
    } else {
      createToast(`Wrong answer...`);
      setAnswer("");
    }
    setRound(round + 1);
  }

  function resetGame() {
    setCount(-1);
    setRound(0);
    setAnswer("");
    randomNumber.current = getRandomNumber();
    modalRef.current?.close();
  }

  return (
    <>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box flex flex-col items-center text-center">
          {round === 2 && (
            <div className="text-xl">
              <h1>You lost...</h1>
              <h2>Better luck next time</h2>
            </div>
          )}
          <div className="modal-action"></div>
          <div className="flex gap-2">
            <button className="btn bg-green-500" onClick={resetGame}>
              Try again?
            </button>
            <button className="btn bg-yellow-500">Exit</button>
          </div>
        </div>
      </dialog>
      <div className="flex flex-1 flex-col items-center justify-between p-8">
        <h1 className="text-center text-5xl">Round: {round + 1}/3</h1>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 text-center">
            <h2 className=" text-3xl underline">Buzzwords</h2>
            {card.buzzwords.map((e, i) => {
              return (
                <p key={i} className="text-xl">
                  {e}
                </p>
              );
            })}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <label className="flex flex-col items-center gap-2 text-3xl font-bold">
              What am I?
              <input
                className="input input-bordered"
                placeholder="input your answer here"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              ></input>
            </label>
            <button className="btn bg-green-500 text-xl">Submit</button>
          </form>
          <div className="flex flex-col items-center gap-2">
            <h3 className="flex flex-col items-center text-3xl  underline">
              Clues
            </h3>
            <div className="flex gap-2 text-xl">
              <button
                onClick={handleLowerCount}
                className={`${count === 0 && "invisible"}`}
              >
                {"<"}
              </button>
              <span>{count + 1}/3</span>
              <button
                onClick={handleAddCount}
                className={`${count === 2 && "invisible"}`}
              >
                {">"}
              </button>
            </div>
            <p className="text-lg">
              {card.clues[count] ?? "Reveal a clue..."}{" "}
            </p>
          </div>
        </div>
        <div></div>
      </div>
      {toast && <Toast message={toast} />}
    </>
  );
}
