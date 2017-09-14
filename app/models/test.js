var chai = require('chai');
var assert = chai.assert;

var ttt = require("./board.js");

describe('current_playerIs', function() {
  it('current player is x at start of game', function() {
   
    assert.equal("x",ttt.current_player);
  });

});