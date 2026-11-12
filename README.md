# Xexits Application

A full-stack web application with user registration and login, and separate **admin** and **employee** areas. The frontend is built with React and Vite, and it talks to a backend API through REST endpoints.

🔗 **Live Demo:** https://xexitsapplication.vercel.app/
💻 **GitHub:** https://github.com/NalinaDevdasMeshram/Xexitsapplication
⚙️ **Backend API:** https://xexitsapplication.onrender.com

> The backend runs on Render's free plan, so the first request after a period of inactivity can take 30-60 seconds while the server wakes up.

---

##screenshot
![Login Page] ()

## ✨ Features

- User registration with password confirmation
- User login with error handling for wrong credentials
- Role-based routing: admins are sent to the admin page, employees to the employee page
- Loading indicator while requests are in progress
- Client-side routing with React Router
- Deployed frontend (Vercel) and backend (Render)

---

## 🛠️ Tech Stack

| Area       | Technologies                                                 |
| ---------- | ------------------------------------------------------------ |
| Frontend   | React 19, React Router, Vite, JavaScript (ES6+), HTML5, CSS3 |
| Backend    | Node.js, Express.js                                          |
| Database   | MongoDB                                                      |
| API        | RESTful APIs (`/api/auth/register`, `/api/auth/login`)       |
| Tools      | Git, GitHub, Postman, VS Code, ESLint                        |
| Deployment | Vercel (frontend), Render (backend)                          |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/NalinaDevdasMeshram/Xexitsapplication.git

# Go into the project folder
cd Xexitsapplication

# Install dependencies
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build
npm run preview
```

### Lint the code

```bash
npm run lint
```

---

## 🔌 API Configuration

The frontend calls the backend API from `src/utils/apis.js`.
To use your own backend, update the base URL in that file (or in your environment variable, if you use one).

The backend must allow your frontend's address in its CORS settings,
for example `http://localhost:5173` for local development and `https://xexitsapplication.vercel.app` for production.

---

## 📂 Project Structure

```
Xexitsapplication/
├── public/
├── src/
│   ├── pages/          # WelcomePage (login/register), admin and employee pages
│   ├── utils/          # API helper functions (loginUser, registerUser)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🧠 What I Learned

- Building login and registration flows with controlled form components
- Handling async API calls with try/catch/finally and loading states
- Role-based navigation using React Router
- Debugging CORS and preflight (`OPTIONS`) requests between a Vercel frontend and a Render backend
- Deploying a full-stack app across Vercel and Render

---

## 🔮 Future Improvements

- Add JWT-based session handling and protected routes
- Show inline form validation messages instead of browser alerts
- Add unit tests for the login and register flows
