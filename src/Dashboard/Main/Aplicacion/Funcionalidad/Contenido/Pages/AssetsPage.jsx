import  { useState, useMemo ,useCallback} from 'react';
import LabelsAssets from './Components/Labels';
import './AssetsPage.css';
import Arrows from './Components/Arrows';
import Overlay from './Components/Overlay';

const Assets = [
    {
        "id": 1,
        "enterprise": "GSR",
        "site": "SOGAMOSO",
        "area": "Laminación",
        "equipment": "Motores AC",
        "device": "Motor 3",
        "status": "under maintenance",
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

const AssetsPage = () => {
    // Estados para los filtros seleccionados
    const [enterpriseSelected, setEnterpriseSelected] = useState('');
    const [siteSelected, setSiteSelected] = useState('');
    const [areaSelected, setAreaSelected] = useState('');
    const [equipmentSelected, setEquipmentSelected] = useState('');
    const [pageSlice, setPageSlice] = useState(0);
    const [assetIdClicked,setAssetIdClicked] = useState(null);
    const [assetInformation,setAssetInformation] = useState({});

    const [assetsEditBoxVisibility,setAssetsEditBoxVisibility] = useState(false);

    // Filtrar los datos con base en los filtros seleccionados
    const filteredAssets = useMemo(() => {
        return Assets.filter(asset => 
            (!enterpriseSelected || asset.enterprise.toUpperCase() === enterpriseSelected.toUpperCase()) &&
            (!siteSelected || asset.site.toUpperCase() === siteSelected.toUpperCase()) &&
            (!areaSelected || asset.area.toUpperCase() === areaSelected.toUpperCase()) &&
            (!equipmentSelected || asset.equipment.toUpperCase() === equipmentSelected.toUpperCase())
        );
    }, [enterpriseSelected, siteSelected, areaSelected, equipmentSelected]);
    
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

    const handleVisibilityAssetsOpen = useCallback((id)=> {
        setAssetsEditBoxVisibility(true);
        setAssetIdClicked(id);
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
    },[]);

    const handleVisibilityAssetsClose = useCallback(()=>{
        setAssetsEditBoxVisibility(false);
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

    const handleChangesOnEditAssets = (key,value) => {
        console.log('CAMBIOS A EQUIPOS',key,value);
    }

    return (
        <div className='assetsPage'>
            <h1>Equipos</h1>

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
            </div>

            {/* Leyenda de equipos */}
            <div className='assetsLegend'>
                <h3>Estado equipo: </h3>
                <p><span className='operational'>Operacional</span>,
                    <span className='under-maintenance'> Mantenimiento</span>,
                    <span className='decomissioned'> Desmantelado</span>
                </p>
            </div>

            {/* Mostrar los datos filtrados */}
            <div>
                <h2>Equipos encontrados</h2>
                <ul>
                    {assetsFilteredAndSliced.map(asset => (
                        <li key={asset.id} onClick={()=>handleVisibilityAssetsOpen(asset.id)} className={asset.status === 'under maintenance' ? 'under-maintenance' : asset.status}>
                            {asset.enterprise} - {asset.site} - {asset.area} - {asset.equipment} - {asset.device}
                        </li>
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
                    <div className='contentBoxInOverlay'>
                        <div className='assetsInfo'>
                            <h2>Información</h2>
                            <LabelsAssets
                                information={assetInformation}
                            />
                        </div>
                        <div className='partsxAssetsInfo'>
                            <h1>Holiwis</h1>
                        </div>
                    </div>
            </Overlay>

        </div>
    );
};

export default AssetsPage;
