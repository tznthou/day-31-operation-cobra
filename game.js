// ========== Import Skins ==========
import * as googleSkin from './skins/google.js';
import * as excelSkin from './skins/excel.js';
import * as jiraSkin from './skins/jira.js';
import * as slackSkin from './skins/slack.js';
import * as notionSkin from './skins/notion.js';
import * as vscodeSkin from './skins/vscode.js';

// ========== Import Games ==========
import * as snakeGame from './games/snake.js';
import * as game2048 from './games/game2048.js';

// ========== Constants ==========
const CLOCK_UPDATE_INTERVAL = 1000; // ms

// ========== Game State ==========
const GameState = {
  READY: 'ready',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAME_OVER: 'over'
};

let state = GameState.READY;
let clockTimer = null; // 時鐘計時器（只在暫停時執行）

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

// ========== Game System ==========
const GAMES = {
  'snake': snakeGame,
  '2048': game2048
};

let currentGame = null;
let currentGameId = 'snake';

// ========== DOM Elements ==========
const skinContainer = document.getElementById('skin-container');
const canvas = document.getElementById('snake-canvas');
const widget = document.getElementById('game-widget');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('game-message');
const clockTime = document.getElementById('clock-time');
const clockDate = document.getElementById('clock-date');
const pageTitle = document.getElementById('page-title');
const gameName = document.getElementById('game-name');

// ========== URL Parameter Handling ==========
function getGameFromURL() {
  const params = new URLSearchParams(window.location.search);
  const gameParam = params.get('game');
  if (gameParam && GAMES[gameParam]) {
    return gameParam;
  }
  return 'snake'; // default
}

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
function loadGame(gameId) {
  const game = GAMES[gameId];
  if (!game) return;

  // Stop current game if running
  if (currentGame && currentGame.pause) {
    currentGame.pause();
  }

  currentGame = game;
  currentGameId = gameId;
  state = GameState.READY;

  // Update game name in widget header
  if (gameName) {
    gameName.textContent = game.name;
  }

  // Initialize game with callbacks
  currentGame.init(canvas, {
    onScoreChange: (newScore) => {
      scoreDisplay.textContent = newScore;
    },
    onGameOver: () => {
      gameOver();
    }
  });

  messageDisplay.textContent = '按方向鍵開始';
}

function switchGame(gameId) {
  if (gameId === currentGameId) return;
  loadGame(gameId);

  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('game', gameId);
  window.history.replaceState({}, '', url);
}

function startGame() {
  if (state === GameState.READY || state === GameState.GAME_OVER) {
    currentGame.reset();
    currentGame.start();
    state = GameState.PLAYING;
    messageDisplay.textContent = '';
  }
}

function gameOver() {
  state = GameState.GAME_OVER;
  currentGame.pause();
  messageDisplay.textContent = '遊戲結束！按任意鍵重玩';
}

function togglePause() {
  if (state === GameState.PLAYING) {
    state = GameState.PAUSED;
    currentGame.pause();
    widget.classList.add('hidden');
    updateClock();
    // 啟動時鐘計時器
    clockTimer = setInterval(updateClock, CLOCK_UPDATE_INTERVAL);
  } else if (state === GameState.PAUSED) {
    state = GameState.PLAYING;
    widget.classList.remove('hidden');
    // 停止時鐘計時器
    if (clockTimer) {
      clearInterval(clockTimer);
      clockTimer = null;
    }
    currentGame.resume();
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

// ========== Input Handling ==========
document.addEventListener('keydown', (e) => {
  // Skin switching (1-6) - only when NOT holding Shift
  if (!e.shiftKey && SKINS[e.key]) {
    switchSkin(e.key);
    return;
  }

  // Game switching (Shift + G to cycle, or Shift + 1/2)
  if (e.shiftKey) {
    if (e.key === 'G' || e.key === 'g') {
      // Cycle through games
      const gameIds = Object.keys(GAMES);
      const currentIndex = gameIds.indexOf(currentGameId);
      const nextIndex = (currentIndex + 1) % gameIds.length;
      switchGame(gameIds[nextIndex]);
      return;
    }
    if (e.key === '!') { // Shift+1
      switchGame('snake');
      return;
    }
    if (e.key === '@') { // Shift+2
      switchGame('2048');
      return;
    }
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
  const isArrowKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key);

  if (isArrowKey) {
    e.preventDefault();

    // Start game if ready or restart after game over
    if (state === GameState.READY || state === GameState.GAME_OVER) {
      startGame();
    }

    // Pass to current game (game over is handled via callback)
    if (state === GameState.PLAYING) {
      currentGame.handleKey(e.key);
    }
    return;
  }

  // Any other key to restart after game over (except skin keys and special keys)
  if (state === GameState.GAME_OVER && !SKINS[e.key] && !e.shiftKey) {
    startGame();
  }
});

// ========== Initialize ==========
loadSkin(googleSkin); // 預設載入 Google 皮膚
loadGame(getGameFromURL()); // 從 URL 參數載入遊戲
updateClock();
