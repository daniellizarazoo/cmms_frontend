const Loading = () => {
    const loadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: '#262B49', // Background color
        color: 'white', // Text color
        fontSize: '24px', // Font size
        fontWeight: 'bold', // Font weight
        animation: 'fadeIn 1s', // Fade-in animation for the whole component
    };

    return (
        <div style={loadingStyle}>
            <span style={pulsingTextStyle}>Cargando componentes...</span>
        </div>
    );
};

// Pulsing text style
const pulsingTextStyle = {
    display: 'inline-block',
    animation: 'pulse 1.5s infinite', // Pulsing animation for the text
};

// CSS for animations (Add this to your CSS file or a <style> tag)
const styles = `
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.7;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;

export default Loading;

// Append the styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);