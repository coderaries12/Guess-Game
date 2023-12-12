// modal.ts

// Import any necessary dependencies or modal-related modules
import './Modal.css'

class Modal {
    private modalElement: HTMLElement;
    private closeButton: HTMLElement;
  
    constructor(modalId: string) {
      // Assuming you have an HTML structure with a modal element and a close button
      this.modalElement = document.getElementById(modalId) as HTMLElement;
      this.closeButton = this.modalElement.querySelector('.close-button') as HTMLElement;
  
      // Add event listeners
      this.closeButton.addEventListener('click', this.closeModal.bind(this));
      document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
  
    private closeModal() {
      this.modalElement.style.display = 'none';
    }
  
    private openModal() {
      this.modalElement.style.display = 'block';
    }
  
    private handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    }
  }
  
  export default Modal;
  