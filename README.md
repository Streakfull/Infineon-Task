# Infineon Assignment
---


![Capture](https://github.com/user-attachments/assets/7dcffcaa-5607-4915-8f85-1e7eb994d967)

## Goal

Develop a simple web application that ranks companies in order of relevance to a given search term. The
application should consist of a backend with endpoints to insert new companies to the database and search for
companies based on a search term and return them ordered by relevance. You should create a database to
store company information such as name and description. A frontend will be required to allow users to submit
search terms and display a list of companies ordered by relevance. Additionally, it would be of benefit if a user
can add new companies to the system.

---

## Stack Overview
* This application consists of:
    * API Server (Typescript + NodeJs)
    * Database (MongoDB)
    * Front end client (ReactJs)
 
  ![WhatsApp Image 2024-11-26 at 16 31 21](https://github.com/user-attachments/assets/acc2f83e-fa9d-4609-a235-96bafbae80c1)

---
## Deployed Demo Links
* Frontend:  https://powerful-harbor-28636-f4aea3d90364.herokuapp.com/
* API: https://sleepy-dusk-93638-7059c98bb26d.herokuapp.com/companies
---
## Run Locally using docker
 * `docker-compose --build`
 * `docker-compose up`
This will start the API, Front end and Database server.

**Note 1: Setting the `services.backend.environment.POPULATE` flag to `true` in the `docker-compose.yml` file will create 10k dummy companies on server startup**

**Note 2: There was not enough disk space to run docker locally on a local machine, so a remote machine was used via SSH. For the SSH connections the `services.front.build.args.VITE_BASE_URL` is set as `http://localhost:8000` (to use with `SSH _NL`). For running locally, this env variable should be set to `http://backend:8000`. However, please note that this was not validated, but it should be working.**

---
## Running Locally without docker
 
 ### Prerequistes
  * Install [mongoDB](https://www.mongodb.com/docs/manual/installation/)
  * Install  [NodeJs & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
 ### API
  * `cd backend/`
  * `npm install`
  * `npm start` or `npm watch_dev`
### Frontend
  * `cd frontend/`
  * `npm install`
  * `npm start` or `npm run dev`

**Note: 2 `.env` files are required in both the frontend and backend. You can find the requirments in the `.env.copy` files respectively.**




---
## Supported Functionalities
* View all companies
* Sort by name or founding date
* Create company
* Delete company
* Edit company
* Search companies according to relevant terms in the description
   * returns top 500 companies ranked according to similarity
   * similarity is based on MongoDB's [full text search](https://www.mongodb.com/resources/basics/full-text-search)



## To DO
* Openshift deployment
* User authentication/authorization
* API unit tests
* API documentation
* Better mobile responsiveness
* Error Handling
* API rate limiting

---
