import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

function Modal({ children }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        className="btn btn-lg bg-green-400 text-2xl"
        onClick={() => modalRef.current?.showModal()}
      >
        Instructions
      </button>
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box flex w-fit flex-col items-center px-12 py-8">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
          <form method="dialog">
            <button className="btn btn-lg mt-8 bg-green-500">Thanks!</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export { Modal };
