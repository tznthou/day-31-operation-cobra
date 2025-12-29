// ========== Snake Game Module ==========
export const id = 'snake';
export const name = '貪食蛇';

// ========== Game Constants ==========
const CANVAS_SIZE = 200;
const GRID_COUNT = 20;
const GRID_SIZE = CANVAS_SIZE / GRID_COUNT; // = 10px per cell
const GAME_SPEED = 150; // ms per frame

// 遊戲參數
const INITIAL_SNAKE_LENGTH = 3;
const SCORE_PER_FOOD = 10;

// 繪圖參數
const CELL_PADDING = 1; // 格子內縮（視覺間距）
const FOOD_RADIUS_OFFSET = 1; // 食物半徑內縮

const COLORS = {
  background: '#f0f0f0',
  snakeHead: '#2d5a27',
  snakeBody: '#4a8b3c',
  food: '#c0392b'
};

// ========== Game State ==========
let snake = [];
let food = { x: 0, y: 0 };
let direction = 'right';
let nextDirection = 'right';
let score = 0;
let gameLoop = null;
let canvas = null;
let ctx = null;
let onScoreChange = null;
let onGameOver = null;

// ========== Public Interface ==========
export function init(canvasEl, callbacks) {
  canvas = canvasEl;
  ctx = canvas.getContext('2d');
  onScoreChange = callbacks.onScoreChange;
  onGameOver = callbacks.onGameOver;
  reset();
}

export function reset() {
  // 初始蛇位置：從中心點向左延伸
  const centerX = Math.floor(GRID_COUNT / 2);
  const centerY = Math.floor(GRID_COUNT / 2);
  snake = [];
  for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
    snake.push({ x: centerX - i, y: centerY });
  }
  direction = 'right';
  nextDirection = 'right';
  score = 0;
  if (onScoreChange) onScoreChange(score);
  spawnFood();
  draw();
}

export function start() {
  if (gameLoop) return;
  gameLoop = setInterval(update, GAME_SPEED);
}

export function pause() {
  if (gameLoop) {
    clearInterval(gameLoop);
    gameLoop = null;
  }
}

export function resume() {
  if (!gameLoop) {
    gameLoop = setInterval(update, GAME_SPEED);
  }
}

export function handleKey(key) {
  const directions = {
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'ArrowLeft': 'left',
    'ArrowRight': 'right'
  };

  if (directions[key]) {
    const opposites = { up: 'down', down: 'up', left: 'right', right: 'left' };
    const newDir = directions[key];
    // 檢查 nextDirection 防止快速連按導致 180° 反轉
    if (newDir !== opposites[nextDirection]) {
      nextDirection = newDir;
    }
    return true; // key was handled
  }
  return false;
}

export function isRunning() {
  return gameLoop !== null;
}

export function getScore() {
  return score;
}

// ========== Internal Functions ==========
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
    pause();
    if (onGameOver) onGameOver();
    return 'gameover';
  }

  // Add new head
  snake.unshift(head);

  // Check food
  if (head.x === food.x && head.y === food.y) {
    score += SCORE_PER_FOOD;
    if (onScoreChange) onScoreChange(score);
    spawnFood();
  } else {
    snake.pop();
  }

  draw();
  return 'playing';
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
    GRID_SIZE / 2 - FOOD_RADIUS_OFFSET,
    0,
    Math.PI * 2
  );
  ctx.fill();

  // Draw snake
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? COLORS.snakeHead : COLORS.snakeBody;
    ctx.fillRect(
      segment.x * GRID_SIZE + CELL_PADDING,
      segment.y * GRID_SIZE + CELL_PADDING,
      GRID_SIZE - CELL_PADDING * 2,
      GRID_SIZE - CELL_PADDING * 2
    );
  });
}
