import { Link } from "wouter";
import { Modal } from "../Components/Modal";

export default function Landing() {
  return (
    <div className="flex flex-col gap-4">
      <Link to="/game" className="btn text-center">
        Play
      </Link>
      <Modal>
        <span>Instructions</span>
      </Modal>
    </div>
  );
}
