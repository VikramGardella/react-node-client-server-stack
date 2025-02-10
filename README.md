# Authentication System Template (Node.js + Express.js + React.js) 

## Overview
This project is a full-stack authentication system built with:
- **Front-End:** React.js
- **Back-End:** Node.js + Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT) & Bcrypt for password hashing

Users can register, log in, and access protected routes. JWT tokens are used for authentication, and MongoDB is used to store user credentials securely.

---

## Features
- User registration  
- Secure login with hashed passwords  
- Token-based authentication using JWT  
- Protected routes for authenticated users  
- Front-end validation for user input  
- MongoDB as a NoSQL database  

---

## Project Structure
```
/project-root
│── /client   # React front-end
│── /server   # Express.js back-end
│── /models   # MongoDB schemas
│── /routes   # API routes
│── .env      # Environment variables (not in Git)
│── README.md # Project documentation
```

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/VikramGardella/react-node-client-server-stack.git
cd react-node-client-server-stack
```

### 2. Set Up the Server

#### Install dependencies:
```bash
cd server
npm install
```

#### Create a `.env` file in the `server/` directory:
```ini
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/authDB
JWT_SECRET=your_secret_key
```

#### Start the back-end:
```bash
npm start
```

---

### 3. Set Up the Client

#### Install dependencies:
```bash
cd client
npm install
```

#### Start the Front-End:
```bash
npm start
```

---

## API Endpoints

### Authentication Routes:
| Method | Endpoint       | Description        |
|--------|--------------|-------------------|
| POST   | `/register`  | Register a new user |
| POST   | `/login`     | Authenticate user & return token |
| GET    | `/dashboard` | Access protected route |

---

## Technologies Used
- **Front-End:** React.js, Axios
- **Back-End:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Security:** Bcrypt, JWT for authentication
- **Styling:** CSS / Tailwind (if applicable)

---

## Future Improvements
- Password reset functionality  
- OAuth login with Google/Facebook  
- Two-factor authentication  

---

## Contributing
Pull requests are welcome! Open an issue if you find a bug or want to suggest improvements.

---

## License
This project is licensed under the **MIT License**.

---

### **Author**
Developed by **Jaboi, Vik**
