# NeuroAdaptive UX

NeuroAdaptive UX is a front-end experimental project that demonstrates **real-time adaptive user interfaces** based on live user interaction behavior.  
The system dynamically adjusts its UI feedback by observing how users interact with the application — entirely on the client side.

This project is designed to be minimal, privacy-conscious, and deployment-ready.

---

## 🔗 Live Demo

https://neuroadaptive.vercel.app/

---

## 📌 Project Objective

Conventional user interfaces are static and assume uniform user behavior.  
NeuroAdaptive UX explores an alternative approach: **interfaces that adapt dynamically to user interaction patterns**.

The objectives of this project are to:
- Observe real-time interaction signals
- Infer a high-level interaction state
- Adapt UI feedback accordingly
- Achieve all of this **without AI models, backends, or stored user data**

---

## 🧠 How It Works

The application monitors basic interaction signals such as:
- Typing activity
- Input correction frequency
- Mouse movement intensity

Using lightweight heuristic logic, the system classifies the interaction state into one of the following:
- **Idle**
- **Calm**
- **Rushed**
- **Stressed**

The interface reflects this state in real time.

> Note: This project does **not** use biometric data, neural signals, or machine learning.  
> It is a UX and Human–Computer Interaction (HCI) prototype, not a medical or cognitive system.

---

## 🏗️ Technology Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Framer Motion**
- **JavaScript only (No TypeScript)**

---

## 🚫 Deliberate Constraints

The following limitations are intentional to maintain clarity and focus:
- No backend services
- No database
- No authentication
- No external APIs
- No path aliases
- No session persistence

All logic executes **entirely in the browser**.

---

## 📂 Project Structure

├── app/
│ ├── layout.js
│ ├── page.js
│ └── globals.css
├── components/
│ └── AdaptiveIndicator.js
├── lib/
│ └── interactionTracker.js
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js

---

## 🔮 Future Enhancements

Possible extensions include:

- Machine learning–based behavior classification  
- Accessibility-driven UI adaptations  
- Persistent session analytics (privacy-aware)  
- Research-grade experimental instrumentation  

---

## 📄 License

MIT License  
This project is free to use, modify, and extend.

---

## 👤 Author

**Mohammed Saad Affan A.**  
B.Sc Computer Science  
Vellore Institute of Technology
