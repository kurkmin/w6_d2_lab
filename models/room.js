const Room = function(area, status = false) {
  this.area = area;
  this.status = status
};

Room.prototype.changeStatus = function() {
  this.status = true
};

module.exports = Room;