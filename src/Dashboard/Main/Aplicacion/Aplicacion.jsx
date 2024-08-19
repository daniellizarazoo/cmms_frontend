//Aplicacion.jsx
// En este codigo se agrupa Navbar y la funcionalidad de aplicacion.
// La app estara compuesta de Sidebar y Funcionalidades
import './Aplicacion.css';
import Navbar from "../components/Navbar/Navbar"
import Funcionalidad from "./Funcionalidad/Funcionalidad";

const Aplicacion = () => (
    <div className='aplicacion'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='funcionalidad'>
            <Funcionalidad/>
        </div>
        
    </div>
);

export default Aplicacion;