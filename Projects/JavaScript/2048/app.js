class Game {
    constructor() {
        this.grid = this.createEmptyGrid();
        this.score = 0;
        this.timer = 0;
        this.gameStarted = false;
        this.initEventListeners();
        this.startNewGame();
    }

    createEmptyGrid() {
        return Array(4).fill().map(() => Array(4).fill(0));
    }

    startNewGame() {
        this.grid = this.createEmptyGrid();
        this.addRandomTile();
        this.addRandomTile();
        this.score = 0;
        this.timer = 0;
        this.updateUI();
        if (!this.gameStarted) {
            this.gameStarted = true;
            this.startTimer();
        }
    }

    addTile2048() {
        let emptyTiles = [];
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === 0) {
                    emptyTiles.push({x: i, y: j});
                }
            }
        }
        if (emptyTiles.length > 0) {
            const randomTileIndex = Math.floor(Math.random() * emptyTiles.length);
            const tile = emptyTiles[randomTileIndex];
            this.grid[tile.x][tile.y] = 2048;
            this.updateUI();
        }
    }

    initEventListeners() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.moveUp();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowRight':
                    this.moveRight();
                    break;
            }
            this.updateUI();
        });
    }

    moveUp() {
        let moved = false;
        for (let col = 0; col < 4; col++) {
            for (let row = 1; row < 4; row++) {
                if (this.grid[row][col] !== 0) {
                    let newRow = row;
                    while (newRow > 0 && this.grid[newRow - 1][col] === 0) {
                        newRow--;
                    }
                    if (newRow > 0 && this.grid[newRow - 1][col] === this.grid[row][col]) {
                        this.grid[newRow - 1][col] *= 2;
                        this.score += this.grid[newRow - 1][col];
                        this.grid[row][col] = 0;
                        moved = true;
                    } else if (newRow !== row) {
                        this.grid[newRow][col] = this.grid[row][col];
                        this.grid[row][col] = 0;
                        moved = true;
                    }
                }
            }
        }
        if (moved) {
            this.addRandomTile();
            this.updateUI();
        }
    }

    moveDown() {
        let moved = false;
        for (let col = 0; col < 4; col++) {
            for (let row = 2; row >= 0; row--) {
                if (this.grid[row][col] !== 0) {
                    let newRow = row;
                    while (newRow < 3 && this.grid[newRow + 1][col] === 0) {
                        newRow++;
                    }
                    if (newRow < 3 && this.grid[newRow + 1][col] === this.grid[row][col]) {
                        this.grid[newRow + 1][col] *= 2;
                        this.score += this.grid[newRow + 1][col];
                        this.grid[row][col] = 0;
                        moved = true;
                    } else if (newRow !== row) {
                        this.grid[newRow][col] = this.grid[row][col];
                        this.grid[row][col] = 0;
                        moved = true;
                    }
                }
            }
        }
        if (moved) {
            this.addRandomTile();
            this.updateUI();
            this.checkGameOver();
        }
    }

    moveLeft() {
        let moved = false;
        for (let row = 0; row < 4; row++) {
            for (let col = 1; col < 4; col++) {
                if (this.grid[row][col] !== 0) {
                    let newCol = col;
                    while (newCol > 0 && this.grid[row][newCol - 1] === 0) {
                        newCol--;
                    }
                    if (newCol > 0 && this.grid[row][newCol - 1] === this.grid[row][col]) {
                        this.grid[row][newCol - 1] *= 2;
                        this.score += this.grid[row][newCol - 1];
                        this.grid[row][col] = 0;
                        moved = true;
                    } else if (newCol !== col) {
                        this.grid[row][newCol] = this.grid[row][col];
                        this.grid[row][col] = 0;
                        moved = true;
                    }
                }
            }
        }
        if (moved) {
            this.addRandomTile();
            this.updateUI();
            this.checkGameOver();
        }
    }

    moveRight() {
        let moved = false;
        for (let row = 0; row < 4; row++) {
            for (let col = 2; col >= 0; col--) {
                if (this.grid[row][col] !== 0) {
                    let newCol = col;
                    while (newCol < 3 && this.grid[row][newCol + 1] === 0) {
                        newCol++;
                    }
                    if (newCol < 3 && this.grid[row][newCol + 1] === this.grid[row][col]) {
                        this.grid[row][newCol + 1] *= 2;
                        this.score += this.grid[row][newCol + 1];
                        this.grid[row][col] = 0;
                        moved = true;
                    } else if (newCol !== col) {
                        this.grid[row][newCol] = this.grid[row][col];
                        this.grid[row][col] = 0;
                        moved = true;
                    }
                }
            }
        }
        if (moved) {
            this.addRandomTile();
            this.updateUI();
            this.checkGameOver();
        }
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timer++;
            document.getElementById('time').textContent = `${this.timer} secondes`;
        }, 1000);
    }

    addRandomTile() {
        let emptyTiles = [];
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === 0) {
                    emptyTiles.push({x: i, y: j});
                }
            }
        }
        if (emptyTiles.length > 0) {
            const randomTileIndex = Math.floor(Math.random() * emptyTiles.length);
            const tile = emptyTiles[randomTileIndex];
            this.grid[tile.x][tile.y] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    updateUI() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let tile = document.getElementById(`tile-${i * 4 + j + 1}`);
                let value = this.grid[i][j];
                tile.className = 'tile';
                if (value > 0) {
                    tile.classList.add(`tile-${value}`);
                    tile.textContent = value;
                } else {
                    tile.textContent = '';
                }
            }
        }
        document.getElementById('score').textContent = this.score;
        document.getElementById('time').textContent = `${this.timer} secondes`;
    }

    isGameOver() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === 0) {
                    return false;
                }
                if (j < this.grid.length - 1 && this.grid[i][j] === this.grid[i][j + 1]) {
                    return false;
                }
                if (i < this.grid.length - 1 && this.grid[i][j] === this.grid[i + 1][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    checkGameOver() {
        if (this.isGameOver()) {
            clearInterval(this.timerInterval); // Arrêter le timer
            alert("Game Over! Score final : " + this.score);
        }
    }
}