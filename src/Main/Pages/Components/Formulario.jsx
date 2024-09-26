/* eslint-disable react/prop-types */
import { useRef } from "react";

const Formulario = ({ isVisible, title, buttonText, labels, textHolder, inputTypes, dataReturned, onClose }) => {
    const overlayStyle = {
        position: 'fixed',
        color: 'black',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001 // High z-index to ensure it is on top
    };

    const formBoxStyle = {
        position: 'relative',
        width: '40%',
        backgroundColor: 'rgb(255, 255, 255)', // Light background
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', // Shadow for emphasis
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto' ,// Allows scrolling if content exceeds height
        maxWidth: '70%'
    };

    const h2Style = {
        color: 'black',
        marginTop: 0,
        marginBottom: '5%',
        textAlign: 'center',
        fontFamily:'Times'
    };

    const labelsStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const innerBoxStyle = {
        marginTop: '3px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        padding:'10px'
    };

    const labelStyle = {
        fontSize: '1.2rem',
        marginBottom: '3px',
        fontFamily: 'Times'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color:'red'
    };

    const inputStyle = {
        margin: '5px 0',           // Adds more vertical space between inputs for better readability
        padding: '8px',            // Adds padding inside the input for better user experience
        borderRadius: '4px',       // Smoothens the corners for a modern look
        border: '1px solid #ccc',  // Light border for a clean appearance
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for a 3D effect
        width: '100%',             // Makes the input field take the full width of its container
        boxSizing: 'border-box',   // Ensures padding is included in the width calculation
        transition: 'border-color 0.3s', // Smooth transition for border-color change
    };

    const buttonStyle = {
        width: '50%',              // Set the button width
        margin: '0 auto',          // Center the button horizontally
        display: 'flex',           // Flexbox to center the text inside the button
        justifyContent: 'center',  // Center the content horizontally
        alignItems: 'center',      // Center the content vertically
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const inputRefs = labels.map(() => useRef(null));

    const handleInfoEnteredWithinForm = (e) => {
        e.preventDefault();
        let data = {};
        inputRefs.forEach((ref, i) => {
            data[labels[i]] = ref.current.value;
        });
        
        dataReturned(data);

        inputRefs.forEach(ref => {
            if (ref.current) {
                ref.current.value = '';
            }
        });
    };


    const labelsToShow = () => {
        const data = labels.map((key, index) => (
                inputTypes[index]==='select' ?
                    (
                        <>
                        <label style={labelStyle}>{key[0].label}</label>
                        <select ref={inputRefs[index]} required>
                            {Object.keys(key[0]).map((k)=>{
                                if(k !== 'label'){
                                    return(
                                        <option key={k} value={key[0][k]}>{k}</option>
                                    )
                                }
                            })}
                        </select>
                        
                        </>
                    ) : (
                        <>
                        <label style={labelStyle}>{key}</label>
                        <input 
                            style={inputStyle}
                            ref={inputRefs[index]}
                            placeholder={textHolder[index]} 
                            type={inputTypes[index]}
                            required 
                        />
                        </>
                    )
                
        ));
        return data;
    }

    return (
        isVisible &&
        <div style={overlayStyle}>
            <div style={formBoxStyle}>
                <button style={closeButtonStyle} onClick={onClose}>×</button>
                <div style={innerBoxStyle}>
                    <h2 style={h2Style}>{title}</h2>
                    <form onSubmit={handleInfoEnteredWithinForm}>
                        <div style={labelsStyle}>
                            {labelsToShow()}
                        </div>
                        <button style={buttonStyle} type="submit">{buttonText}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
