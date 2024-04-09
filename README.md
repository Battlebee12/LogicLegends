# Running Eventify Web App

To run the Eventify web application on your machine, follow these steps:

## Clone Repository

Clone the Eventify repository to your local machine:

```bash
git clone <repository-url>
```
Install Dependencies
Navigate to the cloned repository directory in the terminal and run:

```
npm install
```
Start Frontend
Start the frontend of the application by running:
```
npm start
```

Set Up MySQL Database
Open a new terminal window and run MySQL:

```
mysql -u root -p
```
Enter the password for your MySQL root user when prompted, then execute the SQL commands located in the ddl folder to create the necessary tables. Ensure that the SQL script contains all the required tables as specified.


Configure Backend
Navigate to the backend folder in the repository. In the index.js file, update the password field with your MySQL root user password.

Start Backend Server
In the same terminal window, navigate to the backend folder and run:

```
node index.js
```

The backend server should now be running.

and the website should be ready to be tested 
