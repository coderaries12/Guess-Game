import { Link } from "wouter";
import { Modal } from "../Components/Modal";
import Instructions from "../Components/Modal/Instructions";

export default function Landing() {
  return (
    <div className="flex flex-col gap-4">
      <Link to="/game" className="btn text-center">
        Play
      </Link>
      <Modal>
        <Instructions />
      </Modal>
    </div>
  );
}
