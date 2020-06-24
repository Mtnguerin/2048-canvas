import randomColor from "randomcolor";
export function ColorGenerator() {
  this.colors = {},
  this.createColor = function(value) {
    let color = randomColor({luminosity: 'light', format: 'rgb'});
    return color;
  },
  this.getColor = function(value) {
    if (!this.colors[value])
    this.colors[value] = this.createColor(value);
    return this.colors[value];
  }
}
