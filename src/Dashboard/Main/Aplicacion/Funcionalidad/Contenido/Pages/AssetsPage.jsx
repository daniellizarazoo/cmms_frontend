import  { useState, useMemo ,useCallback,useEffect} from 'react';
import LabelsAssets from './Components/Labels';
import './AssetsPage.css';
import Arrows from './Components/Arrows';
import Overlay from './Components/Overlay';
import DeleteAlert from './Components/DeleteAlert';
import Formulario from './Components/Formulario';
import Formulario2 from './Components/Formulario2';
import DonutChart from './Components/DonutChart';

const Assets = [
    {
        "id": 1,
        "enterprise": "GSR",
        "site": "SOGAMOSO",
        "area": "Laminación",
        "equipment": "Motores AC",
        "device": "Motor 3",
        "status": "decomissioned",
        "createdat": "2024-07-18T16:44:23.259Z",
        "updatedat": "2024-07-18T16:44:23.259Z",
        "lastmaintenance": null,
        "partid": 23,
        "part": "Escobillas desde postman"
    },
    {
        "id": 2,
        "enterprise": "XD",
        "site": "SOGAMOSO",
        "area": "Laminación",
        "equipment": "Motores AC",
        "device": "Motor 5",
        "status": "operational",
        "createdat": "2024-07-18T05:00:00.000Z",
        "updatedat": "2024-07-18T05:00:00.000Z",
        "lastmaintenance": "2024-07-01T00:00:00.000Z",
        "partid": 27,
        "part": "Imanes permanentes"
    },
    {
        "id": 3,
        "enterprise": "DIACO",
        "site": "SOGAMOSO",
        "area": "Laminación",
        "equipment": "Motores AC",
        "device": "Motor 6",
        "status": "operational",
        "createdat": "2024-07-19T05:00:00.000Z",
        "updatedat": "2024-07-19T05:00:00.000Z",
        "lastmaintenance": "2024-07-02T00:00:00.000Z",
        "partid": 28,
        "part": "Rodamientos"
    },
    {
        "id": 4,
        "enterprise": "GSR",
        "site": "BOGOTA",
        "area": "Aceria",
        "equipment": "Hornos",
        "device": "Horno 1",
        "status": "operational",
        "createdat": "2024-07-20T16:00:00.000Z",
        "updatedat": "2024-07-20T16:00:00.000Z",
        "lastmaintenance": "2024-07-10T00:00:00.000Z",
        "partid": 29,
        "part": "Cables de conexión"
    },
    {
        "id": 5,
        "enterprise": "GSR",
        "site": "SOGAMOSO",
        "area": "Aceria",
        "equipment": "Prensas Hidráulicas",
        "device": "Prensa 2",
        "status": "under maintenance",
        "createdat": "2024-07-21T16:30:00.000Z",
        "updatedat": "2024-07-21T16:30:00.000Z",
        "lastmaintenance": null,
        "partid": 30,
        "part": "Ventiladores"
    },
    {
        "id": 6,
        "enterprise": "DIACO",
        "site": "BOGOTA",
        "area": "Laminación",
        "equipment": "Motores AC",
        "device": "Motor 4",
        "status": "operational",
        "createdat": "2024-07-22T05:00:00.000Z",
        "updatedat": "2024-07-22T05:00:00.000Z",
        "lastmaintenance": "2024-07-05T00:00:00.000Z",
        "partid": 31,
        "part": "Rodamientos de repuesto"
    },
    {
        "id": 7,
        "enterprise": "DIACO",
        "site": "SOGAMOSO",
        "area": "Mantenimiento",
        "equipment": "Generadores",
        "device": "Generador 1",
        "status": "operational",
        "createdat": "2024-07-23T05:00:00.000Z",
        "updatedat": "2024-07-23T05:00:00.000Z",
        "lastmaintenance": "2024-07-08T00:00:00.000Z",
        "partid": 32,
        "part": "Condensadores"
    },
    {
        "id": 8,
        "enterprise": "XD",
        "site": "BOGOTA",
        "area": "Aceria",
        "equipment": "Motores DC",
        "device": "Motor 2",
        "status": "under maintenance",
        "createdat": "2024-07-24T16:00:00.000Z",
        "updatedat": "2024-07-24T16:00:00.000Z",
        "lastmaintenance": null,
        "partid": 33,
        "part": "Interruptores"
    },
    {
        "id": 9,
        "enterprise": "GSR",
        "site": "SOGAMOSO",
        "area": "Aceria",
        "equipment": "Cinta Transportadora",
        "device": "Cinta 4",
        "status": "operational",
        "createdat": "2024-07-25T16:00:00.000Z",
        "updatedat": "2024-07-25T16:00:00.000Z",
        "lastmaintenance": "2024-07-12T00:00:00.000Z",
        "partid": 34,
        "part": "Baterías"
    },
    {
        "id": 10,
        "enterprise": "GSR",
        "site": "BOGOTA",
        "area": "Mantenimiento",
        "equipment": "Compresores",
        "device": "Compresor 3",
        "status": "operational",
        "createdat": "2024-07-26T16:00:00.000Z",
        "updatedat": "2024-07-26T16:00:00.000Z",
        "lastmaintenance": "2024-07-13T00:00:00.000Z",
        "partid": 35,
        "part": "Bujes"
    },
    {
        "id": 11,
        "enterprise": "DIACO",
        "site": "SOGAMOSO",
        "area": "Aceria",
        "equipment": "Cinta Transportadora",
        "device": "Cinta 1",
        "status": "under maintenance",
        "createdat": "2024-07-27T16:00:00.000Z",
        "updatedat": "2024-07-27T16:00:00.000Z",
        "lastmaintenance": "2024-07-15T00:00:00.000Z",
        "partid": 36,
        "part": "Fusibles"
    },
    {
        "id": 12,
        "enterprise": "XD",
        "site": "BOGOTA",
        "area": "Laminación",
        "equipment": "Motores AC",
        "device": "Motor 6",
        "status": "operational",
        "createdat": "2024-07-28T16:00:00.000Z",
        "updatedat": "2024-07-28T16:00:00.000Z",
        "lastmaintenance": "2024-07-17T00:00:00.000Z",
        "partid": 37,
        "part": "Contactores"
    }
];

const parts = [
    {
        id:23,
        name: 'Escobillas',
        assetid: 1
    },
    {
        id:22,
        name: 'Imanes permanentes',
        assetid: 1
    },
    {
        id:20,
        name: 'Rodillos',
        assetid: 2
    },{
        id:24,
        name: 'Escobillas 2',
        assetid: 1
    },
    {
        id:25,
        name: 'Imanes permanentes 2',
        assetid: 1
    }
];

const specifications = [
    {
        id:1,
        type: 'Voltaje',
        value: '240 VAC',
    },
    {
        id:2,
        type: 'Corriente',
        value: '50 A'
    },
    {
        id:3,
        type: 'RPM',
        value: '1600 rpm'
    },
    {
        id:4,
        type: 'Voltaje',
        value: '240 VAC',
    },
    {
        id:5,
        type: 'Corriente',
        value: '50 A'
    },
    {
        id:6,
        type: 'RPM',
        value: '1600 rpm'
    }
];

const AssetsPage = () => {
    // Estados para los filtros seleccionados
    const [enterpriseSelected, setEnterpriseSelected] = useState('');
    const [siteSelected, setSiteSelected] = useState('');
    const [areaSelected, setAreaSelected] = useState('');
    const [equipmentSelected, setEquipmentSelected] = useState('');
    const [assetStatusSelected,setAssetStatusSelected] = useState('');
    const [pageSlice, setPageSlice] = useState(0);
    const [assetInformation,setAssetInformation] = useState({});
    const [partsXAssets,setPartsXAssets]  = useState([]);
    const [assetId,setAssetId] = useState(null);
    const [partIdToDelete,setPartIdToDelete] = useState('');
    const [specificationsXAssets,setSpecificationsXAssets] = useState([]);
    const [specIdToDelete,setSpecIdToDelete] = useState(null);
    const [assetsEditBoxVisibility,setAssetsEditBoxVisibility] = useState(false);
    const [alertDeletePartVisibility,setAlertDeletePartVisibility] = useState(false);
    const [alertDeleteSpecVisibility,setAlertDeleteSpecVisbility]=useState(false);
    const [addNewPartBoxVisibility,setAddNewPartBoxVisibility] = useState(false);
    const [addNewSpecBoxVisibility,setAddNewSpecBoxVisibility] = useState(false);
    const [newAssetBoxVisibility,setNewAssetBoxVisibility] =useState(false);
    const [dataForDonut,setDataForDonut] = useState([23,32,45]);
    // Filtrar los datos con base en los filtros seleccionados
    const filteredAssets = useMemo(() => {
        return Assets.filter(asset => 
            (!enterpriseSelected || asset.enterprise.toUpperCase() === enterpriseSelected.toUpperCase()) &&
            (!siteSelected || asset.site.toUpperCase() === siteSelected.toUpperCase()) &&
            (!areaSelected || asset.area.toUpperCase() === areaSelected.toUpperCase()) &&
            (!equipmentSelected || asset.equipment.toUpperCase() === equipmentSelected.toUpperCase()) && 
            (!assetStatusSelected || asset.status.toUpperCase() === assetStatusSelected.toUpperCase())
        );
    }, [enterpriseSelected, siteSelected, areaSelected, equipmentSelected,assetStatusSelected]);
//----------------CAMBIO DE PAGINA PARA MOSTRAR EQUIPOS-------
    // Número de páginas para las flechas
    const numberOfPages = useMemo(() => {
        return Math.ceil(filteredAssets.length / 10);
    }, [filteredAssets]);

    // Data a ser mostrado con slice
    const assetsFilteredAndSliced = useMemo(() => {
        return filteredAssets.slice(pageSlice, pageSlice + 10);
    }, [pageSlice, filteredAssets]);

    // Memoize the handleLeftClickArrow function
    const handleLeftClickArrow = useCallback(() => {
        setPageSlice(prevState => Math.max(prevState - 10, 0));
    }, []);

    // Memoize the handleRightClickArrow function
    const handleRightClickArrow = useCallback(() => {
        setPageSlice(prevState => Math.min(prevState + 10, (numberOfPages - 1) * 10));
    }, [numberOfPages]);
//--------------------------------------------------------------

    const handleVisibilityAssetsOpen = useCallback((id)=> {
        setAssetsEditBoxVisibility(true);
        const assetFoundForId = filteredAssets.find(a=>a.id==id);
        if (assetFoundForId) {
            setAssetInformation(
                {
                enterprise: assetFoundForId.enterprise,
                site: assetFoundForId.site,
                area: assetFoundForId.area,
                equipment: assetFoundForId.equipment,
                device: assetFoundForId.device,
                status: assetFoundForId.status,
                createdat: assetFoundForId.createdat,
                updatedat: assetFoundForId.updatedat,
                lastmaintenance: assetFoundForId.lastmaintenance
            }
            )
        };
        console.log('asset id clicked',id);
        setAssetId(id);
    },[]);

    const handleVisibilityAssetsClose = useCallback(()=>{
        setAssetsEditBoxVisibility(false);
        setAssetInformation({});
    },[]);


    const uniqueEnterprise = useMemo(() => [...new Set(Assets.map(asset => asset.enterprise.toUpperCase()))], []);
    const uniqueSite = useMemo(() => [...new Set(filteredAssets.map(asset => asset.site.toUpperCase()))], [filteredAssets]);
    const uniqueArea = useMemo(() => [...new Set(filteredAssets.map(asset => asset.area.toUpperCase()))], [filteredAssets]);
    const uniqueEquipment = useMemo(() => [...new Set(filteredAssets.map(asset => asset.equipment.toUpperCase()))], [filteredAssets]);
    // Reseteo de búsquedas para evitar malos filtros
    const handleEnterpriseChange = useCallback((e) => {
        setEnterpriseSelected(e.target.value);
        setSiteSelected('');
        setAreaSelected('');
        setEquipmentSelected('');
    }, []);

    const handleSiteChange = useCallback((e) => {
        setSiteSelected(e.target.value);
        setAreaSelected('');
        setEquipmentSelected('');
    }, []);

    const handleAreaChange = useCallback((e) => {
        setAreaSelected(e.target.value);
        setEquipmentSelected('');
    }, []);

    const handleChangesOnEditAssets = (info) => {
        console.log('CAMBIOS A EQUIPOS',info);
    }

//---------Datos a mostrar cuando se abre la caja de equipo----------------------

    // BUSCA ESPECIFICACIONES ASOCIADAS

    useEffect(()=>{
        setSpecificationsXAssets(specifications);
    },[assetsEditBoxVisibility]);

    // BUSCA PARTES ASOCIADAS A ASSETID
    useEffect(()=>{
        const partsForAsset = parts.filter(p=>p.assetid==assetId);
        setPartsXAssets(partsForAsset);
    },[assetsEditBoxVisibility]);
//----------------------------------------------------------

//--------------------SECCION DE PARTES-------------------------------------
//------------------ELIMINACION DE PARTE----------------------
    // MUESTRA ALERTA CUANDO SE INTENTA ELIMINAR UNA PARTE
    const handleShowAlertDeletePart = useCallback((partId)=>{
        console.log(partId);
        setPartIdToDelete(partId);
        setAlertDeletePartVisibility(true);
    },[]);

    // CUANDO SE PRESIONA BOTON CANCELAR EN ALERTA DE ELIMINAR
    const handleCloseShowAlertDeletePart = useCallback(()=>{
        setPartIdToDelete('');
        setAlertDeletePartVisibility(false);
    },[]);

    // SE PRESIONA ELIMINAR PARTE EN ALERTA
    const handleDeletePart = ()=>{
        console.log('Pieza a eliminar', partIdToDelete);
    }
//--------------------CREACION DE PARTE ----------------
const handlePartToCreate = (values) => {
    console.log('Parte a crear',values);
}

//-----------------SECCION DE ESPECIFICACIONS-------------
//------------------ELIMINACION ESPECIFICACION------------
    const handleShowAlerteDeleteSpec = useCallback((specId)=>{
        console.log('specID',specId);
        setSpecIdToDelete(specId);
        setAlertDeleteSpecVisbility(true);
    },[]);

    const handleCloseShowAlertDeleteSpec = useCallback(()=>{
        setSpecIdToDelete(null);
        setAlertDeleteSpecVisbility(false);
    },[]);
    
    const handleDeleteSpec = ()=>{
        console.log('elimina spec con id',specIdToDelete);
    };
// creacion de especificacion------------------------
    const handleSpecToCreate = (specs) => {
        console.log('Spec a crear',specs)
    }
//----------------------------------------------------
// -------------FUNCIONES DE LA DONA --------------------
const dataForDonutFunc = useMemo(()=>{
    let quantity =[0,0,0]; // op,main,deco
    filteredAssets.map((a)=>{
        if(a.status==='operational'){
            quantity[0] = quantity[0]+1;
        } else if(a.status==='under maintenance'){
            quantity[1] = quantity[1]+1;
        } else {
            quantity[2] = quantity[2]+1;
        }
    })
    return quantity;
},[filteredAssets]);
//------------------------------------------------------
//-----------LABEL CLICKEADO EN DONA--------------------
const handleLabelClickedOnDonut = (data) =>{
    console.log('label clicked 427', data.label);
    if(data.label ==='Operacional'){
        setAssetStatusSelected('operational');
    } else if (data.label==='Mantenimiento'){
        setAssetStatusSelected('under maintenance');
    } else {
        setAssetStatusSelected('decomissioned');
    }
}
//------------------------------------------------------
return (
    <>
        <h1 className='titulo'>Equipos</h1>
        <div className='assetsPage'>
            <h1>Información general de equipos</h1>
            <div className='donutsBox'>
                <DonutChart data={dataForDonutFunc} labels={['Operacional','Mantenimiento','Desmantelado']} colors={['#27ae60', '#f1c40f', '#e74c3c']} onClick={handleLabelClickedOnDonut}/>
            </div>
            
            <button className='buttonNewAsset' onClick={()=>setNewAssetBoxVisibility(true)}>Crear nuevo equipo</button>
            <div className='filterBoxes'>
                <div>
                    <label>Empresa: </label>
                    <select onChange={handleEnterpriseChange} value={enterpriseSelected}>
                        <option value="">Todos</option>
                        {uniqueEnterprise.map((enterprise, index) => (
                            <option key={index} value={enterprise}>{enterprise}</option>
                        ))}
                    </select>
                </div>

                {/* Filtro de Site */}
                {enterpriseSelected && (
                    <div>
                        <label>Sitio: </label>
                        <select onChange={handleSiteChange} value={siteSelected}>
                            <option value="">Todos</option>
                            {uniqueSite.map((site, index) => (
                                <option key={index} value={site}>{site}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Filtro de Area */}
                {siteSelected && (
                    <div>
                        <label>Area: </label>
                        <select onChange={handleAreaChange} value={areaSelected}>
                            <option value="">Todos</option>
                            {uniqueArea.map((area, index) => (
                                <option key={index} value={area}>{area}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Filtro de Equipment */}
                {areaSelected && (
                    <div>
                        <label>Equipos: </label>
                        <select onChange={e => setEquipmentSelected(e.target.value)} value={equipmentSelected}>
                            <option value="">Todos</option>
                            {uniqueEquipment.map((equipment, index) => (
                                <option key={index} value={equipment}>{equipment}</option>
                            ))}
                        </select>
                    </div>
                )}
                {/* Filtro por estado de maquina */}
                <div>
                    <label>Estado de equipo: </label>
                    <select onChange={e => setAssetStatusSelected(e.target.value)} value={assetStatusSelected}>
                        <option value="">Todos</option>
                        <option key={1} value="operational">Operacional</option>
                        <option key={2} value="under maintenance">Mantenimiento</option>
                        <option key={3} value="decomissioned">Desmantelado</option>
                    </select>
                </div>
                

            </div>
            
            {/* Leyenda de equipos */}
            <div className='assetsLegend'>
                <h3>Estado equipo: </h3>
                <p><span className='operational'>Operacional</span>{' '}
                    <span className='under-maintenance'> Mantenimiento</span>{' '}
                    <span className='decomissioned'> Desmantelado</span>
                </p>
            </div>

            {/* Mostrar los datos filtrados */}
            <div>
                <h2>Equipos encontrados:</h2>
                <ul>
                    {assetsFilteredAndSliced.map(asset => (
                        <>
                        <li key={asset.id} onClick={()=>handleVisibilityAssetsOpen(asset.id)} className={asset.status === 'under maintenance' ? 'under-maintenance' : asset.status}>
                            {asset.device}
                            <div className='operacional2'>{''}</div>
                        </li>
                        </>
                    ))}
                </ul>
            </div>
            
            {/* Flechas de navegación páginas */}
            <Arrows
                actualPage={pageSlice / 10 + 1} // Ensure page numbers start from 1
                numberOfPages={numberOfPages}
                leftArrowClicked={handleLeftClickArrow}
                rightArrowClicked={handleRightClickArrow}
            />

            {/* CAJA EDICION Y MUESTRA DE ASSETS */}

            <Overlay isVisible={assetsEditBoxVisibility} title={assetInformation.device} closeButtonClicked={handleVisibilityAssetsClose}>
                    {assetsEditBoxVisibility &&
                    <div className='contentBoxInOverlay'>
                        <div className='assetsInfo'>
                            <h2>Información</h2>
                            <LabelsAssets
                                information={assetInformation}
                                handleAssetToEdit= {handleChangesOnEditAssets}
                            />
                        </div>
                        <div className='partsXWorkOrders'>
                            <div className='partsInAssets'>
                                <h2>Partes</h2>
                                <button className='addPartButton' onClick={()=>setAddNewPartBoxVisibility(true)}>Agregar nueva parte</button>
                                <ul className='partsList'>
                                    {partsXAssets.map(p => (
                                        <li key={p.id} className='partItem'>
                                            <span className='partName'>{p.name}</span>
                                            <button className='partButton' onClick={()=>handleShowAlertDeletePart(p.id)}>Eliminar</button>
                                        </li>
                                    ))}
                                </ul>
                                {alertDeletePartVisibility && 
                                    <DeleteAlert
                                    warningText={'Realmente desea eliminar la parte asociada al equipo?'}
                                    onCancel={handleCloseShowAlertDeletePart}
                                    onConfirm={handleDeletePart}
                                    />
                                }
                            </div>
                            <div className='workOrdersForAsset'>
                                <h2>Especificaciones del equipo</h2>
                                <button className='addPartButton'onClick={()=>setAddNewSpecBoxVisibility(true)}>Agregar nueva especificacion</button>
                                <ul className='partsList'>
                                    {specificationsXAssets.map(spec => (
                                        <li key={spec.id} className='partItem'>
                                            <span className='partName'>{spec.type}:  {spec.value}</span>
                                            <button className='partButton' onClick={()=>handleShowAlerteDeleteSpec(spec.id)}>Eliminar</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {alertDeleteSpecVisibility &&
                                <DeleteAlert
                                    warningText={'¿Realmente desea eliminar la especificaión?'}
                                    onCancel={handleCloseShowAlertDeleteSpec}
                                    onConfirm={handleDeleteSpec}
                                />
                            }
                        </div>

                        <Formulario
                            isVisible={addNewPartBoxVisibility}
                            title='Crear parte'
                            buttonText='Crear'
                            labels={['Nombre de parte']}
                            textHolder={['Escriba el valor de parte']}
                            inputTypes={['text']}
                            dataReturned={handlePartToCreate}
                            onClose={()=>setAddNewPartBoxVisibility(false)}
                        />

                        <Formulario
                            isVisible={addNewSpecBoxVisibility}
                            title='Crear especificación'
                            buttonText='Crear'
                            labels={['Tipo','Valor']}
                            textHolder={['Escriba tipo de especificación','Valor de la especificación']}
                            inputTypes={['text','text']}
                            dataReturned={handleSpecToCreate}
                            onClose={()=>setAddNewSpecBoxVisibility(false)}
                        />

                    </div>
                    }
            </Overlay>

            <Formulario2
            isVisible={newAssetBoxVisibility}
            title='Crear equipo'
            buttonText='Crear'
            labels={['Empresa','Sitio','Area','Equipos','Dispositivo',[{label:'Estado de equipo','Operacional':'operational','Bajo mantenimiento':'under maintenance','Desmantelado':'decomissioned'}]]}
            textHolder={['Paz del Río','Nobsa','Laminación','Motores DC','Motor 1']}
            inputTypes={['text','text','text','text','text','select']}
            dataReturned={handleSpecToCreate}
            onClose={()=>setNewAssetBoxVisibility(false)}
            dataFromFilter={[enterpriseSelected,siteSelected,areaSelected,equipmentSelected]}
            />

        </div>
        </>
    );
};


export default AssetsPage;
