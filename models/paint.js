const Paint = function(volume, empty = false) {
    this.volume = volume;
    this.empty = empty;
  };

Paint.prototype.checkEmpty = function() {
  if (this.volume === 0) {
    this.empty = true;
  };
};

Paint.prototype.emptyPaint = function() {
  this.volume = 0; 
};

module.exports = Paint;