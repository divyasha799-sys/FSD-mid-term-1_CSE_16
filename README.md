# FSD Mid-Term 1 CSE 16

A simple Node.js + Express server project configured to run on port 3000.

## Prerequisites

- Node.js
- npm

## Installation

```bash
npm install
```

## Run the app

```bash
npm start
```

The server will start at:

```text
http://localhost:3000
```

If port 3000 is already in use, choose another port before starting:

```powershell
$env:PORT = 3001
npm start
```

## Default route

`GET /` responds with:

```text
Hello from Express server!
```

## Create a student

`POST /api/students` accepts student information as a JSON object. The server
assigns an ID and returns the created student with a `201 Created` response.
Student records are stored in memory and are cleared when the server restarts.

Example request:

```http
POST /api/students
Content-Type: application/json

{
  "name": "Alex Smith",
  "age": 20,
  "course": "Computer Science"
}
```

Example response:

```json
{
  "name": "Alex Smith",
  "age": 20,
  "course": "Computer Science",
  "id": 1
}
```
