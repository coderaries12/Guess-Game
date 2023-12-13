import { useRef } from "react";


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
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box p-4 text-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export { Modal };
