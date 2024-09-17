import './WorkOrder.css';
import NewWorkOrder from './Components/NewWorkOrder';
import WorkOrderInfo from './Components/WorkOrderInfo';
import { useState } from 'react';

const workOrderData = [
    {
        id:0,
        title: 'PT100 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'low',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-30',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:1,
        title: 'TI101 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'in progress',
        priority:'medium',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-15',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:2,
        title: 'PT102 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'completed',
        priority:'high',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:3,
        title: 'PT103 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'high',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:4,
        title: 'PT100 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'high',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:5,
        title: 'PT106 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'low',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:6,
        title: 'TI101 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'high',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:7,
        title: 'PT102 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'high',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:8,
        title: 'PT103 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'high',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    },
    {
        id:9,
        title: 'PT100 - Cambio de rodillos',
        description: 'Se presentan fallas en arandelas de rodillos lo que ocasiona perdidas de potencia',
        status: 'open',
        priority:'high',
        createdat:'2024-08-02 17:25:29.614991',
        updatedat:'2024-08-02 17:25:29.614991',
        duedate: '2024-08-25',
        createdby:1,
        assetid:7,
        devicepartid:null
    }
];



const WorkOrder = ({roleid}) => {
    const [workOrdersData,setWorkOrderData]= useState(workOrderData);
    const [newWorkOrderBoxVisibility,setNewWorkOrderBoxVisibility] = useState(false);
    const [workOrderId,setWorkOrderId] = useState('');
return(
<>
    <h1 style={{fontFamily:'Lucida Sans',textAlign:'left',margin:'2%'}}>Orden de trabajo</h1>
    <div className='mainBoxWorkOrder'>
        <div className='boxWithData'>
            {
                workOrdersData.map(d=>
                        <div className='workOrder' key={d.id} onClick={()=>{
                            setNewWorkOrderBoxVisibility(true);
                            setWorkOrderId(d.id);
                            }}>
                            <h3>{d.title}</h3>
                            <p><strong>Prioridad: </strong>{
                                d.priority === 'high' ? 'Alta' : d.priority === 'medium' ? 'Media' : 'Baja'
                            }</p>
                            <p><strong>Fecha de entrega: </strong>{d.duedate}</p>
                            <p>
                                <strong>Estado: </strong>
                                <span className={`work-order-status-${d.status.replace(/\s+/g, '-')}`}>
                                    {d.status === 'in progress' ? 'En Progreso' : d.status === 'completed' ? 'Completado' : 'Abierto'}
                                </span>
                            </p>
                        </div>
                )
            }
        </div>
    </div>
    {newWorkOrderBoxVisibility && 
    <WorkOrderInfo
    fromWorkOrder ={true}
    workOrderId={workOrderId}
    infoToShow = {workOrdersData.find(w=>w.id===workOrderId)}
    handleClose={()=>setNewWorkOrderBoxVisibility(false)}
    />
    }
</>
)
};

export default WorkOrder;