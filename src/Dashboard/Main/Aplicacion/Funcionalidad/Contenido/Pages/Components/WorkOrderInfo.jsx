/* eslint-disable react/prop-types */
import { useState } from 'react';
import './WorkOrderInfo.css';
import DeleteAlert from './DeleteAlert';
import NewMaintenanceReport from './NewMaintenanceReport';

const WorkOrderInfo = ({roleId=1,workOrderId=null,fromWorkOrder=false,handleClose,infoToShow={}}) => {
    const [infoToShowWork,setInfoToShow] = useState(infoToShow);
    const [deleteAlertVisibility,setDeleteAlertVisibility] = useState(false);
    const [maintenanceReportVisibility,setMaintenanceReportVisibility] = useState(false);

    const handleEditButtonClicked = () => {
        console.log('infotoshow original',infoToShow);
        console.log('modified',infoToShowWork);
    };

    const handleDeleteWorkOrder = () => {
        console.log('Id work order to delete is',workOrderId);
    }

    const workToReturn = () => {
        if(roleId===5){
            return (
                <div className='overlayStyle' onClick={handleClose}>
                    <div className='innerBoxStyle' onClick={(e)=>e.stopPropagation()}>
                        <div className='headerInner'>
                            <h2>Información de orden de trabajo</h2>
                            <button onClick={handleClose}>X</button>
                        </div>
                    <div className='buttons-work-order'>
                        <button 
                        className='buttons-work-order-completado'
                        onClick={()=>setMaintenanceReportVisibility(true)}>
                            Marcar como completado
                        </button>
                    </div>
                    <div className='infoDetails'>
                        <p><strong>Título: </strong>{infoToShowWork.title}</p>
                        <p><strong>Descripción: </strong>{infoToShowWork.description}</p>
                        <p><strong>Estado: </strong>{infoToShowWork.status === 'open' ? 'Abierto': infoToShowWork.status === 'in progress' ? 'En progreso':'Completada'}</p>
                        <p><strong>Prioridad: </strong>{infoToShowWork.priority === 'high' ? 'Alta' : infoToShowWork.priority === 'medium' ? 'Media' : 'Baja'}</p>
                        <p><strong>Fecha de creación: </strong>{infoToShowWork.createdat}</p>
                        <p><strong>Fecha de entrega: </strong>{infoToShowWork.duedate}</p>
                    </div>
                    </div>
                </div>
            )
            // Si roleid es administrador o jefe de mantenimiento
        } else if(roleId===1 || roleId===3){
            return (
                <div className='overlayStyle' onClick={handleClose}>
                    <div className='innerBoxStyle' onClick={(e)=>e.stopPropagation()}>
                        <div className='headerInner'>
                            <h2>Información de orden de trabajo</h2>
                            <button onClick={handleClose}>X</button>
                        </div>
                    <div className='buttons-work-order'>
                        <button 
                        className='buttons-work-order-completado'
                        onClick={handleEditButtonClicked}
                        >
                            Editar
                        </button>
                        <button 
                        className='buttons-work-order-completado'
                        onClick={()=>setMaintenanceReportVisibility(true)}>
                            Marcar como completado
                        </button>
                        <button 
                        className='buttons-work-order-eliminar'
                        onClick={()=>setDeleteAlertVisibility(true)}
                        >
                            Eliminar
                        </button>
                    </div>
                    <div className='infoDetails'>
                        <p>
                            <strong>Título: </strong>
                            <input 
                            type="text" 
                            value={infoToShowWork.title}
                            onChange={(e)=>{
                                setInfoToShow(prev=>({
                                    ...prev,
                                    title: e.target.value
                                }))
                            }}
                            />
                        </p>
                        <p>
                            <strong>Descripción: </strong>
                            <textarea 
                            value={infoToShowWork.description}
                            onChange={(e)=>{
                                setInfoToShow(prev=>({
                                    ...prev,
                                    description:e.target.value
                                }))
                            }}
                            />
                        </p>
                        <p>
                            <strong>Estado: </strong>
                            <select 
                            value={infoToShowWork.status}
                            onChange={(e)=>{
                                setInfoToShow(prev=>({
                                    ...prev,
                                    status:e.target.value
                                }))
                            }}
                            >
                                <option value='open'>Abierto</option>
                                <option value='in progress'>En progreso</option>
                                <option value='completed'>Completado</option>
                            </select>
                        </p>
                        <p>
                            <strong>Prioridad: </strong>
                            <select 
                            value={infoToShowWork.priority}
                            onChange={(e)=>{
                                setInfoToShow(prev=>({
                                    ...prev,
                                    priority:e.target.value
                                }))
                            }}
                            >
                                <option value='high'>Alta</option>
                                <option value='medium'>Media</option>
                                <option value='low'>Baja</option>
                            </select>
                        </p>
                        <p><strong>Fecha de creación: </strong>{infoToShow.createdat}</p>
                        <p>
                            <strong>Fecha de entrega: </strong>
                            <input 
                            type="date" 
                            value={infoToShowWork.duedate}
                            onChange={(e)=>{
                                setInfoToShow(prev=>({
                                    ...prev,
                                    duedate:e.target.value
                                }))
                            }}
                            />
                        </p>
                    </div>
                    </div>
                </div>
            )
        }
    }
    
    return (
        <>
            {workToReturn()}
            {deleteAlertVisibility && 
            <DeleteAlert
            className='delete-alert-box-work-order'
            warningText={'¿Realmente desea eliminar la orden de trabajo?'}
            onConfirm={()=>handleDeleteWorkOrder()}
            onCancel={()=>setDeleteAlertVisibility(false)}
            />
            }
            {maintenanceReportVisibility &&
            <NewMaintenanceReport
            handleClose={()=>setMaintenanceReportVisibility(false)}
            />
            }
        </>
    )
};

export default WorkOrderInfo;