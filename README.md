Created The task for RAPIDFORT

Tech Stack used-REACTJS,NODEJS,EXPRESSJS,DOCKER,KUBERNETES,SHELL.

Folder structure-The main branch is the frontend of the project and can be started by
1.npm run install
2.npm run start

Inside the main branch is the backend of the project and can be started by 
1.npm run install
2.npm run start 

The repository has a github action workflow attached to it that is executed on every commit
It builds 2 separate docker images on my profile anmolbakshi12 called frontend and backend
It builds them using 2 separate docker files present in both the frontend and then also inside the backend folder.
That it creates and pushes separate docker images for both my frontend and backend on every commit to the main branch.

The repository also has a shell script to run the containers locally on my machine that is executed by ./run_container.sh

The repository finally has separate deployment.yaml and service.yaml files for both frontend and backend to make 2 separate kubernetes pods and services.
They are working using load balancers and are working on my machine on port 70 and port 80 for backend and frontend respectively.

The site for testing is also deployed and can be accessed on https://rapid-task.netlify.app/
(kindly give some time after uploading as the backend is deployed on a free site and is slow to access sometimes)

Thank you!
