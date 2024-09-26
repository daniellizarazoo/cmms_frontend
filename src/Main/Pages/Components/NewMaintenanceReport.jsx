/* eslint-disable react/prop-types */
import { useState } from 'react';
import './NewMaintenanceReport.css'

const NewMaintenanceReport = ({handleClose}) => {

    const [notesReport,setNotesReport] = useState('');

    const handleCreateNewMaintenanceReport = () => {
        
        if(notesReport!== ''){
            console.log('hay reporte');
            console.log('Aqui se crea un nuevo mantenimiento', notesReport);
        console.log('Deshabilitar boton crear hasta que halla una respuesta desde api');
        } else {
            console.log('Esta vacío');
        };

    }

    return(
        <div className='overlayStyle' onClick={handleClose}>
            <div className='innerBoxStyle' onClick={(e)=>e.stopPropagation()}>
                <div className='headerInner'>
                    <h2>Crear reporte de mantenimiento</h2>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className='infoDetails'>
                    <p><strong>Ingrese solución planteada:</strong>
                    <textarea className='textarea-notes-report' 
                    placeholder='La solución planteada fue una limpieza... con cambios de...' 
                    value={notesReport} onChange={(e)=>setNotesReport(e.target.value)}/>
                    </p>
                </div>
                <button className='newMaintenanceReport-crear-button' onClick={handleCreateNewMaintenanceReport}>CREAR</button>
            </div>
        </div>
    );
};

export default NewMaintenanceReport;