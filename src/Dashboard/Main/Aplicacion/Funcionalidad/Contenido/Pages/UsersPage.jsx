/* eslint-disable react/prop-types */
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

const CustomAlert = ({ message, onConfirm, onCancel }) => {
    return (
      <div className="custom-alert-overlay">
        <div className="custom-alert">
          <p>{message}</p>
          <div className="custom-alert-buttons">
            <button onClick={onConfirm}>Aceptar</button>
            <button onClick={onCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    );
  };

const UserPage = () => {
    const numberOfUsers = users.length;
    const numberOfPages = Math.ceil(numberOfUsers/10);
    const [actualPage, setActualPage] = useState(1);
    const [showPageSlice, setShowPageSlice] = useState(0);
    const [searchUserName,setsearchUserName] = useState('');
    const [visibilityEditUser,setVisibilityEditUser]=useState(false);
    const [userToEdit,setUserToEdit] = useState(null);
    const [visibilityPasswordEdit,setVisibilityPasswordEdit]=useState(false);
    const [pwdToEdit,setPwdToEdit]=useState(null);
    const [pwdRepeated,setpwdRepeated] = useState(null);


    const [userIdToEdit,setUserIdToEdit] = useState(null);

    const [isErrorInNotification,setIsErrorInNotification]=useState(false);
    const [notificationMessage,setNotificationMessage]=useState(null);

    const [visbilityDeleteUserBox,setVisibilityDeleteUserBox] = useState(false);

    const [visbilityNewUserBox,setVisbilityNewUserBox] = useState(false);

    const [newEmail,setNewEmail] = useState(null);
    const [newUserName,setNewUser] = useState(null);
    const [newName,setNewName] = useState(null);
    const [newPassword,setNewPassword] = useState(null);
    const [newRole,setNewRol] = useState(null);

    const displayedUsers = users.slice(showPageSlice,showPageSlice+10);
    const filterUsers = users.filter(user => user.username.includes(searchUserName)||user.name.includes(searchUserName));

    const handleEditButtonClicked = (id) => {
        setVisibilityEditUser(true);
        setUserIdToEdit(id);
        const userToEdit = users.find(user=> user.id=== id);
        setUserToEdit(userToEdit);
    };

    const handleCloseEditUser = () => {
        setVisibilityEditUser(false);
        setUserIdToEdit(null);
        setUserToEdit(null);
    }

    const handleEditButtonSaveChanges = () => {
        setVisibilityEditUser(false);
        console.log('cambios usuario',userToEdit); //Usar userToEdit.id para id a editar
        setUserIdToEdit(null);
        setUserToEdit(null);
    }
    
    const handlePasswordEditButtonClicked = (id) => {
        setVisibilityPasswordEdit(true);
        setUserIdToEdit(id);
        console.log('id pressed in password edit',id)
    }

    const handleClosePasswordEdit = () => {
        setVisibilityPasswordEdit(false);
        setUserIdToEdit(null);
        setPwdToEdit(null);
        setpwdRepeated(null);
    }

    const handleSaveNewPwd = (e) => {
        e.preventDefault()
        if(pwdRepeated===pwdToEdit){
            console.log('PWD actualizada');
            handleNotifications(false,'Contrasena actualizada');
            setPwdToEdit(null);
            setpwdRepeated(null);
            setVisibilityPasswordEdit(false);
        } else {
            console.log('Diferentes')
            handleNotifications(true,'Contrasena no coincide');
        }
    }

    const handleNotifications = (error=null,message=null) => {
        if(error){
            setIsErrorInNotification(true);
            setNotificationMessage(message);
        } else {
            setIsErrorInNotification(false);
            setNotificationMessage(message);
        }
        setTimeout(()=>{
            setNotificationMessage(null);
        },5000);
    }

    const handleDeleteButtonClicked = (id) => {
            setUserIdToEdit(id);
            setVisibilityDeleteUserBox(true);
            console.log('Se confirmo eliminacion de usuario id',id);
    }

    const handleCloseDeleteBox = () => {
        setVisibilityDeleteUserBox(false);
        setUserIdToEdit(null);
    }

    const handleDeleteUser = () => {
        console.log('user id to delete',userIdToEdit);
        setIsErrorInNotification(false);
        setNotificationMessage('Usuario eliminado correctamente');
        setTimeout(()=>{
            setNotificationMessage(null);
        },5000);
        setVisibilityDeleteUserBox(false);
        setUserIdToEdit(null);
    }

    const alertMessage = () => {
        const user=users.find(user=>user.id === userIdToEdit);
        return(
            `Al eliminar el usuario ${user.name}, se eliminará todo lo que este creó, incluidos equipos, órdenes de trabajo. Realmente desea hacerlo?`
        )
    }

    const handleCloseNewUserBox = () => {
        setVisbilityNewUserBox(false);
        setNewEmail(null);
        setNewName(null);
        setNewRol(null);
        setNewUser(null);
        setNewPassword(null);
    }

    const handleShowOpenNewUserBox = () => {
        setVisbilityNewUserBox(true);
        setNewRol(1);
    }

    const handleNewUser = (e) => {
        e.preventDefault();
        const userToCreate = {
            email: newEmail,
            username: newUserName,
            name: newName,
            password: newPassword,
            roleid: newRole
        }
        console.log('usuario a crear', userToCreate);
    }

    return (
        <div className="userpage">
            <h1>Usuarios</h1>
            <div className='cajaBusqueda'>
                <h3>Búsqueda:</h3>
                <input type='text' placeholder='escriba nombre o usuario' onChange={(event)=>setsearchUserName(event.target.value)}/>
                {/* <button>Buscar</button> */}
            </div>
            <div>
                <button onClick={handleShowOpenNewUserBox}>Crear nuevo usuario</button>
            </div>
            <table className='user-table'>
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
                                <button onClick={()=>handlePasswordEditButtonClicked(user.id)}>Cambiar contraseña</button>
                                <button className='eliminar' onClick={()=>handleDeleteButtonClicked(user.id)}>Eliminar</button>
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
                                <button onClick={()=>handlePasswordEditButtonClicked(user.id)}>Cambiar contraseña</button>
                                <button className='eliminar' onClick={()=>handleDeleteButtonClicked(user.id)}>Eliminar</button>
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
            {/* VISIBILIDAD CAJA EDICION USUARIO */}
            {visibilityEditUser && userToEdit && (
                <div className='overlay2'>
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
                            <button onClick={handleEditButtonSaveChanges}>Guardar cambios</button>
                        </div>
                    </div>
                </div>
            )}

            {/* VISIBILIDAD CAJA EDICION DE CONTRASEÑA */}

            {visibilityPasswordEdit &&
                <div className='overlay2'>
                    <div className='editUser'>
                        <div className='header'>
                            <h2>Cambiar contraseña</h2>
                            <button className='closeButton' onClick={handleClosePasswordEdit}>X</button>
                        </div>
                        <p>No olvides notificar al usuario sobre el cambio de contraseña</p>
                        <form onSubmit={handleSaveNewPwd}>
                            <div className='formGroup'>
                                <label htmlFor='newPassword'>Nueva contraseña</label>
                                <input
                                    id='newPassword'
                                    type='password'
                                    required
                                    value={pwdToEdit}
                                    onChange={(e) => setPwdToEdit(e.target.value)}
                                />
                            </div>
                            <div className='formGroup'>
                                <label htmlFor='repeatPassword'>Repetir contraseña</label>
                                <input
                                    id='repeatPassword'
                                    type='password'
                                    required
                                    value={pwdRepeated}
                                    onChange={(e) => setpwdRepeated(e.target.value)}
                                />
                            </div>
                            <button type='submit'>Cambiar contraseña</button>
                        </form>
                    </div>
                </div>
            }

            {/* VISIBILIDAD CAJA ELIMINAR USUARIO */}

            {visbilityDeleteUserBox && 
            <CustomAlert
                message={alertMessage()}
                onConfirm={handleDeleteUser}
                onCancel={handleCloseDeleteBox}
            />
            }
            
            {visbilityNewUserBox &&
                <div className='overlay2'>
                    <div className='editUser'>
                        <div className='header'>
                            <h2>Crear nuevo usuario</h2>
                            <button className='closeButton' onClick={handleCloseNewUserBox}>X</button>
                        </div>
                        <form onSubmit={handleNewUser}>
                            <div className='formGroup'>
                                <label>Correo: </label>
                                <input type='text' required onChange={(e)=>setNewEmail(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <label>Username: </label>
                                <input type='text' required onChange={(e)=>setNewUser(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <label>Nombre: </label>
                                <input type='text' required onChange={(e)=>setNewName(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <label>Contraseña: </label>
                                <input type='password' required onChange={(e)=>setNewPassword(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <label>Rol: </label>
                                <select
                                    placeholder='Seleccione rol'
                                    onChange={(e)=>setNewRol(parseInt(e.target.value))}
                                    
                                >
                                    <option value={1}>Administrador</option>
                                    <option value={3}>Jefe Mantenimiento</option>
                                    <option value={5}>Técnico</option>
                                    <option value={2}>Administrador de inventario</option>
                                    <option value={4}>Ingeniero de confiabilidad</option>
                                </select>
                            </div>
                            <button type='submit'>Crear</button>
                        </form>
                    </div>
                </div>
            }

            {<Notification isError={isErrorInNotification} message={notificationMessage}/>}

        </div>
    );
};

export default UserPage;