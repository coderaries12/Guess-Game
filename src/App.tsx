import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TextAnimated from "./Components/TextAnimated";
import Game from "./routes/game";
import Landing from "./routes/landing";
import { Route } from "wouter";

const title = "guess";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header title={title} />
      <Route path="/" component={TextAnimated} />
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
