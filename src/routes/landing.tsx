import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Modal } from "../Components/Modal";
import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header title={"guess"} />
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <Link to="/game">Play</Link>
          <Modal>
            <span>Instructions</span>
          </Modal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
