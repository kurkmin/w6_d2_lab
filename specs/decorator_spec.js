const assert = require('assert'); 
const Decorator = require('../models/decorator.js'); 
const Paint = require('../models/paint.js'); 
const Room = require('../models/room.js'); 

describe('decorator', function () {
    let decorator; 
    beforeEach(function() {
      decorator = new Decorator();
      paint1 = new Paint(4);
      paint2 = new Paint(3);
      room = new Room(5);
    });
  
    it('should have an empty paint stock', function() {
      const actual = decorator.stock; 
      assert.deepStrictEqual(actual, []);  
    })
  
    it('should be able to add a can of paint', function() {
      decorator.addPaint(paint1);
      const actual = decorator.stock; 
      assert.deepStrictEqual(actual, [paint1]);
    })
  
    it('should be able calculate total paint', function() {
      decorator.addPaint(paint1);
      decorator.addPaint(paint2);
      const actual = decorator.calculateTotalPaint(); 
      assert.strictEqual(actual, 7);
    })


    it('should be able calculate if enough paint for a room', function() {
      decorator.addPaint(paint1);
      decorator.addPaint(paint2);
      const actual = decorator.checkPaintStock(room); 
      assert.strictEqual(actual, true);
    })

    it('should be able to paint room if enough paint in stock', function() {
      decorator.addPaint(paint1);
      decorator.addPaint(paint2);
      decorator.paintRoom(room);
      const actual = room.status;
      assert.strictEqual(actual, true);
    })

  });