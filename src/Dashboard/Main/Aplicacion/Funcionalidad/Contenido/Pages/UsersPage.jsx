import './UsersPage.css';
import { useState } from 'react';
import arrowLeftIcon from './icons/arrowLeftIcon.png';
import arrowRightIcon from './icons/arrowRightIcon.png';
import Notification from '../../../../../Login/components/Notificacion';

const users = [
    {
        "id": 1,
        "username": "admin",
        "name": "Daniel Lizarazo",
        "isactive": true,
        "rolename": "admin"
    },
    {
        "id": 2,
        "username": "inventorymanager",
        "name": "Eileen Cubides",
        "isactive": true,
        "rolename": "inventoryManager"
    },
    {
        "id": 3,
        "username": "maintenancemanager",
        "name": "Joe Marquez",
        "isactive": true,
        "rolename": "maintenanceManager"
    },
    {
        "id": 4,
        "username": "reliabilityengineer",
        "name": "Samuel Gómez",
        "isactive": true,
        "rolename": "reliabilityEngineer"
    },
    {
        "id": 5,
        "username": "technician",
        "name": "Sergio Velez",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 6,
        "username": "technician2",
        "name": "Luis Lizarazo",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 7,
        "username": "technician3",
        "name": "Maria Jara",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 8,
        "username": "technician4",
        "name": "Felipino",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 9,
        "username": "technician5",
        "name": "Marcolino",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 10,
        "username": "technician6",
        "name": "Nicolas",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 11,
        "username": "technician7",
        "name": "Santi Arias",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 14,
        "username": "technician10",
        "name": "Yerry Mina",
        "isactive": true,
        "rolename": "technician"
    },
    {
        "id": 47,
        "username": "Prueba",
        "name": "Nicki Minaj",
        "isactive": true,
        "rolename": "technician"
    }
];

const UserPage = () => {
    const numberOfUsers = users.length;
    const numberOfPages = Math.ceil(numberOfUsers/10);
    const [actualPage, setActualPage] = useState(1);
    const [showPageSlice, setShowPageSlice] = useState(0);
    const [searchUserName,setsearchUserName] = useState('');
    const [visibilityEditUser,setVisibilityEditUser]=useState(false);
    const [userToEdit,setUserToEdit] = useState(null);

    const displayedUsers = users.slice(showPageSlice,showPageSlice+10);
    const filterUsers = users.filter(user => user.username.includes(searchUserName)||user.name.includes(searchUserName));

    const handleEditButtonClicked = (id) => {
        setVisibilityEditUser(true);
        const userToEdit = users.find(user=> user.id=== id);
        console.log('original usuario',userToEdit);
        setUserToEdit(userToEdit);
    };

    const handleCloseEditUser = () => {
        setVisibilityEditUser(false);
    }

    const handleSaveChanges = () => {
        setVisibilityEditUser(false);
        console.log('cambios usuario',userToEdit);
    }

    return (
        <div className="userpage">
            <h1>Usuarios</h1>
            <div className='cajaBusqueda'>
                <h3>Búsqueda:</h3>
                <input type='text' placeholder='escriba nombre o usuario' onChange={(event)=>setsearchUserName(event.target.value)}/>
                {/* <button>Buscar</button> */}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Activo</th>
                        <th>Rol</th >
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {searchUserName ? filterUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <input type='checkbox' checked={user.isactive} readOnly/>
                            </td>
                            <td>{user.rolename}</td>
                            <td>
                                <button onClick={()=>handleEditButtonClicked(user.id)}>Editar</button>
                                <button>Cambiar contraseña</button>
                                <button className='eliminar'>Eliminar</button>
                            </td>
                        </tr>
                    ))
                    : displayedUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <input type='checkbox' checked={user.isactive} readOnly/>
                            </td>
                            <td>{user.rolename}</td>
                            <td>
                                <button onClick={()=>handleEditButtonClicked(user.id)}>Editar</button>
                                <button>Cambiar contraseña</button>
                                <button className='eliminar'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <span className='spanUser'>
                <img src={arrowLeftIcon} onClick={()=>{
                    setActualPage(actualPage-1);
                    setShowPageSlice(showPageSlice-10);
                }}/>
                Pg {actualPage} de {numberOfPages}
                <img src={arrowRightIcon} onClick={()=>{
                    setActualPage(actualPage+1);
                    setShowPageSlice(showPageSlice+10);
                    }}/>
            </span>
            
            {visibilityEditUser && userToEdit && (
                <div className='overlay'>
                    <div className='editUser'>
                        <div className='header'>
                            <h2>Editar</h2>
                            <button className='closeButton' onClick={handleCloseEditUser}>X</button>
                        </div>
                        <div className='editForm'>
                            <div className='formGroup'>
                                <label>Username</label>
                                <input
                                    name='username'
                                    value={userToEdit.username}
                                    readOnly
                                />
                            </div>
                            <div className='formGroup'>
                                <label>Nombre</label>
                                <input
                                    name='name'
                                    type='text'
                                    value={userToEdit.name}
                                    onChange={(e) => setUserToEdit(prevState => ({ ...prevState, name: e.target.value }))}
                                />
                            </div>
                            <div className='formGroup'>
                                <label>Rol</label>
                                <select
                                    name='rolename'
                                    value={userToEdit.rolename}
                                    onChange={(e)=>setUserToEdit(prevState=>({...prevState,rolename:e.target.value}))}
                                >
                                    <option value="admin">Administrador</option>
                                    <option value="maintenanceManager">Jefe Mantenimiento</option>
                                    <option value="technician">Técnico</option>
                                    <option value="inventoryManager">Administrador de inventario</option>
                                    <option value="reliabilityEngineer">Ingeniero de confiabilidad</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Activo</label>
                                <input
                                    name='isactive'
                                    type='checkbox'
                                    checked={userToEdit.isactive}
                                    onChange={(e) => setUserToEdit(prevState => ({ ...prevState, isactive: e.target.checked }))}
                                />
                            </div>
                            <button onClick={handleSaveChanges}>Guardar cambios</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default UserPage;