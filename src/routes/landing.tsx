export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <header className="flex justify-center p-4 text-4xl">
        <h1>Guess</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <button>Play</button>
          <button>Instructions</button>
        </div>
      </main>
      <footer className="flex justify-between p-2">
        <span>
          <a href="https://github.com/CastillejaCode">Julian</a> and{" "}
          <a href="https://github.com/coderaries12">Sheema</a>
        </span>
        <a href="https://github.com/coderaries12/Guess-Game">github</a>
      </footer>
    </div>
  );
}
