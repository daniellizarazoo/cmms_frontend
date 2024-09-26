import './PredictiveMaintenance.css'
import SearchEngine from './Components/SearchEngine';
import { useMemo, useState ,useCallback} from 'react';
import Arrows from './Components/Arrows';
import Overlay from './Components/Overlay';
import DeleteAlert from './Components/DeleteAlert';
import Notification from '../../Login/components/Notificacion';

const pmTasks = [
    { id:0,assetName: 'PM001',   task: 'Lubrication', schedule: 'weekly', nextdue: '2023-06-15', status: 'Vencido', notes:'Hay que lubricar balineras1 y estoy probando muchas cosas para que uds sajdsdjaskl'},
    { id:1,assetName: 'PM002',   task: 'Battery Check', schedule: 'monthly', nextdue: '2023-06-30', status: 'Vencido',notes:'Hay que lubricar balineras2'},
    { id:2,assetName: 'PM003',  task: 'Belt Tension Check', schedule: 'daily', nextdue: '2023-06-20', status: 'Vence hoy',notes:'Hay que lubricar balineras3'},
    { id:3,assetName: 'PM004', task: 'Temperature Calibration', schedule: 'yearly', nextdue: '2023-07-15', status: 'Vencido',notes:'Hay que lubricar balineras4'},
    { id:4,assetName: 'PM005', task: 'Oil Change', schedule: 'daily', nextdue: '2023-06-25', status: 'Vencido',notes:'Hay que lubricar balineras5'},
    { id:5,assetName: 'PM006', task: 'Software Update', schedule: 'monthly', nextdue: '2023-06-10', status: 'Próximo',notes:'Hay que lubricar balineras6'},
    { id:6,assetName: 'PM007', task: 'Seal Check', schedule: 'weekly', nextdue: '2023-06-18', status: 'Vencido',notes:'Hay que lubricar balineras7'},
    { id:7,assetName: 'PM008', task: 'Safety Inspection', schedule: 'monthly', nextdue: '2023-07-05', status: 'Vencido',notes:'Hay que lubricar balineras8'},
    { id:8,assetName: 'PM009', task: 'Filter Replacement', schedule: 'yearly', nextdue: '2023-06-05', status: 'Próximo',notes:'Hay que lubricar balineras9'},
    { id:9,assetName: 'PM010', task: 'Electrode Inspection10', schedule: 'daily', nextdue: '2023-06-22', status: 'Vencido',notes:'Hay que lubricar balineras10'},
    { id:10,assetName: 'PM011', task: 'Electrode Inspection11', schedule: 'daily', nextdue: '2023-06-22', status: 'Vencido',notes:'Hay que lubricar balineras11'},
    { id:11,assetName: 'PM012', task: 'Electrode Inspection12', schedule: 'daily', nextdue: '2023-06-22', status: 'Vencido',notes:'Hay que lubricar balineras12'}
];


const PredictiveMaintenance = () => {
    const [alertDeleteTaskVisibility,setAlertDeleteTaskVisibility] = useState(false);
    const [isErrorNotification,setIsErrorNotification]=useState(false);
    const [notificationMessage,setNotificationMessage] = useState('');
    // info a editar de nota
    const [noteInfoToEdit,setNoteInfoToEdit] = useState({});
//Estados visualizacion de componentes
    const [notesOverlayVisibility,setNotesOverlayVisibility] = useState(false);
    const [editNotesOverlayVisibility,setEditNotesOverlayVisibility] = useState(false);
// Botones pulsados----------------------------------
    const [noteIdToEdit,setNoteIdToEdit] = useState('');
// Estados filtrado de busqueda--------------P
    const [deviceToSearch,setDeviceToSearch] = useState('');
    const [statusFilter,setStatusFilter]=useState('');
// ------CONTROL DE PAGINA ------------------------------------
    const [actualPage,setActualPage] = useState(0);
    
    const filteredData = useMemo(() => {
        return pmTasks.filter(task =>
            (deviceToSearch === '' || task.assetName.toLowerCase().includes(deviceToSearch.toLowerCase())) &&
            (statusFilter === '' || task.status === statusFilter)
        );
    }, [deviceToSearch, statusFilter]);

    const totalPages = useMemo(()=>{
        return Math.ceil(filteredData.length / 10);
    },[filteredData]);

    const handleLeftClickArrow = useCallback(() => {
        setActualPage(prevState => Math.max(prevState - 1, 0));
    }, []);

    const handleRightClickArrow = useCallback(() => {
        setActualPage(prevState => Math.min(prevState + 1, (totalPages - 1)));
    },[totalPages]);
//---------DATOS A MOSTRAR EN TABLA ----------------------
    const slicedDataToShow = useMemo(()=>{
        const start = actualPage * 10;
        const end = start + 10;
        return filteredData.slice(start,end);
        },[actualPage,filteredData]);
// show notes when "ver notas" is pushed---------
    const handleEditButtonClicked = () => {
        const dataToReturn =  slicedDataToShow.find(t => t.id === noteIdToEdit);
        setNoteInfoToEdit(dataToReturn);
        if(dataToReturn){
            setEditNotesOverlayVisibility(true);
        }
    };
// ------------------ENVIOS A API ------------------------------------
    const handleRefreshLastPerformed = () => {
        console.log('Here you update task lastperformed field taking into account noteIdTOEdit',noteIdToEdit);
        setEditNotesOverlayVisibility(false);
        setNotificationMessage('Fecha actualizada');
        setTimeout(()=>{
            setNotificationMessage('');
        },3000);
    }

    const handleDeleteTask = () => {
        console.log('Aqui se envia la task a eliminar de taskid',noteIdToEdit);
        setAlertDeleteTaskVisibility(false);
        setEditNotesOverlayVisibility(false);
        setNotificationMessage('Tare eliminada correctamente');
        setTimeout(()=>{
            setNotificationMessage('');
        },3000);
    }

    const handleEditTaskClicked = (e) => {
        e.preventDefault();
        console.log('note Info to edit', noteInfoToEdit);
        setEditNotesOverlayVisibility(false);
        setNotificationMessage('Tare editada correctamente');
        setTimeout(()=>{
            setNotificationMessage('');
        },3000);
    }

    return(
        <>
        <h1 style={{fontFamily:'Lucida Sans',textAlign:'left',margin:'2%'}}>Mantenimiento predictivo</h1>
        <div className='predictiveMaintenance'>
            <SearchEngine 
            placeHolder={'Buscar mantenimiento por nombre de equipo'}
            onChange={setDeviceToSearch}
            />
            <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)}>
                <option value="">Todos</option>
                <option value={"Vencido"}>Vencido</option>
                <option value={"Vence hoy"}>Vence hoy</option>
                <option value={"Próximo"}>Próximo</option>
            </select>
            <table className='pm-table'>
                <thead>
                    <tr>
                        <th>Dispositivo</th>
                        <th>Tarea</th>
                        <th>Periodicidad</th>
                        <th>Fecha vencimiento</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        slicedDataToShow.map(task=>(
                            <tr key={task.id}>
                                <td>{task.assetName}</td>
                                <td>{task.task}</td>
                                <td>{task.schedule}</td>
                                <td>{task.nextdue}</td>
                                <td>
                                    <span className={`status-indicator status-${task.status==='Vence hoy'? 'vence-hoy':task.status}`}></span> {task.status}
                                </td>
                                <td>
                                    <button className='ver-notas' 
                                    onClick={()=>{
                                        setNoteIdToEdit(task.id)
                                        setNotesOverlayVisibility(true);
                                    }}>
                                        Ver notas
                                    </button>
                                    <button className='editar' onClick={()=>{
                                        setNoteIdToEdit(task.id);
                                        handleEditButtonClicked()
                                    }}>Editar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {notesOverlayVisibility && 
            <Overlay isVisible={true} title='Notas' closeButtonClicked={()=>setNotesOverlayVisibility(false)}>
                <p className='overlay-content-p'>{slicedDataToShow.find(t=>t.id===noteIdToEdit).notes}</p>
            </Overlay>
            }
            {editNotesOverlayVisibility &&
                <div className='overlayStyle'>
                    <div className='innerBoxStyle'>
                        <div className='headerInner'>
                            <h2>Editar</h2>
                            <button onClick={() => setEditNotesOverlayVisibility(false)}>X</button>
                        </div>
                        <div className='actionsBox'>
                                <button className='actionsBox-eliminar' onClick={()=>setAlertDeleteTaskVisibility(true)}>Eliminar</button>
                                <button onClick={handleRefreshLastPerformed}>Actualizar fecha de último arreglo</button>
                        </div>
                        <div className='formBoxStyle'>
                            <form onSubmit={handleEditTaskClicked}>
                                <div className='formBoxStyle-labels'>
                                    <label>Disposivito</label>
                                    <input value={noteInfoToEdit.assetName} readOnly/>
                                </div>
                                <div className='formBoxStyle-labels'>
                                    <label>Tarea</label>
                                    <input type='text' 
                                    value={noteInfoToEdit.task} 
                                    onChange={(e)=>setNoteInfoToEdit(prev=>({
                                        ...prev,
                                        task: e.target.value
                                    }))}/>
                                </div>
                                <div className='formBoxStyle-labels'>
                                    <label>Periodicidad</label>
                                    <select value={noteInfoToEdit.schedule}
                                    onChange={(e)=>setNoteInfoToEdit(prev=>({
                                        ...prev,
                                        schedule: e.target.value
                                    }))}>
                                        <option value='daily'>Diario</option>
                                        <option value='weekly'>Semanalmente</option>
                                        <option value='monthly'>Mensual</option>
                                        <option value='yearly'>Anual</option>
                                    </select>
                                </div>
                                <div className='formBoxStyle-labels'>
                                    <label>Fecha vencimiento yyyy/mm/dd</label>
                                    <input value={noteInfoToEdit.nextdue} readOnly/>
                                </div>
                                <div className='formBoxStyle-labels'>
                                    <label>Estado</label>
                                    <input value={noteInfoToEdit.status} readOnly/>
                                </div>
                                <div className='formBoxStyle-labels'>
                                    <label>Nota</label>
                                    <textarea value={noteInfoToEdit.notes}
                                    onChange={(e)=>setNoteInfoToEdit(prev=>({
                                        ...prev,
                                        notes: e.target.value
                                    }))}/>
                                </div>
                                <button>Editar</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
            {alertDeleteTaskVisibility &&
                <DeleteAlert
                warningText={`Desea eliminar la tarea ${noteInfoToEdit.task} del equipo ${noteInfoToEdit.assetName}?`}
                onCancel={()=>setAlertDeleteTaskVisibility(false)}
                onConfirm={handleDeleteTask}
                />
            }
            <Notification
            isError={false}
            message={notificationMessage}
            />
            <Arrows
                actualPage={actualPage+1}
                numberOfPages={totalPages}
                leftArrowClicked={handleLeftClickArrow}
                rightArrowClicked={handleRightClickArrow}
            />
        </div>
        </>
    )
};

export default PredictiveMaintenance