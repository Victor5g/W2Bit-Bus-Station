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

### Replies


| Code   | Description |
|---|---|
| `200` | Successfully executed requisition.|
| `400` | Validation errors or the fields reported do not exist in the system.|
| `401` | Invalid access data.|
| `404` | Searched record not found.|



## Endpoints

- **POST (Create user) 📄🧍‍♂️**
 
 ##### URL

```
http://localhost:3333/users

```
##### headers
```
 headers: {
         "Content-Type": "multipart/form-data"
         "Accept": "application/json",
        " type": "formData"
      },
```
##### body
```
{
     "name": "Morramidy",
     "image": Foto.png,
     "state": "United State",
     "city": "New York",
     "password": "9DF56HTY78",
     "id": "f900d543-4150-4441-94aa-e8285c167d57"
}
}
```

 - **POST (Authentication) 🔐**
 
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

Example response:

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



- **POST (Register Bus) 📄🚌**
 
 ##### URL

```
http://localhost:3333/bus

```
##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```
##### body
```
{
    "vehicle_plate":"4U7JS89",
    "year":"2016",
    "model":"Eecutivo",
    "seat_amount":"108"
}
```



- **POST (Create Passenger) 🧍‍♂️**
 
 ##### URL

```
http://localhost:3333/passenger

```
##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```
##### body
```
{
    "name":"carlos",
    "age":19,
    "cpf":83546178910
}
```



- **POST (Add passenger to Onibus) 🧍‍♂️🚌**
 
 ##### URL

```
http://localhost:3333/travel

```
##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```
##### body
```
{
    "id_bus":"33969260-1e86-43e0-a702-0148325ed34d",
    "id_passengers":"e8f4ae18-3fd3-44c3-8158-f795252a846a"
}
```



 - **GET (List all registered user buses) 📄📗**
 
 ##### URL

```
http://localhost:3333/bus

```
##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```


Example response:

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



 - **GET (List the data of a specific bus) 🔍🚌**
 
 ##### URL

```
http://localhost:3333/bus/{id}

```
|     Parameter       |         Description            |
| ------------------- | ------------------------------ |
|      {id}           |            Bus Id              |

##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```


Example response:

```
 {
  "id": "9b6df088-52e5-460f-ae36-b47f7f9a95d5",
  "id_user": "4c73034e-51ab-4e20-973b-5e50fc7b5491",
  "vehicle_plate": "8H930VB6",
  "year": 2020,
  "model": "MicroOnibus",
  "seat_amount": 500
}
```



- **GET (List all passengers)📄🧍‍♂️**
 
 ##### URL

```
http://localhost:3333/passenger

```
##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```
Example response:

```
[
  {
    "id": "6efb5945-3825-459b-b281-b19dba9e9b51",
    "name": "EDUARDA",
    "age": 16,
    "cpf": "42501857819"
  },
  {
    "id": "e8f4ae18-3fd3-44c3-8158-f795252a846a",
    "name": "carlos",
    "age": 19,
    "cpf": "83546178910"
  }
]
```

- **PUT (Change Bus data)🖋🚌**
 
 ##### URL

```
http://localhost:3333/bus/{id}

```
|     Parameter       |         Description           |
| ------------------- | ------------------------------|
|      {id}           |            Bus Id             |

##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```
##### body
```
{
	"vehicle_plate":"fb6tyhr",
	"year":2016,
	"model":"Leito ",
	"seat_amount":10
}
```



- **PUT (Change passenger data)🖋🧍‍♂️**
 
 ##### URL

```
http://localhost:3333/passenger/{id}

```
|     Parameter       |         Description            |
| ------------------- | ------------------------------ |
|      {id}           |          Passenger Id          |

##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```
##### body
```
{
    "name": "EDUARDA",
    "age": 16,
    "cpf": "42501857819"
  }
```



- **DELETE (Delete a bus) 🗑🚌**
 
 ##### URL

```
http://localhost:3333/bus/{id}

```
|     Parameter       |         Description            |
| ------------------- | ------------------------------ |
|      {id}           |            Bus Id              |

##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```

- **DELETE (Delete a Passenger) 🗑🧍‍♂️**
 
 ##### URL

```
http://localhost:3333/passenger/{id}

```
|     Parameter       |         Description            |
| ------------------- | ------------------------------ |
|      {id}           |         Passenger Id           |

##### headers
```
headers:{
authorization:'Bearer'+ "User token"
}
```



## Challenges/Problems

During the execution of the project I found some challenges and problems, but the main ones were.

- Execution of migrations.
- Upload images
- Deployment error because of Heroku's execution port.
- .lock package conflicts.
- Entities.
- Bug in Controllers.

