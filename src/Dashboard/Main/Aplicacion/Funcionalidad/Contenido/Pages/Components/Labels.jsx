import { useState } from "react";

const LabelsAssets = ({ information}) => {

    const handleChanges = (e,key) => {
        console.log('TARGET VALUE',e.target.value);
        console.log('KEY',key);
    }

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
        maxHeight: '400px', // Adjust based on desired height
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
                return 'Fecha de Creación';
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
                <select style={combinedStyle} value={value || ''} readOnl>
                    <option value='operational'><p style={statusStyles}>Operacional</p></option>
                    <option value='under maintenance'>Bajo mantenimiento</option>
                    <option value='decomissioned'>Desmantelado</option>
                </select>
            );
        } else if (key === 'createdat' || key === 'updatedat' || key === 'lastmaintenance') {
            return (
                <input
                    type="date"
                    value={formatDate(value) || ''}
                    onChange={(e)=>handleChanges(e,key)}
                    
                    style={inputStyle}
                />
            );
        } else {
            return (
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e)=>handleChanges(e,key)}
                    style={inputStyle}
                />
            );
        }
    }

    return (
        <div style={scrollContainerStyle}>
            {Object.entries(information).map(([key, value]) => (
                <div key={key} style={containerStyle}>
                    <label style={labelStyle}>{keyToSpanish(key)}</label>
                    {inputType(key,value)}

                </div>
            ))}
        </div>
    );
};

export default LabelsAssets;
