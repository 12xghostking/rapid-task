**Project Name:** RapidFort task

**Project Link:** https://rapid-task.netlify.app/

**Description:** This project contains backend and frontend for a REST web server that lets users upload the files and in return get its type and path.


****Endpoints****
https://rapid-backend.onrender.com/



**File Upload**

**Endpoint:** /upload

**HTTP Method:** POST

**Description:** Use this endpoint to upload a file to the server. The server processes the uploaded file and provides detailed information about it.


**Request**
GET /file_info/:filename


**Response**

HTTP Status 200 OK:


HTTP Status 400 Bad Request (No file uploaded):



**Prerequisites**
Before you begin setting up and running the application ensure you have met the following prerequisites:

**Software Requirements**
**Node.js:** The project is built using Node.js, so you need to have it installed on your machine. You can download it from the official Node.js website.
**ReactJs** The frontend is built using reactjs,so you need it installed.
**Docker:** If you plan to build and run the project using Docker containers, make sure you have Docker installed. You can download Docker Desktop for your operating system from the Docker website.
**Kubernetes** : If you intend to deploy the web server on a Kubernetes cluster, ensure you have access to a Kubernetes cluster and kubectl command-line tool installed.

****Key Features:****

**File Upload**: Users can upload files of various types and sizes to the web server.

**File Information :** The web server analyzes uploaded files and provides detailed information such as file type, file path using exec file command.

**User Interface:** A simple and intuitive user interface is provided.

**RESTful API:** The server follows REST principles, offering clear API endpoints for file upload and retrieval. Hosted app: https://rapid-task.netlify.app/

**Docker container using github actions:** The project includes a workflow for easy deployment and isolation of 2 separate docker images of forntend and backend created with separate docker files on every commit to the main branch.

**Used Bash Script to run the container:** In the folder a run_container.sh is present to run both the container of the backend and frontend on the machine.

**Kubernetes Compatibility:** Kubernetes manifest files are provided for hosting the web server within a Kubernetes clusterI(which was for now created on a local machine using Docker Desktop).
