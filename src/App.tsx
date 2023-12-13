import Game from "./routes/game";
import Landing from "./routes/landing";
import { Route } from "wouter";

function App() {
  return (
    <>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
      ;
    </>
  );
}

export default App;
