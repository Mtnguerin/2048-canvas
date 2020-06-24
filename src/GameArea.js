import component from "./component.js";
import config from "./config.js";
import Game from "./Game.js";
import {ColorGenerator} from "./GameStyle.js"
var GameArea = {
  canvas : document.createElement("canvas"),
  game: Game,
  colorGenerator: new ColorGenerator(),
  start : function() {
    this.canvas.width = config.width;
    this.canvas.height = config.height;
    this.context = this.canvas.getContext("2d");
    this.background = new component(config.width, config.height, "darkgrey", 0, 0);
    Game.onStart();
    this.generateBackGrid();
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(this.update.bind(this), 20);
  },
  generateBackGrid: function() {
    let height = config.height / config.grid;
    let width = config.width / config.grid;
    let {otherMargin, margin} = config;
    this.backGrid = [];
    this.game.grid.forEach((item, keyy) => {
      let y = (keyy * height);
      item.forEach((item2, keyx) => {
        let x = (keyx * width);
        let comp = new component(height + otherMargin, width + otherMargin, "lightgrey", x + margin, y + margin, "roundRect");
        this.backGrid.push(comp);
      })
    });
    },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  update: function() {
    let height = config.height / config.grid;
    let width = config.width / config.grid;
    let {otherMargin, margin} = config;
    this.clear();
    this.frameNo += 1;
    this.background.update();
    this.backGrid.forEach(elem => elem.update());
    let isMoving = false;
    this.game.plainGrid.forEach(item => {
      let desiredY = 0;
      let desiredX = 0;
      if (item.value !== 0) {
        desiredX = item.x * width + margin;
        desiredY = item.y * width + margin;
      }
      if (item && item.component) {
        if (item.component.x !== desiredX || item.component.y !== desiredY) {
          item.component.moveTo(desiredX, desiredY);
          isMoving = true;
          if (item.eat && item.eat.component) {
            item.eat.component.moveTo(desiredX, desiredY);
            item.eat.component.update();
          }
        } else {
          item.component.setColor(this.colorGenerator.getColor(item.value));
          item.component.value = item.value;
          if (item.eat && item.eat.component)
          item.component.changeSize([1, 1.2, 1]);
          item.eat = null;
        }
        item.component.update();
      }
    })
    this.game.plainGrid.forEach(item => {
      let desiredY = 0;
      let desiredX = 0;
      if (item.value !== 0) {
        desiredX = item.x * width + margin;
        desiredY = item.y * width + margin;
      }
      if (item && item.value !== 0 && !item.component && !isMoving){
        item.component = new component(height + otherMargin, width + otherMargin, this.colorGenerator.getColor(item.value), desiredX, desiredY, null, item);
        item.component.changeSize([0, 1], 10);
      }
    })
    if (!isMoving) {
      this.game.next();
    }
  }
}
export default GameArea
