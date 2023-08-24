import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export function ModalContainer({isOpen, modalWidth, onRequestClose, children}) {
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        const handleResize = () => {
        setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: width <= 412 ? '95vw' : modalWidth,
          padding: 0,
        },    
          overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgb(120, 120, 120,0.5)',
          zIndex: 50
        },
      };

    return (
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose} 
        style={customStyles}
        contentLabel="Modal Container"
        headerClassName="modal-header"
        appElement={document.getElementById("root")} 
        >
            {children}
        </Modal>
    )
}