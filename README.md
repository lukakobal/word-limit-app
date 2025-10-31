# ✍️ Live Word Limit App

A small React app that tracks how many characters a user has typed — with **live color feedback**:
🟢 Green when there's plenty of space  
🟠 Orange when near the limit  
🔴 Red when over the limit

---

## 🚀 Features
- Live character counting  
- Color-coded feedback  
- Simple, clean design  
- React `useState` for real-time updates

---

## 🧠 How It Works
1. The user types into the `<textarea>`.
2. The app calculates `remaining = maxChars - text.length`.
3. The color changes depending on how close to the limit the user is.

---

## 🛠️ Tech
Built with **React**, **CSS**, and **Hooks (useState)**.

Live Demo:
https://codesandbox.io/p/sandbox/live-word-limit-app-c9czxd
