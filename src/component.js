import GameArea from "./GameArea.js";
import { fontColor } from "./utils.js";
/*
* class function Component
*
*/
export default function component(width, height, color, x, y, type, obj) {
  this.type = type;
  this.score = 0;
  this.width = width;
  this.height = height;
  this.speed = 2;
  this.x = x;
  this.y = y;
  this.obj = obj;
  this.value = obj && obj.value ? obj.value : 0;
  this.gravity = 2;
  this.gravitySpeed = 0;
  this.arrayOfSize = [1];
  this.setColor = function(color) {
    this.color = color;
    this.fontColor = fontColor(color);
  }
  this.setColor(color);
  this.update = function() {
    let ctx = GameArea.context;
    let self = this;
    if (this.isChangingSize)
    self = this.sizeAlg();
    let {x , y, width, height} = self;
    if (this.type == "text") {
      ctx.font = width + " " + height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, x, y);
    }  else if (this.value) {
      ctx.fillStyle = this.color;
      ctx.roundRect(x, y, width, height, 20, true, false);
      let size = 0.5 * width;
      ctx.font = "bold " + size + "px monospace";
      ctx.fillStyle = this.fontColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.value, x + (width / 2), y + (height / 2));
    }
    else if (this.type == "roundRect") {
      ctx.fillStyle = this.color;
      ctx.roundRect(x, y, width, height, 20, true, false);
    }
    else {
      ctx.fillStyle = this.color;
      ctx.fillRect(x, y, width, height);
    }
  }
  this.moveTo = function(desiredX, desiredY) {
    this.gravitySpeed += this.gravity;
    let speed = (this.speed + this.gravitySpeed);
    let movementX = desiredX - this.x;
    let movementY = desiredY - this.y;
    if (movementX >= speed || movementX <= speed * -1)
    this.x += speed * (movementX > 0 ? 1 : -1) ;
    else
    this.x = desiredX;
    if (movementY >= speed || movementY <= speed * -1)
    this.y += speed * (movementY > 0 ? 1 : -1);
    else
    this.y = desiredY;
    if (this.x === desiredX && this.y === desiredY) {
      this.gravitySpeed = 0;
    }
  }
  this.changeSize = function(arrayOfSize, speed = 2) {
    if (!arrayOfSize)
    arrayOfSize = this.arrayOfSize;
    this.isChangingSize = 1;
    this.arrayOfSize = arrayOfSize;
    this.currentSize = this.width * arrayOfSize[0];
    this.arrayOfSize.splice(0, 1);
    this.sizeChangeSpeed = speed;
  }
  this.sizeAlg = function() {
    let {x , y, width, height, isChangingSize, arrayOfSize, currentSize, sizeChangeSpeed, gravitySpeed} = this;
    if (currentSize * isChangingSize >= arrayOfSize[0] * width)
      arrayOfSize.splice(0, 1);
    if (arrayOfSize.length === 0)
    isChangingSize = 0;
    else
    isChangingSize = currentSize - arrayOfSize[0] * width < 0 ? 1 : -1;
    currentSize = currentSize + ((sizeChangeSpeed + gravitySpeed) * isChangingSize);
    x = x + (width - currentSize) / 2;
    y = y + (width - currentSize) / 2;
    width = currentSize;
    height = currentSize;
    this.currentSize = currentSize;
    this.isChangingSize = isChangingSize;
    return {x , y, width, height};
  }
}
