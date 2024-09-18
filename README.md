# TECNODM CMMS Software

**Note:** *This software is currently under active development. Some features may be incomplete or subject to change. You are going to explore the dashboard as "admin" role. This software is not connected to a backend technology yet. Contributions and feedback are welcome!*

TECNODM Computerized Maintenance Management System (CMMS) is designed to streamline and optimize maintenance operations. This software provides a solution to manage work orders, track equipment maintenance, schedule preventive tasks, inventory of parts, and reports. With an intuitive user interface, it allows maintenance teams to efficiently monitor tasks, reduce downtime, and improve asset reliability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/daniellizarazoo/cmms_frontend
    ```

2. Navigate to the project repository and install dependencies:
    ```bash
    cd cmms_frontend
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

By the moment, you are able to navigate through components within the dashboard as an "admin" role. If you want to try the software without cloning this repository, you can enter this link: [**TECNODM CMMS SOFTWARE**](https://daniellizarazoo.github.io/cmms_frontend/#/ordentrabajo).

**Note:** If trying to use the sidebar of the software on the webpage, it won't work due to an issue with React Router and GitHub Pages. Instead, I recommend you clone the repository and test the software locally.

## Features

### Users page

The Users page provides the following functionalities for administrators:

- **Search for users**: Find users within the database quickly by their name.
- **Delete users**: Remove users from the system if necessary.
- **Change password**: Reset or change user passwords.
- **Create new users**: Add new users.
- **Edit user information**: Modify existing user details, such as name or email.

As an admin, you have full control over user management through this page.

**Link**: [Users page](https://daniellizarazoo.github.io/cmms_frontend/#/admin)

### Assets page

The Assets page allows you to manage and interact with assets in various ways. Below are the key features of the page:

- **Search for assets**: You can search for assets by their name for quick access.
- **Filter by status**: Filter assets based on their current status:
  - Operational
  - Under maintenance
  - Decommissioned
- **Filter by ISA95**: Narrow down assets based on the ISA95 standard.
- **View asset information**: Access detailed information related to each asset.
- **Create new assets**: Easily add new assets to the system.
- **Delete assets**: Remove assets that are no longer needed.
- **Add parts or info**: Attach new parts or additional information to existing assets.
- **Work orders**: Create and search work orders for the selected asset.
- **Predictive maintenance**: Create periodic tasks for the asset.

This page helps administrators and maintenance managers effectively manage assets within the system.

**Link**: [Assets page](https://daniellizarazoo.github.io/cmms_frontend/#/equipos)

### Predictive maintenance page

The Predictive Maintenance page allows administrators to efficiently manage maintenance tasks for assets. Key functionalities include:

- **Search by status**: Filter maintenance tasks based on their status:
  - Outdated
  - Due
  - To Do
- **Search by asset name**: Find predictive maintenance tasks for specific assets by their name.
- **Mark task as done**: Update the status of a task to indicate it has been completed.
- **Delete tasks**: Remove maintenance tasks that are no longer relevant.
- **View notes**: Access notes and additional details related to predictive maintenance tasks, as defined on the Asset page.

This page provides relevant filters and task management options.

**Link**: [Predictive maintenance page](https://daniellizarazoo.github.io/cmms_frontend/#/mantenimientopredictivo)

### Work orders page

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

## Contributing 

If you want to contribute to this project make a PR or reach me on my LinkedIn.

**Link**: [Daniel Lizarazo](https://linkedin.com/in/daniellizarazoo)

## License


This software is licensed under the following terms:

# License Agreement

**TECNODM CMMS Software** is provided under a non-commercial license. You are free to use, modify, and distribute this software for personal or educational purposes only, but you may not use it for commercial purposes. Commercial purposes include, but are not limited to, using the software for profit, providing paid services, or integrating the software into products or services offered for sale.

### Terms of Use

- **Non-Commercial Use**: You may use this software only for personal, educational, or non-commercial purposes. You may not use this software to create, offer, or distribute commercial products or services.
- **No Warranty**: This software is provided "as is" without any warranties or guarantees. The authors are not responsible for any damage or loss resulting from the use of this software.
- **Attribution**: If you distribute this software or derivative works based on it, you must provide appropriate credit to the original authors and include a copy of this license.

### Contact

For any questions or permissions beyond the scope of this license, please contact the author at [Daniel Lizarazo](https://linkedin.com/in/daniellizarazoo).

---

By using this software, you agree to the terms of this license.