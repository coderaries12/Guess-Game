export default function Instructions() {
  return (
    <div className="flex list-outside list-disc flex-col gap-2 text-xl marker:text-teal-700">
     <h1 style={{textAlign:"center", fontWeight:"Bold"}}>How to Play?</h1>
    <ol>
      <li>1. You will be shown three buzz words</li>
      <li>2. You have to guess the right word based on the buzz words</li>
      <li>3. You will have three chances to get the right answer</li>
      <li>4. If you need help, you can click on the Clues button and get upto three clues</li>  
    </ol>
    </div>
  );
}
