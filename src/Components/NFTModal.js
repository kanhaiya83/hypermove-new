import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: 'auto',
    bottom: 'auto',
    width: "100%",
    paddingTop:"20px",
  },
  overlay:{
    zIndex:1031
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const NFTModal=({url,showModal,setShowModal})=>{
    const closeModal=()=>{
        setShowModal(false)
    }
    return(
        <Modal isOpen={showModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
            <button className="nft-modal-cross-btn" onClick={closeModal}><img src="./assets/images/cross.svg" alt="" /></button>
            <span className="nft-modal-text">To access QR code and experience the AR shoe in your live environment, click the AR icon on top right corner.</span>
            <div className="nft-modal-iframe-container">
            <iframe src={url} frameborder="0" width="100%" height="100%"></iframe>
            </div>
        </Modal>
    )
}
export default NFTModal;