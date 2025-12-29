// ========== 2048 Game Module ==========
export const id = 'game2048';
export const name = '2048';

// ========== Game Constants ==========
const GRID_SIZE = 4;
const TILE_SIZE = 50;
const TILE_GAP = 4;
const BOARD_PADDING = 4;

const COLORS = {
  background: '#bbada0',
  empty: '#cdc1b4',
  tiles: {
    2: { bg: '#eee4da', text: '#776e65' },
    4: { bg: '#ede0c8', text: '#776e65' },
    8: { bg: '#f2b179', text: '#f9f6f2' },
    16: { bg: '#f59563', text: '#f9f6f2' },
    32: { bg: '#f67c5f', text: '#f9f6f2' },
    64: { bg: '#f65e3b', text: '#f9f6f2' },
    128: { bg: '#edcf72', text: '#f9f6f2' },
    256: { bg: '#edcc61', text: '#f9f6f2' },
    512: { bg: '#edc850', text: '#f9f6f2' },
    1024: { bg: '#edc53f', text: '#f9f6f2' },
    2048: { bg: '#edc22e', text: '#f9f6f2' }
  }
};

// ========== Game State ==========
let grid = [];
let score = 0;
let canvas = null;
let ctx = null;
let onScoreChange = null;
let gameOver = false;

// ========== Public Interface ==========
export function init(canvasEl, scoreCallback) {
  canvas = canvasEl;
  ctx = canvas.getContext('2d');
  onScoreChange = scoreCallback;
  reset();
}

export function reset() {
  grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0));
  score = 0;
  gameOver = false;
  if (onScoreChange) onScoreChange(score);
  addRandomTile();
  addRandomTile();
  draw();
}

export function start() {
  // 2048 doesn't need a game loop - it's turn-based
  draw();
}

export function pause() {
  // No-op for 2048 (turn-based game)
}

export function resume() {
  draw();
}

export function handleKey(key) {
  if (gameOver) return false;

  let moved = false;
  switch (key) {
    case 'ArrowUp':
      moved = moveUp();
      break;
    case 'ArrowDown':
      moved = moveDown();
      break;
    case 'ArrowLeft':
      moved = moveLeft();
      break;
    case 'ArrowRight':
      moved = moveRight();
      break;
    default:
      return false;
  }

  if (moved) {
    addRandomTile();
    draw();
    if (checkGameOver()) {
      gameOver = true;
      return 'gameover';
    }
  }
  return true;
}

export function isRunning() {
  return !gameOver;
}

export function getScore() {
  return score;
}

// ========== Movement Logic ==========
function moveLeft() {
  let moved = false;
  for (let row = 0; row < GRID_SIZE; row++) {
    const result = slideAndMerge(grid[row]);
    if (result.moved) moved = true;
    score += result.mergeScore;
    grid[row] = result.line;
  }
  if (moved && onScoreChange) onScoreChange(score);
  return moved;
}

function moveRight() {
  let moved = false;
  for (let row = 0; row < GRID_SIZE; row++) {
    const result = slideAndMerge(grid[row].slice().reverse());
    if (result.moved) moved = true;
    score += result.mergeScore;
    grid[row] = result.line.reverse();
  }
  if (moved && onScoreChange) onScoreChange(score);
  return moved;
}

function moveUp() {
  let moved = false;
  for (let col = 0; col < GRID_SIZE; col++) {
    const column = grid.map(row => row[col]);
    const result = slideAndMerge(column);
    if (result.moved) moved = true;
    score += result.mergeScore;
    for (let row = 0; row < GRID_SIZE; row++) {
      grid[row][col] = result.line[row];
    }
  }
  if (moved && onScoreChange) onScoreChange(score);
  return moved;
}

function moveDown() {
  let moved = false;
  for (let col = 0; col < GRID_SIZE; col++) {
    const column = grid.map(row => row[col]).reverse();
    const result = slideAndMerge(column);
    if (result.moved) moved = true;
    score += result.mergeScore;
    const newColumn = result.line.reverse();
    for (let row = 0; row < GRID_SIZE; row++) {
      grid[row][col] = newColumn[row];
    }
  }
  if (moved && onScoreChange) onScoreChange(score);
  return moved;
}

function slideAndMerge(line) {
  const original = line.slice();
  let mergeScore = 0;

  // Remove zeros
  let filtered = line.filter(x => x !== 0);

  // Merge adjacent equal tiles
  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i] === filtered[i + 1]) {
      filtered[i] *= 2;
      mergeScore += filtered[i];
      filtered.splice(i + 1, 1);
    }
  }

  // Pad with zeros
  while (filtered.length < GRID_SIZE) {
    filtered.push(0);
  }

  // Check if moved
  const moved = !original.every((val, idx) => val === filtered[idx]);

  return { line: filtered, moved, mergeScore };
}

// ========== Tile Management ==========
function addRandomTile() {
  const emptyCells = [];
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) {
        emptyCells.push({ row, col });
      }
    }
  }

  if (emptyCells.length > 0) {
    const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    grid[row][col] = Math.random() < 0.9 ? 2 : 4;
  }
}

function checkGameOver() {
  // Check for empty cells
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) return false;
    }
  }

  // Check for possible merges
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      const current = grid[row][col];
      // Check right
      if (col < GRID_SIZE - 1 && grid[row][col + 1] === current) return false;
      // Check down
      if (row < GRID_SIZE - 1 && grid[row + 1][col] === current) return false;
    }
  }

  return true;
}

// ========== Rendering ==========
function draw() {
  // Clear canvas with background
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw tiles
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      const value = grid[row][col];
      const x = BOARD_PADDING + col * (TILE_SIZE + TILE_GAP);
      const y = BOARD_PADDING + row * (TILE_SIZE + TILE_GAP);

      // Draw tile background
      if (value === 0) {
        ctx.fillStyle = COLORS.empty;
      } else {
        const tileColor = COLORS.tiles[value] || COLORS.tiles[2048];
        ctx.fillStyle = tileColor.bg;
      }

      roundRect(ctx, x, y, TILE_SIZE - TILE_GAP, TILE_SIZE - TILE_GAP, 4);
      ctx.fill();

      // Draw tile number
      if (value !== 0) {
        const tileColor = COLORS.tiles[value] || COLORS.tiles[2048];
        ctx.fillStyle = tileColor.text;
        ctx.font = value >= 1000 ? 'bold 16px Arial' : value >= 100 ? 'bold 20px Arial' : 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
          value.toString(),
          x + (TILE_SIZE - TILE_GAP) / 2,
          y + (TILE_SIZE - TILE_GAP) / 2
        );
      }
    }
  }
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
