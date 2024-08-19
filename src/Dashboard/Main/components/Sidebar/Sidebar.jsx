import './Sidebar.css';
import usersIcon from './icons/usersIcon.svg';
import assetIcon from './icons/assetIcon.svg';
import workOrderIcon from './icons/workOrderIcon.svg';
import reportIcon from './icons/reportIcon.svg';
import inventoryIcon from './icons/inventoryIcon.svg';

const adminMenu = () => (
    <>
        <li className="sidebar-item">
            <a href="/admin" className="sidebar-link">
                <img src={usersIcon} alt="Users Icon" className="sidebar-icon" />
                Usuarios
            </a>
        </li>
        {maintenanceManagerMenu()}
    </>
);

const inventoryManagerMenu = () => (
    <>
        <li className="sidebar-item">
            <a href="/inventario" className="sidebar-link">
                <img src={inventoryIcon} alt="Inventory Icon" className="sidebar-icon" />
                Inventario
            </a>
        </li>
    </>
)

const maintenanceManagerMenu = () => (
    <>
        <li className="sidebar-item">
            <a href="/equipos" className="sidebar-link">
                <img src={assetIcon} alt="Asset Icon" className="sidebar-icon" />
                Equipos
            </a>
        </li>
        {technicianMenu()}
        {reliabilityEngineerMenu()}
        {inventoryManagerMenu()}
    </>
);

const reliabilityEngineerMenu = () => (
    <>
        <li className="sidebar-item">
            <a href="/reportes" className="sidebar-link">
                <img src={reportIcon} alt="Reports Icon" className="sidebar-icon" />
                Reportes
            </a>
        </li>
    </>
)

const technicianMenu = () => (
    <>
        <li className="sidebar-item">
            <a href="/mantenimientopredictivo" className="sidebar-link">
                <img src={assetIcon} alt="Asset Icon" className="sidebar-icon" />
                Mantenimiento predictivo
            </a>
        </li>
        <li className="sidebar-item">
            <a href="/ordentrabajo" className="sidebar-link">
                <img src={workOrderIcon} alt="Asset Icon" className="sidebar-icon" />
                Orden de trabajo
            </a>
        </li>
        <li className="sidebar-item">
            <a href="/reportemantenimiento" className="sidebar-link">
                <img src={reportIcon} alt="Report Icon" className="sidebar-icon" />
                Reporte mantenimiento
            </a>
        </li>
    </>
)


const Sidebar = ({ roleid }) => {
    const role = parseInt(roleid, 10); // Ensure the role ID is parsed as an integer
    const ADMIN = 1;
    const INVENTORYMANAGER = 2;
    const MAINTENANCEMANAGER = 3;
    const RELIABILITYENGINEER = 4;
    const TECHNICIAN = 5;

    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {role === ADMIN && adminMenu()}
                {role === MAINTENANCEMANAGER && maintenanceManagerMenu()}
                {role === INVENTORYMANAGER && inventoryManagerMenu()}
                {role === RELIABILITYENGINEER && reliabilityEngineerMenu()}
                {role === TECHNICIAN && technicianMenu()}
            </ul>
        </div>
    );
};

export default Sidebar;

