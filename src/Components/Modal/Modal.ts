// modal.ts

// Import any necessary dependencies or modal-related modules
import './Modal.css'

function showModal(modalId: string): void {
  const modalElement = document.getElementById(modalId);

  if (modalElement) {
    modalElement.style.display = 'block';
  }
}

function hideModal(modalId: string): void {
  const modalElement = document.getElementById(modalId);

  if (modalElement) {
    modalElement.style.display = 'none';
  }
}

export { showModal, hideModal };
