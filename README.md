# React + Express Dockerized

This project is just that: A React frontend consuming an Express API, and both are dockerized

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.
* [Docker](https://www.docker.com/) - Install it if you want to deploy this project with Docker.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/react_express_dockerized.git
```

This project contains 2 different parts:
* Frontend
* Backend

You need cert files to run this project in production. If you do it with IsardVDI then follow this instructions: https://isard.gitlab.io/isardvdi-docs/user/bastion.es/

I have tested it successfully with Ubuntu 22.04 LTS, creating 2 desktops: one for the backend and another for the frontend.

### In your Backend:

Once you have downloaded your project copy the .env.example to .env and config all necesary:

```
cd react_express_dockerized/backend
cp .env.example .env
```

Remember to put the cert files routes in .env. In my case I just have let both files on the backend directory.

After that run your docker-compose.yml file:

```
cd react_express_dockerized/backend
docker compose up --build -d
```

uncomment line 23 and comment line 20 in file backend/dockerfile so that next time your database doesn't get resetted.


### In your Frontend:

Once you have downloaded your project copy the .env.example to .env and config all necesary:

```
cd react_express_dockerized/frontend
cp .env.example .env
```

Put your cert files in the directory frontend/certs

Put your frontend domain in nginx.conf

Review that the cert files names are correctly added in vite.config.js

Review that your dockerfile is correctly configured specially the cert files.

After that run your docker-compose.yml file:

```
cd react_express_dockerized/backend
docker compose up --build -d
```

If you follow the former instructions the 2 different parts of this project will be running on the following urls:
* Backend (https://yourbackenddomain)
* Frontend (https://yourfrontenddomain)

Enjoy!!!

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [React](https://reactjs.org/) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Acknowledgements

* https://isard.gitlab.io/isardvdi-docs/user/bastion.es/. How to use a bastion with IsardVDI.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines. Guidelines to write properly git commit messages.