class Graph {
  constructor() {
    this.squares = [];
    this.graph = new Map();
    this.goal = null;
    this.start = null;
  }

  setGoal(x, y) {
    this.goal = this.graph.get({ x, y });
  }
  setStart(x, y) {
    this.start = this.graph.get({ x, y });
  }
  addSquare(square) {
    this.squares.push(square);
    let x = square.x;
    let y = square.y;
    let key = { x: x, y: y };
    this.graph.set(JSON.stringify(key), square);
    // console.log(this.graph.get({ x: 1, y: 2 }));
  }
  getSquare(x, y) {
    return this.graph.get(JSON.stringify({ x: x, y: y }));
  }
}
