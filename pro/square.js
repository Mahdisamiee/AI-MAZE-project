class Square {
  constructor(type,x,y){
    this.type = type;
    this.x = x;
    this.y = y;
    this.isVisitd = false;
    this.neighbors = [];
    this.parent = null;
  }
  // methods
  addNeighbor(square){
    this.neighbors.push(square)
  }


}