import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Game from "./routes/game";
import Landing from "./routes/landing";
import { Route } from "wouter";
import { motion } from "framer-motion";

const title = "guess";
const list = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    y: -200,
  },
};
const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -200 },
};

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header title={title} />
      <motion.div
        variants={list}
        initial="hidden"
        animate="visible"
        className="absolute top-28 w-fit self-center text-center font-['Berkshire_Swash']  text-7xl leading-normal text-red-900"
      >
        <motion.h1 variants={item}>Christmas</motion.h1>
        <motion.h1 variants={item}>Edition</motion.h1>
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
