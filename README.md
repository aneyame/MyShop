# MyShop

# Project Setup

To launch the project, navigate to each directory and refer to the associated README.md file.

## Authentication

To perform key actions within the application, it is essential to have up-to-date authentication. This requires periodic updating (every 30 minutes) of the token using Postman:

### Token Update Endpoint

- **Method:** POST
- **Request URL:** http://localhost/authentication_token
- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "apassword"
  }
