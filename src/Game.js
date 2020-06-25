import config from "./config.js";
import { move } from "./GameAlgorithm.js";
var Game = {
  inputBuffer: [],
  grid: [],
  plainGrid: [],
  addToBuffer: function(direction) {
    if (this.inputBuffer.length > 5)
    this.inputBuffer[5] = direction;
    else
    this.inputBuffer.push(direction);
  },
  removeFromBuffer: function() {
    this.inputBuffer.splice(0, 1);
  },
  next() {
    if (this.inputBuffer.length) {
      this.plainGrid.forEach(item => {
        item.hasChanged = false;
        item.eat = null;
      });
      this.grid = move(this.inputBuffer[0], this.grid);
      this.generatePlainGrid();
      this.removeFromBuffer();
      this.changeValueOfRandomElement(this.plainGrid, 2);
    }
  },
  onStart: function() {
    window.onkeydown = (event) => {
      if (event.code === "KeyA" || event.code === "KeyQ" || event.code === "ArrowLeft")
      this.addToBuffer("left");
      else if (event.code === "KeyW" || event.code === "KeyZ" || event.code === "ArrowUp")
      this.addToBuffer("up");
      else if (event.code === "KeyD" || event.code === "ArrowRight")
      this.addToBuffer("right");
      else if (event.code === "KeyS" || event.code === "ArrowDown")
      this.addToBuffer("down");
      else
      return;
      event.preventDefault();
    }
    this.generateGrid();
    this.changeValueOfRandomElement(this.plainGrid, 4);
    this.changeValueOfRandomElement(this.plainGrid, 2);
  },
  changeValueOfRandomElement: function(elements, value) {
    let array = elements.filter(item => item.value === 0);
    const randomElement = array[Math.floor(Math.random() * array.length)];
    randomElement.value = value;
  },
  generateGrid: function() {
    for(var i = 0; i < config.grid; i++) {
      if (!this.grid)
      this.grid = [];
      let inGrid = [];
      for(var j = 0; j < config.grid; j++) {
        let obj = {value: 0, y: i, x: j};
        inGrid.push(obj);
        this.plainGrid.push(obj);
      }
      this.grid.push(inGrid);
    }
  },
  generatePlainGrid: function() {
    this.plainGrid = [];
    for(var i = 0; i < this.grid.length; i++) {
      for(var j = 0; j < this.grid[i].length; j++) {
        this.plainGrid.push(this.grid[i][j]);
      }
    }
  }
}
export default Game;
