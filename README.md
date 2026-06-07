# News Website Fullstack

A full-stack news website application built as a 3rd-year minor project. This project combines a modern frontend with a robust backend to deliver a complete news platform.

## 📋 Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure Details](#project-structure-details)
- [API Endpoints](#api-endpoints)
- [Team](#team)

## 🎯 Overview

This is a full-stack news website application developed as a collaborative minor project. The application provides a platform for users to access, manage, and interact with news content through a user-friendly interface.

## 🛠️ Technology Stack

### Frontend
- **HTML** - Markup structure
- **CSS** - Styling and layout
- **Vanilla JavaScript** - Client-side interactivity

### Backend
- **Node.js** - Server runtime
- **MongoDB** - NoSQL database
- **Express.js** - Web framework (assumed)

## 📁 Project Structure

```
news_website_fullstack/
├── login_Server/                 # Main server folder
│   ├── server.js                # Entry point
│   ├── api/
│   │   └── user_api.js          # User-related API endpoints
│   ├── models/
│   │   └── user.js              # User schema and model
│   └── config/
│       └── db.js                # Database configuration
├── .env                         # Environment variables (not included)
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (v4.0 or higher) or MongoDB Atlas account
- A modern web browser

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anubhqv/news_website_fullstack.git
   cd news_website_fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment configuration**
   ```bash
   touch .env
   ```

4. **Configure your environment variables** (see Configuration section below)

## ⚙️ Configuration

Create a `.env` file in the root directory of the project with the following variables:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/news_db?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development

# Add any other configuration variables as needed
```

### MongoDB Connection String

- **For MongoDB Atlas (Cloud)**: Get your connection string from your MongoDB Atlas dashboard
- **For Local MongoDB**: `mongodb://localhost:27017/news_db`

**Note:** Never commit your `.env` file to version control. The `.env` file should be kept private and only shared securely with team members.

## ▶️ Running the Application

1. **Start the server**
   ```bash
   npm start
   ```
   or for development with auto-reload:
   ```bash
   npm run dev
   ```

2. **Open the application**
   - Navigate to `http://localhost:5000` (or your configured PORT) in your web browser

## 📂 Project Structure Details

### `/login_Server`
The main server directory containing all backend logic:

- **`server.js`** - Main entry point that initializes the Express server
- **`/api`** - Contains all API endpoint handlers
  - `user_api.js` - Handles user authentication and user-related routes
- **`/models`** - Contains MongoDB schema definitions
  - `user.js` - User schema and model definition
- **`/config`** - Contains configuration files
  - `db.js` - MongoDB connection configuration

### Frontend Files
HTML, CSS, and JavaScript files for the frontend UI are organized in the root or separate directories (structure to be specified).

## 🔌 API Endpoints

### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user account

*(Add additional endpoints specific to your application)*

## 🤝 Team

This project is developed as a collaborative effort for a 3rd-year minor project with contributions from multiple team members.

## 📝 Notes

- The project uses vanilla JavaScript for frontend interactivity without frameworks
- MongoDB is the primary database solution
- All configuration must be set up before running the application
- Ensure all dependencies are properly installed using `npm install`

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify your MongoDB connection string in `.env`
- Ensure MongoDB service is running (if using local MongoDB)
- Check firewall and network settings for MongoDB Atlas

### Port Already in Use
- Change the PORT variable in `.env`
- Or kill the process using the current port

## 📄 License

*(Add your project license here)*

## 📞 Support

For questions or issues, please reach out to the project team or create an issue in the repository.
