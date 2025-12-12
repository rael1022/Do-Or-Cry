# 🧠 Do or Cry – Procrastination Helper with AI Chat

Do or Cry is a web-based procrastination management platform designed to help users overcome procrastination and build better habits. The website combines learning content, quizzes, personality analysis, productivity tools, and an AI chat companion to support users in staying motivated and productive.

By focusing on small, consistent actions, Do or Cry encourages users to understand their habits, track progress, and improve self-discipline in a fun and interactive way.

---

## ✨ Features

### 🔐 Login / Welcome Page
- Displays a welcome message asking for the user’s name  
  (e.g., “Welcome to Do or Cry, what’s your name?”)
- Saves username using `localStorage`
- Button to proceed to the Home Page

---

### 🏠 Home Page
- Personalized greeting (e.g., “Welcome, [username]!”)
- Website name and fun slogan  
- Navigation buttons to all main features

---

### 📘 Learning Page
- Educational content on:
  - What is procrastination
  - How to reduce procrastination
  - Time management methods
  - Pomodoro technique
- Learning progress bar
- Progress saved in `localStorage`
- “I have completed learning” button

---

### 📝 Test Page
- Quiz questions based on the learning content
- Immediate feedback after each question (Correct / Wrong)
- Final score and answer statistics
- Test results saved in `localStorage`

---

### 🧠 Personality Test Page
- 10–15 multiple-choice questions
- Automatic score calculation
- Procrastination personality analysis
- Results saved in `localStorage`

---

### 🛠 Tools Page
Includes multiple productivity tools:

#### ⏱ Pomodoro Timer
- Start, Pause, and End controls
- Tracks completed Pomodoro sessions
- Data saved in `localStorage`

#### 🎡 Task Wheel
- Input 3–8 tasks
- Spin the wheel to randomly select a task
- Saves task list and last drawn task

#### ✅ To-Do List
- Add tasks
- Mark tasks as completed
- Task data saved in `localStorage`

---

### 📊 Dashboard Page
Displays user progress and statistics, including:
- Learning progress
- Test scores
- Procrastination personality type
- Tool statistics:
  - Number of Pomodoros completed
  - Number of To-Do tasks completed today

---

### 💬 AI Buddy Chat
- An AI chat companion focused purely on conversation
- Users can freely chat with the AI for motivation, encouragement, or casual interaction
- Two available chat personalities:
  - **Encouraging** – supportive, positive, and motivating
  - **Playful** – light-hearted, fun, and humorous
- Designed to help users stay motivated and reduce procrastination through friendly chat 

---

## 🛠 Technologies Used
- HTML5  
- Tailwind CSS  
- JavaScript  
- LocalStorage (for data persistence)  

---

## ⚙️ Setup

### Prerequisites
- Node.js
- A valid OpenAI API key 

---

### Backend Setup
1. Install Node.js  
2. Open the file `backend/server.js`  
3. Add your OpenAI API key on line 9:
   ```js
   const API_KEY = "YOUR_OPENAI_KEY_HERE";

---

## ▶️ How to Run
1. Start Backend Server
    1. cd backend
    2. npm install
    3. node server.js

2. Start the Frontend
    1. Open frontend folder and right click login.html -> Open with Live Server

---

## 🎯 Project Purpose
This project was developed to help users understand and overcome procrastination through interactive learning, self-reflection, and productivity tools. The AI chat feature provides additional motivation and support, making the habit-building process more engaging and enjoyable.

---

## 📌 Note
This is a front-end focused project. All user data is stored locally using the browser’s `localStorage`.

---

© 2025 Do or Cry
