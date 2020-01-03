# Node.js, Express, MongoDB Backend Boilerplate

This repo will get a basic CRUD operation backend utilizing Node.js, Express, and MongoDB. You will need to install and setup MongoDB locally or create your own Atlas cluster and connect through a `.env` file.

# To Replicate
1. Clone this repository.
2. run `npm install` to install packages and dependencies.
3. Determine your preferred collection name and modify `/items` folder and subsequent references to item/items. 
4. Run a MongoDB server instance and set the variable, `MONGO_URL` in your .env file to the localhost URL or your Atlas cloud cluster.
5. If local, run `npm run server` to start the local development server.
You should see `=== Server is listening on port 6000 ===` in your console.
5. Make a GET request to http://localhost:6000/api/items and you should see an empty array until you insert new data.

# API Documentation

## GET  /api/items

Returns an array of item objects:
```json
[
  {
    "_id": 1,
    "name": "A Node.js backend",
    "content": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "created_at": null,
    "updated_at": null
  },
  {
    "_id": 2,
    "name": "Express.js endpoints",
    "content": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    "created_at": null,
    "updated_at": null
  }
]
```

## GET  /api/items/:id

Receives an existing ID as a request parameter.

Returns a single item object:
```json
{
  "_id": 1,
  "name": "A Node.js backend",
  "content": "Node.js® is a JavaScript runtime built on Chrome's V8 		JavaScript engine.",
  "created_at": null,
  "updated_at": null
}
```

## POST  /api/items

Receives a request body:
```json
{
  "name": "sample name",
  "content": "sample description",
}
```

Returns the created item object:
```json
{
  "_id": 1,
  "name": "A Node.js backend",
  "content": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  "created_at": null,
  "updated_at": null
}
```

## PUT  /api/items/:id

Receives an existing request parameter ID and a request body:
```json
{
  "name": "sample name UPDATE",
  "content": "sample description UPDATE"
}
```

Returns the updated item object:
```json
{
  "_id": 1,
  "name": "sample name UPDATE",
  "content": "sample description UPDATE",
  "created_at": null,
  "updated_at": null
}
```

## DELETE  /api/items/:id

Receives an existing request parameter

Returns a success message:
```json
{
  "message": "Item deleted successfully!"
}
```