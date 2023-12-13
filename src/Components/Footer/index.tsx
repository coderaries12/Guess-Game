export default function Footer() {
  return (
    <footer className="flex justify-between px-4 py-2">
      <span>
        <a className="font-['Berkshire_Swash']">Made for Holidays 2023 by: </a>
        <a href="https://github.com/CastillejaCode" target="_blank" rel="noreferrer" className="underline text-orange-500 font-['Berkshire_Swash']">
          Julian
        </a>{" "}
        <a className="font-['Berkshire_Swash']">and{" "}</a>
        <a href="https://github.com/coderaries12" target="_blank" rel="noreferrer" className="underline text-orange-500 font-['Berkshire_Swash']">
          Sheena
        </a>
      </span>
      <a
        href="https://github.com/coderaries12/Guess-Game"
        target="_blank" rel="noreferrer"
        className="underline font-['Berkshire_Swash'] "
      >
        GitHub
      </a>
    </footer>
  );
}
