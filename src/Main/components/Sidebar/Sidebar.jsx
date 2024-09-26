import './Sidebar.css';
import { Link } from 'react-router-dom';

const adminMenu = () => (
    <>
        <li className="sidebar-item">
            <Link to="admin" className="sidebar-link">
                Usuarios
            </Link>
        </li>
        {maintenanceManagerMenu()}
    </>
);

const inventoryManagerMenu = () => (
    <>
        <li className="sidebar-item">
            <Link to="inventario" className="sidebar-link">
                Inventario
            </Link>
        </li>
    </>
);

const maintenanceManagerMenu = () => (
    <>
        <li className="sidebar-item">
            <Link to="equipos" className="sidebar-link">
                Equipos
            </Link>
        </li>
        {technicianMenu()}
        {reliabilityEngineerMenu()}
        {inventoryManagerMenu()}
    </>
);

const reliabilityEngineerMenu = () => (
    <>
        <li className="sidebar-item">
            <Link to="reportes" className="sidebar-link">
                Reportes
            </Link>
        </li>
    </>
);

const technicianMenu = () => (
    <>
        <li className="sidebar-item">
            <Link to="mantenimientopredictivo" className="sidebar-link">
                Mantenimiento predictivo
            </Link>
        </li>
        <li className="sidebar-item">
            <Link to="ordentrabajo" className="sidebar-link">
                Orden de trabajo
            </Link>
        </li>
        <li className="sidebar-item">
            <Link to="reportemantenimiento" className="sidebar-link">
                Reporte mantenimiento
            </Link>
        </li>
    </>
);

const Sidebar = ({ roleid }) => {
    const role = parseInt(roleid, 10);
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
