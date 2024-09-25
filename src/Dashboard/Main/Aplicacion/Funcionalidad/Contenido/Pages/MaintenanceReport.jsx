import SearchEngine from './Components/SearchEngine';
import './MaintenanceReport.css';
import Arrows from './Components/Arrows';

import { useEffect, useCallback,useMemo, useState } from 'react';


const dataReports = [
    {id:1,workOrderTitle:'Revisiòn de motor',assetDeviceName:'PM001',date:'2024-05-26',createdby:'Daniel Lizarazo',partid:null,notes:'Se realizó una inspección completa del motor, incluyendo cambio de aceite y ajuste de piezas críticas.'},
    {id:2,workOrderTitle:'Cambio de Filtro',assetDeviceName:'PM002', date:'2024-12-24',createdby:'María López',partid:null,notes:'El filtro fue reemplazado y se verificó el estado general del compresor.'},
    {id:3,workOrderTitle:'Inspección de Sistema Eléctrico',assetDeviceName:'T1101', date:'2024-12-24',createdby:'Carlos Gómez',partid:null,notes:'Se revisó el sistema eléctrico, se encontraron conexiones sueltas que fueron ajustadas'},
    {id:4,workOrderTitle:'Revisiòn de motor',assetDeviceName:'PM001',date:'2024-05-26',createdby:'Daniel Lizarazo',partid:null,notes:'Se realizó una inspección completa del motor, incluyendo cambio de aceite y ajuste de piezas críticas.'},
    {id:5,workOrderTitle:'Cambio de Filtro',assetDeviceName:'PM002', date:'2024-12-24',createdby:'María López',partid:null,notes:'El filtro fue reemplazado y se verificó el estado general del compresor.'},
    {id:6,workOrderTitle:'Inspección de Sistema Eléctrico',assetDeviceName:'T1101', date:'2024-12-24',createdby:'Carlos Gómez',partid:null,notes:'Se revisó el sistema eléctrico, se encontraron conexiones sueltas que fueron ajustadas'},
    {id:7,workOrderTitle:'Revisiòn de motor',assetDeviceName:'PM001',date:'2024-05-26',createdby:'Daniel Lizarazo',partid:null,notes:'Se realizó una inspección completa del motor, incluyendo cambio de aceite y ajuste de piezas críticas.'},
    {id:8,workOrderTitle:'Cambio de Filtro',assetDeviceName:'PM002', date:'2024-12-24',createdby:'María López',partid:null,notes:'El filtro fue reemplazado y se verificó el estado general del compresor.'},
    {id:9,workOrderTitle:'Inspección de Sistema Eléctrico',assetDeviceName:'T1101', date:'2024-12-24',createdby:'Carlos Gómez',partid:null,notes:'Se revisó el sistema eléctrico, se encontraron conexiones sueltas que fueron ajustadas'},
    {id:10,workOrderTitle:'Revisiòn de motor',assetDeviceName:'PM001',date:'2024-05-26',createdby:'Daniel Lizarazo',partid:null,notes:'Se realizó una inspección completa del motor, incluyendo cambio de aceite y ajuste de piezas críticas.'},
    {id:11,workOrderTitle:'Cambio de Filtro',assetDeviceName:'PM002', date:'2024-12-24',createdby:'María López',partid:null,notes:'El filtro fue reemplazado y se verificó el estado general del compresor.'},
    {id:12,workOrderTitle:'Inspección de Sistema Eléctrico',assetDeviceName:'T1101', date:'2024-12-24',createdby:'Carlos Gómez',partid:null,notes:'Se revisó el sistema eléctrico, se encontraron conexiones sueltas que fueron ajustadas'},
];  


const MaitenanceReport = () => {
    const [actualPage,setActualPage] = useState(0);
    const [toSearch,setToSearch] = useState('');
    const [reportsToShow,setReportsToShow] = useState([]);
    const [editedNoteToChange,setEditedNoteToChange] = useState({});

    const handleEditedNoteToChange = (e,id) => {
        setEditedNoteToChange(prev=>({
            ...prev,
            [id]: e.target.value
        }))
    };

    const handleEditNoteButtonClicked = (reportId) => {
        console.log('reportMaintenance ID',reportId);
        console.log(editedNoteToChange[reportId]);
    };

    useEffect(()=>{
        setReportsToShow(dataReports);
    },[]);
    
    const filteredReports = useMemo(() => {
        return reportsToShow.filter(r =>
            (toSearch === '' || 
            r.assetDeviceName.toLowerCase().includes(toSearch.toLowerCase()) || 
            r.createdby.toLowerCase().includes(toSearch.toLowerCase()))
        );
    }, [toSearch, reportsToShow]); // Añadir reportsToShow a las dependencias

    const totalPages = useMemo(()=>{
        return Math.ceil(filteredReports.length/10);
    },[filteredReports]);

    const handleLeftClickArrow = useCallback(() => {
        setActualPage(prevState => Math.max(prevState - 1, 0));
    }, []);

    const handleRightClickArrow = useCallback(() => {
        setActualPage(prevState => Math.min(prevState + 1, (totalPages - 1)));
    },[totalPages]);

    const slicedDataToShow = useMemo(()=>{
        const start = actualPage * 10;
        const end = start + 10;
        return filteredReports.slice(start,end);
    },[actualPage,filteredReports]);

    return(
    <>
        <h1 style={{fontFamily:'Lucida Sans',textAlign:'left',margin:'2%'}}>Reporte mantenimiento</h1>
        <div className='maintenance-report-box'>
            <SearchEngine
                placeHolder={'Buscar por dispositivo asociado o creador de reporte'}
                onChange={setToSearch}
            />
            <table className='report-pm-table'>
                <thead>
                    <tr>
                        <th className='report-pm-table-title'>Título de orden de trabajo</th>
                        <th className='report-pm-table-assetname'>Dispositivo asociado</th>
                        <th className='report-pm-table-date'>Fecha de creación</th>
                        <th className='report-pm-table-creator'>Creador</th>
                        <th className='report-pm-table-notes'>Notas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        slicedDataToShow.map(r=>(
                            <tr key={r.id}>
                                <td>{r.workOrderTitle}</td>
                                <td>{r.assetDeviceName}</td>
                                <td>{r.date}</td>
                                <td>{r.createdby}</td>
                                <td>
                                    <textarea className='report-text-area' value={editedNoteToChange[r.id]||r.notes} onChange={(e)=>handleEditedNoteToChange(e,r.id)}></textarea>
                                    <button className='maintenance-report-button' onClick={()=>handleEditNoteButtonClicked(r.id)}>Editar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Arrows
                actualPage={actualPage+1}
                numberOfPages={totalPages}
                leftArrowClicked={handleLeftClickArrow}
                rightArrowClicked={handleRightClickArrow}
            />
        </div>
    </>
    );
};

export default MaitenanceReport;