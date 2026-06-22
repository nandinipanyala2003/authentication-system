# 🔐 Authentication System

A complete Authentication System built using **Node.js**, **Express.js**, **JWT**, **bcryptjs**, **HTML**, **CSS**, and **JavaScript**. This project allows users to register, log in, access a protected dashboard, and log out securely using JSON file storage as the database.

---

## 🚀 Features

* 👤 User Registration
* 🔑 User Login
* 🔒 Password Hashing using bcryptjs
* 🎟️ JWT Authentication
* 🛡️ Protected Dashboard Route
* 🚪 Logout Functionality
* 💾 JSON File Database
* 📱 Responsive User Interface
* 📂 MVC Architecture
* ⚡ Fast and Lightweight

---

## 🛠️ Technologies Used

### Backend

* Node.js
* Express.js
* bcryptjs
* jsonwebtoken (JWT)
* dotenv
* cors

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Database

* JSON File Storage

---

## 📁 Project Structure

```text
Authentication-System/
│
├── public/
│   ├── css/
│   │   ├── register.css
│   │   ├── login.css
│   │   └── dashboard.css
│   │
│   ├── js/
│   │   ├── register.js
│   │   ├── login.js
│   │   └── dashboard.js
│   │
│   └── images/
│
├── views/
│   ├── register.html
│   ├── login.html
│   └── dashboard.html
│
├── data/
│   └── users.json
│
├── controllers/
│   └── authController.js
│
├── routes/
│   └── authRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── utils/
│   └── fileHandler.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
```

### 2️⃣ Navigate to the Project Folder

```bash
cd Authentication-System
```

### 3️⃣ Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
JWT_SECRET=nandini_secret_key
```

---

## ▶️ Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Open your browser and visit:

```text
http://localhost:5000
```

---

## 🔄 Authentication Flow

```text
User Registration
       │
       ▼
Store User in users.json
       │
       ▼
User Login
       │
       ▼
Generate JWT Token
       │
       ▼
Access Dashboard
       │
       ▼
Logout
```

---

## 🌐 API Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

### Protected Dashboard

```http
GET /api/auth/dashboard
```

---

## 📸 Application Screens

* Register Page
* Login Page
* Dashboard Page

---

## 🔒 Security Features

* Password Hashing using bcryptjs
* JWT Token Generation
* Protected Routes
* Authentication Middleware
* Secure User Validation

---

## 🎯 Learning Objectives

This project helps developers understand:

* Express.js Fundamentals
* REST API Development
* MVC Architecture
* Authentication & Authorization
* JWT Implementation
* Password Hashing
* Middleware Usage
* File System Operations
* Frontend & Backend Integration

---

## 🚀 Future Improvements

* MongoDB Integration
* MySQL Integration
* Email Verification
* Forgot Password Functionality
* Reset Password Feature
* User Profile Management
* Role-Based Authentication
* Refresh Tokens
* Admin Dashboard

---

## 👩‍💻 Author

**Nandini Panyala**

---

## 📜 License

This project is developed for learning and educational purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

---

# 🎉 All Rights Reserved © Nandini Panyala
