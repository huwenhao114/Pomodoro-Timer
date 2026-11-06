const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

let mode = 'work';
let timeLeft = WORK_TIME;
let timer = null;
let isRunning = false;

let stats = JSON.parse(localStorage.getItem('pomodoro-stats')) || {
    completed: 0,
    totalMinutes: 0
};

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const completedCount = document.getElementById('completedCount');
const totalMinutes = document.getElementById('totalMinutes');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.title = `${timeDisplay.textContent} - ${mode === 'work' ? 'Work' : 'Break'} | Pomodoro`;
}

function setMode(newMode) {
    if (isRunning) return;
    mode = newMode;
    timeLeft = mode === 'work' ? WORK_TIME : BREAK_TIME;

    document.body.className = mode === 'work' ? 'work-mode' : 'break-mode';
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

    updateDisplay();
}

function toggleTimer() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isRunning = true;
    startBtn.textContent = 'Pause';
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            completeSession();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    startBtn.textContent = 'Resume';
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = mode === 'work' ? WORK_TIME : BREAK_TIME;
    startBtn.textContent = 'Start';
    updateDisplay();
}

function completeSession() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';

    if (mode === 'work') {
        stats.completed++;
        stats.totalMinutes += 25;
        saveStats();
    }

    playSound();

    const sessionName = mode === 'work' ? 'Work session' : 'Break';
    alert(`${sessionName} complete! 🎉`);

    mode = mode === 'work' ? 'break' : 'work';
    setMode(mode);
}

function playSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) {}
}

function saveStats() {
    localStorage.setItem('pomodoro-stats', JSON.stringify(stats));
    renderStats();
}

function renderStats() {
    completedCount.textContent = stats.completed;
    totalMinutes.textContent = stats.totalMinutes;
}

startBtn.addEventListener('click', toggleTimer);

document.body.className = 'work-mode';
updateDisplay();
renderStats();
