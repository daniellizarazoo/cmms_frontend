import './Overlay.css'

const Overlay = ({isVisible,title,children,closeButtonClicked}) => {
    
    return(
        <>
            {isVisible &&
                <div className='overlay'>
                    <div className='editUser'>
                        <div className='header'>
                                <h2>{title}</h2>
                                <button className='closeButton' onClick={closeButtonClicked}>X</button>
                        </div>
                        <div className='content'>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Overlay;