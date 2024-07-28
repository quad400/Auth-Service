# Authentication Microservice

## Description

This is a simple authentication microservice using Node.js, Express, and MongoDB. It provides user registration, login, and user management functionality.

## Prerequisites

- Docker
- Docker Compose

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/quad400/Auth-Service.git
   cd Auth-Service
   ```

2. Create an `.env` and update it accordingly from `.env.sample` file in the root of the project and add the following:

3. Build and run the Docker containers:

   ```sh
   docker compose up --build -d
   ```
   
## Usage

The authentication service will be available at `http://localhost:5000`.

## API Endpoints

### Register

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "testusername",
    "fullName": "test fullname",
    "password": "testpassword"
  }
  ```
- **Success Response:**

  - **Code:** `201`

  - **Response:**

  ```json
  {
    "success": true,
    "message": "Validate you account with the link sent to this email",
    "data": {
      "activationCode": "heeu-huw-wfu..."
    }
  }
  ```

- **Error Response:**
  - **Code:** `400 BAD REQUEST`
  - **Content:** `{ "msg": "User already exists" }`

### Verify User

- **URL:** `/api/auth/activate/:activationCode`
- **Method:** `POST`
- **Description:** Verify new user email.

- **Success Response:**

  - **Code:** `200`

  - **Response:**

  ```json
  {
    "success": true,
    "message": "Account Successfully Verified",
    "data": {
      "_id": "66a682e6171f26ee9a102554",
      "email": "Velda.Klein62@hotmail.com",
      "fullName": "Cameron Heidenreich",
      "avatar": null,
      "emailVerified": true,
      "createdAt": "2024-07-28T17:41:58.469Z",
      "updatedAt": "2024-07-28T17:42:29.562Z",
      "__v": 0
    }
  }
  ```

- **Error Response:**
  - **Code:** `401 BAD REQUEST`
  - **Content:**
  ```json
  {
    "success": false,
    "message": "Verification Code has Expires"
  }
  ```

### Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Description:** Login an existing user.
- **Request Body:**
  ```json
  {
    "email": "testuser@gmail.com",
    "password": "testpassword"
  }
  ```
- **Success Response:**

  - **Code:** `200`

  - **Response:**

  ```json
  {
    "success": true,
    "message": "User Successfully logged in",
    "data": {
      "tokens": {
        "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.snJjVnWXwhVjqlOB7pC8EDKo_w8jiVZ6k6SW73WbKTI...",
        "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE2ODUyM2RjNDRmYTUxNDgwODQ5ODMiLC..."
      }
    }
  }
  ```

- **Error Response:**
  - **Code:** `400 BAD REQUEST`
  - **Content:**
    ```json
    {
      "success": false,
      "message": "User not found"
    }
    ```

### Get Current User

- **URL:** `/api/auth/me`
- **Method:** `GET`
- **Description:** Get details of the currently authenticated user.
- **Headers:**
  - `Authorization: Bearer jwt_token`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Successfully get user",
      "data": {
        "_id": "66a68523dc44fa5148084983",
        "email": "Andreane.Green24@hotmail.com",
        "fullName": "Horace Abbott",
        "avatar": null,
        "emailVerified": true,
        "role": "user",
        "createdAt": "2024-07-28T17:51:31.214Z",
        "updatedAt": "2024-07-28T17:51:47.659Z",
        "__v": 0
      }
    }
    ```
- **Error Response:**
  - **Code:** `401 UNAUTHORIZED`
  - **Content:**
  ```json
  {
    "success": false,
    "message": "Valid token is required"
  }
  ```

### Update User

- **URL:** `/api/auth/me`
- **Method:** `PATCH`
- **Description:** Update details of the currently authenticated user.
- **Headers:**
  - `Authorization: Bearer jwt_token`
- **Request Body:**
  ```json
  {
    "avatar": "http://res.cloudinary.com/dupox1iqn/image/upload/v1722189908/Stack/image-1722189907390.png.png"
  }
  ```
- **Success Response:**

  - **Code:** `200`
  - **Content:**

  ```json
  {
    "success": true,
    "message": "Account Successfully Updated",
    "data": {
      "role": "user",
      "_id": "66a68523dc44fa5148084983",
      "email": "Andreane.Green24@hotmail.com",
      "fullName": "Horace Abbott",
      "avatar": "http://res.cloudinary.com/dupox1iqn/image/upload/v1722189908/Stack/image-1722189907390.png.png",
      "emailVerified": true,
      "role": "user",
      "createdAt": "2024-07-28T17:51:31.214Z",
      "updatedAt": "2024-07-28T18:16:49.531Z",
      "__v": 0
    }
  }
  ```

  `{ "msg": "User updated successfully" }`

- **Error Response:**
  - **Code:** `401 UNAUTHORIZED`
- **Content:**

```json
{
  "success": false,
  "message": "Valid token is required"
}
```

- **Code:** `403 PERMISSION DENIED`
- **Content:**

```json
{
  "success": false,
  "message": "Permission denied"
}
```

### Get User By ID

- **URL:** `/api/auth/:id`
- **Method:** `GET`
- **Description:** Get details of a user by their ID.
- **Headers:**
  - `Authorization: Bearer jwt_token`
- **Success Response:**

  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Account Successfully",
      "data": {
        "role": "user",
        "_id": "66a68523dc44fa5148084983",
        "email": "Andreane.Green24@hotmail.com",
        "fullName": "Horace Abbott",
        "avatar": "http://res.cloudinary.com/dupox1iqn/image/upload/v1722189908/Stack/image-1722189907390.png.png",
        "emailVerified": true,
        "role": "user",
        "createdAt": "2024-07-28T17:51:31.214Z",
        "updatedAt": "2024-07-28T18:16:49.531Z",
        "__v": 0
      }
    }
    ```

- **Error Response:**
  - **Code:** `404 NOT FOUND`
- **Content:**

```json
{
  "success": false,
  "message": "User not found"
}
```

### Forgot Password

- **URL:** `/api/auth/forgot-password`
- **Method:** `POST`
- **Description:** Forget your user password.

  **Request Body:**

  ```json
  {
    "email": "testuser@gmail.com"
  }
  ```

- **Success Response:**

  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Forgot password email sent successfully",
      "data": {
        "tokens": {
          "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.snJjVnWXwhVjqlOB7pC8EDKo_w8jiVZ6k6SW73WbKTI...",
          "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE2ODUyM2RjNDRmYTUxNDgwODQ5ODMiLC..."
        }
      }
    }
    ```

- **Error Response:**
  - **Code:** `404 NOT FOUND`
- **Content:**

```json
{
  "success": false,
  "message": "User not found"
}
```

### Reset Password

- **URL:** `/api/auth/reset-password`
- **Method:** `POST`
- **Description:** Reset user password.
- **Headers:**

  - `Authorization: Bearer jwt_token`
    **Request Body:**

  ```json
  {
    "password": "Password09.",
    "confirmPassword": "Password09."
  }
  ```

- **Success Response:**

  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Successfully reset user password"
    }
    ```

- **Error Response:**
  - **Code:** `400 BAD REQUEST`
- **Content:**

```json
{
  "success": false,
  "message": "Password mismatch"
}
```

## Example Requests

### Register

```sh
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"email": "testuser@gmail.com","fullName": test user", "password": "testpassword"}'
```

### Login

```sh
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email": "testuser@gmail.com", "password": "testpassword"}'
```
