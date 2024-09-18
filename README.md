# TECNODM CMMS Software

<p align="justify">**Note:** *This software is currently under active development. Some features may be incomplete or subject to change. You are going to explore the dashboard as "admin" role. This software is not connected to a backend technology yet.  Contributions and feedback are welcome!.*

  TECNODM Computerized Maintenance Management System (CMMS) is designed to streamline and optimize maintenance operations. This software provides a solutions to manage work orders, track equipment maintenance, schedule preventive tasks, inventory of parts and reports. With an intuitive user interface, it allows maintenance teams to efficiently monitor tasks, reduce downtime, and improve asset reliability. </p>

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation
1.  Clone the repository
``` bash
	git clone https://github.com/daniellizarazoo/cmms_frontend ```

2.  Navigate to the project repository and install dependencies
```bash
	cd cmms_frontend
	npm install```
3.  Start the development server
```bash
npm start```

##Usage

<p align="justify"> By the moment you are going to be able to navigate through components within dashboard as "admin" role. If you wanna try the software without cloning this repository, you must enter to this link [**TECNODM CMMS SOFTWARE**](https://daniellizarazoo.github.io/cmms_frontend/#/ordentrabajo)
 
 **Note:** : If trying to use sidebar of the software in web page, wont work. There is a problem with React Router and github pages. Instead I recommend you to clone the repository and test the software locally.
</p> 

##Features

### Users page
The Users page provides the following functionalities for administrators:

- **Search for users**: Find users within the database quickly by their name.
- **Delete users**: Remove users from the system if necessary.
- **Change password**: Reset or change user passwords.
- **Create new users**: Add new users.
- **Edit user information**: Modify existing user details, such as name or email.

As an admin, you have full control over user management through this page.

**Link**: [Users page](https://daniellizarazoo.github.io/cmms_frontend/#/admin)

###Assets page
The Assets page allows you to manage and interact with assets in various ways. Below are the key features of the page:

- **Search for assets**: You can search for assets by their name for quick access.
- **Filter by status**: Filter assets based on their current status:
  - Operational
  - Under maintenance
  - Decomissioned
- **Filter by ISA95**: Narrow down assets based on the ISA95 standard.
- **View asset information**: Access detailed information related to each asset.
- **Create new assets**: Easily add new assets to the system.
- **Delete assets**: Remove assets that are no longer needed.
- **Add parts or info**: Attach new parts or additional information to existing assets.
- **Work orders**: Create and search work orders for the asset selected.
- **Predictive maintenance**: Create periodic tasks to do in the asset.


This page is designed to help administrators and maintenance manager roles effectively manage their assets within the system.

**Link**: [Assets Page](https://daniellizarazoo.github.io/cmms_frontend/#/equipos)

###Predictive maintenance page
The Predictive Maintenance page allows administrators to efficiently manage maintenance tasks for assets. Key functionalities include:

- **Search by status**: Filter maintenance tasks based on their status:
  - Outdated
  - Due
  - To Do
- **Search by asset name**: Find predictive maintenance tasks for specific assets by their name.
- **Mark task as done**: Update the status of a task to indicate it has been completed.
- **Delete tasks**: Remove maintenance tasks that are no longer relevant.
- **View notes**: Access notes and additional details related to predictive maintenance tasks, as defined on the Asset page.

This page is provide you relevant filters and task management options.

**Link**: [Predictive maintenance page](https://daniellizarazoo.github.io/cmms_frontend/#/mantenimientopredictivo)

###Work orders page
The Work Orders page offers different functionalities depending on the user's role:

#### Administrator or Maintenance Manager:
- **Search work orders for assets**: View all work orders across assets.
- **Filter work orders**:
  - By asset name
  - By priority: High, medium, low
  - By status: Open, completed, in progress
- **Manage work orders**:
  - Delete work orders
  - Mark work orders as complete
  - Edit work order information

#### Technician:
- **View assigned work orders**: See notes and details for the work orders assigned to you.
- **Change status**:
  - From **Open** to **In Progress**
  - When marking a work order as **Complete**, a report is required to explain how the task was resolved.

This page provides a comprehensive overview and management of work orders, enabling efficient tracking and task completion based on the user role.

**Link**: [Work orders page](https://daniellizarazoo.github.io/cmms_frontend/#/ordentrabajo)