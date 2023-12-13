import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Game from "./routes/game";
import Landing from "./routes/landing";
import { Route } from "wouter";

const title = "guess";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title={title} />
      <main className="flex flex-1 flex-col items-center justify-center">
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
