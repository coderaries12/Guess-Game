import { useRef } from 'react';
import './Modal.css';

interface Props {
	children: React.ReactNode;
}

function Modal({ children }: Props) {
	const modalRef = useRef<HTMLDialogElement>(null);
	return (
		<>
			<button onClick={() => modalRef.current?.showModal()}>{children}</button>
			<dialog ref={modalRef}>{children}</dialog>
		</>
	);
}

export { Modal };
