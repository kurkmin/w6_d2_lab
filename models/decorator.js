const Room = require("./room");

const Decorator = function() {
    this.stock = [];
  };

Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
}

Decorator.prototype.calculateTotalPaint = function() {
  total_paint = 0;  
  for (paint of this.stock) {
    total_paint = total_paint + paint.volume 
  };
  return total_paint
}

Decorator.prototype.checkPaintStock = function(room) {
  if (this.calculateTotalPaint() >= room.area) {
    return true 
  }
}

Decorator.prototype.paintRoom = function(room) {
  if (this.checkPaintStock(room) == true) {
    room.status = true; 
  }
}
module.exports = Decorator;