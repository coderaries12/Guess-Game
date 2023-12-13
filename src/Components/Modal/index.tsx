import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

function Modal({ children }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        className="btn btn-lg bg-teal-700 text-2xl text-cyan-50 font-['Berkshire_Swash']"
        onClick={() => modalRef.current?.showModal()}
      >
        Instructions
      </button>
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box flex w-fit flex-col items-center px-12 py-8">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
          <form method="dialog">
            <button className="btn btn-lg mt-8 bg-teal-700 text-cyan-50 font-['Berkshire_Swash']">I'm Ready!</button>
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
