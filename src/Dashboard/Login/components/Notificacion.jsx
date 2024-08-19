import './Notificacion.css'

const Notification = ({error}) => {
return(
    error ? 
    <div className='notificacionCaja'>
    <label>{error}</label>
    </div>
    : null
)
};

export default Notification;