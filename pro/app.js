let xrange = 5,
  yrange = 5;
let graph = new Graph();
function setup(params) {
  // create graph
  for (let i = 0; i < xrange; i++) {
    for (let j = 0; j < yrange; j++) {
      let ns = graph.getSquare(i, j);
      if (ns == undefined) ns = new Square("empty", i, j);
      graph.addSquare(ns);
    }
  }

  for (let i = 0; i < xrange; i++) {
    for (let j = 0; j < yrange; j++) {
      checkInsertNeighbors(i, j);
    }
  }

  // console.log(graph);
  // console.log(graph.getSquare(1,4) == undefined)
  // console.log(graph);
}

setup();

/**
 * "check" and "insert" neighbors to a square
 */
function checkInsertNeighbors(i, j) {
  let s = graph.getSquare(i, j);
  let up = j + 1;
  let down = j - 1;
  let left = i - 1;
  let rigth = i + 1;
  if (up < yrange) {
    s.addNeighbor(graph.getSquare(i, up));
  }
  if (down >= 0) {
    s.addNeighbor(graph.getSquare(i, down));
  }
  if (rigth < xrange) {
    s.addNeighbor(graph.getSquare(rigth, j));
  }
  if (left >= 0) {
    s.addNeighbor(graph.getSquare(left, j));
  }
}
