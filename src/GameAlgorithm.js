/**
* 2048 algorithm on array
* @param {String} direction ("left", "right", "down", "up")
* @param {Array of Array of Object} position Example [[{x: 0, y: 0,value: 0},{x: 1, y: 0,value: 0},{x: 2, y: 0,value: 0},{x: 3, y: 0,value: 2}],...]
* @return {Array of Array of Object} return same array of array of object with x and y updated and some new variables Object.eat and Object.hasChanged
*/

export function move(direction, position) {
  let toRight = 0;
  let toDown = 0;
  if (direction == "right") {
    toRight = 1;
  }
  if (direction == "left") {
    toRight = -1;
  }
  if (direction == "up") {
    toDown = -1;
  }
  if (direction == "down") {
    toDown = 1;
  }
  let change = false;
  let startY = 0;
  let startX = 0;
  let addY = 1;
  let addX = 1;
  if (toDown == 1) {
    addY = -1;
    startY = position.length - 1;
  }
  if (toRight == 1) {
    addX = -1;
    startX = position.length - 1;
  }
  for(let y = startY; y != startY + addY * position.length; y = y + addY) {
    for(let x = startX; x != startX + addX * position[y].length; x = x + addX) {
      if ((toRight || toDown) && position[y + toDown] && position[y][x] && position[y][x].value && position[y + toDown][x + toRight]) {
        let action = false;
        if (position[y + toDown][x + toRight].value === 0) {
          position[y][x].value *= 1;
          action = true;
        }
        if (!position[y][x].hasChanged && !position[y + toDown][x + toRight].canMove && !position[y + toDown][x + toRight].hasChanged && position[y + toDown][x + toRight].value === position[y][x].value) {
          position[y][x].value *= 2;
          position[y][x].hasChanged = true;
          action = true;
        }
        if (action) {
          let last = position[y + toDown][x + toRight];
          last = {component: last.component, value: last.value};
          position[y][x].x = x + toRight;
          position[y][x].y = y + toDown;
          position[y][x].eat = last;
          position[y + toDown][x + toRight] = position[y][x];
          position[y][x] = {value: 0, x, y};
          change = true;
        }
      }
    }
  }
  if (change) {
    position = move(direction, position);
  }
  return position;
}
