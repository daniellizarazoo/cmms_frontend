import { useState } from "react";
import { useCallback } from "react";
import DeleteAlert from "./DeleteAlert";

const LabelsAssets = ({ information,handleAssetToEdit}) => {

    const [assetInfo,setAssetInfo] = useState(information);
    const [toEdit,setToEdit] = useState(false);
    const [isReadOnly,setIsReadOnly] = useState(true);
    const [deleteAlertVisibility,setDeleteAlertVisibility] = useState(false);

    const handleChanges = (e,key) => {
        
        setAssetInfo(prevState => ({
            ...prevState,
            [key] : e.target.value
        }));
    };

    const handleAssetEdit = useCallback(()=>{
        setIsReadOnly(false);
        setToEdit(true);
        if(toEdit){
            handleAssetToEdit(assetInfo);
            setIsReadOnly(true);
            setToEdit(false);
        }

    },[toEdit,isReadOnly]);

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    };

    const inputStyle = {
        display: 'block',
        width: '90%',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize:'1.1rem'
    };

    const containerStyle = {
        marginBottom: '15px'
    };

    const scrollContainerStyle = {
        maxHeight: '100%', // Adjust based on desired height
        overflowY: 'auto',
        border: '1px solid #ddd', // Optional: for better visual separation
        padding: '10px'
    };

    const statusStyles = {
        operational: {
            backgroundColor: 'rgba(0, 128, 0, 0.685)'
        },
        'under maintenance': {
            backgroundColor: 'rgba(255, 166, 0, 0.685)'
        },
        decomissioned: {
            backgroundColor: 'rgba(255, 0, 0, 0.685)'
        }
    };

    const eliminarButton = {
        backgroundColor : '#f44336'
    };

    const edicionButton = toEdit ? {backgroundColor:'blue'} : {backgroundColor:'#4CAF50'}

    const keyToSpanish = key => {
        switch(key){
            case 'enterprise':
                return 'Empresa';
            case 'site':
                return 'Sitio';
            case 'area':
                return 'Área';
            case 'equipment':
                return 'Equipo';
            case 'device':
                return 'Dispositivo';
            case 'status':
                return 'Estado';
            case 'createdat':
                return 'Fecha de Creación mm/dd/yyyy';
            case 'updatedat':
                return 'Fecha de Actualización';
            case 'lastmaintenance':
                return 'Último Mantenimiento';
            default:
                return key; 
        }
    };

    const formatDate = (isoDate) => {
        if (!isoDate) return '';
        const date = new Date(isoDate);
        return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
    };

    const inputType = (key,value) => {
        
        if(key==='status'){
            const combinedStyle = {
                ...inputStyle,
                ...(value ? statusStyles[value]:{})
            };
            return (
                <select style={combinedStyle} value={value || ''} disabled={isReadOnly} onChange={(e) =>handleChanges(e,key)}>
                    <option value='operational'>Operacional</option>
                    <option value='under maintenance'>Bajo mantenimiento</option>
                    <option value='decomissioned'>Desmantelado</option>
                </select>
            );
        } else if (key === 'createdat' || key === 'updatedat' || key === 'lastmaintenance') {
            
            if(key === 'lastmaintenance'){
                return(<input
                    type="date"
                    value={formatDate(value) || ''}
                    onChange={(e)=>handleChanges(e,key)}
                    readOnly={isReadOnly}
                    style={inputStyle}
                />)
            } else {
                return (
                    <input
                        type="date"
                        value={formatDate(value) || ''}
                        onChange={(e)=>handleChanges(e,key)}
                        readOnly
                        style={inputStyle}
                    />
                );
            }
            
        } else {
            return (
                <input
                    type="text"
                    value={value || ''}
                    readOnly={isReadOnly}
                    onChange={(e)=>handleChanges(e,key)}
                    style={inputStyle}
                />
            );
        }
    }

    

    return (
        <div style={scrollContainerStyle}>
            <div>
                <button style={edicionButton} onClick={handleAssetEdit}>
                    {!toEdit ? 'Habilitar edicion' : 'Presione nuevamente para editar guardar cambios'}
                </button>
                <button style={eliminarButton} onClick={()=>setDeleteAlertVisibility(true)}>Eliminar equipo</button>
            </div>
            {Object.entries(assetInfo).map(([key, value]) => (
                <div key={key} style={containerStyle}>
                    <label style={labelStyle}>{keyToSpanish(key)}</label>
                    {inputType(key,value)}
                </div>
            ))}
            {deleteAlertVisibility && 
            <DeleteAlert
                warningText='Al eliminar el equipo, se eliminarán las órdenes de trabajo asociadas a este y sus partes'
                onCancel={() => setDeleteAlertVisibility(false)}
            />
            }
        </div>
    );
};

export default LabelsAssets;
