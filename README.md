<h1 align='center'> 🚎...Bus-Station 🧳</h1>
 
### ***API RESTful*** created to help bus fleet owners manage their bus.


## Architecture

Developed in **NodeJS** with ***TypeScript*** allied to one of its ORM(***TypeORM***) using migrations and its framework **Express** with authentication JWT(JSON Web Token)
along with the database ***PostgreSQL***.


## Operation

Its operation is made based on customer requests through the http (`GET`,` POST`, `PUT`,` DELETE`) methods passing parameters in (URL), in the body and Header of the request, using in almost all routes, the token generated at the time of authentication (Login), with the exception of the user registration route. After the customer makes the request using some of the methods / routes and passing the parameters in the body, header or URL, the data is captured, and then the data (s) / status code of the request is returned.


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



# Api

## Api Endpoints











 - **POST (Autenticação)**
 
 ##### URL

```
http://localhost:3333/auth

```
##### body
```
  {
 	  "name":"Eduarda Medeiros",
	   "password":"567890"
  }

```

Exemplo de resposta:

```
  {
  "user": {
    "id": "bf1f87cf-f802-4b8b-b309-9d659bbf3479",                                                          
    "name": "Eduarda Medeiros",                                                                            
    "image": "C:\\Users\\exemplo\\W2Bit-Bus-Station\\src\\upload\\11797233bd90a884354c822d9c43ead0.png",   
    "state": "São Paulo",                                                                                  
    "city": "Santos",                                                         
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmMWY4N2NmLWY4MDItNGI4Yi1iMzA5LTlkNjU5YmJmMzQ3OSIsImlhdCI6MTYwODQwOTcwMiwiZXhwIjoxNjA4NDk2MTAyfQ.nvtaMBfJfRibKRaIsSEbqlZy_HLeilxsa4nSzOFMo_g"
}
```









 - **GET (Listar todos os Onibus do usuario cadastrados )**
 
 ##### URL

```
http://localhost:3333/bus

```
##### headers
```
headers:{
authorization:'Bearer'+ "token do Usuario"
}
```


Exemplo de resposta:

```
  {
    "id": "2dc1fb7e-baac-4259-a1b9-d9bd1c8f4f2c",        
    "id_user": "280c2938-d2f6-4b57-bc8d-6ef4cd227f00",    
    "vehicle_plate": "G67P256M",                           
    "year": 2016,                                         
    "model": "EXECUTIVO ",                               
    "seat_amount": 150                                     
  }
```

