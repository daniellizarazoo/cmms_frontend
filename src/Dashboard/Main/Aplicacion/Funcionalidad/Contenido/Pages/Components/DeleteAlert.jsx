import React from 'react';

const DeleteAlert = ({ warningText, onCancel, onConfirm }) => {
    return (
        <div style={overlayStyle}>
            <div style={alertBoxStyle}>
                <p>{warningText}</p>
                <div style={buttonContainerStyle}>
                <button style={okButtonStyle} onClick={onConfirm}>OK</button>
                <button style={cancelButtonStyle} onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    color: 'black'
};

const alertBoxStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '80%',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', // Space between the buttons
    marginTop: '20px',
};

const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

const okButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
};

const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
};

export default DeleteAlert;
