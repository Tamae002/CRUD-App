# CRUD - App

An API project based on learning with Node.js and Express for managing user data.

## requirement
- _Postman_ or other HTTP client.

## Installation
Copy or clone this GitHub project using
```bash
git clone https://github.com/Tamae002/CRUD-App.git
```

## Usage
To start the application, use the command

```bash
npm run dev
```

This command will automatically start the server at _http://localhost:5000_.

Open your Postman and now you can send a request to _http://localhost:5000_. There are some requests you can send on this project:

### Create User
To create user data, you can use the POST method to this URI:
```http
POST http://localhost:5000/api/v1/users/
```

In the body section, fill a JSON with name, email, and age properties. For example:
```javascript
{
    "name": "User0",
    "email": "User0@gmail.com",
    "age": 17
}
```

### Show Users Data
To get all the users' data you've created, use the GET method on this URI:
```http
GET http://localhost:5000/api/v1/users/
```


### Update User
To update user data, you need an ID in the URI. Use the GET method, and there will be an ID for each user. Copy the user ID you want to update and use the PATCH method on this URI:
```http
PATCH http://localhost:5000/api/v1/users/${id}
```

In the body section, fill the name, email or age properties you want to change.

### Delete User
Lastly, you can delete data similar to update user data, and you need the user id, use the DELETE method to this URI:

```http
DELETE http://localhost:5000/api/v1/users/${id}
```

## Author

- [@Tamae002](https://github.com/Tamae002)

