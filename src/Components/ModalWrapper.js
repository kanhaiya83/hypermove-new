import Modal from "react-modal";
import crossIcon from "./../assets/images/cross.svg"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "#2A2C36",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    border: "none",
    padding:0
  },
  overlay: {
    backgroundColor: "rgb(42,44,54,0.75)",
    zIndex:9999
  },
};

const ModalWrapper = ({ isOpen, setIsOpen, children }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Task Modal"
    >
             <div className="modal-wrapper">
             <button className="cross-btn" onClick={closeModal}><img src={crossIcon} alt="" /></button>

{children}
             </div>
    </Modal>
  );
};
export default ModalWrapper;
