
# 🧠 ProdMode – AI-Powered Productivity Dashboard

**ProdMode** is a smart productivity dashboard built using **React**, **Tailwind CSS**, and the **OpenAI API**. It helps users stay organized, motivated, and productive — all from one clean interface.

---

## 🚀 Core Features

- ✅ **Task Manager**  
  Add and delete daily tasks easily.

- 💡 **AI Suggestions**  
  Get helpful productivity tips powered by OpenAI's GPT API.

- 📜 **Motivational Quotes**  
  Displays short, inspiring quotes to keep you going.

---

## ⚙️ Tech Stack

- ⚛️ React
- 🎨 Tailwind CSS
- 🤖 OpenAI API (via `axios`)
- 🧩 React Icons
- ⚡ Vite

---

## 📂 Project Structure

```
ProdMode/
├── public/
├── src/
│   ├── components/
│   │   ├── Task.jsx
│   │   ├── AISuggestions.jsx
│   │   └── Quote.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🧠 AI Integration

- Uses OpenAI’s `gpt-3.5-turbo` model to generate:
  - 2-line motivational quotes
  - Productivity tips when users click a button

- `.env` file (not committed to GitHub):

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

---

## 🔐 Future Improvements

- **Authentication System**  
  - Sign in / sign up support using Firebase or Auth0  


- **Pomodoro Timer**
- **User Progress Analytics**
- **Theme Customization (Dark/Light modes)**

---

## 🧪 Getting Started

```bash
git clone https://github.com/your-username/ProdMode.git
cd ProdMode
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🙋‍♀️ Made by

**Khushi Bansal**  
📌 [GitHub](https://github.com/khushi1047)  
📌 [LinkedIn](https://linkedin.com/in/khushi-bansal-a8895b32a)

---
