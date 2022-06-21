const assert = require('assert'); 
const Paint = require('../models/paint.js'); 

describe('paint', function () {
    let paint; 
    beforeEach(function() {
      paint = new Paint(5);
    });
  
    it('should have a number of litres', function() {
      const actual = paint.volume; 
      assert.strictEqual(actual, 5);  
    })
  
    it('should check if empty', function() {
      paint = new Paint(0);
      paint.checkEmpty();
      const actual = paint.empty; 
      assert.strictEqual(actual, true);
    })
  
    it('should be able to empty itself', function() {
      paint.emptyPaint(); 
      const actual = paint.volume;
      assert.strictEqual(actual, 0);
    })
  
  }) 