# 🍅 Pomodoro Timer

A clean and simple Pomodoro timer to help you focus and stay productive. Work for 25 minutes, break for 5, repeat.

## ✨ Features

- **Work / Break Modes** — 25-minute focus sessions with 5-minute breaks
- **Start / Pause / Reset** — Full control over your timer
- **Session Statistics** — Track completed sessions and total focused minutes
- **Audio Notification** — A beep plays when a session ends
- **Auto-switch** — Automatically switches between work and break modes
- **Local Storage** — Stats are saved in your browser
- **Dynamic Theme** — Background color changes between work (red) and break (green) modes

## 🛠️ Tech Stack

- **HTML5** — Page structure
- **CSS3** — Responsive styling with gradient backgrounds
- **JavaScript (Vanilla)** — Timer logic and Web Audio API for notifications

## 🚀 Getting Started

### Option 1: Open directly
1. Download or clone this repository
2. Double-click `index.html` to open in your browser

### Option 2: Live Server (recommended)
```bash
# VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Or use any local HTTP server:
```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
pomodoro-timer/
├── index.html      # Main HTML structure
├── style.css       # Styling and theme colors
├── app.js          # Timer logic and statistics
└── README.md       # This file
```

## 📖 How to Use

1. Click **Start** to begin a 25-minute work session
2. Focus on your task until the timer reaches zero
3. A beep will notify you — then enjoy a 5-minute break
4. After the break, the timer automatically switches back to work mode
5. Track your **Completed** sessions and **Minutes Focused** at the bottom

### Controls
- **Start / Pause / Resume** — Control the current session
- **Reset** — Reset the timer to the default duration
- **Work / Break tabs** — Manually switch between modes (only when paused)

## 📸 Screenshot

```
┌───────────────────────────────┐
│       🍅 Pomodoro Timer       │
│      Focus, work, repeat      │
├───────────────────────────────┤
│       [Work]  [Break]         │
├───────────────────────────────┤
│                               │
│           25:00               │
│        (large circle)         │
│                               │
├───────────────────────────────┤
│      [Start]   [Reset]        │
├───────────────────────────────┤
│   0              0            │
│  Completed   Minutes Focused  │
└───────────────────────────────┘
```

## 🔧 Customization

You can easily customize the timer durations and appearance:

### Change Timer Durations
In `app.js`, edit the constants at the top:
```javascript
const WORK_TIME = 25 * 60;   // 25 minutes
const BREAK_TIME = 5 * 60;   // 5 minutes
```

### Change Theme Colors
In `style.css`, find the `body.work-mode` and `body.break-mode` gradients:
```css
body.work-mode {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
}
body.break-mode {
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
}
```

## 📄 License

MIT License — feel free to use and modify.

## 👤 Author

Created as a simple web project for productivity.
