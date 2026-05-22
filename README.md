# AskPharma

A pharmacy assistant chatbot that assesses symptoms, educates on antibiotic resistance, and advises when to see a doctor. Never recommends specific prescription drugs.

## Stack
- **Frontend**: React + Tailwind CSS (Vite)
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)
- **AI**: Claude API (Anthropic)
- **Auth**: JWT (session-only — clears on logout)

---

## Project structure

```
askpharma/
├── server/
│   ├── index.js
│   ├── .env.example
│   ├── models/User.js
│   ├── routes/auth.js
│   ├── routes/chat.js
│   └── middleware/auth.js
└── client/
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── context/AuthContext.jsx
        ├── hooks/useApi.js
        ├── components/
        │   ├── DisclaimerModal.jsx
        │   └── ProtectedRoute.jsx
        └── pages/
            ├── AuthPage.jsx
            └── ChatPage.jsx
```

---

## Setup

### Prerequisites
- Node.js 18+
- MongoDB running locally (or a MongoDB Atlas URI)
- Anthropic API key

### 1. Server

```bash
cd server
cp .env.example .env
# Fill in MONGO_URI, JWT_SECRET, ANTHROPIC_API_KEY in .env
npm install
npm run dev
```

### 2. Client

```bash
cd client
npm install
npm run dev
```

Client runs at `http://localhost:5173`, server at `http://localhost:5000`.

---

## Features
- Register / Login with JWT auth
- Medical disclaimer modal on first session
- Symptom assessment via Claude API
- Antibiotic resistance education
- Doctor referral advice
- Session-only chat history (clears on logout)
- Dark mode only, teal accent
- Responsive layout (mobile + desktop)

## Notes
- Never recommends specific prescription drugs
- Always advises seeing a doctor for serious symptoms
- All chat history is in-memory per session; nothing is persisted to MongoDB beyond user accounts
