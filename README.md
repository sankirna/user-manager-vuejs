# admin-user-app-vuejs

# User Management App

## Introduction

> A simple Vuejs SPA that fetchs an list of users using an **dump API** with axios & allows to search the users by name with a custom search box, to see the user profile details info and to delete users.

## Install these dependencies before continuing

-  [Nodejs version](https://nodejs.org/en/) - version 10.15.3
-  [Vue CLI](https://cli.vuejs.org/) -version 3.5.5
-  [json-server version](https://github.com/typicode/json-server) - version 0.14.2

## Installation

**- Go to the project's root folder and run the command:**

```
npm install
```

This will install the ```node-modules``` folder & the ```package.json``` dependencies.

**- After that, run the command:**

```
npm run serve
```
This should launch the app in a local server. Check the local sever in the console, grab the url, copy/paste in your browser like so:
**(your localhost port could be different, please check the console)**

``` http://localhost:8081/```

Now you should be able to see the app, but there is no users yet because we need to open another console and run the command: 

```json-server --watch db.json```

Refresh the browser after is done. This will fetch the user list from db.json to the browser.

Now you can play with it! :)


