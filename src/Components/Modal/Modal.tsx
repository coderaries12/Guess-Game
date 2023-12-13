import { useRef } from "react";
import "./Modal.css";

interface Props {
  children: React.ReactNode;
}

function Modal({ children }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className="btn" onClick={() => modalRef.current?.showModal()}>
        instructions
      </button>
      <dialog id="my_modal_2" className="modal" ref={modalRef}>
        <div className="modal-box">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export { Modal };
