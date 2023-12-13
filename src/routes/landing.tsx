import { Link } from "wouter";
import { Modal } from "../Components/Modal";
import Instructions from "../Components/Modal/Instructions";

export default function Landing() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/game"
        className="btn btn-lg bg-teal-700 text-center font-['Berkshire_Swash'] text-3xl text-cyan-50 hover:bg-teal-900"
      >
        Play
      </Link>
      <div>
        <Modal>
          <Instructions />
        </Modal>
      </div>
    </div>
  );
}
