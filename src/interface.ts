interface TV {
  id: number;
  turnOn(): boolean;
  turnOff(): void;
}

const myTV: TV = {
  id: 1,
  turnOn() {
    console.log('turnOn');
    return true;
  },
  turnOff() {
    console.log('turnOff');
  },
};

myTV.turnOn();

interface Cell {
  row: number;
  col: number;
  piece?: Piece;
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard(): Cell[] {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row,
        col,
      });
    }
  }
  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
