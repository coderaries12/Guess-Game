import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Game from "./routes/game";
import Landing from "./routes/landing";
import { Route } from "wouter";
import { motion } from "framer-motion";

const title = "guess";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header title={title} />
      <motion.div className="my-12 flex flex-col gap-2">
        <motion.h2
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 2 }}
          className=" text-center text-6xl"
        >
          Christmas
        </motion.h2>
        <motion.h2
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 2.5 }}
          className="text-center text-6xl"
        >
          Edition
        </motion.h2>
      </motion.div>
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
