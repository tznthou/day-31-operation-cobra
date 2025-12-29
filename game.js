// ========== Import Skins ==========
import * as googleSkin from './skins/google.js';
import * as excelSkin from './skins/excel.js';
import * as jiraSkin from './skins/jira.js';
import * as slackSkin from './skins/slack.js';
import * as notionSkin from './skins/notion.js';
import * as vscodeSkin from './skins/vscode.js';

// ========== Game Constants ==========
const GRID_SIZE = 10;
const GRID_COUNT = 20;
const GAME_SPEED = 150;

// ========== Game State ==========
const GameState = {
  READY: 'ready',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAME_OVER: 'over'
};

let state = GameState.READY;
let snake = [];
let food = { x: 0, y: 0 };
let direction = 'right';
let nextDirection = 'right';
let score = 0;
let gameLoop = null;

// ========== Skin System ==========
const SKINS = {
  '1': googleSkin,
  '2': excelSkin,
  '3': jiraSkin,
  '4': slackSkin,
  '5': notionSkin,
  '6': vscodeSkin
};

let currentSkin = 'google';

// ========== DOM Elements ==========
const skinContainer = document.getElementById('skin-container');
const canvas = document.getElementById('snake-canvas');
const ctx = canvas.getContext('2d');
const widget = document.getElementById('game-widget');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('game-message');
const clockTime = document.getElementById('clock-time');
const clockDate = document.getElementById('clock-date');
const pageTitle = document.getElementById('page-title');

// ========== Colors ==========
const COLORS = {
  background: '#f0f0f0',
  snakeHead: '#2d5a27',
  snakeBody: '#4a8b3c',
  food: '#c0392b'
};

// ========== Skin Functions ==========
function loadSkin(skin) {
  skinContainer.innerHTML = `<div id="skin-${skin.id}" class="skin active">${skin.html}</div>`;
  currentSkin = skin.id;
  document.body.dataset.skin = skin.id;
  pageTitle.textContent = skin.title;
}

function switchSkin(skinKey) {
  const skin = SKINS[skinKey];
  if (!skin || skin.id === currentSkin) return;
  loadSkin(skin);
}

// ========== Game Functions ==========
function initGame() {
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ];
  direction = 'right';
  nextDirection = 'right';
  score = 0;
  scoreDisplay.textContent = '0';
  spawnFood();
  draw();
}

function spawnFood() {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * GRID_COUNT),
      y: Math.floor(Math.random() * GRID_COUNT)
    };
  } while (isOnSnake(newFood));
  food = newFood;
}

function isOnSnake(pos) {
  return snake.some(segment => segment.x === pos.x && segment.y === pos.y);
}

function update() {
  if (state !== GameState.PLAYING) return;

  direction = nextDirection;

  // Calculate new head position
  const head = { ...snake[0] };
  switch (direction) {
    case 'up': head.y--; break;
    case 'down': head.y++; break;
    case 'left': head.x--; break;
    case 'right': head.x++; break;
  }

  // Check collision
  if (checkCollision(head)) {
    gameOver();
    return;
  }

  // Add new head
  snake.unshift(head);

  // Check food
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreDisplay.textContent = score;
    spawnFood();
  } else {
    snake.pop();
  }

  draw();
}

function checkCollision(head) {
  // Wall collision
  if (head.x < 0 || head.x >= GRID_COUNT || head.y < 0 || head.y >= GRID_COUNT) {
    return true;
  }
  // Self collision
  for (let i = 0; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function draw() {
  // Clear canvas
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw food
  ctx.fillStyle = COLORS.food;
  ctx.beginPath();
  ctx.arc(
    food.x * GRID_SIZE + GRID_SIZE / 2,
    food.y * GRID_SIZE + GRID_SIZE / 2,
    GRID_SIZE / 2 - 1,
    0,
    Math.PI * 2
  );
  ctx.fill();

  // Draw snake
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? COLORS.snakeHead : COLORS.snakeBody;
    ctx.fillRect(
      segment.x * GRID_SIZE + 1,
      segment.y * GRID_SIZE + 1,
      GRID_SIZE - 2,
      GRID_SIZE - 2
    );
  });
}

function startGame() {
  if (state === GameState.READY || state === GameState.GAME_OVER) {
    initGame();
    state = GameState.PLAYING;
    messageDisplay.textContent = '';
    gameLoop = setInterval(update, GAME_SPEED);
  }
}

function gameOver() {
  state = GameState.GAME_OVER;
  clearInterval(gameLoop);
  gameLoop = null;
  messageDisplay.textContent = '遊戲結束！按任意鍵重玩';
}

function togglePause() {
  if (state === GameState.PLAYING) {
    state = GameState.PAUSED;
    clearInterval(gameLoop);
    gameLoop = null;
    widget.classList.add('hidden');
    updateClock();
  } else if (state === GameState.PAUSED) {
    state = GameState.PLAYING;
    widget.classList.remove('hidden');
    gameLoop = setInterval(update, GAME_SPEED);
  }
}

// ========== Clock Functions ==========
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockTime.textContent = `${hours}:${minutes}:${seconds}`;

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = weekdays[now.getDay()];
  clockDate.textContent = `${year}年${month}月${day}日 週${weekday}`;
}

// Update clock every second when hidden
setInterval(() => {
  if (state === GameState.PAUSED) {
    updateClock();
  }
}, 1000);

// ========== Input Handling ==========
document.addEventListener('keydown', (e) => {
  // Skin switching (1, 2, 3)
  if (SKINS[e.key]) {
    switchSkin(e.key);
    return;
  }

  // Escape key - toggle pause/hide
  if (e.key === 'Escape') {
    e.preventDefault();
    if (state === GameState.PLAYING || state === GameState.PAUSED) {
      togglePause();
    }
    return;
  }

  // Direction keys
  const directions = {
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'ArrowLeft': 'left',
    'ArrowRight': 'right'
  };

  if (directions[e.key]) {
    e.preventDefault();

    // Start game if ready
    if (state === GameState.READY) {
      startGame();
    }

    // Set direction (prevent 180° turn)
    const opposites = { up: 'down', down: 'up', left: 'right', right: 'left' };
    const newDir = directions[e.key];
    if (newDir !== opposites[direction]) {
      nextDirection = newDir;
    }
    return;
  }

  // Any key to restart after game over (except skin keys)
  if (state === GameState.GAME_OVER && !SKINS[e.key]) {
    startGame();
  }
});

// ========== Initialize ==========
loadSkin(googleSkin); // 預設載入 Google 皮膚
initGame();
updateClock();
