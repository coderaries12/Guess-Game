export default function Game() {
  const buzzwords = ["buzz", "buzz", "buzz"];
  const clues = ["clue", "clue", "clue"];
  return (
    <main>
      <div>
        {buzzwords.map((e) => {
          return <p>{e}</p>;
        })}
      </div>

      <input className="input" placeholder="What am I?"></input>

      <div>
        {clues.map((e) => {
          return <p>{e}</p>;
        })}
      </div>
    </main>
  );
}
