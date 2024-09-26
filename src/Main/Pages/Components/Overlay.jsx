import './Overlay.css'

const Overlay = ({isVisible,title,children,closeButtonClicked}) => {
    
    return(
        <>
            {isVisible &&
                <div className='overlay1'>
                    <div className='editUser1'>
                        <div className='header1'>
                                <h2>{title}</h2>
                                <button className='closeButton1' onClick={closeButtonClicked}>X</button>
                        </div>
                        <div className='content1'>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Overlay;