import './Notificacion.css'

const Notification = ({isError=false,message=null}) => {

    if (isError && message!=null){
        return (
            <div className='notificacionCaja'>
                <label>{message}</label>
            </div>
        )
    } else if (message!=null && message!=''){
        return(
            <div className='notificacionCajaSuccess'>
                <label>{message}</label>
            </div>
        )
    }

};

export default Notification;

