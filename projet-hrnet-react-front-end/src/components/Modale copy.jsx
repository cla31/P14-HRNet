import '../style/components/modal.css'
import iconeValidation from '../assets/validation.svg'
import { useState } from 'react'

const Modal = ({ message, closeModal }) => {
  const [showModal, setShowModal] = useState(true)
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    showModal && (
      <div className="container-modal">
        <div className="background-modal"></div>
        <div className="modal">
          <div className="modal-cross-container">
            <div className="modal-cross" onClick={handleClose}>
              X
            </div>
          </div>
          <div className="message-modal-button">
            <div>
              <img
                className="image-modal"
                src={iconeValidation}
                alt="icone validation"
              />
            </div>
            <h1 className="message-modal">{message}</h1>
            <button className="button-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  )
}
export default Modal
