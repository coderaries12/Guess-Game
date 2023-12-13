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

      <div>
        <h2>What am I?</h2>
        <input className="input" placeholder="What am I?"></input>
      </div>

      <div>
        {clues.map((e) => {
          return <p>{e}</p>;
        })}
      </div>
    </main>
  );
}
