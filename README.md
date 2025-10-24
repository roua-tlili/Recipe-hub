# Recipe-hub
A full-stack recipe management web app built with React, Express.js, and MongoDB Atlas — featuring user authentication and CRUD operations for personal recipes.

## 🚀 Features

- 🔐 **User Authentication**
  - Secure signup and login using JWT
  - Error handling for invalid credentials or missing fields

- 🍳 **Recipe CRUD Operations**
  - Create, read, and delete recipes
  - Each user sees only their own recipes
  - Image upload support (optional)

- 🎨 **Modern UI**
  - Responsive React design with Bootstrap and Bootstrap Icons
  - Blurred background login/signup forms

- ☁️ **Database Integration**
  - MongoDB Atlas for cloud-hosted database
  - Mongoose schema and model structure

---

## 🧠 Tech Stack

**Frontend:**
- React.js
- Axios
- Bootstrap 5 + Bootstrap Icons

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)

---

## ⚙️ Installation & Setup

1. Backend Setup
cd backend
Install dependencies:
npm install

2.Create a .env file in backend folder:
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
Start the backend server:
npm run dev

3. Frontend Setup
cd ../frontend/recipeapp
Install dependencies:
npm install
Start the frontend:
npm run dev

4. Usage

Open your browser at http://localhost:5173

You can register, login, add recipes, view all recipes, and manage your own recipes.
