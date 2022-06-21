const assert = require('assert'); 
const Room = require('../models/room.js'); 

describe('room', function () {
  let room; 
  beforeEach(function() {
    room = new Room(20, false);
  });

  it('should have an area', function() {
    const actual = room.area; 
    assert.strictEqual(actual, 20);  
  })

  it('should start not painted', function() {
    const actual = room.status; 
    assert.strictEqual(actual, false);
  })

  it('should be changed to be painted', function() {
    room.changeStatus(); 
    const actual = room.status;
    assert.strictEqual(actual, true);
  })

})