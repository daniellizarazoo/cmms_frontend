import './PredictiveMaintenance.css'
import SearchEngine from './Components/SearchEngine';
import { useMemo, useState ,useCallback} from 'react';
import Arrows from './Components/Arrows';

const pmTasks = [
    { id:0,assetName: 'PM001',   task: 'Lubrication', schedule: 'Weekly', nextdue: '2023-06-15', status: 'Vencido' },
    { id:1,assetName: 'PM002',   task: 'Battery Check', schedule: 'Monthly', nextdue: '2023-06-30', status: 'Vencido' },
    { id:2,assetName: 'PM003',  task: 'Belt Tension Check', schedule: 'Bi-weekly', nextdue: '2023-06-20', status: 'Vence hoy' },
    { id:3,assetName: 'PM004', task: 'Temperature Calibration', schedule: 'Quarterly', nextdue: '2023-07-15', status: 'Vencido' },
    { id:4,assetName: 'PM005', task: 'Oil Change', schedule: 'Every 5000 miles', nextdue: '2023-06-25', status: 'Vencido' },
    { id:5,assetName: 'PM006', task: 'Software Update', schedule: 'Monthly', nextdue: '2023-06-10', status: 'Próximo' },
    { id:6,assetName: 'PM007', task: 'Seal Check', schedule: 'Weekly', nextdue: '2023-06-18', status: 'Vencido' },
    { id:7,assetName: 'PM008', task: 'Safety Inspection', schedule: 'Monthly', nextdue: '2023-07-05', status: 'Vencido' },
    { id:8,assetName: 'PM009', task: 'Filter Replacement', schedule: 'Quarterly', nextdue: '2023-06-05', status: 'Próximo' },
    { id:9,assetName: 'PM010', task: 'Electrode Inspection10', schedule: 'Bi-weekly', nextdue: '2023-06-22', status: 'Vencido' },
    { id:10,assetName: 'PM011', task: 'Electrode Inspection11', schedule: 'Bi-weekly', nextdue: '2023-06-22', status: 'Vencido' },
    { id:11,assetName: 'PM012', task: 'Electrode Inspection12', schedule: 'Bi-weekly', nextdue: '2023-06-22', status: 'Vencido' },
];


const PredictiveMaintenance = () => {
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
    },[]);
//---------DATOS A MOSTRAR EN TABLA
    const slicedDataToShow = useMemo(()=>{
        const start = actualPage * 10;
        const end = actualPage + 10;
        return filteredData.slice(start,end);
        },[actualPage,filteredData]);

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
                                    <span className='status-indicator status-scheduled'></span> {task.status}
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
    )
};

export default PredictiveMaintenance