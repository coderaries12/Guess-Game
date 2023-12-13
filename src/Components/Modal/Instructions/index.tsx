export default function Instructions() {
  return (
    <ol className="flex list-outside list-disc flex-col gap-2 text-xl marker:text-green-950">
      <li>The three buzz words are given</li>
      <li>You have to guess the right word</li>
      <li>The 3 clues are also available</li>
      <li>You can use clues at any time</li>
      <li>The clues get reset in a new game</li>
    </ol>
  );
}
