<h1 align='center'> 🚎...Bus-Station 🧳</h1>
 
### ***API RESTful*** created to help bus fleet owners manage their bus.


## Architecture

Developed in **NodeJS** with ***TypeScript*** allied to one of its ORM(***TypeORM***) using migrations and its framework **Express** with authentication JWT(JSON Web Token)
along with the database ***PostgreSQL***.


## Operation

Its operation is made from the client's requests using the http methods (`GET`,` POST`, `PUT`,` DELETE`) passing parameters in (URL), in the body (body of the request) using in almost all routes, the token generated at the time of authentication (Login), with the exception of the user registration route. After the Client makes the request using some of the methods / routes and passing the parameters in the body or URL, the data is captured and then the data / status-code of the request is returned.


## Prerequisites
Before you begin, you will need to have the following tools installed on your machine

- [Node.JS](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Steps for Project Execution

### 1º-Step(Install).
    
    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install
        ou
    $yarn install
    
    


### 2º-Step(Database creation)

Create the database in PostgreSQL, and after that change the settings of the `ormconfig.json` file according to your settings. After that, run the command below to create all the database tables.

```

$ npx typeorm migration:run

```
or if you have yarn installed
```
$ yarn typeorm migration:run
```



### 3º-Step(started)

```
$ npm dev
```

or if you have yarn installed

```
$ yarn dev
```
Okay, the API is already running and ready to receive requests.
