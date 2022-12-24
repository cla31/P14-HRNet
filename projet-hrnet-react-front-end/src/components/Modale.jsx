const Modal = ({ message, closeModal }) => {
  return (
    <div>
      <div>
        <div>{message}</div>
        <button onClick={closeModal}>Fermer la modale</button>
      </div>
    </div>
  )
}
export default Modal
