import { SyntheticEvent, useRef, useState } from "react";
import cards from "../Store";
import Toast from "../Components/Toast";
import { Link } from "wouter";

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
            <div>
              <div className="text-xl font-['Berkshire_Swash'] text-orange-700 ">
                <h1>You lost...</h1>
                <h2>Better luck next time</h2>
              </div>
              <div className="modal-action"></div>
              <div className="flex justify-between gap-2">
                <button className="btn bg-green-500" onClick={resetGame}>
                  Play again?
                </button>
                <Link to="/" className="btn bg-yellow-500" onClick={resetGame}>
                  Exit
                </Link>
              </div>
            </div>
          )}
          {round !== 2 && (
            <div>
              <div className="text-xl font-['Berkshire_Swash'] text-orange-700">
                <h1>You won!</h1>
                <h2>Amazing work out there!</h2>
              </div>
              <div className="modal-action"></div>
              <div className="flex justify-center gap-2">
                <button className="btn bg-green-500" onClick={resetGame}>
                  Play again?
                </button>
                <Link to="/" className="btn bg-yellow-500" onClick={resetGame}>
                  Exit
                </Link>
              </div>
            </div>
          )}
        </div>
      </dialog>
      <div className="flex w-full flex-1 flex-col items-center justify-between p-8">
        <h1 className="text-center text-5xl">Attempts: {round + 1}/3</h1>
        <div className="flex flex-col gap-12">
          <div className="flex w-full flex-col gap-2 text-center">
            <h2 className=" text-3xl underline font-['Berkshire_Swash']">Buzzwords</h2>
            <p className="text-2xl text-orange-700">{card.buzzwords.join(" - ")}</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <label className="flex flex-col items-center gap-2 text-3xl font-bold font-['Berkshire_Swash'] ">
              What am I?
              <input
                className="input input-bordered"
                placeholder="Input your answer here"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              ></input>
            </label>
            <button className="btn btn-lg bg-teal-700 hover:bg-teal-900 font-['Berkshire_Swash'] text-center text-3xl text-cyan-50">Submit</button>
          </form>
          <div className="flex flex-col items-center gap-2">
            <h3 className="flex flex-col items-center text-3xl font-['Berkshire_Swash'] ">Clues</h3>
            <div className="flex gap-2 text-xl">
              <button
                onClick={handleLowerCount}
                className={`${count < 1 && "invisible"}`}
              >
                {"-"}
              </button>
              <span>{count + 1}/3</span>
              <button
                onClick={handleAddCount}
                className={`${count === 2 && "invisible"}`}
              >
                {"+"}
              </button>
            </div>
            <p className="text-lg text-orange-700">
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
